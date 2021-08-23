(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{UQSp:function(t,s,a){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},"py+n":function(t,s,a){"use strict";a.r(s);var e=a("KHd+"),n=a("UQSp"),r=a("oCYn");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={VueRemarkRoot:n.a},c=function(t){var s=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?s[t]=p[t]:a[t]=function(){return p[t]}}))},l=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",i={excerpt:null,title:"Basic Concepts"};var v=function(t){t.options[u]&&(t.options[u]=i),r.a.util.defineReactive(t.options,u,i),t.options.computed=l.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},_=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("VueRemarkRoot",[a("h1",{attrs:{id:"basic-concepts"}},[a("a",{attrs:{href:"#basic-concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Basic Concepts")]),a("h2",{attrs:{id:"each-hero-instance-has-a-unique-user"}},[a("a",{attrs:{href:"#each-hero-instance-has-a-unique-user","aria-hidden":"true"}},[t._v("#")]),t._v("Each Hero Instance Has a Unique User")]),a("ul",[a("li",[t._v("user-agent")]),a("li",[t._v("ip address")]),a("li",[t._v("audio fingerprint")]),a("li",[t._v("fonts")]),a("li",[t._v("webgl / canvas")]),a("li",[t._v("cookies & storage")]),a("li",[t._v("screen details")]),a("li",[t._v("100s more")])]),a("p",[t._v("Note: IP addresses are set through upstreamProxyUrl on each Hero.")]),a("h2",{attrs:{id:"the-dom-has-finally-been-awaited"}},[a("a",{attrs:{href:"#the-dom-has-finally-been-awaited","aria-hidden":"true"}},[t._v("#")]),t._v("The DOM Has Finally Been Awaited")]),a("p",[t._v("The easiest way to explain Dynamic DOM is with some comparison examples. Let's say you want to load a URL and loop through a list of items.")]),a("h3",{attrs:{id:"doing-it-with-hero"}},[a("a",{attrs:{href:"#doing-it-with-hero","aria-hidden":"true"}},[t._v("#")]),t._v("Doing It with Hero")]),a("p",[t._v("Here's how you would do it with Hero:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token imports"}},[a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Hero")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/hero'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token dom variable"}},[t._v("document")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elems "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token dom variable"}},[t._v("document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ul'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elem "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" elems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT FROM items WHERE id=?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ^^ WORKS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("p",[t._v("Hero's Dynamic DOM allows you to keep all calls within your script context. It also follows the W3C spec to a T. In fact, go ahead and copy lines 3 through 7 and run paste them into your browser's DevTools. They run perfectly.")]),a("h3",{attrs:{id:"doing-it-with-puppeteer"}},[a("a",{attrs:{href:"#doing-it-with-puppeteer","aria-hidden":"true"}},[t._v("#")]),t._v("Doing It with Puppeteer")]),a("p",[t._v("Here's how you would do it with Puppeteer:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Puppeteer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'puppeteer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" selector "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ul li'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("evaluate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elems "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token dom variable"}},[t._v("document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elem "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" elems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT FROM items WHERE id=?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ^^ BREAKS")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),a("p",[t._v("As you'll notice, the above example throws an error. Although you can pass arguments into a remote method, they must be serializable, which means you can only pass through simple types.")]),a("p",[t._v("When used in a simple example as show above, Puppeteer's approach seems okay. However, the reality is, most scraper scripts are complex, and your code becomes littered with multiple contexts, adding context to an already complex environment.")]),a("h2",{attrs:{id:"headless-browsers-need-not-always-render"}},[a("a",{attrs:{href:"#headless-browsers-need-not-always-render","aria-hidden":"true"}},[t._v("#")]),t._v("Headless Browsers Need Not Always Render")]),a("p",[t._v("When you're trying to eke out performance, a common technique is to disable rendering various parts of a webpage. Hero allows you to "),a("a",{attrs:{href:"/docs/overview/configuration#blocked-resources"}},[t._v("turn off")]),t._v(" everything from the style and images of a page, to the javascript environment. You can even simulate making http requests from inside a loaded web page, without ever loading the page.")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token imports"}},[a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Hero")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/hero'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hero "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hero")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  blockedResourceTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'All'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ulixee.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// referer will be https://ulixee.org")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" doc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ulixee.org/docs/overview/configuration'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),a("h2",{attrs:{id:"mice-and-keyboards-are-human-too"}},[a("a",{attrs:{href:"#mice-and-keyboards-are-human-too","aria-hidden":"true"}},[t._v("#")]),t._v("Mice and Keyboards Are Human Too")]),a("p",[t._v("Hero drives mice and keyboards with "),a("a",{attrs:{href:"/docs/plugins/human-emulators"}},[t._v("Human Emulators")]),t._v(". Human emulators translate your clicks and moves into randomized human-like patterns that can pass bot-blocker checks.")])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);s.default=_.exports}}]);