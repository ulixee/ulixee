(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{UQSp:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},"fh2/":function(e,t,r){"use strict";r.r(t);var a=r("KHd+"),o=r("UQSp"),s=r("oCYn");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var d={VueRemarkRoot:o.a},i=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(d).forEach((function(e){"object"===n(d[e])&&"function"==typeof d[e].render||"function"==typeof d[e]&&"function"==typeof d[e].options.render?t[e]=d[e]:r[e]=function(){return d[e]}}))},v=s.a.config.optionMergeStrategies,_="__vueRemarkFrontMatter",c={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> Range"};var h=function(e){e.options[_]&&(e.options[_]=c),s.a.util.defineReactive(e.options,_,c),e.options.computed=v.computed({$frontmatter:function(){return e.options[_]}},e.options.computed)},u=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"awaiteddom-spanspan-range"}},[r("a",{attrs:{href:"#awaiteddom-spanspan-range","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),r("span",[e._v("/")]),e._v(" Range")]),r("div",{staticClass:"overview"},[e._v("The "),r("strong",[r("code",[e._v("Range")])]),e._v(" interface represents a fragment of a document that can contain nodes and parts of text nodes.")]),r("div",{staticClass:"overview"},[e._v("A range can be created by using the "),r("code",[e._v("Document.createRange()")]),e._v(" method. Range objects can also be retrieved by using the "),r("code",[e._v("getRangeAt()")]),e._v(" method of the "),r("code",[e._v("Selection")]),e._v(" object or the "),r("code",[e._v("caretRangeFromPoint()")]),e._v(" method of the "),r("code",[e._v("Document")]),e._v(" object.")]),r("div",{staticClass:"overview"},[e._v("There also is the "),r("code",[e._v("Range()")]),e._v(" constructor available.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"commonAncestorContainer"}},[r("a",{attrs:{href:"#commonAncestorContainer","aria-hidden":"true"}},[e._v("#")]),e._v(".commonAncestorContainer "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the deepest "),r("code",[e._v("Node")]),e._v(" that contains the "),r("code",[e._v("startContainer")]),e._v(" and "),r("code",[e._v("endContainer")]),e._v(" nodes.")]),r("h4",{attrs:{id:"type-supernode"}},[r("a",{attrs:{href:"#type-supernode","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("a",{attrs:{href:"/docs/awaited-dom/super-node"}},[r("code",{pre:!0},[e._v("SuperNode")])])]),r("h3",{attrs:{id:"collapsed"}},[r("a",{attrs:{href:"#collapsed","aria-hidden":"true"}},[e._v("#")]),e._v(".collapsed "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A Boolean value which is "),r("code",[e._v("true")]),e._v(" if the range is "),r("strong",[e._v("collapsed")]),e._v(". A collapsed range is one whose start position and end position are the same, resulting in a zero-character-long range.")]),r("h4",{attrs:{id:"type-promiseboolean"}},[r("a",{attrs:{href:"#type-promiseboolean","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<boolean>")])]),r("h3",{attrs:{id:"endContainer"}},[r("a",{attrs:{href:"#endContainer","aria-hidden":"true"}},[e._v("#")]),e._v(".endContainer "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The DOM "),r("code",[e._v("Node")]),e._v(" in which the end of the range, as specified by the "),r("code",[e._v("endOffset")]),e._v(" property, is located.")]),r("h4",{attrs:{id:"type-supernode-1"}},[r("a",{attrs:{href:"#type-supernode-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("a",{attrs:{href:"/docs/awaited-dom/super-node"}},[r("code",{pre:!0},[e._v("SuperNode")])])]),r("h3",{attrs:{id:"endOffset"}},[r("a",{attrs:{href:"#endOffset","aria-hidden":"true"}},[e._v("#")]),e._v(".endOffset "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An integer value indicating the offset, in characters, from the beginning of the node's contents to the beginning of the range represented by the range object. This value must be less than the length of the "),r("code",[e._v("endContainer")]),e._v(" node.")]),r("h4",{attrs:{id:"type-promisenumber"}},[r("a",{attrs:{href:"#type-promisenumber","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<number>")])]),r("h3",{attrs:{id:"startContainer"}},[r("a",{attrs:{href:"#startContainer","aria-hidden":"true"}},[e._v("#")]),e._v(".startContainer "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The DOM "),r("code",[e._v("Node")]),e._v(" in which the beginning of the range, as specified by the "),r("code",[e._v("startOffset")]),e._v(" property, is located.")]),r("h4",{attrs:{id:"type-supernode-2"}},[r("a",{attrs:{href:"#type-supernode-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("a",{attrs:{href:"/docs/awaited-dom/super-node"}},[r("code",{pre:!0},[e._v("SuperNode")])])]),r("h3",{attrs:{id:"startOffset"}},[r("a",{attrs:{href:"#startOffset","aria-hidden":"true"}},[e._v("#")]),e._v(".startOffset "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An integer value indicating the offset, in characters, from the beginning of the node's contents to the last character of the contents referred to  by the range object. This value must be less than the length of the node indicated in "),r("code",[e._v("startContainer")]),e._v(".")]),r("h4",{attrs:{id:"type-promisenumber-1"}},[r("a",{attrs:{href:"#type-promisenumber-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<number>")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"cloneContents"}},[r("a",{attrs:{href:"#cloneContents","aria-hidden":"true"}},[e._v("#")]),e._v(".cloneContents"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("code",[e._v("DocumentFragment")]),e._v(" copying the nodes of a "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"returns-documentfragment"}},[r("a",{attrs:{href:"#returns-documentfragment","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("a",{attrs:{href:"/docs/awaited-dom/document-fragment"}},[r("code",{pre:!0},[e._v("DocumentFragment")])])]),r("h3",{attrs:{id:"cloneRange"}},[r("a",{attrs:{href:"#cloneRange","aria-hidden":"true"}},[e._v("#")]),e._v(".cloneRange"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("code",[e._v("Range")]),e._v(" object with boundary points identical to the cloned "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"returns-range"}},[r("a",{attrs:{href:"#returns-range","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("a",{attrs:{href:"/docs/awaited-dom/range"}},[r("code",{pre:!0},[e._v("Range")])])]),r("h3",{attrs:{id:"collapse"}},[r("a",{attrs:{href:"#collapse","aria-hidden":"true"}},[e._v("#")]),e._v(".collapse"),r("em",[e._v("(toStart?)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Collapses the "),r("code",[e._v("Range")]),e._v(" to one of its boundary points.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("toStart "),r("code",{pre:!0},[e._v("boolean")]),e._v(". A "),r("code",{pre:!0},[e._v("boolean")]),e._v(" value: "),r("code",[e._v("true")]),e._v(" collapses the "),r("code",[e._v("Range")]),e._v(" to its start, "),r("code",[e._v("false")]),e._v(" to its end. If omitted, it defaults to "),r("code",[e._v("false")]),r("span",{staticClass:"icon-only-inline",attrs:{title:"This is an experimental API that should not be used in production code."}},[r("i",{staticClass:"icon-beaker"})]),e._v(".")])]),r("h4",{attrs:{id:"returns-promisevoid"}},[r("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"compareBoundaryPoints"}},[r("a",{attrs:{href:"#compareBoundaryPoints","aria-hidden":"true"}},[e._v("#")]),e._v(".compareBoundaryPoints"),r("em",[e._v("(how, sourceRange)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Compares the boundary points of the "),r("code",[e._v("Range")]),e._v(" with another "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("how "),r("code",{pre:!0},[e._v("number")]),e._v(". A constant describing the comparison method:  "),r("ul",[r("li",[r("code",[e._v("Range.END_TO_END")]),e._v(" compares the end boundary-point of *sourceRange* to the end boundary-point of "),r("code",[e._v("Range")]),e._v(".")]),r("li",[r("code",[e._v("Range.END_TO_START")]),e._v(" compares the end boundary-point of *sourceRange* to the start boundary-point of "),r("code",[e._v("Range")]),e._v(".")]),r("li",[r("code",[e._v("Range.START_TO_END")]),e._v(" compares the start boundary-point of *sourceRange* to the end boundary-point of "),r("code",[e._v("Range")]),e._v(".")]),r("li",[r("code",[e._v("Range.START_TO_START")]),e._v(" compares the start boundary-point of *sourceRange* to the start boundary-point of "),r("code",[e._v("Range")]),e._v(".")])]),r("p",[e._v("If the value of the parameter is invalid, a "),r("code",[e._v("DOMException")]),e._v(" with a "),r("code",[e._v("NotSupportedError")]),e._v(" code is thrown.")])]),r("li",[e._v("sourceRange "),r("a",{attrs:{href:"/docs/awaited-dom/range"}},[r("code",{pre:!0},[e._v("Range")])]),e._v(". A "),r("code",[e._v("Range")]),e._v(" to compare boundary points with the range.")])]),r("h4",{attrs:{id:"returns-promisenumber"}},[r("a",{attrs:{href:"#returns-promisenumber","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<number>")])]),r("h3",{attrs:{id:"comparePoint"}},[r("a",{attrs:{href:"#comparePoint","aria-hidden":"true"}},[e._v("#")]),e._v(".comparePoint"),r("em",[e._v("(node, offset)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns -1, 0, or 1 indicating whether the point occurs before, inside, or after the "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" to compare with the "),r("code",[e._v("Range")]),e._v(".")]),r("li",[e._v("offset "),r("code",{pre:!0},[e._v("number")]),e._v(". An integer greater than or equal to zero representing the offset inside the "),r("em",[e._v("referenceNode")]),e._v(".")])]),r("h4",{attrs:{id:"returns-promisenumber-1"}},[r("a",{attrs:{href:"#returns-promisenumber-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<number>")])]),r("h3",{attrs:{id:"createContextualFragment"}},[r("a",{attrs:{href:"#createContextualFragment","aria-hidden":"true"}},[e._v("#")]),e._v(".createContextualFragment"),r("em",[e._v("(fragment)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("code",[e._v("DocumentFragment")]),e._v(" created from a given string of code.")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("fragment "),r("code",{pre:!0},[e._v("string")]),e._v(". Text that contains text and tags to be converted to a document fragment.")])]),r("h4",{attrs:{id:"returns-documentfragment-1"}},[r("a",{attrs:{href:"#returns-documentfragment-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("a",{attrs:{href:"/docs/awaited-dom/document-fragment"}},[r("code",{pre:!0},[e._v("DocumentFragment")])])]),r("h3",{attrs:{id:"deleteContents"}},[r("a",{attrs:{href:"#deleteContents","aria-hidden":"true"}},[e._v("#")]),e._v(".deleteContents"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Removes the contents of a "),r("code",[e._v("Range")]),e._v(" from the "),r("code",[e._v("Document")]),e._v(".")]),r("h4",{attrs:{id:"returns-promisevoid-1"}},[r("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"detach"}},[r("a",{attrs:{href:"#detach","aria-hidden":"true"}},[e._v("#")]),e._v(".detach"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Releases the "),r("code",[e._v("Range")]),e._v(" from use to improve performance.")]),r("h4",{attrs:{id:"returns-promisevoid-2"}},[r("a",{attrs:{href:"#returns-promisevoid-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"extractContents"}},[r("a",{attrs:{href:"#extractContents","aria-hidden":"true"}},[e._v("#")]),e._v(".extractContents"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Moves contents of a "),r("code",[e._v("Range")]),e._v(" from the document tree into a "),r("code",[e._v("DocumentFragment")]),e._v(".")]),r("h4",{attrs:{id:"returns-documentfragment-2"}},[r("a",{attrs:{href:"#returns-documentfragment-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("a",{attrs:{href:"/docs/awaited-dom/document-fragment"}},[r("code",{pre:!0},[e._v("DocumentFragment")])])]),r("h3",{attrs:{id:"getBoundingClientRect"}},[r("a",{attrs:{href:"#getBoundingClientRect","aria-hidden":"true"}},[e._v("#")]),e._v(".getBoundingClientRect"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("code",[e._v("DOMRect")]),e._v(" object which bounds the entire contents of the "),r("code",[e._v("Range")]),e._v("; this would be the union of all the rectangles returned by "),r("code",[e._v("range.getClientRects()")]),e._v(".")]),r("h4",{attrs:{id:"returns-domrect"}},[r("a",{attrs:{href:"#returns-domrect","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("a",{attrs:{href:"/docs/awaited-dom/dom-rect"}},[r("code",{pre:!0},[e._v("DOMRect")])])]),r("h3",{attrs:{id:"getClientRects"}},[r("a",{attrs:{href:"#getClientRects","aria-hidden":"true"}},[e._v("#")]),e._v(".getClientRects"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a list of "),r("code",[e._v("DOMRect")]),e._v(" objects that aggregates the results of "),r("code",[e._v("Element.getClientRects()")]),e._v(" for all the elements in the "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"returns-domrectlist"}},[r("a",{attrs:{href:"#returns-domrectlist","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("DOMRectList")])]),r("h3",{attrs:{id:"insertNode"}},[r("a",{attrs:{href:"#insertNode","aria-hidden":"true"}},[e._v("#")]),e._v(".insertNode"),r("em",[e._v("(node)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Insert a "),r("code",[e._v("Node")]),e._v(" at the start of a "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"arguments-4"}},[r("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" to insert at the start of the "),r("code",[e._v("range")]),e._v(".")])]),r("h4",{attrs:{id:"returns-promisevoid-3"}},[r("a",{attrs:{href:"#returns-promisevoid-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"intersectsNode"}},[r("a",{attrs:{href:"#intersectsNode","aria-hidden":"true"}},[e._v("#")]),e._v(".intersectsNode"),r("em",[e._v("(node)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("code",[e._v("boolean")]),e._v(" indicating whether the given node intersects the "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"arguments-5"}},[r("a",{attrs:{href:"#arguments-5","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" to compare with the "),r("code",[e._v("Range")]),e._v(".")])]),r("h4",{attrs:{id:"returns-promiseboolean"}},[r("a",{attrs:{href:"#returns-promiseboolean","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<boolean>")])]),r("h3",{attrs:{id:"isPointInRange"}},[r("a",{attrs:{href:"#isPointInRange","aria-hidden":"true"}},[e._v("#")]),e._v(".isPointInRange"),r("em",[e._v("(node, offset)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("code",[e._v("boolean")]),e._v(" indicating whether the given point is in the "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"arguments-6"}},[r("a",{attrs:{href:"#arguments-6","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" to compare with the "),r("code",[e._v("Range")]),e._v(".")]),r("li",[e._v("offset "),r("code",{pre:!0},[e._v("number")]),e._v(". The offset into "),r("code",[e._v("Node")]),e._v(" of the point to compare with the "),r("code",[e._v("Range")]),e._v(".")])]),r("h4",{attrs:{id:"returns-promiseboolean-1"}},[r("a",{attrs:{href:"#returns-promiseboolean-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<boolean>")])]),r("h3",{attrs:{id:"selectNode"}},[r("a",{attrs:{href:"#selectNode","aria-hidden":"true"}},[e._v("#")]),e._v(".selectNode"),r("em",[e._v("(node)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the "),r("code",[e._v("Range")]),e._v(" to contain the "),r("code",[e._v("Node")]),e._v(" and its contents.")]),r("h4",{attrs:{id:"arguments-7"}},[r("a",{attrs:{href:"#arguments-7","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" to select within a "),r("code",[e._v("Range")]),e._v(".")])]),r("h4",{attrs:{id:"returns-promisevoid-4"}},[r("a",{attrs:{href:"#returns-promisevoid-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"selectNodeContents"}},[r("a",{attrs:{href:"#selectNodeContents","aria-hidden":"true"}},[e._v("#")]),e._v(".selectNodeContents"),r("em",[e._v("(node)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the "),r("code",[e._v("Range")]),e._v(" to contain the contents of a "),r("code",[e._v("Node")]),e._v(".")]),r("h4",{attrs:{id:"arguments-8"}},[r("a",{attrs:{href:"#arguments-8","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" whose contents will be selected within a "),r("code",[e._v("Range")]),e._v(".")])]),r("h4",{attrs:{id:"returns-promisevoid-5"}},[r("a",{attrs:{href:"#returns-promisevoid-5","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"setEnd"}},[r("a",{attrs:{href:"#setEnd","aria-hidden":"true"}},[e._v("#")]),e._v(".setEnd"),r("em",[e._v("(node, offset)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the end position of a "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"arguments-9"}},[r("a",{attrs:{href:"#arguments-9","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" inside which the "),r("code",[e._v("Range")]),e._v(" should end.")]),r("li",[e._v("offset "),r("code",{pre:!0},[e._v("number")]),e._v(". An integer greater than or equal to zero representing the offset for the end of the "),r("code",[e._v("Range")]),e._v(" from the start of "),r("code",[e._v("endNode")]),e._v(".")])]),r("h4",{attrs:{id:"returns-promisevoid-6"}},[r("a",{attrs:{href:"#returns-promisevoid-6","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"setEndAfter"}},[r("a",{attrs:{href:"#setEndAfter","aria-hidden":"true"}},[e._v("#")]),e._v(".setEndAfter"),r("em",[e._v("(node)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the end position of a "),r("code",[e._v("Range")]),e._v(" relative to another "),r("code",[e._v("Node")]),e._v(".")]),r("h4",{attrs:{id:"arguments-10"}},[r("a",{attrs:{href:"#arguments-10","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" to end the "),r("code",[e._v("Range")]),e._v(" after.")])]),r("h4",{attrs:{id:"returns-promisevoid-7"}},[r("a",{attrs:{href:"#returns-promisevoid-7","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"setEndBefore"}},[r("a",{attrs:{href:"#setEndBefore","aria-hidden":"true"}},[e._v("#")]),e._v(".setEndBefore"),r("em",[e._v("(node)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the end position of a "),r("code",[e._v("Range")]),e._v(" relative to another "),r("code",[e._v("Node")]),e._v(".")]),r("h4",{attrs:{id:"arguments-11"}},[r("a",{attrs:{href:"#arguments-11","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" to end the "),r("code",[e._v("Range")]),e._v(" before.")])]),r("h4",{attrs:{id:"returns-promisevoid-8"}},[r("a",{attrs:{href:"#returns-promisevoid-8","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"setStart"}},[r("a",{attrs:{href:"#setStart","aria-hidden":"true"}},[e._v("#")]),e._v(".setStart"),r("em",[e._v("(node, offset)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the start position of a "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"arguments-12"}},[r("a",{attrs:{href:"#arguments-12","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" where the "),r("code",[e._v("Range")]),e._v(" should start.")]),r("li",[e._v("offset "),r("code",{pre:!0},[e._v("number")]),e._v(". An integer greater than or equal to zero representing the offset for the start of the "),r("code",[e._v("Range")]),e._v(" from the start of "),r("code",[e._v("startNode")]),e._v(".")])]),r("h4",{attrs:{id:"returns-promisevoid-9"}},[r("a",{attrs:{href:"#returns-promisevoid-9","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"setStartAfter"}},[r("a",{attrs:{href:"#setStartAfter","aria-hidden":"true"}},[e._v("#")]),e._v(".setStartAfter"),r("em",[e._v("(node)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the start position of a "),r("code",[e._v("Range")]),e._v(" relative to another "),r("code",[e._v("Node")]),e._v(".")]),r("h4",{attrs:{id:"arguments-13"}},[r("a",{attrs:{href:"#arguments-13","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" to start the "),r("code",[e._v("Range")]),e._v(" after.")])]),r("h4",{attrs:{id:"returns-promisevoid-10"}},[r("a",{attrs:{href:"#returns-promisevoid-10","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"setStartBefore"}},[r("a",{attrs:{href:"#setStartBefore","aria-hidden":"true"}},[e._v("#")]),e._v(".setStartBefore"),r("em",[e._v("(node)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the start position of a "),r("code",[e._v("Range")]),e._v(" relative to another "),r("code",[e._v("Node")]),e._v(".")]),r("h4",{attrs:{id:"arguments-14"}},[r("a",{attrs:{href:"#arguments-14","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("node "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". The "),r("code",[e._v("Node")]),e._v(" before which the "),r("code",[e._v("Range")]),e._v(" should start.")])]),r("h4",{attrs:{id:"returns-promisevoid-11"}},[r("a",{attrs:{href:"#returns-promisevoid-11","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"surroundContents"}},[r("a",{attrs:{href:"#surroundContents","aria-hidden":"true"}},[e._v("#")]),e._v(".surroundContents"),r("em",[e._v("(newParent)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Moves content of a "),r("code",[e._v("Range")]),e._v(" into a new "),r("code",[e._v("Node")]),e._v(".")]),r("h4",{attrs:{id:"arguments-15"}},[r("a",{attrs:{href:"#arguments-15","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("newParent "),r("a",{attrs:{href:"/docs/awaited-dom/node"}},[r("code",{pre:!0},[e._v("Node")])]),e._v(". A "),r("code",[e._v("Node")]),e._v(" with which to surround the contents.")])]),r("h4",{attrs:{id:"returns-promisevoid-12"}},[r("a",{attrs:{href:"#returns-promisevoid-12","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"toString"}},[r("a",{attrs:{href:"#toString","aria-hidden":"true"}},[e._v("#")]),e._v(".toString"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the text of the "),r("code",[e._v("Range")]),e._v(".")]),r("h4",{attrs:{id:"returns-promisestring"}},[r("a",{attrs:{href:"#returns-promisestring","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])])])}),[],!1,null,null,null);"function"==typeof i&&i(u),"function"==typeof h&&h(u);t.default=u.exports}}]);