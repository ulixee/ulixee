(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{QFco:function(e,t,o){"use strict";o.r(t);var r=o("KHd+"),a=o("UQSp"),s=o("oCYn");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===n(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:o[e]=function(){return i[e]}}))},p=s.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",_={excerpt:null,title:"CookieStorage"};var u=function(e){e.options[v]&&(e.options[v]=_),s.a.util.defineReactive(e.options,v,_),e.options.computed=p.computed({$frontmatter:function(){return e.options[v]}},e.options.computed)},l=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"cookiestorage"}},[o("a",{attrs:{href:"#cookiestorage","aria-hidden":"true"}},[e._v("#")]),e._v("CookieStorage")]),o("p",[e._v("The CookieStorage class allows you to get set and remove cookies from the main frame of the current tab. It mimics the W3C Storage api, but has slightly different parameters to deal with cookie settings.")]),o("h2",{attrs:{id:"constructor"}},[o("a",{attrs:{href:"#constructor","aria-hidden":"true"}},[e._v("#")]),e._v("Constructor")]),o("p",[e._v("CookieStorage cannot be instantiated. You must retrieve a cookieStorage instance from a "),o("a",{attrs:{href:"/docs/basic-interfaces/tab"}},[e._v("Tab")]),e._v(":")]),o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",{pre:!0,attrs:{class:"language-js"}},[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" cookieStorage "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" hero"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token property-access"}},[e._v("activeTab")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token property-access"}},[e._v("cookieStorage")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])]),o("h2",{attrs:{id:"properties"}},[o("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),o("h3",{attrs:{id:"length"}},[o("a",{attrs:{href:"#length","aria-hidden":"true"}},[e._v("#")]),e._v("cookieStorage.length")]),o("p",[e._v("Returns the number of cookies for the current tab origin;")]),o("h4",{attrs:{id:"type-promisenumber"}},[o("a",{attrs:{href:"#type-promisenumber","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Type")]),e._v(": "),o("code",{pre:!0},[e._v("Promise<number>")])]),o("h2",{attrs:{id:"methods"}},[o("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),o("h3",{attrs:{id:"cookiestoragegetitems"}},[o("a",{attrs:{href:"#cookiestoragegetitems","aria-hidden":"true"}},[e._v("#")]),e._v("cookieStorage.getItems"),o("em",[e._v("()")])]),o("p",[e._v("Gets all cookies for the current tab origin as "),o("code",{pre:!0},[e._v("Cookie")]),e._v(" objects.")]),o("h4",{attrs:{id:"cookie"}},[o("a",{attrs:{href:"#cookie","aria-hidden":"true"}},[e._v("#")]),o("code",{pre:!0},[e._v("Cookie")]),e._v(" properties:")]),o("ul",[o("li",[e._v("name "),o("code",{pre:!0},[e._v("string")]),e._v(". The cookie name.")]),o("li",[e._v("value "),o("code",{pre:!0},[e._v("string")]),e._v(". The cookie value.")]),o("li",[e._v("domain "),o("code",{pre:!0},[e._v("string")]),e._v(". The cookie domain.")]),o("li",[e._v("path "),o("code",{pre:!0},[e._v("string")]),e._v(". The path for the cookie.")]),o("li",[e._v("expires "),o("code",{pre:!0},[e._v("string")]),e._v(". An optional expiration date string.")]),o("li",[e._v("httpOnly "),o("code",{pre:!0},[e._v("boolean")]),e._v(". Whether only accessible via http requests.")]),o("li",[e._v("session "),o("code",{pre:!0},[e._v("boolean")]),e._v(". Whether the cookie should expire after the active session is over.")]),o("li",[e._v("secure "),o("code",{pre:!0},[e._v("boolean")]),e._v(". Whether the cookie should only apply to https secured urls.")]),o("li",[e._v("sameSite "),o("code",{pre:!0},[e._v("Strict | Lax | None")]),e._v(". The same site setting for the cookie.")])]),o("h4",{attrs:{id:"returns-promisecookie"}},[o("a",{attrs:{href:"#returns-promisecookie","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Returns")]),e._v(": "),o("a",{attrs:{href:"#cookie"}},[o("code",{pre:!0},[e._v("Promise<Cookie[]>")])])]),o("h3",{attrs:{id:"cookiestoragegetitemkeyname"}},[o("a",{attrs:{href:"#cookiestoragegetitemkeyname","aria-hidden":"true"}},[e._v("#")]),e._v("cookieStorage.getItem"),o("em",[e._v("(keyName)")])]),o("p",[e._v("Gets the cookie with the given "),o("code",{pre:!0},[e._v("name")]),e._v(" equal to "),o("code",{pre:!0},[e._v("keyName")]),e._v(".")]),o("h4",{attrs:{id:"arguments"}},[o("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Arguments")]),e._v(":")]),o("ul",[o("li",[e._v("keyName "),o("code",{pre:!0},[e._v("string")]),e._v(". The cookie name to retrieve.")])]),o("h4",{attrs:{id:"returns-promisecookie-1"}},[o("a",{attrs:{href:"#returns-promisecookie-1","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Returns")]),e._v(": "),o("a",{attrs:{href:"#cookie"}},[o("code",{pre:!0},[e._v("Promise<Cookie[]>")])])]),o("h3",{attrs:{id:"cookiestoragekeyindex"}},[o("a",{attrs:{href:"#cookiestoragekeyindex","aria-hidden":"true"}},[e._v("#")]),e._v("cookieStorage.key"),o("em",[e._v("(index)")])]),o("p",[e._v("An integer representing the number of the key you want to get the name of. This is a zero-based index. NOTE: key is equivalent to the "),o("code",{pre:!0},[e._v("name")]),e._v(" of a cookie.")]),o("h4",{attrs:{id:"arguments-1"}},[o("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Arguments")]),e._v(":")]),o("ul",[o("li",[e._v("index "),o("code",{pre:!0},[e._v("number")]),e._v(". The key index.")])]),o("h4",{attrs:{id:"returns-promisestring"}},[o("a",{attrs:{href:"#returns-promisestring","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Returns")]),e._v(": "),o("code",{pre:!0},[e._v("Promise<string>")])]),o("p",[e._v("The function below calls a callback for each cookie key (or name).")]),o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",{pre:!0,attrs:{class:"language-js"}},[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("forEachKey")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("callback")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[e._v("for")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" i "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" i "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" cookieStorage"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token property-access"}},[e._v("length")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" i"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("++")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("callback")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("cookieStorage"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("key")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("i"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),o("h3",{attrs:{id:"cookiestorageremoveitemkeyname"}},[o("a",{attrs:{href:"#cookiestorageremoveitemkeyname","aria-hidden":"true"}},[e._v("#")]),e._v("cookieStorage.removeItem"),o("em",[e._v("(keyName)")])]),o("p",[e._v("Removes a cookie with the given "),o("code",{pre:!0},[e._v("keyName")]),e._v(".")]),o("h4",{attrs:{id:"arguments-2"}},[o("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Arguments")]),e._v(":")]),o("ul",[o("li",[e._v("keyName "),o("code",{pre:!0},[e._v("string")]),e._v(". The cookie name.")])]),o("h4",{attrs:{id:"returns-promiseboolean"}},[o("a",{attrs:{href:"#returns-promiseboolean","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Returns")]),e._v(": "),o("code",{pre:!0},[e._v("Promise<boolean>")])]),o("h3",{attrs:{id:"cookiestoragesetitemkeyname-value-options"}},[o("a",{attrs:{href:"#cookiestoragesetitemkeyname-value-options","aria-hidden":"true"}},[e._v("#")]),e._v("cookieStorage.setItem"),o("em",[e._v("(keyName, value, options)")])]),o("p",[e._v("Sets a cookie for the currently loaded origin.")]),o("h4",{attrs:{id:"arguments-3"}},[o("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Arguments")]),e._v(":")]),o("ul",[o("li",[e._v("keyName "),o("code",{pre:!0},[e._v("string")]),e._v(". The cookie name.")]),o("li",[e._v("value "),o("code",{pre:!0},[e._v("string")]),e._v(". The cookie value.")]),o("li",[e._v("expires "),o("code",{pre:!0},[e._v("Data")]),e._v(". An optional expiration date for the cookie.")]),o("li",[e._v("options:"),o("ul",[o("li",[e._v("httpOnly "),o("code",{pre:!0},[e._v("boolean")]),e._v(". Whether to set the cookie to be only accessible via http requests.")]),o("li",[e._v("secure "),o("code",{pre:!0},[e._v("boolean")]),e._v(". If the cookie should only apply to https secured urls.")]),o("li",[e._v("sameSite "),o("code",{pre:!0},[e._v("Strict | Lax | None")]),e._v(". The same site setting for the cookie.")])])])]),o("h4",{attrs:{id:"returns-promiseboolean-1"}},[o("a",{attrs:{href:"#returns-promiseboolean-1","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Returns")]),e._v(": "),o("code",{pre:!0},[e._v("Promise<boolean>")])])])}),[],!1,null,null,null);"function"==typeof c&&c(l),"function"==typeof u&&u(l);t.default=l.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);