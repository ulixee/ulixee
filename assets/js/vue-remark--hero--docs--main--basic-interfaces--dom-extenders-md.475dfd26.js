(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{"2V+z":function(t,e,s){"use strict";s.r(e);var r=s("KHd+"),a=s("UQSp"),n=s("oCYn");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},p=function(t){var e=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===o(i[t])&&"function"==typeof i[t].render||"function"==typeof i[t]&&"function"==typeof i[t].options.render?e[t]=i[t]:s[t]=function(){return i[t]}}))},c=n.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"DomExtenders"};var v=function(t){t.options[u]&&(t.options[u]=l),n.a.util.defineReactive(t.options,u,l),t.options.computed=c.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},d=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("h1",{attrs:{id:"domextenders"}},[s("a",{attrs:{href:"#domextenders","aria-hidden":"true"}},[t._v("#")]),t._v("DomExtenders")]),s("blockquote",[s("p",[t._v("Dom Extenders add functionality to the W3C spec AwaitedDom to make using Hero easier. All DomExtenders start with a $.")])]),s("h2",{attrs:{id:"constructor"}},[s("a",{attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v("Constructor")]),s("p",[t._v("DomExtenders cannot be constructed. They're additions added to the following Super classes and collections.")]),s("h4",{attrs:{id:"super-nodes"}},[s("a",{attrs:{href:"#super-nodes","aria-hidden":"true"}},[t._v("#")]),t._v("Nodes:")]),s("ul",[s("li",[s("a",{attrs:{href:"/docs/awaited-dom/super-element"}},[s("code",{pre:!0},[t._v("SuperElement")])])]),s("li",[s("a",{attrs:{href:"/docs/awaited-dom/super-node"}},[s("code",{pre:!0},[t._v("SuperNode")])])]),s("li",[s("a",{attrs:{href:"/docs/awaited-dom/super-html-element"}},[s("code",{pre:!0},[t._v("SuperHTMLElement")])])])]),s("h4",{attrs:{id:"super-collections"}},[s("a",{attrs:{href:"#super-collections","aria-hidden":"true"}},[t._v("#")]),t._v("Collections:")]),s("ul",[s("li",[s("a",{attrs:{href:"/docs/awaited-dom/super-node-list"}},[s("code",{pre:!0},[t._v("SuperNodeList")])])]),s("li",[s("a",{attrs:{href:"/docs/awaited-dom/super-html-collection"}},[s("code",{pre:!0},[t._v("SuperHTMLCollection")])])])]),s("h2",{attrs:{id:"properties"}},[s("a",{attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v("Properties")]),s("h3",{attrs:{id:"exists"}},[s("a",{attrs:{href:"#exists","aria-hidden":"true"}},[t._v("#")]),t._v("node.$exists")]),s("p",[t._v("Checks if a given node is valid and retrievable in the DOM. This API is used mostly to determine if a querySelector can be resolved.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.not-in-dom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("$exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false if not in dom!")])])]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"returns-promiseboolean"}},[s("a",{attrs:{href:"#returns-promiseboolean","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<boolean>")])]),s("h3",{attrs:{id:"has-focus"}},[s("a",{attrs:{href:"#has-focus","aria-hidden":"true"}},[t._v("#")]),t._v("node.$hasFocus")]),s("p",[t._v("Checks if a given node has focus in the DOM. Useful for form interactions.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasFocus "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.field'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("$hasFocus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("hasFocus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.field'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"returns-promiseboolean-1"}},[s("a",{attrs:{href:"#returns-promiseboolean-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<boolean>")])]),s("h3",{attrs:{id:"is-clickable"}},[s("a",{attrs:{href:"#is-clickable","aria-hidden":"true"}},[t._v("#")]),t._v("node.$isClickable")]),s("p",[t._v("Checks if a given node is visible in the DOM, scrolled into view, and not masked by any other node. Follows the specification of "),s("code",{pre:!0},[t._v("isClickable")]),t._v(" from "),s("a",{attrs:{href:"/docs/hero/basic-interfaces/tab#get-computed-visibility"}},[t._v("tab.getComputedVisibility()")]),t._v(".")]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.element'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("$isClickable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("h4",{attrs:{id:"returns-promiseboolean-2"}},[s("a",{attrs:{href:"#returns-promiseboolean-2","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<boolean>")])]),s("h3",{attrs:{id:"is-visible"}},[s("a",{attrs:{href:"#is-visible","aria-hidden":"true"}},[t._v("#")]),t._v("node.$isVisible")]),s("p",[t._v("Checks if a given node is visible in the DOM. Follows the specification of "),s("code",{pre:!0},[t._v("isVisible")]),t._v(" from "),s("a",{attrs:{href:"/docs/hero/basic-interfaces/tab#get-computed-visibility"}},[t._v("tab.getComputedVisibility()")]),t._v(".")]),s("p",[t._v("NOTE: this does not mean the node is scrolled into view.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.element'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("$isVisible")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"returns-promiseboolean-3"}},[s("a",{attrs:{href:"#returns-promiseboolean-3","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<boolean>")])]),s("h2",{attrs:{id:"methods"}},[s("a",{attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v("Methods")]),s("h3",{attrs:{id:"clear-value"}},[s("a",{attrs:{href:"#clear-value","aria-hidden":"true"}},[t._v("#")]),t._v("node.$clearInputText"),s("em",[t._v("()")])]),s("p",[t._v("Clears out the value of an input field by performing a Focus, Select All, and Backspace.")]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"returns-promisevoid"}},[s("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<void>")])]),s("h3",{attrs:{id:"click"}},[s("a",{attrs:{href:"#click","aria-hidden":"true"}},[t._v("#")]),t._v("node.$click"),s("em",[t._v("(verification)")])]),s("p",[t._v("A normal DOM node has a "),s("code",{pre:!0},[t._v("click()")]),t._v(" API on it, but it does not trigger human-like behavior or mouse events resembling the actions of a normal user. For that reason, it can be detected if a given website is looking for it.")]),s("p",[t._v("The "),s("code",{pre:!0},[t._v("$click()")]),t._v(" API triggers clicking on the given node using the "),s("a",{attrs:{href:"/docs/hero/plugins/human-emulators"}},[t._v("Human Emulator")]),t._v(" functionality.")]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"arguments"}},[s("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("verification "),s("code",{pre:!0},[t._v("elementAtPath")]),t._v(" | "),s("code",{pre:!0},[t._v("exactElement")]),t._v(" | "),s("code",{pre:!0},[t._v("none")]),t._v(". Default "),s("code",{pre:!0},[t._v("elementAtPath")]),t._v(". Determines what "),s("a",{attrs:{href:"/docs/hero/basic-interfaces/interactions#click-verification"}},[t._v("verification")]),t._v(" should be used in this operation. A verification determines how to recover from the node disappearing from the DOM during execution.")])]),s("h4",{attrs:{id:"returns-promisevoid-1"}},[s("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<void>")])]),s("h3",{attrs:{id:"type"}},[s("a",{attrs:{href:"#type","aria-hidden":"true"}},[t._v("#")]),t._v("node.$type"),s("em",[t._v("(...typeInteractions)")])]),s("p",[t._v("Perform a typing interaction on the given node. This is a shortcut for "),s("code",{pre:!0},[t._v("focusing")]),t._v(" on an input and then performing "),s("code",{pre:!0},[t._v("keyboard")]),t._v(" operations using the "),s("a",{attrs:{href:"/docs/hero/plugins/human-emulators"}},[t._v("Human Emulator")]),t._v(" functionality.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.field'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fill-in'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("KeyboardKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Enter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"arguments-1"}},[s("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("typeInteractions "),s("code",{pre:!0},[t._v("ITypeInteraction[]")]),t._v(". One or more interactions to trigger using the keyboard. TypeInteractions can be strings or "),s("code",{pre:!0},[t._v("KeyboardKey")]),t._v(" values (exported from the Hero client).")])]),s("h4",{attrs:{id:"returns-promisevoid-2"}},[s("a",{attrs:{href:"#returns-promisevoid-2","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<void>")])]),s("h3",{attrs:{id:"wait-for-exists"}},[s("a",{attrs:{href:"#wait-for-exists","aria-hidden":"true"}},[t._v("#")]),t._v("node.$waitForExists"),s("em",[t._v("(options?)")])]),s("p",[t._v('Wait for the given Node "Path" to exist in the DOM. Returns the resolved SuperElement.')]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.not.here.yet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("$waitForExists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// waits until this querySelector resolves.")])])]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"arguments-2"}},[s("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("options "),s("code",{pre:!0},[t._v("object")]),t._v(". Optional options."),s("ul",[s("li",[t._v("timeoutMs "),s("code",{pre:!0},[t._v("number")]),t._v(". The default timeout.")])])])]),s("h4",{attrs:{id:"returns-promiseisuperelement"}},[s("a",{attrs:{href:"#returns-promiseisuperelement","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<ISuperElement>")])]),s("h3",{attrs:{id:"wait-for-clickable"}},[s("a",{attrs:{href:"#wait-for-clickable","aria-hidden":"true"}},[t._v("#")]),t._v("node.$waitForClickable"),s("em",[t._v("(options?)")])]),s("p",[t._v('Wait for the given Node "Path" to be clickable in the DOM (visible, scrolled into the viewport and unobstructed).')]),s("p",[t._v("NOTE: this API will "),s("em",[t._v("not")]),t._v(" scroll a node into view that is offscreen.")]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"arguments-3"}},[s("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("options "),s("code",{pre:!0},[t._v("object")]),t._v(". Optional options."),s("ul",[s("li",[t._v("timeoutMs "),s("code",{pre:!0},[t._v("number")]),t._v(". The default timeout.")])])])]),s("h4",{attrs:{id:"returns-promiseisuperelement-1"}},[s("a",{attrs:{href:"#returns-promiseisuperelement-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<ISuperElement>")])]),s("h3",{attrs:{id:"wait-for-hidden"}},[s("a",{attrs:{href:"#wait-for-hidden","aria-hidden":"true"}},[t._v("#")]),t._v("node.$waitForHidden"),s("em",[t._v("(options?)")])]),s("p",[t._v('Wait for the given Node "Path" to be unavailable in the DOM (not visible in the DOM or does not exist).')]),s("p",[t._v("This API can be useful to wait for a modal/popup window to disppear after you click close on it.")]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"arguments-4"}},[s("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("options "),s("code",{pre:!0},[t._v("object")]),t._v(". Optional options."),s("ul",[s("li",[t._v("timeoutMs "),s("code",{pre:!0},[t._v("number")]),t._v(". The default timeout.")])])])]),s("h4",{attrs:{id:"returns-promiseisuperelement-2"}},[s("a",{attrs:{href:"#returns-promiseisuperelement-2","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<ISuperElement>")])]),s("h3",{attrs:{id:"wait-for-visible"}},[s("a",{attrs:{href:"#wait-for-visible","aria-hidden":"true"}},[t._v("#")]),t._v("node.$waitForVisible"),s("em",[t._v("(options?)")])]),s("p",[t._v('Wait for the given Node "Path" to be visible in the DOM.')]),s("p",[t._v("Visible follows the API defined at: "),s("a",{attrs:{href:"/docs/hero/basic-interfaces/tab#get-computed-visibility"}},[s("code",{pre:!0},[t._v("tab.getComputedVisibility")])])]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"arguments-5"}},[s("a",{attrs:{href:"#arguments-5","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("options "),s("code",{pre:!0},[t._v("object")]),t._v(". Optional options."),s("ul",[s("li",[t._v("timeoutMs "),s("code",{pre:!0},[t._v("number")]),t._v(". The default timeout.")])])])]),s("h4",{attrs:{id:"returns-promiseisuperelement-3"}},[s("a",{attrs:{href:"#returns-promiseisuperelement-3","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<ISuperElement>")])]),s("h3",{attrs:{id:"xpathSelector"}},[s("a",{attrs:{href:"#xpathSelector","aria-hidden":"true"}},[t._v("#")]),t._v("node.$xpathSelector"),s("em",[t._v("(selector)")])]),s("p",[t._v("Perform an XPath query with this node provided as the \"ContextScope\". NOTE: you still need to start your XPath with a '.' to indicate you wish to find nested XPaths.")]),s("p",[t._v("This is often useful to mix and match with querySelectors when you want to select on Text values of nodes.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ul'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("$xpathSelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.//[.,\"LAX\"]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("p",[t._v("Attached to Nodes and Elements ("),s("a",{attrs:{href:"#super-nodes"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"arguments-6"}},[s("a",{attrs:{href:"#arguments-6","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("selector "),s("code",{pre:!0},[t._v("string")]),t._v(". A valid XPath selector")])]),s("h4",{attrs:{id:"returns-promiseisuperelement-4"}},[s("a",{attrs:{href:"#returns-promiseisuperelement-4","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<ISuperElement>")])]),s("h2",{attrs:{id:"collection-methods"}},[s("a",{attrs:{href:"#collection-methods","aria-hidden":"true"}},[t._v("#")]),t._v("Collection Methods")]),s("h3",{attrs:{id:"map"}},[s("a",{attrs:{href:"#map","aria-hidden":"true"}},[t._v("#")]),t._v("nodeList.$map"),s("em",[t._v("(iteratorFn)")])]),s("p",[t._v("Adds syntactic sugar to run an "),s("code",{pre:!0},[t._v("Array.map")]),t._v(" on the results and await all results. This can be useful to transform results.")]),s("p",[t._v("Attached to NodeCollections ("),s("a",{attrs:{href:"#super-collections"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"returns-promiset"}},[s("a",{attrs:{href:"#returns-promiset","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<T[]>")])]),s("h3",{attrs:{id:"reduce"}},[s("a",{attrs:{href:"#reduce","aria-hidden":"true"}},[t._v("#")]),t._v("nodeList.$reduce"),s("em",[t._v("(iteratorFn, initialValue)")])]),s("p",[t._v("Adds syntactic sugar to run an "),s("code",{pre:!0},[t._v("Array.reduce")]),t._v(" on the results and await a reduced result. This can be useful to transform results.")]),s("p",[t._v("Attached to NodeCollections ("),s("a",{attrs:{href:"#super-collections"}},[t._v("see list")]),t._v(").")]),s("h4",{attrs:{id:"returns-promiset-1"}},[s("a",{attrs:{href:"#returns-promiset-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<T>")])])])}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof v&&v(d);e.default=d.exports},UQSp:function(t,e,s){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);