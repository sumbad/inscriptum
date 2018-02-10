import 'whatwg-fetch';
import * as Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

import articles from '../../data/articles/articles';
import { Define, UmWebComponent } from "components/um-web.component";

declare const $: any;

import template from './template';

import './um-slide';

// type TanimatingType = 'next' | 'prev'

@Define('um-slides')
export class SlidesComponent extends UmWebComponent {
  animatingType: 'next' | 'prev';
  delta: any;
  nextArrow: Element;
  prevArrow: Element;
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

    this.scrollAnimation = this.scrollAnimation.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.keyboardEventListener = this.keyboardEventListener.bind(this);
  }


  connectedCallback() {
    super.connectedCallback(SlidesComponent.attributes);

    //variables
    this.hijacking = 'off';///$('body').data('hijacking');
    this.animationType = 'gallery';//'scaleDown';///$('body').data('animation');
    this.scrollThreshold = 5;
    this.actual = 1;
    this.animating = false;



    const html = this.wire();
    //DOM elements
    this.sectionsAvailable =
      html`
        <um-slide visible content="Page Scroll Effects"></um-slide>
        <um-slide content="Section 2"></um-slide>
        <um-slide content="Section 3"></um-slide>
        <um-slide content="Section 4"></um-slide>
        <um-slide content="Section 5"></um-slide>
    `;

    this.render();
    this.registerEffectVelocity();

    // this.sectionsAvailable = this.sectionsAvailable.childNodes;
    // $('.cd-section');

    console.log(this.sectionsAvailable)

    this.verticalNav = $('.cd-vertical-nav');
    this.prevArrow = this.verticalNav.find('a.cd-prev')[0];
    this.nextArrow = this.verticalNav.find('a.cd-next')[0];

    //check the media query and bind corresponding events
    let MQ = this.deviceType();
    let bindToggle = false;

    this.bindEvents(MQ, true);

    console.log(MQ)

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
        // this.initHijacking();
        // window.addEventListener('DOMMouseScroll mousewheel', this.scrollHijacking.bind(this));
      } else {
        this.scrollAnimation();
        window.addEventListener('scroll', this.scrollAnimation);
      }

      this.prevArrow.addEventListener('click', this.prevSection);
      this.nextArrow.addEventListener('click', this.nextSection);

      document.addEventListener('keydown', this.keyboardEventListener);
      //set navigation arrows visibility
      this.checkNavigation();
    } else if (MQ == 'mobile') {
      //reset and unbind
      this.resetSectionStyle();
      // window.removeEventListener('DOMMouseScroll mousewheel', this.scrollHijacking.bind(this));
      // window.removeEventListener('scroll', this.scrollAnimation);
      // this.prevArrow.removeEventListener('click', this.prevSection.bind(this));
      // this.nextArrow.removeEventListener('click', this.nextSection.bind(this));
      // document.removeEventListener('keydown', this.keyboardEventListener.bind(this));
    }
  }


  keyboardEventListener(event) {
    if (event.which === 40 && !this.nextArrow.classList.contains('inactive')) {
      event.preventDefault();
      this.nextSection();
    } else
      if (event.which === 38
        && (!this.prevArrow.classList.contains('inactive')
          || (this.prevArrow.classList.contains('inactive') && $(window).scrollTop() != this.sectionsAvailable.eq(0).offset().top)
        )
      ) {
        event.preventDefault();
        this.prevSection();
      }
  };


  /** 
   * normal scroll - use requestAnimationFrame (if defined) to optimize performance
   */
  scrollAnimation() {
    // console.log(11111111111);
    //normal scroll - use requestAnimationFrame (if defined) to optimize performance
    (!window.requestAnimationFrame)
      ? this.animateSection()
      : window.requestAnimationFrame(() => this.animateSection());
  }


  animateSection() {
    // console.log('animateSection')
    // let scrollTop = window.screenY;
    // let windowHeight = window.innerHeight;
    // let windowWidth = window.innerWidth;
    var scrollTop = $(window).scrollTop(),
      windowHeight = $(window).height();
    // windowWidth = $(window).width();

    this.sectionsAvailable.childNodes.forEach((actualBlock: Element) => {
      // var actualBlock = $(this),
      // let offset = scrollTop - ((actualBlock.lastElementChild as Element).getBoundingClientRect().top + document.body.scrollTop);
      let offset = scrollTop - $(actualBlock).offset().top;

      //according to animation type and window scroll, define animation parameters
      var animationValues = this.setSectionAnimation(offset, windowHeight, this.animationType);

      this.transformSection(<Element>actualBlock.lastElementChild, animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]);

      (offset >= 0 && offset < windowHeight) ? actualBlock.setAttribute('visible', '') : actualBlock.removeAttribute('visible');
    });

    this.checkNavigation();
  }


  /**
   * Transform sections - normal scroll
   * 
   * @param element 
   * @param translateY 
   * @param scaleValue 
   * @param rotateXValue 
   * @param opacityValue 
   * @param boxShadow 
   */
  transformSection(element: Element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
    // console.log(translateY)
    Velocity(element, {
      translateY: translateY, //+ 'vh',
      scale: scaleValue,
      rotateX: rotateXValue,
      opacity: opacityValue,
      boxShadowBlur: boxShadow, //+ 'px',
      translateZ: 0,
    }, 0)
    // element.velocity({
    //   translateY: translateY + 'vh',
    //   scale: scaleValue,
    //   rotateX: rotateXValue,
    //   opacity: opacityValue,
    //   boxShadowBlur: boxShadow + 'px',
    //   translateZ: 0,
    // }, 0);
  }


  // initHijacking() {
  //   // initialize section style - scrollhijacking
  //   var visibleSection = this.sectionsAvailable.filter('.visible'),
  //     topSection = visibleSection.prevAll('.cd-section'),
  //     bottomSection = visibleSection.nextAll('.cd-section'),
  //     animationParams = this.selectAnimation(this.animationType, false),
  //     animationVisible = animationParams[0],
  //     animationTop = animationParams[1],
  //     animationBottom = animationParams[2];

  //   visibleSection.children('div').velocity(animationVisible, 1, () => {
  //     visibleSection.css('opacity', 1);
  //     topSection.css('opacity', 1);
  //     bottomSection.css('opacity', 1);
  //   });
  //   topSection.children('div').velocity(animationTop, 0);
  //   bottomSection.children('div').velocity(animationBottom, 0);
  // }


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


  /**
   * Go to previous section
   * @param event 
   */
  prevSection(event?) {
    typeof event !== 'undefined' && event.preventDefault();
    let visibleSectionIndex = (this.sectionsAvailable.childNodes as Element[]).findIndex(element => element.hasAttribute('visible'));
    let visibleSection: Element = this.sectionsAvailable.childNodes[visibleSectionIndex];
    let prevSection: Element = this.sectionsAvailable.childNodes[visibleSectionIndex - 1];

    const middleScroll = (this.hijacking == 'off' && $(window).scrollTop() != $(visibleSection).offset().top) ? true : false;
    if (middleScroll && this.animating && this.animatingType === 'next') {
      console.log('middleScroll prevSection', middleScroll)
      visibleSectionIndex++;
      visibleSection = this.sectionsAvailable.childNodes[visibleSectionIndex];
      prevSection = this.sectionsAvailable.childNodes[visibleSectionIndex - 1];
    }

    // if (!visibleSection.matches(":first-child")) {
    if (prevSection) {
      this.animatingType = 'prev';
      const animationParams = this.selectAnimation(this.animationType, middleScroll, 'prev');
      this.scrollingToSection(visibleSection, prevSection,
        {
          visible: animationParams[0],
          goTo: animationParams[2],
          duration: animationParams[3],
          easing: animationParams[4]
        }
      );
    }
  }


  /**
   * Go to the next slide
   * @param event 
   */
  nextSection(event?) {
    typeof event !== 'undefined' && event.preventDefault();

    let visibleSectionIndex = (this.sectionsAvailable.childNodes as Element[]).findIndex(element => element.hasAttribute('visible'));
    let visibleSection: Element = this.sectionsAvailable.childNodes[visibleSectionIndex];
    let nextSection: Element = this.sectionsAvailable.childNodes[visibleSectionIndex + 1];

    const middleScroll = (this.hijacking == 'off' && $(window).scrollTop() != $(visibleSection).offset().top) ? true : false;

    if (middleScroll && this.animating && this.animatingType === 'prev') {
      console.log('middleScroll nextSection', middleScroll)
      visibleSectionIndex--;
      visibleSection = this.sectionsAvailable.childNodes[visibleSectionIndex];
      nextSection = this.sectionsAvailable.childNodes[visibleSectionIndex + 1];
    }

    // if (!visibleSection.matches(":last-of-type")) {
    if (nextSection) {
      this.animatingType = 'next';
      const animationParams = this.selectAnimation(this.animationType, middleScroll, 'next');
      this.scrollingToSection(visibleSection, nextSection,
        {
          visible: animationParams[0],
          goTo: animationParams[1],
          duration: animationParams[3],
          easing: animationParams[4]
        }
      );
    }
  }



  scrollingToSection(visibleSection, gotoSection, anim: { visible, goTo, duration, easing }) {
    if (!this.animating) {
      // console.log(anim)
      this.unbindScroll(gotoSection, anim.duration);
      this.animating = true;
      console.log('animating start')
      Velocity(visibleSection.lastElementChild, anim.goTo, anim.duration, anim.easing);
      Velocity(gotoSection.lastElementChild, anim.visible, anim.duration, anim.easing,
        () => {
      console.log('animating stop')
          if(this.animating) {
            visibleSection.removeAttribute('visible');
            gotoSection.setAttribute('visible', '');
            if (this.hijacking == 'off') window.addEventListener('scroll', this.scrollAnimation);
  
            this.animating = false;
            this.checkNavigation();
          }
        }
      );

      this.actual = this.actual + 1;
    }
    else {
      // setTimeout(() => {
        this.animating = false;
      // }, anim.duration);

      (this.sectionsAvailable.childNodes as Element[]).forEach(element => {
        Velocity(element, 'finish');
        Velocity(element.lastElementChild, 'finish');
      });
      visibleSection.removeAttribute('visible');
      gotoSection.setAttribute('visible', '');
      this.unbindScroll(gotoSection, 100);
      if (this.hijacking == 'off') window.addEventListener('scroll', this.scrollAnimation);
    }
    // visibleSection.removeAttribute('visible');
    // gotoSection.setAttribute('visible', '');

    this.resetScroll();
  }


  /**
   * If clicking on navigation - unbind scroll and animate using custom velocity animation
   * 
   * @param section 
   * @param time 
   */
  unbindScroll(section, time) {
    if (this.hijacking == 'off') {
      window.removeEventListener('scroll', this.scrollAnimation);
      (this.animationType == 'catch')
        ? $('body, html').scrollTop(section.offset().top)
        : Velocity(section, 'scroll', { duration: time });
      // : Velocity(section, 'scroll', { duration: time, queue: false });
    }
  }



  resetScroll() {
    this.delta = 0;
    this.checkNavigation();
  }


  /**
   * Update navigation arrows visibility
   */
  checkNavigation() {
    // console.log('first ', this.sectionsAvailable.first.hasAttribute('visible'))
    // console.log('last ', this.sectionsAvailable.last.hasAttribute('visible'))
    this.sectionsAvailable.first.hasAttribute('visible')
      ? this.prevArrow.classList.add('inactive')
      : this.prevArrow.classList.remove('inactive');
    this.sectionsAvailable.last.hasAttribute('visible')
      ? this.nextArrow.classList.add('inactive')
      : this.nextArrow.classList.remove('inactive');

    // (this.sectionsAvailable.filter('.visible').is(':first-of-type'))
    //   ? this.prevArrow.addClass('inactive')
    //   : this.prevArrow.removeClass('inactive');
    // (this.sectionsAvailable.filter('.visible').is(':last-of-type'))
    //   ? this.nextArrow.addClass('inactive')
    //   : this.nextArrow.removeClass('inactive');
  }


  /**
   * On mobile - remove style applied
   */
  resetSectionStyle() {
    // with jQuery
    (this.sectionsAvailable.childNodes as Element[]).forEach(element => {
      (element.lastElementChild as Element).setAttribute('style', '');
    });

    // ('div').each(() => {
    //   $(this).attr('style', '');
    // });
  }


  /** 
   * Detect if desktop/mobile
   */
  deviceType() {
    return window.getComputedStyle(<HTMLBodyElement>document.querySelector('body'), '::before').
      getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
  }


  /**
   * Select section animation - scrollhijacking
   * 
   * @param animationName 
   * @param middleScroll 
   * @param direction 
   */
  selectAnimation(animationName, middleScroll, direction?) {
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


  /**
   * Select section animation - normal scroll
   * 
   * @param sectionOffset 
   * @param windowHeight 
   * @param animationName 
   */
  setSectionAnimation(sectionOffset, windowHeight, animationName) {
    // select section animation - normal scroll
    var scale = 1,
      translateY = 100,
      rotateX = '0deg',
      opacity = 1,
      boxShadowBlur = 0;


    if (sectionOffset >= -windowHeight && sectionOffset <= 0) {
      // console.log('section entering the viewport')

      // section entering the viewport
      translateY = (-sectionOffset) //* 100 / windowHeight;

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
            translateY = (-sectionOffset) //* 100 / windowHeight;
            boxShadowBlur = 400 * (1 + sectionOffset / windowHeight);
          } else if (sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight) {
            scale = 0.9;
            translateY = -(9 / 8) * (sectionOffset + 0.1 * windowHeight) //* 100 / windowHeight;
            boxShadowBlur = 40;
          } else {
            scale = 1 + sectionOffset / windowHeight;
            translateY = 0;
            boxShadowBlur = -400 * sectionOffset / windowHeight;
          }
          break;
        case 'catch':
          if (sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight) {
            translateY = windowHeight//100;
            boxShadowBlur = (1 + sectionOffset / windowHeight) * 160;
          } else {
            translateY = -(10 / 7.5) * sectionOffset //* 100 / windowHeight;
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
      // console.log('section leaving the viewport - still has the .visible class')

      //section leaving the viewport - still has the '.visible' class
      translateY = (-sectionOffset) //* 100 / windowHeight;

      switch (animationName) {
        case 'scaleDown':
          scale = 1 - (sectionOffset * 0.3 / windowHeight);
          opacity = 1 - (sectionOffset / windowHeight);
          translateY = 0;
          boxShadowBlur = 40 * (sectionOffset / windowHeight);

          break;
        case 'rotate':
          opacity = 1 - (sectionOffset / windowHeight);
          rotateX = sectionOffset * 90 / windowHeight + 'deg';
          translateY = 0;
          break;
        case 'gallery':
          if (sectionOffset >= 0 && sectionOffset < 0.1 * windowHeight) {
            scale = (windowHeight - sectionOffset) / windowHeight;
            translateY = -(sectionOffset)//-(sectionOffset / windowHeight) * 100;
            boxShadowBlur = 400 * sectionOffset / windowHeight;
          } else if (sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight) {
            scale = 0.9;
            translateY = -(9 / 8) * (sectionOffset - 0.1 * windowHeight / 9) //* 100 / windowHeight;
            boxShadowBlur = 40;
          } else {
            scale = sectionOffset / windowHeight;
            translateY = -windowHeight//-100;
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
          translateY = (-sectionOffset) * 0.5//50 / windowHeight;
          break;

      }

    } else if (sectionOffset < -windowHeight) {
      // console.log('section not yet visible')
      //section not yet visible
      translateY = windowHeight//100;

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
      // console.log('section not visible anymore')
      //section not visible anymore
      translateY = -windowHeight//-100;

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
          translateY = -windowHeight / 2//-50;
          break;
      }
    }

    return [translateY, scale, rotateX, opacity, boxShadowBlur];
  }


  registerEffectVelocity() {

    const sectionHeight = (<Element>this.querySelector('um-slide')).getBoundingClientRect().height;

    Velocity.RegisterEffect("translateUp", {
      defaultDuration: 1,
      calls: [
        [{ translateY: -sectionHeight }, 1]
      ]
    });
    Velocity.RegisterEffect("translateDown", {
      defaultDuration: 1,
      calls: [
        [{ translateY: sectionHeight }, 1]
      ]
    });
    Velocity
      .RegisterEffect("translateNone", {
        defaultDuration: 1,
        calls: [
          [{ translateY: 0, opacity: 1, scale: 1, rotateX: 0, boxShadowBlur: 0 }, 1]
        ],
      });

    //scale down
    Velocity
      .RegisterEffect("scaleDown", {
        defaultDuration: 1,
        calls: [
          [{ opacity: 0, scale: 0.7, boxShadowBlur: '40px' }, 1]
        ]
      });
    //rotation
    // Velocity
    //   .RegisterEffect("rotation", {
    //     defaultDuration: 1,
    //     calls: [
    //       [{ opacity: '0', rotateX: '90', translateY: '-100%' }, 1]
    //     ]
    //   });
    // Velocity
    //   .RegisterEffect("rotation.scroll", {
    //     defaultDuration: 1,
    //     calls: [
    //       [{ opacity: '0', rotateX: '90', translateY: 0 }, 1]
    //     ]
    //   });
    //gallery
    Velocity
      .RegisterEffect("scaleDown.moveUp", {
        defaultDuration: 1,
        calls: [
          [{ translateY: -sectionHeight * 0.1, scale: 0.9, boxShadowBlur: 40 }, 0.20],
          [{ translateY: -sectionHeight }, 0.60],
          [{ translateY: -sectionHeight, scale: 1, boxShadowBlur: 0 }, 0.20]
        ],
        reset: { scale: 1 }
      });
    Velocity
      .RegisterEffect("scaleDown.moveUp.scroll", {
        defaultDuration: 1,
        calls: [
          [{ translateY: -sectionHeight, scale: 0.9, boxShadowBlur: 40 }, 0.60],
          [{ translateY: -sectionHeight, scale: 1, boxShadowBlur: 0 }, 0.40]
        ],
        reset: { scale: 1 }
      });
    Velocity
      .RegisterEffect("scaleUp.moveUp", {
        defaultDuration: 1,
        calls: [
          [{ translateY: sectionHeight * 0.9, scale: 0.9, boxShadowBlur: 40 }, 0.20],
          [{ translateY: 0 }, 0.60],
          [{ translateY: 0, scale: 1, boxShadowBlur: 0 }, 0.20]
        ],
        reset: { scale: 1 }
      });
    Velocity
      .RegisterEffect("scaleUp.moveUp.scroll", {
        defaultDuration: 1,
        calls: [
          [{ translateY: 0, scale: 0.9, boxShadowBlur: 40 }, 0.60],
          [{ translateY: 0, scale: 1, boxShadowBlur: 0 }, 0.40]
        ],
        reset: { scale: 1 }
      });
    Velocity
      .RegisterEffect("scaleDown.moveDown", {
        defaultDuration: 1,
        calls: [
          [{ translateY: sectionHeight * 0.1, scale: 0.9, boxShadowBlur: 40 }, 0.20],
          [{ translateY: sectionHeight }, 0.60],
          [{ translateY: sectionHeight, scale: 1, boxShadowBlur: 0 }, 0.20]
        ],
        reset: { scale: 1 }
      });
    Velocity
      .RegisterEffect("scaleDown.moveDown.scroll", {
        defaultDuration: 1,
        calls: [
          [{ translateY: sectionHeight, scale: 0.9, boxShadowBlur: 40 }, 0.60],
          [{ translateY: sectionHeight, scale: 1, boxShadowBlur: 0 }, 0.40]
        ],
        reset: { scale: 1 }
      });
    Velocity
      .RegisterEffect("scaleUp.moveDown", {
        defaultDuration: 1,
        calls: [
          [{ translateY: -sectionHeight * 0.9, scale: 0.9, boxShadowBlur: 40 }, 0.20],
          [{ translateY: 0 }, 0.60],
          [{ translateY: 0, scale: 1, boxShadowBlur: 0 }, 0.20]
        ],
        reset: { scale: 1 }
      });
    // //catch up
    // Velocity
    //   .RegisterEffect("translateUp.delay", {
    //     defaultDuration: 1,
    //     calls: [
    //       [{ translateY: '0%' }, 0.8, { delay: 100 }],
    //     ]
    //   });
    // //opacity
    // Velocity
    //   .RegisterEffect("hide.scaleUp", {
    //     defaultDuration: 1,
    //     calls: [
    //       [{ opacity: '0', scale: '1.2' }, 1]
    //     ]
    //   });
    // Velocity
    //   .RegisterEffect("hide.scaleDown", {
    //     defaultDuration: 1,
    //     calls: [
    //       [{ opacity: '0', scale: '0.8' }, 1]
    //     ]
    //   });
    // //parallax
    // Velocity
    //   .RegisterEffect("translateUp.half", {
    //     defaultDuration: 1,
    //     calls: [
    //       [{ translateY: '-50%' }, 1]
    //     ]
    //   });
  }
}