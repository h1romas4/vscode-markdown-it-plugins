# vscode-markdown-it-plugins

(**for testing**) markdown-it plugin pack for VS Code.

## Features

* mermaid.js preview
* markdown-it-katex
* markdown-it-emoji
* markdown-it-kbd
* markdown-it-container
* markdown-it-block-image

![vscode-markdown-it-plugins.png](https://raw.githubusercontent.com/h1romas4/vscode-markdown-it-plugins/master/docs/vscode-markdown-it-plugins.png)

## Requirements

1. Install the [VSIX for this extension](https://github.com/h1romas4/vscode-markdown-it-plugins/blob/master/dest/vscode-markdown-it-plugins-0.0.1.vsix)
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
