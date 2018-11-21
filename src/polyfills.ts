import 'babel-polyfill';

export default (async () => {
    // NOTE: any browser that does not have template or ES6 features
    // must load the full suite (called `lite` for legacy reasons) of polyfills.
    if (!('content' in document.createElement('template')) || !window['Promise'] || !Array.from ||
        // Edge has broken fragment cloning which means you cannot clone template.content
        !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment)) {
        await import('@webcomponents/webcomponentsjs/webcomponents-lite.js');
    } else {
        if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype)
            || (window['ShadyDOM'] && window['ShadyDOM'].force)) {
            await import('@webcomponents/shadydom/');
            await import('@webcomponents/shadycss/scoping-shim.min');
            await import('@webcomponents/shadycss/apply-shim.min');
            await import('@webcomponents/shadycss/custom-style-interface.min');
        }

        if (window.customElements) {
            await import('@webcomponents/webcomponentsjs/custom-elements-es5-adapter');
            // await import('@webcomponents/custom-elements/src/native-shim');
        }

        if (!('import' in document.createElement('link'))) {
            await import('@webcomponents/webcomponentsjs/webcomponents-hi');
        }

        if (!window.customElements || window.customElements['forcePolyfill']) {
            await import('@webcomponents/custom-elements');
        }

        // document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: true }));
    }
})();