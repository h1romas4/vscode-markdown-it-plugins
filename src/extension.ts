"use strict"
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
    return {
        extendMarkdownIt(md) {
            // mermaid.js
            const highlight = md.options.highlight;
            md.options.highlight = (code, lang) => {
                if(lang && lang.toLowerCase() === 'mermaid') {
                    return `<div class="mermaid">${code}</div>`;
                }
                let sourceName = "";
                if(lang) {
                    let sp = lang.split(/(.+):(.+)/);
                    if(sp.length > 1) {
                        lang = sp[1];
                        sourceName = `<div class="md-source-name">${sp[2]}</div>`;
                    }
                }
                return sourceName + highlight(code, lang);
            };
            // markdown-it-katex
            md.use(require('markdown-it-katex'));
            // markdown-it-emoji
            md.use(require('markdown-it-emoji'));
            // markdown-it-container
            const container = require('markdown-it-container');
            md.use(container, 'info').use(container, 'warning');
            // markdown-it-block-image
            md.use(require('markdown-it-block-image'), {
                outputContainer: true,
                containerClassName: 'md-block-image'
            });
            // markdown-it-kbd
            md.use(require('markdown-it-kbd'));
            return md;
        }
    }
}
