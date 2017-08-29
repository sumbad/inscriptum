export default (async () => {

    if (window.customElements) {
        await import('@webcomponents/webcomponentsjs/custom-elements-es5-adapter');
        // await import('@webcomponents/custom-elements/src/native-shim');
        // await import('@webcomponents/custom-elements/custom-elements.min');        
    }

    if (!window.customElements || window.customElements['forcePolyfill']) {
        await import('@webcomponents/custom-elements');
    }

    if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype)
        || (window['ShadyDOM'] && window['ShadyDOM'].force)) {
        await import('@webcomponents/shadydom/');
        await import('@webcomponents/shadycss/scoping-shim.min');
        await import('@webcomponents/shadycss/apply-shim.min');
        await import('@webcomponents/shadycss/custom-style-interface.min');
    }
})();