"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var DetectUA=function(){function e(e){this.cache=new Map,this.userAgent=e||(window&&window.navigator?window.navigator.userAgent:""),this.android=!/like android/i.test(this.userAgent)&&/android/i.test(this.userAgent),this.iOS=this.match(1,/(iphone|ipod|ipad)/i).toLowerCase(),"MacIntel"===navigator.platform&&2<navigator.maxTouchPoints&&!window.MSStream&&(this.iOS="ipad")}return e.prototype.match=function(e,t){var i=this.userAgent.match(t);return i&&1<i.length&&i[e]||""},Object.defineProperty(e.prototype,"isMobile",{get:function(){var e=this.cache.get("isMobile");return void 0!==e?e:!this.isTablet&&(/[^-]mobi/i.test(this.userAgent)||"iphone"===this.iOS||"ipod"===this.iOS||this.android||/nexus\s*[0-6]\s*/i.test(this.userAgent))?(this.cache.set("isMobile",!0),!0):(this.cache.set("isMobile",!1),!1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTablet",{get:function(){var e=this.cache.get("isTablet");return void 0!==e?e:/tablet/i.test(this.userAgent)&&!/tablet pc/i.test(this.userAgent)||"ipad"===this.iOS||this.android&&!/[^-]mobi/i.test(this.userAgent)||!/nexus\s*[0-6]\s*/i.test(this.userAgent)&&/nexus\s*[0-9]+/i.test(this.userAgent)?(this.cache.set("isTablet",!0),!0):(this.cache.set("isTablet",!1),!1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDesktop",{get:function(){var e=this.cache.get("isDesktop");if(void 0!==e)return e;var t=!this.isMobile&&!this.isTablet;return this.cache.set("isDesktop",t),t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isMacOS",{get:function(){var e=this.cache.get("isMacOS");if(void 0!==e)return e;if(/macintosh/i.test(this.userAgent)){return{name:"MacOS",version:function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0});if(t.push(0),10!==t[0])return"";switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return""}}(this.match(1,/mac os x (\d+(\.?_?\d+)+)/i).replace(/[_\s]/g,"."))}}return this.cache.set("isMacOS",!1),!1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isWindows",{get:function(){var e=this.cache.get("isWindows");if(void 0!==e)return e;if(/windows /i.test(this.userAgent)){var t={name:"Windows",version:function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return""}}(this.match(1,/Windows ((NT|XP)( \d\d?.\d)?)/i))};return this.cache.set("isWindows",t),t}return this.cache.set("isWindows",!1),!1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isiOS",{get:function(){var e=this.cache.get("isiOS");if(void 0!==e)return e;if(this.iOS){var t={name:"iOS",version:this.match(1,/os (\d+([_\s]\d+)*) like mac os x/i).replace(/[_\s]/g,".")||this.match(1,/version\/(\d+(\.\d+)?)/i)};return this.cache.set("iOS",t),t}return this.cache.set("iOS",!1),!1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isAndroid",{get:function(){var e=this.cache.get("isAndroid");if(void 0!==e)return e;if(this.android){var t={name:"Android",version:this.match(1,/android[ \/-](\d+(\.\d+)*)/i)};return this.cache.set("Android",t),t}return!1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"browser",{get:function(){var e=this.cache.get("browser");if(void 0!==e)return e;var t=this.match(1,/version\/(\d+(\.\d+)?)/i),i=void 0;return i=/opera/i.test(this.userAgent)?{name:"Opera",version:t||this.match(1,/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(this.userAgent)?{name:"Opera",version:this.match(1,/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||t}:/SamsungBrowser/i.test(this.userAgent)?{name:"Samsung Internet for Android",version:t||this.match(1,/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(this.userAgent)?{name:"Yandex Browser",version:t||this.match(1,/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(this.userAgent)?{name:"UC Browser",version:this.match(1,/(?:ucbrowser)[\s\/](\d+(\.\d+)?)/i)}:/msie|trident/i.test(this.userAgent)?{name:"Internet Explorer",version:this.match(1,/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/(edge|edgios|edga|edg)/i.test(this.userAgent)?{name:"Microsoft Edge",version:this.match(2,/(edge|edgios|edga|edg)\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(this.userAgent)?{name:"Firefox",version:this.match(1,/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)}:/chromium/i.test(this.userAgent)?{name:"Chromium",version:this.match(1,/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||t}:/chrome|crios|crmo/i.test(this.userAgent)?{name:"Chrome",version:this.match(1,/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/safari|applewebkit/i.test(this.userAgent)?{name:"Safari",version:t}:{name:this.match(1,/^(.*)\/(.*) /),version:this.match(2,/^(.*)\/(.*) /)},this.cache.set("browser",i),i},enumerable:!0,configurable:!0}),e}();exports.DetectUA=DetectUA;
