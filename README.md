# react-summernote-lite

[Summernote lite](https://github.com/summernote/summernote) without bootstrap for react with fast setup

[![npm version](https://badge.fury.io/js/react-summernote-lite.svg)](https://www.npmjs.com/package/react-summernote-lite)

### Getting Started

#### Install

react-summernote-lite is built upon jquery

```
npm install react-summernote-lite jquery --save
```

or using yarn

```
yarn add react-summernote-lite jquery
```

No additional setup needed

### Example

```js
import SummernoteLite from "react-summernote-lite";

// you need to iport the css style yourself
import 'react-summernote-lite/dist/summernote-lite.min.css';

// only import if you want to add some languages
import 'react-summernote-lite/dist/lang/summernote-zh-CN.min';

// only import if you want to add some fonts
import 'react-summernote-lite/dist/font/summernote.ttf';

const App = () => {
  const [imageFiles, setImageFiles] = useState([]);

  const noteRef = useRef();

  return (
    <div>
    <SummernoteLite
      ref={noteRef}
      defaultCodeValue={'<p>This is the default html value</p>'}
      placeholder={"Write something here..."}
      tabsize={2}
      lang="zh-CN" // only if you want to change the default language
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

    <button
        style={{ marginTop: 9 }}
        onClick={() => {
            noteRef.current.summernote('fullscreen.toggle');
        }}>
        Fullscreen
    </button>
    </div>
  );
};

export default App;

```
### PropTypes

| Property          | Type       | Description                                                                    |
| ----------------- | ---------- | ------------------------------------------------------------------------------ |
| defaultCodeValue  | `string`   | The default html value of summernote                                           |
| callbacks         | `Object`   | Keys that emits event [Callbacks](https://summernote.org/deep-dive/#callbacks) |
| useDiv            | `boolean`  | By default summernote is mounted using <textarea>, set this to true for <div>  |

Additional props are gotten from [summernote.org](http://summernote.org/deep-dive)

### Ref methods

```js
// please visit https://summernote.org/deep-dive/#basic-api for available commands
summernote(...[arguments]);

// get the react reference of the <textarea> or <div> if useDiv={true} 
getNoteRef(): React.LegacyRef;

// get the react reference of the <form> </form>
// please note this will be undefined if useDiv={true} 
getFormRef(): React.LegacyRef;
```

##### Example

```js
// You can toggle editable/codable view by. (https://summernote.org/deep-dive/#codeview);
noteRef.current.summernote("codeview.toggle");

// You can toggle Fullscreen view by. (https://summernote.org/deep-dive/#fullscreen);
noteRef.current.summernote("fullscreen.toggle");

// Insert an image. (https://summernote.org/deep-dive/#insertimage);
noteRef.current.summernote("insertImage", url, filename);

// Insert an image. (https://summernote.org/deep-dive/#insertimage);
noteRef.current.summernote("insertImage", url, function ($image) {});

// Insert an element or textnode. (https://summernote.org/deep-dive/#insertnode);
noteRef.current.summernote("insertNode", node);

// please visit https://summernote.org/deep-dive/#basic-api to discover more of this apis
```

##### Contribution

Pull requests and contributions are welcome
