import polyfills from './polyfills';

import './styles/main.scss';


const components = [
    'um-app',
    'um-preloader',
    'um-articles-list',
    'um-article-preview',
    'um-article',
    'um-gist',
    // 'um-editor',
    // 'um-spinner-round',
];


polyfills.then(
    async p => {
        // import all required sub components
        await Promise.all(components.map(
            c => import('./components/' + c)
        ));

        // await all definitions
        await Promise.all(components.map(
            c => customElements.whenDefined(c)
        ));
    }
).catch(e => {
    console.warn(e);
});


  // var f = "function(a){function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)};var a=a||{},c=a.scope||{},d=a.tag||function(g){for(var h=arguments.length,j=Array(1<h?h-1:0),k=1;k<h;k++)j[k-1]=arguments[k];return g.reduce(function(l,m,n){return l+j[n-1]+m})},e=Object.keys(c).join(','),f=new Function('tag,'+e,'return '+"+JSON.stringify(content.toString())+");return a.scope?f.apply(void 0,[d].concat(_toConsumableArray(Object.values(c)))):f.apply(this,[d])};";
