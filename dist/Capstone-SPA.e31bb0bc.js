// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<!-- top-banner and left-side-nav will be stationary on every page to keep uniformity -->\n    <div class=\"top-banner\">\n        <h1>Envisioning Your Future</h1>\n    </div>\n";
};

exports.default = _default;
},{}],"components/Nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(links) {
  return "\n<div class=\"main-section\">\n\n<div class=\"left-side-nav\">\n  <ul>\n  ".concat(links.map(function (link) {
    return "<a href=\"/".concat(link.title, "\">").concat(link.text, "</a><br>");
  }).join(""), "\n  </ul>\n</div>\n");
};

exports.default = _default;
},{}],"img/summary.jpg":[function(require,module,exports) {
module.exports = "/summary.77b4afbc.jpg";
},{}],"img/education.jpg":[function(require,module,exports) {
module.exports = "/education.747517af.jpg";
},{}],"img/vehicle.jpg":[function(require,module,exports) {
module.exports = "/vehicle.24b8536d.jpg";
},{}],"img/banking.jpg":[function(require,module,exports) {
module.exports = "/banking.5a936aab.jpg";
},{}],"img/pay-bills.jpg":[function(require,module,exports) {
module.exports = "/pay-bills.598c7cc1.jpg";
},{}],"img/apartment.jpg":[function(require,module,exports) {
module.exports = "/apartment.8fc60fd1.jpg";
},{}],"img/counseling.jpg":[function(require,module,exports) {
module.exports = "/counseling.ad6879c3.jpg";
},{}],"components/views/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var summaryPage = require('../../img/summary.jpg');

var educationPage = require('../../img/education.jpg');

var vehiclePage = require('../../img/vehicle.jpg');

var bankingPage = require('../../img/banking.jpg');

var billPayPage = require('../../img/pay-bills.jpg');

var apartmentsPage = require('../../img/apartment.jpg');

var counselingPage = require('../../img/counseling.jpg');

var _default = function _default() {
  return "\n\n    <div class=\"right-side-content\">\n    \n        <div class=\"home-nav\">\n\n          <a href=\"/Summary\"><img src=\"".concat(summaryPage, "\" class=\"summary\"><figcaption>Summary</figcaption></a>\n          <a><img src=\"").concat(educationPage, "\" class=\"education\"><figcaption>Education</figcaption></a>\n          <a><img src=\"").concat(vehiclePage, "\" class=\"vehicle\"><figcaption>Your Vehicle</figcaption></a>\n          <a><img src=\"").concat(apartmentsPage, "\" class=\"apartments\"><figcaption>Apartments</figcaption></a>\n          <a><img src=\"").concat(billPayPage, "\" class=\"bill pay\"><figcaption>Bill Pay</figcaption></a>\n          <a><img src=\"").concat(bankingPage, "\" class=\"banking\"><figcaption>Banking</figcaption></a>\n          <a><img src=\"").concat(counselingPage, "\" class=\"counseling\"><figcaption>Counseling</figcaption></a>\n\n        </div>\n\n    </div>\n");
};

exports.default = _default;
},{"../../img/summary.jpg":"img/summary.jpg","../../img/education.jpg":"img/education.jpg","../../img/vehicle.jpg":"img/vehicle.jpg","../../img/banking.jpg":"img/banking.jpg","../../img/pay-bills.jpg":"img/pay-bills.jpg","../../img/apartment.jpg":"img/apartment.jpg","../../img/counseling.jpg":"img/counseling.jpg"}],"components/views/AboutUs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n    <div class=\"right-side-content\">\n\n        <div class=\"about-us\">\n    \n            <div class=\"about-us-heading\">\n                <h1>About Us</h1>\n            </div>\n\n            <div class=\"paragraph-1\">\n                <p>Envisioning Your Future(EYF) is designed to help, mainly, young adults who are about to, \n                    or have recently graduated high school. EYF is open for anyone who is looking for guidance on\n                    managing finances, buying a decent vehicle, needing help finding a place \n                    to continue education, finding a place to live within your financial means, furnishings for\n                    your home and seeking counseling for all of the above and more! EYF's goal is to educate young adults\n                    about finances and show them how to stay out of a lot of debt.\n                </p>\n            </div>\n\n            <div class=\"paragraph-2\">\n                <p>EYF understands that majority of us will not, or have not, received education in high schools on how to\n                    live in the \"real world\". Growing up, for most of us, resulted in a never ending cycle of living \n                    paycheck to paycheck because that's what is \"normal\" in the world today. EYF wants to stop this\n                    cycle and give you something to look forward to -- financial freedom.\n                </p>\n            </div>\n\n            <div class=\"paragraph-3\">\n                <p>Financial freedom doesn't mean you'll be rich or wealthy. It simply means that you will be able to \n                    live comfortably and not have to worry about if you'll have enough money to pay the rent,\n                    or, if your vehicle gives you a \"surprise\" that will need immediate attention to be fixed. If you\n                    feel like <b>Envisioning Your Future</b>, then feel free to <a href=\"ContactUs\">contact us</a> \n                    for more information.\n                </p>\n            </div>\n        </div>\n    </div>\n";
};

exports.default = _default;
},{}],"components/views/Form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<div class=\"right-side-content\">\n        <div class=\"username\">\n            <input type=\"text\" placeholder=\"Enter your email address\" autofocus id=\"email\">\n        </div>\n\n        <div class=\"password\">\n            <input type=\"password\" placeholder=\"Password\" autofocus id=\"pass\" name=\"password\"\n            minlength=\"8\" required>\n        </div>\n\n        <div class=\"sign-in-button\">\n            <button>Sign in</button>\n        </div>\n\n        <div class=\"forgot-email\">\n            <a href=\"\">Forgot Email</a>\n        </div>\n\n        <div class=\"forgot-password\">\n            <a href=\"\">Forgot Password</a>\n        </div>\n";
};

exports.default = _default;
},{}],"components/views/SignIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n    <div class=\"right-side-content\">\n        <div class=\"username\">\n            <input type=\"text\" placeholder=\"Enter your email address\" autofocus=\"\" id=\"email\">\n        </div>\n\n        <div class=\"password\">\n            <input type=\"password\" placeholder=\"Password\" autofocus=\"\" id=\"pass\" name=\"password\" minlength=\"8\" required=\"\">\n        </div>\n\n        <div class=\"sign-in-button\">\n            <button>Sign in</button>\n        </div>\n\n        <div class=\"forgot-email\">\n            <a href=\"\">Forgot Email</a>\n        </div>\n\n        <div class=\"forgot-password\">\n            <a href=\"\">Forgot Password</a>\n        </div>\n\n    </div>\n";
};

exports.default = _default;
},{}],"components/views/Summary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var client = "Admin";
var incomeBank = 3328.92;
var ameren = 140.23;
var spire = 92.12;
var internet = 162.38;
var carPayment = 1000.32;
var insurance = 200.12;
var rent = 1274.52;
var phone = 250.23;
var totalBills = [ameren + spire + internet + carPayment + insurance + rent + phone];
console.log(totalBills);
var leftOver = [incomeBank - totalBills];

var _default = function _default() {
  return "\n    <div class=\"right-side-content\">\n\n        <div class=\"greeting\">\n\n            Hello, ".concat(client, ".<br>\n\n        </div>\n\n        <div class=\"summary-content\">\n\n            <div class=\"bills\">\n\n                Estimated Monthly Income: $").concat(incomeBank, "  <a>change</a><br><br>\n                Electric Bill Total: $").concat(ameren, "  <a>change</a><br>\n                Gas Bill Total: $").concat(spire, "  <a>change</a><br>\n                Internet Bill: $").concat(internet, "  <a>change</a><br>\n                Car Payment: $").concat(carPayment, "  <a>change</a><br>\n                Insurance: $").concat(insurance, "  <a>change</a><br>\n                Rent/Mortgage: $").concat(rent, "  <a>change</a><br>\n                Phone Bill: $").concat(phone, "  <a>change</a><br>\n                Total expenses: $").concat(totalBills, "<br><br>\n                Potential Savings: $").concat(leftOver, "\n\n\n            </div>\n\n            <div class=\"obligations\">\n\n                <h2>Obligations</h2>\n\n                <div class=\"other-expenses\">\n\n                    Monthly Groceries: $ <br>\n                    Monthly Gas: $\n\n                </div>\n            \n            </div>\n        </div>\n        \n    </div>\n");
};

exports.default = _default;
},{}],"components/views/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function () {
    return _Home.default;
  }
});
Object.defineProperty(exports, "AboutUs", {
  enumerable: true,
  get: function () {
    return _AboutUs.default;
  }
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function () {
    return _Form.default;
  }
});
Object.defineProperty(exports, "SignIn", {
  enumerable: true,
  get: function () {
    return _SignIn.default;
  }
});
Object.defineProperty(exports, "Summary", {
  enumerable: true,
  get: function () {
    return _Summary.default;
  }
});

var _Home = _interopRequireDefault(require("./Home"));

var _AboutUs = _interopRequireDefault(require("./AboutUs"));

var _Form = _interopRequireDefault(require("./Form"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

var _Summary = _interopRequireDefault(require("./Summary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Home":"components/views/Home.js","./AboutUs":"components/views/AboutUs.js","./Form":"components/views/Form.js","./SignIn":"components/views/SignIn.js","./Summary":"components/views/Summary.js"}],"components/Main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var views = _interopRequireWildcard(require("./views"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(st) {
  return "\n".concat(views[st.view](st), "\n");
};

exports.default = _default;
},{"./views":"components/views/index.js"}],"components/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<footer>\n    <div class=\"footer\">\n        <h6>&copy; 2020 Envisioning Your Future</h6>\n    </div>\n</footer>\n";
};

exports.default = _default;
},{}],"components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _Header.default;
  }
});
Object.defineProperty(exports, "Nav", {
  enumerable: true,
  get: function () {
    return _Nav.default;
  }
});
Object.defineProperty(exports, "Main", {
  enumerable: true,
  get: function () {
    return _Main.default;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _Footer.default;
  }
});

var _Header = _interopRequireDefault(require("./Header"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _Main = _interopRequireDefault(require("./Main"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Header":"components/Header.js","./Nav":"components/Nav.js","./Main":"components/Main.js","./Footer":"components/Footer.js"}],"store/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Home",
  view: "Home"
};
exports.default = _default;
},{}],"store/Links.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  title: "Home",
  text: "Home"
}, {
  title: "Summary",
  text: "Summary"
}, {
  title: "Education",
  text: "Education"
}, {
  title: "YourVehicle",
  text: "Your Vehicle"
}, {
  title: "Apartments",
  text: "Apartments"
}, {
  title: "BillPay",
  text: "Bill Pay"
}, {
  title: "Banking",
  text: "Banking"
}, {
  title: "Counseling",
  text: "Counseling"
}, {
  title: "AboutUs",
  text: "About Us"
}, {
  title: "ContactUs",
  text: "Contact Us"
}, {
  title: "ProfileSettings",
  text: "Profile Settings"
}, {
  title: "SignIn",
  text: "Log Out"
}];
exports.default = _default;
},{}],"store/Form.js":[function(require,module,exports) {

},{}],"store/AboutUs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "About Us",
  view: "AboutUs"
};
exports.default = _default;
},{}],"store/SignIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Sign In",
  view: "SignIn"
};
exports.default = _default;
},{}],"store/Summary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Summary",
  view: "Summary"
};
exports.default = _default;
},{}],"store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function () {
    return _Home.default;
  }
});
Object.defineProperty(exports, "Links", {
  enumerable: true,
  get: function () {
    return _Links.default;
  }
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function () {
    return _Form.default;
  }
});
Object.defineProperty(exports, "AboutUs", {
  enumerable: true,
  get: function () {
    return _AboutUs.default;
  }
});
Object.defineProperty(exports, "SignIn", {
  enumerable: true,
  get: function () {
    return _SignIn.default;
  }
});
Object.defineProperty(exports, "Summary", {
  enumerable: true,
  get: function () {
    return _Summary.default;
  }
});

var _Home = _interopRequireDefault(require("./Home"));

var _Links = _interopRequireDefault(require("./Links"));

var _Form = _interopRequireDefault(require("./Form"));

var _AboutUs = _interopRequireDefault(require("./AboutUs"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

var _Summary = _interopRequireDefault(require("./Summary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Home":"store/Home.js","./Links":"store/Links.js","./Form":"store/Form.js","./AboutUs":"store/AboutUs.js","./SignIn":"store/SignIn.js","./Summary":"store/Summary.js"}],"node_modules/navigo/lib/navigo.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Navigo=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});


},{}],"index.js":[function(require,module,exports) {
"use strict";

var components = _interopRequireWildcard(require("./components"));

var state = _interopRequireWildcard(require("./store"));

var _navigo = _interopRequireDefault(require("navigo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { capitalize } from "lodash";
var router = new _navigo.default(window.location.origin);
router.on({
  ":page": function page(params) {
    return render(state[params.page]);
  },
  "/": function _() {
    return render(state.SignIn);
  }
}).resolve();

function render(st) {
  console.log(st);
  document.querySelector("#root").innerHTML = "\n    ".concat((0, components.Header)(st), "\n    ").concat((0, components.Nav)(state.Links), "\n    ").concat((0, components.Main)(st), "\n    ").concat((0, components.Footer)(), "\n    ");
}

router.updatePageLinks();
},{"./components":"components/index.js","./store":"store/index.js","navigo":"node_modules/navigo/lib/navigo.min.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58563" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Capstone-SPA.e31bb0bc.js.map