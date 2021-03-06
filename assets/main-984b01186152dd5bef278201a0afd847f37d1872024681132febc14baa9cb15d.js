!function(a,b){"use strict";if(!("Ink"in a&&"function"==typeof Ink.requireModules)){var c={},d={},e=[],f={},g=[],h={},i=Function.prototype.apply,j=function(a){if("object"!=typeof a)return!1;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0};a.Ink={VERSION:"3.1.8",_checkPendingRequireModules:function(){var a,b,c,e,f,h,i=[],j=[];for(a=0,b=g.length;b>a;++a)if(c=g[a]){for(e in c.left)c.left.hasOwnProperty(e)&&(f=d[e],f&&(c.args[c.left[e]]=f,delete c.left[e],--c.remaining));if(c.remaining>0)i.push(c);else{if(h=c.cb,!h)continue;delete c.cb,j.push([h,c.args])}}g=i;for(var k=0;k<j.length;k++)j[k][0].apply(!1,j[k][1]);g.length>0&&setTimeout(function(){Ink._checkPendingRequireModules()},0)},getPath:function(a,b){var d=a.split(/[._]/g),e,f,g,h;for(f=d.length;f>=0;f-=1)if(e=d.slice(0,f+1).join("."),c[e]){g=e;break}return g in c?(h=c[g],/\/$/.test(h)||(h+="/"),f<d.length&&(h+=d.slice(f+1).join("/")+"/"),b||(h+="lib.js"),h):null},setPath:function(a,b){c[a.replace(/_/,".")]=b},loadScript:function(a,c){if(-1===a.indexOf("/")){var d=a;if(a=this.getPath(a),null===a)throw new Error('Could not load script "'+d+'". Path not found in the registry. Did you misspell the name, or forgot to call setPath()?')}var e=b.createElement("script");e.setAttribute("type",c||"text/javascript"),e.setAttribute("src",a),"onerror"in e&&(e.onerror=function(){Ink.error(["Failed to load script from ",a,"."].join(""))});var f=b.head||b.getElementsByTagName("head")[0];return f?f.appendChild(e):void 0},_loadLater:function(a){setTimeout(function(){d[a]||f[a]||h[a]||(f[a]=!0,Ink.loadScript(a))},0)},namespace:function(b,c){if(!b||!b.length)return null;for(var d=b.split("."),e=a,f,g=0,h=d.length;h>g;++g)e[d[g]]=e[d[g]]||{},f=e,e=e[d[g]];return c?[f,d[g-1]]:e},getModule:function(a,b){var c=b?[a,"_",b].join(""):a;return d[c]},createModule:function(b,c,g,i){if("string"!=typeof b)throw new Error("module name must be a string!");if(!("number"==typeof c||"string"==typeof c&&c.length>0))throw new Error("version number missing!");var k=[b,"_",c].join("");h[k]=!0;var l=function(){if(!d[k]){delete f[k],delete f[b];var g=Array.prototype.slice.call(arguments),l=i.apply(a,g);e.push(k),"object"==typeof l?l._version=c:"function"==typeof l&&(l.prototype._version=c,l._version=c);var m=0===b.indexOf("Ink."),n;m&&(n=Ink.namespace(b,!0)),d[k]=l,delete h[k],m&&(n[0][n[1]+"_"+c]=l),d[b]=l,m&&j(n[0][n[1]])&&(n[0][n[1]]=l),this&&Ink._checkPendingRequireModules()}};this.requireModules(g,l)},requireModules:function(a,b){var c,e,h,i,j;if(e=a&&a.length,h={args:new Array(e),left:{},remaining:e,cb:b},"object"!=typeof a||void 0===a.length)throw new Error("Dependency list should be an array!");if("function"!=typeof b)throw new Error("Callback should be a function!");for(c=0;e>c;++c)Ink._moduleRenames[a[c]]?(Ink.warn(a[c]+" was renamed to "+Ink._moduleRenames[a[c]]),i=Ink._moduleRenames[a[c]]):i=a[c],i?(j=d[i],j?(h.args[c]=j,--h.remaining):(f[i]||Ink._loadLater(i),h.left[i]=c)):--h.remaining;h.remaining>0?g.push(h):b.apply(!0,h.args)},_moduleRenames:{"Ink.UI.Aux_1":"Ink.UI.Common_1"},getModulesLoadOrder:function(){return e.slice()},getModuleScripts:function(){var a=this.getModulesLoadOrder();return a.unshift("Ink_1"),a=a.map(function(a){return["<scr",'ipt type="text/javascript" src="',Ink.getModuleURL(a),'"></scr',"ipt>"].join("")}),a.join("\n")},createExt:function(a,b,c,d){return Ink.createModule("Ink.Ext."+a,b,c,d)},bind:function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments),e=c.concat(d);return a.apply(b===!1?this:b,e)}},bindMethod:function(a,b){return Ink.bind.apply(Ink,[a[b],a].concat([].slice.call(arguments,2)))},bindEvent:function(b,c){var d=Array.prototype.slice.call(arguments,2);return function(e){var f=d.slice();return f.unshift(e||a.event),b.apply(c===!1?this:c,f)}},i:function(a){return"string"==typeof a?b.getElementById(a)||null:a},ss:function(a,c){if("undefined"==typeof Ink.Dom||"undefined"==typeof Ink.Dom.Selector)throw new Error("This method requires Ink.Dom.Selector");return Ink.Dom.Selector.select(a,c||b)},s:function(a,c){if("undefined"==typeof Ink.Dom||"undefined"==typeof Ink.Dom.Selector)throw new Error("This method requires Ink.Dom.Selector");return Ink.Dom.Selector.select(a,c||b)[0]||null},extendObj:function(a){for(var b=[].slice.call(arguments,1),c=0,d=b.length;d>c;c++)if(b[c])for(var e in b[c])Object.prototype.hasOwnProperty.call(b[c],e)&&(a[e]=b[c][e]);return a},log:function(){var b=a.console;b&&b.log&&i.call(b.log,b,arguments)},warn:function(){var b=a.console;b&&b.warn&&i.call(b.warn,b,arguments)},error:function(){var b=a.console;b&&b.error&&i.call(b.error,b,arguments)}}}}(window,document),Ink.createModule("Ink.Net.Ajax","1",[],function(){"use strict";var Ajax=function(a,b){this.init(a,b)};Ajax.globalOptions={parameters:{},requestHeaders:{}};var xMLHttpRequestWithCredentials="XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest;return Ajax.prototype={init:function(a,b){if(!a)throw new Error("new Ink.Net.Ajax: Pass a url as the first argument!");var c=Ink.extendObj({asynchronous:!0,contentType:"application/x-www-form-urlencoded",cors:!1,validateCors:!1,debug:!1,delay:0,evalJS:!0,method:"POST",parameters:null,postBody:"",requestHeaders:null,sanitizeJSON:!1,signRequest:!1,timeout:0,useCredentials:!1,xhrProxy:"",onComplete:null,onCreate:null,onException:null,onFailure:null,onHeaders:null,onInit:null,onSuccess:null,onTimeout:null},Ajax.globalOptions);if(b&&"object"==typeof b){if(c=Ink.extendObj(c,b),"object"==typeof b.parameters)c.parameters=Ink.extendObj(Ink.extendObj({},Ajax.globalOptions.parameters),b.parameters);else if(null!==b.parameters){var d=this.paramsObjToStr(Ajax.globalOptions.parameters);d&&(c.parameters=b.parameters+"&"+d)}c.requestHeaders=Ink.extendObj({},Ajax.globalOptions.requestHeaders),c.requestHeaders=Ink.extendObj(c.requestHeaders,b.requestHeaders)}this.options=c,this.safeCall("onInit"),this.url=a;var e=this._locationFromURL(a);this.isHTTP=this._locationIsHTTP(e),this.isCrossDomain=this._locationIsCrossDomain(e,location),this.requestHasBody=c.method.search(/^get|head$/i)<0,this.options.validateCors===!0&&(this.options.cors=this.isCrossDomain),this.options.cors&&(this.isCrossDomain=!1),this.transport=this.getTransport(),this.request()},_locationFromURL:function(a){var b=document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml","a"):document.createElement("a");return b.setAttribute("href",a),b},_locationIsHTTP:function(a){return a.href.match(/^https?:/i)?!0:!1},_locationIsCrossDomain:function(a,b){if(b=b||window.location,Ajax.prototype._locationIsHTTP(a)&&"widget:"!==b.protocol&&"object"!=typeof window.widget){var c=a.href.split("//"),d=b.href.split("//");if(1===c.length||1===d.length)return!1;var e=c[0],f=d[0],g=/:|\//,h=c[1].split(g)[0],i=d[1].split(g)[0];return e!==f||h!==i}return!1},getTransport:function(){if(!xMLHttpRequestWithCredentials&&this.options.cors&&"XDomainRequest"in window)return this.usingXDomainReq=!0,new XDomainRequest;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"==typeof ActiveXObject)return null;try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){return new ActiveXObject("Microsoft.XMLHTTP")}},setHeaders:function(){if(this.transport)try{var a={Accept:"text/javascript,text/xml,application/xml,application/xhtml+xml,text/html,application/json;q=0.9,text/plain;q=0.8,video/x-mng,image/png,image/jpeg,image/gif;q=0.2,*/*;q=0.1","Accept-Language":navigator.language,"X-Requested-With":"XMLHttpRequest","X-Ink-Version":"3"};if(this.options.cors&&(this.options.signRequest||delete a["X-Requested-With"],delete a["X-Ink-Version"]),this.options.requestHeaders&&"object"==typeof this.options.requestHeaders)for(var b in this.options.requestHeaders)this.options.requestHeaders.hasOwnProperty(b)&&(a[b]=this.options.requestHeaders[b]);this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005&&(a.Connection="close");for(var c in a)a.hasOwnProperty(c)&&this.transport.setRequestHeader(c,a[c])}catch(d){}},paramsObjToStr:function(a){var b,c,d,e,f=[];if("object"!=typeof a)return a;for(d in a)if(a.hasOwnProperty(d))if(e=a[d],"[object Array]"!==Object.prototype.toString.call(e)||isNaN(e.length))f=f.concat([encodeURIComponent(d),"=",encodeURIComponent(e),"&"]);else for(b=0,c=e.length;c>b;b++)f=f.concat([encodeURIComponent(d),"[]","=",encodeURIComponent(e[b]),"&"]);return f.length>0&&f.pop(),f.join("")},setParams:function(){var a=null,b=this.options.parameters;a="object"==typeof b?this.paramsObjToStr(b):""+b,a&&(this.url=this.url.indexOf("?")>-1?this.url.split("#")[0]+"&"+a:this.url.split("#")[0]+"?"+a)},getHeader:function(a){if(this.usingXDomainReq&&"Content-Type"===a)return this.transport.contentType;try{return this.transport.getResponseHeader(a)}catch(b){return null}},getAllHeaders:function(){try{return this.transport.getAllResponseHeaders()}catch(a){return null}},getResponse:function(){var a=this.transport,b={headerJSON:null,responseJSON:null,getHeader:this.getHeader,getAllHeaders:this.getAllHeaders,request:this,transport:a,timeTaken:new Date-this.startTime,requestedUrl:this.url};b.readyState=a.readyState;try{b.responseText=a.responseText}catch(c){}try{b.responseXML=a.responseXML}catch(c){}try{b.status=a.status}catch(c){b.status=0}try{b.statusText=a.statusText}catch(c){b.statusText=""}return b},abort:function(){if(this.transport){clearTimeout(this.delayTimeout),clearTimeout(this.stoTimeout),this._aborted=!0;try{this.transport.abort()}catch(a){}this.finish()}},runStateChange:function(){if(!this._aborted){var a=this.transport.readyState;if(3===a)this.isHTTP&&this.safeCall("onHeaders");else if(4===a||this.usingXDomainReq){if(this.options.asynchronous&&this.options.delay&&this.startTime+this.options.delay>(new Date).getTime())return void(this.delayTimeout=setTimeout(Ink.bind(this.runStateChange,this),this.options.delay+this.startTime-(new Date).getTime()));var b,c=this.transport.responseText,d=this.getResponse(),e=this.transport.status;this.isHTTP&&!this.options.asynchronous&&this.safeCall("onHeaders"),clearTimeout(this.stoTimeout),0===e?this.isHTTP?this.safeCall("onException",new Error("Ink.Net.Ajax: network error! (HTTP status 0)")):e=c?200:404:304===e&&(e=200);var f=this.usingXDomainReq||e>=200&&300>e,g=this.getHeader("Content-Type")||"";if(this.options.evalJS&&(g.indexOf("application/json")>=0||"force"===this.options.evalJS))try{b=this.evalJSON(c,this.sanitizeJSON),b&&(c=d.responseJSON=b)}catch(h){f&&this.safeCall("onException",h)}if(this.usingXDomainReq&&-1!==g.indexOf("xml")&&"DOMParser"in window){var i;switch(g){case"application/xml":case"application/xhtml+xml":case"image/svg+xml":i=g;break;default:i="text/xml"}var j=(new DOMParser).parseFromString(this.transport.responseText,i);this.transport.responseXML=j,d.responseXML=j}null!=this.transport.responseXML&&null==d.responseJSON&&""!==this.transport.responseXML.xml&&(c=this.transport.responseXML),(e||this.usingXDomainReq)&&(f?this.safeCall("onSuccess",d,c):this.safeCall("onFailure",d,c),this.safeCall("on"+e,d,c)),this.finish(d,c)}}},finish:function(a,b){if(a&&this.safeCall("onComplete",a,b),clearTimeout(this.stoTimeout),this.transport){try{this.transport.onreadystatechange=null}catch(c){}"function"==typeof this.transport.destroy&&this.transport.destroy(),this.transport=null}},safeCall:function(a){var b=arguments[1]instanceof Error?arguments[1]:null;if("function"==typeof this.options[a])try{this.options[a].apply(this,[].slice.call(arguments,1))}catch(c){Ink.error("Ink.Net.Ajax: an error was raised while executing "+a+".",c)}else b&&Ink.error("Ink.Net.Ajax: "+b)},setRequestHeader:function(a,b){this.options.requestHeaders||(this.options.requestHeaders={}),this.options.requestHeaders[a]=b},request:function(){if(this.transport){var a=null;this.requestHasBody?(null!==this.options.postBody&&""!==this.options.postBody?(a=this.options.postBody,this.setParams()):null!==this.options.parameters&&""!==this.options.parameters&&(a=this.options.parameters),"object"!=typeof a||a.nodeType?"object"!=typeof a&&null!==a&&(a=""+a):a=this.paramsObjToStr(a),this.options.contentType&&this.setRequestHeader("Content-Type",this.options.contentType)):this.setParams();var b=this.url,c=this.options.method,d=this.isCrossDomain;d&&this.options.xhrProxy&&(this.setRequestHeader("X-Url",b),b=this.options.xhrProxy+encodeURIComponent(b),d=!1);try{this.transport.open(c,b,this.options.asynchronous)}catch(e){return this.safeCall("onException",e),this.finish(this.getResponse(),null)}this.setHeaders(),this.safeCall("onCreate"),this.options.timeout&&!isNaN(this.options.timeout)&&(this.stoTimeout=setTimeout(Ink.bind(function(){this.options.onTimeout&&(this.safeCall("onTimeout"),this.abort())},this),1e3*this.options.timeout)),this.options.useCredentials&&!this.usingXDomainReq&&(this.transport.withCredentials=!0),this.options.asynchronous&&!this.usingXDomainReq?this.transport.onreadystatechange=Ink.bind(this.runStateChange,this):this.usingXDomainReq&&(this.transport.onload=Ink.bind(this.runStateChange,this));try{if(d)return void Ink.error("Ink.Net.Ajax: You are attempting to request a URL which is cross-domain from this one. To do this, you *must* enable the `cors` option!");this.startTime=(new Date).getTime(),this.transport.send(a)}catch(e){return this.safeCall("onException",e),this.finish(this.getResponse(),null)}this.options.asynchronous||this.runStateChange()}},isJSON:function(a){return"string"==typeof a&&a?(a=a.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,""),/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(a)):!1},evalJSON:function(strJSON,sanitize){if(strJSON&&(!sanitize||this.isJSON(strJSON)))try{return"undefined"!=typeof JSON&&"undefined"!=typeof JSON.parse?JSON.parse(strJSON):eval("("+strJSON+")")}catch(e){throw new Error("Ink.Net.Ajax: Bad JSON string. "+e)}return null}},Ajax.load=function(a,b){var c=Ajax.prototype._locationIsCrossDomain(window.location,Ajax.prototype._locationFromURL(a));return new Ajax(a,{method:"GET",cors:c,onSuccess:function(a){b(a.responseJSON||a.responseText,a)}})},Ajax.ping=function(a,b){var c=Ajax.prototype._locationIsCrossDomain(window.location,Ajax.prototype._locationFromURL(a));return new Ajax(a,{method:"HEAD",cors:c,onSuccess:function(a){"function"==typeof b&&b(a)}})},Ajax}),Ink.createModule("Ink.Net.JsonP","1",[],function(){"use strict";var a=function(a,b){this.init(a,b)};return a.prototype={init:function(a,b){if(this.options=Ink.extendObj({onSuccess:void 0,onFailure:void 0,failureObj:{},timeout:10,params:{},callbackParam:"jsoncallback",internalCallback:"_cb",randVar:!1},b||{}),this.randVar=this.options.randVar!==!1?this.options.randVar:parseInt(1e5*Math.random(),10),this.options.internalCallback+=this.randVar,this.uri=a,"function"==typeof this.options.onComplete&&(this.options.onSuccess=this.options.onComplete),"string"!=typeof this.uri)throw new Error("Ink.Net.JsonP: Please define an URI");if("function"!=typeof this.options.onSuccess)throw new Error("Ink.Net.JsonP: please define a callback function on option onSuccess!");Ink.Net.JsonP[this.options.internalCallback]=Ink.bind(function(){this.options.onSuccess(arguments[0]),this._cleanUp()},this),this.timeout=setTimeout(Ink.bind(function(){this.abort(),"function"==typeof this.options.onFailure&&this.options.onFailure(this.options.failureObj)},this),1e3*this.options.timeout),this._addScriptTag()},abort:function(){Ink.Net.JsonP[this.options.internalCallback]=Ink.bindMethod(this,"_cleanUp")},_addParamsToGet:function(a,b){var c=-1!==a.indexOf("?"),d,e,f,g=[a];for(e in b)b.hasOwnProperty(e)&&(c?d="&":(d="?",c=!0),f=b[e],"number"==typeof f||f||(f=""),g=g.concat([d,e,"=",encodeURIComponent(f)]));return g.join("")},_getScriptContainer:function(){return document.body||document.getElementsByTagName("body")[0]||document.getElementsByTagName("head")[0]||document.documentElement},_addScriptTag:function(){this.options.params[this.options.callbackParam]="Ink.Net.JsonP."+this.options.internalCallback,this.options.params.rnd_seed=this.randVar,this.uri=this._addParamsToGet(this.uri,this.options.params),this._scriptEl=document.createElement("script"),this._scriptEl.type="text/javascript",this._scriptEl.src=this.uri;var a=this._getScriptContainer();a.appendChild(this._scriptEl)},_cleanUp:function(){this.timeout&&window.clearTimeout(this.timeout),delete this.options.onSuccess,delete this.options.onFailure,delete Ink.Net.JsonP[this.options.internalCallback],this._removeScriptTag()},_removeScriptTag:function(){this._scriptEl&&(this._scriptEl.parentNode.removeChild(this._scriptEl),delete this._scriptEl)}},a}),Ink.createModule("Ink.Dom.Browser","1",[],function(){"use strict";var a={IE:!1,GECKO:!1,OPERA:!1,SAFARI:!1,KONQUEROR:!1,CHROME:!1,model:!1,version:!1,userAgent:!1,cssPrefix:!1,domPrefix:!1,init:function(){this.detectBrowser(),this.setDimensions(),this.setReferrer()},setDimensions:function(){var a=0,b=0;"number"==typeof window.innerWidth?(a=window.innerWidth,b=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(a=document.documentElement.clientWidth,b=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(a=document.body.clientWidth,b=document.body.clientHeight),this.windowWidth=a,this.windowHeight=b},setReferrer:function(){this.referrer=document.referrer&&document.referrer.length?window.escape(document.referrer):!1},detectBrowser:function(){this._sniffUserAgent(navigator.userAgent)},_sniffUserAgent:function(a){if(this.userAgent=a,a=a.toLowerCase(),/applewebkit\//.test(a))if(this.cssPrefix="-webkit-",this.domPrefix="Webkit",/(chrome|crios)\//.test(a))this.CHROME=!0,this.model="chrome",this.version=a.replace(/(.*)chrome\/([^\s]+)(.*)/,"$2");else{this.SAFARI=!0,this.model="safari";var b=/version\/([^) ]+)/;this.version=b.test(a)?a.match(b)[1]:a.replace(/(.*)applewebkit\/([^\s]+)(.*)/,"$2")}else if(/opera/.test(a))this.OPERA=!0,this.model="opera",this.version=a.replace(/(.*)opera.([^\s$]+)(.*)/,"$2"),this.cssPrefix="-o-",this.domPrefix="O";else if(/konqueror/.test(a))this.KONQUEROR=!0,this.model="konqueror",this.version=a.replace(/(.*)konqueror\/([^;]+);(.*)/,"$2"),this.cssPrefix="-khtml-",this.domPrefix="Khtml";else if(/(msie|trident)/i.test(a))this.IE=!0,this.model="ie",this.version=/rv:((?:\d|\.)+)/.test(a)?a.match(/rv:((?:\d|\.)+)/)[1]:a.replace(/(.*)\smsie\s([^;]+);(.*)/,"$2"),this.cssPrefix="-ms-",this.domPrefix="ms";else if(/gecko/.test(a)){this.cssPrefix="-moz-",this.domPrefix="Moz",this.GECKO=!0;var c=/(camino|chimera|epiphany|minefield|firefox|firebird|phoenix|galeon|iceweasel|k\-meleon|seamonkey|netscape|songbird|sylera)/;if(c.test(a))this.model=a.match(c)[1],this.version=a.replace(new RegExp("(.*)"+this.model+"/([^;\\s$]+)(.*)"),"$2");else{this.model="mozilla";var d=/(.*)rv:([^)]+)(.*)/;d.test(a)&&(this.version=a.replace(d,"$2"))}}},debug:function(){var a="known browsers: (ie, gecko, opera, safari, konqueror) \n";a+=[this.IE,this.GECKO,this.OPERA,this.SAFARI,this.KONQUEROR]+"\n",a+="cssPrefix -> "+this.cssPrefix+"\n",a+="domPrefix -> "+this.domPrefix+"\n",a+="model -> "+this.model+"\n",a+="version -> "+this.version+"\n",a+="\n",a+="original UA -> "+this.userAgent,alert(a)}};return a.init(),a}),Ink.createModule("Ink.Dom.Css",1,[],function(){"use strict";var a="defaultView"in document&&"getComputedStyle"in document.defaultView?document.defaultView.getComputedStyle:window.getComputedStyle,b={addRemoveClassName:function(a,b,c){return c?this.addClassName(a,b):void this.removeClassName(a,b)},addClassName:function(a,c){if(a=Ink.i(a),!a||!c)return null;c=(""+c).split(/[, ]+/);for(var d=0,e=c.length;e>d;d++)c[d].replace(/^\s+|\s+$/g,"")&&("undefined"!=typeof a.classList?a.classList.add(c[d]):b.hasClassName(a,c[d])||(a.className+=(a.className?" ":"")+c[d]))},removeClassName:function(a,b){if(a=Ink.i(a),!a||!b)return null;b=(""+b).split(/[, ]+/);var c=0,d=b.length;if("undefined"!=typeof a.classList)for(;d>c;c++)a.classList.remove(b[c]);else{for(var e=a.className||"",f;d>c;c++)f=new RegExp("(^|\\s+)"+b[c]+"(\\s+|$)"),e=e.replace(f," ");a.className=e.replace(/^\s+/,"").replace(/\s+$/,"")}},setClassName:function(a,b,c){this.addRemoveClassName(a,b,c||!1)},hasClassName:function(a,b,c){if(a=Ink.i(a),!a||!b)return!1;b=(""+b).split(/[, ]+/);for(var d=0,e=b.length,f,g;e>d;d++){if("undefined"!=typeof a.classList)f=a.classList.contains(b[d]);else{var h=a.className;h===b[d]?f=!0:(g=new RegExp("(^|\\s)"+b[d]+"(\\s|$)"),f=g.test(h))}if(f&&!c)return!0;if(!f&&c)return!1}return c?!0:!1},blinkClass:function(a,c,d,e){a=Ink.i(a),b.addRemoveClassName(a,c,!e),setTimeout(function(){b.addRemoveClassName(a,c,e)},Number(d)||100)},toggleClassName:function(a,c,d){return a&&c?"undefined"!=typeof d?b.addRemoveClassName(a,c,d):void("undefined"==typeof a.classList||/[, ]/.test(c)?b.hasClassName(a,c)?b.removeClassName(a,c):b.addClassName(a,c):(a=Ink.i(a),null!==a&&a.classList.toggle(c))):!1},setOpacity:function(a,b){if(a=Ink.i(a),null!==a){var c=1;isNaN(Number(b))||(c=0>=b?0:1>=b?b:100>=b?b/100:1),"undefined"!=typeof a.style.opacity?a.style.opacity=c:a.style.filter="alpha(opacity:"+(100*c|0)+")"}},_camelCase:function(a){return a?a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()}):a},getStyle:function(b,c){if(b=Ink.i(b),null!==b&&b.style){c="float"===c?"cssFloat":this._camelCase(c);var d=b.style[c];if(!a||d&&"auto"!==d)!d&&b.currentStyle&&(d=b.currentStyle[c],"auto"!==d||"width"!==c&&"height"!==c||(d=b["offset"+c.charAt(0).toUpperCase()+c.slice(1)]+"px"));else{var e=a(b,null);d=e?e[c]:null}if("opacity"===c)return d?parseFloat(d,10):1;if("borderTopWidth"===c||"borderBottomWidth"===c||"borderRightWidth"===c||"borderLeftWidth"===c){if("thin"===d)return"1px";if("medium"===d)return"3px";if("thick"===d)return"5px"}return"auto"===d?null:d}},setStyle:function(a,b){if(a=Ink.i(a),null!==a)if("string"==typeof b)a.style.cssText+="; "+b,-1!==b.indexOf("opacity")&&this.setOpacity(a,b.match(/opacity:\s*(\d?\.?\d*)/)[1]);else for(var c in b)b.hasOwnProperty(c)&&("opacity"===c?this.setOpacity(a,b[c]):"float"===c||"cssFloat"===c?"undefined"==typeof a.style.styleFloat?a.style.cssFloat=b[c]:a.style.styleFloat=b[c]:a.style[c]=b[c])},show:function(a,b){a=Ink.i(a),null!==a&&(a.style.display=b||"")},hide:function(a){a=Ink.i(a),null!==a&&(a.style.display="none")},showHide:function(a,b){a=Ink.i(a),a&&(a.style.display=b?"":"none")},toggle:function(a,b){a=Ink.i(a),null!==a&&("undefined"!=typeof b?b===!0?this.show(a):this.hide(a):"none"===this.getStyle(a,"display").toLowerCase()?this.show(a):this.hide(a))},_getRefTag:function(a){if(a.firstElementChild)return a.firstElementChild;for(var b=a.firstChild;b;b=b.nextSibling)if(1===b.nodeType)return b;return null},appendStyleTag:function(a,b,c){c=Ink.extendObj({type:"text/css",force:!1},c||{});var d=document.getElementsByTagName("style"),e=!1,f=!0,g,h;for(g=0,h=d.length;h>g;g++)e=d[g].innerHTML,e.indexOf(a)>=0&&(f=!1);if(f){var i=document.createElement("style"),j=document.getElementsByTagName("head")[0],k=!1,l="";i.type=c.type,l+=a+" {",l+=b,l+="} ","undefined"!=typeof i.styleSheet?i.styleSheet.cssText=l:i.appendChild(document.createTextNode(l)),c.force?j.appendChild(i):(k=this._getRefTag(j),k&&j.insertBefore(i,k))}},appendStylesheet:function(a,b){b=Ink.extendObj({media:"screen",type:"text/css",force:!1},b||{});var c,d=document.createElement("link"),e=document.getElementsByTagName("head")[0];d.media=b.media,d.type=b.type,d.href=a,d.rel="Stylesheet",b.force?e.appendChild(d):(c=this._getRefTag(e),c&&e.insertBefore(d,c))},_loadingCSSFiles:{},_loadedCSSFiles:{},appendStylesheetCb:function(a,b){if(!a)return b(a);if(this._loadedCSSFiles[a])return b(a);var c=this._loadingCSSFiles[a];if(c)return c.push(b);this._loadingCSSFiles[a]=[b];var d=document.createElement("link");d.type="text/css",d.rel="stylesheet",d.href=a;var e=document.getElementsByTagName("head")[0];e.appendChild(d);var f=document.createElement("img");f.onerror=Ink.bindEvent(function(a,b){var c=b;this._loadedCSSFiles[c]=!0;for(var d=this._loadingCSSFiles[c],e=0,f=d.length;f>e;++e)d[e](c);delete this._loadingCSSFiles[c]},this,a),f.src=a},decToHex:function(a){var b=function(a){return 1===a.length&&(a="0"+a),a=a.toUpperCase()};if("object"==typeof a){var c=b(parseInt(a.r,10).toString(16)),d=b(parseInt(a.g,10).toString(16)),e=b(parseInt(a.b,10).toString(16));return c+d+e}a+="";var f=a.match(/\((\d+),\s?(\d+),\s?(\d+)\)/);return null!==f?b(parseInt(f[1],10).toString(16))+b(parseInt(f[2],10).toString(16))+b(parseInt(f[3],10).toString(16)):b(parseInt(a,10).toString(16))},hexToDec:function(a){return 0===a.indexOf("#")&&(a=a.substr(1)),6===a.length?{r:parseInt(a.substr(0,2),16),g:parseInt(a.substr(2,2),16),b:parseInt(a.substr(4,2),16)}:3===a.length?{r:parseInt(a.charAt(0)+a.charAt(0),16),g:parseInt(a.charAt(1)+a.charAt(1),16),b:parseInt(a.charAt(2)+a.charAt(2),16)}:a.length<=2?parseInt(a,16):void 0},getPropertyFromStylesheet:function(a,b){var c=this.getRuleFromStylesheet(a);return c?c.style[b]:null},getPropertyFromStylesheet2:function(a,b){for(var c=this.getRulesFromStylesheet(a),d,e=0,f=c.length;f>e;e++)if(d=c[e].style[b],null!==d&&void 0!==d)return d;return null},getRuleFromStylesheet:function(a){var b,c,d,e,f,g=document.styleSheets;if(!g)return null;for(var h=0,i=document.styleSheets.length;i>h;++h){if(b=document.styleSheets[h],c=b.rules?b.rules:b.cssRules,!c)return null;for(d=0,e=c.length;e>d;++d)if(f=c[d],f.selectorText&&f.selectorText===a)return f}return null},getRulesFromStylesheet:function(a){var b=[],c,d,e,f,g,h=document.styleSheets;if(!h)return b;for(var i=0,j=document.styleSheets.length;j>i;++i){if(c=document.styleSheets[i],d=c.rules?c.rules:c.cssRules,!d)return null;for(e=0,f=d.length;f>e;++e)g=d[e],g.selectorText&&g.selectorText===a&&b.push(g)}return b},getPropertiesFromRule:function(a){var b=this.getRuleFromStylesheet(a),c={},d,e,f;b=b.style.cssText;var g=b.split(";"),h,i,j,k;for(e=0,f=g.length;f>e;++e)" "===g[e].charAt(0)&&(g[e]=g[e].substring(1)),h=g[e].split(":"),d=this._camelCase(h[0].toLowerCase()),i=h[1],i&&(i=i.substring(1),"padding"===d||"margin"===d||"borderWidth"===d?("borderWidth"===d?(j="border",k="Width"):(j=d,k=""),-1!==i.indexOf(" ")?(i=i.split(" "),c[j+"Top"+k]=i[0],c[j+"Bottom"+k]=i[0],c[j+"Left"+k]=i[1],c[j+"Right"+k]=i[1]):(c[j+"Top"+k]=i,c[j+"Bottom"+k]=i,c[j+"Left"+k]=i,c[j+"Right"+k]=i)):"borderRadius"===d?-1!==i.indexOf(" ")?(i=i.split(" "),c.borderTopLeftRadius=i[0],c.borderBottomRightRadius=i[0],c.borderTopRightRadius=i[1],c.borderBottomLeftRadius=i[1]):(c.borderTopLeftRadius=i,c.borderTopRightRadius=i,c.borderBottomLeftRadius=i,c.borderBottomRightRadius=i):c[d]=i);return c},changeFontSize:function(a,b,c,d,e){var f=this;Ink.requireModules(["Ink.Dom.Selector_1"],function(g){var h;if("string"!=typeof a?h="1st argument must be a CSS selector rule.":"number"!=typeof b?h="2nd argument must be a number.":void 0!==c&&"+"!==c&&"*"!==c?h='3rd argument must be one of "+", "*".':void 0!==d&&("number"!=typeof d||0>=d)?h="4th argument must be a positive number.":void 0!==e&&("number"!=typeof e||e>e)&&(h="5th argument must be a positive number greater than minValue."),h)throw new TypeError(h);var i,j,k=g.select(a);void 0===d&&(d=1),c="*"===c?function(a,b){return a*b}:function(a,b){return a+b};for(var l=0,m=k.length;m>l;++l)j=k[l],i=parseFloat(f.getStyle(j,"fontSize")),i=c(i,b),d>i||"number"==typeof e&&i>e||(j.style.fontSize=i+"px")})}};return b}),Ink.createModule("Ink.Dom.Element",1,[],function(){"use strict";function a(a){var b={};try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft}}return b}var b="function"==typeof document.createRange&&"function"==typeof window.Range.prototype.createContextualFragment,c="Ink.Dom.Element tbody: "+Math.random(),d=function(){var a=document.createElement("div");return a.innerHTML="<table>",0!==a.getElementsByTagName("tbody").length}(),e={isDOMElement:function(a){return null!==a&&"object"==typeof a&&"nodeType"in a&&1===a.nodeType},get:function(a){return"undefined"!=typeof a?"string"==typeof a?document.getElementById(a):a:null},create:function(a,b){var c=document.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&(d in e?e[d](c,b[d]):"className"===d||"class"===d?c.className=b.className||b["class"]:c.setAttribute(d,b[d]));return c},remove:function(a){a=Ink.i(a);var b;a&&(b=a.parentNode)&&b.removeChild(a)},scrollTo:function(a){if(a=e.get(a)){if(a.scrollIntoView)return a.scrollIntoView();var b={},c=0,d=0;do c+=a.offsetTop||0,d+=a.offsetLeft||0,a=a.offsetParent;while(a);b={x:d,y:c},window.scrollTo(b.x,b.y)}},offsetTop:function(a){return e.offset(a)[1]},offsetLeft:function(a){return e.offset(a)[0]},positionedOffset:function(a){var b=0,c=0;a=e.get(a);do if(b+=a.offsetTop||0,c+=a.offsetLeft||0,a=a.offsetParent){if("body"===a.tagName.toLowerCase())break;var d=a.style.position;if(!d&&a.currentStyle&&(d=a.currentStyle.position),(!d||"auto"===d)&&"undefined"!=typeof getComputedStyle){var f=getComputedStyle(a,null);d=f?f.position:null}if("relative"===d||"absolute"===d)break}while(a);return[c,b]},offset:function(b){b=Ink.i(b);var c=[0,0],d=b.ownerDocument,e=d.documentElement,f=a(b),g=d.body,h=e.clientTop||g.clientTop||0,i=e.clientLeft||g.clientLeft||0,j=d.pageYOffset||e.scrollTop||g.scrollTop,k=d.pageXOffset||e.scrollLeft||g.scrollLeft,l=f.top+j-h,m=f.left+k-i;return c=[m,l]},scroll:function(a){return a=a?Ink.i(a):document.body,[window.pageXOffset?window.pageXOffset:a.scrollLeft,window.pageYOffset?window.pageYOffset:a.scrollTop]},_getPropPx:function(a,b){var c,d,e=a.getPropertyValue?a.getPropertyValue(b):a[b];return e?(d=e.indexOf("px"),c=-1===d?0:parseFloat(e,10)):c=0,c},offset2:function(a){return e.offset(a)},hasAttribute:function(a,b){return a=Ink.i(a),a.hasAttribute?a.hasAttribute(b):!!a.getAttribute(b)},insertAfter:function(a,b){(b=e.get(b))&&(null!==b.nextSibling?b.parentNode.insertBefore(a,b.nextSibling):b.parentNode.appendChild(a))},insertBefore:function(a,b){(b=e.get(b))&&b.parentNode.insertBefore(a,b)},insertTop:function(a,b){(b=e.get(b))&&(b.firstChild?b.insertBefore(a,b.firstChild):b.appendChild(a))},insertBottom:function(a,b){b=Ink.i(b),b.appendChild(a)},textContent:function(a){a=Ink.i(a);var b,c,d,f;switch(a&&a.nodeType){case 9:return e.textContent(a.documentElement||a.body&&a.body.parentNode||a.body);case 1:if(b="textContent"in a?a.textContent:a.innerText,"undefined"!=typeof b)return b;case 11:if(b=a.textContent,"undefined"!=typeof b)return b;if(a.firstChild===a.lastChild)return e.textContent(a.firstChild);for(b=[],d=a.childNodes,c=0,f=d.length;f>c;++c)b.push(e.textContent(d[c]));return b.join("");case 3:case 4:return a.nodeValue}return""},setTextContent:function(a,b){switch(a=Ink.i(a),a&&a.nodeType){case 1:if("innerText"in a){a.innerText=b;break}case 11:if("textContent"in a){a.textContent=b;break}case 9:for(;a.firstChild;)a.removeChild(a.firstChild);if(""!==b){var c=a.ownerDocument||a;a.appendChild(c.createTextNode(b))}break;case 3:case 4:a.nodeValue=b}},isLink:function(a){var b=a&&1===a.nodeType&&(/^a|area$/i.test(a.tagName)||a.hasAttributeNS&&a.hasAttributeNS("http://www.w3.org/1999/xlink","href"));return!!b},isAncestorOf:function(a,b){if(!b||!a)return!1;if(b.compareDocumentPosition)return 0!==(16&a.compareDocumentPosition(b));for(;b=b.parentNode;)if(b===a)return!0;return!1},descendantOf:function(a,b){return a!==b&&e.isAncestorOf(a,b)},firstElementChild:function(a){if(!a)return null;if("firstElementChild"in a)return a.firstElementChild;for(var b=a.firstChild;b&&1!==b.nodeType;)b=b.nextSibling;return b},lastElementChild:function(a){if(!a)return null;if("lastElementChild"in a)return a.lastElementChild;for(var b=a.lastChild;b&&1!==b.nodeType;)b=b.previousSibling;return b},nextElementSibling:function(a){var b=null;if(!a)return b;if("nextElementSibling"in a)return a.nextElementSibling;for(b=a.nextSibling;b&&1!==b.nodeType;)b=b.nextSibling;return b},previousElementSibling:function(a){var b=null;if(!a)return b;if("previousElementSibling"in a)return a.previousElementSibling;
for(b=a.previousSibling;b&&1!==b.nodeType;)b=b.previousSibling;return b},elementWidth:function(a){return"string"==typeof a&&(a=document.getElementById(a)),a.offsetWidth},elementHeight:function(a){return"string"==typeof a&&(a=document.getElementById(a)),a.offsetHeight},elementLeft:function(a){return e.offsetLeft(a)},elementTop:function(a){return e.offsetTop(a)},elementDimensions:function(a){return a=Ink.i(a),[a.offsetWidth,a.offsetHeight]},outerDimensions:function(b){var c=a(b),d=Ink.getModule("Ink.Dom.Css_1"),e=Ink.bindMethod(d,"getStyle",b);return[c.right-c.left+parseFloat(e("marginLeft")||0)+parseFloat(e("marginRight")||0),c.bottom-c.top+parseFloat(e("marginTop")||0)+parseFloat(e("marginBottom")||0)]},inViewport:function(b,c){var d=a(Ink.i(b));return"boolean"==typeof c&&(c={partial:c,margin:0}),c=Ink.extendObj({partial:!1,margin:0},c||{}),c.partial?d.bottom+c.margin>0&&d.left-c.margin<e.viewportWidth()&&d.top-c.margin<e.viewportHeight()&&d.right+c.margin>0:d.top+c.margin>0&&d.right-c.margin<e.viewportWidth()&&d.bottom-c.margin<e.viewportHeight()&&d.left+c.margin>0},isHidden:function(a){var b=a.offsetWidth,c=a.offsetHeight,d="tr"===a.tagName.toLowerCase(),e=Ink.getModule("Ink.Dom.Css_1");return 0!==b||0!==c||d?0===b||0===c||d?"none"===e.getStyle(a,"display").toLowerCase():!1:!0},isVisible:function(a){return!this.isHidden(a)},clonePosition:function(a,b){var c=e.offset(b);return a.style.left=c[0]+"px",a.style.top=c[1]+"px",a},ellipsizeText:function(a){(a=Ink.i(a))&&(a.style.overflow="hidden",a.style.whiteSpace="nowrap",a.style.textOverflow="ellipsis")},findUpwardsHaving:function(a,b){for(;a&&1===a.nodeType;){if(b(a))return a;a=a.parentNode}return!1},findUpwardsByClass:function(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)"),d=function(a){var b=a.className;return b&&c.test(b)};return e.findUpwardsHaving(a,d)},findUpwardsByTag:function(a,b){b=b.toUpperCase();var c=function(a){return a.nodeName&&a.nodeName.toUpperCase()===b};return e.findUpwardsHaving(a,c)},findUpwardsById:function(a,b){var c=function(a){return a.id===b};return e.findUpwardsHaving(a,c)},findUpwardsBySelector:function(a,b){var c=Ink.getModule("Ink.Dom.Selector","1");if(!c)throw new Error("This method requires Ink.Dom.Selector");var d=function(a){return c.matchesSelector(a,b)};return e.findUpwardsHaving(a,d)},getChildrenText:function(a,b){var c,d,f,g=a.childNodes,h=g.length,i="";if(!a)return i;for(d=0;h>d;++d)c=g[d],c&&3===c.nodeType&&(f=e._trimString(String(c.data)),f.length>0?(i+=f,b&&a.removeChild(c)):a.removeChild(c));return i},_trimString:function(a){return String.prototype.trim?a.trim():a.replace(/^\s*/,"").replace(/\s*$/,"")},getSelectValues:function(a){for(var b=Ink.i(a),c=[],d=0;d<b.options.length;++d)c.push(b.options[d].value);return c},_normalizeData:function(a){for(var b,c=[],d=0,e=a.length;e>d;++d)b=a[d],b instanceof Array?1===b.length&&b.push(b[0]):b=[b,b],c.push(b);return c},fillSelect:function(a,b,c,d){var f=Ink.i(a);if(f){f.innerHTML="";var g,h;c||(h=document.createElement("option"),h.setAttribute("value",""),f.appendChild(h)),b=e._normalizeData(b);for(var i=0,j=b.length;j>i;++i)g=b[i],h=document.createElement("option"),h.setAttribute("value",g[0]),g.length>2&&h.setAttribute("extra",g[2]),h.appendChild(document.createTextNode(g[1])),g[0]===d&&h.setAttribute("selected","selected"),f.appendChild(h)}},fillRadios:function(a,b,c,d,f,g){a=Ink.i(a);var h=document.createElement("span");e.insertAfter(h,a),c=e._normalizeData(c);var i,j;d||(j=document.createElement("input"),j.setAttribute("type","radio"),j.setAttribute("name",b),j.setAttribute("value",""),h.appendChild(j),g&&h.appendChild(document.createElement(g)));for(var k=0;k<c.length;++k)i=c[k],j=document.createElement("input"),j.setAttribute("type","radio"),j.setAttribute("name",b),j.setAttribute("value",i[0]),h.appendChild(j),h.appendChild(document.createTextNode(i[1])),g&&h.appendChild(document.createElement(g)),i[0]===f&&(j.checked=!0);return h},fillChecks:function(a,b,c,d,f){a=Ink.i(a);var g=document.createElement("span");e.insertAfter(g,a),c=e._normalizeData(c),"]"!==b.substring(b.length-1)&&(b+="[]");for(var h,i,j=0;j<c.length;++j)h=c[j],i=document.createElement("input"),i.setAttribute("type","checkbox"),i.setAttribute("name",b),i.setAttribute("value",h[0]),g.appendChild(i),g.appendChild(document.createTextNode(h[1])),f&&g.appendChild(document.createElement(f)),h[0]===d&&(i.checked=!0);return g},parentIndexOf:function(a,b){if(b||(b=a,a=a.parentNode),!a)return!1;for(var c=0,d=a.children.length;d>c;++c)if(a.children[c]===b)return c;return!1},nextSiblings:function(a){if(a=Ink.i(a),"object"==typeof a&&null!==a&&a.nodeType&&1===a.nodeType){for(var b=[],c=a.parentNode.children,d=e.parentIndexOf(a.parentNode,a),f=++d,g=c.length;g>f;f++)b.push(c[f]);return b}return[]},previousSiblings:function(a){if(a=Ink.i(a),"object"==typeof a&&null!==a&&a.nodeType&&1===a.nodeType){for(var b=[],c=a.parentNode.children,d=e.parentIndexOf(a.parentNode,a),f=0,g=d;g>f;f++)b.push(c[f]);return b}return[]},siblings:function(a){if(a=Ink.i(a),"object"==typeof a&&null!==a&&a.nodeType&&1===a.nodeType){for(var b=[],c=a.parentNode.children,d=0,e=c.length;e>d;d++)a!==c[d]&&b.push(c[d]);return b}return[]},childElementCount:function(a){return a=Ink.i(a),"childElementCount"in a?a.childElementCount:a?e.siblings(a).length+1:0},_wrapElements:{TABLE:function(a,b){return a.innerHTML=d?"<table>"+b+"<tbody><tr><td>"+c+"</tr></td></tbody></table>":"<table>"+b+"</table>",a.firstChild},TBODY:function(a,b){return a.innerHTML="<table><tbody>"+b+"</tbody></table>",a.firstChild.getElementsByTagName("tbody")[0]},THEAD:function(a,b){return a.innerHTML="<table><thead>"+b+"</thead><tbody></tbody></table>",a.firstChild.getElementsByTagName("thead")[0]},TFOOT:function(a,b){return a.innerHTML="<table><tfoot>"+b+"</tfoot><tbody></tbody></table>",a.firstChild.getElementsByTagName("tfoot")[0]},TR:function(a,b){return a.innerHTML="<table><tbody><tr>"+b+"</tr></tbody></table>",a.firstChild.firstChild.firstChild}},_getWrapper:function(a,b){var f=a.nodeName&&a.nodeName.toUpperCase(),g=document.createElement("div"),h=e._wrapElements[f];if(!h)return g.innerHTML=b,g;if(g=h(g,b),d&&"TABLE"===f)for(var i=g.getElementsByTagName("td"),j=0,k=i.length;k>j;j++)if(i[j].innerHTML===c){var l=i[j].parentNode.parentNode;l.parentNode.removeChild(l)}return g},appendHTML:function(a,b){if(a=Ink.i(a),null!==a)for(var c=e._getWrapper(a,b);c.firstChild;)a.appendChild(c.firstChild)},prependHTML:function(a,b){if(a=Ink.i(a),null!==a)for(var c=e._getWrapper(a,b);c.lastChild;)a.insertBefore(c.lastChild,a.firstChild)},setHTML:function(a,b){if(a=Ink.i(a),null!==a)try{a.innerHTML=b}catch(c){e.clear(a),e.appendHTML(a,b)}},wrap:function(a,b){a=Ink.i(a),b=Ink.i(b);var c=a.nextSibling,d=a.parentNode;return b.appendChild(a),null!==c?d.insertBefore(b,c):d.appendChild(b),b},unwrap:function(a,b){a=Ink.i(a);var c;c="string"==typeof b?e.findUpwardsBySelector(a,b):"object"==typeof b&&b.tagName?e.findUpwardsHaving(a,function(a){return a===b}):a.parentNode,c&&c.parentNode&&e.insertBefore(a,c)},replace:function(a,b){a=Ink.i(a),null!==a&&a.parentNode.replaceChild(b,a)},removeTextNodeChildren:function(a){if(a=Ink.i(a),null!==a){var b,c,d=a;for(a=a.firstChild;a;)c=3===a.nodeType,b=a,a=a.nextSibling,c&&d.removeChild(b)}},htmlToFragment:b?function(a){var b;return"string"!=typeof a?document.createDocumentFragment():(b=document.createRange(),b.selectNode(document.body),b.createContextualFragment(a))}:function(a){var b=document.createDocumentFragment(),c,d;if("string"!=typeof a)return b;for(c=document.createElement("div"),c.innerHTML=a;d=c.firstChild;)b.appendChild(d);return b},_camelCase:function(a){return a?a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()}):a},data:function(a){var b;if("object"!=typeof a&&"string"!=typeof a)throw"[Ink.Dom.Element.data] :: Invalid selector defined";if("object"==typeof a)b=a;else{var c=Ink.getModule("Ink.Dom.Selector",1);if(!c)throw"[Ink.Dom.Element.data] :: this method requires Ink.Dom.Selector - v1";if(b=c.select(a),b.length<=0)throw"[Ink.Dom.Element.data] :: Can't find any element with the specified selector";b=b[0]}var d={},f=b.attributes||[],g,h,i;if(f)for(var j=0,k=f.length;k>j;++j)g=f[j],h=g.name,i=g.value,h&&0===h.indexOf("data-")&&(d[e._camelCase(h.replace("data-",""))]=i);return d},clear:function(a,b){for(;b=a.lastChild;)a.removeChild(b)},moveCursorTo:function(a,b){if(a=Ink.i(a),null!==a)if(a.setSelectionRange)a.setSelectionRange(b,b);else{var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select()}},pageWidth:function(){var a;a=window.innerWidth&&window.scrollMaxX?window.innerWidth+window.scrollMaxX:document.body.scrollWidth>document.body.offsetWidth?document.body.scrollWidth:document.body.offsetWidth;var b;return window.self.innerWidth?b=document.documentElement.clientWidth?document.documentElement.clientWidth:window.self.innerWidth:document.documentElement&&document.documentElement.clientWidth?b=document.documentElement.clientWidth:document.body&&(b=document.body.clientWidth),b>a?a:b},pageHeight:function(){var a;a=window.innerHeight&&window.scrollMaxY?window.innerHeight+window.scrollMaxY:document.body.scrollHeight>document.body.offsetHeight?document.body.scrollHeight:document.body.offsetHeight;var b;return window.self.innerHeight?b=window.self.innerHeight:document.documentElement&&document.documentElement.clientHeight?b=document.documentElement.clientHeight:document.body&&(b=document.body.clientHeight),b>a?b:a},viewportWidth:function(){return"undefined"!=typeof window.innerWidth?window.innerWidth:document.documentElement&&"undefined"!=typeof document.documentElement.offsetWidth?document.documentElement.offsetWidth:void 0},viewportHeight:function(){return"undefined"!=typeof window.innerHeight?window.innerHeight:document.documentElement&&"undefined"!=typeof document.documentElement.offsetHeight?document.documentElement.offsetHeight:void 0},scrollWidth:function(){return"undefined"!=typeof window.self.pageXOffset?window.self.pageXOffset:"undefined"!=typeof document.documentElement&&"undefined"!=typeof document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft},scrollHeight:function(){return"undefined"!=typeof window.self.pageYOffset?window.self.pageYOffset:"undefined"!=typeof document.body&&"undefined"!=typeof document.body.scrollTop&&"undefined"!=typeof document.documentElement&&"undefined"!=typeof document.documentElement.scrollTop?document.body.scrollTop||document.documentElement.scrollTop:"undefined"!=typeof document.documentElement&&"undefined"!=typeof document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop}};return e}),Ink.createModule("Ink.Dom.Event",1,[],function(){var a=function(a,b,c){return c()}("bean",this,function(a,b){a=a||"bean",b=b||this;var c=window,d=b[a],e=/[^\.]*(?=\..*)\.|.*/,f=/\..*/,g="addEventListener",h="removeEventListener",i=document||{},j=i.documentElement||{},k=j[g],l=k?g:"attachEvent",m={},n=Array.prototype.slice,o=function(a,b){return a.split(b||" ")},p=function(a){return"string"==typeof a},q=function(a){return"function"==typeof a},r="click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",s="show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinputreadystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",t=function(a,b,c){for(c=0;c<b.length;c++)b[c]&&(a[b[c]]=1);return a}({},o(r+(k?s:""))),u=function(){var a="compareDocumentPosition"in j?function(a,b){return b.compareDocumentPosition&&16===(16&b.compareDocumentPosition(a))}:"contains"in j?function(a,b){return b=9===b.nodeType||b===window?j:b,b!==a&&b.contains(a)}:function(a,b){for(;a=a.parentNode;)if(a===b)return 1;return 0},b=function(b){var c=b.relatedTarget;return c?c!==this&&"xul"!==c.prefix&&!/document/.test(this.toString())&&!a(c,this):null==c};return{mouseenter:{base:"mouseover",condition:b},mouseleave:{base:"mouseout",condition:b},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),v=function(){var a=o("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName path"),b=a.concat(o("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement movementX movementY region")),d=b.concat(o("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),e=a.concat(o("char charCode key keyCode keyIdentifier keyLocation location isComposing code")),f=a.concat(o("data")),g=a.concat(o("touches targetTouches changedTouches scale rotation")),h=a.concat(o("data origin source")),k=a.concat(o("state")),l=/over|out/,m=[{reg:/key/i,fix:function(a,b){return b.keyCode=a.keyCode||a.which,e}},{reg:/click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,fix:function(a,c,d){return c.rightClick=3===a.which||2===a.button,c.pos={x:0,y:0},a.pageX||a.pageY?(c.clientX=a.pageX,c.clientY=a.pageY):(a.clientX||a.clientY)&&(c.clientX=a.clientX+i.body.scrollLeft+j.scrollLeft,c.clientY=a.clientY+i.body.scrollTop+j.scrollTop),l.test(d)&&(c.relatedTarget=a.relatedTarget||a[("mouseover"==d?"from":"to")+"Element"]),b}},{reg:/mouse.*(wheel|scroll)/i,fix:function(){return d}},{reg:/^text/i,fix:function(){return f}},{reg:/^touch|^gesture/i,fix:function(){return g}},{reg:/^message$/i,fix:function(){return h}},{reg:/^popstate$/i,fix:function(){return k}},{reg:/.*/,fix:function(){return a}}],n={},p=function(a,b,d){if(arguments.length&&(a=a||((b.ownerDocument||b.document||b).parentWindow||c).event,this.originalEvent=a,this.isNative=d,this.isBean=!0,a)){var e=a.type,f=a.target||a.srcElement,g,h,i,j,k;if(this.target=f&&3===f.nodeType?f.parentNode:f,d){if(k=n[e],!k)for(g=0,h=m.length;h>g;g++)if(m[g].reg.test(e)){n[e]=k=m[g].fix;break}for(j=k(a,this,e),g=j.length;g--;)!((i=j[g])in this)&&i in a&&(this[i]=a[i])}}};return p.prototype.preventDefault=function(){if(this.originalEvent.preventDefault)this.originalEvent.preventDefault();else try{this.originalEvent.returnValue=!1}catch(a){}},p.prototype.stopPropagation=function(){this.originalEvent.stopPropagation?this.originalEvent.stopPropagation():this.originalEvent.cancelBubble=!0},p.prototype.stop=function(){this.preventDefault(),this.stopPropagation(),this.stopped=!0},p.prototype.stopImmediatePropagation=function(){this.originalEvent.stopImmediatePropagation&&this.originalEvent.stopImmediatePropagation(),this.isImmediatePropagationStopped=function(){return!0}},p.prototype.isImmediatePropagationStopped=function(){return this.originalEvent.isImmediatePropagationStopped&&this.originalEvent.isImmediatePropagationStopped()},p.prototype.clone=function(a){var b=new p(this,this.element,this.isNative);return b.currentTarget=a,b},p}(),w=function(a,b){return k||b||a!==i&&a!==c?a:j},x=function(){var a=function(a,b,c,d){var e=function(c,e){return b.apply(a,d?n.call(e,c?0:1).concat(d):e)},f=function(c,d){return b.__beanDel?b.__beanDel.ft(c.target,a):d},g=c?function(a){var b=f(a,this);return c.apply(b,arguments)?(a&&(a.currentTarget=b),e(a,arguments)):void 0}:function(a){return b.__beanDel&&(a=a.clone(f(a))),e(a,arguments)};return g.__beanDel=b.__beanDel,g},b=function(b,c,d,e,f,g,h){var i=u[c],j;"unload"==c&&(d=D(E,b,c,d,e)),i&&(i.condition&&(d=a(b,d,i.condition,g)),c=i.base||c),this.isNative=j=t[c]&&!!b[l],this.customType=!k&&!j&&c,this.element=b,this.type=c,this.original=e,this.namespaces=f,this.eventType=k||j?c:"propertychange",this.target=w(b,j),this[l]=!!this.target[l],this.root=h,this.handler=a(b,d,null,g)};return b.prototype.inNamespaces=function(a){var b,c,d=0;if(!a)return!0;if(!this.namespaces)return!1;for(b=a.length;b--;)for(c=this.namespaces.length;c--;)a[b]==this.namespaces[c]&&d++;return a.length===d},b.prototype.matches=function(a,b,c){return!(this.element!==a||b&&this.original!==b||c&&this.handler!==c)},b}(),y=function(){var a={},b=function(c,d,e,f,g,h){var i=g?"r":"$";if(d&&"*"!=d){var j=0,k,l=a[i+d],m="*"==c;if(!l)return;for(k=l.length;k>j;j++)if((m||l[j].matches(c,e,f))&&!h(l[j],l,j,d))return}else for(var n in a)n.charAt(0)==i&&b(c,n.substr(1),e,f,g,h)},c=function(b,c,d,e){var f,g=a[(e?"r":"$")+c];if(g)for(f=g.length;f--;)if(!g[f].root&&g[f].matches(b,d,null))return!0;return!1},d=function(a,c,d,e){var f=[];return b(a,c,d,null,e,function(a){return f.push(a)}),f},e=function(b){var c=!b.root&&!this.has(b.element,b.type,null,!1),d=(b.root?"r":"$")+b.type;return(a[d]||(a[d]=[])).push(b),c},f=function(c){b(c.element,c.type,null,c.handler,c.root,function(b,c,d){return c.splice(d,1),b.removed=!0,0===c.length&&delete a[(b.root?"r":"$")+b.type],!1})},g=function(){var b,c=[];for(b in a)"$"==b.charAt(0)&&(c=c.concat(a[b]));return c};return{has:c,get:d,put:e,del:f,entries:g}}(),z,A=function(a){z=arguments.length?a:i.querySelectorAll?function(a,b){return b.querySelectorAll(a)}:function(){throw new Error("Bean: No selector engine installed")}},B=function(a,b){if(k||!b||!a||a.propertyName=="_on"+b){var c=y.get(this,b||a.type,null,!1),d=c.length,e=0;for(a=new v(a,this,!0),b&&(a.type=b);d>e&&!a.isImmediatePropagationStopped();e++)c[e].removed||c[e].handler.call(this,a)}},C=k?function(a,b,c){a[c?g:h](b,B,!1)}:function(a,b,c,d){var e;c?(y.put(e=new x(a,d||b,function(b){B.call(a,b,d)},B,null,null,!0)),d&&null==a["_on"+d]&&(a["_on"+d]=0),e.target.attachEvent("on"+e.eventType,e.handler)):(e=y.get(a,d||b,B,!0)[0],e&&(e.target.detachEvent("on"+e.eventType,e.handler),y.del(e)))},D=function(a,b,c,d,e){return function(){d.apply(this,arguments),a(b,c,e)}},E=function(a,b,c,d){var e=b&&b.replace(f,""),g=y.get(a,e,null,!1),h={},i,j;for(i=0,j=g.length;j>i;i++)c&&g[i].original!==c||!g[i].inNamespaces(d)||(y.del(g[i]),!h[g[i].eventType]&&g[i][l]&&(h[g[i].eventType]={t:g[i].eventType,c:g[i].type}));for(i in h)h.hasOwnProperty(i)&&(y.has(a,h[i].t,null,!1)||C(a,h[i].t,!1,h[i].c))},F=function(a,b){var c=function(b,c){for(var d,e=p(a)?z(a,c):a;b&&b!==c;b=b.parentNode)for(d=e.length;d--;)if(e[d]===b)return b},d=function(a){var d=c(a.target,this);d&&b.apply(d,arguments)};return d.__beanDel={ft:c,selector:a},d},G=k?function(a,b,d){var e=i.createEvent(a?"HTMLEvents":"UIEvents");e[a?"initEvent":"initUIEvent"](b,!0,!0,c,1),d.dispatchEvent(e)}:function(a,b,c){c=w(c,a),a?c.fireEvent("on"+b,i.createEventObject()):c["_on"+b]++},H=function(a,b,c){var d=p(b),g,h,i,j;if(d&&b.indexOf(" ")>0){for(b=o(b),j=b.length;j--;)H(a,b[j],c);return a}if(h=d&&b.replace(f,""),h&&u[h]&&(h=u[h].base),!b||d)(i=d&&b.replace(e,""))&&(i=o(i,".")),E(a,h,c,i);else if(q(b))E(a,null,b);else for(g in b)b.hasOwnProperty(g)&&H(a,g,b[g]);return a},I=function(a,b,c,d){var g,h,i,j,k,p,r;{if(void 0!==c||"object"!=typeof b){for(q(c)?(k=n.call(arguments,3),d=g=c):(g=d,k=n.call(arguments,4),d=F(c,g,z)),i=o(b),this===m&&(d=D(H,a,b,d,g)),j=i.length;j--;)r=y.put(p=new x(a,i[j].replace(f,""),d,g,o(i[j].replace(e,""),"."),k,!1)),p[l]&&r&&C(a,p.eventType,!0,p.customType);return a}for(h in b)b.hasOwnProperty(h)&&I.call(this,a,h,b[h])}},J=function(a,b,c,d){return I.apply(null,p(c)?[a,c,b,d].concat(arguments.length>3?n.call(arguments,5):[]):n.call(arguments))},K=function(){return I.apply(m,arguments)},L=function(a,b,c){var d=o(b),g,h,i,j,k;for(g=d.length;g--;)if(b=d[g].replace(f,""),(j=d[g].replace(e,""))&&(j=o(j,".")),j||c||!a[l])for(k=y.get(a,b,null,!1),c=[!1].concat(c),h=0,i=k.length;i>h;h++)k[h].inNamespaces(j)&&k[h].handler.apply(a,c);else G(t[b],b,a);return a},M=function(a,b,c){for(var d=y.get(b,c,null,!1),e=d.length,f=0,g,h;e>f;f++)d[f].original&&(g=[a,d[f].type],(h=d[f].handler.__beanDel)&&g.push(h.selector),g.push(d[f].original),I.apply(null,g));return a},N={on:I,add:J,one:K,off:H,remove:H,clone:M,fire:L,Event:v,setSelectorEngine:A,noConflict:function(){return b[a]=d,this}};if(c.attachEvent){var O=function(){var a,b=y.entries();for(a in b)b[a].type&&"unload"!==b[a].type&&H(b[a].element,b[a].type);c.detachEvent("onunload",O),c.CollectGarbage&&c.CollectGarbage()};c.attachEvent("onunload",O)}return A(Ink.ss),N}),b={KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_SPACE:32,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45,throttle:function(a,b,c){function d(g){var h=+new Date,i=h-e;if(c.preventDefault&&g&&"function"==typeof g.preventDefault&&g.preventDefault(),i>=b)return e=h,a.apply("bind"in c?c.bind:this,[].slice.call(arguments));var j=this,k=[].slice.call(arguments);f&&clearTimeout(f),f=setTimeout(function(){return f=null,d.apply(j,k)},b-i)}b=b||0,c=c||{};var e=0,f;return d},element:function(a){var b=a.delegationTarget||a.target||"mouseout"===a.type&&a.fromElement||"mouseleave"===a.type&&a.fromElement||"mouseover"===a.type&&a.toElement||"mouseenter"===a.type&&a.toElement||a.srcElement||null;return!b||3!==b.nodeType&&4!==b.nodeType?b:b.parentNode},relatedTarget:function(a){var b=a.relatedTarget||"mouseout"===a.type&&a.toElement||"mouseleave"===a.type&&a.toElement||"mouseover"===a.type&&a.fromElement||"mouseenter"===a.type&&a.fromElement||null;return!b||3!==b.nodeType&&4!==b.nodeType?b:b.parentNode},findElement:function(a,b,c){for(var d=this.element(a);;){if(d.nodeName.toLowerCase()===b.toLowerCase())return d;if(d=d.parentNode,!d)return c?!1:document;if(!d.parentNode)return c?!1:document}},observe:function(a,b,c,d){return a=Ink.i(a),a?(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c=Ink.bind(c,a)),c):void 0},observeOnce:function(a,c,d,e){var f=function(){return b.stopObserving(a,c,g),d.apply(this,arguments)},g=b.observe(a,c,f,e);return g},observeMulti:function(a,b,c,d){if("string"==typeof a?a=Ink.ss(a):a&&1===a.nodeType&&(a=[a]),!a[0])return!1;for(var e=0,f=a.length;f>e;e++)this.observe(a[e],b,c,d);return c},observeDelegated:function(a,c,d,e){return b.observe(a,c,function(c){var f=b.element(c);if(f&&f!==a)for(var g=f;g!==a&&g!==document&&g;){if(Ink.Dom.Selector_1.matchesSelector(g,d))return c.delegationTarget=g,e(c);g=g.parentNode}})},stopObserving:function(a,b,c,d){a=Ink.i(a),a&&(a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent("on"+b,c))},stop:function(a){null!==a.cancelBubble&&(a.cancelBubble=!0),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),window.attachEvent&&(a.returnValue=!1),null!==a.cancel&&(a.cancel=!0)},stopPropagation:function(a){null!==a.cancelBubble&&(a.cancelBubble=!0),a.stopPropagation&&a.stopPropagation()},stopDefault:function(a){a.preventDefault&&a.preventDefault(),window.attachEvent&&(a.returnValue=!1),null!==a.cancel&&(a.cancel=!0)},pointer:function(a){return{x:this.pointerX(a),y:this.pointerY(a)}},pointerX:function(a){return a.touches&&a.touches[0]&&a.touches[0].pageX||a.pageX||a.clientX},pointerY:function(a){return a.touches&&a.touches[0]&&a.touches[0].pageY||a.pageY||a.clientY},isLeftClick:function(a){if(window.addEventListener){if(0===a.button)return!0;if("touchend"===a.type&&null===a.button)return!0}else if(1===a.button)return!0;return!1},isRightClick:function(a){return 2===a.button},isMiddleClick:function(a){return window.addEventListener?1===a.button:4===a.button;return!1},getCharFromKeyboardEvent:function(a,b){var c=a.keyCode,d=String.fromCharCode(c),e=a.shiftKey;if(c>=65&&90>=c)return"boolean"==typeof b&&(e=b),e?d:d.toLowerCase();if(c>=96&&105>=c)return String.fromCharCode(48+(c-96));switch(c){case 109:case 189:return"-";case 107:case 187:return"+"}return d},debug:function(){}};return Ink.extendObj(b,a)}),Ink.createModule("Ink.Dom.FormSerialize",1,["Ink.Util.Array_1","Ink.Dom.Element_1","Ink.Dom.Selector_1"],function(a,b,c){"use strict";function d(c){return null!=c&&!b.isDOMElement(c)&&(a.isArray(c)||"string"!=typeof c&&"number"==typeof c.length)}function e(a){return d(a)?a:[a]}var f={serialize:function(b,c){c=c||{};var d={},e={},g=this.asPairs(b,{elements:!0,emptyArray:e,outputUnchecked:c.outputUnchecked});return null==g?g:(a.forEach(g,function(a){var b=/\[\]$/.test(a[0]),c=a[0].replace(/\[\]$/,""),g=a[1],h=a[2];g===e?d[c]=[]:f._resultsInArray(h)||b?c in d?(d[c]instanceof Array||(d[c]=[d[c]]),d[c].push(g)):d[c]=b?[g]:g:d[c]=g}),d)},asPairs:function(b,d){function e(a,b,c){h.push(d.elements?[a,b,c]:[a,b])}function g(b){var f=b.nodeName.toLowerCase(),g=(b.type+"").toLowerCase();if("select"===f&&b.multiple){var h=!1;a.forEach(c.select("option:checked",b),function(a){e(b.name,a.value,b),h=!0}),!h&&"emptyArray"in d&&e(b.name,d.emptyArray,b)}else"input"!==f||"checkbox"!==g&&"radio"!==g||!d.outputUnchecked?e(b.name,b.value,b):e(b.name,null,b)}var h=[];if(d=d||{},b=Ink.i(b)){for(var i=a.filter(b.elements,function(a){return f._isSerialized(a,d)}),j=0,k=i.length;k>j;j++)g(i[j]);return h}return null},fillIn:function(a,b){if(!(a=Ink.i(a)))return null;var c;if("object"!=typeof b||d(b)){if(!d(b))return null;c=b}else c=f._objToPairs(b);return f._fillInPairs(a,c)},_objToPairs:function(a){var b=[],c;for(var d in a)if(a.hasOwnProperty(d)){c=e(a[d]);for(var f=0,g=c.length;g>f;f++)b.push([d,c[f]]);0===g&&b.push([d,[]])}return b},_fillInPairs:function(b,c){c=a.groupBy(c,{key:function(a){return a[0].replace(/\[\]$/,"")},adjacentGroups:!0}),c=a.map(c,function(b){var c=a.reduce(b,function(a,b){return[null,a[1].concat([b[1]])]},[null,[]])[1];return[b[0][0],c]});for(var d,g,h,i=0,j=c.length;j>i;i++){if(d=c[i][0],d in b)g=b[d];else{if(!(d+"[]"in b))continue;g=b[d+"[]"],d+="[]"}g=e(g),h=c[i][1],f._fillInOne(d,g,h)}},_fillInOne:function(a,c,d){var e=c[0],g=e.nodeName.toLowerCase(),h=e.getAttribute("type");h=h&&h.toLowerCase();var i="select"===g&&b.hasAttribute(e,"multiple");if("checkbox"===h||"radio"===h)f._fillInBoolean(c,d,"checked");else if(i)f._fillInBoolean(c[0].options,d,"selected");else{c.length!==d.length&&Ink.warn("Form had "+c.length+' inputs named "'+a+'", but received '+d.length+" values.");for(var j=0,k=Math.min(c.length,d.length);k>j;j+=1)c[j].value=d[j]}},_fillInBoolean:function(b,c,d){a.forEach(b,function(b){var e=a.inArray(b.value,c);b[d]=e})},_resultsInArray:function(a){var c=a.getAttribute("type"),d=a.nodeName.toLowerCase();return"checkbox"===c||"select"===d&&b.hasAttribute(a,"multiple")},_isSerialized:function(a,c){if(c=c||{},!b.isDOMElement(a))return!1;if(!b.hasAttribute(a,"name"))return!1;var d=a.nodeName.toLowerCase();return d&&"fieldset"!==d?"checkbox"===a.type||"radio"===a.type?c.outputUnchecked?!0:!!a.checked:!0:!1}};return f}),Ink.createModule("Ink.Dom.Loaded",1,[],function(){"use strict";var a={_contexts:[],run:function(a,b){b||(b=a,a=window);for(var c,d=0,e=this._contexts.length;e>d;d++)if(this._contexts[d][0]===a){c=this._contexts[d][1];break}c||(c={cbQueue:[],win:a,doc:a.document,root:a.document.documentElement,done:!1,top:!0},c.handlers={checkState:Ink.bindEvent(this._checkState,this,c),poll:Ink.bind(this._poll,this,c)},this._contexts.push([a,c]));var f=c.doc.addEventListener;c.add=f?"addEventListener":"attachEvent",c.rem=f?"removeEventListener":"detachEvent",c.pre=f?"":"on",c.det=f?"DOMContentLoaded":"onreadystatechange",c.wet=c.pre+"load";var g=c.handlers.checkState,h=/complete|loaded/.test(c.doc.readyState)&&"about:blank"!==c.win.location.toString();if(h)setTimeout(Ink.bind(function(){b.call(c.win,"lazy")},this),0);else{c.cbQueue.push(b),c.doc[c.add](c.det,g),c.win[c.add](c.wet,g);var i=1;try{i=c.win.frameElement}catch(j){}if(!f&&c.root&&c.root.doScroll){try{c.top=!i}catch(j){}c.top&&this._poll(c)}}},_checkState:function(a,b){if(a&&("readystatechange"!==a.type||/complete|loaded/.test(b.doc.readyState))){var c="load"===a.type?b.win:b.doc;c[b.rem](b.pre+a.type,b.handlers.checkState,!1),this._ready(b)}},_poll:function(a){try{a.root.doScroll("left")}catch(b){return setTimeout(a.handlers.poll,50)}this._ready(a)},_ready:function(a){if(!a.done){a.done=!0;for(var b=0;b<a.cbQueue.length;++b)a.cbQueue[b].call(a.win);a.cbQueue=[]}}};return a}),Ink.createModule("Ink.Dom.Selector",1,[],function(){"use strict";function a(a){return ob.test(a+"")}function b(){var a,b=[];return a=function(c,d){return b.push(c+=" ")>w.cacheLength&&delete a[b.shift()],a[c]=d}}function c(a){return a[L]=!0,a}function d(a){var b=E.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b=null}}function e(a,b,c,d){var e,f,g,h,i,l,m,n,o,p;if((b?b.ownerDocument||b:M)!==E&&D(b),b=b||E,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(G&&!d){if(e=pb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&K(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return $.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&N.getElementsByClassName&&b.getElementsByClassName)return $.apply(c,b.getElementsByClassName(g)),c}if(N.qsa&&!H.test(a)){if(m=!0,n=L,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(l=j(a),(m=b.getAttribute("id"))?n=m.replace(sb,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=l.length;i--;)l[i]=n+k(l[i]);o=nb.test(a)&&b.parentNode||b,p=l.join(",")}if(p)try{return $.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{m||b.removeAttribute("id")}}}return s(a.replace(hb,"$1"),b,c,d)}function f(a,b){var c=b&&a,d=c&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function g(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function h(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function i(a){return c(function(b){return b=+b,c(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function j(a,b){var c,d,f,g,h,i,j,k=R[a+" "];if(k)return b?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!c||(d=ib.exec(h)))&&(d&&(h=h.slice(d[0].length)||h),i.push(f=[])),c=!1,(d=jb.exec(h))&&(c=d.shift(),f.push({value:c,type:d[0].replace(hb," ")}),h=h.slice(c.length));for(g in w.filter)!(d=mb[g].exec(h))||j[g]&&!(d=j[g](d))||(c=d.shift(),f.push({value:c,type:g,matches:d}),h=h.slice(c.length));if(!c)break}return b?h.length:h?e.error(a):R(a,i).slice(0)}function k(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function l(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=P++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=O+" "+f;if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e)if(j=b[L]||(b[L]={}),(i=j[d])&&i[0]===k){if((h=i[1])===!0||h===v)return h===!0}else if(i=j[d]=[k],i[1]=a(b,c,g)||v,i[1]===!0)return!0}}function m(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function n(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function o(a,b,d,e,f,g){return e&&!e[L]&&(e=o(e)),f&&!f[L]&&(f=o(f,g)),c(function(c,g,h,i){var j,k,l,m=[],o=[],p=g.length,q=c||r(b||"*",h.nodeType?[h]:h,[]),s=!a||!c&&b?q:n(q,m,a,h,i),t=d?f||(c?a:p||e)?[]:g:s;if(d&&d(s,t,h,i),e)for(j=n(t,o),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[o[k]]=!(s[o[k]]=l));if(c){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?ab.call(c,l):m[k])>-1&&(c[j]=!(g[j]=l))}}else t=n(t===g?t.splice(p,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function p(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=l(function(a){return a===b
},g,!0),j=l(function(a){return ab.call(b,a)>-1},g,!0),n=[function(a,c,d){return!f&&(d||c!==A)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=w.relative[a[h].type])n=[l(m(n),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[L]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return o(h>1&&m(n),h>1&&k(a.slice(0,h-1)).replace(hb,"$1"),c,d>h&&p(a.slice(h,d)),e>d&&p(a=a.slice(d)),e>d&&k(a))}n.push(c)}return m(n)}function q(a,b){var d=0,f=b.length>0,g=a.length>0,h=function(c,h,i,j,k){var l,m,o,p=[],q=0,r="0",s=c&&[],t=null!=k,u=A,x=c||g&&w.find.TAG("*",k&&h.parentNode||h),y=O+=null==u?1:Math.random()||.1;for(t&&(A=h!==E&&h,v=d);null!=(l=x[r]);r++){if(g&&l){for(m=0;o=a[m++];)if(o(l,h,i)){j.push(l);break}t&&(O=y,v=++d)}f&&((l=!o&&l)&&q--,c&&s.push(l))}if(q+=r,f&&r!==q){for(m=0;o=b[m++];)o(s,p,h,i);if(c){if(q>0)for(;r--;)s[r]||p[r]||(p[r]=Y.call(j));p=n(p)}$.apply(j,p),t&&!c&&p.length>0&&q+b.length>1&&e.uniqueSort(j)}return t&&(O=y,A=u),s};return f?c(h):h}function r(a,b,c){for(var d=0,f=b.length;f>d;d++)e(a,b[d],c);return c}function s(a,b,c,d){var e,f,g,h,i,l=j(a);if(!d&&1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&9===b.nodeType&&G&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(ub,vb),b)||[])[0],!b)return c;a=a.slice(f.shift().value.length)}for(e=mb.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(ub,vb),nb.test(f[0].type)&&b.parentNode||b))){if(f.splice(e,1),a=d.length&&k(f),!a)return $.apply(c,d),c;break}}return z(a,l)(d,b,!G,c,nb.test(a)),c}function t(){}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L="sizzle"+-new Date,M=window.document,N={},O=0,P=0,Q=b(),R=b(),S=b(),T=!1,U=function(){return 0},V="undefined",W=1<<31,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,ab=X.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},bb="[\\x20\\t\\r\\n\\f]",cb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",db=cb.replace("w","w#"),eb="([*^$|!~]?=)",fb="\\["+bb+"*("+cb+")"+bb+"*(?:"+eb+bb+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+db+")|)|)"+bb+"*\\]",gb=":("+cb+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+fb.replace(3,8)+")*)|.*)\\)|)",hb=new RegExp("^"+bb+"+|((?:^|[^\\\\])(?:\\\\.)*)"+bb+"+$","g"),ib=new RegExp("^"+bb+"*,"+bb+"*"),jb=new RegExp("^"+bb+"*([\\x20\\t\\r\\n\\f>+~])"+bb+"*"),kb=new RegExp(gb),lb=new RegExp("^"+db+"$"),mb={ID:new RegExp("^#("+cb+")"),CLASS:new RegExp("^\\.("+cb+")"),NAME:new RegExp("^\\[name=['\"]?("+cb+")['\"]?\\]"),TAG:new RegExp("^("+cb.replace("w","w*")+")"),ATTR:new RegExp("^"+fb),PSEUDO:new RegExp("^"+gb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+bb+"*(even|odd|(([+-]|)(\\d*)n|)"+bb+"*(?:([+-]|)"+bb+"*(\\d+)|))"+bb+"*\\)|)","i"),needsContext:new RegExp("^"+bb+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+bb+"*((?:-\\d)?\\d*)"+bb+"*\\)|)(?=[^-]|$)","i")},nb=/[\x20\t\r\n\f]*[+~]/,ob=/^[^{]+\{\s*\[native code/,pb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,qb=/^(?:input|select|textarea|button)$/i,rb=/^h\d$/i,sb=/'|\\/g,tb=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,ub=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,vb=function(a,b){var c="0x"+b-65536;return c!==c?b:0>c?String.fromCharCode(c+65536):String.fromCharCode(c>>10|55296,1023&c|56320)};try{$.apply(X=_.call(M.childNodes),M.childNodes),X[M.childNodes.length].nodeType}catch(wb){$={apply:X.length?function(a,b){Z.apply(a,_.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}y=e.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},D=e.setDocument=function(b){var c=b?b.ownerDocument||b:M;return c!==E&&9===c.nodeType&&c.documentElement?(E=c,F=c.documentElement,G=!y(c),N.getElementsByTagName=d(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),N.attributes=d(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return"boolean"!==b&&"string"!==b}),N.getElementsByClassName=d(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",a.getElementsByClassName&&a.getElementsByClassName("e").length?(a.lastChild.className="e",2===a.getElementsByClassName("e").length):!1}),N.getByName=d(function(a){a.id=L+0,a.appendChild(E.createElement("a")).setAttribute("name",L),a.appendChild(E.createElement("i")).setAttribute("name",L),F.appendChild(a);var b=c.getElementsByName&&c.getElementsByName(L).length===2+c.getElementsByName(L+0).length;return F.removeChild(a),b}),N.sortDetached=d(function(a){return a.compareDocumentPosition&&1&a.compareDocumentPosition(E.createElement("div"))}),w.attrHandle=d(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==V&&"#"===a.firstChild.getAttribute("href")})?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},N.getByName?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&G){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(ub,vb);return function(a){return a.getAttribute("id")===b}}):(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&G){var c=b.getElementById(a);return c?c.id===a||typeof c.getAttributeNode!==V&&c.getAttributeNode("id").value===a?[c]:void 0:[]}},w.filter.ID=function(a){var b=a.replace(ub,vb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=N.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.NAME=N.getByName&&function(a,b){return typeof b.getElementsByName!==V?b.getElementsByName(name):void 0},w.find.CLASS=N.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&G?b.getElementsByClassName(a):void 0},I=[],H=[":focus"],(N.qsa=a(c.querySelectorAll))&&(d(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||H.push("\\["+bb+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||H.push(":checked")}),d(function(a){a.innerHTML="<input type='hidden' i=''/>",a.querySelectorAll("[i^='']").length&&H.push("[*^$]="+bb+"*(?:\"\"|'')"),a.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),H.push(",.*:")})),(N.matchesSelector=a(J=F.matchesSelector||F.mozMatchesSelector||F.webkitMatchesSelector||F.oMatchesSelector||F.msMatchesSelector))&&d(function(a){N.disconnectedMatch=J.call(a,"div"),J.call(a,"[s!='']:x"),I.push("!=",gb)}),H=new RegExp(H.join("|")),I=I.length&&new RegExp(I.join("|")),K=a(F.contains)||F.compareDocumentPosition?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=F.compareDocumentPosition?function(a,b){if(a===b)return T=!0,0;var d=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b);return d?1&d||B&&b.compareDocumentPosition(a)===d?a===c||K(M,a)?-1:b===c||K(M,b)?1:C?ab.call(C,a)-ab.call(C,b):0:4&d?-1:1:a.compareDocumentPosition?-1:1}:function(a,b){var d,e=0,g=a.parentNode,h=b.parentNode,i=[a],j=[b];if(a===b)return T=!0,0;if(!g||!h)return a===c?-1:b===c?1:g?-1:h?1:0;if(g===h)return f(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?f(i[e],j[e]):i[e]===M?-1:j[e]===M?1:0},E):E},e.matches=function(a,b){return e(a,null,null,b)},e.matchesSelector=function(a,b){if((a.ownerDocument||a)!==E&&D(a),b=b.replace(tb,"='$1']"),N.matchesSelector&&G&&(!I||!I.test(b))&&!H.test(b))try{var c=J.call(a,b);if(c||N.disconnectedMatch||a.document&&11!==a.document.nodeType)return c}catch(d){}return e(b,E,null,[a]).length>0},e.contains=function(a,b){return(a.ownerDocument||a)!==E&&D(a),K(a,b)},e.attr=function(a,b){var c;return(a.ownerDocument||a)!==E&&D(a),G&&(b=b.toLowerCase()),(c=w.attrHandle[b])?c(a):!G||N.attributes?a.getAttribute(b):((c=a.getAttributeNode(b))||a.getAttribute(b))&&a[b]===!0?b:c&&c.specified?c.value:null},e.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},e.uniqueSort=function(a){var b,c=[],d=0,e=0;if(T=!N.detectDuplicates,B=!N.sortDetached,C=!N.sortStable&&a.slice(0),a.sort(U),T){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return a},x=e.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d];d++)c+=x(b);return c},w=e.selectors={cacheLength:50,createPseudo:c,match:mb,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ub,vb),a[3]=(a[4]||a[5]||"").replace(ub,vb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||e.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&e.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return mb.CHILD.test(a[0])?null:(a[4]?a[2]=a[4]:c&&kb.test(c)&&(b=j(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){return"*"===a?function(){return!0}:(a=a.replace(ub,vb).toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=Q[a+" "];return b||(b=new RegExp("(^|"+bb+")"+a+"("+bb+"|$)"))&&Q(a,function(a){return b.test(a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var f=e.attr(d,a);return null==f?"!="===b:b?(f+="","="===b?f===c:"!="===b?f!==c:"^="===b?c&&0===f.indexOf(c):"*="===b?c&&f.indexOf(c)>-1:"$="===b?c&&f.slice(-c.length)===c:"~="===b?(" "+f+" ").indexOf(c)>-1:"|="===b?f===c||f.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[L]||(q[L]={}),j=k[a]||[],n=j[0]===O&&j[1],m=j[0]===O&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[O,n,m];break}}else if(s&&(j=(b[L]||(b[L]={}))[a])&&j[0]===O)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[L]||(l[L]={}))[a]=[O,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var d,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||e.error("unsupported pseudo: "+a);return f[L]?f(b):f.length>1?(d=[a,a,"",b],w.setFilters.hasOwnProperty(a.toLowerCase())?c(function(a,c){for(var d,e=f(a,b),g=e.length;g--;)d=ab.call(a,e[g]),a[d]=!(c[d]=e[g])}):function(a){return f(a,0,d)}):f}},pseudos:{not:c(function(a){var b=[],d=[],e=z(a.replace(hb,"$1"));return e[L]?c(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,c,f){return b[0]=a,e(b,null,f,d),!d.pop()}}),has:c(function(a){return function(b){return e(a,b).length>0}}),contains:c(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:c(function(a){return lb.test(a||"")||e.error("unsupported lang: "+a),a=a.replace(ub,vb).toLowerCase(),function(b){var c;do if(c=G?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(a){var b=window.location&&window.location.hash;return b&&b.slice(1)===a.id},root:function(a){return a===F},focus:function(a){return a===E.activeElement&&(!E.hasFocus||E.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeName>"@"||3===a.nodeType||4===a.nodeType)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return rb.test(a.nodeName)},input:function(a){return qb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||b.toLowerCase()===a.type)},first:i(function(){return[0]}),last:i(function(a,b){return[b-1]}),eq:i(function(a,b,c){return[0>c?c+b:c]}),even:i(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:i(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:i(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:i(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}};for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=g(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=h(u);return z=e.compile=function(a,b){var c,d=[],e=[],f=S[a+" "];if(!f){for(b||(b=j(a)),c=b.length;c--;)f=p(b[c]),f[L]?d.push(f):e.push(f);f=S(a,q(e,d))}return f},w.pseudos.nth=w.pseudos.eq,t.prototype=w.filters=w.pseudos,w.setFilters=new t,N.sortStable=L.split("").sort(U).join("")===L,D(),[0,0].sort(U),N.detectDuplicates=T,{select:e,matches:e.matches,matchesSelector:e.matchesSelector}}),Ink.createModule("Ink.Util.Array","1",[],function(){"use strict";var a=Array.prototype,b={isArray:Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},groupBy:function(a,c){function d(a){return"function"==typeof c.key?c.key(a):"string"==typeof c.key?a[c.key]:a}function e(a){var b=c.pairs?[a,[]]:[];return h.push(b),g.push(a),b}c=c||{};for(var f,g=[],h=[],i=0,j=a.length;j>i;i++){f=d(a[i]);var k;k=c.adjacentGroups?g[g.length-1]===f?h[h.length-1]:e(f):h[b.keyValue(f,g,!0)]||e(f),c.pairs?k[1].push(a[i]):k.push(a[i])}return h},reduce:function(b,c,d){if(a.reduce)return a.reduce.apply(b,a.slice.call(arguments,1));var e=Object(b),f=e.length>>>0,g=0,h;if(arguments.length>=3)h=d;else{for(;f>g&&!(g in e);)g++;if(g>=f)throw new TypeError("Reduce of empty array with no initial value");h=e[g++]}for(;f>g;g++)g in e&&(h=c(h,e[g],g,e));return h},inArray:function(a,b){if("object"==typeof b)for(var c=0,d=b.length;d>c;++c)if(b[c]===a)return!0;return!1},sortMulti:function(a,b){if("undefined"==typeof a||a.constructor!==Array)return!1;if("string"!=typeof b)return a.sort();if(a.length>0){if("undefined"==typeof a[0][b])return!1;a.sort(function(a,c){var d=a[b],e=c[b];return e>d?-1:d>e?1:0})}return a},keyValue:function(a,b,c){if("undefined"!=typeof a&&"object"==typeof b&&this.inArray(a,b)){for(var d=[],e=0,f=b.length;f>e;++e)if(b[e]===a){if("undefined"!=typeof c&&c===!0)return e;d.push(e)}return d}return!1},shuffle:function(a){if("undefined"!=typeof a&&a.constructor!==Array)return!1;for(var b=a.length,c=!1,d=!1;b--;)d=Math.floor(Math.random()*(b+1)),c=a[b],a[b]=a[d],a[d]=c;return a},forEach:function(b,c,d){if(a.forEach)return a.forEach.call(b,c,d);for(var e=0,f=b.length>>>0;f>e;e++)c.call(d,b[e],e,b)},forEachObj:function(a,c,d){b.forEach(b.keys(a),function(b){c.call(d||null,a[b],b,a)})},each:function(){b.forEach.apply(b,a.slice.call(arguments))},map:function(b,c,d){if(a.map)return a.map.call(b,c,d);for(var e=new Array(g),f=0,g=b.length>>>0;g>f;f++)e[f]=c.call(d,b[f],f,b);return e},filter:function(b,c,d){if(a.filter)return a.filter.call(b,c,d);for(var e=[],f=null,g=0,h=b.length;h>g;g++)f=b[g],c.call(d,f,g,b)&&e.push(f);return e},some:function(a,b,c){if(null===a)throw new TypeError("First argument is invalid.");var d=Object(a),e=d.length>>>0;if("function"!=typeof b)throw new TypeError("Second argument must be a function.");for(var f=0;e>f;f++)if(f in d&&b.call(c,d[f],f,d))return!0;return!1},intersect:function(a,b){if(!a||!b||a instanceof Array==!1||b instanceof Array==!1)return[];for(var c=[],d=0,e=a.length;e>d;++d)for(var f=0,g=b.length;g>f;++f)a[d]===b[f]&&c.push(a[d]);return c},convert:function(b){return a.slice.call(b||[],0)},unique:function(a){if(!Array.prototype.lastIndexOf){var c=[];return b.forEach(b.convert(a),function(a){b.inArray(a,c)||c.push(a)}),c}return b.filter(b.convert(a),function(a,b,c){return c.lastIndexOf(a)===b})},range:function c(a,b,d){1===arguments.length&&(b=a,a=0),d||(d=1);var e=[],f;if(d>0)for(f=a;b>f;f+=d)e.push(f);else for(f=a;f>b;f+=d)e.push(f);return e},insert:function(a,b,c){a.splice(b,0,c)},keys:function(a){if(Object.keys)return Object.keys(a);var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b},remove:function(a,b,c){for(var d=[],e=0,f=a.length;f>e;e++)e>=b&&b+c>e||d.push(a[e]);return d}};return b}),Ink.createModule("Ink.Util.BinPack","1",[],function(){"use strict";var a=function(a,b){this.init(a,b)};a.prototype={init:function(a,b){this.root={x:0,y:0,w:a,h:b}},fit:function(a){var b,c,d;for(b=0;b<a.length;++b)d=a[b],(c=this.findNode(this.root,d.w,d.h))&&(d.fit=this.splitNode(c,d.w,d.h))},findNode:function(a,b,c){return a.used?this.findNode(a.right,b,c)||this.findNode(a.down,b,c):b<=a.w&&c<=a.h?a:null},splitNode:function(a,b,c){return a.used=!0,a.down={x:a.x,y:a.y+c,w:a.w,h:a.h-c},a.right={x:a.x+b,y:a.y,w:a.w-b,h:c},a}};var b=function(){};b.prototype={fit:function(a){var b,c,d,e=a.length,f=e>0?a[0].w:0,g=e>0?a[0].h:0;for(this.root={x:0,y:0,w:f,h:g},b=0;e>b;b++)d=a[b],d.fit=(c=this.findNode(this.root,d.w,d.h))?this.splitNode(c,d.w,d.h):this.growNode(d.w,d.h)},findNode:function(a,b,c){return a.used?this.findNode(a.right,b,c)||this.findNode(a.down,b,c):b<=a.w&&c<=a.h?a:null},splitNode:function(a,b,c){return a.used=!0,a.down={x:a.x,y:a.y+c,w:a.w,h:a.h-c},a.right={x:a.x+b,y:a.y,w:a.w-b,h:c},a},growNode:function(a,b){var c=a<=this.root.w,d=b<=this.root.h,e=d&&this.root.h>=this.root.w+a,f=c&&this.root.w>=this.root.h+b;return e?this.growRight(a,b):f?this.growDown(a,b):d?this.growRight(a,b):c?this.growDown(a,b):null},growRight:function(a,b){this.root={used:!0,x:0,y:0,w:this.root.w+a,h:this.root.h,down:this.root,right:{x:this.root.w,y:0,w:a,h:this.root.h}};var c;return(c=this.findNode(this.root,a,b))?this.splitNode(c,a,b):null},growDown:function(a,b){this.root={used:!0,x:0,y:0,w:this.root.w,h:this.root.h+b,down:{x:0,y:this.root.h,w:this.root.w,h:b},right:this.root};var c;return(c=this.findNode(this.root,a,b))?this.splitNode(c,a,b):null}};var c={random:function(){return Math.random()-.5},w:function(a,b){return b.w-a.w},h:function(a,b){return b.h-a.h},a:function(a,b){return b.area-a.area},max:function(a,b){return Math.max(b.w,b.h)-Math.max(a.w,a.h)},min:function(a,b){return Math.min(b.w,b.h)-Math.min(a.w,a.h)},height:function(a,b){return c.msort(a,b,["h","w"])},width:function(a,b){return c.msort(a,b,["w","h"])},area:function(a,b){return c.msort(a,b,["a","h","w"])},maxside:function(a,b){return c.msort(a,b,["max","min","h","w"])},msort:function(a,b,d){var e,f;for(f=0;f<d.length;++f)if(e=c[d[f]](a,b),0!==e)return e;return 0}},d=function(){return[this.w," x ",this.h].join("")},e={binPack:function(e){var f,g,h;for(f=0,g=e.blocks.length;g>f;++f)h=e.blocks[f],"area"in h||(h.area=h.w*h.h);var i=e.dimensions?new a(e.dimensions[0],e.dimensions[1]):new b;e.sorter||(e.sorter="maxside"),e.blocks.sort(c[e.sorter]),i.fit(e.blocks);var j=[i.root.w,i.root.h],k=[],l=[];for(f=0,g=e.blocks.length;g>f;++f)h=e.blocks[f],h.fit?k.push(h):(h.toString=d,l.push(h));var m=j[0]*j[1],n=0;for(f=0,g=k.length;g>f;++f)h=k[f],n+=h.area;return{dimensions:j,filled:n/m,blocks:e.blocks,fitted:k,unfitted:l}}};return e}),Ink.createModule("Ink.Util.Cookie","1",[],function(){"use strict";var a={get:function(a){var b=document.cookie||!1,c={};if(b){b=b.replace(new RegExp("; ","g"),";");var d=b.split(";"),e=[];if(d.length>0)for(var f=0;f<d.length;f++)e=d[f].split("="),2===e.length&&(c[e[0]]=decodeURIComponent(e[1]));if(a)return"undefined"!=typeof c[a]?c[a]:null}return c},set:function(a,b,c,d,e,f){var g;if(!a||b===!1||"undefined"==typeof a||"undefined"==typeof b)return!1;g=a+"="+encodeURIComponent(b);var h=!1,i=!1,j=!1,k=!1;if(c&&"undefined"!=typeof c&&!isNaN(c)){var l=new Date,m=parseInt(Number(l.valueOf()),10)+1e3*Number(parseInt(c,10)),n=new Date(m),o=n.toGMTString(),p=new RegExp("([^\\s]+)(\\s\\d\\d)\\s(\\w\\w\\w)\\s(.*)");o=o.replace(p,"$1$2-$3-$4"),h="expires="+o}else h="undefined"==typeof c||isNaN(c)||0!==Number(parseInt(c,10))?"expires=Thu, 01-Jan-2037 00:00:01 GMT":"";i=d&&"undefined"!=typeof d?"path="+d:"path=/",e?j="domain="+e:/\./.test(window.location.hostname)&&(j="domain="+window.location.hostname),k=f&&"undefined"!=typeof f?f:!1,document.cookie=g+"; "+h+"; "+i+(j?"; "+j:"")+"; "+k},remove:function(a,b,c){var d=-1;this.set(a,"deleted",d,b,c)}};return a}),Ink.createModule("Ink.Util.Date","1",[],function(){"use strict";var a={_months:function(a){var b=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];return b[a]},_iMonth:function(a){return Number(a)?+a-1:{janeiro:0,jan:0,fevereiro:1,fev:1,"março":2,mar:2,abril:3,abr:3,maio:4,mai:4,junho:5,jun:5,julho:6,jul:6,agosto:7,ago:7,setembro:8,set:8,outubro:9,out:9,novembro:10,nov:10,dezembro:11,dez:11}[a.toLowerCase()]},_wDays:function(a){var b=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];return b[a]},_iWeek:function(a){return Number(a)?+a||7:{segunda:1,seg:1,"terça":2,ter:2,quarta:3,qua:3,quinta:4,qui:4,sexta:5,sex:5,"sábado":6,"sáb":6,domingo:7,dom:7}[a.toLowerCase()]},_daysInMonth:function(a,b){var c;return c=1===a||3===a||5===a||7===a||8===a||10===a||12===a?31:4===a||6===a||9===a||11===a?30:b%400===0||b%4===0&&b%100!==0?29:28},get:function(a,b){("undefined"==typeof a||""===a)&&(a="Y-m-d");var c=a.split(""),d=new Array(c.length),e="\\",f;f="undefined"==typeof b?new Date:new Date("number"==typeof b?1e3*b:b);for(var g,h,i,j=0;j<c.length;j++)switch(c[j]){case e:d[j]=c[j+1],j++;break;case"d":var k=f.getDate();d[j]=String(k).length>1?k:"0"+k;break;case"D":d[j]=this._wDays(f.getDay()).substring(0,3);break;case"j":d[j]=f.getDate();break;case"l":d[j]=this._wDays(f.getDay());break;case"N":d[j]=f.getDay()||7;break;case"S":var l=f.getDate(),m=["st","nd","rd"],n="";d[j]=l>=11&&13>=l?"th":(n=m[String(l).substr(-1)-1])?n:"th";break;case"w":d[j]=f.getDay();break;case"z":g=Date.UTC(f.getFullYear(),0,0),h=Date.UTC(f.getFullYear(),f.getMonth(),f.getDate()),d[j]=Math.floor((h-g)/864e5);break;case"W":var o=new Date(f.getFullYear(),0,1);g=o.getDay()||7;var p=Math.floor((f-o)/864e5+1);d[j]=Math.ceil((p-(8-g))/7)+1;break;case"F":d[j]=this._months(f.getMonth());break;case"m":var q=String(f.getMonth()+1);d[j]=q.length>1?q:"0"+q;break;case"M":d[j]=this._months(f.getMonth()).substring(0,3);break;case"n":d[j]=f.getMonth()+1;break;case"t":d[j]=this._daysInMonth(f.getMonth()+1,f.getYear());break;case"L":var r=f.getFullYear();d[j]=r%4?!1:r%100?!0:r%400?!1:!0;break;case"o":throw'"o" not implemented!';case"Y":d[j]=f.getFullYear();break;case"y":d[j]=String(f.getFullYear()).substring(2);break;case"a":d[j]=f.getHours()<12?"am":"pm";break;case"A":d[j]=f.getHours<12?"AM":"PM";break;case"B":throw'"B" not implemented!';case"g":i=f.getHours(),d[j]=12>=i?i:i-12;break;case"G":d[j]=String(f.getHours());break;case"h":i=String(f.getHours()),i=12>=i?i:i-12,d[j]=i.length>1?i:"0"+i;break;case"H":i=String(f.getHours()),d[j]=i.length>1?i:"0"+i;break;case"i":var s=String(f.getMinutes());d[j]=s.length>1?s:"0"+s;break;case"s":var t=String(f.getSeconds());d[j]=t.length>1?t:"0"+t;break;case"u":throw'"u" not implemented!';case"e":throw'"e" not implemented!';case"I":g=new Date(f.getFullYear(),0,1),d[j]=f.getTimezoneOffset()!==g.getTimezoneOffset()?1:0;break;case"O":var u=f.getTimezoneOffset(),v=u%60;i=String((u-v)/60*-1),"-"!==i.charAt(0)&&(i="+"+i),i=3===i.length?i:i.replace(/([+\-])(\d)/,"$10$2"),d[j]=i+v+"0";break;case"P":throw'"P" not implemented!';case"T":throw'"T" not implemented!';case"Z":d[j]=60*f.getTimezoneOffset();break;case"c":throw'"c" not implemented!';case"r":var w=this._wDays(f.getDay()).substr(0,3),x=this._months(f.getMonth()).substr(0,3);d[j]=w+", "+f.getDate()+" "+x+this.get(" Y H:i:s O",f);break;case"U":d[j]=Math.floor(f.getTime()/1e3);break;default:d[j]=c[j]}return d.join("")},set:function(a,b){if("undefined"!=typeof b){("undefined"==typeof a||""===a)&&(a="Y-m-d");for(var c=a.split(""),d=new Array(c.length),e="\\",f,g={year:void 0,month:void 0,day:void 0,dayY:void 0,dayW:void 0,week:void 0,hour:void 0,hourD:void 0,min:void 0,sec:void 0,msec:void 0,ampm:void 0,diffM:void 0,diffH:void 0,date:void 0},h=0,i=0;i<c.length;i++)switch(c[i]){case e:d[i]=c[i+1],i++;break;case"d":d[i]="(\\d{2})",g.day={original:i,match:h++};break;case"j":d[i]="(\\d{1,2})",g.day={original:i,match:h++};break;case"D":d[i]="([\\wá]{3})",g.dayW={original:i,match:h++};break;case"l":d[i]="([\\wá]{5,7})",g.dayW={original:i,match:h++};break;case"N":d[i]="(\\d)",g.dayW={original:i,match:h++};break;case"w":d[i]="(\\d)",g.dayW={original:i,match:h++};break;case"S":d[i]="\\w{2}";break;case"z":d[i]="(\\d{1,3})",g.dayY={original:i,match:h++};break;case"W":d[i]="(\\d{1,2})",g.week={original:i,match:h++};break;case"F":d[i]="([\\wç]{4,9})",g.month={original:i,match:h++};break;case"M":d[i]="(\\w{3})",g.month={original:i,match:h++};break;case"m":d[i]="(\\d{2})",g.month={original:i,match:h++};break;case"n":d[i]="(\\d{1,2})",g.month={original:i,match:h++};break;case"t":d[i]="\\d{2}";break;case"L":d[i]="\\w{4,5}";break;case"o":throw'"o" not implemented!';case"Y":d[i]="(\\d{4})",g.year={original:i,match:h++};break;case"y":d[i]="(\\d{2})",("undefined"==typeof g.year||"Y"!==c[g.year.original])&&(g.year={original:i,match:h++});break;case"a":d[i]="(am|pm)",g.ampm={original:i,match:h++};break;case"A":d[i]="(AM|PM)",g.ampm={original:i,match:h++};break;case"B":throw'"B" not implemented!';case"g":d[i]="(\\d{1,2})",g.hourD={original:i,match:h++};break;case"G":d[i]="(\\d{1,2})",g.hour={original:i,match:h++};break;case"h":d[i]="(\\d{2})",g.hourD={original:i,match:h++};break;case"H":d[i]="(\\d{2})",g.hour={original:i,match:h++};break;case"i":d[i]="(\\d{2})",g.min={original:i,match:h++};break;case"s":d[i]="(\\d{2})",g.sec={original:i,match:h++};break;case"u":throw'"u" not implemented!';case"e":throw'"e" not implemented!';case"I":d[i]="\\d";break;case"O":d[i]="([-+]\\d{4})",g.diffH={original:i,match:h++};break;case"P":throw'"P" not implemented!';case"T":throw'"T" not implemented!';case"Z":d[i]="(\\-?\\d{1,5})",g.diffM={original:i,match:h++};break;case"c":throw'"c" not implemented!';case"r":d[i]="([\\wá]{3}, \\d{1,2} \\w{3} \\d{4} \\d{2}:\\d{2}:\\d{2} [+\\-]\\d{4})",g.date={original:i,match:h++};break;case"U":d[i]="(\\d{1,13})",g.date={original:i,match:h++};break;default:d[i]=c[i]}var j=new RegExp(d.join(""));try{if(f=b.match(j),!f)return}catch(k){return}var l="undefined"!=typeof g.date,m="undefined"!=typeof g.year,n="undefined"!=typeof g.dayY,o="undefined"!=typeof g.day,p="undefined"!=typeof g.month,q=p&&o,r=!p&&o,s="undefined"!=typeof g.dayW,t="undefined"!=typeof g.week,u=t&&s,v=!t&&s,w=n||q||!m&&r||u||!m&&v,x=!(m||n||o||p||s||t),y="undefined"!=typeof g.hourD&&"undefined"!=typeof g.ampm,z="undefined"!=typeof g.hour,A=y||z,B="undefined"!=typeof g.min,C="undefined"!=typeof g.sec,D="undefined"!=typeof g.msec,E=!x||A,F=E||B,G="undefined"!=typeof g.diffM,H="undefined"!=typeof g.diffH,I,J;if(l){if("U"===c[g.date.original])return new Date(1e3*+f[g.date.match+1]);var K=f[g.date.match+1].match(/\w{3}, (\d{1,2}) (\w{3}) (\d{4}) (\d{2}):(\d{2}):(\d{2}) ([+\-]\d{4})/);return I=+K[4]+ +K[7].slice(0,3),J=+K[5]+(K[7].slice(0,1)+K[7].slice(3))/100*60,new Date(K[3],this._iMonth(K[2]),K[1],I,J,K[6])}var L=new Date,M,N,O,P,Q,R;if(w||x){if(w){if(m){var S=L.getFullYear()-50+"";M=f[g.year.match+1],"y"===c[g.year.original]&&(M=+S.slice(0,2)+(M>=S.slice(2)?0:1)+M)}else M=L.getFullYear();if(n)N=0,O=f[g.dayY.match+1];else if(o)N=p?this._iMonth(f[g.month.match+1]):L.getMonth(),O=f[g.day.match+1];else{N=0;var T;T=t?f[g.week.match+1]:this.get("W",L),O=7*(T-2)+(8-(new Date(M,0,1).getDay()||7))+this._iWeek(f[g.week.match+1])}if(0===N&&O>31){var U=new Date(M,N,O);N=U.getMonth(),O=U.getDate()}}else M=L.getFullYear(),N=L.getMonth(),O=L.getDate();return I=y?+f[g.hourD.match+1]+("pm"===f[g.ampm.match+1]?12:0):z?f[g.hour.match+1]:x?L.getHours():"00",J=B?f[g.min.match+1]:E?"00":L.getMinutes(),P=C?f[g.sec.match+1]:F?"00":L.getSeconds(),Q=D?f[g.msec.match+1]:"000",R=H?f[g.diffH.match+1]:G?String(-1*f[g.diffM.match+1]/60*100).replace(/^(\d)/,"+$1").replace(/(^[\-+])(\d{3}$)/,"$10$2"):"+0000",new Date(M,N,O,I,J,P)}}}};return a}),Ink.createModule("Ink.Util.Dumper","1",[],function(){"use strict";var a={_tab:"    ",_formatParam:function(a){var b="";switch(typeof a){case"string":b="(string) "+a;break;case"number":b="(number) "+a;break;case"boolean":b="(boolean) "+a;break;case"object":b=null!==a?a.constructor===Array?"Array \n{\n"+this._outputFormat(a,0)+"\n}":"Object \n{\n"+this._outputFormat(a,0)+"\n}":"null";break;default:b=!1}return b},_getTabs:function(a){for(var b="",c=0;a>c;c++)b+=this._tab;return b},_outputFormat:function(a,b){var c="",d=!1;for(var e in a)if(null!==a[e])if("object"!=typeof a[e]||a[e].constructor!==Array&&a[e].constructor!==Object){if(a[e].constructor===Function)continue;c=c+this._tab+this._getTabs(b)+"["+e+"] => "+a[e]+"\n"}else a[e].constructor===Array?d="Array":a[e].constructor===Object&&(d="Object"),c+=this._tab+this._getTabs(b)+"["+e+"] => <b>"+d+"</b>\n",c+=this._tab+this._getTabs(b)+"{\n",c+=this._outputFormat(a[e],b+1)+this._tab+this._getTabs(b)+"}\n";else c=c+this._tab+this._getTabs(b)+"["+e+"] => null \n";return c},printDump:function(a,b){if(b&&"undefined"!=typeof b)if("string"==typeof b)document.getElementById(b).innerHTML="<pre>"+this._formatParam(a)+"</pre>";else{if("object"!=typeof b)throw"TARGET must be an element or an element ID";b.innerHTML="<pre>"+this._formatParam(a)+"</pre>"}else document.write("<pre>"+this._formatParam(a)+"</pre>")},returnDump:function(a){return this._formatParam(a)},alertDump:function(a){window.alert(this._formatParam(a).replace(/(<b>)(Array|Object)(<\/b>)/g,"$2"))},windowDump:function(a){var b="dumperwindow_"+1e4*Math.random(),c=window.open("",b,"width=400,height=300,left=50,top=50,status,menubar,scrollbars,resizable");c.document.open(),c.document.write("<pre>"+this._formatParam(a)+"</pre>"),c.document.close(),c.focus()}};return a}),Ink.createModule("Ink.Util.I18n","1",[],function(){"use strict";var a=/\{(?:(\{.*?})|(?:%s:)?(\d+)|(?:%s)?|([\w-]+))}/g,b=function(a,b){return"function"==typeof a?a.apply(this,b):"undefined"!=typeof a?a:""},c=function(a,b,d){return this instanceof c?void this.reset().lang(b).testMode(d).append(a||{},b):new c(a,b,d)};return c.prototype={reset:function(){return this._dicts=[],this._dict={},this._testMode=!1,this._lang=this._gLang,this},clone:function(){for(var a=new c,b=0,d=this._dicts.length;d>b;b++)a.append(this._dicts[b]);return a.testMode(this.testMode()),a.lang(this.lang()),a},append:function(a){return this._dicts.push(a),this._dict=Ink.extendObj(this._dict,a[this._lang]),this},lang:function(a){if(!arguments.length)return this._lang;if(a&&this._lang!==a){this._lang=a,this._dict={};for(var b=0,c=this._dicts.length;c>b;b++)this._dict=Ink.extendObj(this._dict,this._dicts[b][a]||{})}return this},testMode:function(a){return arguments.length?(void 0!==a&&(this._testMode=!!a),this):!!this._testMode
},getKey:function(a){var b,d=this._gLang,e=this._lang;return a in this._dict?b=this._dict[a]:(c.langGlobal(e),b=this._gDict[a],c.langGlobal(d)),b},text:function(c){if("string"==typeof c){var d=Array.prototype.slice.call(arguments,1),e=0,f="object"==typeof d[0],g=this.getKey(c);return void 0===g&&(g=this._testMode?"["+c+"]":c),"number"==typeof g&&(g+=""),"string"==typeof g?g=g.replace(a,function(a,c,g,h){var i=c?c:g?d[g-(f?0:1)]:h&&d[0]?d[0][h]||"":d[e++ +(f?1:0)];return b(i,[e].concat(d))}):"function"==typeof g?g.apply(this,d):g instanceof Array?b(g[d[0]],d):"object"==typeof g?b(g[d[0]],d):""}},ntext:function(a,b,c){var d=Array.prototype.slice.apply(arguments),e;if(2===d.length&&"number"==typeof b){if(e=this.getKey(a),!(e instanceof Array))return"";d.splice(0,1),e=e[1===b?0:1]}else d.splice(0,2),e=1===c?a:b;return this.text.apply(this,[e].concat(d))},ordinal:function(a){if(void 0===a)return"";var c=+a.toString().slice(-1),d=this.getKey("_ordinals");if(void 0===d)return"";if("string"==typeof d)return d;var e;return"function"==typeof d&&(e=d(a,c),"string"==typeof e)?e:"exceptions"in d&&(e="function"==typeof d.exceptions?d.exceptions(a,c):a in d.exceptions?b(d.exceptions[a],[a,c]):void 0,"string"==typeof e)?e:"byLastDigit"in d&&(e="function"==typeof d.byLastDigit?d.byLastDigit(c,a):c in d.byLastDigit?b(d.byLastDigit[c],[c,a]):void 0,"string"==typeof e)?e:"default"in d&&(e=b(d["default"],[a,c]),"string"==typeof e)?e:""},alias:function(){var a=Ink.bind(c.prototype.text,this);return a.ntext=Ink.bind(c.prototype.ntext,this),a.append=Ink.bind(c.prototype.append,this),a.ordinal=Ink.bind(c.prototype.ordinal,this),a.testMode=Ink.bind(c.prototype.testMode,this),a}},c.reset=function(){c.prototype._gDicts=[],c.prototype._gDict={},c.prototype._gLang="pt_PT"},c.reset(),c.appendGlobal=function(a,b){if(b){if(!(b in a)){var d={};d[b]=a,a=d}b!==c.prototype._gLang&&c.langGlobal(b)}c.prototype._gDicts.push(a),Ink.extendObj(c.prototype._gDict,a[c.prototype._gLang])},c.langGlobal=function(a){if(!arguments.length)return c.prototype._gLang;if(a&&c.prototype._gLang!==a){c.prototype._gLang=a,c.prototype._gDict={};for(var b=0,d=c.prototype._gDicts.length;d>b;b++)Ink.extendObj(c.prototype._gDict,c.prototype._gDicts[b][a]||{})}},c}),Ink.createModule("Ink.Util.Json","1",[],function(){"use strict";function twoDigits(a){var b=""+a;return 1===b.length?"0"+b:b}var function_call=Function.prototype.call,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,dateToISOString=Date.prototype.toISOString?Ink.bind(function_call,Date.prototype.toISOString):function(a){return a.getUTCFullYear()+"-"+twoDigits(a.getUTCMonth()+1)+"-"+twoDigits(a.getUTCDate())+"T"+twoDigits(a.getUTCHours())+":"+twoDigits(a.getUTCMinutes())+":"+twoDigits(a.getUTCSeconds())+"."+String((a.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"},InkJson={_nativeJSON:window.JSON||null,_convertToUnicode:!1,_escape:function(a){var b={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/([\x00-\x1f\\"])/g,function(a,c){var d=b[c];return d?d:(d=c.charCodeAt(),"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16))})),a},_toUnicode:function(a){if(this._convertToUnicode){for(var b="",c=!1,d=!1,e=0,f=a.length;f>e;){if(c=a.charCodeAt(e),c>=32&&126>=c||8===c||9===c||10===c||12===c||13===c||32===c||34===c||47===c||58===c||92===c)d=34===c||92===c||47===c?"\\"+a.charAt(e):8===c?"\\b":9===c?"\\t":10===c?"\\n":12===c?"\\f":13===c?"\\r":a.charAt(e);else if(this._convertToUnicode){for(d=a.charCodeAt(e).toString(16)+"".toUpperCase();d.length<4;)d="0"+d;d="\\u"+d}else d=a.charAt(e);b+=d,e++}return b}return this._escape(a)},_stringifyValue:function(a){if("string"==typeof a)return'"'+this._toUnicode(a)+'"';if("number"!=typeof a||!isNaN(a)&&isFinite(a)){if("undefined"==typeof a||null===a)return"null";if("function"==typeof a.toJSON){var b=a.toJSON();return"string"==typeof b?'"'+this._escape(b)+'"':this._escape(b.toString())}if("number"==typeof a||"boolean"==typeof a)return""+a;if("function"==typeof a)return"null";if(a.constructor===Date)return'"'+this._escape(dateToISOString(a))+'"';if(a.constructor===Array){for(var c="",d=0,e=a.length;e>d;d++)d>0&&(c+=","),c+=this._stringifyValue(a[d]);return"["+c+"]"}var f="";for(var g in a)({}).hasOwnProperty.call(a,g)&&(""!==f&&(f+=","),f+='"'+this._escape(g)+'": '+this._stringifyValue(a[g]));return"{"+f+"}"}return"null"},stringify:function(a,b){return this._convertToUnicode=!!b,!this._convertToUnicode&&this._nativeJSON?this._nativeJSON.stringify(a):this._stringifyValue(a)},parse:function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}};return InkJson}),Ink.createModule("Ink.Util.String","1",[],function(){"use strict";var InkUtilString={_chars:["&","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","€",'"',"ß","<",">","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","­","®","¯","°","±","²","³","´","µ","¶","·","¸","¹","º","»","¼","½","¾"],_entities:["amp","agrave","aacute","acirc","atilde","auml","aring","aelig","ccedil","egrave","eacute","ecirc","euml","igrave","iacute","icirc","iuml","eth","ntilde","ograve","oacute","ocirc","otilde","ouml","oslash","ugrave","uacute","ucirc","uuml","yacute","thorn","yuml","Agrave","Aacute","Acirc","Atilde","Auml","Aring","AElig","Ccedil","Egrave","Eacute","Ecirc","Euml","Igrave","Iacute","Icirc","Iuml","ETH","Ntilde","Ograve","Oacute","Ocirc","Otilde","Ouml","Oslash","Ugrave","Uacute","Ucirc","Uuml","Yacute","THORN","euro","quot","szlig","lt","gt","cent","pound","curren","yen","brvbar","sect","uml","copy","ordf","laquo","not","shy","reg","macr","deg","plusmn","sup2","sup3","acute","micro","para","middot","cedil","sup1","ordm","raquo","frac14","frac12","frac34"],_accentedChars:["à","á","â","ã","ä","å","è","é","ê","ë","ì","í","î","ï","ò","ó","ô","õ","ö","ù","ú","û","ü","ç","ñ","À","Á","Â","Ã","Ä","Å","È","É","Ê","Ë","Ì","Í","Î","Ï","Ò","Ó","Ô","Õ","Ö","Ù","Ú","Û","Ü","Ç","Ñ"],_accentedRemovedChars:["a","a","a","a","a","a","e","e","e","e","i","i","i","i","o","o","o","o","o","u","u","u","u","c","n","A","A","A","A","A","A","E","E","E","E","I","I","I","I","O","O","O","O","O","U","U","U","U","C","N"],_htmlUnsafeChars:{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"},ucFirst:function(a,b){var c=b?/(^|\s)(\w)(\S{2,})/:/(^|\s)(\w)(\S{2,})/g;return a?String(a).replace(c,function(a,b,c,d){return b+c.toUpperCase()+d.toLowerCase()}):a},trim:function(a){return"string"==typeof a?a.replace(/^\s+|\s+$|\n+$/g,""):a},stripTags:function(a,b){if(b&&"string"==typeof b){for(var c=InkUtilString.trim(b).split(","),d=[],e=!1,f=0;f<c.length;f++)""!==InkUtilString.trim(c[f])&&(e=InkUtilString.trim(c[f].replace(/(<|\>)/g,"").replace(/\s/,"")),d.push("(<"+e+"\\s[^>]+>|<(\\s|\\/)?(\\s|\\/)?"+e+">)"));for(var g=d.join("|"),h=new RegExp(g,"i"),i=a.match(new RegExp("<[^>]*>","g")),j=0;j<i.length;j++)i[j].match(h)||(a=a.replace(new RegExp(i[j],"gm"),""));return a}return a.replace(/<[^\>]+\>/g,"")},htmlEntitiesEncode:function(a){if(a&&a.replace)for(var b=!1,c=0;c<InkUtilString._chars.length;c++)b=new RegExp(InkUtilString._chars[c],"gm"),a=a.replace(b,"&"+InkUtilString._entities[c]+";");return a},htmlEntitiesDecode:function(a){if(a&&a.replace){for(var b=!1,c=0;c<InkUtilString._entities.length;c++)b=new RegExp("&"+InkUtilString._entities[c]+";","gm"),a=a.replace(b,InkUtilString._chars[c]);a=a.replace(/&#[^;]+;?/g,function(a){return String.fromCharCode("x"===a.charAt(2)?parseInt(a.substring(3),16):parseInt(a.substring(2),10))})}return a},utf8Encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b},shortString:function(a,b){for(var c=a.split(" "),d="",e=0;e<c.length;e++){if((d+c[e]+" ").length>=b){d+="&hellip;";break}d+=c[e]+" "}return d},truncateString:function(a,b){return a.length-1>b?a.substr(0,b-1)+"…":a},utf8Decode:function(a){for(var b="",c=0,d=0,e=0,f=0;c<a.length;)d=a.charCodeAt(c),128>d?(b+=String.fromCharCode(d),c++):d>191&&224>d?(e=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&e),c+=2):(e=a.charCodeAt(c+1),f=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&e)<<6|63&f),c+=3);return b},removeAccentedChars:function(a){for(var b=a,c=!1,d=0;d<InkUtilString._accentedChars.length;d++)c=new RegExp(InkUtilString._accentedChars[d],"gm"),b=b.replace(c,""+InkUtilString._accentedRemovedChars[d]);return b},substrCount:function(a,b){return a?a.split(b).length-1:0},evalJSON:function(strJSON,sanitize){if("undefined"==typeof sanitize||null===sanitize||InkUtilString.isJSON(strJSON))try{return"undefined"!=typeof JSON&&"undefined"!=typeof JSON.parse?JSON.parse(strJSON):eval("("+strJSON+")")}catch(e){throw new Error("ERROR: Bad JSON string...")}},isJSON:function(a){return a=a.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,""),/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(a)},htmlEscapeUnsafe:function(a){var b=InkUtilString._htmlUnsafeChars;return null!==a?String(a).replace(/[<>&'"]/g,function(a){return b[a]}):a},normalizeWhitespace:function(a){return null!==a?InkUtilString.trim(String(a).replace(/\s+/g," ")):a},toUnicode:function(a){if("string"==typeof a){for(var b="",c=!1,d=!1,e=a.length,f=0;e>f;){if(c=a.charCodeAt(f),c>=32&&126>=c||8===c||9===c||10===c||12===c||13===c||32===c||34===c||47===c||58===c||92===c)d=8===c?"\\b":9===c?"\\t":10===c?"\\n":12===c?"\\f":13===c?"\\r":a.charAt(f);else{for(d=a.charCodeAt(f).toString(16)+"".toUpperCase();d.length<4;)d="0"+d;d="\\u"+d}b+=d,f++}return b}},escape:function(a){var b=a.charCodeAt(0).toString(16).split("");if(b.length<3){for(;b.length<2;)b.unshift("0");b.unshift("x")}else{for(;b.length<4;)b.unshift("0");b.unshift("u")}return b.unshift("\\"),b.join("")},unescape:function(a){var b=a.lastIndexOf("0");b=-1===b?2:Math.min(b,2);var c=a.substring(b),d=parseInt(c,16);return String.fromCharCode(d)},escapeText:function(a,b){void 0===b&&(b=["[","]","'",","]);for(var c=[],d,e,f=0,g=a.length;g>f;++f)d=a[f],e=d.charCodeAt(0),(32>e||e>126&&-1===b.indexOf(d))&&(d=InkUtilString.escape(d)),c.push(d);return c.join("")},escapedCharRegex:/(\\x[0-9a-fA-F]{2})|(\\u[0-9a-fA-F]{4})/g,unescapeText:function(a){for(var b;b=InkUtilString.escapedCharRegex.exec(a);)b=b[0],a=a.replace(b,InkUtilString.unescape(b)),InkUtilString.escapedCharRegex.lastIndex=0;return a},strcmp:function(a,b){return a===b?0:a>b?1:-1},packetize:function(a,b){for(var c=a.length,d=new Array(Math.ceil(c/b)),e=a.split(""),f,g=0;c;)f=Math.min(b,c),d[g++]=e.splice(0,f).join(""),c-=f;return d}};return InkUtilString}),Ink.createModule("Ink.Util.Url","1",[],function(){"use strict";var a={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",getUrl:function(){return window.location.href},genQueryString:function(a,b){var c=-1!==a.indexOf("?"),d,e,f,g=[a];for(e in b)b.hasOwnProperty(e)&&(c?d="&":(d="?",c=!0),f=b[e],"number"==typeof f||f||(f=""),g=g.concat([d,encodeURIComponent(e),"=",encodeURIComponent(f)]));return g.join("")},getQueryString:function(a){var b;b=a&&"undefined"!=typeof a?a:this.getUrl();var c={};if(b.match(/\?(.+)/i)){var d=b.replace(/^(.*)\?([^\#]+)(\#(.*))?/g,"$2");if(d.length>0)for(var e=d.split(/[;&]/),f=0;f<e.length;f++){var g=e[f].split("=");c[decodeURIComponent(g[0])]="undefined"!=typeof g[1]&&g[1]?decodeURIComponent(g[1]):!1}}return c},getAnchor:function(a){var b;b=a&&"undefined"!=typeof a?a:this.getUrl();var c=!1;return b.match(/#(.+)/)&&(c=b.replace(/([^#]+)#(.*)/,"$2")),c},getAnchorString:function(a){var b;b=a&&"undefined"!=typeof a?a:this.getUrl();var c={};if(b.match(/#(.+)/i)){var d=b.replace(/^([^#]+)#(.*)?/g,"$2");if(d.length>0)for(var e=d.split(/[;&]/),f=0;f<e.length;f++){var g=e[f].split("=");c[decodeURIComponent(g[0])]="undefined"!=typeof g[1]&&g[1]?decodeURIComponent(g[1]):!1}}return c},parseUrl:function(a){var b={};if(a&&"string"==typeof a){if(a.match(/^([^:]+):\/\//i)){var c=/^([^:]+):\/\/([^\/]*)\/?([^\?#]*)\??([^#]*)#?(.*)/i;a.match(c)&&(b.scheme=a.replace(c,"$1"),b.host=a.replace(c,"$2"),b.path="/"+a.replace(c,"$3"),b.query=a.replace(c,"$4")||!1,b.fragment=a.replace(c,"$5")||!1)}else{var d=new RegExp("^([^\\?]+)\\?([^#]+)#(.*)","i"),e=new RegExp("^([^\\?]+)\\?([^#]+)#?","i"),f=new RegExp("^([^\\?]+)\\??","i");a.match(d)?(b.scheme=!1,b.host=!1,b.path=a.replace(d,"$1"),b.query=a.replace(d,"$2"),b.fragment=a.replace(d,"$3")):a.match(e)?(b.scheme=!1,b.host=!1,b.path=a.replace(e,"$1"),b.query=a.replace(e,"$2"),b.fragment=!1):a.match(f)&&(b.scheme=!1,b.host=!1,b.path=a.replace(f,"$1"),b.query=!1,b.fragment=!1)}if(b.host){var g=/^(.*?)\\:(\\d+)$/i;if(b.host.match(g)){var h=b.host;b.host=h.replace(g,"$1"),b.port=h.replace(g,"$2")}else b.port=!1;if(b.host.match(/@/i)){var i=b.host;b.host=i.split("@")[1];var j=i.split("@")[0];j.match(/\:/)?(b.user=j.split(":")[0],b.pass=j.split(":")[1]):(b.user=j,b.pass=!1)}}}return b},format:function(a){var b="",c="",d="",e="",f="";return"string"==typeof a.protocol?b=a.protocol+"//":"string"==typeof a.scheme&&(b=a.scheme+"://"),c=a.host||a.hostname||"",d=a.path||"","string"==typeof a.query?f=a.query:"string"==typeof a.search&&(f=a.search.replace(/^\?/,"")),"string"==typeof a.fragment?e=a.fragment:"string"==typeof a.hash&&(e=a.hash.replace(/#$/,"")),[b,c,d,f&&"?"+f,e&&"#"+e].join("")},currentScriptElement:function(a){var b=document.getElementsByTagName("script");if("undefined"==typeof a)return b.length>0?b[b.length-1]:!1;for(var c=!1,d=new RegExp(""+a,"i"),e=0,f=b.length;f>e;e++)if(c=b[e],d.test(c.src))return c;return!1}};return a}),Ink.createModule("Ink.Util.Validator","1",[],function(){"use strict";var a={_countryCodes:["AO","CV","MZ","TL","PT"],_internacionalPT:351,_indicativosPT:{21:"lisboa",22:"porto",231:"mealhada",232:"viseu",233:"figueira da foz",234:"aveiro",235:"arganil",236:"pombal",238:"seia",239:"coimbra",241:"abrantes",242:"ponte de sôr",243:"santarém",244:"leiria",245:"portalegre",249:"torres novas",251:"valença",252:"vila nova de famalicão",253:"braga",254:"peso da régua",255:"penafiel",256:"são joão da madeira",258:"viana do castelo",259:"vila real",261:"torres vedras",262:"caldas da raínha",263:"vila franca de xira",265:"setúbal",266:"évora",268:"estremoz",269:"santiago do cacém",271:"guarda",272:"castelo branco",273:"bragança",274:"proença-a-nova",275:"covilhã",276:"chaves",277:"idanha-a-nova",278:"mirandela",279:"moncorvo",281:"tavira",282:"portimão",283:"odemira",284:"beja",285:"moura",286:"castro verde",289:"faro",291:"funchal, porto santo",292:"corvo, faial, flores, horta, pico",295:"angra do heroísmo, graciosa, são jorge, terceira",296:"ponta delgada, são miguel, santa maria",91:"rede móvel 91 (Vodafone / Yorn)",93:"rede móvel 93 (Optimus)",96:"rede móvel 96 (TMN)",92:"rede móvel 92 (TODOS)",707:"número único",760:"número único",800:"número grátis",808:"chamada local",30:"voip"},_internacionalCV:238,_indicativosCV:{2:"fixo",91:"móvel 91",95:"móvel 95",97:"móvel 97",98:"móvel 98",99:"móvel 99"},_internacionalAO:244,_indicativosAO:{2:"fixo",91:"móvel 91",92:"móvel 92"},_internacionalMZ:258,_indicativosMZ:{2:"fixo",82:"móvel 82",84:"móvel 84"},_internacionalTL:670,_indicativosTL:{3:"fixo",7:"móvel 7"},_characterGroups:{numbers:["0-9"],asciiAlpha:["a-zA-Z"],latin1Alpha:["a-zA-Z","À-ÿ"],unicodeAlpha:["a-zA-Z","À-ÿ","Ā-῿","Ⰰ-퟿"],space:[" "],dash:["-"],underscore:["_"],nicknamePunctuation:["_.-"],singleLineWhitespace:["	 "],newline:["\n"],whitespace:["	\n\f\r  "],asciiPunctuation:["!-/",":-@","[-`","{-~"],latin1Punctuation:["!-/",":-@","[-`","{-~","¡-¿","×","÷"],unicodePunctuation:["!-/",":-@","[-`","{-~","¡-¿","×","÷"," -⁯","⸀-⹿","　-〿"]},createRegExp:function(b){var c="^[";for(var d in b)if(b.hasOwnProperty(d)){if(!(d in a._characterGroups))throw new Error("group "+d+" is not a valid character group");b[d]&&(c+=a._characterGroups[d].join(""))}return new RegExp("^["===c?"$^":c+"]*?$")},checkCharacterGroups:function(b,c){return a.createRegExp(c).test(b)},unicode:function(b,c){return a.checkCharacterGroups(b,Ink.extendObj({unicodeAlpha:!0},c))},latin1:function(b,c){return a.checkCharacterGroups(b,Ink.extendObj({latin1Alpha:!0},c))},ascii:function(b,c){return a.checkCharacterGroups(b,Ink.extendObj({asciiAlpha:!0},c))},number:function(b,c){if(b+="",c=Ink.extendObj({decimalSep:".",thousandSep:"",negative:!0,decimalPlaces:null,maxDigits:null,max:null,min:null,returnNumber:!1},c||{}),c.thousandSep)return b=b.replace(new RegExp("\\"+c.thousandSep,"g"),""),c.thousandSep="",a.number(b,c);if(c.negative===!1)return c.min=0,c.negative=!0,a.number(b,c);if("."!==c.decimalSep&&(b=b.replace(new RegExp("\\"+c.decimalSep,"g"),".")),!/^(-)?(\d+)?(\.\d+)?$/.test(b)||""===b)return!1;var d;if(c.decimalSep&&-1!==b.indexOf(c.decimalSep)){if(d=b.split(c.decimalSep),null!==c.decimalPlaces&&d[1].length>c.decimalPlaces)return!1}else d=[""+b,""];if(null!==c.maxDigits&&d[0].replace(/-/g,"").length>c.maxDigits)return d;var e=parseFloat(b);return null!==c.maxExcl&&e>=c.maxExcl||null!==c.minExcl&&e<=c.minExcl?!1:null!==c.max&&e>c.max||null!==c.min&&e<c.min?!1:c.returnNumber?e:!0},_isLeapYear:function(a){var b=/^\d{4}$/;return b.test(a)?a%4?!1:a%100?!0:a%400?!1:!0:!1},_dateParsers:{"yyyy-mm-dd":{day:5,month:3,year:1,sep:"-",parser:/^(\d{4})(\-)(\d{1,2})(\-)(\d{1,2})$/},"yyyy/mm/dd":{day:5,month:3,year:1,sep:"/",parser:/^(\d{4})(\/)(\d{1,2})(\/)(\d{1,2})$/},"yy-mm-dd":{day:5,month:3,year:1,sep:"-",parser:/^(\d{2})(\-)(\d{1,2})(\-)(\d{1,2})$/},"yy/mm/dd":{day:5,month:3,year:1,sep:"/",parser:/^(\d{2})(\/)(\d{1,2})(\/)(\d{1,2})$/},"dd-mm-yyyy":{day:1,month:3,year:5,sep:"-",parser:/^(\d{1,2})(\-)(\d{1,2})(\-)(\d{4})$/},"dd/mm/yyyy":{day:1,month:3,year:5,sep:"/",parser:/^(\d{1,2})(\/)(\d{1,2})(\/)(\d{4})$/},"dd-mm-yy":{day:1,month:3,year:5,sep:"-",parser:/^(\d{1,2})(\-)(\d{1,2})(\-)(\d{2})$/},"dd/mm/yy":{day:1,month:3,year:5,sep:"/",parser:/^(\d{1,2})(\/)(\d{1,2})(\/)(\d{2})$/}},_daysInMonth:function(a,b){var c=0;return a=parseInt(a,10),b=parseInt(b,10),1===a||3===a||5===a||7===a||8===a||10===a||12===a?c=31:4===a||6===a||9===a||11===a?c=30:2===a&&(c=b%400===0||b%4===0&&b%100!==0?29:28),c},_isValidDate:function(a,b,c){var d=/^\d{4}$/,e=/^\d{1,2}$/;return d.test(a)&&e.test(b)&&e.test(c)&&b>=1&&12>=b&&c>=1&&this._daysInMonth(b,a)>=c?!0:!1},email:function(a){var b=new RegExp("^[_a-z0-9-]+((\\.|\\+)[_a-z0-9-]+)*@([\\w]*-?[\\w]*\\.)+[a-z]{2,4}$","i");return!!b.test(a)},mail:function(b){return a.email(b)},url:function(a,b){if("undefined"==typeof b||b===!1){var c=new RegExp("(^(http\\:\\/\\/|https\\:\\/\\/)(.+))","i");c.test(a)===!1&&(a="http://"+a)}var d=new RegExp("^(http:\\/\\/|https:\\/\\/)([\\w]*(-?[\\w]*)*\\.)+[a-z]{2,4}","i");return d.test(a)===!1?!1:!0},isPTPhone:function(a){a=a.toString();var b=[];for(var c in this._indicativosPT)"string"==typeof this._indicativosPT[c]&&b.push(c);var d=b.join("|"),e=/^(00351|\+351)/;e.test(a)&&(a=a.replace(e,""));var f=/(\s|\-|\.)+/g;a=a.replace(f,"");var g=/[\d]{9}/i;if(9===a.length&&g.test(a)){var h=new RegExp("^("+d+")");if(h.test(a))return!0}return!1},isPortuguesePhone:function(a){return this.isPTPhone(a)},isCVPhone:function(a){a=a.toString();var b=[];for(var c in this._indicativosCV)"string"==typeof this._indicativosCV[c]&&b.push(c);var d=b.join("|"),e=/^(00238|\+238)/;e.test(a)&&(a=a.replace(e,""));var f=/(\s|\-|\.)+/g;a=a.replace(f,"");var g=/[\d]{7}/i;if(7===a.length&&g.test(a)){var h=new RegExp("^("+d+")");if(h.test(a))return!0}return!1},isAOPhone:function(a){a=a.toString();var b=[];for(var c in this._indicativosAO)"string"==typeof this._indicativosAO[c]&&b.push(c);var d=b.join("|"),e=/^(00244|\+244)/;e.test(a)&&(a=a.replace(e,""));var f=/(\s|\-|\.)+/g;a=a.replace(f,"");var g=/[\d]{9}/i;if(9===a.length&&g.test(a)){var h=new RegExp("^("+d+")");if(h.test(a))return!0}return!1},isMZPhone:function(a){a=a.toString();var b=[];for(var c in this._indicativosMZ)"string"==typeof this._indicativosMZ[c]&&b.push(c);var d=b.join("|"),e=/^(00258|\+258)/;e.test(a)&&(a=a.replace(e,""));var f=/(\s|\-|\.)+/g;a=a.replace(f,"");var g=/[\d]{8,9}/i;if((9===a.length||8===a.length)&&g.test(a)){var h=new RegExp("^("+d+")");if(h.test(a)){if(0===a.indexOf("2")&&8===a.length)return!0;if(0===a.indexOf("8")&&9===a.length)return!0}}return!1},isTLPhone:function(a){a=a.toString();var b=[];for(var c in this._indicativosTL)"string"==typeof this._indicativosTL[c]&&b.push(c);var d=b.join("|"),e=/^(00670|\+670)/;e.test(a)&&(a=a.replace(e,""));var f=/(\s|\-|\.)+/g;a=a.replace(f,"");var g=/[\d]{7}/i;if(7===a.length&&g.test(a)){var h=new RegExp("^("+d+")");if(h.test(a))return!0}return!1},isPhone:function(){var a;if(0===arguments.length)return!1;var b=arguments[0];if(arguments.length>1){if(arguments[1].constructor!==Array){if("function"==typeof this["is"+arguments[1].toUpperCase()+"Phone"])return this["is"+arguments[1].toUpperCase()+"Phone"](b);throw"Invalid Country Code!"}var c;for(a=0;a<arguments[1].length;a++){if("function"!=typeof(c=this["is"+arguments[1][a].toUpperCase()+"Phone"]))throw"Invalid Country Code!";if(c(b))return!0}}else for(a=0;a<this._countryCodes.length;a++)if(this["is"+this._countryCodes[a]+"Phone"](b))return!0;return!1},codPostal:function(a,b,c){var d=/^(\s*\-\s*|\s+)$/,e=/^\s+|\s+$/g,f=/^[1-9]\d{3}$/,g=/^\d{3}$/,h=/^(.{4})(.*)(.{3})$/;if(a=a.replace(e,""),"undefined"!=typeof b){if(b=b.replace(e,""),f.test(a)&&g.test(b))return c?[!0,!0]:!0}else{if(f.test(a))return c?[!0,!1]:!0;var i=a.match(h);if(null!==i&&f.test(i[1])&&d.test(i[2])&&g.test(i[3]))return c?[!0,!1]:!0}return c?[!1,!1]:!1},isDate:function(a,b){if("undefined"==typeof this._dateParsers[a])return!1;var c=this._dateParsers[a].year,d=this._dateParsers[a].month,e=this._dateParsers[a].day,f=this._dateParsers[a].parser,g=this._dateParsers[a].sep,h=b.match(f);if(null!==h&&h[2]===h[4]&&h[2]===g){var i=2===h[c].length?"20"+h[c].toString():h[c];if(this._isValidDate(i,h[d].toString(),h[e].toString()))return!0}return!1},isColor:function(a){var b,c=!1,d=/^[a-zA-Z]+$/,e=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,f=/^rgb\(\s*([0-9]{1,3})(%)?\s*,\s*([0-9]{1,3})(%)?\s*,\s*([0-9]{1,3})(%)?\s*\)$/,g=/^rgba\(\s*([0-9]{1,3})(%)?\s*,\s*([0-9]{1,3})(%)?\s*,\s*([0-9]{1,3})(%)?\s*,\s*(1(\.0)?|0(\.[0-9])?)\s*\)$/,h=/^hsl\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(%)?\s*,\s*([0-9]{1,3})(%)?\s*\)$/,i=/^hsla\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(%)?\s*,\s*([0-9]{1,3})(%)?\s*,\s*(1(\.0)?|0(\.[0-9])?)\s*\)$/;if(d.test(a)||e.test(a))return!0;var j;if(null!==(b=f.exec(a))||null!==(b=g.exec(a)))for(j=b.length;j--;){if((2===j||4===j||6===j)&&"undefined"!=typeof b[j]&&""!==b[j]){if(!("undefined"!=typeof b[j-1]&&b[j-1]>=0&&b[j-1]<=100))return!1;c=!0}if(1===j||3===j||5===j&&("undefined"==typeof b[j+1]||""===b[j+1])){if(!("undefined"!=typeof b[j]&&b[j]>=0&&b[j]<=255))return!1;c=!0}}if(null!==(b=h.exec(a))||null!==(b=i.exec(a)))for(j=b.length;j--;){if(3===j||5===j){if(!("undefined"!=typeof b[j-1]&&"undefined"!=typeof b[j]&&""!==b[j]&&b[j-1]>=0&&b[j-1]<=100))return!1;c=!0}if(1===j){if(!("undefined"!=typeof b[j]&&b[j]>=0&&b[j]<=360))return!1;c=!0}}return c},isIP:function(a,b){if("string"!=typeof a)return!1;switch(b=(b||"ipv4").toLowerCase()){case"ipv4":return/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(a);case"ipv6":return/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(a);default:return!1}},_creditCardSpecs:{"default":{length:"13,14,15,16,17,18,19",prefix:/^.+/,luhn:!0},"american express":{length:"15",prefix:/^3[47]/,luhn:!0},"diners club":{length:"14,16",prefix:/^36|55|30[0-5]/,luhn:!0},discover:{length:"16",prefix:/^6(?:5|011)/,luhn:!0},jcb:{length:"15,16",prefix:/^3|1800|2131/,luhn:!0},maestro:{length:"16,18",prefix:/^50(?:20|38)|6(?:304|759)/,luhn:!0},mastercard:{length:"16",prefix:/^5[1-5]/,luhn:!0},visa:{length:"13,16",prefix:/^4/,luhn:!0}},_luhn:function(a){if(a=parseInt(a,10),"number"!=typeof a&&a%1!==0)return!1;a+="";var b=a.length,c,d=0;for(c=b-1;c>=0;c-=2)d+=parseInt(a.substr(c,1),10);for(c=b-2;c>=0;c-=2){var e=parseInt(2*a.substr(c,1),10);d+=e>=10?e-9:e}return d%10===0},isCreditCard:function(a,b){if(/\d+/.test(a)===!1)return!1;if("undefined"==typeof b)b="default";else if(b instanceof Array){var c,d=b.length;for(c=0;d>c;c++)if(this.isCreditCard(a,b[c]))return!0;return!1}if(b=b.toLowerCase(),"undefined"==typeof this._creditCardSpecs[b])return!1;var e=a.length+"";return-1===this._creditCardSpecs[b].length.split(",").indexOf(e)?!1:this._creditCardSpecs[b].prefix.test(a)?this._creditCardSpecs[b].luhn===!1?!0:this._luhn(a):!1},getEANCheckDigit:function(a){var b=0,c,d;for(a=String(a);a.length<12;)a="00000"+a;for(c=a.length,d=c-1;d>=0;d--)b+=(d%2*2+1)*Number(a.charAt(d));return 10-b%10},isEAN:function(b,c){switch(void 0===c&&(c="ean-13"),c){case"ean-13":if(13!==b.length)return!1;break;case"ean-8":if(8!==b.length)return!1;break;default:return!1}var d=b.substr(0,b.length-1),e=b.charAt(b.length-1),f=a.getEANCheckDigit(d);return String(f)===e}};return a});
/**
 * Auxiliar utilities for UI Modules
 * @module Ink.UI.Common_1
 * @version 1
 */

 
Ink.createModule('Ink.UI.Common', '1', ['Ink.Dom.Element_1', 'Ink.Net.Ajax_1','Ink.Dom.Css_1','Ink.Dom.Selector_1','Ink.Util.Url_1'], function(InkElement, Ajax,Css,Selector,Url) {

    'use strict';

    var nothing = {} /* a marker, for reference comparison. */;

    var keys = Object.keys || function (obj) {
        var ret = [];
        for (var k in obj) if (obj.hasOwnProperty(k)) {
            ret.push(k);
        }
        return ret;
    };

    var es6WeakMapSupport = 'WeakMap' in window;
    var instances = es6WeakMapSupport ? new WeakMap() : null;
    // Old Registry
    var _reg = [];
    var domRegistry = {
        get: function get(el) {
            return es6WeakMapSupport ?
                instances.get(el) :
                _reg[el.getAttribute('__InkInstance')];
        },
        set: function set(el, thing) {
            if (es6WeakMapSupport) {
                instances.set(el, thing);
            } else {
                el.setAttribute('__InkInstance', _reg.push(thing) - 1);
            }
        }
    };

    /**
     * @namespace Ink.UI.Common_1
     */

    var Common = {

        /**
         * Supported Ink Layouts
         *
         * @property Layouts
         * @type Object
         * @readOnly
         */
        Layouts: {
            TINY: 'tiny',
            SMALL:  'small',
            MEDIUM: 'medium',
            LARGE:  'large',
            XLARGE: 'xlarge'
        },

        /**
         * Checks if an item is a valid DOM Element.
         *
         * @method isDOMElement
         * @static
         * @param   {Mixed}     o   The object to be checked.
         * @return  {Boolean}       True if it's a valid DOM Element.
         * @example
         *     var el = Ink.s('#element');
         *     if( Ink.UI.Common.isDOMElement( el ) === true ){
         *         // It is a DOM Element.
         *     } else {
         *         // It is NOT a DOM Element.
         *     }
         */
        isDOMElement: InkElement.isDOMElement,

        /**
         * Checks if an item is a valid integer.
         *
         * @method isInteger
         * @static
         * @param {Mixed} n     The value to be checked.
         * @return {Boolean}    True if it's a valid integer.
         * @example
         *     var value = 1;
         *     if( Ink.UI.Common.isInteger( value ) === true ){
         *         // It is an integer.
         *     } else {
         *         // It is NOT an integer.
         *     }
         */
        isInteger: function(n) {
            return (typeof n === 'number' && n % 1 === 0);
        },

        /**
         * Gets a DOM Element. 
         *
         * @method elOrSelector
         * @static
         * @param  {Element|String}         elOrSelector    DOM Element or CSS Selector
         * @param  {String}                 fieldName       The name of the field. Commonly used for debugging.
         * @return {Element} Returns the Element passed or the first result of the CSS Selector. Otherwise it throws an exception.
         * @example
         *     // In case there are several .myInput, it will retrieve the first found
         *     var el = Ink.UI.Common.elOrSelector('.myInput','My Input');
         */
        elOrSelector: function(elOrSelector, fieldName) {
            if (!Common.isDOMElement(elOrSelector)) {
                var t = Selector.select(elOrSelector);
                if (t.length === 0) {
                    Ink.warn(fieldName + ' must either be a DOM Element or a selector expression!\nThe script element must also be after the DOM Element itself.');
                    return null;
                }
                return t[0];
            }
            return elOrSelector;
        },

        /**
         * Like `elOrSelector` but returns an array of elements.
         *
         * @method elsOrSelector
         *
         * @static
         * @param  {Element|Array|String} elsOrSelector DOM Element, array of DOM Elements, or CSS Selector
         * @param  {String}               [fieldName]     The name of the field. Used for the error shown when no elements are found.
         * @param {Boolean} required If this is true, throw an error instead of returning an empty array.
         * @return {Array} The selected Elements, or the given Elements
         * @example
         *     var elements = Ink.UI.Common.elsOrSelector('input.my-inputs', 'My Input');
         */
        elsOrSelector: function(elsOrSelector, fieldName, required) {
            var ret;
            if (typeof elsOrSelector === 'string') {
                ret = Selector.select(elsOrSelector);
            } else if (Common.isDOMElement(elsOrSelector)) {
                ret = [elsOrSelector];
            } else if (elsOrSelector && typeof elsOrSelector === 'object' && typeof elsOrSelector.length === 'number') {
                ret = elsOrSelector;
            }

            if (ret && ret.length) {
                return ret;
            } else {
                if (required) {
                    throw new TypeError(fieldName + ' must either be a DOM Element, an Array of elements, or a selector expression!\nThe script element must also be after the DOM Element itself.');
                } else {
                    return [];
                }
            }
        },

        /**
         * Gets options an object and element's metadata.
         *
         * The element's data attributes take precedence. Values from the element's data-atrributes are coerced into the required type.
         *
         * @method options
         *
         * @param {Object}  [fieldId]   Name to be used in error reports.
         * @param {Object}  defaults    Object with the options' types and defaults.
         * @param {Object}  overrides   Options to override the defaults. Usually passed when instantiating an UI module.
         * @param {Element} [element]   Element with data-attributes
         * @return {Object} An object containing all the option values.
         *
         * @example
         *
         *      this._options = Ink.UI.Common.options('MyComponent', {
         *          'anobject': ['Object', null],  // Defaults to null
         *          'target': ['Element', null],
         *          'stuff': ['Number', 0.1],
         *          'stuff2': ['Integer', 0],
         *          'doKickFlip': ['Boolean', false],
         *          'targets': ['Elements'], // Required option since no default was given
         *          'onClick': ['Function', null]
         *      }, options || {}, elm)
         *
         * @example
         *
         * ### Note about booleans
         *
         * Here is how options are read from the markup
         * data-attributes, for several values`data-a-boolean`.
         *
         * Options considered true:
         *
         *   - `data-a-boolean="true"`
         *   - (Every other value which is not on the list below.)
         * 
         * Options considered false:
         *
         *   - `data-a-boolean="false"`
         *   - `data-a-boolean=""`
         *   - `data-a-boolean`
         *
         * Options which go to default:
         *
         *   - (no attribute). When `data-a-boolean` is ommitted, the
         *   option is not considered true nor false, and as such
         *   defaults to what is in the `defaults` argument.
         *
         **/
        options: function (fieldId, defaults, overrides, element) {
            // TODO Change Common.options's signature? the below looks better, more manageable
            // var options = Common.options({
            //     element: this._element,
            //     modName: constructor._name,
            //     options: constructor._optionDefinition,
            //     defaults: constructor._globalDefaults
            // });

            if (typeof fieldId !== 'string') {
                element = overrides;
                overrides = defaults;
                defaults = fieldId;
                fieldId = '';
            }
            overrides = overrides || {};
            var out = {};
            var dataAttrs = element ? InkElement.data(element) : {};
            var fromDataAttrs;
            var type;
            var lType;
            var defaultVal;

            var invalidStr = function (str) {
                if (fieldId) { str = fieldId + ': "' + ('' + str).replace(/"/, '\\"') + '"'; }
                return str;
            };

            var quote = function (str) {
                return '"' + ('' + str).replace(/"/, '\\"') + '"';
            };

            var invalidThrow = function (str) {
                throw new Error(invalidStr(str));
            };

            var invalid = function (str) {
                Ink.error(invalidStr(str) + '. Ignoring option.');
            };

            function optionValue(key) {
                type = defaults[key][0];
                lType = type.toLowerCase();
                defaultVal = defaults[key].length === 2 ? defaults[key][1] : nothing;

                if (!type) {
                    invalidThrow('Ink.UI.Common.options: Always specify a type!');
                }
                if (!(lType in Common._coerce_funcs)) {
                    invalidThrow('Ink.UI.Common.options: ' + defaults[key][0] + ' is not a valid type. Use one of ' + keys(Common._coerce_funcs).join(', '));

                }
                if (!defaults[key].length || defaults[key].length > 2) {
                    invalidThrow('the "defaults" argument must be an object mapping option names to [typestring, optional] arrays.');
                }

                if (key in dataAttrs) {
                    fromDataAttrs = Common._coerce_from_string(lType, dataAttrs[key], key, fieldId);
                    // (above can return `nothing`)
                } else {
                    fromDataAttrs = nothing;
                }

                if (fromDataAttrs !== nothing) {
                    if (!Common._options_validate(fromDataAttrs, lType)) {
                        invalid('(' + key + ' option) Invalid ' + lType + ' ' + quote(fromDataAttrs));
                        return defaultVal;
                    } else {
                        return fromDataAttrs;
                    }
                } else if (key in overrides) {
                    return overrides[key];
                } else if (defaultVal !== nothing) {
                    return defaultVal;
                } else {
                    invalidThrow('Option ' + key + ' is required!');
                }
            }

            for (var key in defaults) {
                if (defaults.hasOwnProperty(key)) {
                    out[key] = optionValue(key);
                }
            }

            return out;
        },

        _coerce_from_string: function (type, val, paramName, fieldId) {
            if (type in Common._coerce_funcs) {
                return Common._coerce_funcs[type](val, paramName, fieldId);
            } else {
                return val;
            }
        },

        _options_validate: function (val, type) {
            if (type in Common._options_validate_types) {
                return Common._options_validate_types[type].call(Common, val);
            } else {
                // 'object' options cannot be passed through data-attributes.
                // Json you say? Not any good to embed in HTML.
                return false;
            }
        },

        _coerce_funcs: (function () {
            var ret = {
                element: function (val) {
                    return Common.elOrSelector(val, '');
                },
                elements: function (val) {
                    return Common.elsOrSelector(val, '', false /*not required, so don't throw an exception now*/);
                },
                object: function (val) { return val; },
                number: function (val) { return parseFloat(val); },
                'boolean': function (val) {
                    return !(val === 'false' || val === '' || val === null);
                },
                string: function (val) { return val; },
                'function': function (val, paramName, fieldId) {
                    Ink.error(fieldId + ': You cannot specify the option "' + paramName + '" through data-attributes because it\'s a function');
                    return nothing;
                }
            };
            ret['float'] = ret.integer = ret.number;
            return ret;
        }()),

        _options_validate_types: (function () {
            var types = {
                string: function (val) {
                    return typeof val === 'string';
                },
                number: function (val) {
                    return typeof val === 'number' && !isNaN(val) && isFinite(val);
                },
                integer: function (val) {
                    return val === Math.round(val);
                },
                element: function (val) {
                    return Common.isDOMElement(val);
                },
                elements: function (val) {
                    return val && typeof val === 'object' && typeof val.length === 'number' && val.length;
                },
                'boolean': function (val) {
                    return typeof val === 'boolean';
                },
                object: function () { return true; }
            };
            types['float'] = types.number;
            return types;
        }()),

        /**
         * Deep copy (clone) an object.
         * Note: The object cannot have referece loops.
         *
         * @method clone
         * @static
         * @deprecated
         * @param  {Object} o The object to be cloned/copied.
         * @return {Object} Returns the result of the clone/copy.
         * @example
         *     var originalObj = {
         *         key1: 'value1',
         *         key2: 'value2',
         *         key3: 'value3'
         *     };
         *     var cloneObj = Ink.UI.Common.clone( originalObj );
         */
        clone: function(o) {
            try {
                return JSON.parse( JSON.stringify(o) );
            } catch (ex) {
                throw new Error('Given object cannot have loops!');
            }
        },


        /**
         * Gets an element's one-base index relative to its parent.
         *
         * Deprecated. Use Ink.Dom.Element.parentIndexOf instead.
         *
         * @method childIndex
         * @deprecated
         * @static
         * @param  {Element}     childEl     Valid DOM Element.
         * @return {Number}                     Numerical position of an element relatively to its parent.
         * @example
         *     <!-- Imagine the following HTML: -->
         *     <ul>
         *       <li>One</li>
         *       <li>Two</li>
         *       <li id="test">Three</li>
         *       <li>Four</li>
         *     </ul>
         *
         *     <script>
         *         var testLi = Ink.s('#test');
         *         Ink.UI.Common.childIndex( testLi ); // Returned value: 3
         *     </script>
         */
        childIndex: InkElement.parentIndexOf,

        /**
         * AJAX JSON request shortcut method
         * It provides a more convenient way to do an AJAX request and expect a JSON response.It also offers a callback option, as third parameter, for better async handling.
         *
         * @method ajaxJSON
         * @static
         * @async
         * @param   {String}    endpoint    Valid URL to be used as target by the request.
         * @param   {Object}    params      This field is used in the thrown Exception to identify the parameter.
         * @param   {Function}  cb          Callback for the request.
         * @return {void}
         * @public
         * @example
         *     // In case there are several .myInput, it will retrieve the first found
         *     var el = Ink.UI.Common.elOrSelector('.myInput','My Input');
         */
        ajaxJSON: function(endpoint, params, cb) {
            new Ajax(
                endpoint,
                {
                    evalJS:         'force',
                    method:         'POST',
                    parameters:     params,

                    onSuccess:  function( r) {
                        try {
                            r = r.responseJSON;
                            if (r.status !== 'ok') {
                                throw 'server error: ' + r.message;
                            }
                            cb(null, r);
                        } catch (ex) {
                            cb(ex);
                        }
                    },

                    onFailure: function() {
                        cb('communication failure');
                    }
                }
            );
        },


        /**
         * Gets the current Ink layout.
         *
         * @method currentLayout
         * @static
         * @return {String} A string representation of the current layout name.
         * @public
         * @example
         *      var inkLayout = Ink.UI.Common.currentLayout();
         *      if (inkLayout === 'small') {
         *          // ...
         *      }
         */
        currentLayout: function() {
            var i, f, k, v, el, detectorEl = Selector.select('#ink-layout-detector')[0];
            if (!detectorEl) {
                detectorEl = document.createElement('div');
                detectorEl.id = 'ink-layout-detector';
                for (k in Common.Layouts) {
                    if (Common.Layouts.hasOwnProperty(k)) {
                        v = Common.Layouts[k];
                        el = document.createElement('div');
                        el.className = 'show-' + v + ' hide-all';
                        el.setAttribute('data-ink-layout', v);
                        detectorEl.appendChild(el);
                    }
                }
                document.body.appendChild(detectorEl);
            }

            for (i = 0, f = detectorEl.children.length; i < f; ++i) {
                el = detectorEl.children[i];
                if (Css.getStyle(el, 'display') === 'block') {
                    return el.getAttribute('data-ink-layout');
                }
            }

            return 'large';
        },


        /**
         * Sets the location's hash (window.location.hash).
         *
         * @method hashSet
         * @static
         * @param  {Object} o Object with the info to be placed in the location's hash.
         * @return {void}
         * @example
         *     // It will set the location's hash like: <url>#key1=value1&key2=value2&key3=value3
         *     Ink.UI.Common.hashSet({
         *         key1: 'value1',
         *         key2: 'value2',
         *         key3: 'value3'
         *     });
         */
        hashSet: function(o) {
            if (typeof o !== 'object') { throw new TypeError('o should be an object!'); }
            var hashParams = Url.getAnchorString();
            hashParams = Ink.extendObj(hashParams, o);
            window.location.hash = Url.genQueryString('', hashParams).substring(1);
        },

        /**
         * Removes children nodes from a given object.
         * This method was initially created to help solve a problem in Internet Explorer(s) that occurred when trying to set the innerHTML of some specific elements like 'table'.
         *
         * @method cleanChildren
         * @static
         * @param  {Element} parentEl Valid DOM Element
         * @return {void}
         * @public
         * @example
         *     <!-- Imagine the following HTML: -->
         *     <ul id="myUl">
         *       <li>One</li>
         *       <li>Two</li>
         *       <li>Three</li>
         *       <li>Four</li>
         *     </ul>
         *
         *     <script>
         *     Ink.UI.Common.cleanChildren( Ink.s( '#myUl' ) );
         *     </script>
         *
         *     <!-- After running it, the HTML changes to: -->
         *     <ul id="myUl"></ul>
         */
        cleanChildren: function(parentEl) {
            if( !Common.isDOMElement(parentEl) ){
                throw new Error('Please provide a valid DOMElement');
            }
            InkElement.clear(parentEl);
        },

        /**
         * Stores the id and/or classes of an element in an object.
         *
         * @method storeIdAndClasses
         * @static
         * @param  {Element}    fromEl    Valid DOM Element to get the id and classes from.
         * @param  {Object}     inObj     Object where the id and classes will be saved.
         * @return {void}
         * @public
         * @example
         *     <div id="myDiv" class="aClass"></div>
         *
         *     <script>
         *         var storageObj = {};
         *         Ink.UI.Common.storeIdAndClasses( Ink.s('#myDiv'), storageObj );
         *         // storageObj changes to:
         *         {
         *           _id: 'myDiv',
         *           _classes: 'aClass'
         *         }
         *     </script>
         */
        storeIdAndClasses: function(fromEl, inObj) {
            if( !Common.isDOMElement(fromEl) ){
                throw 'Please provide a valid Element as first parameter';
            }

            var id = fromEl.id;
            if (id) {
                inObj._id = id;
            }

            var classes = fromEl.className;
            if (classes) {
                inObj._classes = classes;
            }
        },

        /**
         * Sets the id and className properties of an element based 
         *
         * @method restoreIdAndClasses
         * @static
         * @param  {Element}    toEl    Valid DOM Element to set the id and classes on.
         * @param  {Object}     inObj   Object where the id and classes to be set are. This method uses the same format as the one given in `storeIdAndClasses`
         * @return {void}
         * @public
         * @example
         *     <div></div>
         *
         *     <script>
         *         var storageObj = {
         *           _id: 'myDiv',
         *           _classes: 'aClass'
         *         };
         *
         *         Ink.UI.Common.storeIdAndClasses( Ink.s('div'), storageObj );
         *     </script>
         *
         *     <!-- After the code runs the div element changes to: -->
         *     <div id="myDiv" class="aClass"></div>
         */
        restoreIdAndClasses: function(toEl, inObj) {

            if( !Common.isDOMElement(toEl) ){
                throw 'Please provide a valid Element as first parameter';
            }

            if (inObj._id && toEl.id !== inObj._id) {
                toEl.id = inObj._id;
            }

            if (inObj._classes && toEl.className.indexOf(inObj._classes) === -1) {
                if (toEl.className) { toEl.className += ' ' + inObj._classes; }
                else {                toEl.className  =       inObj._classes; }
            }

            if (inObj._instanceId && !toEl.getAttribute('data-instance')) {
                toEl.setAttribute('data-instance', inObj._instanceId);
            }
        },

        _warnDoubleInstantiation: function (elm, newInstance) {
            var instances = Common.getInstance(elm);

            if (getName(newInstance) === '') { return; }
            if (!instances) { return; }

            var nameWithoutVersion = getName(newInstance);

            if (!nameWithoutVersion) { return; }

            for (var i = 0, len = instances.length; i < len; i++) {
                if (nameWithoutVersion === getName(instances[i])) {
                    // Yes, I am using + to concatenate and , to split
                    // arguments.
                    //
                    // Elements can't be concatenated with strings, but if
                    // they are passed in an argument, modern debuggers will
                    // pretty-print them and make it easy to find them in the
                    // element inspector.
                    //
                    // On the other hand, if strings are passed as different
                    // arguments, they get pretty printed. And the pretty
                    // print of a string has quotes around it.
                    //
                    // If some day people find out that strings are not
                    // just text and they start preserving contextual
                    // information, then by all means change this to a
                    // regular concatenation.
                    //
                    // But they won't. So don't change this.
                    Ink.warn('Creating more than one ' + nameWithoutVersion + 'for the same element.',
                            '(Was creating a ' + nameWithoutVersion + ' on:', elm, ').');
                    return false;
                }
            }

            function getName(thing) {
                return ((thing.constructor && (thing.constructor._name)) ||
                    thing._name ||
                    '').replace(/_.*?$/, '');
            }

            return true;
        },

        /**
         * Saves an object (which should inherit BaseUIComponent) in the registry, associated with an element. You can retrieve it later by calling getInstance.
         *
         * This won't allow two instances of the same class to be created on a single element. It will fail and print a warning to the console if you try to do it. That is a common error when using Ink.
         *
         * @method registerInstance
         * @static
         * @param  {Object}  inst Object that holds the instance.
         * @param  {Element} el   Element to associate with `inst`.
         * @return {Boolean} `true` if we could create the instance, `false` otherwise.
         */
        registerInstance: function(inst, el) {
            if (!inst) { return; }

            if (!el) { el = inst._element; }

            if (!Common.isDOMElement(el)) { throw new TypeError('Ink.UI.Common.registerInstance: The element passed in is not a DOM element!'); }

            // [todo] this belongs in the BaseUIComponent's initialization
            if (Common._warnDoubleInstantiation(el, inst) === false) {
                return false;
            }

            var instances = domRegistry.get(el);

            if (!instances) {
                instances = [];
                domRegistry.set(el, instances);
            }

            instances.push(inst);

            return true;
        },

        /**
         * Unregisters (removes from the registry) a UI component instance from whatever element it's on.
         *
         * @method unregisterInstance
         * @static
         * @param  {String}     inst       Instance to be unregistered.
         * @return {void}
         * @public
         */
        unregisterInstance: function(inst) {
            if (!inst || !inst._element) { return; }
            var instances = domRegistry.get(inst._element);
            for (var i = 0, len = instances.length; i < len; i++) {
                if (instances[i] === inst) {
                    instances.splice(i, 1);
                }
            }
        },

        /**
         * Gets an UI component instance from an element.
         *
         * This function is already available in the UI components' classes themselves. You can call Modal.getInstance() and retrieve a modal.
         *
         * @method getInstance
         * @static
         * @param  {String|Element} el Element from which we want the instances. A selector is okay.
         * @param {BaseUIComponent} [UIComponent] If you pass an Ink UI component class (Like Ink.UI.Modal or Ink.UI.Carousel), this won't return an array of all instances associated with the element. Instead it will return only the object which is an instance of that class.
         * @return  {Object|Array}               Returns an array containing all the instances in that element.
         * @public
         */
        getInstance: function(el, UIComponent) {
            var givenEl = el;  // So we can warn it later.

            el = Common.elOrSelector(el);

            if (!Common.isDOMElement(el)) {
                Ink.warn('Ink.UI.Common: getInstance called on non-element (' + givenEl + ')');
                return [];
            }

            var instances = domRegistry.get(el);

            if (!instances) {
                instances = [];
            }

            if (typeof UIComponent !== 'function') {
                return instances;
            }

            for (var i = 0, len = instances.length; i < len; i++) {
                if (instances[i] instanceof UIComponent) {
                    return instances[i];
                }
            }

            return null;
        },

        /**
         * Gets an instance based on a selector.
         *
         * @method getInstanceFromSelector
         * @static
         * @param  {String}             selector    CSS selector to get the instances from. This function will only use the *first* element.
         * @return  {Object|Array}               Returns an array of the instances in the selected element.
         * @public
         */
        getInstanceFromSelector: function(selector) {
            return Common.getInstance(selector);
        },

        /**
         * Gets all the instance ids
         *
         * @method getInstanceIds
         * @static
         * @return  {Array} Collection of instance ids
         */
        getInstanceIds: function() {
            if( _reg.length > 0 ) return _reg;
            var res = [];
            for (var id in instances) {
                if (instances.hasOwnProperty(id)) {
                    res.push( id );
                }
            }
            return res;
        },

        /**
         * Gets all the instances
         *
         * @method getInstances
         * @static
         * @return  {Array}     Collection of existing instances.
         * @public
         */
        getInstances: function() {
            if( _reg.length > 0 ) return _reg;
            var res = [];
            for (var id in instances) {
                if (instances.hasOwnProperty(id)) {
                    res.push( instances[id] );
                }
            }
            return res;
        },

        /**
         * Boilerplate method to destroy a component.
         * Components should copy this method as its destroy method and modify it.
         *
         * @method destroyComponent
         * @return {void}
         * @public
         * @static
         */
        destroyComponent: function() {
            Common.unregisterInstance(this);
            this._element.parentNode.removeChild(this._element);
        }
    };




    /**
     * Ink UI Base Class
     **/

    function warnStub() {
        /* jshint validthis: true */
        if (!this || this === window || typeof this.constructor !== 'function') { return; }
        Ink.warn('You called a method on an incorrectly instantiated ' + this.constructor._name + ' component. Check the warnings above to see what went wrong.');
    }

    function stub(prototype, obj) {
        for (var k in prototype) if (prototype.hasOwnProperty(k)) {
            if (k === 'constructor') { continue; }
            if (typeof obj[k] === 'function') {
                obj[k] = warnStub;
            }
        }
    }

    /**
     * Ink UI Base Class
     *
     * You don't use this class directly, or inherit from it directly.
     *
     * See createUIComponent() (in this module) for how to create a UI component and inherit from this. It's not plain old JS inheritance, for several reasons.
     *
     * @class Ink.UI.Common.BaseUIComponent
     * @constructor
     *
     * @param {Element|String} element Element to associate this UI component with. It's the element you can get later using `comp.getElement()`
     * @param {Object} [options] Options to pass to the component. You should see your specific UI component for this information.
     * @public
     **/
    function BaseUIComponent(element, options) {
        var constructor = this.constructor;
        var _name = constructor._name;

        if (!this || this === window) {
            throw new Error('Use "new InkComponent()" instead of "InkComponent()"');
        }

        if (this && !(this instanceof BaseUIComponent)) {
            throw new Error('You forgot to call Ink.UI.Common.createUIComponent() on this module!');
        }

        if (!element && !constructor._componentOptions.elementIsOptional) {
            Ink.error(new Error(_name + ': You need to pass an element or a selector as the first argument to "new ' + _name + '()"'));
            return;
        } else {
            this._element = Common.elsOrSelector(element,
                _name + ': An element with the selector "' + element + '" was not found!')[0];
        }

        if (!this._element && !constructor._componentOptions.elementIsOptional) {
            isValidInstance = false;
            Ink.error(new Error(element + ' does not match an element on the page. You need to pass a valid selector to "new ' + _name + '".'));
        }

        this._options = Common.options(_name, constructor._optionDefinition, options, this._element);

        var isValidInstance = BaseUIComponent._validateInstance(this) === true;

        if (isValidInstance && typeof this._init === 'function') {
            try {
                this._init.apply(this, arguments);
            } catch(e) {
                isValidInstance = false;
                Ink.error(e);
            }
        }

        if (!isValidInstance) {
            BaseUIComponent._stubInstance(this, constructor, _name);
        } else if (this._element) {
            Common.registerInstance(this);
        }
    }

    /**
     * Calls the `instance`'s _validate() method so it can validate itself.
     *
     * Returns false if the method exists, was called, but no Error was returned or thrown.
     *
     * @method _validateInstance
     * @private
     */
    BaseUIComponent._validateInstance = function (instance) {
        var err;

        if (typeof instance._validate !== 'function') { return true; }

        try {
            err = instance._validate();
        } catch (e) {
            err = e;
        }

        if (err instanceof Error) {
            instance._validationError = err;
            return false;
        }

        return true;
    };


    /**
     * Replaces every method in the instance with stub functions which just call Ink.warn().
     *
     * This avoids breaking the page when there are errors.
     *
     * @method _stubInstance
     * @param instance
     * @param constructor
     * @param name
     * @private
     */
    BaseUIComponent._stubInstance = function (instance, constructor, name) {
        stub(constructor.prototype, instance);
        stub(BaseUIComponent.prototype, instance);
        Ink.warn(name + ' was not correctly created. ' + (instance._validationError || ''));
    };

    // TODO BaseUIComponent.setGlobalOptions = function () {}
    // TODO BaseUIComponent.createMany = function (selector) {}
    BaseUIComponent.getInstance = function (elOrSelector) {
        elOrSelector = Common.elOrSelector(elOrSelector);
        return Common.getInstance(elOrSelector, this /* get instance by constructor */);
    };

    Ink.extendObj(BaseUIComponent.prototype, {
        /**
         * Get an UI component's option's value.
         *
         * @method getOption
         * @param {String} name The option's name.
         * @return {Mixed} The option value, or undefined if nothing is found.
         *
         * @example
         *
         * var myUIComponent = new Modal('#element', { trigger: '#trigger' }); // or anything else inheriting BaseUIComponent
         * myUIComponent.getOption('trigger');  // -> The trigger element (not the selector string, mind you)
         *
         **/
        getOption: function (name) {
            if (this.constructor && !(name in this.constructor._optionDefinition)) {
                Ink.error('"' + name + '" is not an option for ' + this.constructor._name);
                return undefined;
            }

            return this._options[name];
        },

        /**
         * Sets an option's value.
         *
         * @method getOption
         * @param {String} name Name of the option.
         * @param {Mixed} value New option value.
         * @return {void}
         * @public
         *
         * @example
         *
         * var myUIComponent = new Modal(...);
         * myUIComponent.setOption('trigger', '#some-element');
         **/
        setOption: function (name, value) {
            if (this.constructor && !(name in this.constructor._optionDefinition)) {
                Ink.error('"' + name + ' is not an option for ' + this.constructor._name);
                return;
            }

            this._options[name] = value;
        },

        /**
         * Get the element associated with an UI component (IE the one you used in the constructor)
         *
         * @method getElement
         * @return {Element} The component's element.
         *
         * @example
         * var myUIComponent = new Modal('#element'); // or anything else inheriting BaseUIComponent
         * myUIComponent.getElement();  // -> The '#element' (not the selector string, mind you).
         *
         **/
        getElement: function () {
            return this._element;
        }
    });

    Common.BaseUIComponent = BaseUIComponent;

    /**
     * Take a constructor, and make it an Ink UI component.
     *
     * Makes it inherit BaseUIComponent, makes sure it has the basic properties Ink.UI.Common needs it to have, adds the necessary static methods, sets its options, etc.
     *
     * @method createUIComponent
     * @param {Function} theConstructor UI component constructor. It should have an _init function in its prototype, an _optionDefinition object, and a _name property indicating its name.
     * @param {Object}  [options] Options hash, containing:
     * @param {Boolean} [options.elementIsOptional=false] Whether the element argument is optional (For example, when the component might work on existing markup or create its own).
     * @return {void}
     * @public
     **/
    Common.createUIComponent = function createUIComponent(theConstructor, options) {
        theConstructor._componentOptions = options || {};

        function assert(test, msg) {
            if (!test) {
                throw new Error('Ink.UI_1.createUIComponent: ' + msg);
            }
        }

        function assertProp(prop, propType, message) {
            var propVal = theConstructor[prop];
            // Check that the property was passed
            assert(typeof propVal !== 'undefined',
                theConstructor + ' doesn\'t have a "' + prop + '" property. ' + message);
            // Check that its type is correct
            assert(propType && typeof propVal === propType,
                'typeof ' + theConstructor + '.' + prop + ' is not "' + propType + '". ' + message);
        }

        assert(typeof theConstructor === 'function',
            'constructor argument is not a function!');

        assertProp('_name', 'string', 'This property is used for error ' +
            'messages. Set it to the full module path and version (Ink.My.Module_1).');
        assertProp('_optionDefinition', 'object', 'This property contains the ' +
            'option names, types and defaults. See Ink.UI.Common.options() for reference.');

        // Extend the instance methods and props
        var _oldProto = theConstructor.prototype;

        if (typeof Object.create === 'function') {
            theConstructor.prototype = Object.create(BaseUIComponent.prototype);
        } else {
            theConstructor.prototype = (function hideF() {
                function F() {}
                F.prototype = BaseUIComponent.prototype;
                return new F();
            }());
        }

        Ink.extendObj(theConstructor.prototype, _oldProto);
        theConstructor.prototype.constructor = theConstructor;
        // Extend static methods
        Ink.extendObj(theConstructor, BaseUIComponent);
    };

    return Common;

});
/**
 * Highlight elements as you scroll
 * @module Ink.UI.Spy_1
 * @version 1
 */

Ink.createModule('Ink.UI.Spy', '1', ['Ink.UI.Common_1','Ink.Dom.Event_1','Ink.Dom.Css_1','Ink.Dom.Element_1','Ink.Dom.Selector_1'], function(Common, Event, Css, Element, Selector ) {
    'use strict';

    // Maps a spy target (EG a menu with links inside) to spied instances.
    var spyTargets = [
        // [target, [spied, spied, spied...], { margin }], ...
    ];

    function targetIndex(target) {
        for (var i = 0, len = spyTargets.length; i < len; i++) {
            if (spyTargets[i][0] === target) {
                return i;
            }
        }
        return null;
    }

    function addSpied(spied, target, options) {
        var index = targetIndex(target);

        if (index === null) {
            spyTargets.push([target, [spied], options]);
        } else {
            spyTargets[index][1].push(spied);
        }
    }

    var observingOnScroll = false;
    function observeOnScroll() {
        if (!observingOnScroll) {
            observingOnScroll = true;
            Event.observe(document, 'scroll', Event.throttle(onScroll, 300));
        }
    }

    function onScroll() {
        for (var i = 0, len = spyTargets.length; i < len; i++) {
            onScrollForTarget(spyTargets[i][0], spyTargets[i][1], spyTargets[i][2]);
        }
    }

    function onScrollForTarget(target, spied, options) {
        var activeEl = findActiveElement(spied, options);

        // This selector finds li's to deactivate
        var toDeactivate = Selector.select('li.active', target);
        for (var i = 0, total = toDeactivate.length; i < total; i++) {
            Css.removeClassName(toDeactivate[i], 'active');
        }

        if (activeEl === null) {
            return;
        }

        // The link which should be activated has a "href" ending with "#" + name or id of the element
        var menuLinkSelector = 'a[href$="#' + (activeEl.name || activeEl.id) + '"]';

        var toActivate = Selector.select(menuLinkSelector, target);
        for (i = 0, total = toActivate.length; i < total; i++) {
            Css.addClassName(Element.findUpwardsByTag(toActivate[i], 'li'), 'active');
        }
    }

    function findActiveElement(spied, options) {
        /* 
         * Find the element above the top of the screen, but closest to it.
         *          _____ 
         *         |_____| element 1  (active element)
         *
         *      ------------------------ 
         *     |    _____               |
         *     |   |     |  element 2   |
         *     |   |     |              |
         *     |   |_____|              |
         *      ------- Viewport ------- 
         */

        // Remember that getBoundingClientRect returns coordinates
        // relative to the top left corner of the screen.
        //
        // So checking if it's < 0 is used to tell if
        // the element is above the top of the screen.
        var closest = -Infinity;
        var closestIndex;
        var top;
        for( var i = 0, total = spied.length; i < total; i++ ){
            top = spied[i].getBoundingClientRect().top;
            if (options.margin) {
                top -= options.margin;
            }
            if (top <= 0 && top > closest) {
                closest = top;
                closestIndex = i;
            }
        }
        if (closestIndex === undefined) {
            return null;
        } else {
            return spied[closestIndex];
        }
    }

    /**
     * Spy is an UI component which tells the user which section is currently visible.
     * Spy can be used to highlight a menu item for the section which is visible to the user.
     * You need two things: A menu element (which contains your links inside `li` tags), and an element containing your section's content.
     * The links must be inside `li` tags. These will get the 'active' class, to signal which item is currently visible. In your CSS you need to add styling for this class.
     * To use Ink.UI.Spy for more than one section, loop through your sections (as you see in the sample below), or just load `autoload.js` and set add the `data-spy="true"` attribute to your sections.
     * The currently visible element's corresponding link in the menu gets the 'visible' class added to it.
     *
     * @class Ink.UI.Spy
     * @constructor
     * @version 1
     * @param {String|Element}    selector              The spied element
     * @param {Object}            [options] Options
     * @param {Element|String}    options.target    Target menu where the spy will highlight the right option.
     * @param {Number}            [options.margin=0] A margin from the top of the screen. Use this if you have a `position:fixed` top bar on your site.
     *
     * @sample Ink_UI_Spy_1.html
     */
    function Spy(){
        Common.BaseUIComponent.apply(this, arguments);
    }

    Spy._name = 'Spy_1';

    Spy._optionDefinition = {
        target: ['Element', undefined],
        margin: ['Number', 0]
    };

    Spy.prototype = {
        /**
         * Init function called by the constructor
         * 
         * @method _init
         * @private
         */
        _init: function() {
            addSpied(this._element, this._options.target, this._options);
            observeOnScroll();
            onScroll();
        }
    };

    Common.createUIComponent(Spy);

    return Spy;

});
/**
 * Stick elements to the viewport
 * @module Ink.UI.Sticky_1
 * @version 1
 */

Ink.createModule('Ink.UI.Sticky', '1', ['Ink.UI.Common_1','Ink.Dom.Event_1','Ink.Dom.Element_1','Ink.Dom.Css_1'], function(Common, Event, Element, Css) {
    'use strict';

    /**
     * Ink.UI.Sticky makes an element "stick" to the screen and stay in the same place as the user scrolls. To use it, just select an element as you create the Sticky. As you scroll past it, it will stick to the top of the screen.
     * The `activateInLayouts` option controls in what layouts this behaviour happens. By default, it is disabled for the `small` and `tiny` layouts. Pass a comma-separated string to choose just the layouts you need. You can use the `offsetTop` option if you want it to keep some distance from the top of the screen. To avoid it going under the footer of your page, pass a selector to your footer as the `bottomElement` option.
     *
     * @class Ink.UI.Sticky
     * @constructor
     * @version 1
     * @param {String|Element}      selector                    Element or selector
     * @param {Object}              [options] Options           Options object.
     * @param {Number}              [options.offsetBottom]      Number of pixels of distance from the bottomElement. Defaults to 0.
     * @param {Number}              [options.offsetTop]         Number of pixels of distance from the topElement. Defaults to 0.
     * @param {Boolean}             [options.inlineDimensions]  Set to false to disable setting inline CSS dimensions. Use this if you want to use CSS to define your own dimensions. Defaults to true.
     * @param {Boolean}             [options.inlinePosition]    Set to false to disable setting inline CSS positions. Use this if you want to use CSS to define your own positioning. Defaults to true.
     * @param {String}              [options.wrapperClass]      CSS class for the wrapper element. Defaults to 'ink-sticky-wrapper'.
     * @param {String}              [options.stickyClass]       CSS class to stick the element to the screen. Defaults to 'ink-sticky-stuck'.
     * @param {String}              [options.topElement]        CSS Selector that specifies a top element with which the component could collide.
     * @param {String}              [options.bottomElement]     CSS Selector that specifies a bottom element with which the component could collide.
     * @param {Array|String}        [options.activateInLayouts] Layouts in which the sticky behaviour is present. Pass an array or comma-separated string. Defaults to null, meaning it's enabled in every layout.
     *
     * @sample Ink_UI_Sticky_1.html
     */
    function Sticky(){
        Common.BaseUIComponent.apply(this, arguments);
    }

    Sticky._name = 'Sticky_1';

    Sticky._optionDefinition = {
        offsetBottom: ['Integer', 0],
        offsetTop: ['Integer', 0],
        topElement: ['Element', null],
        wrapperClass: ['String', 'ink-sticky-wrapper'],
        stickyClass: ['String', 'ink-sticky-stuck'],
        inlineDimensions: ['Boolean', true],
        inlinePosition: ['Boolean', true],
        bottomElement: ['Element', null],
        activateInLayouts: ['String', null]
    };

    Sticky.prototype = {

        /**
         * Init function called by the constructor
         *
         * @method _init
         * @private
         */
        _init: function() {
            // Because String#indexOf is compatible with lt IE8 but not Array#indexOf
            if (this._options.activateInLayouts) {
                this._options.activateInLayouts = this._options.activateInLayouts.toString();
            }

            this._dims = null;  // force a recalculation of the dimensions later

            this._options.offsetTop = parseInt(this._options.offsetTop, 10) || 0;
            this._options.offsetBottom = parseInt(this._options.offsetBottom, 10) || 0;

            if (this._options.topElement) {
                this._options.topElement = Common.elOrSelector(this._options.topElement, 'Top Element');
            }
            if (this._options.bottomElement) {
                this._options.bottomElement = Common.elOrSelector(this._options.bottomElement, 'Sticky bottom Element');
            }

            this._wrapper = Element.create('div', { className: this._options.wrapperClass });
            Element.wrap(this._element, this._wrapper);

            var scrollTarget = document.addEventListener ? document : window;
            this._onScroll = Ink.bind(Event.throttle(this._onScroll, 33), this);  // Because this is called directly.
            Event.observe( scrollTarget, 'scroll', this._onScroll );
            Event.observe( window, 'resize', Ink.bindEvent(Event.throttle(this._onResize, 100), this) );
            this._onScroll();
        },

        /**
         * Returns whether the sticky is disabled in the current view
         *
         * @method isDisabledInLayout
         * @return {Boolean} Whether Sticky is disabled in this layout.
         * @private
         */
        _isDisabledInLayout: function () {
            if (!this._options.activateInLayouts) {
                return false;
            }
            var currentLayout = Common.currentLayout();
            if (!currentLayout) { return false; }
            return this._options.activateInLayouts.indexOf(currentLayout) === -1;
        },

        /**
         * Scroll handler.
         *
         * @method _onScroll
         * @private
         */
        _onScroll: function(){
            var dims = this._getDims();
            var scrollHeight = Element.scrollHeight();

            var unstick = this._isDisabledInLayout() ||
                scrollHeight <= dims.top - this._options.offsetTop ||
                (this._options.topElement && this._options.topElement.getBoundingClientRect().bottom + this._options.offsetTop > 0);

            if( unstick ) {
                // We're on top, no sticking. position:static is the "normal" position.
                this._unstick();
                return;
            }

            // If we stick it now, what will be its boundingClientRect.bottom ?
            var bottomOfSticky = this._options.offsetTop + dims.height + Element.scrollHeight();
            var maxBottomOfSticky = document.body.scrollHeight;

            if (this._options.bottomElement) {
                maxBottomOfSticky =
                    this._options.bottomElement.getBoundingClientRect().top +
                    Element.scrollHeight();
            }

            maxBottomOfSticky -= this._options.offsetBottom;

            if ( bottomOfSticky < maxBottomOfSticky ) {
                // Stick to screen!
                this._stickTo('screen');
            } else {
                // Stick to bottom
                this._stickTo('bottom');
            }
        },

        /**
         * Have the sticky stick nowhere, to the screen, or to the bottom.
         *
         * @method _stickTo
         * @private
         */
        _stickTo: function (where) {
            var style = this._element.style;
            var dims = this._getDims();

            Css.addClassName(this._element, this._options.stickyClass);
            this._wrapper.style.height = dims.height + 'px';

            this._inlineDimensions(dims.height + 'px', dims.width + 'px');

            if (this._options.inlinePosition === false) {
                return;
            }

            style.left = dims.left + 'px';

            if (where === 'screen') {
                style.bottom = null;
                style.top = this._options.offsetTop + 'px';
            } else if (where === 'bottom') {
                // Distance between bottom of sticky and bottom of document
                var bottom = this._getBottomOffset();

                // Distance between bottom of viewport and bottom of document
                var bottomOfViewport = Element.scrollHeight() + Element.viewportHeight();
                var toBottomOfDocument = Element.pageHeight() - bottomOfViewport;

                style.bottom = bottom - toBottomOfDocument + 'px';
                style.top = 'auto';
            }
        },

        /**
         * "unstick" the sticky from the screen or bottom of the document
         * @method _unstick
         * @private
         */
        _unstick: function () {
            Css.removeClassName(this._element, this._options.stickyClass);
            // deinline dimensions of our root element
            this._inlineDimensions(null, null);

            // deinline the position of our root element
            if (this._options.inlinePosition) {
                this._element.style.left = null;
                this._element.style.top = null;
                this._element.style.bottom = null;
            }

            // deinline dimensions of wrapper
            this._wrapper.style.height = null;
            this._wrapper.style.width = null;

            // Break the "getDims" cache
            this._dims = null;
        },

        /**
         * Resize handler
         *
         * @method _onResize
         * @private
         */
        _onResize: function(){
            this._dims = null;  // Blow the cache so _getDims recalculates
            this._onScroll();
        },

        /**
         * Recalculate the "dims" cache, or get it.
         *
         * The "dims" cache is to be set to null when the element is liable to have changed dimensions
         *
         * (eg: on resize)
         *
         **/
        _getDims: function () {
            if (this._dims !== null) { return this._dims; }

            var style = this._element.style;

            // We unstick the sticky so we can measure.
            var oldPosition = style.position;
            var oldWidth = style.width;

            style.position = 'static'; // [todo] this should be a class toggle
            style.width = null;

            var dimensionsInStatic = Element.outerDimensions(this._element);
            var rect = this._wrapper.getBoundingClientRect();
            this._dims = {
                height: dimensionsInStatic[1],
                width: dimensionsInStatic[0],
                left: rect.left + Element.scrollWidth(),
                top: rect.top + Element.scrollHeight()
            };

            style.position = oldPosition;
            style.width = oldWidth;

            return this._dims;
        },

        /**
         * Set style.height and style.width, but not if options.inlineDimensions === false
         *
         * @method _inlineDimensions
         * @private
         */
        _inlineDimensions: function (height, width) {
            if (this._options.inlineDimensions) {
                this._element.style.height = height;
                this._element.style.width = width;
            }
        },

        /**
         * Get the distance between the bottom of the element and the bottom of the page
         *
         * @method _getBottomOffset
         * @private
         */
        _getBottomOffset: function () {
            var bottom = this._options.offsetBottom;
            if (this._options.bottomElement) {
                bottom += Element.pageHeight() -
                    Element.offsetTop(this._options.bottomElement);
            }
            return bottom;
        }
    };

    Common.createUIComponent(Sticky);

    return Sticky;

});
/**
 * Scroll to content
 * @module Ink.UI.SmoothScroller_1
 * @version 1
 */

Ink.createModule('Ink.UI.SmoothScroller', '1', ['Ink.UI.Common_1', 'Ink.Dom.Event_1', 'Ink.Dom.Element_1', 'Ink.Dom.Selector_1','Ink.Dom.Css_1'], function(Common, Event, InkElement, Selector, Css) {
    'use strict';

    var requestAnimationFrame =
        window.requestAnimationFrame ||
        function (cb) { return setTimeout(cb, 10); };

    var cancelAnimationFrame =
        window.cancelAnimationFrame ||
        function (id) { clearTimeout(id); };

    /**
     * @namespace SmoothScroller
     * @version 1
     * @static
     *
     * SmoothScroller is a component which replaces the default scroll-to behaviour of `<a>` tags which refer to IDs on the page.
     *
     * For example, when you have this:
     *
     *          <a href="#todo">Todo</a>
     *              [...]
     *          <section id="todo">
     *              [...]
     *
     * You can click the `<a>` and the page will scroll until the section you pointed to.
     *
     * When you use SmoothScroller, instead of immediately scrolling to the element, you get a smooth motion.
     *
     * Also, you can define the data-margin option if you have a `position:fixed` top menu ruining the behaviour.
     *
     * @example
     *
     */
    var SmoothScroller = {

        /**
         * The default scrolling speed. Higher is slower. Defaults to 10.
         *
         * @property speed
         * @type {Number}
         * @default 10
         * @static
         */
        speed: 10,

        /**
         * Change the URL hash (location.hash) when done scrolling? Defaults to true.
         *
         * @property changeHash
         * @default true
         * @type {Boolean}
         * @static
         */
        changeHash: true,

        /**
         * The default top margin.
         * Use this when you want the scroll motion to stop before it reaches its destination, for example when you want to add some breathing space or have a position:fixed top bar in front of your content.
         *
         * @property margin
         * @default 0
         * @type {Number}
         * @static
         */
        margin: 0,


        /**
         * Moves the scrollbar to the target element. This is the function
         * which animates the scroll position bit by bit. It calls itself in
         * the end through requestAnimationFrame
         *
         * @method scroll
         * @param  {Number} scrollTop Y coordinate value to stop at
         * @param  {Object} options Option hash containing:
         * @param  {Number} [options.margin] Set this to non-zero to leave a margin between the top of the page and your element. Useful if you have a top bar with `position: fixed`.
         * @param  {Number} [options.speed] Inverse scrolling speed. Smaller is faster.
         * @return {void}
         * @public
         * @static
         */
        scroll: function(scrollTop, options) {
            var a = Math.round(InkElement.scrollHeight());

            var endPos = Math.round(scrollTop - (options.margin || 0));

            if (endPos > a) {
                a += Math.ceil((endPos - a) / options.speed);
            } else {
                a = a + (endPos - a) / options.speed;
            }

            cancelAnimationFrame(SmoothScroller.interval);

            if (!((a) === endPos || SmoothScroller.offsetTop === a)) {
                SmoothScroller.interval = requestAnimationFrame(
                    Ink.bindMethod(SmoothScroller, 'scroll', scrollTop, options), document.body);
            } else {
                SmoothScroller.onDone(options);
            }

            window.scrollTo(0, a);
            SmoothScroller.offsetTop = a;
        },


        /**
         * Has smooth scrolling applied to relevant elements upon page load.
         * Listens to the click event on the document.
         * Anything which matches the selector will be considered a "link" by SmoothScroller and handled as such.
         *
         * When a link is clicked, it is checked for several options:
         * - `data-margin="0"` - A margin in pixels -- useful when you have a position:fixed top bar.
         * - `data-speed="10"` - Inverse speed of the scrolling motion. Smaller is faster.
         * - `data-change-hash="true"` - Change the URL hash (location.hash) when done scrolling.
         *
         * @method init
         * @param {String} [selector='a.scrollableLink,a.ink-smooth-scroll'] Selector string for finding links with smooth scrolling enabled.
         * @return {void}
         * @static
         * @sample Ink_UI_SmoothScroller_1.html
         */
        init: function(selector) {
            Event.on(document, 'click', selector || 'a.scrollableLink, a.ink-smooth-scroll', SmoothScroller.onClick);
        },

        // Deprecated. Kept around just in case someone is still calling this.
        render: function() {},

        /**
         * Handles clicks on link elements
         *
         * @method onClick
         * @param {Event} event DOM click event.
         * @return {void}
         * @private
         * @static
         */
        onClick: function(event) {
            var link = event.currentTarget;

            var thisDocument =    (location + '').replace(/#.*?$/, '');
            var linkedDocument = (link.href + '').replace(/#.*?$/, '');

            if (linkedDocument !== thisDocument) {
                return; // It's an external link.
            }

            var hash = link.getAttribute('data-hash') || (link.getAttribute('href') || '')
                .replace(/^.*?#/, '');

            if(hash) {
                event.preventDefault();
                var activeLiSelector = 'ul > li.active > ' + selector;

                var selector = 'a[name="' + hash + '"],#' + hash;
                var elm = Ink.s(selector);
                var activeLi = Ink.s(activeLiSelector);
                activeLi = activeLi && activeLi.parentNode;

                if (elm) {
                    if (!Css.hasClassName(link.parentNode, 'active')) {
                        if (activeLi) {
                            Css.removeClassName(activeLi, 'active');
                        }
                        Css.addClassName(link.parentNode, 'active');
                    }

                    var options = Common.options('SmoothScroller link options', {
                        margin: ['Number', SmoothScroller.margin],
                        speed: ['Number', SmoothScroller.speed],
                        changeHash: ['Boolean', SmoothScroller.changeHash]
                    }, {}, link);

                    SmoothScroller.hash = hash;
                    
                    SmoothScroller.scroll(InkElement.offsetTop(elm), options);
                }
            }
        },

        /**
         * Called when the scroll movement is done. Updates browser address.
         *
         * @method onDone
         * @param {Object} options Options object from the element.
         * @return {void}
         * @private
         */
        onDone: function (options) {
            if (options.changeHash === true) {
                window.location.hash = SmoothScroller.hash;
            }

            SmoothScroller.hash = SmoothScroller.offsetTop = null;
        }
    };

    return SmoothScroller;

});
/**
 * Off-canvas menu
 * @module Ink.UI.Drawer_1
 * @version 1
 */

 
Ink.createModule('Ink.UI.Drawer', '1', ['Ink.UI.Common_1', 'Ink.Dom.Loaded_1', 'Ink.Dom.Selector_1', 'Ink.Dom.Element_1', 'Ink.Dom.Event_1', 'Ink.Dom.Css_1'], function(Common, Loaded, Selector, Element, Event, Css) {
    'use strict';

    // A selector that finds focusable elements
    var sFocusableElms = [
        '[tabindex]:not([tabindex="-1"])',
        'input',
        'select',
        'textarea',
        'button',
        'object',
        'a[href]',
        'area'
    ].join(',');

    /**
     * Listen to a focus even on the document using capture, taking care to be the only focus listener in the whole page for this Drawer, and also to not regard focus events caused by the mouse.
     * @method pageWideFocusListener
     * @param {Function} callback Called when the focus is set on an element.
     * @private
     */
    var onlyWrapper = null;
    function pageWideFocusListener(callback) {
        // We *necessarily* need capture to make this happen
        if (!document.addEventListener) { return; }

        if (onlyWrapper) {
            _removePageWideFocusListener();
        }

        var mouseIsDown = false;
        onlyWrapper = function (ev) {
            if (ev.type  === 'mousedown' || ev.type === 'mouseup') {
                // Disregard focus events when mouse is down
                mouseIsDown = ev.type === 'mousedown';
                return;
            }

            if (mouseIsDown) { return; }

            callback(ev.target);
        };

        document.addEventListener('focus', onlyWrapper, true);
        document.addEventListener('mousedown', onlyWrapper, true);
        document.addEventListener('mouseup', onlyWrapper, true);
    }

    /**
     * Remove the focus event listener added by pageWideFocusListener. Called when Drawer is closed.
     * @method removePageWideFocusListener
     * @private
     */
    function _removePageWideFocusListener() {
        if (!document.addEventListener) { return; }
        if (!onlyWrapper) { return; }
        document.removeEventListener('focus', onlyWrapper, true);
        document.removeEventListener('mousedown', onlyWrapper, true);
        document.removeEventListener('mouseup', onlyWrapper, true);
        onlyWrapper = null;
    }

    /**
     * Finds the first focusable element inside a container and focuses it
     * @method focusFirstFocusableElementInside
     * @private
     * @returns {Boolean} `true` if it found something to focus, `false` otherwise.
     */
    function focusFirstFocusableElementInside(container) {
        // Find elements with positive tabIndex
        var withTabIndex = Ink.ss('[tabindex]', container);

        // Find the lowest tabIndex and focus it!
        var lowestTabIndex = null;
        var lowestTabIndexElm = null;
        for (var i = 0; i < withTabIndex.length; i++) {
            var ind = +withTabIndex[i].tabIndex;
            if (!ind /* 0 or NaN */) {
                withTabIndex.splice(i, 1);
            }
            if (lowestTabIndex === null || ind < lowestTabIndex) {
                lowestTabIndex = ind;
                lowestTabIndexElm = withTabIndex[i];
            }
        }

        if (lowestTabIndexElm) {
            lowestTabIndexElm.focus();
            return true;
        }

        var firstFocusable = Ink.s(sFocusableElms, container);

        if (firstFocusable) {
            firstFocusable.focus();
            return true;
        }

        return false;
    }

    function elNotFound(el) {
        return 'Ink.UI.Drawer_1: Could not find the "' +
            el + '" element on this page. Please make sure it exists.';
    }

    // Detect the transitionEnd event name, and the style property name for "transition", because prefixes.
    // Source: https://github.com/EvandroLG/transitionEnd/blob/master/src/transition-end.js
    var transitionSupport = (function (div) {
        var transitions = {
            'WebkitTransitionProperty': 'webkitTransitionEnd',
            'transitionProperty': 'transitionend'
        };

        for (var t in transitions) {
            if (transitions.hasOwnProperty(t)) {
                if (div.style[t] !== undefined) {
                    return { styleProp: t, eventName: transitions[t] };
                }
            }
        }

        return false;
    }(document.createElement('div')));

    // Drawer takes two arguments for consistency with the rest of UI components, but only uses "options" for now.
    // In the future it might use the "el" argument. Until that works, we're ignoring the argument but asking for
    // people to kindly call new Drawer() with document.body which should then seamlessly be forward-compatible.
    function Drawer(el, options) {
        if (!Common.isDOMElement(el)) {
            // One-argument form, for backwards compat.
            options = el;
        }
        Common.BaseUIComponent.apply(this, [document.body, options]);
    }

    // Expose for testing
    Drawer.transitionSupport = transitionSupport;

    Drawer._name = 'Drawer_1';

    Drawer._optionDefinition = {
        parentSelector:     ['String', '.ink-drawer'],
        leftDrawer:         ['String', '.left-drawer'],
        leftTrigger:        ['String', '.left-drawer-trigger'],
        rightDrawer:        ['String', '.right-drawer'],
        rightTrigger:       ['String', '.right-drawer-trigger'],
        contentDrawer:      ['String', '.content-drawer'],
        mode:               ['String', 'push'],
        sides:              ['String', 'both']
    };

    Drawer.prototype = {
        /**
         * Displays off-canvas content which can be triggered by clicking elements with the 'left-drawer-trigger' and 'right-drawer-trigger', respectively.
         * The left drawer has the 'left-drawer' class, and the right drawer has the 'right-drawer' class. The content drawer (EG your `<div id="main">`) must have the 'content-drawer' class. For more, see the example below, or try the sample.
         * @class Ink.UI.Drawer_1
         * @constructor
         *
         * @param {Object}      [options]                       Configuration options.
         * @xparam {String}     [options.parentSelector='.ink-drawer']       The class you are using in your wrapper (in the example below, it's the `body` tag.)
         * @xparam {String}     [options.leftDrawer='.left-drawer']          Selector for the left drawer element. This element is placed outside the screen and shown when you click the `leftTrigger` element.
         * @xparam {String}     [options.leftTrigger='.left-drawer-trigger'] Selector for the left drawer trigger(s). When you click this trigger, the `leftDrawer` is shown.
         * @xparam {String}     [options.rightDrawer='.right-drawer']        Right drawer selector. (see `options.leftDrawer`)
         * @xparam {String}     [options.rightTrigger='.right-drawer-trigger'] Right trigger selector (see `options.leftTrigger`)
         * @xparam {String}     [options.contentDrawer='.content-drawer']    Selector for the content drawer.
         * @param {String}      [options.mode='push']                        This can be 'push' or 'over'.
         * @param {String}      [options.sides='both']                       Can be 'left', 'right', or 'both'. Controls what sides have a drawer.
         *
         * @example
         * <body class="ink-drawer">
         *     <div class="left-drawer">
         *         Right drawer content...
         *     </div>
         *     <div class="right-drawer">
         *         Left drawer content...
         *     </div>
         *     <div id="main-content" class="content-drawer ink-grid">
         *         <a class="left-drawer-trigger" href="">Open left drawer</a>
         *         <a class="right-drawer-trigger" href="">Open right drawer</a>
         *         Content...
         *     </div>
         * </body>
         *
         * <script>
         *     Ink.requireModules(['Ink.UI.Drawer_1'], function (Drawer) {
         *         new Drawer();
         *     });
         * </script>
         */
        _init: function () {
            // make sure we have the required elements acording to the config options
            // TODO consider this._has{Left,Right} because of extensive checks for this._options.sides
            this._contentDrawers = Ink.ss(this._options.contentDrawer);

            this._leftDrawer = Ink.s(this._options.leftDrawer);
            this._leftTriggers = Ink.ss(this._options.leftTrigger);

            this._rightDrawer = Ink.s(this._options.rightDrawer);
            this._rightTriggers = Ink.ss(this._options.rightTrigger);

            // The body might not have it
            Css.addClassName(document.body, 'ink-drawer');

            if(this._contentDrawers.length === 0) {
                throw new Error('Ink.UI.Drawer_1: Could not find any "' +
                    this._options.contentDrawer + '" elements on this page. ' +
                    'Please make sure you have at least one.' );
            }

            switch (this._options.sides) {
                case 'both':
                    this._triggers =
                        this._options.leftTrigger + ', ' +
                        this._options.rightTrigger + ', ' +
                        this._options.contentDrawer;
                break;

                case 'left':
                    this._triggers =
                        this._options.leftTrigger + ', ' +
                        this._options.contentDrawer;
                break;

                case 'right':
                    this._triggers =
                        this._options.rightTrigger + ', ' +
                        this._options.contentDrawer;
                break;
            }

            var atLeastOneSide = false;
            var errorMsg = null;

            function validateSide(side) {
                if (side.drawer && side.triggers.length) {
                    atLeastOneSide = true;
                } else {
                    errorMsg = side.drawer ? elNotFound(side.drawerOption) : elNotFound(side.triggerOption);
                }
            }

            if (this._options.sides === 'left' || this._options.sides === 'both') {
                validateSide({
                    name: 'left',
                    drawer: this._leftDrawer,
                    drawerOption: this._options.leftDrawer,
                    triggers: this._leftTriggers,
                    triggerOption: this._options.leftTrigger
                });
            }

            if (this._options.sides === 'right' || this._options.sides === 'both') {
                validateSide({
                    name: 'right',
                    drawer: this._rightDrawer,
                    drawerOption: this._options.rightDrawer,
                    triggers: this._rightTriggers,
                    triggerOption: this._options.rightTrigger
                });
            }

            // Only if all sides requested are missing, warn.
            // Setting 'sides' to both and ommitting the left side (or elements for the left side)
            // shouldn't trigger a warning. So we set the error message above, and here we decide whether to show it or not by counting.
            if (!atLeastOneSide) {
                Ink.warn(errorMsg);
            }

            this._isOpen = false;
            this._direction = undefined;

            this._handlers = {
                click:     Ink.bindEvent(this._onClick, this),
                afterTransition: Ink.bindEvent(this._afterTransition, this)
            };
            this._addEvents();
        },

        /**
         * Click event handler.
         * Listens to the body's click event
         *
         * @method _onClick
         * @private
         **/
        _onClick: function(ev){
            var clickedTrigger =
                Element.findUpwardsBySelector(ev.currentTarget, this._options.leftTrigger) ? 'left' :
                Element.findUpwardsBySelector(ev.currentTarget, this._options.rightTrigger) ? 'right' : null;

            if (clickedTrigger) {
                this._onTriggerClicked(ev, clickedTrigger);
                return;
            }

            if (this._isOpen) {
                var clickedInContent = Element.findUpwardsBySelector(
                    ev.currentTarget, this._options.contentDrawer);

                var clickedInLink = Element.isLink(ev.target);

                if (clickedInContent || clickedInLink) {
                    this.close();
                }

                if (clickedInContent) {
                    ev.preventDefault();
                }
            }
        },

        _onTriggerClicked: function (ev, side) {
            // When clicking on the trigger, the corresponding side is toggled.
            if (this._isOpen) {
                this.close();
            } else {
                this.open(side);
            }
            ev.preventDefault();
        },

        _afterTransition: function(){
            if(!this._isOpen){
                Css.removeClassName(this._getRecentDrawer(), 'show');
            }
        },

        _addEvents: function(){
            Event.on(document.body, 'click', this._triggers + ', a[href*="#"]', this._handlers.click);
        },

        /**
         * Gets the drawer which was most recently opened.
         **/
        _getRecentDrawer: function () {
            return  this._direction === 'left'  ? this._leftDrawer :
                    this._direction === 'right' ? this._rightDrawer : null;
        },

        open: function(direction) {
            this._isOpen = true;
            this._direction = direction;

            var drawerEl = this._getRecentDrawer();

            Css.addClassName(drawerEl ,'show');

            // Add a timeout because a reflow must trigger for the transition to take place.
            // Setting the transform at the same time as the element has display:block won't do a transition.

            setTimeout(Ink.bind(function(){
                Css.addClassName(document.body, [this._options.mode, direction]);
            },this), 0);

            if (transitionSupport && this._transitionWillOccur(drawerEl)) {
                // Fix a renderer problem on IE11 and firefox by causing a reflow on the drawer element when our transition is done.
                // this problem was preventing the drawer from displaying at all when it was open.
                Event.one(drawerEl,
                    transitionSupport.eventName,
                    function () {
                        /* jshint unused:false */
                        Css.removeClassName(drawerEl, 'show');

                        // Let's cause a reflow by reading a value!
                        var uselessValue = +drawerEl.offsetWidth;

                        Css.addClassName(drawerEl, 'show');
                    });
            }

            var lastFocused = document.activeElement;
            var didFocus = focusFirstFocusableElementInside(drawerEl);

            pageWideFocusListener(Ink.bind(function (target) {
                var insideDrawer = Element.isAncestorOf(drawerEl, target);

                if (insideDrawer) { return; }

                this.close();
                _removePageWideFocusListener();

                if (didFocus && lastFocused) {
                    lastFocused.focus();
                }
            }, this));
        },

        /**
         * Given an element, return whether it is going to perform a transition.
         * This is not perfect, but since there is no transitionstart event, it will have to do.
         */
        _transitionWillOccur: function (elm) {
            return !!(transitionSupport && Css.getStyle(elm, transitionSupport.styleProp));
        },

        close: function() {
            if (this._isOpen === false) { return; }
            var drawerEl = this._getRecentDrawer();

            if (!drawerEl) { return; }

            _removePageWideFocusListener();

            this._isOpen = false;

            // Detect whether there is transition going on
            var transitioning = null;
            if (transitionSupport) {
                transitioning = this._transitionWillOccur(this._getRecentDrawer());
            }

            Css.removeClassName(document.body, [this._options.mode, this._direction]);

            if (transitioning) {
                Event.one(document.body, transitionSupport.eventName, this._handlers.afterTransition);
            } else {
                // End the transition now.
                this._handlers.afterTransition();
            }
        }
    };

    Common.createUIComponent(Drawer);

    return Drawer;
});







Ink.requireModules( ['Ink.Dom.Selector_1','Ink.UI.Spy_1','Ink.UI.Sticky_1','Ink.UI.SmoothScroller_1', 'Ink.UI.Drawer_1', 'Ink.Dom.Event_1','Ink.Dom.Css_1'], function( Selector, Spy, Sticky, SmoothScroller, Drawer, InkEvent, InkCss ){

    // Get current section and highlight it in the navbar
    var Menu = Ink.i('top-menu');
    var sections = Ink.ss('.content-drawer section');

    for (var i = 0, len = sections.length; i < len; i++) {
        new Spy(sections[i], { target: Menu, margin: 65 });
    }

    // Make the navbar stick to the top
    new Sticky('#top-menu', { activateInLayouts: ['tiny', 'small','medium', 'large', 'xlarge'] });

    // Smooth Scroll for homepage sections
    SmoothScroller.init();
    SmoothScroller.changeHash=true;
    SmoothScroller.speed=10;

    // Create instance of the drawer menu. For small screens navigation
    var drawer = new Drawer();

    //Hide the drawer menu on button click
    var closeButton = Ink.i('close-drawer');

    InkEvent.observe(closeButton, 'click', function(event) {
        drawer.close();
    });
});
