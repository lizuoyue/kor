(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function E(a){return a==null?String(a):y[z.call(a)]||"object"}function F(a){return E(a)=="function"}function G(a){return a!=null&&a==a.window}function H(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function I(a){return E(a)=="object"}function J(a){return I(a)&&!G(a)&&a.__proto__==Object.prototype}function K(a){return a instanceof Array}function L(a){return typeof a.length=="number"}function M(a){return g.call(a,function(a){return a!=null})}function N(a){return a.length>0?c.fn.concat.apply([],a):a}function O(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function P(a){return a in j?j[a]:j[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function Q(a,b){return typeof b=="number"&&!l[O(a)]?b+"px":b}function R(a){var b,c;return i[a]||(b=h.createElement(a),h.body.appendChild(b),c=k(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),i[a]=c),i[a]}function S(a){return"children"in a?f.call(a.children):c.map(a.childNodes,function(a){if(a.nodeType==1)return a})}function T(c,d,e){for(b in d)e&&(J(d[b])||K(d[b]))?(J(d[b])&&!J(c[b])&&(c[b]={}),K(d[b])&&!K(c[b])&&(c[b]=[]),T(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function U(b,d){return d===a?c(b):c(b).filter(d)}function V(a,b,c,d){return F(b)?b.call(a,c,d):b}function W(a,b,c){c==null?a.removeAttribute(b):a.setAttribute(b,c)}function X(b,c){var d=b.className,e=d&&d.baseVal!==a;if(c===a)return e?d.baseVal:d;e?d.baseVal=c:b.className=c}function Y(a){var b;try{return a?a=="true"||(a=="false"?!1:a=="null"?null:isNaN(b=Number(a))?/^[\[\{]/.test(a)?c.parseJSON(a):a:b):a}catch(d){return a}}function Z(a,b){b(a);for(var c in a.childNodes)Z(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=e.filter,h=window.document,i={},j={},k=h.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,o=/^(?:body|html)$/i,p=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],r=h.createElement("table"),s=h.createElement("tr"),t={tr:h.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:s,th:s,"*":h.createElement("div")},u=/complete|loaded|interactive/,v=/^\.([\w-]+)$/,w=/^#([\w-]*)$/,x=/^[\w-]+$/,y={},z=y.toString,A={},B,C,D=h.createElement("div");return A.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=D).appendChild(a),d=~A.qsa(e,b).indexOf(a),f&&D.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},A.fragment=function(b,d,e){b.replace&&(b=b.replace(n,"<$1></$2>")),d===a&&(d=m.test(b)&&RegExp.$1),d in t||(d="*");var g,h,i=t[d];return i.innerHTML=""+b,h=c.each(f.call(i.childNodes),function(){i.removeChild(this)}),J(e)&&(g=c(h),c.each(e,function(a,b){p.indexOf(a)>-1?g[a](b):g.attr(a,b)})),h},A.Z=function(a,b){return a=a||[],a.__proto__=c.fn,a.selector=b||"",a},A.isZ=function(a){return a instanceof A.Z},A.init=function(b,d){if(!b)return A.Z();if(F(b))return c(h).ready(b);if(A.isZ(b))return b;var e;if(K(b))e=M(b);else if(I(b))e=[J(b)?c.extend({},b):b],b=null;else if(m.test(b))e=A.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(h,b)}return A.Z(e,b)},c=function(a,b){return A.init(a,b)},c.extend=function(a){var b,c=f.call(arguments,1);return typeof a=="boolean"&&(b=a,a=c.shift()),c.forEach(function(c){T(a,c,b)}),a},A.qsa=function(a,b){var c;return H(a)&&w.test(b)?(c=a.getElementById(RegExp.$1))?[c]:[]:a.nodeType!==1&&a.nodeType!==9?[]:f.call(v.test(b)?a.getElementsByClassName(RegExp.$1):x.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=function(a,b){return a!==b&&a.contains(b)},c.type=E,c.isFunction=F,c.isWindow=G,c.isArray=K,c.isPlainObject=J,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=B,c.trim=function(a){return a.trim()},c.uuid=0,c.support={},c.expr={},c.map=function(a,b){var c,d=[],e,f;if(L(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return N(d)},c.each=function(a,b){var c,d;if(L(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){y["[object "+b+"]"]=b.toLowerCase()}),c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,indexOf:e.indexOf,concat:e.concat,map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return u.test(h.readyState)?a(c):h.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return F(a)?this.not(this.not(a)):c(g.call(this,function(b){return A.matches(b,a)}))},add:function(a,b){return c(C(this.concat(c(a,b))))},is:function(a){return this.length>0&&A.matches(this[0],a)},not:function(b){var d=[];if(F(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):L(b)&&F(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return I(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!I(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!I(a)?a:c(a)},find:function(a){var b,d=this;return typeof a=="object"?b=c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):this.length==1?b=c(A.qsa(this[0],a)):b=this.map(function(){return A.qsa(this,a)}),b},closest:function(a,b){var d=this[0],e=!1;typeof a=="object"&&(e=c(a));while(d&&!(e?e.indexOf(d)>=0:A.matches(d,a)))d=d!==b&&!H(d)&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&!H(a)&&b.indexOf(a)<0)return b.push(a),a});return U(b,a)},parent:function(a){return U(C(this.pluck("parentNode")),a)},children:function(a){return U(this.map(function(){return S(this)}),a)},contents:function(){return this.map(function(){return f.call(this.childNodes)})},siblings:function(a){return U(this.map(function(a,b){return g.call(S(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),k(this,"").getPropertyValue("display")=="none"&&(this.style.display=R(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=F(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));var b;while((b=a.children()).length)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=F(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?d.css("display")=="none":b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(V(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(I(c))for(b in c)W(this,b,c[b]);else W(this,c,V(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&W(this,a)})},prop:function(b,c){return c===a?this[0]&&this[0][b]:this.each(function(a){this[b]=V(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+O(b),c);return d!==null?Y(d):a},val:function(b){return b===a?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(a){return this.selected}).pluck("value"):this[0].value):this.each(function(a){this.value=V(this,b,a,this.value)})},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=V(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};d.css("position")=="static"&&(g.position="relative"),d.css(g)});if(this.length==0)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,c){if(arguments.length<2&&typeof a=="string")return this[0]&&(this[0].style[B(a)]||k(this[0],"").getPropertyValue(a));var d="";if(E(a)=="string")!c&&c!==0?this.each(function(){this.style.removeProperty(O(a))}):d=O(a)+":"+Q(a,c);else for(b in a)!a[b]&&a[b]!==0?this.each(function(){this.style.removeProperty(O(b))}):d+=O(b)+":"+Q(b,a[b])+";";return this.each(function(){this.style.cssText+=";"+d})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return e.some.call(this,function(a){return this.test(X(a))},P(a))},addClass:function(a){return this.each(function(b){d=[];var e=X(this),f=V(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&X(this,e+(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return X(this,"");d=X(this),V(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(P(a)," ")}),X(this,d.trim())})},toggleClass:function(b,d){return this.each(function(e){var f=c(this),g=V(this,b,e,X(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var a=this[0],b=this.offsetParent(),d=this.offset(),e=o.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||h.body;while(a&&!o.test(a.nodeName)&&c(a).css("position")=="static")a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=this[0],g=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?G(f)?f["inner"+g]:H(f)?f.documentElement["offset"+g]:(e=this.offset())&&e[b]:this.each(function(a){f=c(this),f.css(b,V(this,d,a,f[b]()))})}}),q.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,e=c.map(arguments,function(b){return a=E(b),a=="object"||a=="array"||b==null?b:A.fragment(b)}),f,g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=b==0?h.nextSibling:b==1?h.firstChild:b==2?h:null,e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();Z(f.insertBefore(a,h),function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),A.Z.prototype=c.fn,A.uniq=C,A.deserializeValue=Y,c.zepto=A,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/),m=a.match(/(BB10).*Version\/([\d.]+)/),n=a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),o=a.match(/PlayBook/),p=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),q=a.match(/Firefox\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),m&&(b.bb10=!0,b.version=m[2]),n&&(b.rimtabletos=!0,b.version=n[2]),o&&(c.playbook=!0),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0),p&&(c.chrome=!0,c.version=p[1]),q&&(c.firefox=!0,c.version=q[1]),b.tablet=!!(f||o||e&&!a.match(/Mobile/)||q&&a.match(/Tablet/)),b.phone=!b.tablet&&!!(e||g||h||l||m||p&&a.match(/Android/)||p&&a.match(/CriOS\/([\d.]+)/)||q&&a.match(/Mobile/))}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a){function g(a){return a._zid||(a._zid=d++)}function h(a,b,d,e){b=i(b);if(b.ns)var f=j(b.ns);return(c[g(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||f.test(a.ns))&&(!d||g(a.fn)===g(d))&&(!e||a.sel==e)})}function i(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function j(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function k(b,c,d){a.type(b)!="string"?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function l(a,b){return a.del&&(a.e=="focus"||a.e=="blur")||!!b}function m(a){return f[a]||a}function n(b,d,e,h,j,n){var o=g(b),p=c[o]||(c[o]=[]);k(d,e,function(c,d){var e=i(c);e.fn=d,e.sel=h,e.e in f&&(d=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return e.fn.apply(this,arguments)}),e.del=j&&j(d,c);var g=e.del||d;e.proxy=function(a){var c=g.apply(b,[a].concat(a.data));return c===!1&&(a.preventDefault(),a.stopPropagation()),c},e.i=p.length,p.push(e),b.addEventListener(m(e.e),e.proxy,l(e,n))})}function o(a,b,d,e,f){var i=g(a);k(b||"",d,function(b,d){h(a,b,d,e).forEach(function(b){delete c[i][b.i],a.removeEventListener(m(b.e),b.proxy,l(b,f))})})}function t(b){var c,d={originalEvent:b};for(c in b)!r.test(c)&&b[c]!==undefined&&(d[c]=b[c]);return a.each(s,function(a,c){d[a]=function(){return this[c]=p,b[a].apply(b,arguments)},d[c]=q}),d}function u(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={},f={mouseenter:"mouseover",mouseleave:"mouseout"};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:n,remove:o},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=g(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){n(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){o(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){n(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return o(d,b,a),c}})})};var p=function(){return!0},q=function(){return!1},r=/^([A-Z]|layer[XY]$)/,s={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){return this.each(function(e,f){n(f,c,d,b,function(c){return function(d){var e,g=a(d.target).closest(b,f).get(0);if(g)return e=a.extend(t(d),{currentTarget:g,liveFired:f}),c.apply(g,[e].concat([].slice.call(arguments,1)))}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){o(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return!c||a.isFunction(c)?this.bind(b,c||d):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return!c||a.isFunction(c)?this.unbind(b,c||d):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){if(typeof b=="string"||a.isPlainObject(b))b=a.Event(b);return u(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,g){d=t(typeof b=="string"?a.Event(b):b),d.data=c,d.target=g,a.each(h(g,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){typeof a!="string"&&(b=a,a=b.type);var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c.isDefaultPrevented=function(){return this.defaultPrevented},c}}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a=a.split(";",2)[0]),a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){a.processData&&a.data&&$.type(a.data)!="string"&&(a.data=$.param(a.data,a.traditional)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function parseArguments(a,b,c,d){var e=!$.isFunction(b);return{url:a,data:e?b:undefined,success:e?$.isFunction(c)?c:undefined:b,dataType:e?d||c:c}}function serialize(a,b,c,d){var e,f=$.isArray(b);$.each(b,function(b,g){e=$.type(g),d&&(b=c?d:d+"["+(f?"":b)+"]"),!d&&f?a.add(g.name,g.value):e=="array"||!c&&e=="object"?serialize(a,g,c,b):a.add(b,g)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){if("type"in a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){clearTimeout(g),$(c).remove(),delete window[b]},e=function(c){d();if(!c||c=="timeout")window[b]=empty;ajaxError(null,c||"abort",f,a)},f={abort:e},g;return ajaxBeforeSend(f,a)===!1?(e("abort"),!1):(window[b]=function(b){d(),ajaxSuccess(b,f,a)},c.onerror=function(){e("error")},c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(g=setTimeout(function(){e("timeout")},a.timeout)),f)}return $.ajax(a)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,xhr.status?"error":"abort",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b,c,d){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(a,b,c,d){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(a,b,c){var d=parseArguments.apply(null,arguments);return d.dataType="json",$.ajax(d)},$.fn.load=function(a,b,c){if(!this.length)return this;var d=this,e=a.split(/\s/),f,g=parseArguments(a,b,c),h=g.success;return e.length>1&&(g.url=e[0],f=e[1]),g.success=function(a){d.html(f?$("<div>").html(a.replace(rscript,"")).find(f):a),h&&h.apply(d,arguments)},$.ajax(g),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a,b){function s(a){return t(a.replace(/([a-z])([A-Z])/,"$1-$2"))}function t(a){return a.toLowerCase()}function u(a){return d?d+a:t(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k,l,m,n,o,p,q,r={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+t(a)+"-",d=e,!1}),k=c+"transform",r[l=c+"transition-property"]=r[m=c+"transition-duration"]=r[n=c+"transition-timing-function"]=r[o=c+"animation-name"]=r[p=c+"animation-duration"]=r[q=c+"animation-timing-function"]="",a.fx={off:d===b&&i.style.transitionProperty===b,speeds:{_default:400,fast:200,slow:600},cssPrefix:c,transitionEnd:u("TransitionEnd"),animationEnd:u("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isPlainObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c=(typeof c=="number"?c:a.fx.speeds[c]||a.fx.speeds._default)/1e3),this.anim(b,c,d,e)},a.fn.anim=function(c,d,e,f){var g,h={},i,t="",u=this,v,w=a.fx.transitionEnd;d===b&&(d=.4),a.fx.off&&(d=0);if(typeof c=="string")h[o]=c,h[p]=d+"s",h[q]=e||"linear",w=a.fx.animationEnd;else{i=[];for(g in c)j.test(g)?t+=g+"("+c[g]+") ":(h[g]=c[g],i.push(s(g)));t&&(h[k]=t,i.push(k)),d>0&&typeof c=="object"&&(h[l]=i.join(", "),h[m]=d+"s",h[n]=e||"linear")}return v=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(w,v)}a(this).css(r),f&&f.call(this)},d>0&&this.bind(w,v),this.size()&&this.get(0).clientLeft,this.css(h),d<=0&&setTimeout(function(){u.each(function(){v.call(this)})},0),this},i=null}(Zepto);!function(root,factory){"undefined"!=typeof exports?"undefined"!=typeof module&&module.exports&&(exports=module.exports=factory(root,exports)):"function"==typeof define&&define.amd?define(["exports"],function(exports){root.Lockr=factory(root,exports)}):root.Lockr=factory(root,{})}(this,function(root,Lockr){"use strict";return Array.prototype.indexOf||(Array.prototype.indexOf=function(elt){var len=this.length>>>0,from=Number(arguments[1])||0;for(from=0>from?Math.ceil(from):Math.floor(from),0>from&&(from+=len);len>from;from++)if(from in this&&this[from]===elt)return from;return-1}),Lockr.prefix="",Lockr._getPrefixedKey=function(key,options){return options=options||{},options.noPrefix?key:this.prefix+key},Lockr.set=function(key,value,options){var query_key=this._getPrefixedKey(key,options);try{localStorage.setItem(query_key,JSON.stringify({data:value}))}catch(e){console&&console.warn("Lockr didn't successfully save the '{"+key+": "+value+"}' pair, because the localStorage is full.")}},Lockr.get=function(key,missing,options){var value,query_key=this._getPrefixedKey(key,options);try{value=JSON.parse(localStorage.getItem(query_key))}catch(e){try{value=localStorage[query_key]?JSON.parse('{"data":"'+localStorage.getItem(query_key)+'"}'):null}catch(e){console&&console.warn("Lockr could not load the item with key "+key)}}return null===value?missing:"undefined"!=typeof value.data?value.data:missing},Lockr.sadd=function(key,value,options){var json,query_key=this._getPrefixedKey(key,options),values=Lockr.smembers(key);if(values.indexOf(value)>-1)return null;try{values.push(value),json=JSON.stringify({data:values}),localStorage.setItem(query_key,json)}catch(e){console.log(e),console&&console.warn("Lockr didn't successfully add the "+value+" to "+key+" set, because the localStorage is full.")}},Lockr.smembers=function(key,options){var value,query_key=this._getPrefixedKey(key,options);try{value=JSON.parse(localStorage.getItem(query_key))}catch(e){value=null}return null===value?[]:value.data||[]},Lockr.sismember=function(key,value,options){this._getPrefixedKey(key,options);return Lockr.smembers(key).indexOf(value)>-1},Lockr.getAll=function(){var keys=Object.keys(localStorage);return keys.map(function(key){return Lockr.get(key)})},Lockr.srem=function(key,value,options){var json,index,query_key=this._getPrefixedKey(key,options),values=Lockr.smembers(key,value);index=values.indexOf(value),index>-1&&values.splice(index,1),json=JSON.stringify({data:values});try{localStorage.setItem(query_key,json)}catch(e){console&&console.warn("Lockr couldn't remove the "+value+" from the set "+key)}},Lockr.rm=function(key){localStorage.removeItem(key)},Lockr.flush=function(){localStorage.clear()},Lockr});(function(window,undefined){"use strict";var riot={version:"v2.4.1",settings:{}},__uid=0,__virtualDom=[],__tagImpl={},GLOBAL_MIXIN="__global_mixin",RIOT_PREFIX="riot-",RIOT_TAG=RIOT_PREFIX+"tag",RIOT_TAG_IS="data-is",T_STRING="string",T_OBJECT="object",T_UNDEF="undefined",T_FUNCTION="function",SPECIAL_TAGS_REGEX=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,RESERVED_WORDS_BLACKLIST=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,SVG_TAGS_LIST=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],IE_VERSION=(window&&window.document||{}).documentMode|0,FIREFOX=window&&!!window.InstallTrigger;riot.observable=function(el){el=el||{};var callbacks={},slice=Array.prototype.slice;function onEachEvent(e,fn){var es=e.split(" "),l=es.length,i=0,name,indx;for(;i<l;i++){name=es[i];indx=name.indexOf(".");if(name)fn(~indx?name.substring(0,indx):name,i,~indx?name.slice(indx+1):null)}}Object.defineProperties(el,{on:{value:function(events,fn){if(typeof fn!="function")return el;onEachEvent(events,function(name,pos,ns){(callbacks[name]=callbacks[name]||[]).push(fn);fn.typed=pos>0;fn.ns=ns});return el},enumerable:false,writable:false,configurable:false},off:{value:function(events,fn){if(events=="*"&&!fn)callbacks={};else{onEachEvent(events,function(name,pos,ns){if(fn||ns){var arr=callbacks[name];for(var i=0,cb;cb=arr&&arr[i];++i){if(cb==fn||ns&&cb.ns==ns)arr.splice(i--,1)}}else delete callbacks[name]})}return el},enumerable:false,writable:false,configurable:false},one:{value:function(events,fn){function on(){el.off(events,on);fn.apply(el,arguments)}return el.on(events,on);
},enumerable:false,writable:false,configurable:false},trigger:{value:function(events){var arglen=arguments.length-1,args=new Array(arglen),fns;for(var i=0;i<arglen;i++){args[i]=arguments[i+1]}onEachEvent(events,function(name,pos,ns){fns=slice.call(callbacks[name]||[],0);for(var i=0,fn;fn=fns[i];++i){if(fn.busy)continue;fn.busy=1;if(!ns||fn.ns==ns)fn.apply(el,fn.typed?[name].concat(args):args);if(fns[i]!==fn){i--}fn.busy=0}if(callbacks["*"]&&name!="*")el.trigger.apply(el,["*",name].concat(args))});return el},enumerable:false,writable:false,configurable:false}});return el};(function(riot){var RE_ORIGIN=/^.+?\/\/+[^\/]+/,EVENT_LISTENER="EventListener",REMOVE_EVENT_LISTENER="remove"+EVENT_LISTENER,ADD_EVENT_LISTENER="add"+EVENT_LISTENER,HAS_ATTRIBUTE="hasAttribute",REPLACE="replace",POPSTATE="popstate",HASHCHANGE="hashchange",TRIGGER="trigger",MAX_EMIT_STACK_LEVEL=3,win=typeof window!="undefined"&&window,doc=typeof document!="undefined"&&document,hist=win&&history,loc=win&&(hist.location||win.location),prot=Router.prototype,clickEvent=doc&&doc.ontouchstart?"touchstart":"click",started=false,central=riot.observable(),routeFound=false,debouncedEmit,base,current,parser,secondParser,emitStack=[],emitStackLevel=0;function DEFAULT_PARSER(path){return path.split(/[\/?#]/)}function DEFAULT_SECOND_PARSER(path,filter){var re=new RegExp("^"+filter[REPLACE](/\*/g,"([^/?#]+?)")[REPLACE](/\.\./,".*")+"$"),args=path.match(re);if(args)return args.slice(1)}function debounce(fn,delay){var t;return function(){clearTimeout(t);t=setTimeout(fn,delay)}}function start(autoExec){debouncedEmit=debounce(emit,1);win[ADD_EVENT_LISTENER](POPSTATE,debouncedEmit);win[ADD_EVENT_LISTENER](HASHCHANGE,debouncedEmit);doc[ADD_EVENT_LISTENER](clickEvent,click);if(autoExec)emit(true)}function Router(){this.$=[];riot.observable(this);central.on("stop",this.s.bind(this));central.on("emit",this.e.bind(this))}function normalize(path){return path[REPLACE](/^\/|\/$/,"")}function isString(str){return typeof str=="string"}function getPathFromRoot(href){return(href||loc.href)[REPLACE](RE_ORIGIN,"")}function getPathFromBase(href){return base[0]=="#"?(href||loc.href||"").split(base)[1]||"":(loc?getPathFromRoot(href):href||"")[REPLACE](base,"")}function emit(force){var isRoot=emitStackLevel==0;if(MAX_EMIT_STACK_LEVEL<=emitStackLevel)return;emitStackLevel++;emitStack.push(function(){var path=getPathFromBase();if(force||path!=current){central[TRIGGER]("emit",path);current=path}});if(isRoot){while(emitStack.length){emitStack[0]();emitStack.shift()}emitStackLevel=0}}function click(e){if(e.which!=1||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)return;var el=e.target;while(el&&el.nodeName!="A")el=el.parentNode;if(!el||el.nodeName!="A"||el[HAS_ATTRIBUTE]("download")||!el[HAS_ATTRIBUTE]("href")||el.target&&el.target!="_self"||el.href.indexOf(loc.href.match(RE_ORIGIN)[0])==-1)return;if(el.href!=loc.href){if(el.href.split("#")[0]==loc.href.split("#")[0]||base!="#"&&getPathFromRoot(el.href).indexOf(base)!==0||!go(getPathFromBase(el.href),el.title||doc.title))return}e.preventDefault()}function go(path,title,shouldReplace){if(hist){path=base+normalize(path);title=title||doc.title;shouldReplace?hist.replaceState(null,title,path):hist.pushState(null,title,path);doc.title=title;routeFound=false;emit();return routeFound}return central[TRIGGER]("emit",getPathFromBase(path))}prot.m=function(first,second,third){if(isString(first)&&(!second||isString(second)))go(first,second,third||false);else if(second)this.r(first,second);else this.r("@",first)};prot.s=function(){this.off("*");this.$=[]};prot.e=function(path){this.$.concat("@").some(function(filter){var args=(filter=="@"?parser:secondParser)(normalize(path),normalize(filter));if(typeof args!="undefined"){this[TRIGGER].apply(null,[filter].concat(args));return routeFound=true}},this)};prot.r=function(filter,action){if(filter!="@"){filter="/"+normalize(filter);this.$.push(filter)}this.on(filter,action)};var mainRouter=new Router;var route=mainRouter.m.bind(mainRouter);route.create=function(){var newSubRouter=new Router;var router=newSubRouter.m.bind(newSubRouter);router.stop=newSubRouter.s.bind(newSubRouter);return router};route.base=function(arg){base=arg||"#";current=getPathFromBase()};route.exec=function(){emit(true)};route.parser=function(fn,fn2){if(!fn&&!fn2){parser=DEFAULT_PARSER;secondParser=DEFAULT_SECOND_PARSER}if(fn)parser=fn;if(fn2)secondParser=fn2};route.query=function(){var q={};var href=loc.href||current;href[REPLACE](/[?&](.+?)=([^&]*)/g,function(_,k,v){q[k]=v});return q};route.stop=function(){if(started){if(win){win[REMOVE_EVENT_LISTENER](POPSTATE,debouncedEmit);win[REMOVE_EVENT_LISTENER](HASHCHANGE,debouncedEmit);doc[REMOVE_EVENT_LISTENER](clickEvent,click)}central[TRIGGER]("stop");started=false}};route.start=function(autoExec){if(!started){if(win){if(document.readyState=="complete")start(autoExec);else win[ADD_EVENT_LISTENER]("load",function(){setTimeout(function(){start(autoExec)},1)})}started=true}};route.base();route.parser();riot.route=route})(riot);var brackets=function(UNDEF){var REGLOB="g",R_MLCOMMS=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,R_STRINGS=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,S_QBLOCKS=R_STRINGS.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,FINDBRACES={"(":RegExp("([()])|"+S_QBLOCKS,REGLOB),"[":RegExp("([[\\]])|"+S_QBLOCKS,REGLOB),"{":RegExp("([{}])|"+S_QBLOCKS,REGLOB)},DEFAULT="{ }";var _pairs=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+S_QBLOCKS,REGLOB),DEFAULT,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/];var cachedBrackets=UNDEF,_regex,_cache=[],_settings;function _loopback(re){return re}function _rewrite(re,bp){if(!bp)bp=_cache;return new RegExp(re.source.replace(/{/g,bp[2]).replace(/}/g,bp[3]),re.global?REGLOB:"")}function _create(pair){if(pair===DEFAULT)return _pairs;var arr=pair.split(" ");if(arr.length!==2||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(pair)){throw new Error('Unsupported brackets "'+pair+'"')}arr=arr.concat(pair.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" "));arr[4]=_rewrite(arr[1].length>1?/{[\S\s]*?}/:_pairs[4],arr);arr[5]=_rewrite(pair.length>3?/\\({|})/g:_pairs[5],arr);arr[6]=_rewrite(_pairs[6],arr);arr[7]=RegExp("\\\\("+arr[3]+")|([[({])|("+arr[3]+")|"+S_QBLOCKS,REGLOB);arr[8]=pair;return arr}function _brackets(reOrIdx){return reOrIdx instanceof RegExp?_regex(reOrIdx):_cache[reOrIdx]}_brackets.split=function split(str,tmpl,_bp){if(!_bp)_bp=_cache;var parts=[],match,isexpr,start,pos,re=_bp[6];isexpr=start=re.lastIndex=0;while(match=re.exec(str)){pos=match.index;if(isexpr){if(match[2]){re.lastIndex=skipBraces(str,match[2],re.lastIndex);continue}if(!match[3]){continue}}if(!match[1]){unescapeStr(str.slice(start,pos));start=re.lastIndex;re=_bp[6+(isexpr^=1)];re.lastIndex=start}}if(str&&start<str.length){unescapeStr(str.slice(start))}return parts;function unescapeStr(s){if(tmpl||isexpr){parts.push(s&&s.replace(_bp[5],"$1"))}else{parts.push(s)}}function skipBraces(s,ch,ix){var match,recch=FINDBRACES[ch];recch.lastIndex=ix;ix=1;while(match=recch.exec(s)){if(match[1]&&!(match[1]===ch?++ix:--ix))break}return ix?s.length:recch.lastIndex}};_brackets.hasExpr=function hasExpr(str){return _cache[4].test(str)};_brackets.loopKeys=function loopKeys(expr){var m=expr.match(_cache[9]);return m?{key:m[1],pos:m[2],val:_cache[0]+m[3].trim()+_cache[1]}:{val:expr.trim()}};_brackets.array=function array(pair){return pair?_create(pair):_cache};function _reset(pair){if((pair||(pair=DEFAULT))!==_cache[8]){_cache=_create(pair);_regex=pair===DEFAULT?_loopback:_rewrite;_cache[9]=_regex(_pairs[9])}cachedBrackets=pair}function _setSettings(o){var b;o=o||{};b=o.brackets;Object.defineProperty(o,"brackets",{set:_reset,get:function(){return cachedBrackets},enumerable:true});_settings=o;_reset(b)}Object.defineProperty(_brackets,"settings",{set:_setSettings,get:function(){return _settings}});_brackets.settings=typeof riot!=="undefined"&&riot.settings||{};_brackets.set=_reset;_brackets.R_STRINGS=R_STRINGS;_brackets.R_MLCOMMS=R_MLCOMMS;_brackets.S_QBLOCKS=S_QBLOCKS;return _brackets}();var tmpl=function(){var _cache={};function _tmpl(str,data){if(!str)return str;return(_cache[str]||(_cache[str]=_create(str))).call(data,_logErr)}_tmpl.haveRaw=brackets.hasRaw;_tmpl.hasExpr=brackets.hasExpr;_tmpl.loopKeys=brackets.loopKeys;_tmpl.errorHandler=null;function _logErr(err,ctx){if(_tmpl.errorHandler){err.riotData={tagName:ctx&&ctx.root&&ctx.root.tagName,_riot_id:ctx&&ctx._riot_id};_tmpl.errorHandler(err)}}function _create(str){var expr=_getTmpl(str);if(expr.slice(0,11)!=="try{return ")expr="return "+expr;return new Function("E",expr+";")}var CH_IDEXPR="⁗",RE_CSNAME=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,RE_QBLOCK=RegExp(brackets.S_QBLOCKS,"g"),RE_DQUOTE=/\u2057/g,RE_QBMARK=/\u2057(\d+)~/g;function _getTmpl(str){var qstr=[],expr,parts=brackets.split(str.replace(RE_DQUOTE,'"'),1);if(parts.length>2||parts[0]){var i,j,list=[];for(i=j=0;i<parts.length;++i){expr=parts[i];if(expr&&(expr=i&1?_parseExpr(expr,1,qstr):'"'+expr.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"'))list[j++]=expr}expr=j<2?list[0]:"["+list.join(",")+'].join("")'}else{expr=_parseExpr(parts[1],0,qstr)}if(qstr[0]){expr=expr.replace(RE_QBMARK,function(_,pos){return qstr[pos].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})}return expr}var RE_BREND={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g};function _parseExpr(expr,asText,qstr){expr=expr.replace(RE_QBLOCK,function(s,div){return s.length>2&&!div?CH_IDEXPR+(qstr.push(s)-1)+"~":s}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1");if(expr){var list=[],cnt=0,match;while(expr&&(match=expr.match(RE_CSNAME))&&!match.index){var key,jsb,re=/,|([[{(])|$/g;expr=RegExp.rightContext;key=match[2]?qstr[match[2]].slice(1,-1).trim().replace(/\s+/g," "):match[1];while(jsb=(match=re.exec(expr))[1])skipBraces(jsb,re);jsb=expr.slice(0,match.index);expr=RegExp.rightContext;list[cnt++]=_wrapExpr(jsb,1,key)}expr=!cnt?_wrapExpr(expr,asText):cnt>1?"["+list.join(",")+'].join(" ").trim()':list[0]}return expr;function skipBraces(ch,re){var mm,lv=1,ir=RE_BREND[ch];ir.lastIndex=re.lastIndex;while(mm=ir.exec(expr)){if(mm[0]===ch)++lv;else if(!--lv)break}re.lastIndex=lv?expr.length:ir.lastIndex}}var JS_CONTEXT='"in this?this:'+(typeof window!=="object"?"global":"window")+").",JS_VARNAME=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,JS_NOPROPS=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;function _wrapExpr(expr,asText,key){var tb;expr=expr.replace(JS_VARNAME,function(match,p,mvar,pos,s){if(mvar){pos=tb?0:pos+match.length;if(mvar!=="this"&&mvar!=="global"&&mvar!=="window"){match=p+'("'+mvar+JS_CONTEXT+mvar;if(pos)tb=(s=s[pos])==="."||s==="("||s==="["}else if(pos){tb=!JS_NOPROPS.test(s.slice(pos))}}return match});if(tb){expr="try{return "+expr+"}catch(e){E(e,this)}"}if(key){expr=(tb?"function(){"+expr+"}.call(this)":"("+expr+")")+'?"'+key+'":""'}else if(asText){expr="function(v){"+(tb?expr.replace("return ","v="):"v=("+expr+")")+';return v||v===0?v:""}.call(this)'}return expr}_tmpl.parse=function(s){return s};_tmpl.version=brackets.version="v2.4.0";return _tmpl}();var mkdom=function _mkdom(){var reHasYield=/<yield\b/i,reYieldAll=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,reYieldSrc=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,reYieldDest=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi;var rootEls={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},tblTags=IE_VERSION&&IE_VERSION<10?SPECIAL_TAGS_REGEX:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;function _mkdom(templ,html){var match=templ&&templ.match(/^\s*<([-\w]+)/),tagName=match&&match[1].toLowerCase(),el=mkEl("div",isSVGTag(tagName));templ=replaceYield(templ,html);if(tblTags.test(tagName))el=specialTags(el,templ,tagName);else setInnerHTML(el,templ);el.stub=true;return el}function specialTags(el,templ,tagName){var select=tagName[0]==="o",parent=select?"select>":"table>";el.innerHTML="<"+parent+templ.trim()+"</"+parent;parent=el.firstChild;if(select){parent.selectedIndex=-1}else{var tname=rootEls[tagName];if(tname&&parent.childElementCount===1)parent=$(tname,parent)}return parent}function replaceYield(templ,html){if(!reHasYield.test(templ))return templ;var src={};html=html&&html.replace(reYieldSrc,function(_,ref,text){src[ref]=src[ref]||text;return""}).trim();return templ.replace(reYieldDest,function(_,ref,def){return src[ref]||def||""}).replace(reYieldAll,function(_,def){return html||def||""})}return _mkdom}();function mkitem(expr,key,val){var item={};item[expr.key]=key;if(expr.pos)item[expr.pos]=val;return item}function unmountRedundant(items,tags){var i=tags.length,j=items.length,t;while(i>j){t=tags[--i];tags.splice(i,1);t.unmount()}}function moveNestedTags(child,i){Object.keys(child.tags).forEach(function(tagName){var tag=child.tags[tagName];if(isArray(tag))each(tag,function(t){moveChildTag(t,tagName,i)});else moveChildTag(tag,tagName,i)})}function addVirtual(tag,src,target){var el=tag._root,sib;tag._virts=[];while(el){sib=el.nextSibling;if(target)src.insertBefore(el,target._root);else src.appendChild(el);tag._virts.push(el);el=sib}}function moveVirtual(tag,src,target,len){var el=tag._root,sib,i=0;for(;i<len;i++){sib=el.nextSibling;src.insertBefore(el,target._root);el=sib}}function _each(dom,parent,expr){remAttr(dom,"each");var mustReorder=typeof getAttr(dom,"no-reorder")!==T_STRING||remAttr(dom,"no-reorder"),tagName=getTagName(dom),impl=__tagImpl[tagName]||{tmpl:getOuterHTML(dom)},useRoot=SPECIAL_TAGS_REGEX.test(tagName),root=dom.parentNode,ref=document.createTextNode(""),child=getTag(dom),isOption=tagName.toLowerCase()==="option",tags=[],oldItems=[],hasKeys,isVirtual=dom.tagName=="VIRTUAL";expr=tmpl.loopKeys(expr);root.insertBefore(ref,dom);parent.one("before-mount",function(){dom.parentNode.removeChild(dom);if(root.stub)root=parent.root}).on("update",function(){var items=tmpl(expr.val,parent),frag=document.createDocumentFragment();if(!isArray(items)){hasKeys=items||false;items=hasKeys?Object.keys(items).map(function(key){return mkitem(expr,key,items[key])}):[]}var i=0,itemsLength=items.length;for(;i<itemsLength;i++){var item=items[i],_mustReorder=mustReorder&&typeof item==T_OBJECT&&!hasKeys,oldPos=oldItems.indexOf(item),pos=~oldPos&&_mustReorder?oldPos:i,tag=tags[pos];item=!hasKeys&&expr.key?mkitem(expr,item,i):item;if(!_mustReorder&&!tag||_mustReorder&&!~oldPos||!tag){tag=new Tag(impl,{parent:parent,isLoop:true,hasImpl:!!__tagImpl[tagName],root:useRoot?root:dom.cloneNode(),item:item},dom.innerHTML);tag.mount();if(isVirtual)tag._root=tag.root.firstChild;if(i==tags.length||!tags[i]){if(isVirtual)addVirtual(tag,frag);else frag.appendChild(tag.root)}else{if(isVirtual)addVirtual(tag,root,tags[i]);else root.insertBefore(tag.root,tags[i].root);oldItems.splice(i,0,item)}tags.splice(i,0,tag);pos=i}else tag.update(item,true);if(pos!==i&&_mustReorder&&tags[i]){if(isVirtual)moveVirtual(tag,root,tags[i],dom.childNodes.length);else root.insertBefore(tag.root,tags[i].root);if(expr.pos)tag[expr.pos]=i;tags.splice(i,0,tags.splice(pos,1)[0]);oldItems.splice(i,0,oldItems.splice(pos,1)[0]);if(!child&&tag.tags)moveNestedTags(tag,i)}tag._item=item;defineProperty(tag,"_parent",parent)}unmountRedundant(items,tags);if(isOption){root.appendChild(frag);if(FIREFOX&&!root.multiple){for(var n=0;n<root.length;n++){if(root[n].__riot1374){root.selectedIndex=n;delete root[n].__riot1374;break}}}}else root.insertBefore(frag,ref);if(child)parent.tags[tagName]=tags;oldItems=items.slice()})}var styleManager=function(_riot){if(!window)return{add:function(){},inject:function(){}};var styleNode=function(){var newNode=mkEl("style");setAttr(newNode,"type","text/css");var userNode=$("style[type=riot]");if(userNode){if(userNode.id)newNode.id=userNode.id;userNode.parentNode.replaceChild(newNode,userNode)}else document.getElementsByTagName("head")[0].appendChild(newNode);return newNode}();var cssTextProp=styleNode.styleSheet,stylesToInject="";Object.defineProperty(_riot,"styleNode",{value:styleNode,writable:true});return{add:function(css){stylesToInject+=css},inject:function(){if(stylesToInject){if(cssTextProp)cssTextProp.cssText+=stylesToInject;else styleNode.innerHTML+=stylesToInject;stylesToInject=""}}}}(riot);function parseNamedElements(root,tag,childTags,forceParsingNamed){walk(root,function(dom){if(dom.nodeType==1){dom.isLoop=dom.isLoop||(dom.parentNode&&dom.parentNode.isLoop||getAttr(dom,"each"))?1:0;if(childTags){var child=getTag(dom);if(child&&!dom.isLoop)childTags.push(initChildTag(child,{root:dom,parent:tag},dom.innerHTML,tag))}if(!dom.isLoop||forceParsingNamed)setNamed(dom,tag,[])}})}function parseExpressions(root,tag,expressions){function addExpr(dom,val,extra){if(tmpl.hasExpr(val)){expressions.push(extend({dom:dom,expr:val},extra))}}walk(root,function(dom){var type=dom.nodeType,attr;if(type==3&&dom.parentNode.tagName!="STYLE")addExpr(dom,dom.nodeValue);if(type!=1)return;attr=getAttr(dom,"each");if(attr){_each(dom,tag,attr);return false}each(dom.attributes,function(attr){var name=attr.name,bool=name.split("__")[1];addExpr(dom,attr.value,{attr:bool||name,bool:bool});if(bool){remAttr(dom,name);return false}});if(getTag(dom))return false})}function Tag(impl,conf,innerHTML){var self=riot.observable(this),opts=inherit(conf.opts)||{},parent=conf.parent,isLoop=conf.isLoop,hasImpl=conf.hasImpl,item=cleanUpData(conf.item),expressions=[],childTags=[],root=conf.root,tagName=root.tagName.toLowerCase(),attr={},propsInSyncWithParent=[],dom;if(impl.name&&root._tag)root._tag.unmount(true);this.isMounted=false;root.isLoop=isLoop;root._tag=this;defineProperty(this,"_riot_id",++__uid);extend(this,{parent:parent,root:root,opts:opts},item);defineProperty(this,"tags",{});each(root.attributes,function(el){var val=el.value;if(tmpl.hasExpr(val))attr[el.name]=val});dom=mkdom(impl.tmpl,innerHTML);function updateOpts(){var ctx=hasImpl&&isLoop?self:parent||self;each(root.attributes,function(el){var val=el.value;opts[toCamel(el.name)]=tmpl.hasExpr(val)?tmpl(val,ctx):val});each(Object.keys(attr),function(name){opts[toCamel(name)]=tmpl(attr[name],ctx)})}function normalizeData(data){for(var key in item){if(typeof self[key]!==T_UNDEF&&isWritable(self,key))self[key]=data[key]}}function inheritFromParent(){if(!self.parent||!isLoop)return;each(Object.keys(self.parent),function(k){var mustSync=!RESERVED_WORDS_BLACKLIST.test(k)&&contains(propsInSyncWithParent,k);if(typeof self[k]===T_UNDEF||mustSync){if(!mustSync)propsInSyncWithParent.push(k);self[k]=self.parent[k]}})}defineProperty(this,"update",function(data,isInherited){data=cleanUpData(data);inheritFromParent();if(data&&isObject(item)){normalizeData(data);item=data}extend(self,data);updateOpts();self.trigger("update",data);update(expressions,self);if(isInherited&&self.parent)self.parent.one("updated",function(){self.trigger("updated")});else rAF(function(){self.trigger("updated")});return this});defineProperty(this,"mixin",function(){each(arguments,function(mix){var instance;mix=typeof mix===T_STRING?riot.mixin(mix):mix;if(isFunction(mix)){instance=new mix;mix=mix.prototype}else instance=mix;each(Object.getOwnPropertyNames(mix),function(key){if(key!="init")self[key]=isFunction(instance[key])?instance[key].bind(self):instance[key]});if(instance.init)instance.init.bind(self)()});return this});defineProperty(this,"mount",function(){updateOpts();var globalMixin=riot.mixin(GLOBAL_MIXIN);if(globalMixin)for(var i in globalMixin)if(globalMixin.hasOwnProperty(i))self.mixin(globalMixin[i]);if(impl.fn)impl.fn.call(self,opts);parseExpressions(dom,self,expressions);toggle(true);if(impl.attrs)walkAttributes(impl.attrs,function(k,v){setAttr(root,k,v)});if(impl.attrs||hasImpl)parseExpressions(self.root,self,expressions);if(!self.parent||isLoop)self.update(item);self.trigger("before-mount");if(isLoop&&!hasImpl){root=dom.firstChild}else{while(dom.firstChild)root.appendChild(dom.firstChild);if(root.stub)root=parent.root}defineProperty(self,"root",root);if(isLoop)parseNamedElements(self.root,self.parent,null,true);if(!self.parent||self.parent.isMounted){self.isMounted=true;self.trigger("mount")}else self.parent.one("mount",function(){if(!isInStub(self.root)){self.parent.isMounted=self.isMounted=true;self.trigger("mount")}})});defineProperty(this,"unmount",function(keepRootTag){var el=root,p=el.parentNode,ptag,tagIndex=__virtualDom.indexOf(self);self.trigger("before-unmount");if(~tagIndex)__virtualDom.splice(tagIndex,1);if(p){if(parent){ptag=getImmediateCustomParentTag(parent);if(isArray(ptag.tags[tagName]))each(ptag.tags[tagName],function(tag,i){if(tag._riot_id==self._riot_id)ptag.tags[tagName].splice(i,1)});else ptag.tags[tagName]=undefined}else while(el.firstChild)el.removeChild(el.firstChild);if(!keepRootTag)p.removeChild(el);else{remAttr(p,RIOT_TAG_IS);remAttr(p,RIOT_TAG)}}if(this._virts){each(this._virts,function(v){if(v.parentNode)v.parentNode.removeChild(v)})}self.trigger("unmount");toggle();self.off("*");self.isMounted=false;delete root._tag});function onChildUpdate(data){self.update(data,true)}function toggle(isMount){each(childTags,function(child){child[isMount?"mount":"unmount"]()});if(!parent)return;var evt=isMount?"on":"off";if(isLoop)parent[evt]("unmount",self.unmount);else{parent[evt]("update",onChildUpdate)[evt]("unmount",self.unmount)}}parseNamedElements(dom,this,childTags)}function setEventHandler(name,handler,dom,tag){dom[name]=function(e){var ptag=tag._parent,item=tag._item,el;if(!item)while(ptag&&!item){item=ptag._item;ptag=ptag._parent}e=e||window.event;if(isWritable(e,"currentTarget"))e.currentTarget=dom;if(isWritable(e,"target"))e.target=e.srcElement;if(isWritable(e,"which"))e.which=e.charCode||e.keyCode;e.item=item;if(handler.call(tag,e)!==true&&!/radio|check/.test(dom.type)){if(e.preventDefault)e.preventDefault();e.returnValue=false}if(!e.preventUpdate){el=item?getImmediateCustomParentTag(ptag):tag;el.update()}}}function insertTo(root,node,before){if(!root)return;root.insertBefore(before,node);root.removeChild(node)}function update(expressions,tag){each(expressions,function(expr,i){var dom=expr.dom,attrName=expr.attr,value=tmpl(expr.expr,tag),parent=expr.dom.parentNode;if(expr.bool){value=!!value}else if(value==null){value=""}if(expr.value===value){return}expr.value=value;if(!attrName){value+="";if(parent){if(parent.tagName==="TEXTAREA"){parent.value=value;if(!IE_VERSION)dom.nodeValue=value}else dom.nodeValue=value}return}if(attrName==="value"){dom.value=value;return}remAttr(dom,attrName);if(isFunction(value)){setEventHandler(attrName,value,dom,tag)}else if(attrName=="if"){var stub=expr.stub,add=function(){insertTo(stub.parentNode,stub,dom)},remove=function(){insertTo(dom.parentNode,dom,stub)};if(value){if(stub){add();dom.inStub=false;if(!isInStub(dom)){walk(dom,function(el){if(el._tag&&!el._tag.isMounted)el._tag.isMounted=!!el._tag.trigger("mount")})}}}else{stub=expr.stub=stub||document.createTextNode("");if(dom.parentNode)remove();else(tag.parent||tag).one("updated",remove);dom.inStub=true}}else if(attrName==="show"){dom.style.display=value?"":"none"}else if(attrName==="hide"){dom.style.display=value?"none":""}else if(expr.bool){dom[attrName]=value;if(value)setAttr(dom,attrName,attrName);if(FIREFOX&&attrName==="selected"&&dom.tagName==="OPTION"){dom.__riot1374=value}}else if(value===0||value&&typeof value!==T_OBJECT){if(startsWith(attrName,RIOT_PREFIX)&&attrName!=RIOT_TAG){attrName=attrName.slice(RIOT_PREFIX.length)}setAttr(dom,attrName,value)}})}function each(els,fn){var len=els?els.length:0;for(var i=0,el;i<len;i++){el=els[i];if(el!=null&&fn(el,i)===false)i--}return els}function isFunction(v){return typeof v===T_FUNCTION||false}function getOuterHTML(el){if(el.outerHTML)return el.outerHTML;else{var container=mkEl("div");container.appendChild(el.cloneNode(true));return container.innerHTML}}function setInnerHTML(container,html){if(typeof container.innerHTML!=T_UNDEF)container.innerHTML=html;else{var doc=(new DOMParser).parseFromString(html,"application/xml");container.appendChild(container.ownerDocument.importNode(doc.documentElement,true))}}function isSVGTag(name){return~SVG_TAGS_LIST.indexOf(name)}function isObject(v){return v&&typeof v===T_OBJECT}function remAttr(dom,name){dom.removeAttribute(name)}function toCamel(string){return string.replace(/-(\w)/g,function(_,c){return c.toUpperCase()})}function getAttr(dom,name){return dom.getAttribute(name)}function setAttr(dom,name,val){dom.setAttribute(name,val)}function getTag(dom){return dom.tagName&&__tagImpl[getAttr(dom,RIOT_TAG_IS)||getAttr(dom,RIOT_TAG)||dom.tagName.toLowerCase()]}function addChildTag(tag,tagName,parent){var cachedTag=parent.tags[tagName];if(cachedTag){if(!isArray(cachedTag))if(cachedTag!==tag)parent.tags[tagName]=[cachedTag];if(!contains(parent.tags[tagName],tag))parent.tags[tagName].push(tag)}else{parent.tags[tagName]=tag}}function moveChildTag(tag,tagName,newPos){var parent=tag.parent,tags;if(!parent)return;tags=parent.tags[tagName];if(isArray(tags))tags.splice(newPos,0,tags.splice(tags.indexOf(tag),1)[0]);else addChildTag(tag,tagName,parent)}function initChildTag(child,opts,innerHTML,parent){var tag=new Tag(child,opts,innerHTML),tagName=getTagName(opts.root),ptag=getImmediateCustomParentTag(parent);tag.parent=ptag;tag._parent=parent;addChildTag(tag,tagName,ptag);if(ptag!==parent)addChildTag(tag,tagName,parent);opts.root.innerHTML="";return tag}function getImmediateCustomParentTag(tag){var ptag=tag;while(!getTag(ptag.root)){if(!ptag.parent)break;ptag=ptag.parent}return ptag}function defineProperty(el,key,value,options){Object.defineProperty(el,key,extend({value:value,enumerable:false,writable:false,configurable:true},options));return el}function getTagName(dom){var child=getTag(dom),namedTag=getAttr(dom,"name"),tagName=namedTag&&!tmpl.hasExpr(namedTag)?namedTag:child?child.name:dom.tagName.toLowerCase();return tagName}function extend(src){var obj,args=arguments;for(var i=1;i<args.length;++i){if(obj=args[i]){for(var key in obj){if(isWritable(src,key))src[key]=obj[key]}}}return src}function contains(arr,item){return~arr.indexOf(item)}function isArray(a){return Array.isArray(a)||a instanceof Array}function isWritable(obj,key){var props=Object.getOwnPropertyDescriptor(obj,key);return typeof obj[key]===T_UNDEF||props&&props.writable}function cleanUpData(data){if(!(data instanceof Tag)&&!(data&&typeof data.trigger==T_FUNCTION))return data;var o={};for(var key in data){if(!RESERVED_WORDS_BLACKLIST.test(key))o[key]=data[key]}return o}function walk(dom,fn){if(dom){if(fn(dom)===false)return;else{dom=dom.firstChild;while(dom){walk(dom,fn);dom=dom.nextSibling}}}}function walkAttributes(html,fn){var m,re=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;while(m=re.exec(html)){fn(m[1].toLowerCase(),m[2]||m[3]||m[4])}}function isInStub(dom){while(dom){if(dom.inStub)return true;dom=dom.parentNode}return false}function mkEl(name,isSvg){return isSvg?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(name)}function $$(selector,ctx){return(ctx||document).querySelectorAll(selector)}function $(selector,ctx){return(ctx||document).querySelector(selector)}function inherit(parent){function Child(){}Child.prototype=parent;return new Child}function getNamedKey(dom){return getAttr(dom,"id")||getAttr(dom,"name")}function setNamed(dom,parent,keys){var key=getNamedKey(dom),isArr,add=function(value){if(contains(keys,key))return;isArr=isArray(value);if(!value)parent[key]=dom;else if(!isArr||isArr&&!contains(value,dom)){if(isArr)value.push(dom);else parent[key]=[value,dom]}};if(!key)return;if(tmpl.hasExpr(key))parent.one("mount",function(){key=getNamedKey(dom);add(parent[key])});else add(parent[key])}function startsWith(src,str){return src.slice(0,str.length)===str}var rAF=function(w){var raf=w.requestAnimationFrame||w.mozRequestAnimationFrame||w.webkitRequestAnimationFrame;if(!raf||/iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)){var lastTime=0;raf=function(cb){var nowtime=Date.now(),timeout=Math.max(16-(nowtime-lastTime),0);setTimeout(function(){cb(lastTime=nowtime+timeout)},timeout)}}return raf}(window||{});function mountTo(root,tagName,opts){var tag=__tagImpl[tagName],innerHTML=root._innerHTML=root._innerHTML||root.innerHTML;root.innerHTML="";if(tag&&root)tag=new Tag(tag,{root:root,opts:opts},innerHTML);if(tag&&tag.mount){tag.mount();if(!contains(__virtualDom,tag))__virtualDom.push(tag)}return tag}riot.util={brackets:brackets,tmpl:tmpl};riot.mixin=function(){var mixins={},globals=mixins[GLOBAL_MIXIN]={},_id=0;return function(name,mixin,g){if(isObject(name)){riot.mixin("__unnamed_"+_id++,name,true);return}var store=g?globals:mixins;if(!mixin){if(typeof store[name]===T_UNDEF){throw new Error("Unregistered mixin: "+name)}return store[name]}if(isFunction(mixin)){extend(mixin.prototype,store[name]||{});store[name]=mixin}else{store[name]=extend(store[name]||{},mixin)}}}();riot.tag=function(name,html,css,attrs,fn){if(isFunction(attrs)){fn=attrs;if(/^[\w\-]+\s?=/.test(css)){attrs=css;css=""}else attrs=""}if(css){if(isFunction(css))fn=css;else styleManager.add(css)}name=name.toLowerCase();__tagImpl[name]={name:name,tmpl:html,attrs:attrs,fn:fn};return name};riot.tag2=function(name,html,css,attrs,fn){if(css)styleManager.add(css);__tagImpl[name]={name:name,tmpl:html,attrs:attrs,fn:fn};return name};riot.mount=function(selector,tagName,opts){var els,allTags,tags=[];function addRiotTags(arr){var list="";each(arr,function(e){if(!/[^-\w]/.test(e)){e=e.trim().toLowerCase();list+=",["+RIOT_TAG_IS+'="'+e+'"],['+RIOT_TAG+'="'+e+'"]'}});return list}function selectAllTags(){var keys=Object.keys(__tagImpl);return keys+addRiotTags(keys)}function pushTags(root){if(root.tagName){var riotTag=getAttr(root,RIOT_TAG_IS)||getAttr(root,RIOT_TAG);if(tagName&&riotTag!==tagName){riotTag=tagName;setAttr(root,RIOT_TAG_IS,tagName);setAttr(root,RIOT_TAG,tagName)}var tag=mountTo(root,riotTag||root.tagName.toLowerCase(),opts);if(tag)tags.push(tag)}else if(root.length){each(root,pushTags)}}styleManager.inject();if(isObject(tagName)){opts=tagName;tagName=0}if(typeof selector===T_STRING){if(selector==="*")selector=allTags=selectAllTags();else selector+=addRiotTags(selector.split(/, */));els=selector?$$(selector):[]}else els=selector;if(tagName==="*"){tagName=allTags||selectAllTags();if(els.tagName)els=$$(tagName,els);else{var nodeList=[];each(els,function(_el){nodeList.push($$(tagName,_el))});els=nodeList}tagName=0}pushTags(els);return tags};riot.update=function(){return each(__virtualDom,function(tag){tag.update()})};riot.vdom=__virtualDom;riot.Tag=Tag;if(typeof exports===T_OBJECT)module.exports=riot;else if(typeof define===T_FUNCTION&&typeof define.amd!==T_UNDEF)define(function(){return riot});else window.riot=riot})(typeof window!="undefined"?window:void 0);(function(){"use strict";var e=function(e){e=e||{};var t={},n=Array.prototype.slice,r=function(e,t){e.replace(/\S+/g,t)};Object.defineProperties(e,{on:{value:function(n,i){if(typeof i!="function")return e;r(n,function(e,n){(t[e]=t[e]||[]).push(i);i.typed=n>0});return e},enumerable:false,writable:false,configurable:false},off:{value:function(n,i){if(n=="*"&&!i)t={};else{r(n,function(e){if(i){var n=t[e];for(var r=0,f;f=n&&n[r];++r){if(f==i)n.splice(r--,1)}}else delete t[e]})}return e},enumerable:false,writable:false,configurable:false},one:{value:function(t,n){function r(){e.off(t,r);n.apply(e,arguments)}return e.on(t,r)},enumerable:false,writable:false,configurable:false},trigger:{value:function(i){var f=arguments.length-1,u=new Array(f),o;for(var a=0;a<f;a++){u[a]=arguments[a+1]}r(i,function(r){o=n.call(t[r]||[],0);for(var i=0,f;f=o[i];++i){if(f.busy)return;f.busy=1;f.apply(e,f.typed?[r].concat(u):u);if(o[i]!==f){i--}f.busy=0}if(t["*"]&&r!="*")e.trigger.apply(e,["*",r].concat(u))});return e},
enumerable:false,writable:false,configurable:false}});return e};var t=/^.+?\/\/+[^\/]+/,n="EventListener",r="remove"+n,i="add"+n,f="hasAttribute",u="replace",o="popstate",a="hashchange",c="trigger",l=3,s=typeof window!="undefined"&&window,h=typeof document!="undefined"&&document,p=s&&history,d=s&&(p.location||s.location),v=j.prototype,b=h&&h.ontouchstart?"touchstart":"click",m=false,y=e(),g=false,w,$,A,x,S,K=[],N=0;function O(e){return e.split(/[\/?#]/)}function T(e,t){var n=new RegExp("^"+t[u](/\*/g,"([^/?#]+?)")[u](/\.\./,".*")+"$"),r=e.match(n);if(r)return r.slice(1)}function E(e,t){var n;return function(){clearTimeout(n);n=setTimeout(e,t)}}function P(e){w=E(R,1);s[i](o,w);s[i](a,w);h[i](b,_);if(e)R(true)}function j(){this.$=[];e(this);y.on("stop",this.s.bind(this));y.on("emit",this.e.bind(this))}function k(e){return e[u](/^\/|\/$/,"")}function q(e){return typeof e=="string"}function D(e){return(e||d.href)[u](t,"")}function L(e){return $[0]=="#"?(e||d.href||"").split($)[1]||"":(d?D(e):e||"")[u]($,"")}function R(e){var t=N==0;if(l<=N)return;N++;K.push(function(){var t=L();if(e||t!=A){y[c]("emit",t);A=t}});if(t){while(K.length){K[0]();K.shift()}N=0}}function _(e){if(e.which!=1||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)return;var n=e.target;while(n&&n.nodeName!="A")n=n.parentNode;if(!n||n.nodeName!="A"||n[f]("download")||!n[f]("href")||n.target&&n.target!="_self"||n.href.indexOf(d.href.match(t)[0])==-1)return;if(n.href!=d.href){if(n.href.split("#")[0]==d.href.split("#")[0]||$!="#"&&D(n.href).indexOf($)!==0||!z(L(n.href),n.title||h.title))return}e.preventDefault()}function z(e,t,n){if(p){e=$+k(e);t=t||h.title;n?p.replaceState(null,t,e):p.pushState(null,t,e);h.title=t;g=false;R();return g}return y[c]("emit",L(e))}v.m=function(e,t,n){if(q(e)&&(!t||q(t)))z(e,t,n||false);else if(t)this.r(e,t);else this.r("@",e)};v.s=function(){this.off("*");this.$=[]};v.e=function(e){this.$.concat("@").some(function(t){var n=(t=="@"?x:S)(k(e),k(t));if(typeof n!="undefined"){this[c].apply(null,[t].concat(n));return g=true}},this)};v.r=function(e,t){if(e!="@"){e="/"+k(e);this.$.push(e)}this.on(e,t)};var B=new j;var C=B.m.bind(B);C.create=function(){var e=new j;var t=e.m.bind(e);t.stop=e.s.bind(e);return t};C.base=function(e){$=e||"#";A=L()};C.exec=function(){R(true)};C.parser=function(e,t){if(!e&&!t){x=O;S=T}if(e)x=e;if(t)S=t};C.query=function(){var e={};var t=d.href||A;t[u](/[?&](.+?)=([^&]*)/g,function(t,n,r){e[n]=r});return e};C.stop=function(){if(m){if(s){s[r](o,w);s[r](a,w);h[r](b,_)}y[c]("stop");m=false}};C.start=function(e){if(!m){if(s){if(document.readyState=="complete")P(e);else s[i]("load",function(){setTimeout(function(){P(e)},1)})}m=true}};C.base();C.parser();window.route=C})();riot.tag2('kor-application', '  <div class="container">\n    <a href="#/login">login</a>\n    <a href="#/welcome">welcome</a>\n    <a href="#/search">search</a>\n    <a href="#/logout">logout</a>\n  </div>\n\n  <kor-js-extensions></kor-js-extensions>\n  <kor-router></kor-router>\n  <kor-notifications></kor-notifications>\n\n  <div id="page-container" class="container">\n    <kor-page class="kor-appear-animation"></kor-page>\n  </div>\n', '@keyframes kor-appear { from { opacity: 0; transform: translateX(100%); } to { opacity: 100; transform: translateX(0%); } } @keyframes kor-fade { from { opacity: 100; } to { opacity: 0; transform: rotateY(90deg); } } #page-container { perspective: 1000px; } .kor-appear-animation { transform-style: preserve-3d; display: block; animation-name: kor-appear; animation-duration: 500ms; } .kor-fade-animation { transform-style: preserve-3d; display: block; animation-name: kor-fade; animation-duration: 500ms; }', '', function(opts) {
var mount_page, self;

self = this;

window.kor = {
  url: self.opts.baseUrl || '',
  bus: riot.observable(),
  load_session: function() {
    return $.ajax({
      type: 'get',
      url: kor.url + "/api/1.0/info",
      success: function(data) {
        kor.info = data;
        return kor.bus.trigger('data.info');
      }
    });
  },
  login: function(username, password) {
    console.log(arguments);
    return $.ajax({
      type: 'post',
      url: kor.url + "/login",
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(data) {
        return kor.load_session();
      }
    });
  },
  logout: function() {
    return $.ajax({
      type: 'delete',
      url: kor.url + "/logout",
      success: function() {
        return kor.load_session();
      }
    });
  }
};

riot.mixin({
  kor: kor
});

$.extend($.ajaxSettings, {
  contentType: 'application/json',
  dataType: 'json',
  error: function(request) {
    console.log(request);
    return kor.bus.trigger('notify', JSON.parse(request.response));
  }
});

mount_page = function(tag) {
  var element;
  if (self.mounted_page !== tag) {
    if (self.page_tag) {
      self.page_tag.unmount(true);
    }
    element = $(self.root).find('kor-page');
    self.page_tag = (riot.mount(element[0], tag))[0];
    element.detach();
    $(self['page-container']).append(element);
    return self.mounted_page = tag;
  }
};

self.on('mount', function() {
  mount_page('kor-loading');
  return kor.load_session();
});

kor.bus.on('page.welcome', function() {
  return mount_page('kor-welcome');
});

kor.bus.on('page.login', function() {
  return mount_page('kor-login');
});

kor.bus.on('page.entity', function() {
  return mount_page('kor-entity');
});

kor.bus.on('page.search', function() {
  return mount_page('kor-search');
});
});
riot.tag2('kor-entity', '  <span>Entity X</span>\n', '', '', function(opts) {
});
riot.tag2('kor-js-extensions', '', '', '', function(opts) {
var self;

self = this;
});
riot.tag2('kor-loading', '  <span>... loading ...</span>\n', '', '', function(opts) {
});
riot.tag2('kor-login', '  <div class="row">\n    <div class="col-md-3 col-md-offset-4">\n      <div class="panel panel-default">\n        <div class="panel-heading">Login</div>\n        <div class="panel-body">\n          <form class="form" method="POST" onsubmit="{submit}">\n            <div class="control-group">\n              <label for="kor-login-form-username">Username</label>\n              <input type="text" name="username" class="form-control" id="kor-login-form-username">\n            </div>\n            <div class="control-group">\n              <label for="kor-login-form-password">Password</label>\n              <input type="password" name="password" class="form-control" id="kor-login-form-password">\n            </div>\n            <div class="form-group text-right"></div>\n              <input type="submit" class="form-control btn btn-default">\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n', '', '', function(opts) {
var self;

self = this;

self.on('mount', function() {
  return $(self.root).find('input')[0].focus();
});

self.submit = function(event) {
  event.preventDefault();
  return kor.login($(self['kor-login-form-username']).val(), $(self['kor-login-form-password']).val());
};
});
riot.tag2('kor-notifications', '\n  <ul>\n    <li each="{data in messages}" class="bg-warning {kor-fade-animation: data.remove}" onanimationend="{parent.animend}">\n      <i class="glyphicon glyphicon-exclamation-sign"></i>\n      {data.message}\n    </li>\n  </ul>\n', 'kor-notifications ul { perspective: 1000px; position: absolute; top: 0px; right: 0px; } kor-notifications ul li { padding: 1rem; list-style-type: none; }', '', function(opts) {
var fading, self;

self = this;

self.messages = [];

self.history = [];

self.animend = function(event) {
  var i;
  i = self.messages.indexOf(event.item.data);
  self.history.push(self.messages[i]);
  self.messages.splice(i, 1);
  return self.update();
};

fading = function(data) {
  self.messages.push(data);
  self.update();
  return setTimeout((function() {
    data.remove = true;
    return self.update();
  }), 5000);
};

kor.bus.on('notify', function(data) {
  var type;
  type = data.type || 'default';
  if (type === 'default') {
    fading(data);
  }
  return self.update();
});
});
riot.tag2('kor-router', '', '', '', function(opts) {
var routing, self;

self = this;

routing = {
  path: function() {
    var m;
    if (m = document.location.hash.match(/\#([^?]+)/)) {
      return "" + m[1];
    } else {
      return void 0;
    }
  },
  query: function(params) {
    var k, qs, result, v;
    if (params) {
      result = {};
      $.extend(result, route.query(), params);
      qs = [];
      for (k in result) {
        v = result[k];
        if (result[k] !== null) {
          qs.push(k + "=" + v);
        }
      }
      route((routing.path()) + "?" + (qs.join('&')));
    }
    return route.query();
  },
  state: {
    update: function(values) {
      var k, old_state, v;
      if (values == null) {
        values = {};
      }
      old_state = routing.state.get();
      for (k in values) {
        v = values[k];
        if (v === null) {
          delete old_state[k];
        } else {
          old_state[k] = v;
        }
      }
      return routing.state.set(old_state);
    },
    get: function(what) {
      var base, json;
      switch (what) {
        case 'base':
          return routing.query()['q'];
        case 'json':
          if (base = routing.state.get('base')) {
            return routing.state.unpack(base);
          } else {
            return '{}';
          }
          break;
        default:
          if (json = routing.state.get('json')) {
            return routing.state.deserialize(json);
          } else {
            return {};
          }
      }
    },
    set: function(values) {
      var base, json;
      if (values == null) {
        values = null;
      }
      if (values === null || values === {}) {
        return routing.query({
          q: null
        });
      } else {
        if (routing.state.serialize(values) === '{}') {
          return routing.query({
            q: null
          });
        } else {
          json = routing.state.serialize(values);
          base = routing.state.pack(json);
          return routing.query({
            q: base
          });
        }
      }
    },
    serialize: function(data) {
      return JSON.stringify(data);
    },
    deserialize: function(str) {
      return JSON.parse(str);
    },
    pack: function(json) {
      if (json == null) {
        json = {};
      }
      return btoa(json);
    },
    unpack: function(str) {
      return atob(str);
    }
  },
  register: function() {
    var context, old_state;
    context = route.create();
    old_state = void 0;
    return context('..', function() {
      var new_state;
      new_state = routing.state.get('base');
      if (new_state !== old_state) {
        self.kor.bus.trigger('query.data', routing.state.get());
        return old_state = new_state;
      }
    });
  }
};

self.kor.routing = routing;

routing.register();

kor.bus.on('data.info', function() {
  if (self.route) {
    self.route.stop();
  }
  if (kor.info.session.user) {
    self.route = route.create();
    self.route('welcome', function() {
      return kor.bus.trigger('page.welcome');
    });
    self.route('search..', function() {
      return kor.bus.trigger('page.search');
    });
    self.route('entities/*', function(id) {
      return kor.bus.trigger('page.entity', {
        id: id
      });
    });
    self.route('logout', function() {
      return kor.logout();
    });
    return route.exec();
  } else {
    return kor.bus.trigger('page.login');
  }
});

route.start();
});
riot.tag2('kor-search', '\n  <h1>Search</h1>\n\n  <form class="form">\n    <div class="row">\n      <div class="col-md-3">\n        <div class="form-group">\n          <input type="text" name="terms" placeholder="fulltext search ..." class="form-control" id="kor-search-form-terms" onchange="{form_to_url}" value="{params.terms}">\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-12 collections">\n        <button class="btn btn-default btn-xs allnone" onclick="{allnone}">all/none</button>\n\n        <div class="checkbox-inline" each="{collection in collections}">\n          <label>\n            <input type="checkbox" value="{collection.id}" __checked="{parent.is_collection_checked(collection)}" onchange="{parent.form_to_url}">\n            {collection.name}\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-md-12 kinds">\n        <button class="btn btn-default btn-xs allnone" onclick="{allnone}">all/none</button>\n\n        <div class="checkbox-inline" each="{kind in kinds}">\n          <label>\n            <input type="checkbox" value="{kind.id}" __checked="{parent.is_kind_checked(kind)}" onchange="{parent.form_to_url}">\n            {kind.plural_name}\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-md-3 kinds" each="{field in fields}">\n        <div class="form-group">\n          <input type="text" name="{field.name}" placeholder="{field.search_label}" class="kor-dataset-field form-control" id="kor-search-form-dataset-{field.name}" onchange="{parent.form_to_url}" value="{parent.params.dataset[field.name]}">\n        </div>\n      </div>\n    </div>\n  </form>\n', 'kor-search .allnone, [data-is=\'kor-search\'] .allnone { margin-right: 1rem; margin-top: -3px; }', '', function(opts) {
var self;

self = this;

window.x = this;

self.params = {};

self.on('mount', function() {
  $.ajax({
    type: 'get',
    url: kor.url + "/kinds",
    success: function(data) {
      self.kinds = data;
      return self.update();
    }
  });
  $.ajax({
    type: 'get',
    url: kor.url + "/collections",
    success: function(data) {
      self.collections = data;
      return self.update();
    }
  });
  self.url_to_params();
  return self.update();
});

self.kor.bus.on('query.data', function() {
  self.url_to_params();
  return self.update();
});

self.is_kind_checked = function(kind) {
  return self.params['kind_ids'] === void 0 || self.params['kind_ids'].indexOf(kind.id) > -1;
};

self.is_collection_checked = function(collection) {
  return self.params['collection_ids'] === void 0 || self.params['collection_ids'].indexOf(collection.id) > -1;
};

self.url_to_params = function() {
  self.params = self.kor.routing.state.get();
  self.load_fields();
  return self.update();
};

self.form_to_url = function() {
  var cb, collection_ids, i, j, kind_ids, len, len1, ref, ref1;
  kind_ids = [];
  ref = $(self.root).find('.kinds input[type=checkbox]:checked');
  for (i = 0, len = ref.length; i < len; i++) {
    cb = ref[i];
    kind_ids.push(parseInt($(cb).val()));
  }
  collection_ids = [];
  ref1 = $(self.root).find('.collections input[type=checkbox]:checked');
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    cb = ref1[j];
    collection_ids.push(parseInt($(cb).val()));
  }
  return self.kor.routing.state.update({
    terms: $(x.root).find('[name=terms]').val(),
    collection_ids: collection_ids,
    kind_ids: kind_ids
  });
};

self.load_fields = function() {
  var id;
  if (self.params.kind_ids.length === 1) {
    id = self.params.kind_ids[0];
    return $.ajax({
      type: 'get',
      url: kor.url + "/kinds/" + id + "/fields",
      success: function(data) {
        console.log(data);
        self.fields = data;
        return self.update();
      }
    });
  } else {
    return self.fields = [];
  }
};

self.allnone = function(event) {
  var box, boxes, i, len;
  event.preventDefault();
  boxes = $(event.target).parent().find('input[type=checkbox]');
  for (i = 0, len = boxes.length; i < len; i++) {
    box = boxes[i];
    if (!$(box).is(':checked')) {
      boxes.prop('checked', true);
      self.form_to_url();
      return;
    }
  }
  boxes.prop('checked', null);
  return self.form_to_url();
};
});
riot.tag2('kor-welcome', '  <h2>Welcome</h2>\n', '', '', function(opts) {
});