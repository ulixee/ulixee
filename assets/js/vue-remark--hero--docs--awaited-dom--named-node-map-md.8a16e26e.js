(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{UQSp:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},XUE3:function(e,t,r){"use strict";r.r(t);var a=r("KHd+"),n=r("UQSp"),o=r("oCYn");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:r[e]=function(){return i[e]}}))},v=o.a.config.optionMergeStrategies,m="__vueRemarkFrontMatter",u={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> NamedNodeMap"};var c=function(e){e.options[m]&&(e.options[m]=u),o.a.util.defineReactive(e.options,m,u),e.options.computed=v.computed({$frontmatter:function(){return e.options[m]}},e.options.computed)},p=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"awaiteddom-spanspan-namednodemap"}},[r("a",{attrs:{href:"#awaiteddom-spanspan-namednodemap","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),r("span",[e._v("/")]),e._v(" NamedNodeMap")]),r("div",{staticClass:"overview"},[e._v("The "),r("code",[r("strong",[e._v("NamedNodeMap")])]),e._v(" interface represents a collection of "),r("code",[e._v("Attr")]),e._v(" objects. Objects inside a "),r("code",[e._v("NamedNodeMap")]),e._v(" are not in any particular order, unlike "),r("code",[e._v("NodeList")]),e._v(", although they may be accessed by an index as in an array.")]),r("div",{staticClass:"overview"},[e._v("A "),r("code",[e._v("NamedNodeMap")]),e._v(" object is "),r("em",[e._v("live")]),e._v(" and will thus be auto-updated if changes are made to its contents internally or elsewhere.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"length"}},[r("a",{attrs:{href:"#length","aria-hidden":"true"}},[e._v("#")]),e._v(".length "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the amount of objects in the map.")]),r("h4",{attrs:{id:"type-promisenumber"}},[r("a",{attrs:{href:"#type-promisenumber","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<number>")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"getNamedItem"}},[r("a",{attrs:{href:"#getNamedItem","aria-hidden":"true"}},[e._v("#")]),e._v(".getNamedItem"),r("em",[e._v("(qualifiedName)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("code",[e._v("Attr")]),e._v(", corresponding to the given name.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("qualifiedName "),r("code",{pre:!0},[e._v("string")]),e._v(". "),r("code",[e._v("name")]),e._v(" is the name of the desired attribute")])]),r("h4",{attrs:{id:"returns-promiseattr"}},[r("a",{attrs:{href:"#returns-promiseattr","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Attr>")])]),r("h3",{attrs:{id:"getNamedItemNS"}},[r("a",{attrs:{href:"#getNamedItemNS","aria-hidden":"true"}},[e._v("#")]),e._v(".getNamedItemNS"),r("em",[e._v("(namespace, localName)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("code",[e._v("Attr")]),e._v(" identified by a namespace and related local name.")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("namespace "),r("code",{pre:!0},[e._v("string")]),e._v(". Needs content.")]),r("li",[e._v("localName "),r("code",{pre:!0},[e._v("string")]),e._v(". Needs content.")])]),r("h4",{attrs:{id:"returns-promiseattr-1"}},[r("a",{attrs:{href:"#returns-promiseattr-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Attr>")])]),r("h3",{attrs:{id:"item"}},[r("a",{attrs:{href:"#item","aria-hidden":"true"}},[e._v("#")]),e._v(".item"),r("em",[e._v("(index)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the "),r("code",[e._v("Attr")]),e._v(" at the given index, or "),r("code",[e._v("null")]),e._v(" if the index is higher or equal to the number of nodes.")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("index "),r("code",{pre:!0},[e._v("number")]),e._v(". Needs content.")])]),r("h4",{attrs:{id:"returns-promiseattr-2"}},[r("a",{attrs:{href:"#returns-promiseattr-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Attr>")])]),r("h2",{attrs:{id:"unimplemented-specs"}},[r("a",{attrs:{href:"#unimplemented-specs","aria-hidden":"true"}},[e._v("#")]),e._v("Unimplemented Specs")]),r("h4",{attrs:{id:"methods-1"}},[r("a",{attrs:{href:"#methods-1","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("table",[r("thead",[r("tr",[r("th"),r("th")])]),r("tbody",[r("tr",[r("td",[r("code",{pre:!0},[e._v("removeNamedItem()")])]),r("td",[r("code",{pre:!0},[e._v("removeNamedItemNS()")])])]),r("tr",[r("td",[r("code",{pre:!0},[e._v("setNamedItem()")])]),r("td",[r("code",{pre:!0},[e._v("setNamedItemNS()")])])])])])])}),[],!1,null,null,null);"function"==typeof d&&d(p),"function"==typeof c&&c(p);t.default=p.exports}}]);