(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6Jq/":function(t,e,a){"use strict";a.r(e);var s=a("KHd+"),n=a("UQSp"),r=a("oCYn");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={VueRemarkRoot:n.a},c=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?e[t]=p[t]:a[t]=function(){return p[t]}}))},i=r.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",v={excerpt:null,title:"CollectedElements"};var _=function(t){t.options[l]&&(t.options[l]=v),r.a.util.defineReactive(t.options,l,v),t.options.computed=i.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},u=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h1",{attrs:{id:"collectedelements"}},[a("a",{attrs:{href:"#collectedelements","aria-hidden":"true"}},[t._v("#")]),t._v("CollectedElements")]),a("blockquote",[a("p",[t._v("CollectedElements is a class to retrieve DOM Elements that were saved from a Databox session using $extract or $extractLater.")])]),a("p",[t._v("CollectedElements allows you to retrieve the DOM Elements saved using "),a("a",{attrs:{href:"/docs/databox/basic-interfaces/dom-extenders#extract"}},[a("code",{pre:!0},[t._v("$extract")])]),t._v(" or "),a("a",{attrs:{href:"/docs/databox/basic-interfaces/dom-extenders#extract-later"}},[a("code",{pre:!0},[t._v("$extractLater")])]),t._v(". Retrieved DOM Elements can be interacted with using normal HTML DOM Apis (no awaits are necessary).")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token imports"}},[a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Databox")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/databox'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Databox")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hero "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ulixee.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" h1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("$waitForVisible")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Extract the DOM Element at this moment in time.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" h1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("$extractLater")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... do other things")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" collectedElements "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" h1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" collectedElements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NOTE: synchronous APIs. No longer running in browser.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("textContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dataset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("dataset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),a("h2",{attrs:{id:"properties"}},[a("a",{attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v("Properties")]),a("h3",{attrs:{id:"names"}},[a("a",{attrs:{href:"#names","aria-hidden":"true"}},[t._v("#")]),t._v("names")]),a("p",[t._v("Retrieves all names that CollectedElements have been stored with.")]),a("h4",{attrs:{id:"returns-promisestring"}},[a("a",{attrs:{href:"#returns-promisestring","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Returns")]),a("code",{pre:!0},[t._v("Promise<string[]>")])]),a("h2",{attrs:{id:"methods"}},[a("a",{attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v("Methods")]),a("h3",{attrs:{id:"get"}},[a("a",{attrs:{href:"#get","aria-hidden":"true"}},[t._v("#")]),t._v("collectedElements.get"),a("em",[t._v("(name)")])]),a("p",[t._v("Get a single DOM Element extracted with the given name.")]),a("h4",{attrs:{id:"arguments"}},[a("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Arguments")]),t._v(":")]),a("ul",[a("li",[t._v("name "),a("code",{pre:!0},[t._v("string")]),t._v(". The name of the DOM Element to retrieve (assigned during extraction).")])]),a("h4",{attrs:{id:"returns-promiseelement-the-reconstituted-dom-element"}},[a("a",{attrs:{href:"#returns-promiseelement-the-reconstituted-dom-element","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Returns")]),t._v(": "),a("code",{pre:!0},[t._v("Promise<Element>")]),t._v(" The (reconstituted) DOM Element.")]),a("h3",{attrs:{id:"get-all"}},[a("a",{attrs:{href:"#get-all","aria-hidden":"true"}},[t._v("#")]),t._v("collectedElements.getAll"),a("em",[t._v("(name)")])]),a("p",[t._v("Get a list of DOM Elements extracted with the given name. If you extract a "),a("code",{pre:!0},[t._v("querySelectorAll")]),t._v(", all returned results will be in this list. Items will maintain the order they're collected in.")]),a("h4",{attrs:{id:"arguments-1"}},[a("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Arguments")]),t._v(":")]),a("ul",[a("li",[t._v("name "),a("code",{pre:!0},[t._v("string")]),t._v(". The name of the DOM Element list to retrieve (assigned during extraction).")])]),a("h4",{attrs:{id:"returns-promiseelement-the-reconstituted-dom-elements"}},[a("a",{attrs:{href:"#returns-promiseelement-the-reconstituted-dom-elements","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Returns")]),t._v(": "),a("code",{pre:!0},[t._v("Promise<Element[]>")]),t._v(" The (reconstituted) DOM Elements.")]),a("h3",{attrs:{id:"get-raw"}},[a("a",{attrs:{href:"#get-raw","aria-hidden":"true"}},[t._v("#")]),t._v("collectedElements.getRawDetails"),a("em",[t._v("(name)")])]),a("p",[t._v("Get a list of extracted Elements with all the underlying details. This allows you to access the raw HTML as well as details about when and where a Node was extracted.")]),a("p",[t._v("Details per "),a("code",{pre:!0},[t._v("ICollectedElement")]),t._v(" record are:")]),a("ul",[a("li",[t._v("id "),a("code",{pre:!0},[t._v("number")]),t._v(". An assigned id.")]),a("li",[t._v("name "),a("code",{pre:!0},[t._v("string")]),t._v(". The provided name for the CollectedElement.")]),a("li",[t._v("frameId "),a("code",{pre:!0},[t._v("number")]),t._v(". The "),a("a",{attrs:{href:"/docs/hero/basic-interfaces/frame-environment"}},[t._v("FrameEnvironment")]),t._v(" id where the Element was extracted.")]),a("li",[t._v("frameNavigationId "),a("code",{pre:!0},[t._v("number")]),t._v(". The id of the Navigation for the "),a("a",{attrs:{href:"/docs/hero/basic-interfaces/frame-environment"}},[t._v("Frame")]),t._v(" at time of extraction. ")]),a("li",[t._v("tabId "),a("code",{pre:!0},[t._v("number")]),t._v(". The "),a("a",{attrs:{href:"/docs/hero/basic-interfaces/tab"}},[t._v("Tab")]),t._v(" id where the Element was extracted.")]),a("li",[t._v("commandId "),a("code",{pre:!0},[t._v("number")]),t._v(". The "),a("a",{attrs:{href:"/docs/hero/basic-interfaces/tab#lastCommandId"}},[t._v("Command")]),t._v(" id at time of extraction.")]),a("li",[t._v("domChangesTimestamp "),a("code",{pre:!0},[t._v("number")]),t._v(". The unix timestamp of the DOM at time of extraction.")]),a("li",[t._v("nodePointerId "),a("code",{pre:!0},[t._v("number")]),t._v(". The internal tracking id assigned to the node.")]),a("li",[t._v("nodeType "),a("code",{pre:!0},[t._v("string")]),t._v(". The type of node (eg, 'HTMLDivElement', 'HTMLLIElement')")]),a("li",[t._v("nodePreview "),a("code",{pre:!0},[t._v("string")]),t._v(". A string preview created in the DOM at time of retrieval.")]),a("li",[t._v("outerHTML? "),a("code",{pre:!0},[t._v("string")]),t._v(". The full outerHTML of the Node, recreated at the exact moment in the DOM.")])]),a("h4",{attrs:{id:"arguments-2"}},[a("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Arguments")]),t._v(":")]),a("ul",[a("li",[t._v("name "),a("code",{pre:!0},[t._v("string")]),t._v(". The name given to the DOM Element during extraction.")])]),a("h4",{attrs:{id:"returns-promiseicollectedelement-the-raw-data-for-the-collectedelements"}},[a("a",{attrs:{href:"#returns-promiseicollectedelement-the-raw-data-for-the-collectedelements","aria-hidden":"true"}},[t._v("#")]),a("strong",[t._v("Returns")]),t._v(": "),a("code",{pre:!0},[t._v("Promise<ICollectedElement[]>")]),t._v(" The raw data for the CollectedElements.")])])}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof _&&_(u);e.default=u.exports},UQSp:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);