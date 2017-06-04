# vscode-markdown-it-plugins

(**for testing**) markdown-it plugin pack for VS Code.

## Features

### Includes

* mermaid.js preview
* markdown-it-katex
* markdown-it-emoji
* markdown-it-kbd
* markdown-it-container
* markdown-it-block-image

### Screenshot

![vscode-markdown-it-plugins.png](https://raw.githubusercontent.com/h1romas4/vscode-markdown-it-plugins/master/docs/vscode-markdown-it-plugins.png)

### markdown code

```markdown
emoji example

    :)

kbd example

    [[Command]] + [[A]]

katex example

    $$ e = mc^2 $$

mermaid.js example (wuth sequence name)

    ```mermaid:Alice and Bob story.
    sequenceDiagram
        Alice->>Bob: Hello Bob, how are you?
        alt is sick
            Bob->>Alice: Not so good :(
        else is well
            Bob->>Alice: Feeling fresh like a daisy
        end
        opt Extra response
            Bob->>Alice: Thanks for asking
        end
    ```

source code highlight (wuth source file name)

    ```groovy:test.groovy
    def num = 1
    new File("./test.txt").eachLine {
        println "${num} ${it}"
        num++
    }
    ```

custom container

    ::: info
    Information message.
    :::

    ::: warning
    Warning message.
    :::
```

### CSS

```css
pre {
    /* somthing */
}

code {
    /* somthing */
}

.hljs {
    /* somthing */
}

.md-source-name {
    /* somthing */
}

.mermaid {
    /* somthing */
}

.md-sequence-name {
    /* somthing */
}

.md-block-image {
    /* somthing */
}

.info {
    /* somthing */
}

.warning {
    /* somthing */
}
```

## Requirements

0. Visual Studio Code 1.13 higher
1. Install the [VSIX for this extension](https://github.com/h1romas4/vscode-markdown-it-plugins/blob/master/dest/vscode-markdown-it-plugins-0.0.2.vsix)
2. Add the setting ```"markdown.enableExperimentalExtensionApi": true``` to your workspace.

## Extension Settings

TBD

## Known Issues

TBD

## Release Notes

TBD

## Custom build

```
git clone git@github.com:h1romas4/vscode-markdown-it-plugins.git
cd vscode-markdown-it-plugins
npm install -g vsce
npm install
npm run vscode:prepublish
vsce package
```
