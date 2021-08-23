(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{UQSp:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},qcj2:function(e,t,r){"use strict";r.r(t);var i=r("KHd+"),o=r("UQSp"),a=r("oCYn");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:o.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===n(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:r[e]=function(){return s[e]}}))},v=a.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",h={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> Blob"};var _=function(e){e.options[c]&&(e.options[c]=h),a.a.util.defineReactive(e.options,c,h),e.options.computed=v.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},p=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"awaiteddom-spanspan-blob"}},[r("a",{attrs:{href:"#awaiteddom-spanspan-blob","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),r("span",[e._v("/")]),e._v(" Blob")]),r("div",{staticClass:"overview"},[e._v("The "),r("strong",[r("code",[e._v("Blob")])]),e._v(" object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a "),r("code",[e._v("ReadableStream")]),e._v(" so its methods can be used for processing the data.")]),r("div",{staticClass:"overview"},[e._v("Blobs can represent data that isn't necessarily in a JavaScript-native format. The "),r("code",[e._v("File")]),e._v(" interface is based on "),r("code",[e._v("Blob")]),e._v(", inheriting blob functionality and expanding it to support files on the user's system.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"size"}},[r("a",{attrs:{href:"#size","aria-hidden":"true"}},[e._v("#")]),e._v(".size "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The size, in bytes, of the data contained in the "),r("code",[e._v("Blob")]),e._v(" object.")]),r("h4",{attrs:{id:"type-promisenumber"}},[r("a",{attrs:{href:"#type-promisenumber","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<number>")])]),r("h3",{attrs:{id:"type"}},[r("a",{attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v(".type "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A string indicating the MIME type of the data contained in the "),r("code",[e._v("Blob")]),e._v(". If the type is unknown, this string is empty.")]),r("h4",{attrs:{id:"type-promisestring"}},[r("a",{attrs:{href:"#type-promisestring","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"arrayBuffer"}},[r("a",{attrs:{href:"#arrayBuffer","aria-hidden":"true"}},[e._v("#")]),e._v(".arrayBuffer"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a promise that resolves with an "),r("code",[e._v("ArrayBuffer")]),e._v(" containing the entire contents of the "),r("code",[e._v("Blob")]),e._v(" as binary data.")]),r("h4",{attrs:{id:"returns-promisearraybuffer"}},[r("a",{attrs:{href:"#returns-promisearraybuffer","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<ArrayBuffer>")])]),r("h3",{attrs:{id:"slice"}},[r("a",{attrs:{href:"#slice","aria-hidden":"true"}},[e._v("#")]),e._v(".slice"),r("em",[e._v("(start?, end?, contentType?)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a new "),r("code",[e._v("Blob")]),e._v(" object containing the data in the specified range of bytes of the blob on which it's called.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("start "),r("code",{pre:!0},[e._v("number")]),e._v(". An index into the "),r("code",[e._v("Blob")]),e._v(" indicating the first byte to include in the new "),r("code",[e._v("Blob")]),e._v(". If you specify a negative value, it's treated as an offset from the end of the "),r("code",[e._v("Blob")]),e._v(" toward the beginning. For example, -10 would be the 10th from last byte in the "),r("code",[e._v("Blob")]),e._v(". The default value is 0. If you specify a value for "),r("code",[e._v("start")]),e._v(" that is larger than the size of the source "),r("code",[e._v("Blob")]),e._v(", the returned "),r("code",[e._v("Blob")]),e._v(" has size 0 and contains no data.")]),r("li",[e._v("end "),r("code",{pre:!0},[e._v("number")]),e._v(". An index into the "),r("code",[e._v("Blob")]),e._v(" indicating the first byte that will "),r("em",[e._v("not")]),e._v(" be included in the new "),r("code",[e._v("Blob")]),e._v(" (i.e. the byte exactly at this index is not included). If you specify a negative value, it's treated as an offset from the end of the "),r("code",[e._v("Blob")]),e._v(" toward the beginning. For example, -10 would be the 10th from last byte in the "),r("code",[e._v("Blob")]),e._v(". The default value is "),r("code",[e._v("size")]),e._v(".")]),r("li",[e._v("contentType "),r("code",{pre:!0},[e._v("string")]),e._v(". The content type to assign to the new "),r("code",[e._v("Blob")]),e._v("; this will be the value of its "),r("code",[e._v("type")]),e._v(" property. The default value is an empty string.")])]),r("h4",{attrs:{id:"returns-promiseblob"}},[r("a",{attrs:{href:"#returns-promiseblob","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Blob>")])]),r("h3",{attrs:{id:"text"}},[r("a",{attrs:{href:"#text","aria-hidden":"true"}},[e._v("#")]),e._v(".text"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a promise that resolves with a "),r("code",{pre:!0},[e._v("string")]),e._v(" containing the entire contents of the "),r("code",[e._v("Blob")]),e._v(" interpreted as UTF-8 text.")]),r("h4",{attrs:{id:"returns-promisestring"}},[r("a",{attrs:{href:"#returns-promisestring","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h2",{attrs:{id:"unimplemented-specs"}},[r("a",{attrs:{href:"#unimplemented-specs","aria-hidden":"true"}},[e._v("#")]),e._v("Unimplemented Specs")]),r("h4",{attrs:{id:"methods-1"}},[r("a",{attrs:{href:"#methods-1","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("table",[r("thead",[r("tr",[r("th"),r("th")])]),r("tbody",[r("tr",[r("td",[r("code",{pre:!0},[e._v("stream()")])]),r("td")])])])])}),[],!1,null,null,null);"function"==typeof d&&d(p),"function"==typeof _&&_(p);t.default=p.exports}}]);