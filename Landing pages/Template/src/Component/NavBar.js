"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_Data=_interopRequireDefault(require("./Data"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){var r,t;return"function"!=typeof WeakMap?null:(r=new WeakMap,t=new WeakMap,(_getRequireWildcardCache=function(e){return e?t:r})(e))}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};r=_getRequireWildcardCache(r);if(r&&r.has(e))return r.get(e);var t,a,n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&((a=o?Object.getOwnPropertyDescriptor(e,t):null)&&(a.get||a.set)?Object.defineProperty(n,t,a):n[t]=e[t]);return n.default=e,r&&r.set(e,n),n}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,o,l,u=[],i=!0,c=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(a=o.call(t)).done)&&(u.push(a.value),u.length!==r);i=!0);}catch(e){c=!0,n=e}finally{try{if(!i&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw n}}return u}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){var t;if(e)return"string"==typeof e?_arrayLikeToArray(e,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var allCategories=_toConsumableArray(new Set(_Data.default.map(function(e){return e.category}))),_useState=(0,_react.useState)(allCategories),_useState2=_slicedToArray(_useState,1),categories=_useState2[0],NavBar=function(){return categories.length?_react.default.createElement("section",{className:"navbar container"},_react.default.createElement("div",{className:"Logo"},_react.default.createElement("img",{decoding:"async",className:"logo",src:"./imgaes/logo.png",alt:"navbar logo"})),_react.default.createElement("div",{className:"icon"},_react.default.createElement("i",{className:"fa-solid fa-bars"}),_react.default.createElement("ul",null,categories.map(function(e,r){return _react.default.createElement("li",{key:r},_react.default.createElement("a",null,e))})))):null},_default=NavBar;exports.default=_default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci5qcyJdLCJuYW1lcyI6WyJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9EYXRhIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9fZXNNb2R1bGUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJub2RlSW50ZXJvcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIldlYWtNYXAiLCJjYWNoZSIsImhhcyIsImdldCIsImtleSIsImRlc2MiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzZXQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsImkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwibmV4dCIsImRvbmUiLCJwdXNoIiwibGVuZ3RoIiwiZXJyIiwicmV0dXJuIiwiQXJyYXkiLCJpc0FycmF5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIm8iLCJtaW5MZW4iLCJuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwibmFtZSIsImZyb20iLCJ0ZXN0IiwiaXRlciIsImxlbiIsImFycjIiLCJhbGxDYXRlZ29yaWVzIiwiU2V0IiwibWFwIiwiaXRlbSIsImNhdGVnb3J5IiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiY2F0ZWdvcmllcyIsIk5hdkJhciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkZWNvZGluZyIsInNyYyIsImFsdCIsImNhdGVnb3JpZSIsImluZHgiLCJfZGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQSxTQUFTQSxRQUFRQyxHQUFrQyxPQUFPRCxRQUFVLFlBQWMsT0FBT0UsUUFBVSxVQUFZLE9BQU9BLE9BQU9DLFNBQVcsU0FBVUYsR0FBTyxPQUFPLE9BQU9BLENBQUksRUFBSyxTQUFVQSxHQUFPLE9BQU9BLEdBQU8sWUFBYyxPQUFPQyxRQUFVRCxFQUFJRyxjQUFnQkYsUUFBVUQsSUFBUUMsT0FBT0csVUFBWSxTQUFXLE9BQU9KLENBQUksR0FBWUEsQ0FBRyxDQUFFLENBQzlVSyxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FDM0NDLE1BQU8sQ0FBQSxDLENBQ1IsRUFDREQsUUFBUUUsUUFBVSxLQUFBLEVBQ2xCLElBQUlDLE9BQVNDLHdCQUF3QkMsUUFBUSxPQUFPLENBQUMsRUFDakRDLE1BQVFDLHVCQUF1QkYsUUFBUSxRQUFRLENBQUMsRUFDcEQsU0FBU0UsdUJBQXVCZCxHQUFPLE9BQU9BLEdBQU9BLEVBQUllLFdBQWFmLEVBQU0sQ0FBRVMsUUFBU1QsQ0FBRyxDQUFHLENBQzdGLFNBQVNnQix5QkFBeUJDLEdBQWUsSUFBb0RDLEVBQXVDQyxFQUEzRixNQUF1QixZQUFuQixPQUFPQyxRQUErQixNQUFVRixFQUFvQixJQUFJRSxRQUFlRCxFQUFtQixJQUFJQyxTQUFtQkoseUJBQTJCLFNBQWtDQyxHQUFlLE9BQU9BLEVBQWNFLEVBQW1CRCxDQUFrQixHQUFJRCxDQUFXLEVBQUUsQ0FDN1UsU0FBU04sd0JBQXdCWCxFQUFLaUIsR0FBZSxHQUFJLENBQUNBLEdBQWVqQixHQUFPQSxFQUFJZSxXQUFjLE9BQU9mLEVBQU8sR0FBWSxPQUFSQSxHQUFpQyxXQUFqQkQsUUFB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LFFBQVF5RSxjQUFjLE1BQU8sQ0FDcERDLFVBQVcsTSxFQUNHekUsT0FBT0QsUUFBUXlFLGNBQWMsSUFBSyxDQUNoREMsVUFBVyxrQixDQUNaLEVBQWdCekUsT0FBT0QsUUFBUXlFLGNBQWMsS0FBTSxLQUFNRixXQUFXTixJQUFJLFNBQVVhLEVBQVdDLEdBQzVGLE9BQW9COUUsT0FBT0QsUUFBUXlFLGNBQWMsS0FBTSxDQUNyRDFELElBQUtnRSxDLEVBQ1M5RSxPQUFPRCxRQUFReUUsY0FBYyxJQUFLLEtBQU1LLENBQVMsQ0FBQyxDLENBQ25FLENBQUMsQ0FBQyxDQUFDLEVBbkJLLEksRUFxQlBFLFNBQVdSLE9BQ2YxRSxRQUFRRSxRQUFVZ0YiLCJmaWxlIjoiTmF2QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfRGF0YSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRGF0YVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IG51bGwgPT0gYXJyID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAobnVsbCAhPSBfaSkgeyB2YXIgX3MsIF9lLCBfeCwgX3IsIF9hcnIgPSBbXSwgX24gPSAhMCwgX2QgPSAhMTsgdHJ5IHsgaWYgKF94ID0gKF9pID0gX2kuY2FsbChhcnIpKS5uZXh0LCAwID09PSBpKSB7IGlmIChPYmplY3QoX2kpICE9PSBfaSkgcmV0dXJuOyBfbiA9ICExOyB9IGVsc2UgZm9yICg7ICEoX24gPSAoX3MgPSBfeC5jYWxsKF9pKSkuZG9uZSkgJiYgKF9hcnIucHVzaChfcy52YWx1ZSksIF9hcnIubGVuZ3RoICE9PSBpKTsgX24gPSAhMCk7IH0gY2F0Y2ggKGVycikgeyBfZCA9ICEwLCBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBudWxsICE9IF9pLnJldHVybiAmJiAoX3IgPSBfaS5yZXR1cm4oKSwgT2JqZWN0KF9yKSAhPT0gX3IpKSByZXR1cm47IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSB9XG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07IHJldHVybiBhcnIyOyB9XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnZhciBhbGxDYXRlZ29yaWVzID0gX3RvQ29uc3VtYWJsZUFycmF5KG5ldyBTZXQoX0RhdGEuZGVmYXVsdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgcmV0dXJuIGl0ZW0uY2F0ZWdvcnk7XG59KSkpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG52YXIgX3VzZVN0YXRlID0gKDAsIF9yZWFjdC51c2VTdGF0ZSkoYWxsQ2F0ZWdvcmllcyksXG4gIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDEpLFxuICBjYXRlZ29yaWVzID0gX3VzZVN0YXRlMlswXTtcbnZhciBOYXZCYXIgPSBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGlmICghY2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIHtcbiAgICBjbGFzc05hbWU6IFwibmF2YmFyIGNvbnRhaW5lclwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiTG9nb1wiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgIGNsYXNzTmFtZTogXCJsb2dvXCIsXG4gICAgc3JjOiBcIi4vaW1nYWVzL2xvZ28ucG5nXCIsXG4gICAgYWx0OiBcIm5hdmJhciBsb2dvXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImljb25cIlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgIGNsYXNzTmFtZTogXCJmYS1zb2xpZCBmYS1iYXJzXCJcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgY2F0ZWdvcmllcy5tYXAoZnVuY3Rpb24gKGNhdGVnb3JpZSwgaW5keCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgIGtleTogaW5keFxuICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjYXRlZ29yaWUpKTtcbiAgfSkpKSk7XG59O1xudmFyIF9kZWZhdWx0ID0gTmF2QmFyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il19
