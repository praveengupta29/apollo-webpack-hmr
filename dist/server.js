!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("apollo-server")},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=n(3),i=r(n(4)),l=r(n(5));new o.ApolloServer({resolvers:i.default,typeDefs:l.default,introspection:u.environment.apollo.introspection,playground:u.environment.apollo.playground}).listen().then((function(e){var t=e.url;return console.log("Server ready at "+t+". ")}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.environment={apollo:{introspection:"true"===process.env.APOLLO_INTROSPECTION,playground:"true"===process.env.APOLLO_PLAYGROUND},port:process.env.PORT||4e3}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={Query:{testMessage:function(){return"Hello World!"}}}},function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0});var o,u=n(0);t.default=u.gql(o||(o=r(['\n  type Query {\n    """\n    Test Message.\n    """\n    testMessage: String!\n  }\n'],['\n  type Query {\n    """\n    Test Message.\n    """\n    testMessage: String!\n  }\n'])))}]);
//# sourceMappingURL=server.js.map