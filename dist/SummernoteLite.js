"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_PROPS = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const SummernoteLite = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const noteRef = (0, _react.useRef)(),
    formRef = (0, _react.useRef)(),
    hasMounted = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, () => ({
    summernote: function summernote() {
      return window.$(noteRef.current).summernote(...[...arguments]);
    },
    getNoteRef: () => noteRef.current,
    getFormRef: () => formRef.current
  }));
  (0, _react.useEffect)(() => {
    require('./glob');
    require('./dist/summernote-lite.min.css');
    require('./dist/summernote-lite.min.js');
    const refactoredProps = _objectSpread(_objectSpread({}, DEFAULT_PROPS), props);
    window.$(noteRef.current).summernote(refactoredProps);
  }, []);
  (0, _react.useEffect)(() => {
    if (hasMounted.current) {
      window.$(noteRef.current).summernote({
        callbacks: props.callbacks
      });
    }
    hasMounted.current = true;
  }, [props.callbacks]);
  (0, _react.useEffect)(() => {
    if (props.defaultCodeValue && typeof props.defaultCodeValue === 'string' && props.defaultCodeValue !== window.$(noteRef.current).val()) window.$(noteRef.current).summernote('code', props.defaultCodeValue);
  }, [props.defaultCodeValue]);
  if (typeof props.useDiv === 'boolean' && props.useDiv) return /*#__PURE__*/_react.default.createElement("div", {
    ref: noteRef
  });
  return /*#__PURE__*/_react.default.createElement("form", {
    ref: formRef
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    ref: noteRef
  }));
});
const DEFAULT_PROPS = {
  placeholder: 'Write something here...',
  tabsize: 2,
  height: 370,
  blockquoteBreakingLevel: 0,
  fontNames: ['Arial', 'Brush Script MT', 'Calibri', 'Candara', 'Century Gothic', 'Consolas', 'Dejavu Sans', 'Franklin Gothic', 'Gill Sans', 'Geneva', 'Georgia', 'Garamond', 'Helvetica', 'Lucida Sans', 'MS Sans Serif', 'Neue Helvetica', 'Optima', 'Segoe UI', 'Tahoma', 'Trebuchet MS', 'Verdana'],
  toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear', 'strikethrough', 'superscript', 'subscript']], ['fontsize', ['fontsize']], ['fontname', ['fontname']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture', 'video', 'hr']], ['view', ['fullscreen', 'codeview', 'help']]]
};
exports.DEFAULT_PROPS = DEFAULT_PROPS;
var _default = SummernoteLite;
exports.default = _default;