import 'whatwg-fetch';
import 'velocity-animate';

import articles from '../../data/articles/articles';
import { Define, UmWebComponent } from "components/um-web.component";

declare const $: any;

import template from './template';

import './um-slide';



@Define('um-slides')
export class SlidesComponent extends UmWebComponent {
  opacity: string;
  scale: string;
  delta: any;
  nextArrow: any;
  prevArrow: any;
  verticalNav: any;
  sectionsAvailable: any;
  animating: boolean;
  actual: number;
  scrollThreshold: number;
  animationType: string;
  hijacking: string;


  static attributes = ['hijacking', 'animation'];
  static get observedAttributes() { return this.attributes; }



  constructor() {
    super(template, require('./style.scss'));
  }


  connectedCallback() {
    super.connectedCallback(SlidesComponent.attributes);

    //variables
    this.hijacking = 'off';///$('body').data('hijacking');
    this.animationType = 'scaleDown';///$('body').data('animation');
    this.scrollThreshold = 5;
    this.actual = 1;
    this.animating = false;



    const html = this.wire();
    //DOM elements
    this.sectionsAvailable =
      html`
    <um-slide></um-slide>
    <um-slide></um-slide>
    <um-slide></um-slide>
    `;

    this.render();

    // this.sectionsAvailable = this.sectionsAvailable.childNodes;
    // $('.cd-section');

    console.log(this.sectionsAvailable)

    this.verticalNav = $('.cd-vertical-nav');
    this.prevArrow = this.verticalNav.find('a.cd-prev');
    this.nextArrow = this.verticalNav.find('a.cd-next');


    //check the media query and bind corresponding events
    var MQ = this.deviceType(),
      bindToggle = false;

    this.bindEvents(MQ, true);


    $(window).on('resize', () => {
      MQ = this.deviceType();
      this.bindEvents(MQ, bindToggle);
      if (MQ == 'mobile') bindToggle = true;
      if (MQ == 'desktop') bindToggle = false;
    });
  }


  bindEvents(MQ, bool) {
    if (MQ == 'desktop' && bool) {
      //bind the animation to the window scroll event, arrows click and keyboard
      if (this.hijacking == 'on') {
        this.initHijacking();
        $(window).on('DOMMouseScroll mousewheel', this.scrollHijacking.bind(this));
      } else {
        this.scrollAnimation();
        $(window).on('scroll', this.scrollAnimation.bind(this));
      }
      this.prevArrow.on('click', this.prevSection.bind(this));
      this.nextArrow.on('click', this.nextSection.bind(this));

      $(document).on('keydown', (event) => {
        if (event.which == '40' && !this.nextArrow.hasClass('inactive')) {
          event.preventDefault();
          this.nextSection();
        } else if (event.which == '38' && (!this.prevArrow.hasClass('inactive') || (this.prevArrow.hasClass('inactive') &&
          $(window).scrollTop() != this.sectionsAvailable.eq(0).offset().top))) {
          event.preventDefault();
          this.prevSection();
        }
      });
      //set navigation arrows visibility
      this.checkNavigation();
    } else if (MQ == 'mobile') {
      //reset and unbind
      this.resetSectionStyle();
      $(window).off('DOMMouseScroll mousewheel', this.scrollHijacking.bind(this));
      $(window).off('scroll', this.scrollAnimation.bind(this));
      this.prevArrow.off('click', this.prevSection.bind(this));
      this.nextArrow.off('click', this.nextSection.bind(this));
      $(document).off('keydown');
    }
  }


  scrollAnimation() {
    //normal scroll - use requestAnimationFrame (if defined) to optimize performance
    (!window.requestAnimationFrame) ? this.animateSection() : window.requestAnimationFrame(this.animateSection.bind(this));
  }

  animateSection() {
    var scrollTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      windowWidth = $(window).width();

    this.sectionsAvailable.childNodes.forEach((actualBlock: HTMLDivElement) => {
      console.log()
      // var actualBlock = $(this),
      let offset = scrollTop - actualBlock.getBoundingClientRect().top;

      //according to animation type and window scroll, define animation parameters
      var animationValues = this.setSectionAnimation(offset, windowHeight, this.animationType);

      this.transformSection(actualBlock.childNodes, animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]);
      (offset >= 0 && offset < windowHeight) ? actualBlock.classList.add('visible') : actualBlock.classList.remove('visible');
    });

    this.checkNavigation();
  }

  transformSection(element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
    console.log(element)
    //transform sections - normal scroll
    element.velocity({
      translateY: translateY + 'vh',
      scale: scaleValue,
      rotateX: rotateXValue,
      opacity: opacityValue,
      boxShadowBlur: boxShadow + 'px',
      translateZ: 0,
    }, 0);
  }

  initHijacking() {
    // initialize section style - scrollhijacking
    var visibleSection = this.sectionsAvailable.filter('.visible'),
      topSection = visibleSection.prevAll('.cd-section'),
      bottomSection = visibleSection.nextAll('.cd-section'),
      animationParams = this.selectAnimation(this.animationType, false),
      animationVisible = animationParams[0],
      animationTop = animationParams[1],
      animationBottom = animationParams[2];

    visibleSection.children('div').velocity(animationVisible, 1, () => {
      visibleSection.css('opacity', 1);
      topSection.css('opacity', 1);
      bottomSection.css('opacity', 1);
    });
    topSection.children('div').velocity(animationTop, 0);
    bottomSection.children('div').velocity(animationBottom, 0);
  }

  scrollHijacking(event) {
    // on mouse scroll - check if animate section
    if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
      this.delta--;
      (Math.abs(this.delta) >= this.scrollThreshold) && this.prevSection();
    } else {
      this.delta++;
      (this.delta >= this.scrollThreshold) && this.nextSection();
    }
    return false;
  }

  prevSection(event?) {
    //go to previous section
    typeof event !== 'undefined' && event.preventDefault();

    var visibleSection = this.sectionsAvailable.filter('.visible'),
      middleScroll = (this.hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;
    visibleSection = middleScroll ? visibleSection.next('.cd-section') : visibleSection;

    var animationParams = this.selectAnimation(this.animationType, middleScroll, 'prev');
    this.unbindScroll(visibleSection.prev('.cd-section'), animationParams[3]);

    if (!this.animating && !visibleSection.is(":first-child")) {
      this.animating = true;
      visibleSection.removeClass('visible').children('div').velocity(animationParams[2], animationParams[3],
        animationParams[4])
        .end().prev('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[
        3], animationParams[4], () => {
          this.animating = false;
          if (this.hijacking == 'off') $(window).on('scroll', this.scrollAnimation.bind(this));
        });

      this.actual = this.actual - 1;
    }

    this.resetScroll();
  }

  nextSection(event?) {
    //go to next section
    typeof event !== 'undefined' && event.preventDefault();

    var visibleSection = this.sectionsAvailable.filter('.visible'),
      middleScroll = (this.hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;

    var animationParams = this.selectAnimation(this.animationType, middleScroll, 'next');
    this.unbindScroll(visibleSection.next('.cd-section'), animationParams[3]);

    if (!this.animating && !visibleSection.is(":last-of-type")) {
      this.animating = true;
      visibleSection.removeClass('visible').children('div').velocity(animationParams[1], animationParams[3],
        animationParams[4])
        .end().next('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[
        3], animationParams[4], () => {
          this.animating = false;
          if (this.hijacking == 'off') $(window).on('scroll', this.scrollAnimation.bind(this));
        });

      this.actual = this.actual + 1;
    }
    this.resetScroll();
  }

  unbindScroll(section, time) {
    //if clicking on navigation - unbind scroll and animate using custom velocity animation
    if (this.hijacking == 'off') {
      $(window).off('scroll', this.scrollAnimation.bind(this));
      (this.animationType == 'catch') ? $('body, html').scrollTop(section.offset().top) : section.velocity("scroll", {
        duration: time
      });
    }
  }

  resetScroll() {
    this.delta = 0;
    this.checkNavigation();
  }

  checkNavigation() {
    //update navigation arrows visibility
    // (this.sectionsAvailable.filter('.visible').is(':first-of-type'))
    //   ? this.prevArrow.addClass('inactive')
    //   : this.prevArrow.removeClass('inactive');
    // (this.sectionsAvailable.filter('.visible').is(':last-of-type'))
    //   ? this.nextArrow.addClass('inactive')
    //   : this.nextArrow.removeClass('inactive');
  }

  resetSectionStyle() {
    //on mobile - remove style applied with jQuery
    this.sectionsAvailable.children('div').each(() => {
      $(this).attr('style', '');
    });
  }

  deviceType() {
    //detect if desktop/mobile
    return window.getComputedStyle(<HTMLBodyElement>document.querySelector('body'), '::before').getPropertyValue('content').replace(
      /"/g, "").replace(/'/g, "");
  }

  selectAnimation(animationName, middleScroll, direction?) {
    // select section animation - scrollhijacking
    var animationVisible = 'translateNone',
      animationTop = 'translateUp',
      animationBottom = 'translateDown',
      easing = 'ease',
      animDuration = 800;

    switch (animationName) {
      case 'scaleDown':
        animationTop = 'scaleDown';
        easing = 'easeInCubic';
        break;
      case 'rotate':
        if (this.hijacking == 'off') {
          animationTop = 'rotation.scroll';
          animationBottom = 'translateNone';
        } else {
          animationTop = 'rotation';
          easing = 'easeInCubic';
        }
        break;
      case 'gallery':
        animDuration = 1500;
        if (middleScroll) {
          animationTop = 'scaleDown.moveUp.scroll';
          animationVisible = 'scaleUp.moveUp.scroll';
          animationBottom = 'scaleDown.moveDown.scroll';
        } else {
          animationVisible = (direction == 'next') ? 'scaleUp.moveUp' : 'scaleUp.moveDown';
          animationTop = 'scaleDown.moveUp';
          animationBottom = 'scaleDown.moveDown';
        }
        break;
      case 'catch':
        animationVisible = 'translateUp.delay';
        break;
      case 'opacity':
        animDuration = 700;
        animationTop = 'hide.scaleUp';
        animationBottom = 'hide.scaleDown';
        break;
      case 'fixed':
        animationTop = 'translateNone';
        easing = 'easeInCubic';
        break;
      case 'parallax':
        animationTop = 'translateUp.half';
        easing = 'easeInCubic';
        break;
    }

    return [animationVisible, animationTop, animationBottom, animDuration, easing];
  }

  setSectionAnimation(sectionOffset, windowHeight, animationName) {
    // select section animation - normal scroll
    var scale = 1,
      translateY = 100,
      rotateX = '0deg',
      opacity = 1,
      boxShadowBlur = 0;

    if (sectionOffset >= -windowHeight && sectionOffset <= 0) {
      // section entering the viewport
      translateY = (-sectionOffset) * 100 / windowHeight;

      switch (animationName) {
        case 'scaleDown':
          scale = 1;
          opacity = 1;
          break;
        case 'rotate':
          translateY = 0;
          break;
        case 'gallery':
          if (sectionOffset >= -windowHeight && sectionOffset < -0.9 * windowHeight) {
            scale = -sectionOffset / windowHeight;
            translateY = (-sectionOffset) * 100 / windowHeight;
            boxShadowBlur = 400 * (1 + sectionOffset / windowHeight);
          } else if (sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight) {
            scale = 0.9;
            translateY = -(9 / 8) * (sectionOffset + 0.1 * windowHeight) * 100 / windowHeight;
            boxShadowBlur = 40;
          } else {
            scale = 1 + sectionOffset / windowHeight;
            translateY = 0;
            boxShadowBlur = -400 * sectionOffset / windowHeight;
          }
          break;
        case 'catch':
          if (sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight) {
            translateY = 100;
            boxShadowBlur = (1 + sectionOffset / windowHeight) * 160;
          } else {
            translateY = -(10 / 7.5) * sectionOffset * 100 / windowHeight;
            boxShadowBlur = -160 * sectionOffset / (3 * windowHeight);
          }
          break;
        case 'opacity':
          translateY = 0;
          scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
          opacity = (sectionOffset + windowHeight) / windowHeight;
          break;
      }

    } else if (sectionOffset > 0 && sectionOffset <= windowHeight) {
      //section leaving the viewport - still has the '.visible' class
      translateY = (-sectionOffset) * 100 / windowHeight;

      switch (animationName) {
        case 'scaleDown':
          this.scale = (1 - (sectionOffset * 0.3 / windowHeight)).toFixed(5);
          this.opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
          translateY = 0;
          boxShadowBlur = 40 * (sectionOffset / windowHeight);

          break;
        case 'rotate':
          this.opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
          rotateX = sectionOffset * 90 / windowHeight + 'deg';
          translateY = 0;
          break;
        case 'gallery':
          if (sectionOffset >= 0 && sectionOffset < 0.1 * windowHeight) {
            scale = (windowHeight - sectionOffset) / windowHeight;
            translateY = -(sectionOffset / windowHeight) * 100;
            boxShadowBlur = 400 * sectionOffset / windowHeight;
          } else if (sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight) {
            scale = 0.9;
            translateY = -(9 / 8) * (sectionOffset - 0.1 * windowHeight / 9) * 100 / windowHeight;
            boxShadowBlur = 40;
          } else {
            scale = sectionOffset / windowHeight;
            translateY = -100;
            boxShadowBlur = 400 * (1 - sectionOffset / windowHeight);
          }
          break;
        case 'catch':
          if (sectionOffset >= 0 && sectionOffset < windowHeight / 2) {
            boxShadowBlur = sectionOffset * 80 / windowHeight;
          } else {
            boxShadowBlur = 80 * (1 - sectionOffset / windowHeight);
          }
          break;
        case 'opacity':
          translateY = 0;
          scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
          opacity = (windowHeight - sectionOffset) / windowHeight;
          break;
        case 'fixed':
          translateY = 0;
          break;
        case 'parallax':
          translateY = (-sectionOffset) * 50 / windowHeight;
          break;

      }

    } else if (sectionOffset < -windowHeight) {
      //section not yet visible
      translateY = 100;

      switch (animationName) {
        case 'scaleDown':
          scale = 1;
          opacity = 1;
          break;
        case 'gallery':
          scale = 1;
          break;
        case 'opacity':
          translateY = 0;
          scale = 0.8;
          opacity = 0;
          break;
      }

    } else {
      //section not visible anymore
      translateY = -100;

      switch (animationName) {
        case 'scaleDown':
          scale = 0;
          opacity = 0.7;
          translateY = 0;
          break;
        case 'rotate':
          translateY = 0;
          rotateX = '90deg';
          break;
        case 'gallery':
          scale = 1;
          break;
        case 'opacity':
          translateY = 0;
          scale = 1.2;
          opacity = 0;
          break;
        case 'fixed':
          translateY = 0;
          break;
        case 'parallax':
          translateY = -50;
          break;
      }
    }

    return [translateY, scale, rotateX, opacity, boxShadowBlur];
  }



}