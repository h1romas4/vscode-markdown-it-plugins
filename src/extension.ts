"use strict"
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
    return {
        extendMarkdownIt(md) {
            // highlight
            const highlight = md.options.highlight;
            md.options.highlight = (code, lang) => {
                let name = "";
                // parse lang:name attribute
                if (lang) {
                    let sp = lang.split(/(.+):(.+)/);
                    if (sp.length > 1) {
                        lang = sp[1];
                        name = sp[2];
                    }
                }
                // mermaid.js
                if(lang && lang.toLowerCase() === 'mermaid') {
                    let seqName = "";
                    if(name !== '') {
                        seqName = `<div class="md-sequence-name">${name}</div>`;
                    }
                    return seqName + `<div class="mermaid">${code}</div>`;
                }
                // source code
                let sourceName = "";
                if (name !== '') {
                    sourceName = `<div class="md-source-name">${name}</div>`;
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
