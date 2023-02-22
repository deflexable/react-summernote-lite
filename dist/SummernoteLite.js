"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
require("./glob");
require("./dist/summernote-lite.min.css");
require("./dist/summernote-lite.min");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const SummernoteLite = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const noteRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, () => ({
    executeCommand: function executeCommand() {
      return window.$(noteRef.current).summernote(...[...arguments]);
    }
  }));
  (0, _react.useEffect)(() => {
    const refactoredProps = _objectSpread(_objectSpread({}, DEFAULT_PROPS), props);
    window.$(noteRef.current).summernote(refactoredProps);
  }, [props]);
  return /*#__PURE__*/_react.createElement("form", {
    id: "summer-form-note"
  }, /*#__PURE__*/_react.createElement("textarea", {
    ref: noteRef,
    name: "editordata"
  }));
});
const DEFAULT_PROPS = {
  placeholder: 'Write something here...',
  tabsize: 2,
  height: 380,
  blockquoteBreakingLevel: 0,
  fontNames: ['Arial', 'Brush Script MT', 'Calibri', 'Candara', 'Century Gothic', 'Consolas', 'Dejavu Sans', 'Franklin Gothic', 'Gill Sans', 'Geneva', 'Georgia', 'Garamond', 'Helvetica', 'Lucida Sans', 'MS Sans Serif', 'Neue Helvetica', 'Optima', 'Segoe UI', 'Tahoma', 'Trebuchet MS', 'Verdana'],
  toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear', 'strikethrough', 'superscript', 'subscript']], ['fontsize', ['fontsize']], ['fontname', ['fontname']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture', 'video', 'hr']], ['view', ['fullscreen', 'codeview', 'help']]]
};
var _default = SummernoteLite;
exports.default = _default;