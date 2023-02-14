# react-summernote-lite

[Summernote lite](https://github.com/summernote/summernote) without bootstrap for react

[![npm version](https://badge.fury.io/js/react-summernote.svg)](https://www.npmjs.com/package/react-summernote-lite)

### Getting Started

#### Install

react-summernote-lite is built upon jquery

```
npm install react-summernote-lite jquery --save
```

or using yarn

```
npm install react-summernote-lite jquery
```

Not additional setup needed

### Example

```js
import React, { Component } from "react";
import SummernoteLite from "react-summernote";

const App = () => {
  const [imageFiles, setImageFiles] = useState([]);

  const noteRef = useRef();

  return (
    <SummernoteLite
      ref={noteRef}
      onInit={()=> {}}
      placeholder={"Write something here..."}
      tabsize={2}
      lang="ru-RU"
      height={350 || "50vh"}
      dialogsInBody={true}
      blockquoteBreakingLevel={0}
      toolbar={[
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear', 'strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video', 'hr']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ]}
      fontNames={[
        "Arial",
        "Georgia",
        "Verdana",
        "e.t.c..."
      ]}
      callbacks={
        onImageUpload: function (files){
            setImageFiles(files);
        },
        onKeyup: function (e){},
        onKeyDown: function (e){},
        onPaste: function (e){}
      }
    />
  );
};

export default App;
```

### PropTypes

| Property  | Type       | Description                                                                    |
| --------- | ---------- | ------------------------------------------------------------------------------ |
| onInit    | `Function` | Being invoked when summernote is launched                                      |
| callbacks | `Object`   | Keys that emits event [Basic Api](https://summernote.org/deep-dive/#callbacks) |

Additional props are gotten from [summernote.org](http://summernote.org/deep-dive)

### Ref methods

```js
// please visit https://summernote.org/deep-dive/#basic-api for available commands
executeCommand(...[arguments]);
```

##### Example

```js
// You can toggle editable/codable view by. (https://summernote.org/deep-dive/#codeview);
noteRef.current.executeCommand('codeview.toggle');

// You can toggle Fullscreen view by. (https://summernote.org/deep-dive/#fullscreen);
noteRef.current.executeCommand('fullscreen.toggle');

// Insert an image. (https://summernote.org/deep-dive/#insertimage);
noteRef.current.executeCommand('insertImage', url, filename);

// Insert an image. (https://summernote.org/deep-dive/#insertimage);
noteRef.current.executeCommand('insertImage', url, function ($image){});

// Insert an element or textnode. (https://summernote.org/deep-dive/#insertnode);
noteRef.current.executeCommand('insertNode', node);

// please visit https://summernote.org/deep-dive/#basic-api to discover more of this apis
```

##### Contribution

Pull requests and contributions are welcome
