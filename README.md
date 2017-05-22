# vscode-markdown-it-plugins

(**for testing**) markdown-it plugin pack for VS Code.

## Features

* mermaid.js previre
* markdown-it-katex
* markdown-it-emoji
* markdown-it-kbd
* markdown-it-container
* markdown-it-block-image

## Requirements

1. Install the [VSIX for this extension]()
2. Add the setting ```"markdown.enableExperimentalExtensionApi": true``` to your workspace.

## Extension Settings

TBD

## Known Issues

TBD

## Release Notes

TBD

## Development

```
npm install -g vsce
npm install
npm run vscode:prepublish
vsce package
```
