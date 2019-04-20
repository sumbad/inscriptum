// Core import
import highlightjs from 'highlight.js/lib/highlight'

// Languages import
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/htmlbars';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';


// Register languages
highlightjs.registerLanguage('javascript', javascript)
highlightjs.registerLanguage('typescript', typescript)
highlightjs.registerLanguage('html', html)
highlightjs.registerLanguage('css', css)
highlightjs.registerLanguage('bash', bash)
highlightjs.registerLanguage('yaml', yaml)


export default highlightjs;