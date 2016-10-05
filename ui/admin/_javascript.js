!function(e,t){"use strict";function n(e,t){for(var n,i=[],r=0;r<e.length;++r){if(n=s[e[r]]||o(e[r]),!n)throw"module definition dependecy not found: "+e[r];i.push(n)}t.apply(null,i)}function i(e,i,r){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(i===t)throw"invalid module definition, dependencies must be specified";if(r===t)throw"invalid module definition, definition function must be specified";n(i,function(){s[e]=r.apply(null,arguments)})}function r(e){return!!s[e]}function o(t){for(var n=e,i=t.split(/[.\/]/),r=0;r<i.length;++r){if(!n[i[r]])return;n=n[i[r]]}return n}function a(n){for(var i=0;i<n.length;i++){for(var r=e,o=n[i],a=o.split(/[.\/]/),u=0;u<a.length-1;++u)r[a[u]]===t&&(r[a[u]]={}),r=r[a[u]];r[a[a.length-1]]=s[o]}}var s={},u="moxie/core/utils/Basic",c="moxie/core/utils/Env",l="moxie/core/I18n",d="moxie/core/utils/Mime",h="moxie/core/utils/Dom",f="moxie/core/Exceptions",p="moxie/core/EventTarget",m="moxie/runtime/Runtime",g="moxie/runtime/RuntimeClient",v="moxie/file/FileInput",w="moxie/core/utils/Encode",y="moxie/file/Blob",E="moxie/file/File",_="moxie/file/FileDrop",b="moxie/file/FileReader",x="moxie/core/utils/Url",R="moxie/runtime/RuntimeTarget",A="moxie/file/FileReaderSync",I="moxie/xhr/FormData",T="moxie/xhr/XMLHttpRequest",S="moxie/runtime/Transporter",O="moxie/image/Image",D="moxie/runtime/html5/Runtime",N="moxie/core/utils/Events",L="moxie/runtime/html5/file/FileInput",C="moxie/runtime/html5/file/Blob",M="moxie/runtime/html5/file/FileDrop",F="moxie/runtime/html5/file/FileReader",P="moxie/runtime/html5/xhr/XMLHttpRequest",H="moxie/runtime/html5/utils/BinaryReader",B="moxie/runtime/html5/image/JPEGHeaders",k="moxie/runtime/html5/image/ExifParser",U="moxie/runtime/html5/image/JPEG",G="moxie/runtime/html5/image/PNG",z="moxie/runtime/html5/image/ImageInfo",q="moxie/runtime/html5/image/MegaPixel",j="moxie/runtime/html5/image/Image",X="moxie/runtime/flash/Runtime",V="moxie/runtime/flash/file/FileInput",W="moxie/runtime/flash/file/Blob",Y="moxie/runtime/flash/file/FileReader",$="moxie/runtime/flash/file/FileReaderSync",J="moxie/runtime/flash/xhr/XMLHttpRequest",Z="moxie/runtime/flash/runtime/Transporter",K="moxie/runtime/flash/image/Image",Q="moxie/runtime/silverlight/Runtime",ee="moxie/runtime/silverlight/file/FileInput",te="moxie/runtime/silverlight/file/Blob",ne="moxie/runtime/silverlight/file/FileDrop",ie="moxie/runtime/silverlight/file/FileReader",re="moxie/runtime/silverlight/file/FileReaderSync",oe="moxie/runtime/silverlight/xhr/XMLHttpRequest",ae="moxie/runtime/silverlight/runtime/Transporter",se="moxie/runtime/silverlight/image/Image",ue="moxie/runtime/html4/Runtime",ce="moxie/runtime/html4/file/FileInput",le="moxie/runtime/html4/file/FileReader",de="moxie/runtime/html4/xhr/XMLHttpRequest",he="moxie/runtime/html4/image/Image";i(u,[],function(){var e=function(e){var t;return e===t?"undefined":null===e?"null":e.nodeType?"node":{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},t=function(i){var r;return n(arguments,function(o,s){s>0&&n(o,function(n,o){n!==r&&(e(i[o])===e(n)&&~a(e(n),["array","object"])?t(i[o],n):i[o]=n)})}),i},n=function(t,n){var i,r,o,a;if(t)if("number"===e(t.length)){for(o=0,i=t.length;i>o;o++)if(n(t[o],o)===!1)return}else if("object"===e(t))for(r in t)if(t.hasOwnProperty(r)&&n(t[r],r)===!1)return},i=function(t){var n;if(!t||"object"!==e(t))return!0;for(n in t)return!1;return!0},r=function(t,n){function i(r){"function"===e(t[r])&&t[r](function(e){++r<o&&!e?i(r):n(e)})}var r=0,o=t.length;"function"!==e(n)&&(n=function(){}),t&&t.length||n(),i(r)},o=function(e,t){var i=0,r=e.length,o=new Array(r);n(e,function(e,n){e(function(e){if(e)return t(e);var a=[].slice.call(arguments);a.shift(),o[n]=a,i++,i===r&&(o.unshift(null),t.apply(this,o))})})},a=function(e,t){if(t){if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e);for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n}return-1},s=function(t,n){var i=[];"array"!==e(t)&&(t=[t]),"array"!==e(n)&&(n=[n]);for(var r in t)-1===a(t[r],n)&&i.push(t[r]);return i.length?i:!1},u=function(e,t){var i=[];return n(e,function(e){-1!==a(e,t)&&i.push(e)}),i.length?i:null},c=function(e){var t,n=[];for(t=0;t<e.length;t++)n[t]=e[t];return n},l=function(){var e=0;return function(t){var n=(new Date).getTime().toString(32),i;for(i=0;5>i;i++)n+=Math.floor(65535*Math.random()).toString(32);return(t||"o_")+n+(e++).toString(32)}}(),d=function(e){return e?String.prototype.trim?String.prototype.trim.call(e):e.toString().replace(/^\s*/,"").replace(/\s*$/,""):e},h=function(e){if("string"!=typeof e)return e;var t={t:1099511627776,g:1073741824,m:1048576,k:1024},n;return e=/^([0-9\.]+)([tmgk]?)$/.exec(e.toLowerCase().replace(/[^0-9\.tmkg]/g,"")),n=e[2],e=+e[1],t.hasOwnProperty(n)&&(e*=t[n]),Math.floor(e)},f=function(t){var n=[].slice.call(arguments,1);return t.replace(/%[a-z]/g,function(){var t=n.shift();return"undefined"!==e(t)?t:""})};return{guid:l,typeOf:e,extend:t,each:n,isEmptyObj:i,inSeries:r,inParallel:o,inArray:a,arrayDiff:s,arrayIntersect:u,toArray:c,trim:d,sprintf:f,parseSizeStr:h}}),i(c,[u],function(e){function t(e,t,n){var i=0,r=0,o=0,a={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1},s=function(e){return e=(""+e).replace(/[_\-+]/g,"."),e=e.replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,"."),e.length?e.split("."):[-8]},u=function(e){return e?isNaN(e)?a[e]||-7:parseInt(e,10):0};for(e=s(e),t=s(t),r=Math.max(e.length,t.length),i=0;r>i;i++)if(e[i]!=t[i]){if(e[i]=u(e[i]),t[i]=u(t[i]),e[i]<t[i]){o=-1;break}if(e[i]>t[i]){o=1;break}}if(!n)return o;switch(n){case">":case"gt":return o>0;case">=":case"ge":return o>=0;case"<=":case"le":return 0>=o;case"==":case"=":case"eq":return 0===o;case"<>":case"!=":case"ne":return 0!==o;case"":case"<":case"lt":return 0>o;default:return null}}var n=function(e){var t="",n="?",i="function",r="undefined",o="object",a="major",s="model",u="name",c="type",l="vendor",d="version",h="architecture",f="console",p="mobile",m="tablet",g={has:function(e,t){return-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()}},v={rgx:function(){for(var t,n=0,a,s,u,c,l,d,h=arguments;n<h.length;n+=2){var f=h[n],p=h[n+1];if(typeof t===r){t={};for(u in p)c=p[u],typeof c===o?t[c[0]]=e:t[c]=e}for(a=s=0;a<f.length;a++)if(l=f[a].exec(this.getUA())){for(u=0;u<p.length;u++)d=l[++s],c=p[u],typeof c===o&&c.length>0?2==c.length?typeof c[1]==i?t[c[0]]=c[1].call(this,d):t[c[0]]=c[1]:3==c.length?typeof c[1]!==i||c[1].exec&&c[1].test?t[c[0]]=d?d.replace(c[1],c[2]):e:t[c[0]]=d?c[1].call(this,d,c[2]):e:4==c.length&&(t[c[0]]=d?c[3].call(this,d.replace(c[1],c[2])):e):t[c]=d?d:e;break}if(l)break}return t},str:function(t,i){for(var r in i)if(typeof i[r]===o&&i[r].length>0){for(var a=0;a<i[r].length;a++)if(g.has(i[r][a],t))return r===n?e:r}else if(g.has(i[r],t))return r===n?e:r;return t}},w={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",RT:"ARM"}}}},y={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[u,d],[/\s(opr)\/([\w\.]+)/i],[[u,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i],[u,d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[u,"IE"],d],[/(edge)\/((\d+)?[\w\.]+)/i],[u,d],[/(yabrowser)\/([\w\.]+)/i],[[u,"Yandex"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],d],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[u,d],[/(dolfin)\/([\w\.]+)/i],[[u,"Dolphin"],d],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[u,"Chrome"],d],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[d,[u,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[d,[u,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[d,[u,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[u,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[d,v.str,w.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[u,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,d]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[u,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,d],[/rv\:([\w\.]+).*(gecko)/i],[d,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[u,[d,v.str,w.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[d,v.str,w.os.windows.version]],[/\((bb)(10);/i],[[u,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[u,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[u,"Symbian"],d],[/\((series40);/i],[u],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"],d],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[u,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],d],[/(sunos)\s?([\w\.]+\d)*/i],[[u,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[u,d],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[u,"iOS"],[d,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[u,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[u,d]]},E=function(e){var n=e||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:t);this.getBrowser=function(){return v.rgx.apply(this,y.browser)},this.getEngine=function(){return v.rgx.apply(this,y.engine)},this.getOS=function(){return v.rgx.apply(this,y.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this.setUA(n)};return E}(),i=function(){var t={define_property:function(){return!1}(),create_canvas:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}(),return_response_type:function(t){try{if(-1!==e.inArray(t,["","text","document"]))return!0;if(window.XMLHttpRequest){var n=new XMLHttpRequest;if(n.open("get","/"),"responseType"in n)return n.responseType=t,n.responseType===t}}catch(i){}return!1},use_data_uri:function(){var e=new Image;return e.onload=function(){t.use_data_uri=1===e.width&&1===e.height},setTimeout(function(){e.src="data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},1),!1}(),use_data_uri_over32kb:function(){return t.use_data_uri&&("IE"!==o.browser||o.version>=9)},use_data_uri_of:function(e){return t.use_data_uri&&33e3>e||t.use_data_uri_over32kb()},use_fileinput:function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=document.createElement("input");return e.setAttribute("type","file"),!e.disabled}};return function(n){var i=[].slice.call(arguments);return i.shift(),"function"===e.typeOf(t[n])?t[n].apply(this,i):!!t[n]}}(),r=(new n).getResult(),o={can:i,uaParser:n,browser:r.browser.name,version:r.browser.version,os:r.os.name,osVersion:r.os.version,verComp:t,swf_url:"../flash/Moxie.swf",xap_url:"../silverlight/Moxie.xap",global_event_dispatcher:"moxie.core.EventTarget.instance.dispatchEvent"};return o.OS=o.os,o}),i(l,[u],function(e){var t={};return{addI18n:function(n){return e.extend(t,n)},translate:function(e){return t[e]||e},_:function(e){return this.translate(e)},sprintf:function(t){var n=[].slice.call(arguments,1);return t.replace(/%[a-z]/g,function(){var t=n.shift();return"undefined"!==e.typeOf(t)?t:""})}}}),i(d,[u,l],function(e,t){var n="application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",i={mimes:{},extensions:{},addMimeType:function(e){var t=e.split(/,/),n,i,r;for(n=0;n<t.length;n+=2){for(r=t[n+1].split(/ /),i=0;i<r.length;i++)this.mimes[r[i]]=t[n];this.extensions[t[n]]=r}},extList2mimes:function(t,n){var i=this,r,o,a,s,u=[];for(o=0;o<t.length;o++)for(r=t[o].extensions.split(/\s*,\s*/),a=0;a<r.length;a++){if("*"===r[a])return[];if(s=i.mimes[r[a]],s&&-1===e.inArray(s,u)&&u.push(s),n&&/^\w+$/.test(r[a]))u.push("."+r[a]);else if(!s)return[]}return u},mimes2exts:function(t){var n=this,i=[];return e.each(t,function(t){if("*"===t)return i=[],!1;var r=t.match(/^(\w+)\/(\*|\w+)$/);r&&("*"===r[2]?e.each(n.extensions,function(e,t){new RegExp("^"+r[1]+"/").test(t)&&[].push.apply(i,n.extensions[t])}):n.extensions[t]&&[].push.apply(i,n.extensions[t]))}),i},mimes2extList:function(n){var i=[],r=[];return"string"===e.typeOf(n)&&(n=e.trim(n).split(/\s*,\s*/)),r=this.mimes2exts(n),i.push({title:t.translate("Files"),extensions:r.length?r.join(","):"*"}),i.mimes=n,i},getFileExtension:function(e){var t=e&&e.match(/\.([^.]+)$/);return t?t[1].toLowerCase():""},getFileMime:function(e){return this.mimes[this.getFileExtension(e)]||""}};return i.addMimeType(n),i}),i(h,[c],function(e){var t=function(e){return"string"!=typeof e?e:document.getElementById(e)},n=function(e,t){if(!e.className)return!1;var n=new RegExp("(^|\\s+)"+t+"(\\s+|$)");return n.test(e.className)},i=function(e,t){n(e,t)||(e.className=e.className?e.className.replace(/\s+$/,"")+" "+t:t)},r=function(e,t){if(e.className){var n=new RegExp("(^|\\s+)"+t+"(\\s+|$)");e.className=e.className.replace(n,function(e,t,n){return" "===t&&" "===n?" ":""})}},o=function(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null)[t]:void 0},a=function(t,n){function i(e){var t,n,i=0,r=0;return e&&(n=e.getBoundingClientRect(),t="CSS1Compat"===s.compatMode?s.documentElement:s.body,i=n.left+t.scrollLeft,r=n.top+t.scrollTop),{x:i,y:r}}var r=0,o=0,a,s=document,u,c;if(t=t,n=n||s.body,t&&t.getBoundingClientRect&&"IE"===e.browser&&(!s.documentMode||s.documentMode<8))return u=i(t),c=i(n),{x:u.x-c.x,y:u.y-c.y};for(a=t;a&&a!=n&&a.nodeType;)r+=a.offsetLeft||0,o+=a.offsetTop||0,a=a.offsetParent;for(a=t.parentNode;a&&a!=n&&a.nodeType;)r-=a.scrollLeft||0,o-=a.scrollTop||0,a=a.parentNode;return{x:r,y:o}},s=function(e){return{w:e.offsetWidth||e.clientWidth,h:e.offsetHeight||e.clientHeight}};return{get:t,hasClass:n,addClass:i,removeClass:r,getStyle:o,getPos:a,getSize:s}}),i(f,[u],function(e){function t(e,t){var n;for(n in e)if(e[n]===t)return n;return null}return{RuntimeError:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": RuntimeError "+this.code}var i={NOT_INIT_ERR:1,NOT_SUPPORTED_ERR:9,JS_ERR:4};return e.extend(n,i),n.prototype=Error.prototype,n}(),OperationNotAllowedException:function(){function t(e){this.code=e,this.name="OperationNotAllowedException"}return e.extend(t,{NOT_ALLOWED_ERR:1}),t.prototype=Error.prototype,t}(),ImageError:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": ImageError "+this.code}var i={WRONG_FORMAT:1,MAX_RESOLUTION_ERR:2,INVALID_META_ERR:3};return e.extend(n,i),n.prototype=Error.prototype,n}(),FileException:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": FileException "+this.code}var i={NOT_FOUND_ERR:1,SECURITY_ERR:2,ABORT_ERR:3,NOT_READABLE_ERR:4,ENCODING_ERR:5,NO_MODIFICATION_ALLOWED_ERR:6,INVALID_STATE_ERR:7,SYNTAX_ERR:8};return e.extend(n,i),n.prototype=Error.prototype,n}(),DOMException:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": DOMException "+this.code}var i={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};return e.extend(n,i),n.prototype=Error.prototype,n}(),EventException:function(){function t(e){this.code=e,this.name="EventException"}return e.extend(t,{UNSPECIFIED_EVENT_TYPE_ERR:0}),t.prototype=Error.prototype,t}()}}),i(p,[c,f,u],function(e,t,n){function i(){var e={};n.extend(this,{uid:null,init:function(){this.uid||(this.uid=n.guid("uid_"))},addEventListener:function(t,i,r,o){var a=this,s;return this.hasOwnProperty("uid")||(this.uid=n.guid("uid_")),t=n.trim(t),/\s/.test(t)?void n.each(t.split(/\s+/),function(e){a.addEventListener(e,i,r,o)}):(t=t.toLowerCase(),r=parseInt(r,10)||0,s=e[this.uid]&&e[this.uid][t]||[],s.push({fn:i,priority:r,scope:o||this}),e[this.uid]||(e[this.uid]={}),void(e[this.uid][t]=s))},hasEventListener:function(t){var n=t?e[this.uid]&&e[this.uid][t]:e[this.uid];return n?n:!1},removeEventListener:function(t,i){t=t.toLowerCase();var r=e[this.uid]&&e[this.uid][t],o;if(r){if(i){for(o=r.length-1;o>=0;o--)if(r[o].fn===i){r.splice(o,1);break}}else r=[];r.length||(delete e[this.uid][t],n.isEmptyObj(e[this.uid])&&delete e[this.uid])}},removeAllEventListeners:function(){e[this.uid]&&delete e[this.uid]},dispatchEvent:function(i){var r,o,a,s,u={},c=!0,l;if("string"!==n.typeOf(i)){if(s=i,"string"!==n.typeOf(s.type))throw new t.EventException(t.EventException.UNSPECIFIED_EVENT_TYPE_ERR);i=s.type,s.total!==l&&s.loaded!==l&&(u.total=s.total,u.loaded=s.loaded),u.async=s.async||!1}if(-1!==i.indexOf("::")?!function(e){r=e[0],i=e[1]}(i.split("::")):r=this.uid,i=i.toLowerCase(),o=e[r]&&e[r][i]){o.sort(function(e,t){return t.priority-e.priority}),a=[].slice.call(arguments),a.shift(),u.type=i,a.unshift(u);var d=[];n.each(o,function(e){a[0].target=e.scope,u.async?d.push(function(t){setTimeout(function(){t(e.fn.apply(e.scope,a)===!1)},1)}):d.push(function(t){t(e.fn.apply(e.scope,a)===!1)})}),d.length&&n.inSeries(d,function(e){c=!e})}return c},bind:function(){this.addEventListener.apply(this,arguments)},unbind:function(){this.removeEventListener.apply(this,arguments)},unbindAll:function(){this.removeAllEventListeners.apply(this,arguments)},trigger:function(){return this.dispatchEvent.apply(this,arguments)},handleEventProps:function(e){var t=this;this.bind(e.join(" "),function(e){var t="on"+e.type.toLowerCase();"function"===n.typeOf(this[t])&&this[t].apply(this,arguments)}),n.each(e,function(e){e="on"+e.toLowerCase(e),"undefined"===n.typeOf(t[e])&&(t[e]=null)})}})}return i.instance=new i,i}),i(m,[c,u,h,p],function(e,t,n,i){function r(e,i,o,s,u){var c=this,l,d=t.guid(i+"_"),h=u||"browser";e=e||{},a[d]=this,o=t.extend({access_binary:!1,access_image_binary:!1,display_media:!1,do_cors:!1,drag_and_drop:!1,filter_by_extension:!0,resize_image:!1,report_upload_progress:!1,return_response_headers:!1,return_response_type:!1,return_status_code:!0,send_custom_headers:!1,select_file:!1,select_folder:!1,select_multiple:!0,send_binary_string:!1,send_browser_cookies:!0,send_multipart:!0,slice_blob:!1,stream_upload:!1,summon_file_dialog:!1,upload_filesize:!0,use_http_method:!0},o),e.preferred_caps&&(h=r.getMode(s,e.preferred_caps,h)),l=function(){var e={};return{exec:function(t,n,i,r){return l[n]&&(e[t]||(e[t]={context:this,instance:new l[n]}),e[t].instance[i])?e[t].instance[i].apply(this,r):void 0},removeInstance:function(t){delete e[t]},removeAllInstances:function(){var n=this;t.each(e,function(e,i){"function"===t.typeOf(e.instance.destroy)&&e.instance.destroy.call(e.context),n.removeInstance(i)})}}}(),t.extend(this,{initialized:!1,uid:d,type:i,mode:r.getMode(s,e.required_caps,h),shimid:d+"_container",clients:0,options:e,can:function(e,n){var i=arguments[2]||o;if("string"===t.typeOf(e)&&"undefined"===t.typeOf(n)&&(e=r.parseCaps(e)),"object"===t.typeOf(e)){for(var a in e)if(!this.can(a,e[a],i))return!1;return!0}return"function"===t.typeOf(i[e])?i[e].call(this,n):n===i[e]},getShimContainer:function(){var e,i=n.get(this.shimid);return i||(e=this.options.container?n.get(this.options.container):document.body,i=document.createElement("div"),i.id=this.shimid,i.className="moxie-shim moxie-shim-"+this.type,t.extend(i.style,{position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"}),e.appendChild(i),e=null),i},getShim:function(){return l},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec.call(this,this.uid,e,t,n)},exec:function(e,t){var n=[].slice.call(arguments,2);return c[e]&&c[e][t]?c[e][t].apply(this,n):c.shimExec.apply(this,arguments)},destroy:function(){if(c){var e=n.get(this.shimid);e&&e.parentNode.removeChild(e),l&&l.removeAllInstances(),this.unbindAll(),delete a[this.uid],this.uid=null,d=c=l=e=null}}}),this.mode&&e.required_caps&&!this.can(e.required_caps)&&(this.mode=!1)}var o={},a={};return r.order="html5,flash,silverlight,html4",r.getRuntime=function(e){return a[e]?a[e]:!1},r.addConstructor=function(e,t){t.prototype=i.instance,o[e]=t},r.getConstructor=function(e){return o[e]||null},r.getInfo=function(e){var t=r.getRuntime(e);return t?{uid:t.uid,type:t.type,mode:t.mode,can:function(){return t.can.apply(t,arguments)}}:null},r.parseCaps=function(e){var n={};return"string"!==t.typeOf(e)?e||{}:(t.each(e.split(","),function(e){n[e]=!0}),n)},r.can=function(e,t){var n,i=r.getConstructor(e),o;return i?(n=new i({required_caps:t}),o=n.mode,n.destroy(),!!o):!1},r.thatCan=function(e,t){var n=(t||r.order).split(/\s*,\s*/);for(var i in n)if(r.can(n[i],e))return n[i];return null},r.getMode=function(e,n,i){var r=null;if("undefined"===t.typeOf(i)&&(i="browser"),n&&!t.isEmptyObj(e)){if(t.each(n,function(n,i){if(e.hasOwnProperty(i)){var o=e[i](n);if("string"==typeof o&&(o=[o]),r){if(!(r=t.arrayIntersect(r,o)))return r=!1}else r=o}}),r)return-1!==t.inArray(i,r)?i:r[0];if(r===!1)return!1}return i},r.capTrue=function(){return!0},r.capFalse=function(){return!1},r.capTest=function(e){return function(){return!!e}},r}),i(g,[c,f,u,m],function(e,t,n,i){return function r(){var e;n.extend(this,{connectRuntime:function(r){function o(n){var s,u;return n.length?(s=n.shift().toLowerCase(),(u=i.getConstructor(s))?(e=new u(r),e.bind("Init",function(){e.initialized=!0,setTimeout(function(){e.clients++,a.trigger("RuntimeInit",e)},1)}),e.bind("Error",function(){e.destroy(),o(n)}),e.mode?void e.init():void e.trigger("Error")):void o(n)):(a.trigger("RuntimeError",new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)),void(e=null))}var a=this,s;if("string"===n.typeOf(r)?s=r:"string"===n.typeOf(r.ruid)&&(s=r.ruid),s){if(e=i.getRuntime(s))return e.clients++,e;throw new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)}o((r.runtime_order||i.order).split(/\s*,\s*/))},disconnectRuntime:function(){e&&--e.clients<=0&&e.destroy(),e=null},getRuntime:function(){return e&&e.uid?e:e=null},exec:function(){return e?e.exec.apply(this,arguments):null}})}}),i(v,[u,c,d,h,f,p,l,m,g],function(e,t,n,i,r,o,a,s,u){function c(t){var o=this,c,d,h;if(-1!==e.inArray(e.typeOf(t),["string","node"])&&(t={browse_button:t}),d=i.get(t.browse_button),!d)throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);h={accept:[{title:a.translate("All Files"),extensions:"*"}],name:"file",multiple:!1,required_caps:!1,container:d.parentNode||document.body},t=e.extend({},h,t),"string"==typeof t.required_caps&&(t.required_caps=s.parseCaps(t.required_caps)),"string"==typeof t.accept&&(t.accept=n.mimes2extList(t.accept)),c=i.get(t.container),c||(c=document.body),"static"===i.getStyle(c,"position")&&(c.style.position="relative"),c=d=null,u.call(o),e.extend(o,{uid:e.guid("uid_"),ruid:null,shimid:null,files:null,init:function(){o.bind("RuntimeInit",function(n,r){o.ruid=r.uid,o.shimid=r.shimid,o.bind("Ready",function(){o.trigger("Refresh")},999),o.bind("Refresh",function(){var n,o,a,s;a=i.get(t.browse_button),s=i.get(r.shimid),a&&(n=i.getPos(a,i.get(t.container)),o=i.getSize(a),s&&e.extend(s.style,{top:n.y+"px",left:n.x+"px",width:o.w+"px",height:o.h+"px"})),s=a=null}),r.exec.call(o,"FileInput","init",t)}),o.connectRuntime(e.extend({},t,{required_caps:{select_file:!0}}))},disable:function(t){var n=this.getRuntime();n&&n.exec.call(this,"FileInput","disable","undefined"===e.typeOf(t)?!0:t)},refresh:function(){o.trigger("Refresh")},destroy:function(){var t=this.getRuntime();t&&(t.exec.call(this,"FileInput","destroy"),this.disconnectRuntime()),"array"===e.typeOf(this.files)&&e.each(this.files,function(e){e.destroy()}),this.files=null,this.unbindAll()}}),this.handleEventProps(l)}var l=["ready","change","cancel","mouseenter","mouseleave","mousedown","mouseup"];return c.prototype=o.instance,c}),i(w,[],function(){var e=function(e){return unescape(encodeURIComponent(e))},t=function(e){return decodeURIComponent(escape(e))},n=function(e,n){if("function"==typeof window.atob)return n?t(window.atob(e)):window.atob(e);var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,o,a,s,u,c,l,d,h=0,f=0,p="",m=[];if(!e)return e;e+="";do s=i.indexOf(e.charAt(h++)),u=i.indexOf(e.charAt(h++)),c=i.indexOf(e.charAt(h++)),l=i.indexOf(e.charAt(h++)),d=s<<18|u<<12|c<<6|l,r=d>>16&255,o=d>>8&255,a=255&d,64==c?m[f++]=String.fromCharCode(r):64==l?m[f++]=String.fromCharCode(r,o):m[f++]=String.fromCharCode(r,o,a);while(h<e.length);return p=m.join(""),n?t(p):p},i=function(t,n){if(n&&(t=e(t)),"function"==typeof window.btoa)return window.btoa(t);var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,o,a,s,u,c,l,d,h=0,f=0,p="",m=[];if(!t)return t;do r=t.charCodeAt(h++),o=t.charCodeAt(h++),a=t.charCodeAt(h++),d=r<<16|o<<8|a,s=d>>18&63,u=d>>12&63,c=d>>6&63,l=63&d,m[f++]=i.charAt(s)+i.charAt(u)+i.charAt(c)+i.charAt(l);while(h<t.length);p=m.join("");var g=t.length%3;return(g?p.slice(0,g-3):p)+"===".slice(g||3)};return{utf8_encode:e,utf8_decode:t,atob:n,btoa:i}}),i(y,[u,w,g],function(e,t,n){function i(o,a){function s(t,n,o){var a,s=r[this.uid];return"string"===e.typeOf(s)&&s.length?(a=new i(null,{type:o,size:n-t}),a.detach(s.substr(t,a.size)),a):null}n.call(this),o&&this.connectRuntime(o),a?"string"===e.typeOf(a)&&(a={data:a}):a={},e.extend(this,{uid:a.uid||e.guid("uid_"),ruid:o,size:a.size||0,type:a.type||"",slice:function(e,t,n){return this.isDetached()?s.apply(this,arguments):this.getRuntime().exec.call(this,"Blob","slice",this.getSource(),e,t,n)},getSource:function(){return r[this.uid]?r[this.uid]:null},detach:function(e){if(this.ruid&&(this.getRuntime().exec.call(this,"Blob","destroy"),this.disconnectRuntime(),this.ruid=null),e=e||"","data:"==e.substr(0,5)){var n=e.indexOf(";base64,");this.type=e.substring(5,n),e=t.atob(e.substring(n+8))}this.size=e.length,r[this.uid]=e},isDetached:function(){return!this.ruid&&"string"===e.typeOf(r[this.uid])},destroy:function(){this.detach(),delete r[this.uid]}}),a.data?this.detach(a.data):r[this.uid]=a}var r={};return i}),i(E,[u,d,y],function(e,t,n){function i(i,r){r||(r={}),n.apply(this,arguments),this.type||(this.type=t.getFileMime(r.name));var o;if(r.name)o=r.name.replace(/\\/g,"/"),o=o.substr(o.lastIndexOf("/")+1);else if(this.type){var a=this.type.split("/")[0];o=e.guid((""!==a?a:"file")+"_"),t.extensions[this.type]&&(o+="."+t.extensions[this.type][0])}e.extend(this,{name:o||e.guid("file_"),relativePath:"",lastModifiedDate:r.lastModifiedDate||(new Date).toLocaleString()})}return i.prototype=n.prototype,i}),i(_,[l,h,f,u,c,E,g,p,d],function(e,t,n,i,r,o,a,s,u){function c(n){var r=this,o;"string"==typeof n&&(n={drop_zone:n}),o={accept:[{title:e.translate("All Files"),extensions:"*"}],required_caps:{drag_and_drop:!0}},n="object"==typeof n?i.extend({},o,n):o,n.container=t.get(n.drop_zone)||document.body,"static"===t.getStyle(n.container,"position")&&(n.container.style.position="relative"),"string"==typeof n.accept&&(n.accept=u.mimes2extList(n.accept)),a.call(r),i.extend(r,{uid:i.guid("uid_"),ruid:null,files:null,init:function(){r.bind("RuntimeInit",function(e,t){r.ruid=t.uid,t.exec.call(r,"FileDrop","init",n),r.dispatchEvent("ready")}),r.connectRuntime(n)},destroy:function(){var e=this.getRuntime();e&&(e.exec.call(this,"FileDrop","destroy"),this.disconnectRuntime()),this.files=null,this.unbindAll()}}),this.handleEventProps(l)}var l=["ready","dragenter","dragleave","drop","error"];return c.prototype=s.instance,c}),i(b,[u,w,f,p,y,g],function(e,t,n,i,r,o){function a(){function i(e,i){var o=this;if(this.trigger("loadstart"),this.readyState===a.LOADING)return this.trigger("error",new n.DOMException(n.DOMException.INVALID_STATE_ERR)),void this.trigger("loadend");if(!(i instanceof r))return this.trigger("error",new n.DOMException(n.DOMException.NOT_FOUND_ERR)),void this.trigger("loadend");if(this.result=null,this.readyState=a.LOADING,i.isDetached()){var s=i.getSource();switch(e){case"readAsText":case"readAsBinaryString":this.result=s;break;case"readAsDataURL":this.result="data:"+i.type+";base64,"+t.btoa(s)}this.readyState=a.DONE,this.trigger("load"),this.trigger("loadend")}else this.connectRuntime(i.ruid),this.exec("FileReader","read",e,i)}o.call(this),e.extend(this,{uid:e.guid("uid_"),readyState:a.EMPTY,result:null,error:null,readAsBinaryString:function(e){i.call(this,"readAsBinaryString",e)},readAsDataURL:function(e){i.call(this,"readAsDataURL",e)},readAsText:function(e){i.call(this,"readAsText",e);
},abort:function(){this.result=null,-1===e.inArray(this.readyState,[a.EMPTY,a.DONE])&&(this.readyState===a.LOADING&&(this.readyState=a.DONE),this.exec("FileReader","abort"),this.trigger("abort"),this.trigger("loadend"))},destroy:function(){this.abort(),this.exec("FileReader","destroy"),this.disconnectRuntime(),this.unbindAll()}}),this.handleEventProps(s),this.bind("Error",function(e,t){this.readyState=a.DONE,this.error=t},999),this.bind("Load",function(e){this.readyState=a.DONE},999)}var s=["loadstart","progress","load","abort","error","loadend"];return a.EMPTY=0,a.LOADING=1,a.DONE=2,a.prototype=i.instance,a}),i(x,[],function(){var e=function(t,n){for(var i=["source","scheme","authority","userInfo","user","pass","host","port","relative","path","directory","file","query","fragment"],r=i.length,o={http:80,https:443},a={},s=/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,u=s.exec(t||"");r--;)u[r]&&(a[i[r]]=u[r]);if(!a.scheme){n&&"string"!=typeof n||(n=e(n||document.location.href)),a.scheme=n.scheme,a.host=n.host,a.port=n.port;var c="";/^[^\/]/.test(a.path)&&(c=n.path,c=/\/[^\/]*\.[^\/]*$/.test(c)?c.replace(/\/[^\/]+$/,"/"):c.replace(/\/?$/,"/")),a.path=c+(a.path||"")}return a.port||(a.port=o[a.scheme]||80),a.port=parseInt(a.port,10),a.path||(a.path="/"),delete a.source,a},t=function(t){var n={http:80,https:443},i="object"==typeof t?t:e(t);return i.scheme+"://"+i.host+(i.port!==n[i.scheme]?":"+i.port:"")+i.path+(i.query?i.query:"")},n=function(t){function n(e){return[e.scheme,e.host,e.port].join("/")}return"string"==typeof t&&(t=e(t)),n(e())===n(t)};return{parseUrl:e,resolveUrl:t,hasSameOrigin:n}}),i(R,[u,g,p],function(e,t,n){function i(){this.uid=e.guid("uid_"),t.call(this),this.destroy=function(){this.disconnectRuntime(),this.unbindAll()}}return i.prototype=n.instance,i}),i(A,[u,g,w],function(e,t,n){return function(){function i(e,t){if(!t.isDetached()){var i=this.connectRuntime(t.ruid).exec.call(this,"FileReaderSync","read",e,t);return this.disconnectRuntime(),i}var r=t.getSource();switch(e){case"readAsBinaryString":return r;case"readAsDataURL":return"data:"+t.type+";base64,"+n.btoa(r);case"readAsText":for(var o="",a=0,s=r.length;s>a;a++)o+=String.fromCharCode(r[a]);return o}}t.call(this),e.extend(this,{uid:e.guid("uid_"),readAsBinaryString:function(e){return i.call(this,"readAsBinaryString",e)},readAsDataURL:function(e){return i.call(this,"readAsDataURL",e)},readAsText:function(e){return i.call(this,"readAsText",e)}})}}),i(I,[f,u,y],function(e,t,n){function i(){var e,i=[];t.extend(this,{append:function(r,o){var a=this,s=t.typeOf(o);o instanceof n?e={name:r,value:o}:"array"===s?(r+="[]",t.each(o,function(e){a.append(r,e)})):"object"===s?t.each(o,function(e,t){a.append(r+"["+t+"]",e)}):"null"===s||"undefined"===s||"number"===s&&isNaN(o)?a.append(r,"false"):i.push({name:r,value:o.toString()})},hasBlob:function(){return!!this.getBlob()},getBlob:function(){return e&&e.value||null},getBlobName:function(){return e&&e.name||null},each:function(n){t.each(i,function(e){n(e.value,e.name)}),e&&n(e.value,e.name)},destroy:function(){e=null,i=[]}})}return i}),i(T,[u,f,p,w,x,m,R,y,A,I,c,d],function(e,t,n,i,r,o,a,s,u,c,l,d){function h(){this.uid=e.guid("uid_")}function f(){function n(e,t){return w.hasOwnProperty(e)?1===arguments.length?l.can("define_property")?w[e]:v[e]:void(l.can("define_property")?w[e]=t:v[e]=t):void 0}function u(t){function i(){B&&(B.destroy(),B=null),s.dispatchEvent("loadend"),s=null}function r(r){B.bind("LoadStart",function(e){n("readyState",f.LOADING),s.dispatchEvent("readystatechange"),s.dispatchEvent(e),O&&s.upload.dispatchEvent(e)}),B.bind("Progress",function(e){n("readyState")!==f.LOADING&&(n("readyState",f.LOADING),s.dispatchEvent("readystatechange")),s.dispatchEvent(e)}),B.bind("UploadProgress",function(e){O&&s.upload.dispatchEvent({type:"progress",lengthComputable:!1,total:e.total,loaded:e.loaded})}),B.bind("Load",function(t){n("readyState",f.DONE),n("status",Number(r.exec.call(B,"XMLHttpRequest","getStatus")||0)),n("statusText",p[n("status")]||""),n("response",r.exec.call(B,"XMLHttpRequest","getResponse",n("responseType"))),~e.inArray(n("responseType"),["text",""])?n("responseText",n("response")):"document"===n("responseType")&&n("responseXML",n("response")),k=r.exec.call(B,"XMLHttpRequest","getAllResponseHeaders"),s.dispatchEvent("readystatechange"),n("status")>0?(O&&s.upload.dispatchEvent(t),s.dispatchEvent(t)):(N=!0,s.dispatchEvent("error")),i()}),B.bind("Abort",function(e){s.dispatchEvent(e),i()}),B.bind("Error",function(e){N=!0,n("readyState",f.DONE),s.dispatchEvent("readystatechange"),D=!0,s.dispatchEvent(e),i()}),r.exec.call(B,"XMLHttpRequest","send",{url:E,method:_,async:y,user:x,password:R,headers:b,mimeType:I,encoding:A,responseType:s.responseType,withCredentials:s.withCredentials,options:H},t)}var s=this;C=(new Date).getTime(),B=new a,"string"==typeof H.required_caps&&(H.required_caps=o.parseCaps(H.required_caps)),H.required_caps=e.extend({},H.required_caps,{return_response_type:s.responseType}),t instanceof c&&(H.required_caps.send_multipart=!0),e.isEmptyObj(b)||(H.required_caps.send_custom_headers=!0),L||(H.required_caps.do_cors=!0),H.ruid?r(B.connectRuntime(H)):(B.bind("RuntimeInit",function(e,t){r(t)}),B.bind("RuntimeError",function(e,t){s.dispatchEvent("RuntimeError",t)}),B.connectRuntime(H))}function g(){n("responseText",""),n("responseXML",null),n("response",null),n("status",0),n("statusText",""),C=M=null}var v=this,w={timeout:0,readyState:f.UNSENT,withCredentials:!1,status:0,statusText:"",responseType:"",responseXML:null,responseText:null,response:null},y=!0,E,_,b={},x,R,A=null,I=null,T=!1,S=!1,O=!1,D=!1,N=!1,L=!1,C,M,F=null,P=null,H={},B,k="",U;e.extend(this,w,{uid:e.guid("uid_"),upload:new h,open:function(o,a,s,u,c){var l;if(!o||!a)throw new t.DOMException(t.DOMException.SYNTAX_ERR);if(/[\u0100-\uffff]/.test(o)||i.utf8_encode(o)!==o)throw new t.DOMException(t.DOMException.SYNTAX_ERR);if(~e.inArray(o.toUpperCase(),["CONNECT","DELETE","GET","HEAD","OPTIONS","POST","PUT","TRACE","TRACK"])&&(_=o.toUpperCase()),~e.inArray(_,["CONNECT","TRACE","TRACK"]))throw new t.DOMException(t.DOMException.SECURITY_ERR);if(a=i.utf8_encode(a),l=r.parseUrl(a),L=r.hasSameOrigin(l),E=r.resolveUrl(a),(u||c)&&!L)throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);if(x=u||l.user,R=c||l.pass,y=s||!0,y===!1&&(n("timeout")||n("withCredentials")||""!==n("responseType")))throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);T=!y,S=!1,b={},g.call(this),n("readyState",f.OPENED),this.dispatchEvent("readystatechange")},setRequestHeader:function(r,o){var a=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"];if(n("readyState")!==f.OPENED||S)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(/[\u0100-\uffff]/.test(r)||i.utf8_encode(r)!==r)throw new t.DOMException(t.DOMException.SYNTAX_ERR);return r=e.trim(r).toLowerCase(),~e.inArray(r,a)||/^(proxy\-|sec\-)/.test(r)?!1:(b[r]?b[r]+=", "+o:b[r]=o,!0)},getAllResponseHeaders:function(){return k||""},getResponseHeader:function(t){return t=t.toLowerCase(),N||~e.inArray(t,["set-cookie","set-cookie2"])?null:k&&""!==k&&(U||(U={},e.each(k.split(/\r\n/),function(t){var n=t.split(/:\s+/);2===n.length&&(n[0]=e.trim(n[0]),U[n[0].toLowerCase()]={header:n[0],value:e.trim(n[1])})})),U.hasOwnProperty(t))?U[t].header+": "+U[t].value:null},overrideMimeType:function(i){var r,o;if(~e.inArray(n("readyState"),[f.LOADING,f.DONE]))throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(i=e.trim(i.toLowerCase()),/;/.test(i)&&(r=i.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))&&(i=r[1],r[2]&&(o=r[2])),!d.mimes[i])throw new t.DOMException(t.DOMException.SYNTAX_ERR);F=i,P=o},send:function(n,r){if(H="string"===e.typeOf(r)?{ruid:r}:r?r:{},this.readyState!==f.OPENED||S)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(n instanceof s)H.ruid=n.ruid,I=n.type||"application/octet-stream";else if(n instanceof c){if(n.hasBlob()){var o=n.getBlob();H.ruid=o.ruid,I=o.type||"application/octet-stream"}}else"string"==typeof n&&(A="UTF-8",I="text/plain;charset=UTF-8",n=i.utf8_encode(n));this.withCredentials||(this.withCredentials=H.required_caps&&H.required_caps.send_browser_cookies&&!L),O=!T&&this.upload.hasEventListener(),N=!1,D=!n,T||(S=!0),u.call(this,n)},abort:function(){if(N=!0,T=!1,~e.inArray(n("readyState"),[f.UNSENT,f.OPENED,f.DONE]))n("readyState",f.UNSENT);else{if(n("readyState",f.DONE),S=!1,!B)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);B.getRuntime().exec.call(B,"XMLHttpRequest","abort",D),D=!0}},destroy:function(){B&&("function"===e.typeOf(B.destroy)&&B.destroy(),B=null),this.unbindAll(),this.upload&&(this.upload.unbindAll(),this.upload=null)}}),this.handleEventProps(m.concat(["readystatechange"])),this.upload.handleEventProps(m)}var p={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Reserved",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",510:"Not Extended"};h.prototype=n.instance;var m=["loadstart","progress","abort","error","load","timeout","loadend"],g=1,v=2;return f.UNSENT=0,f.OPENED=1,f.HEADERS_RECEIVED=2,f.LOADING=3,f.DONE=4,f.prototype=n.instance,f}),i(S,[u,w,g,p],function(e,t,n,i){function r(){function i(){l=d=0,c=this.result=null}function o(t,n){var i=this;u=n,i.bind("TransportingProgress",function(t){d=t.loaded,l>d&&-1===e.inArray(i.state,[r.IDLE,r.DONE])&&a.call(i)},999),i.bind("TransportingComplete",function(){d=l,i.state=r.DONE,c=null,i.result=u.exec.call(i,"Transporter","getAsBlob",t||"")},999),i.state=r.BUSY,i.trigger("TransportingStarted"),a.call(i)}function a(){var e=this,n,i=l-d;h>i&&(h=i),n=t.btoa(c.substr(d,h)),u.exec.call(e,"Transporter","receive",n,l)}var s,u,c,l,d,h;n.call(this),e.extend(this,{uid:e.guid("uid_"),state:r.IDLE,result:null,transport:function(t,n,r){var a=this;if(r=e.extend({chunk_size:204798},r),(s=r.chunk_size%3)&&(r.chunk_size+=3-s),h=r.chunk_size,i.call(this),c=t,l=t.length,"string"===e.typeOf(r)||r.ruid)o.call(a,n,this.connectRuntime(r));else{var u=function(e,t){a.unbind("RuntimeInit",u),o.call(a,n,t)};this.bind("RuntimeInit",u),this.connectRuntime(r)}},abort:function(){var e=this;e.state=r.IDLE,u&&(u.exec.call(e,"Transporter","clear"),e.trigger("TransportingAborted")),i.call(e)},destroy:function(){this.unbindAll(),u=null,this.disconnectRuntime(),i.call(this)}})}return r.IDLE=0,r.BUSY=1,r.DONE=2,r.prototype=i.instance,r}),i(O,[u,h,f,A,T,m,g,S,c,p,y,E,w],function(e,t,n,i,r,o,a,s,u,c,l,d,h){function f(){function i(e){e||(e=this.exec("Image","getInfo")),this.size=e.size,this.width=e.width,this.height=e.height,this.type=e.type,this.meta=e.meta,""===this.name&&(this.name=e.name)}function c(t){var i=e.typeOf(t);try{if(t instanceof f){if(!t.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);m.apply(this,arguments)}else if(t instanceof l){if(!~e.inArray(t.type,["image/jpeg","image/png"]))throw new n.ImageError(n.ImageError.WRONG_FORMAT);g.apply(this,arguments)}else if(-1!==e.inArray(i,["blob","file"]))c.call(this,new d(null,t),arguments[1]);else if("string"===i)"data:"===t.substr(0,5)?c.call(this,new l(null,{data:t}),arguments[1]):v.apply(this,arguments);else{if("node"!==i||"img"!==t.nodeName.toLowerCase())throw new n.DOMException(n.DOMException.TYPE_MISMATCH_ERR);c.call(this,t.src,arguments[1])}}catch(r){this.trigger("error",r.code)}}function m(t,n){var i=this.connectRuntime(t.ruid);this.ruid=i.uid,i.exec.call(this,"Image","loadFromImage",t,"undefined"===e.typeOf(n)?!0:n)}function g(t,n){function i(e){r.ruid=e.uid,e.exec.call(r,"Image","loadFromBlob",t)}var r=this;r.name=t.name||"",t.isDetached()?(this.bind("RuntimeInit",function(e,t){i(t)}),n&&"string"==typeof n.required_caps&&(n.required_caps=o.parseCaps(n.required_caps)),this.connectRuntime(e.extend({required_caps:{access_image_binary:!0,resize_image:!0}},n))):i(this.connectRuntime(t.ruid))}function v(e,t){var n=this,i;i=new r,i.open("get",e),i.responseType="blob",i.onprogress=function(e){n.trigger(e)},i.onload=function(){g.call(n,i.response,!0)},i.onerror=function(e){n.trigger(e)},i.onloadend=function(){i.destroy()},i.bind("RuntimeError",function(e,t){n.trigger("RuntimeError",t)}),i.send(null,t)}a.call(this),e.extend(this,{uid:e.guid("uid_"),ruid:null,name:"",size:0,width:0,height:0,type:"",meta:{},clone:function(){this.load.apply(this,arguments)},load:function(){c.apply(this,arguments)},downsize:function(t){var i={width:this.width,height:this.height,type:this.type||"image/jpeg",quality:90,crop:!1,preserveHeaders:!0,resample:!1};t="object"==typeof t?e.extend(i,t):e.extend(i,{width:arguments[0],height:arguments[1],crop:arguments[2],preserveHeaders:arguments[3]});try{if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);if(this.width>f.MAX_RESIZE_WIDTH||this.height>f.MAX_RESIZE_HEIGHT)throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);this.exec("Image","downsize",t.width,t.height,t.crop,t.preserveHeaders)}catch(r){this.trigger("error",r.code)}},crop:function(e,t,n){this.downsize(e,t,!0,n)},getAsCanvas:function(){if(!u.can("create_canvas"))throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);var e=this.connectRuntime(this.ruid);return e.exec.call(this,"Image","getAsCanvas")},getAsBlob:function(e,t){if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);return this.exec("Image","getAsBlob",e||"image/jpeg",t||90)},getAsDataURL:function(e,t){if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);return this.exec("Image","getAsDataURL",e||"image/jpeg",t||90)},getAsBinaryString:function(e,t){var n=this.getAsDataURL(e,t);return h.atob(n.substring(n.indexOf("base64,")+7))},embed:function(i,r){function o(t,r){var o=this;if(u.can("create_canvas")){var l=o.getAsCanvas();if(l)return i.appendChild(l),l=null,o.destroy(),void a.trigger("embedded")}var d=o.getAsDataURL(t,r);if(!d)throw new n.ImageError(n.ImageError.WRONG_FORMAT);if(u.can("use_data_uri_of",d.length))i.innerHTML='<img src="'+d+'" width="'+o.width+'" height="'+o.height+'" />',o.destroy(),a.trigger("embedded");else{var f=new s;f.bind("TransportingComplete",function(){c=a.connectRuntime(this.result.ruid),a.bind("Embedded",function(){e.extend(c.getShimContainer().style,{top:"0px",left:"0px",width:o.width+"px",height:o.height+"px"}),c=null},999),c.exec.call(a,"ImageView","display",this.result.uid,width,height),o.destroy()}),f.transport(h.atob(d.substring(d.indexOf("base64,")+7)),t,{required_caps:{display_media:!0},runtime_order:"flash,silverlight",container:i})}}var a=this,c;r=e.extend({width:this.width,height:this.height,type:this.type||"image/jpeg",quality:90},r||{});try{if(!(i=t.get(i)))throw new n.DOMException(n.DOMException.INVALID_NODE_TYPE_ERR);if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);this.width>f.MAX_RESIZE_WIDTH||this.height>f.MAX_RESIZE_HEIGHT;var l=new f;return l.bind("Resize",function(){o.call(this,r.type,r.quality)}),l.bind("Load",function(){l.downsize(r)}),this.meta.thumb&&this.meta.thumb.width>=r.width&&this.meta.thumb.height>=r.height?l.load(this.meta.thumb.data):l.clone(this,!1),l}catch(d){this.trigger("error",d.code)}},destroy:function(){this.ruid&&(this.getRuntime().exec.call(this,"Image","destroy"),this.disconnectRuntime()),this.unbindAll()}}),this.handleEventProps(p),this.bind("Load Resize",function(){i.call(this)},999)}var p=["progress","load","error","resize","embedded"];return f.MAX_RESIZE_WIDTH=8192,f.MAX_RESIZE_HEIGHT=8192,f.prototype=c.instance,f}),i(D,[u,f,m,c],function(e,t,n,i){function r(t){var r=this,s=n.capTest,u=n.capTrue,c=e.extend({access_binary:s(window.FileReader||window.File&&window.File.getAsDataURL),access_image_binary:function(){return r.can("access_binary")&&!!a.Image},display_media:s(i.can("create_canvas")||i.can("use_data_uri_over32kb")),do_cors:s(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest),drag_and_drop:s(function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&("IE"!==i.browser||i.verComp(i.version,9,">"))}()),filter_by_extension:s(function(){return"Chrome"===i.browser&&i.verComp(i.version,28,">=")||"IE"===i.browser&&i.verComp(i.version,10,">=")||"Safari"===i.browser&&i.verComp(i.version,7,">=")}()),return_response_headers:u,return_response_type:function(e){return"json"===e&&window.JSON?!0:i.can("return_response_type",e)},return_status_code:u,report_upload_progress:s(window.XMLHttpRequest&&(new XMLHttpRequest).upload),resize_image:function(){return r.can("access_binary")&&i.can("create_canvas")},select_file:function(){return i.can("use_fileinput")&&window.File},select_folder:function(){return r.can("select_file")&&"Chrome"===i.browser&&i.verComp(i.version,21,">=")},select_multiple:function(){return r.can("select_file")&&!("Safari"===i.browser&&"Windows"===i.os)&&!("iOS"===i.os&&i.verComp(i.osVersion,"7.0.0",">")&&i.verComp(i.osVersion,"8.0.0","<"))},send_binary_string:s(window.XMLHttpRequest&&((new XMLHttpRequest).sendAsBinary||window.Uint8Array&&window.ArrayBuffer)),send_custom_headers:s(window.XMLHttpRequest),send_multipart:function(){return!!(window.XMLHttpRequest&&(new XMLHttpRequest).upload&&window.FormData)||r.can("send_binary_string")},slice_blob:s(window.File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice)),stream_upload:function(){return r.can("slice_blob")&&r.can("send_multipart")},summon_file_dialog:function(){return r.can("select_file")&&("Firefox"===i.browser&&i.verComp(i.version,4,">=")||"Opera"===i.browser&&i.verComp(i.version,12,">=")||"IE"===i.browser&&i.verComp(i.version,10,">=")||!!~e.inArray(i.browser,["Chrome","Safari"]))},upload_filesize:u},arguments[2]);n.call(this,t,arguments[1]||o,c),e.extend(this,{init:function(){this.trigger("Init")},destroy:function(e){return function(){e.call(r),e=r=null}}(this.destroy)}),e.extend(this.getShim(),a)}var o="html5",a={};return n.addConstructor(o,r),a}),i(N,[u],function(e){function t(){this.returnValue=!1}function n(){this.cancelBubble=!0}var i={},r="moxie_"+e.guid(),o=function(o,a,s,u){var c,l;a=a.toLowerCase(),o.addEventListener?(c=s,o.addEventListener(a,c,!1)):o.attachEvent&&(c=function(){var e=window.event;e.target||(e.target=e.srcElement),e.preventDefault=t,e.stopPropagation=n,s(e)},o.attachEvent("on"+a,c)),o[r]||(o[r]=e.guid()),i.hasOwnProperty(o[r])||(i[o[r]]={}),l=i[o[r]],l.hasOwnProperty(a)||(l[a]=[]),l[a].push({func:c,orig:s,key:u})},a=function(t,n,o){var a,s;if(n=n.toLowerCase(),t[r]&&i[t[r]]&&i[t[r]][n]){a=i[t[r]][n];for(var u=a.length-1;u>=0&&(a[u].orig!==o&&a[u].key!==o||(t.removeEventListener?t.removeEventListener(n,a[u].func,!1):t.detachEvent&&t.detachEvent("on"+n,a[u].func),a[u].orig=null,a[u].func=null,a.splice(u,1),o===s));u--);if(a.length||delete i[t[r]][n],e.isEmptyObj(i[t[r]])){delete i[t[r]];try{delete t[r]}catch(c){t[r]=s}}}},s=function(t,n){t&&t[r]&&e.each(i[t[r]],function(e,i){a(t,i,n)})};return{addEvent:o,removeEvent:a,removeAllEvents:s}}),i(L,[D,E,u,h,N,d,c],function(e,t,n,i,r,o,a){function s(){var e;n.extend(this,{init:function(s){var u=this,c=u.getRuntime(),l,d,h,f,p,m;e=s,h=e.accept.mimes||o.extList2mimes(e.accept,c.can("filter_by_extension")),d=c.getShimContainer(),d.innerHTML='<input id="'+c.uid+'" type="file" style="font-size:999px;opacity:0;"'+(e.multiple&&c.can("select_multiple")?"multiple":"")+(e.directory&&c.can("select_folder")?"webkitdirectory directory":"")+(h?' accept="'+h.join(",")+'"':"")+" />",l=i.get(c.uid),n.extend(l.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),f=i.get(e.browse_button),c.can("summon_file_dialog")&&("static"===i.getStyle(f,"position")&&(f.style.position="relative"),p=parseInt(i.getStyle(f,"z-index"),10)||1,f.style.zIndex=p,d.style.zIndex=p-1,r.addEvent(f,"click",function(e){var t=i.get(c.uid);t&&!t.disabled&&t.click(),e.preventDefault()},u.uid)),m=c.can("summon_file_dialog")?f:d,r.addEvent(m,"mouseover",function(){u.trigger("mouseenter")},u.uid),r.addEvent(m,"mouseout",function(){u.trigger("mouseleave")},u.uid),r.addEvent(m,"mousedown",function(){u.trigger("mousedown")},u.uid),r.addEvent(i.get(e.container),"mouseup",function(){u.trigger("mouseup")},u.uid),l.onchange=function g(i){if(u.files=[],n.each(this.files,function(n){var i="";return e.directory&&"."==n.name?!0:(n.webkitRelativePath&&(i="/"+n.webkitRelativePath.replace(/^\//,"")),n=new t(c.uid,n),n.relativePath=i,void u.files.push(n))}),"IE"!==a.browser&&"IEMobile"!==a.browser)this.value="";else{var r=this.cloneNode(!0);this.parentNode.replaceChild(r,this),r.onchange=g}u.files.length&&u.trigger("change")},u.trigger({type:"ready",async:!0}),d=null},disable:function(e){var t=this.getRuntime(),n;(n=i.get(t.uid))&&(n.disabled=!!e)},destroy:function(){var t=this.getRuntime(),n=t.getShim(),o=t.getShimContainer();r.removeAllEvents(o,this.uid),r.removeAllEvents(e&&i.get(e.container),this.uid),r.removeAllEvents(e&&i.get(e.browse_button),this.uid),o&&(o.innerHTML=""),n.removeInstance(this.uid),e=o=n=null}})}return e.FileInput=s}),i(C,[D,y],function(e,t){function n(){function e(e,t,n){var i;if(!window.File.prototype.slice)return(i=window.File.prototype.webkitSlice||window.File.prototype.mozSlice)?i.call(e,t,n):null;try{return e.slice(),e.slice(t,n)}catch(r){return e.slice(t,n-t)}}this.slice=function(){return new t(this.getRuntime().uid,e.apply(this,arguments))}}return e.Blob=n}),i(M,[D,E,u,h,N,d],function(e,t,n,i,r,o){function a(){function e(e){if(!e.dataTransfer||!e.dataTransfer.types)return!1;var t=n.toArray(e.dataTransfer.types||[]);return-1!==n.inArray("Files",t)||-1!==n.inArray("public.file-url",t)||-1!==n.inArray("application/x-moz-file",t)}function a(e,n){if(u(e)){var i=new t(g,e);i.relativePath=n||"",f.push(i)}}function s(e){for(var t=[],i=0;i<e.length;i++)[].push.apply(t,e[i].extensions.split(/\s*,\s*/));return-1===n.inArray("*",t)?t:[]}function u(e){if(!p.length)return!0;var t=o.getFileExtension(e.name);return!t||-1!==n.inArray(t,p)}function c(e,t){var i=[];n.each(e,function(e){var t=e.webkitGetAsEntry();t&&(t.isFile?a(e.getAsFile(),t.fullPath):i.push(t))}),i.length?l(i,t):t()}function l(e,t){var i=[];n.each(e,function(e){i.push(function(t){d(e,t)})}),n.inSeries(i,function(){t()})}function d(e,t){e.isFile?e.file(function(n){a(n,e.fullPath),t()},function(){t()}):e.isDirectory?h(e,t):t()}function h(e,t){function n(e){r.readEntries(function(t){t.length?([].push.apply(i,t),n(e)):e()},e)}var i=[],r=e.createReader();n(function(){l(i,t)})}var f=[],p=[],m,g;n.extend(this,{init:function(t){var i=this,o;m=t,g=i.ruid,p=s(m.accept),o=m.container,r.addEvent(o,"dragover",function(t){e(t)&&(t.preventDefault(),t.dataTransfer.dropEffect="copy")},i.uid),r.addEvent(o,"drop",function(t){e(t)&&(t.preventDefault(),f=[],t.dataTransfer.items&&t.dataTransfer.items[0].webkitGetAsEntry?c(t.dataTransfer.items,function(){i.files=f,i.trigger("drop")}):(n.each(t.dataTransfer.files,function(e){a(e)}),i.files=f,i.trigger("drop")))},i.uid),r.addEvent(o,"dragenter",function(e){i.trigger("dragenter")},i.uid),r.addEvent(o,"dragleave",function(e){i.trigger("dragleave")},i.uid)},destroy:function(){r.removeAllEvents(m&&i.get(m.container),this.uid),g=f=p=m=null}})}return e.FileDrop=a}),i(F,[D,w,u],function(e,t,n){function i(){function e(e){return t.atob(e.substring(e.indexOf("base64,")+7))}var i,r=!1;n.extend(this,{read:function(t,o){var a=this;a.result="",i=new window.FileReader,i.addEventListener("progress",function(e){a.trigger(e)}),i.addEventListener("load",function(t){a.result=r?e(i.result):i.result,a.trigger(t)}),i.addEventListener("error",function(e){a.trigger(e,i.error)}),i.addEventListener("loadend",function(e){i=null,a.trigger(e)}),"function"===n.typeOf(i[t])?(r=!1,i[t](o.getSource())):"readAsBinaryString"===t&&(r=!0,i.readAsDataURL(o.getSource()))},abort:function(){i&&i.abort()},destroy:function(){i=null}})}return e.FileReader=i}),i(P,[D,u,d,x,E,y,I,f,c],function(e,t,n,i,r,o,a,s,u){function c(){function e(e,t){var n=this,i,r;i=t.getBlob().getSource(),r=new window.FileReader,r.onload=function(){t.append(t.getBlobName(),new o(null,{type:i.type,data:r.result})),h.send.call(n,e,t)},r.readAsBinaryString(i)}function c(){return!window.XMLHttpRequest||"IE"===u.browser&&u.verComp(u.version,8,"<")?function(){for(var e=["Msxml2.XMLHTTP.6.0","Microsoft.XMLHTTP"],t=0;t<e.length;t++)try{return new ActiveXObject(e[t])}catch(n){}}():new window.XMLHttpRequest}function l(e){var t=e.responseXML,n=e.responseText;return"IE"===u.browser&&n&&t&&!t.documentElement&&/[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type"))&&(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.validateOnParse=!1,t.loadXML(n)),t&&("IE"===u.browser&&0!==t.parseError||!t.documentElement||"parsererror"===t.documentElement.tagName)?null:t}function d(e){var t="----moxieboundary"+(new Date).getTime(),n="--",i="\r\n",r="",a=this.getRuntime();if(!a.can("send_binary_string"))throw new s.RuntimeError(s.RuntimeError.NOT_SUPPORTED_ERR);return f.setRequestHeader("Content-Type","multipart/form-data; boundary="+t),e.each(function(e,a){r+=e instanceof o?n+t+i+'Content-Disposition: form-data; name="'+a+'"; filename="'+unescape(encodeURIComponent(e.name||"blob"))+'"'+i+"Content-Type: "+(e.type||"application/octet-stream")+i+i+e.getSource()+i:n+t+i+'Content-Disposition: form-data; name="'+a+'"'+i+i+unescape(encodeURIComponent(e))+i}),r+=n+t+n+i}var h=this,f,p;t.extend(this,{send:function(n,r){var s=this,l="Mozilla"===u.browser&&u.verComp(u.version,4,">=")&&u.verComp(u.version,7,"<"),h="Android Browser"===u.browser,m=!1;if(p=n.url.replace(/^.+?\/([\w\-\.]+)$/,"$1").toLowerCase(),f=c(),f.open(n.method,n.url,n.async,n.user,n.password),r instanceof o)r.isDetached()&&(m=!0),r=r.getSource();else if(r instanceof a){if(r.hasBlob())if(r.getBlob().isDetached())r=d.call(s,r),m=!0;else if((l||h)&&"blob"===t.typeOf(r.getBlob().getSource())&&window.FileReader)return void e.call(s,n,r);if(r instanceof a){var g=new window.FormData;r.each(function(e,t){e instanceof o?g.append(t,e.getSource()):g.append(t,e)}),r=g}}f.upload?(n.withCredentials&&(f.withCredentials=!0),f.addEventListener("load",function(e){s.trigger(e)}),f.addEventListener("error",function(e){s.trigger(e)}),f.addEventListener("progress",function(e){s.trigger(e)}),f.upload.addEventListener("progress",function(e){s.trigger({type:"UploadProgress",loaded:e.loaded,total:e.total})})):f.onreadystatechange=function v(){switch(f.readyState){case 1:break;case 2:break;case 3:var e,t;try{i.hasSameOrigin(n.url)&&(e=f.getResponseHeader("Content-Length")||0),f.responseText&&(t=f.responseText.length)}catch(r){e=t=0}s.trigger({type:"progress",lengthComputable:!!e,total:parseInt(e,10),loaded:t});break;case 4:f.onreadystatechange=function(){},0===f.status?s.trigger("error"):s.trigger("load")}},t.isEmptyObj(n.headers)||t.each(n.headers,function(e,t){f.setRequestHeader(t,e)}),""!==n.responseType&&"responseType"in f&&("json"!==n.responseType||u.can("return_response_type","json")?f.responseType=n.responseType:f.responseType="text"),m?f.sendAsBinary?f.sendAsBinary(r):!function(){for(var e=new Uint8Array(r.length),t=0;t<r.length;t++)e[t]=255&r.charCodeAt(t);f.send(e.buffer)}():f.send(r),s.trigger("loadstart")},getStatus:function(){try{if(f)return f.status}catch(e){}return 0},getResponse:function(e){var t=this.getRuntime();try{switch(e){case"blob":var i=new r(t.uid,f.response),o=f.getResponseHeader("Content-Disposition");if(o){var a=o.match(/filename=([\'\"'])([^\1]+)\1/);a&&(p=a[2])}return i.name=p,i.type||(i.type=n.getFileMime(p)),i;case"json":return u.can("return_response_type","json")?f.response:200===f.status&&window.JSON?JSON.parse(f.responseText):null;case"document":return l(f);default:return""!==f.responseText?f.responseText:null}}catch(s){return null}},getAllResponseHeaders:function(){try{return f.getAllResponseHeaders()}catch(e){}return""},abort:function(){f&&f.abort()},destroy:function(){h=p=null}})}return e.XMLHttpRequest=c}),i(H,[u],function(e){function t(e){e instanceof ArrayBuffer?n.apply(this,arguments):i.apply(this,arguments)}function n(t){var n=new DataView(t);e.extend(this,{readByteAt:function(e){return n.getUint8(e)},writeByteAt:function(e,t){n.setUint8(e,t)},SEGMENT:function(e,i,r){switch(arguments.length){case 2:return t.slice(e,e+i);case 1:return t.slice(e);case 3:if(null===r&&(r=new ArrayBuffer),r instanceof ArrayBuffer){var o=new Uint8Array(this.length()-i+r.byteLength);e>0&&o.set(new Uint8Array(t.slice(0,e)),0),o.set(new Uint8Array(r),e),o.set(new Uint8Array(t.slice(e+i)),e+r.byteLength),this.clear(),t=o.buffer,n=new DataView(t);break}default:return t}},length:function(){return t?t.byteLength:0},clear:function(){n=t=null}})}function i(t){function n(e,n,i){i=3===arguments.length?i:t.length-n-1,t=t.substr(0,n)+e+t.substr(i+n)}e.extend(this,{readByteAt:function(e){return t.charCodeAt(e)},writeByteAt:function(e,t){n(String.fromCharCode(t),e,1)},SEGMENT:function(e,i,r){switch(arguments.length){case 1:return t.substr(e);case 2:return t.substr(e,i);case 3:n(null!==r?r:"",e,i);break;default:return t}},length:function(){return t?t.length:0},clear:function(){t=null}})}return e.extend(t.prototype,{littleEndian:!1,read:function(e,t){var n,i,r;if(e+t>this.length())throw new Error("You are trying to read outside the source boundaries.");for(i=this.littleEndian?0:-8*(t-1),r=0,n=0;t>r;r++)n|=this.readByteAt(e+r)<<Math.abs(i+8*r);return n},write:function(e,t,n){var i,r,o="";if(e>this.length())throw new Error("You are trying to write outside the source boundaries.");for(i=this.littleEndian?0:-8*(n-1),r=0;n>r;r++)this.writeByteAt(e+r,t>>Math.abs(i+8*r)&255)},BYTE:function(e){return this.read(e,1)},SHORT:function(e){return this.read(e,2)},LONG:function(e){return this.read(e,4)},SLONG:function(e){var t=this.read(e,4);return t>2147483647?t-4294967296:t},CHAR:function(e){return String.fromCharCode(this.read(e,1))},STRING:function(e,t){return this.asArray("CHAR",e,t).join("")},asArray:function(e,t,n){for(var i=[],r=0;n>r;r++)i[r]=this[e](t+r);return i}}),t}),i(B,[H,f],function(e,t){return function n(i){var r=[],o,a,s,u=0;if(o=new e(i),65496!==o.SHORT(0))throw o.clear(),new t.ImageError(t.ImageError.WRONG_FORMAT);for(a=2;a<=o.length();)if(s=o.SHORT(a),s>=65488&&65495>=s)a+=2;else{if(65498===s||65497===s)break;u=o.SHORT(a+2)+2,s>=65505&&65519>=s&&r.push({hex:s,name:"APP"+(15&s),start:a,length:u,segment:o.SEGMENT(a,u)}),a+=u}return o.clear(),{headers:r,restore:function(t){var n,i,o;for(o=new e(t),a=65504==o.SHORT(2)?4+o.SHORT(4):2,i=0,n=r.length;n>i;i++)o.SEGMENT(a,0,r[i].segment),a+=r[i].length;return t=o.SEGMENT(),o.clear(),t},strip:function(t){var i,r,o,a;for(o=new n(t),r=o.headers,o.purge(),i=new e(t),a=r.length;a--;)i.SEGMENT(r[a].start,r[a].length,"");return t=i.SEGMENT(),i.clear(),t},get:function(e){for(var t=[],n=0,i=r.length;i>n;n++)r[n].name===e.toUpperCase()&&t.push(r[n].segment);
return t},set:function(e,t){var n=[],i,o,a;for("string"==typeof t?n.push(t):n=t,i=o=0,a=r.length;a>i&&(r[i].name===e.toUpperCase()&&(r[i].segment=n[o],r[i].length=n[o].length,o++),!(o>=n.length));i++);},purge:function(){this.headers=r=[]}}}}),i(k,[u,H,f],function(e,n,i){function r(o){function a(n,r){var o=this,a,s,u,c,h,f,p,m,g=[],v={},w={1:"BYTE",7:"UNDEFINED",2:"ASCII",3:"SHORT",4:"LONG",5:"RATIONAL",9:"SLONG",10:"SRATIONAL"},y={BYTE:1,UNDEFINED:1,ASCII:1,SHORT:2,LONG:4,RATIONAL:8,SLONG:4,SRATIONAL:8};for(a=o.SHORT(n),s=0;a>s;s++)if(g=[],p=n+2+12*s,u=r[o.SHORT(p)],u!==t){if(c=w[o.SHORT(p+=2)],h=o.LONG(p+=2),f=y[c],!f)throw new i.ImageError(i.ImageError.INVALID_META_ERR);if(p+=4,f*h>4&&(p=o.LONG(p)+d.tiffHeader),p+f*h>=this.length())throw new i.ImageError(i.ImageError.INVALID_META_ERR);"ASCII"!==c?(g=o.asArray(c,p,h),m=1==h?g[0]:g,l.hasOwnProperty(u)&&"object"!=typeof m?v[u]=l[u][m]:v[u]=m):v[u]=e.trim(o.STRING(p,h).replace(/\0$/,""))}return v}function s(e,t,n){var i,r,o,a=0;if("string"==typeof t){var s=c[e.toLowerCase()];for(var u in s)if(s[u]===t){t=u;break}}i=d[e.toLowerCase()+"IFD"],r=this.SHORT(i);for(var l=0;r>l;l++)if(o=i+12*l+2,this.SHORT(o)==t){a=o+8;break}if(!a)return!1;try{this.write(a,n,4)}catch(h){return!1}return!0}var u,c,l,d,h,f;if(n.call(this,o),c={tiff:{274:"Orientation",270:"ImageDescription",271:"Make",272:"Model",305:"Software",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37386:"FocalLength",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"},thumb:{513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength"}},l={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}},d={tiffHeader:10},h=d.tiffHeader,u={clear:this.clear},e.extend(this,{read:function(){try{return r.prototype.read.apply(this,arguments)}catch(e){throw new i.ImageError(i.ImageError.INVALID_META_ERR)}},write:function(){try{return r.prototype.write.apply(this,arguments)}catch(e){throw new i.ImageError(i.ImageError.INVALID_META_ERR)}},UNDEFINED:function(){return this.BYTE.apply(this,arguments)},RATIONAL:function(e){return this.LONG(e)/this.LONG(e+4)},SRATIONAL:function(e){return this.SLONG(e)/this.SLONG(e+4)},ASCII:function(e){return this.CHAR(e)},TIFF:function(){return f||null},EXIF:function(){var t=null;if(d.exifIFD){try{t=a.call(this,d.exifIFD,c.exif)}catch(n){return null}if(t.ExifVersion&&"array"===e.typeOf(t.ExifVersion)){for(var i=0,r="";i<t.ExifVersion.length;i++)r+=String.fromCharCode(t.ExifVersion[i]);t.ExifVersion=r}}return t},GPS:function(){var t=null;if(d.gpsIFD){try{t=a.call(this,d.gpsIFD,c.gps)}catch(n){return null}t.GPSVersionID&&"array"===e.typeOf(t.GPSVersionID)&&(t.GPSVersionID=t.GPSVersionID.join("."))}return t},thumb:function(){if(d.IFD1)try{var e=a.call(this,d.IFD1,c.thumb);if("JPEGInterchangeFormat"in e)return this.SEGMENT(d.tiffHeader+e.JPEGInterchangeFormat,e.JPEGInterchangeFormatLength)}catch(t){}return null},setExif:function(e,t){return"PixelXDimension"!==e&&"PixelYDimension"!==e?!1:s.call(this,"exif",e,t)},clear:function(){u.clear(),o=c=l=f=d=u=null}}),65505!==this.SHORT(0)||"EXIF\x00"!==this.STRING(4,5).toUpperCase())throw new i.ImageError(i.ImageError.INVALID_META_ERR);if(this.littleEndian=18761==this.SHORT(h),42!==this.SHORT(h+=2))throw new i.ImageError(i.ImageError.INVALID_META_ERR);d.IFD0=d.tiffHeader+this.LONG(h+=2),f=a.call(this,d.IFD0,c.tiff),"ExifIFDPointer"in f&&(d.exifIFD=d.tiffHeader+f.ExifIFDPointer,delete f.ExifIFDPointer),"GPSInfoIFDPointer"in f&&(d.gpsIFD=d.tiffHeader+f.GPSInfoIFDPointer,delete f.GPSInfoIFDPointer),e.isEmptyObj(f)&&(f=null);var p=this.LONG(d.IFD0+12*this.SHORT(d.IFD0)+2);p&&(d.IFD1=d.tiffHeader+p)}return r.prototype=n.prototype,r}),i(U,[u,f,B,H,k],function(e,t,n,i,r){function o(o){function a(e){var t=0,n,i;for(e||(e=c);t<=e.length();){if(n=e.SHORT(t+=2),n>=65472&&65475>=n)return t+=5,{height:e.SHORT(t),width:e.SHORT(t+=2)};i=e.SHORT(t+=2),t+=i-2}return null}function s(){var e=d.thumb(),t,n;return e&&(t=new i(e),n=a(t),t.clear(),n)?(n.data=e,n):null}function u(){d&&l&&c&&(d.clear(),l.purge(),c.clear(),h=l=d=c=null)}var c,l,d,h;if(c=new i(o),65496!==c.SHORT(0))throw new t.ImageError(t.ImageError.WRONG_FORMAT);l=new n(o);try{d=new r(l.get("app1")[0])}catch(f){}h=a.call(this),e.extend(this,{type:"image/jpeg",size:c.length(),width:h&&h.width||0,height:h&&h.height||0,setExif:function(t,n){return d?("object"===e.typeOf(t)?e.each(t,function(e,t){d.setExif(t,e)}):d.setExif(t,n),void l.set("app1",d.SEGMENT())):!1},writeHeaders:function(){return arguments.length?l.restore(arguments[0]):l.restore(o)},stripHeaders:function(e){return l.strip(e)},purge:function(){u.call(this)}}),d&&(this.meta={tiff:d.TIFF(),exif:d.EXIF(),gps:d.GPS(),thumb:s()})}return o}),i(G,[f,u,H],function(e,t,n){function i(i){function r(){var e,t;return e=a.call(this,8),"IHDR"==e.type?(t=e.start,{width:s.LONG(t),height:s.LONG(t+=4)}):null}function o(){s&&(s.clear(),i=l=u=c=s=null)}function a(e){var t,n,i,r;return t=s.LONG(e),n=s.STRING(e+=4,4),i=e+=4,r=s.LONG(e+t),{length:t,type:n,start:i,CRC:r}}var s,u,c,l;s=new n(i),function(){var t=0,n=0,i=[35152,20039,3338,6666];for(n=0;n<i.length;n++,t+=2)if(i[n]!=s.SHORT(t))throw new e.ImageError(e.ImageError.WRONG_FORMAT)}(),l=r.call(this),t.extend(this,{type:"image/png",size:s.length(),width:l.width,height:l.height,purge:function(){o.call(this)}}),o.call(this)}return i}),i(z,[u,f,U,G],function(e,t,n,i){return function(r){var o=[n,i],a;a=function(){for(var e=0;e<o.length;e++)try{return new o[e](r)}catch(n){}throw new t.ImageError(t.ImageError.WRONG_FORMAT)}(),e.extend(this,{type:"",size:0,width:0,height:0,setExif:function(){},writeHeaders:function(e){return e},stripHeaders:function(e){return e},purge:function(){r=null}}),e.extend(this,a),this.purge=function(){a.purge(),a=null}}}),i(q,[],function(){function e(e,i,r){var o=e.naturalWidth,a=e.naturalHeight,s=r.width,u=r.height,c=r.x||0,l=r.y||0,d=i.getContext("2d");t(e)&&(o/=2,a/=2);var h=1024,f=document.createElement("canvas");f.width=f.height=h;for(var p=f.getContext("2d"),m=n(e,o,a),g=0;a>g;){for(var v=g+h>a?a-g:h,w=0;o>w;){var y=w+h>o?o-w:h;p.clearRect(0,0,h,h),p.drawImage(e,-w,-g);var E=w*s/o+c<<0,_=Math.ceil(y*s/o),b=g*u/a/m+l<<0,x=Math.ceil(v*u/a/m);d.drawImage(f,0,0,y,v,E,b,_,x),w+=h}g+=h}f=p=null}function t(e){var t=e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var i=document.createElement("canvas");i.width=i.height=1;var r=i.getContext("2d");return r.drawImage(e,-t+1,0),0===r.getImageData(0,0,1,1).data[3]}return!1}function n(e,t,n){var i=document.createElement("canvas");i.width=1,i.height=n;var r=i.getContext("2d");r.drawImage(e,0,0);for(var o=r.getImageData(0,0,1,n).data,a=0,s=n,u=n;u>a;){var c=o[4*(u-1)+3];0===c?s=u:a=u,u=s+a>>1}i=null;var l=u/n;return 0===l?1:l}return{isSubsampled:t,renderTo:e}}),i(j,[D,u,f,w,y,E,z,q,d,c],function(e,t,n,i,r,o,a,s,u,c){function l(){function e(){if(!_&&!y)throw new n.ImageError(n.DOMException.INVALID_STATE_ERR);return _||y}function l(e){return i.atob(e.substring(e.indexOf("base64,")+7))}function d(e,t){return"data:"+(t||"")+";base64,"+i.btoa(e)}function h(e){var t=this;y=new Image,y.onerror=function(){v.call(this),t.trigger("error",n.ImageError.WRONG_FORMAT)},y.onload=function(){t.trigger("load")},y.src="data:"==e.substr(0,5)?e:d(e,x.type)}function f(e,t){var i=this,r;return window.FileReader?(r=new FileReader,r.onload=function(){t(this.result)},r.onerror=function(){i.trigger("error",n.ImageError.WRONG_FORMAT)},r.readAsDataURL(e),void 0):t(e.getAsDataURL())}function p(n,i,r,o){var a=this,s,u,c=0,l=0,d,h,f,p;if(A=o,p=this.meta&&this.meta.tiff&&this.meta.tiff.Orientation||1,-1!==t.inArray(p,[5,6,7,8])){var v=n;n=i,i=v}return d=e(),r?(n=Math.min(n,d.width),i=Math.min(i,d.height),s=Math.max(n/d.width,i/d.height)):s=Math.min(n/d.width,i/d.height),s>1&&!r&&o?void this.trigger("Resize"):(_||(_=document.createElement("canvas")),h=Math.round(d.width*s),f=Math.round(d.height*s),r?(_.width=n,_.height=i,h>n&&(c=Math.round((h-n)/2)),f>i&&(l=Math.round((f-i)/2))):(_.width=h,_.height=f),A||g(_.width,_.height,p),m.call(this,d,_,-c,-l,h,f),this.width=_.width,this.height=_.height,R=!0,void a.trigger("Resize"))}function m(e,t,n,i,r,o){if("iOS"===c.OS)s.renderTo(e,t,{width:r,height:o,x:n,y:i});else{var a=t.getContext("2d");a.drawImage(e,n,i,r,o)}}function g(e,t,n){switch(n){case 5:case 6:case 7:case 8:_.width=t,_.height=e;break;default:_.width=e,_.height=t}var i=_.getContext("2d");switch(n){case 2:i.translate(e,0),i.scale(-1,1);break;case 3:i.translate(e,t),i.rotate(Math.PI);break;case 4:i.translate(0,t),i.scale(1,-1);break;case 5:i.rotate(.5*Math.PI),i.scale(1,-1);break;case 6:i.rotate(.5*Math.PI),i.translate(0,-t);break;case 7:i.rotate(.5*Math.PI),i.translate(e,-t),i.scale(-1,1);break;case 8:i.rotate(-.5*Math.PI),i.translate(-e,0)}}function v(){E&&(E.purge(),E=null),b=y=_=x=null,R=!1}var w=this,y,E,_,b,x,R=!1,A=!0;t.extend(this,{loadFromBlob:function(e){var t=this,i=t.getRuntime(),r=arguments.length>1?arguments[1]:!0;if(!i.can("access_binary"))throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);return x=e,e.isDetached()?(b=e.getSource(),void h.call(this,b)):void f.call(this,e.getSource(),function(e){r&&(b=l(e)),h.call(t,e)})},loadFromImage:function(e,t){this.meta=e.meta,x=new o(null,{name:e.name,size:e.size,type:e.type}),h.call(this,t?b=e.getAsBinaryString():e.getAsDataURL())},getInfo:function(){var t=this.getRuntime(),n;return!E&&b&&t.can("access_image_binary")&&(E=new a(b)),n={width:e().width||0,height:e().height||0,type:x.type||u.getFileMime(x.name),size:b&&b.length||x.size||0,name:x.name||"",meta:E&&E.meta||this.meta||{}},!n.meta||!n.meta.thumb||n.meta.thumb.data instanceof r||(n.meta.thumb.data=new r(null,{type:"image/jpeg",data:n.meta.thumb.data})),n},downsize:function(){p.apply(this,arguments)},getAsCanvas:function(){return _&&(_.id=this.uid+"_canvas"),_},getAsBlob:function(e,t){return e!==this.type&&p.call(this,this.width,this.height,!1),new o(null,{name:x.name||"",type:e,data:w.getAsBinaryString.call(this,e,t)})},getAsDataURL:function(e){var t=arguments[1]||90;if(!R)return y.src;if("image/jpeg"!==e)return _.toDataURL("image/png");try{return _.toDataURL("image/jpeg",t/100)}catch(n){return _.toDataURL("image/jpeg")}},getAsBinaryString:function(e,t){if(!R)return b||(b=l(w.getAsDataURL(e,t))),b;if("image/jpeg"!==e)b=l(w.getAsDataURL(e,t));else{var n;t||(t=90);try{n=_.toDataURL("image/jpeg",t/100)}catch(i){n=_.toDataURL("image/jpeg")}b=l(n),E&&(b=E.stripHeaders(b),A&&(E.meta&&E.meta.exif&&E.setExif({PixelXDimension:this.width,PixelYDimension:this.height}),b=E.writeHeaders(b)),E.purge(),E=null)}return R=!1,b},destroy:function(){w=null,v.call(this),this.getRuntime().getShim().removeInstance(this.uid)}})}return e.Image=l}),i(X,[u,c,h,f,m],function(e,t,n,i,r){function o(){var e;try{e=navigator.plugins["Shockwave Flash"],e=e.description}catch(t){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(n){e="0.0"}}return e=e.match(/\d+/g),parseFloat(e[0]+"."+e[1])}function a(e){var i=n.get(e);i&&"OBJECT"==i.nodeName&&("IE"===t.browser?(i.style.display="none",function r(){4==i.readyState?s(e):setTimeout(r,10)}()):i.parentNode.removeChild(i))}function s(e){var t=n.get(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function u(s){var u=this,d;s=e.extend({swf_url:t.swf_url},s),r.call(this,s,c,{access_binary:function(e){return e&&"browser"===u.mode},access_image_binary:function(e){return e&&"browser"===u.mode},display_media:r.capTrue,do_cors:r.capTrue,drag_and_drop:!1,report_upload_progress:function(){return"client"===u.mode},resize_image:r.capTrue,return_response_headers:!1,return_response_type:function(t){return"json"===t&&window.JSON?!0:!e.arrayDiff(t,["","text","document"])||"browser"===u.mode},return_status_code:function(t){return"browser"===u.mode||!e.arrayDiff(t,[200,404])},select_file:r.capTrue,select_multiple:r.capTrue,send_binary_string:function(e){return e&&"browser"===u.mode},send_browser_cookies:function(e){return e&&"browser"===u.mode},send_custom_headers:function(e){return e&&"browser"===u.mode},send_multipart:r.capTrue,slice_blob:function(e){return e&&"browser"===u.mode},stream_upload:function(e){return e&&"browser"===u.mode},summon_file_dialog:!1,upload_filesize:function(t){return e.parseSizeStr(t)<=2097152||"client"===u.mode},use_http_method:function(t){return!e.arrayDiff(t,["GET","POST"])}},{access_binary:function(e){return e?"browser":"client"},access_image_binary:function(e){return e?"browser":"client"},report_upload_progress:function(e){return e?"browser":"client"},return_response_type:function(t){return e.arrayDiff(t,["","text","json","document"])?"browser":["client","browser"]},return_status_code:function(t){return e.arrayDiff(t,[200,404])?"browser":["client","browser"]},send_binary_string:function(e){return e?"browser":"client"},send_browser_cookies:function(e){return e?"browser":"client"},send_custom_headers:function(e){return e?"browser":"client"},stream_upload:function(e){return e?"client":"browser"},upload_filesize:function(t){return e.parseSizeStr(t)>=2097152?"client":"browser"}},"client"),o()<10&&(this.mode=!1),e.extend(this,{getShim:function(){return n.get(this.uid)},shimExec:function(e,t){var n=[].slice.call(arguments,2);return u.getShim().exec(this.uid,e,t,n)},init:function(){var n,r,o;o=this.getShimContainer(),e.extend(o.style,{position:"absolute",top:"-8px",left:"-8px",width:"9px",height:"9px",overflow:"hidden"}),n='<object id="'+this.uid+'" type="application/x-shockwave-flash" data="'+s.swf_url+'" ',"IE"===t.browser&&(n+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),n+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+s.swf_url+'" /><param name="flashvars" value="uid='+escape(this.uid)+"&target="+t.global_event_dispatcher+'" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',"IE"===t.browser?(r=document.createElement("div"),o.appendChild(r),r.outerHTML=n,r=o=null):o.innerHTML=n,d=setTimeout(function(){u&&!u.initialized&&u.trigger("Error",new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))},5e3)},destroy:function(e){return function(){a(u.uid),e.call(u),clearTimeout(d),s=d=e=u=null}}(this.destroy)},l)}var c="flash",l={};return r.addConstructor(c,u),l}),i(V,[X,E,u],function(e,t,n){var i={init:function(e){var i=this,r=this.getRuntime();this.bind("Change",function(){var e=r.shimExec.call(i,"FileInput","getFiles");i.files=[],n.each(e,function(e){i.files.push(new t(r.uid,e))})},999),this.getRuntime().shimExec.call(this,"FileInput","init",{name:e.name,accept:e.accept,multiple:e.multiple}),this.trigger("ready")}};return e.FileInput=i}),i(W,[X,y],function(e,t){var n={slice:function(e,n,i,r){var o=this.getRuntime();return 0>n?n=Math.max(e.size+n,0):n>0&&(n=Math.min(n,e.size)),0>i?i=Math.max(e.size+i,0):i>0&&(i=Math.min(i,e.size)),e=o.shimExec.call(this,"Blob","slice",n,i,r||""),e&&(e=new t(o.uid,e)),e}};return e.Blob=n}),i(Y,[X,w],function(e,t){function n(e,n){switch(n){case"readAsText":return t.atob(e,"utf8");case"readAsBinaryString":return t.atob(e);case"readAsDataURL":return e}return null}var i={read:function(e,t){var i=this;return i.result="","readAsDataURL"===e&&(i.result="data:"+(t.type||"")+";base64,"),i.bind("Progress",function(t,r){r&&(i.result+=n(r,e))},999),i.getRuntime().shimExec.call(this,"FileReader","readAsBase64",t.uid)}};return e.FileReader=i}),i($,[X,w],function(e,t){function n(e,n){switch(n){case"readAsText":return t.atob(e,"utf8");case"readAsBinaryString":return t.atob(e);case"readAsDataURL":return e}return null}var i={read:function(e,t){var i,r=this.getRuntime();return(i=r.shimExec.call(this,"FileReaderSync","readAsBase64",t.uid))?("readAsDataURL"===e&&(i="data:"+(t.type||"")+";base64,"+i),n(i,e,t.type)):null}};return e.FileReaderSync=i}),i(J,[X,u,y,E,A,I,S],function(e,t,n,i,r,o,a){var s={send:function(e,i){function r(){e.transport=l.mode,l.shimExec.call(c,"XMLHttpRequest","send",e,i)}function s(e,t){l.shimExec.call(c,"XMLHttpRequest","appendBlob",e,t.uid),i=null,r()}function u(e,t){var n=new a;n.bind("TransportingComplete",function(){t(this.result)}),n.transport(e.getSource(),e.type,{ruid:l.uid})}var c=this,l=c.getRuntime();if(t.isEmptyObj(e.headers)||t.each(e.headers,function(e,t){l.shimExec.call(c,"XMLHttpRequest","setRequestHeader",t,e.toString())}),i instanceof o){var d;if(i.each(function(e,t){e instanceof n?d=t:l.shimExec.call(c,"XMLHttpRequest","append",t,e)}),i.hasBlob()){var h=i.getBlob();h.isDetached()?u(h,function(e){h.destroy(),s(d,e)}):s(d,h)}else i=null,r()}else i instanceof n?i.isDetached()?u(i,function(e){i.destroy(),i=e.uid,r()}):(i=i.uid,r()):r()},getResponse:function(e){var n,o,a=this.getRuntime();if(o=a.shimExec.call(this,"XMLHttpRequest","getResponseAsBlob")){if(o=new i(a.uid,o),"blob"===e)return o;try{if(n=new r,~t.inArray(e,["","text"]))return n.readAsText(o);if("json"===e&&window.JSON)return JSON.parse(n.readAsText(o))}finally{o.destroy()}}return null},abort:function(e){var t=this.getRuntime();t.shimExec.call(this,"XMLHttpRequest","abort"),this.dispatchEvent("readystatechange"),this.dispatchEvent("abort")}};return e.XMLHttpRequest=s}),i(Z,[X,y],function(e,t){var n={getAsBlob:function(e){var n=this.getRuntime(),i=n.shimExec.call(this,"Transporter","getAsBlob",e);return i?new t(n.uid,i):null}};return e.Transporter=n}),i(K,[X,u,S,y,A],function(e,t,n,i,r){var o={loadFromBlob:function(e){function t(e){r.shimExec.call(i,"Image","loadFromBlob",e.uid),i=r=null}var i=this,r=i.getRuntime();if(e.isDetached()){var o=new n;o.bind("TransportingComplete",function(){t(o.result.getSource())}),o.transport(e.getSource(),e.type,{ruid:r.uid})}else t(e.getSource())},loadFromImage:function(e){var t=this.getRuntime();return t.shimExec.call(this,"Image","loadFromImage",e.uid)},getInfo:function(){var e=this.getRuntime(),t=e.shimExec.call(this,"Image","getInfo");return!t.meta||!t.meta.thumb||t.meta.thumb.data instanceof i||(t.meta.thumb.data=new i(e.uid,t.meta.thumb.data)),t},getAsBlob:function(e,t){var n=this.getRuntime(),r=n.shimExec.call(this,"Image","getAsBlob",e,t);return r?new i(n.uid,r):null},getAsDataURL:function(){var e=this.getRuntime(),t=e.Image.getAsBlob.apply(this,arguments),n;return t?(n=new r,n.readAsDataURL(t)):null}};return e.Image=o}),i(Q,[u,c,h,f,m],function(e,t,n,i,r){function o(e){var t=!1,n=null,i,r,o,a,s,u=0;try{try{n=new ActiveXObject("AgControl.AgControl"),n.IsVersionSupported(e)&&(t=!0),n=null}catch(c){var l=navigator.plugins["Silverlight Plug-In"];if(l){for(i=l.description,"1.0.30226.2"===i&&(i="2.0.30226.2"),r=i.split(".");r.length>3;)r.pop();for(;r.length<4;)r.push(0);for(o=e.split(".");o.length>4;)o.pop();do a=parseInt(o[u],10),s=parseInt(r[u],10),u++;while(u<o.length&&a===s);s>=a&&!isNaN(a)&&(t=!0)}}}catch(d){t=!1}return t}function a(a){var c=this,l;a=e.extend({xap_url:t.xap_url},a),r.call(this,a,s,{access_binary:r.capTrue,access_image_binary:r.capTrue,display_media:r.capTrue,do_cors:r.capTrue,drag_and_drop:!1,report_upload_progress:r.capTrue,resize_image:r.capTrue,return_response_headers:function(e){return e&&"client"===c.mode},return_response_type:function(e){return"json"!==e?!0:!!window.JSON},return_status_code:function(t){return"client"===c.mode||!e.arrayDiff(t,[200,404])},select_file:r.capTrue,select_multiple:r.capTrue,send_binary_string:r.capTrue,send_browser_cookies:function(e){return e&&"browser"===c.mode},send_custom_headers:function(e){return e&&"client"===c.mode},send_multipart:r.capTrue,slice_blob:r.capTrue,stream_upload:!0,summon_file_dialog:!1,upload_filesize:r.capTrue,use_http_method:function(t){return"client"===c.mode||!e.arrayDiff(t,["GET","POST"])}},{return_response_headers:function(e){return e?"client":"browser"},return_status_code:function(t){return e.arrayDiff(t,[200,404])?"client":["client","browser"]},send_browser_cookies:function(e){return e?"browser":"client"},send_custom_headers:function(e){return e?"client":"browser"},use_http_method:function(t){return e.arrayDiff(t,["GET","POST"])?"client":["client","browser"]}}),o("2.0.31005.0")&&"Opera"!==t.browser||(this.mode=!1),e.extend(this,{getShim:function(){return n.get(this.uid).content.Moxie},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec(this.uid,e,t,n)},init:function(){var e;e=this.getShimContainer(),e.innerHTML='<object id="'+this.uid+'" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="'+a.xap_url+'"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid='+this.uid+",target="+t.global_event_dispatcher+'"/></object>',l=setTimeout(function(){c&&!c.initialized&&c.trigger("Error",new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))},"Windows"!==t.OS?1e4:5e3)},destroy:function(e){return function(){e.call(c),clearTimeout(l),a=l=e=c=null}}(this.destroy)},u)}var s="silverlight",u={};return r.addConstructor(s,a),u}),i(ee,[Q,E,u],function(e,t,n){var i={init:function(e){function i(e){for(var t="",n=0;n<e.length;n++)t+=(""!==t?"|":"")+e[n].title+" | *."+e[n].extensions.replace(/,/g,";*.");return t}var r=this,o=this.getRuntime();this.bind("Change",function(){var e=o.shimExec.call(r,"FileInput","getFiles");r.files=[],n.each(e,function(e){r.files.push(new t(o.uid,e))})},999),this.getRuntime().shimExec.call(this,"FileInput","init",i(e.accept),e.name,e.multiple),this.trigger("ready")}};return e.FileInput=i}),i(te,[Q,u,W],function(e,t,n){return e.Blob=t.extend({},n)}),i(ne,[Q,h,N],function(e,t,n){var i={init:function(){var e=this,i=e.getRuntime(),r;return r=i.getShimContainer(),n.addEvent(r,"dragover",function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy"},e.uid),n.addEvent(r,"dragenter",function(e){e.preventDefault();var n=t.get(i.uid).dragEnter(e);n&&e.stopPropagation()},e.uid),n.addEvent(r,"drop",function(e){e.preventDefault();var n=t.get(i.uid).dragDrop(e);n&&e.stopPropagation()},e.uid),i.shimExec.call(this,"FileDrop","init")}};return e.FileDrop=i}),i(ie,[Q,u,Y],function(e,t,n){return e.FileReader=t.extend({},n)}),i(re,[Q,u,$],function(e,t,n){return e.FileReaderSync=t.extend({},n)}),i(oe,[Q,u,J],function(e,t,n){return e.XMLHttpRequest=t.extend({},n)}),i(ae,[Q,u,Z],function(e,t,n){return e.Transporter=t.extend({},n)}),i(se,[Q,u,y,K],function(e,t,n,i){return e.Image=t.extend({},i,{getInfo:function(){var e=this.getRuntime(),i=["tiff","exif","gps","thumb"],r={meta:{}},o=e.shimExec.call(this,"Image","getInfo");return o.meta&&(t.each(i,function(e){var t=o.meta[e],n,i,a,s;if(t&&t.keys)for(r.meta[e]={},i=0,a=t.keys.length;a>i;i++)n=t.keys[i],s=t[n],s&&(/^(\d|[1-9]\d+)$/.test(s)?s=parseInt(s,10):/^\d*\.\d+$/.test(s)&&(s=parseFloat(s)),r.meta[e][n]=s)}),!r.meta||!r.meta.thumb||r.meta.thumb.data instanceof n||(r.meta.thumb.data=new n(e.uid,r.meta.thumb.data))),r.width=parseInt(o.width,10),r.height=parseInt(o.height,10),r.size=parseInt(o.size,10),r.type=o.type,r.name=o.name,r}})}),i(ue,[u,f,m,c],function(e,t,n,i){function r(t){var r=this,s=n.capTest,u=n.capTrue;n.call(this,t,o,{access_binary:s(window.FileReader||window.File&&File.getAsDataURL),access_image_binary:!1,display_media:s(a.Image&&(i.can("create_canvas")||i.can("use_data_uri_over32kb"))),do_cors:!1,drag_and_drop:!1,filter_by_extension:s(function(){return"Chrome"===i.browser&&i.verComp(i.version,28,">=")||"IE"===i.browser&&i.verComp(i.version,10,">=")||"Safari"===i.browser&&i.verComp(i.version,7,">=")}()),resize_image:function(){return a.Image&&r.can("access_binary")&&i.can("create_canvas")},report_upload_progress:!1,return_response_headers:!1,return_response_type:function(t){return"json"===t&&window.JSON?!0:!!~e.inArray(t,["text","document",""])},return_status_code:function(t){return!e.arrayDiff(t,[200,404])},select_file:function(){return i.can("use_fileinput")},select_multiple:!1,send_binary_string:!1,send_custom_headers:!1,send_multipart:!0,slice_blob:!1,stream_upload:function(){return r.can("select_file")},summon_file_dialog:function(){return r.can("select_file")&&("Firefox"===i.browser&&i.verComp(i.version,4,">=")||"Opera"===i.browser&&i.verComp(i.version,12,">=")||"IE"===i.browser&&i.verComp(i.version,10,">=")||!!~e.inArray(i.browser,["Chrome","Safari"]))},upload_filesize:u,use_http_method:function(t){return!e.arrayDiff(t,["GET","POST"])}}),e.extend(this,{init:function(){this.trigger("Init")},destroy:function(e){return function(){e.call(r),e=r=null}}(this.destroy)}),e.extend(this.getShim(),a)}var o="html4",a={};return n.addConstructor(o,r),a}),i(ce,[ue,E,u,h,N,d,c],function(e,t,n,i,r,o,a){function s(){function e(){var o=this,l=o.getRuntime(),d,h,f,p,m,g;g=n.guid("uid_"),d=l.getShimContainer(),s&&(f=i.get(s+"_form"),f&&n.extend(f.style,{top:"100%"})),p=document.createElement("form"),p.setAttribute("id",g+"_form"),p.setAttribute("method","post"),p.setAttribute("enctype","multipart/form-data"),p.setAttribute("encoding","multipart/form-data"),n.extend(p.style,{overflow:"hidden",position:"absolute",top:0,left:0,width:"100%",height:"100%"}),m=document.createElement("input"),m.setAttribute("id",g),m.setAttribute("type","file"),m.setAttribute("name",c.name||"Filedata"),m.setAttribute("accept",u.join(",")),n.extend(m.style,{fontSize:"999px",opacity:0}),p.appendChild(m),d.appendChild(p),n.extend(m.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),"IE"===a.browser&&a.verComp(a.version,10,"<")&&n.extend(m.style,{filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}),m.onchange=function(){var n;if(this.value){if(this.files){if(n=this.files[0],0===n.size)return void p.parentNode.removeChild(p)}else n={name:this.value};n=new t(l.uid,n),this.onchange=function(){},e.call(o),o.files=[n],m.setAttribute("id",n.uid),p.setAttribute("id",n.uid+"_form"),o.trigger("change"),m=p=null}},l.can("summon_file_dialog")&&(h=i.get(c.browse_button),r.removeEvent(h,"click",o.uid),r.addEvent(h,"click",function(e){m&&!m.disabled&&m.click(),e.preventDefault()},o.uid)),s=g,d=f=h=null}var s,u=[],c;n.extend(this,{init:function(t){var n=this,a=n.getRuntime(),s;c=t,u=t.accept.mimes||o.extList2mimes(t.accept,a.can("filter_by_extension")),s=a.getShimContainer(),function(){var e,o,u;e=i.get(t.browse_button),a.can("summon_file_dialog")&&("static"===i.getStyle(e,"position")&&(e.style.position="relative"),o=parseInt(i.getStyle(e,"z-index"),10)||1,e.style.zIndex=o,s.style.zIndex=o-1),u=a.can("summon_file_dialog")?e:s,r.addEvent(u,"mouseover",function(){n.trigger("mouseenter")},n.uid),r.addEvent(u,"mouseout",function(){n.trigger("mouseleave")},n.uid),r.addEvent(u,"mousedown",function(){n.trigger("mousedown")},n.uid),r.addEvent(i.get(t.container),"mouseup",function(){n.trigger("mouseup")},n.uid),e=null}(),e.call(this),s=null,n.trigger({type:"ready",async:!0})},disable:function(e){var t;(t=i.get(s))&&(t.disabled=!!e)},destroy:function(){var e=this.getRuntime(),t=e.getShim(),n=e.getShimContainer();r.removeAllEvents(n,this.uid),r.removeAllEvents(c&&i.get(c.container),this.uid),r.removeAllEvents(c&&i.get(c.browse_button),this.uid),n&&(n.innerHTML=""),t.removeInstance(this.uid),s=u=c=n=t=null}})}return e.FileInput=s}),i(le,[ue,F],function(e,t){return e.FileReader=t}),i(de,[ue,u,h,x,f,N,y,I],function(e,t,n,i,r,o,a,s){function u(){function e(e){var t=this,i,r,a,s,u=!1;if(l){if(i=l.id.replace(/_iframe$/,""),r=n.get(i+"_form")){for(a=r.getElementsByTagName("input"),s=a.length;s--;)switch(a[s].getAttribute("type")){case"hidden":a[s].parentNode.removeChild(a[s]);break;case"file":u=!0}a=[],u||r.parentNode.removeChild(r),r=null}setTimeout(function(){o.removeEvent(l,"load",t.uid),l.parentNode&&l.parentNode.removeChild(l);var n=t.getRuntime().getShimContainer();n.children.length||n.parentNode.removeChild(n),n=l=null,e()},1)}}var u,c,l;t.extend(this,{send:function(d,h){function f(){var n=m.getShimContainer()||document.body,r=document.createElement("div");r.innerHTML='<iframe id="'+g+'_iframe" name="'+g+'_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>',l=r.firstChild,n.appendChild(l),o.addEvent(l,"load",function(){var n;try{n=l.contentWindow.document||l.contentDocument||window.frames[l.id].document,/^4(0[0-9]|1[0-7]|2[2346])\s/.test(n.title)?u=n.title.replace(/^(\d+).*$/,"$1"):(u=200,c=t.trim(n.body.innerHTML),p.trigger({type:"progress",loaded:c.length,total:c.length}),y&&p.trigger({type:"uploadprogress",loaded:y.size||1025,total:y.size||1025}))}catch(r){if(!i.hasSameOrigin(d.url))return void e.call(p,function(){p.trigger("error")});u=404}e.call(p,function(){p.trigger("load")})},p.uid)}var p=this,m=p.getRuntime(),g,v,w,y;if(u=c=null,h instanceof s&&h.hasBlob()){if(y=h.getBlob(),g=y.uid,w=n.get(g),v=n.get(g+"_form"),!v)throw new r.DOMException(r.DOMException.NOT_FOUND_ERR)}else g=t.guid("uid_"),v=document.createElement("form"),v.setAttribute("id",g+"_form"),v.setAttribute("method",d.method),v.setAttribute("enctype","multipart/form-data"),v.setAttribute("encoding","multipart/form-data"),m.getShimContainer().appendChild(v);v.setAttribute("target",g+"_iframe"),h instanceof s&&h.each(function(e,n){if(e instanceof a)w&&w.setAttribute("name",n);else{var i=document.createElement("input");t.extend(i,{type:"hidden",name:n,value:e}),w?v.insertBefore(i,w):v.appendChild(i)}}),v.setAttribute("action",d.url),f(),v.submit(),p.trigger("loadstart")},getStatus:function(){return u},getResponse:function(e){if("json"===e&&"string"===t.typeOf(c)&&window.JSON)try{
return JSON.parse(c.replace(/^\s*<pre[^>]*>/,"").replace(/<\/pre>\s*$/,""))}catch(n){return null}return c},abort:function(){var t=this;l&&l.contentWindow&&(l.contentWindow.stop?l.contentWindow.stop():l.contentWindow.document.execCommand?l.contentWindow.document.execCommand("Stop"):l.src="about:blank"),e.call(this,function(){t.dispatchEvent("abort")})}})}return e.XMLHttpRequest=u}),i(he,[ue,j],function(e,t){return e.Image=t}),a([u,c,l,d,h,f,p,m,g,v,w,y,E,_,b,x,R,A,I,T,S,O,N])}(this);;(function(e){"use strict";var t={},n=e.moxie.core.utils.Basic.inArray;return function r(e){var i,s;for(i in e)s=typeof e[i],s==="object"&&!~n(i,["Exceptions","Env","Mime"])?r(e[i]):s==="function"&&(t[i]=e[i])}(e.moxie),t.Env=e.moxie.core.utils.Env,t.Mime=e.moxie.core.utils.Mime,t.Exceptions=e.moxie.core.Exceptions,e.mOxie=t,e.o||(e.o=t),t})(this);
/**
 * Plupload - multi-runtime File Uploader
 * v2.1.9
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2016-05-15
 */
;(function(e,t,n){function s(e){function r(e,t,r){var i={chunks:"slice_blob",jpgresize:"send_binary_string",pngresize:"send_binary_string",progress:"report_upload_progress",multi_selection:"select_multiple",dragdrop:"drag_and_drop",drop_element:"drag_and_drop",headers:"send_custom_headers",urlstream_upload:"send_binary_string",canSendBinary:"send_binary",triggerDialog:"summon_file_dialog"};i[e]?n[i[e]]=t:r||(n[e]=t)}var t=e.required_features,n={};if(typeof t=="string")o.each(t.split(/\s*,\s*/),function(e){r(e,!0)});else if(typeof t=="object")o.each(t,function(e,t){r(t,e)});else if(t===!0){e.chunk_size>0&&(n.slice_blob=!0);if(e.resize.enabled||!e.multipart)n.send_binary_string=!0;o.each(e,function(e,t){r(t,!!e,!0)})}return n}var r=e.setTimeout,i={},o={VERSION:"2.1.9",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,FILE_DUPLICATE_ERROR:-602,IMAGE_FORMAT_ERROR:-700,MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:t.mimes,ua:t.ua,typeOf:t.typeOf,extend:t.extend,guid:t.guid,getAll:function(t){var n=[],r;o.typeOf(t)!=="array"&&(t=[t]);var i=t.length;while(i--)r=o.get(t[i]),r&&n.push(r);return n.length?n:null},get:t.get,each:t.each,getPos:t.getPos,getSize:t.getSize,xmlEncode:function(e){var t={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},n=/[<>&\"\']/g;return e?(""+e).replace(n,function(e){return t[e]?"&"+t[e]+";":e}):e},toArray:t.toArray,inArray:t.inArray,addI18n:t.addI18n,translate:t.translate,isEmptyObj:t.isEmptyObj,hasClass:t.hasClass,addClass:t.addClass,removeClass:t.removeClass,getStyle:t.getStyle,addEvent:t.addEvent,removeEvent:t.removeEvent,removeAllEvents:t.removeAllEvents,cleanName:function(e){var t,n;n=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(t=0;t<n.length;t+=2)e=e.replace(n[t],n[t+1]);return e=e.replace(/\s+/g,"_"),e=e.replace(/[^a-z0-9_\-\.]+/gi,""),e},buildUrl:function(e,t){var n="";return o.each(t,function(e,t){n+=(n?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(e)}),n&&(e+=(e.indexOf("?")>0?"&":"?")+n),e},formatSize:function(e){function t(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}if(e===n||/\D/.test(e))return o.translate("N/A");var r=Math.pow(1024,4);return e>r?t(e/r,1)+" "+o.translate("tb"):e>(r/=1024)?t(e/r,1)+" "+o.translate("gb"):e>(r/=1024)?t(e/r,1)+" "+o.translate("mb"):e>1024?Math.round(e/1024)+" "+o.translate("kb"):e+" "+o.translate("b")},parseSize:t.parseSizeStr,predictRuntime:function(e,n){var r,i;return r=new o.Uploader(e),i=t.Runtime.thatCan(r.getOption().required_features,n||e.runtimes),r.destroy(),i},addFileFilter:function(e,t){i[e]=t}};o.addFileFilter("mime_types",function(e,t,n){e.length&&!e.regexp.test(t.name)?(this.trigger("Error",{code:o.FILE_EXTENSION_ERROR,message:o.translate("File extension error."),file:t}),n(!1)):n(!0)}),o.addFileFilter("max_file_size",function(e,t,n){var r;e=o.parseSize(e),t.size!==r&&e&&t.size>e?(this.trigger("Error",{code:o.FILE_SIZE_ERROR,message:o.translate("File size error."),file:t}),n(!1)):n(!0)}),o.addFileFilter("prevent_duplicates",function(e,t,n){if(e){var r=this.files.length;while(r--)if(t.name===this.files[r].name&&t.size===this.files[r].size){this.trigger("Error",{code:o.FILE_DUPLICATE_ERROR,message:o.translate("Duplicate file error."),file:t}),n(!1);return}}n(!0)}),o.Uploader=function(e){function g(){var e,t=0,n;if(this.state==o.STARTED){for(n=0;n<f.length;n++)!e&&f[n].status==o.QUEUED?(e=f[n],this.trigger("BeforeUpload",e)&&(e.status=o.UPLOADING,this.trigger("UploadFile",e))):t++;t==f.length&&(this.state!==o.STOPPED&&(this.state=o.STOPPED,this.trigger("StateChanged")),this.trigger("UploadComplete",f))}}function y(e){e.percent=e.size>0?Math.ceil(e.loaded/e.size*100):100,b()}function b(){var e,t;d.reset();for(e=0;e<f.length;e++)t=f[e],t.size!==n?(d.size+=t.origSize,d.loaded+=t.loaded*t.origSize/t.size):d.size=n,t.status==o.DONE?d.uploaded++:t.status==o.FAILED?d.failed++:d.queued++;d.size===n?d.percent=f.length>0?Math.ceil(d.uploaded/f.length*100):0:(d.bytesPerSec=Math.ceil(d.loaded/((+(new Date)-p||1)/1e3)),d.percent=d.size>0?Math.ceil(d.loaded/d.size*100):0)}function w(){var e=c[0]||h[0];return e?e.getRuntime().uid:!1}function E(e,n){if(e.ruid){var r=t.Runtime.getInfo(e.ruid);if(r)return r.can(n)}return!1}function S(){this.bind("FilesAdded FilesRemoved",function(e){e.trigger("QueueChanged"),e.refresh()}),this.bind("CancelUpload",O),this.bind("BeforeUpload",C),this.bind("UploadFile",k),this.bind("UploadProgress",L),this.bind("StateChanged",A),this.bind("QueueChanged",b),this.bind("Error",_),this.bind("FileUploaded",M),this.bind("Destroy",D)}function x(e,n){var r=this,i=0,s=[],u={runtime_order:e.runtimes,required_caps:e.required_features,preferred_caps:l,swf_url:e.flash_swf_url,xap_url:e.silverlight_xap_url};o.each(e.runtimes.split(/\s*,\s*/),function(t){e[t]&&(u[t]=e[t])}),e.browse_button&&o.each(e.browse_button,function(n){s.push(function(s){var a=new t.FileInput(o.extend({},u,{accept:e.filters.mime_types,name:e.file_data_name,multiple:e.multi_selection,container:e.container,browse_button:n}));a.onready=function(){var e=t.Runtime.getInfo(this.ruid);t.extend(r.features,{chunks:e.can("slice_blob"),multipart:e.can("send_multipart"),multi_selection:e.can("select_multiple")}),i++,c.push(this),s()},a.onchange=function(){r.addFile(this.files)},a.bind("mouseenter mouseleave mousedown mouseup",function(r){v||(e.browse_button_hover&&("mouseenter"===r.type?t.addClass(n,e.browse_button_hover):"mouseleave"===r.type&&t.removeClass(n,e.browse_button_hover)),e.browse_button_active&&("mousedown"===r.type?t.addClass(n,e.browse_button_active):"mouseup"===r.type&&t.removeClass(n,e.browse_button_active)))}),a.bind("mousedown",function(){r.trigger("Browse")}),a.bind("error runtimeerror",function(){a=null,s()}),a.init()})}),e.drop_element&&o.each(e.drop_element,function(e){s.push(function(n){var s=new t.FileDrop(o.extend({},u,{drop_zone:e}));s.onready=function(){var e=t.Runtime.getInfo(this.ruid);t.extend(r.features,{chunks:e.can("slice_blob"),multipart:e.can("send_multipart"),dragdrop:e.can("drag_and_drop")}),i++,h.push(this),n()},s.ondrop=function(){r.addFile(this.files)},s.bind("error runtimeerror",function(){s=null,n()}),s.init()})}),t.inSeries(s,function(){typeof n=="function"&&n(i)})}function T(e,r,i){var s=new t.Image;try{s.onload=function(){if(r.width>this.width&&r.height>this.height&&r.quality===n&&r.preserve_headers&&!r.crop)return this.destroy(),i(e);s.downsize(r.width,r.height,r.crop,r.preserve_headers)},s.onresize=function(){i(this.getAsBlob(e.type,r.quality)),this.destroy()},s.onerror=function(){i(e)},s.load(e)}catch(o){i(e)}}function N(e,n,r){function f(e,t,n){var r=a[e];switch(e){case"max_file_size":e==="max_file_size"&&(a.max_file_size=a.filters.max_file_size=t);break;case"chunk_size":if(t=o.parseSize(t))a[e]=t,a.send_file_name=!0;break;case"multipart":a[e]=t,t||(a.send_file_name=!0);break;case"unique_names":a[e]=t,t&&(a.send_file_name=!0);break;case"filters":o.typeOf(t)==="array"&&(t={mime_types:t}),n?o.extend(a.filters,t):a.filters=t,t.mime_types&&(a.filters.mime_types.regexp=function(e){var t=[];return o.each(e,function(e){o.each(e.extensions.split(/,/),function(e){/^\s*\*\s*$/.test(e)?t.push("\\.*"):t.push("\\."+e.replace(new RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,"\\$&")+"]","g"),"\\$&"))})}),new RegExp("("+t.join("|")+")$","i")}(a.filters.mime_types));break;case"resize":n?o.extend(a.resize,t,{enabled:!0}):a.resize=t;break;case"prevent_duplicates":a.prevent_duplicates=a.filters.prevent_duplicates=!!t;break;case"container":case"browse_button":case"drop_element":t="container"===e?o.get(t):o.getAll(t);case"runtimes":case"multi_selection":case"flash_swf_url":case"silverlight_xap_url":a[e]=t,n||(u=!0);break;default:a[e]=t}n||i.trigger("OptionChanged",e,t,r)}var i=this,u=!1;typeof e=="object"?o.each(e,function(e,t){f(t,e,r)}):f(e,n,r),r?(a.required_features=s(o.extend({},a)),l=s(o.extend({},a,{required_features:!0}))):u&&(i.trigger("Destroy"),x.call(i,a,function(e){e?(i.runtime=t.Runtime.getInfo(w()).type,i.trigger("Init",{runtime:i.runtime}),i.trigger("PostInit")):i.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")})}))}function C(e,t){if(e.settings.unique_names){var n=t.name.match(/\.([^.]+)$/),r="part";n&&(r=n[1]),t.target_name=t.id+"."+r}}function k(e,n){function h(){u-->0?r(p,1e3):(n.loaded=f,e.trigger("Error",{code:o.HTTP_ERROR,message:o.translate("HTTP Error."),file:n,response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()}))}function p(){var d,v,g={},y;if(n.status!==o.UPLOADING||e.state===o.STOPPED)return;e.settings.send_file_name&&(g.name=n.target_name||n.name),s&&a.chunks&&c.size>s?(y=Math.min(s,c.size-f),d=c.slice(f,f+y)):(y=c.size,d=c),s&&a.chunks&&(e.settings.send_chunk_number?(g.chunk=Math.ceil(f/s),g.chunks=Math.ceil(c.size/s)):(g.offset=f,g.total=c.size)),m=new t.XMLHttpRequest,m.upload&&(m.upload.onprogress=function(t){n.loaded=Math.min(n.size,f+t.loaded),e.trigger("UploadProgress",n)}),m.onload=function(){if(m.status>=400){h();return}u=e.settings.max_retries,y<c.size?(d.destroy(),f+=y,n.loaded=Math.min(f,c.size),e.trigger("ChunkUploaded",n,{offset:n.loaded,total:c.size,response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()}),t.Env.browser==="Android Browser"&&e.trigger("UploadProgress",n)):n.loaded=n.size,d=v=null,!f||f>=c.size?(n.size!=n.origSize&&(c.destroy(),c=null),e.trigger("UploadProgress",n),n.status=o.DONE,e.trigger("FileUploaded",n,{response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()})):r(p,1)},m.onerror=function(){h()},m.onloadend=function(){this.destroy(),m=null},e.settings.multipart&&a.multipart?(m.open("post",i,!0),o.each(e.settings.headers,function(e,t){m.setRequestHeader(t,e)}),v=new t.FormData,o.each(o.extend(g,e.settings.multipart_params),function(e,t){v.append(t,e)}),v.append(e.settings.file_data_name,d),m.send(v,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:l,swf_url:e.settings.flash_swf_url,xap_url:e.settings.silverlight_xap_url})):(i=o.buildUrl(e.settings.url,o.extend(g,e.settings.multipart_params)),m.open("post",i,!0),m.setRequestHeader("Content-Type","application/octet-stream"),o.each(e.settings.headers,function(e,t){m.setRequestHeader(t,e)}),m.send(d,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:l,swf_url:e.settings.flash_swf_url,xap_url:e.settings.silverlight_xap_url}))}var i=e.settings.url,s=e.settings.chunk_size,u=e.settings.max_retries,a=e.features,f=0,c;n.loaded&&(f=n.loaded=s?s*Math.floor(n.loaded/s):0),c=n.getSource(),e.settings.resize.enabled&&E(c,"send_binary_string")&&!!~t.inArray(c.type,["image/jpeg","image/png"])?T.call(this,c,e.settings.resize,function(e){c=e,n.size=e.size,p()}):p()}function L(e,t){y(t)}function A(e){if(e.state==o.STARTED)p=+(new Date);else if(e.state==o.STOPPED)for(var t=e.files.length-1;t>=0;t--)e.files[t].status==o.UPLOADING&&(e.files[t].status=o.QUEUED,b())}function O(){m&&m.abort()}function M(e){b(),r(function(){g.call(e)},1)}function _(e,t){t.code===o.INIT_ERROR?e.destroy():t.code===o.HTTP_ERROR&&(t.file.status=o.FAILED,y(t.file),e.state==o.STARTED&&(e.trigger("CancelUpload"),r(function(){g.call(e)},1)))}function D(e){e.stop(),o.each(f,function(e){e.destroy()}),f=[],c.length&&(o.each(c,function(e){e.destroy()}),c=[]),h.length&&(o.each(h,function(e){e.destroy()}),h=[]),l={},v=!1,p=m=null,d.reset()}var u=o.guid(),a,f=[],l={},c=[],h=[],p,d,v=!1,m;a={runtimes:t.Runtime.order,max_retries:0,chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",flash_swf_url:"js/Moxie.swf",silverlight_xap_url:"js/Moxie.xap",filters:{mime_types:[],prevent_duplicates:!1,max_file_size:0},resize:{enabled:!1,preserve_headers:!0,crop:!1},send_file_name:!0,send_chunk_number:!0},N.call(this,e,null,!0),d=new o.QueueProgress,o.extend(this,{id:u,uid:u,state:o.STOPPED,features:{},runtime:null,files:f,settings:a,total:d,init:function(){var e=this,n,r,i;r=e.getOption("preinit"),typeof r=="function"?r(e):o.each(r,function(t,n){e.bind(n,t)}),S.call(e),o.each(["container","browse_button","drop_element"],function(t){if(e.getOption(t)===null)return i={code:o.INIT_ERROR,message:o.translate("'%' specified, but cannot be found.")},!1});if(i)return e.trigger("Error",i);if(!a.browse_button&&!a.drop_element)return e.trigger("Error",{code:o.INIT_ERROR,message:o.translate("You must specify either 'browse_button' or 'drop_element'.")});x.call(e,a,function(n){var r=e.getOption("init");typeof r=="function"?r(e):o.each(r,function(t,n){e.bind(n,t)}),n?(e.runtime=t.Runtime.getInfo(w()).type,e.trigger("Init",{runtime:e.runtime}),e.trigger("PostInit")):e.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")})})},setOption:function(e,t){N.call(this,e,t,!this.runtime)},getOption:function(e){return e?a[e]:a},refresh:function(){c.length&&o.each(c,function(e){e.trigger("Refresh")}),this.trigger("Refresh")},start:function(){this.state!=o.STARTED&&(this.state=o.STARTED,this.trigger("StateChanged"),g.call(this))},stop:function(){this.state!=o.STOPPED&&(this.state=o.STOPPED,this.trigger("StateChanged"),this.trigger("CancelUpload"))},disableBrowse:function(){v=arguments[0]!==n?arguments[0]:!0,c.length&&o.each(c,function(e){e.disable(v)}),this.trigger("DisableBrowse",v)},getFile:function(e){var t;for(t=f.length-1;t>=0;t--)if(f[t].id===e)return f[t]},addFile:function(e,n){function c(e,n){var r=[];t.each(s.settings.filters,function(t,n){i[n]&&r.push(function(r){i[n].call(s,t,e,function(e){r(!e)})})}),t.inSeries(r,n)}function h(e){var i=t.typeOf(e);if(e instanceof t.File){if(!e.ruid&&!e.isDetached()){if(!l)return!1;e.ruid=l,e.connectRuntime(l)}h(new o.File(e))}else e instanceof t.Blob?(h(e.getSource()),e.destroy()):e instanceof o.File?(n&&(e.name=n),u.push(function(t){c(e,function(n){n||(f.push(e),a.push(e),s.trigger("FileFiltered",e)),r(t,1)})})):t.inArray(i,["file","blob"])!==-1?h(new t.File(null,e)):i==="node"&&t.typeOf(e.files)==="filelist"?t.each(e.files,h):i==="array"&&(n=null,t.each(e,h))}var s=this,u=[],a=[],l;l=w(),h(e),u.length&&t.inSeries(u,function(){a.length&&s.trigger("FilesAdded",a)})},removeFile:function(e){var t=typeof e=="string"?e:e.id;for(var n=f.length-1;n>=0;n--)if(f[n].id===t)return this.splice(n,1)[0]},splice:function(e,t){var r=f.splice(e===n?0:e,t===n?f.length:t),i=!1;return this.state==o.STARTED&&(o.each(r,function(e){if(e.status===o.UPLOADING)return i=!0,!1}),i&&this.stop()),this.trigger("FilesRemoved",r),o.each(r,function(e){e.destroy()}),i&&this.start(),r},dispatchEvent:function(e){var t,n,r;e=e.toLowerCase(),t=this.hasEventListener(e);if(t){t.sort(function(e,t){return t.priority-e.priority}),n=[].slice.call(arguments),n.shift(),n.unshift(this);for(var i=0;i<t.length;i++)if(t[i].fn.apply(t[i].scope,n)===!1)return!1}return!0},bind:function(e,t,n,r){o.Uploader.prototype.bind.call(this,e,t,r,n)},destroy:function(){this.trigger("Destroy"),a=d=null,this.unbindAll()}})},o.Uploader.prototype=t.EventTarget.instance,o.File=function(){function n(n){o.extend(this,{id:o.guid(),name:n.name||n.fileName,type:n.type||"",size:n.size||n.fileSize,origSize:n.size||n.fileSize,loaded:0,percent:0,status:o.QUEUED,lastModifiedDate:n.lastModifiedDate||(new Date).toLocaleString(),getNative:function(){var e=this.getSource().getSource();return t.inArray(t.typeOf(e),["blob","file"])!==-1?e:null},getSource:function(){return e[this.id]?e[this.id]:null},destroy:function(){var t=this.getSource();t&&(t.destroy(),delete e[this.id])}}),e[this.id]=n}var e={};return n}(),o.QueueProgress=function(){var e=this;e.size=0,e.loaded=0,e.uploaded=0,e.failed=0,e.queued=0,e.percent=0,e.bytesPerSec=0,e.reset=function(){e.size=e.loaded=e.uploaded=e.failed=e.queued=e.percent=e.bytesPerSec=0}},e.plupload=o})(window,mOxie);;/* global jQuery:true, alert:true */

/**
jQuery based implementation of the Plupload API - multi-runtime file uploading API.

To use the widget you must include _jQuery_. It is not meant to be extended in any way and is provided to be
used as it is.

@example
	<!-- Instantiating: -->
	<div id="uploader">
		<p>Your browser doesn't have Flash, Silverlight or HTML5 support.</p>
	</div>

	<script>
		$('#uploader').pluploadQueue({
			url : '../upload.php',
			filters : [
				{title : "Image files", extensions : "jpg,gif,png"}
			],
			rename: true,
			flash_swf_url : '../../js/Moxie.swf',
			silverlight_xap_url : '../../js/Moxie.xap',
		});
	</script>

@example
	// Retrieving a reference to plupload.Uploader object
	var uploader = $('#uploader').pluploadQueue();

	uploader.bind('FilesAdded', function() {
		
		// Autostart
		setTimeout(uploader.start, 1); // "detach" from the main thread
	});

@class pluploadQueue
@constructor
@param {Object} settings For detailed information about each option check documentation.
	@param {String} settings.url URL of the server-side upload handler.
	@param {Number|String} [settings.chunk_size=0] Chunk size in bytes to slice the file into. Shorcuts with b, kb, mb, gb, tb suffixes also supported. `e.g. 204800 or "204800b" or "200kb"`. By default - disabled.
	@param {String} [settings.file_data_name="file"] Name for the file field in Multipart formated message.
	@param {Array} [settings.filters=[]] Set of file type filters, each one defined by hash of title and extensions. `e.g. {title : "Image files", extensions : "jpg,jpeg,gif,png"}`. Dispatches `plupload.FILE_EXTENSION_ERROR`
	@param {String} [settings.flash_swf_url] URL of the Flash swf.
	@param {Object} [settings.headers] Custom headers to send with the upload. Hash of name/value pairs.
	@param {Number|String} [settings.max_file_size] Maximum file size that the user can pick, in bytes. Optionally supports b, kb, mb, gb, tb suffixes. `e.g. "10mb" or "1gb"`. By default - not set. Dispatches `plupload.FILE_SIZE_ERROR`.
	@param {Number} [settings.max_retries=0] How many times to retry the chunk or file, before triggering Error event.
	@param {Boolean} [settings.multipart=true] Whether to send file and additional parameters as Multipart formated message.
	@param {Object} [settings.multipart_params] Hash of key/value pairs to send with every file upload.
	@param {Boolean} [settings.multi_selection=true] Enable ability to select multiple files at once in file dialog.
	@param {Boolean} [settings.prevent_duplicates=false] Do not let duplicates into the queue. Dispatches `plupload.FILE_DUPLICATE_ERROR`.
	@param {String|Object} [settings.required_features] Either comma-separated list or hash of required features that chosen runtime should absolutely possess.
	@param {Object} [settings.resize] Enable resizng of images on client-side. Applies to `image/jpeg` and `image/png` only. `e.g. {width : 200, height : 200, quality : 90, crop: true}`
		@param {Number} [settings.resize.width] If image is bigger, it will be resized.
		@param {Number} [settings.resize.height] If image is bigger, it will be resized.
		@param {Number} [settings.resize.quality=90] Compression quality for jpegs (1-100).
		@param {Boolean} [settings.resize.crop=false] Whether to crop images to exact dimensions. By default they will be resized proportionally.
	@param {String} [settings.runtimes="html5,flash,silverlight,html4"] Comma separated list of runtimes, that Plupload will try in turn, moving to the next if previous fails.
	@param {String} [settings.silverlight_xap_url] URL of the Silverlight xap.
	@param {Boolean} [settings.unique_names=false] If true will generate unique filenames for uploaded files.

	@param {Boolean} [settings.dragdrop=true] Enable ability to add file to the queue by drag'n'dropping them from the desktop.
	@param {Boolean} [settings.rename=false] Enable ability to rename files in the queue.
	@param {Boolean} [settings.multiple_queues=true] Re-activate the widget after each upload procedure.
*/
;(function($, o) {
	var uploaders = {};

	function _(str) {
		return plupload.translate(str) || str;
	}

	function renderUI(id, target) {
		// Remove all existing non plupload items
		target.contents().each(function(i, node) {
			node = $(node);

			if (!node.is('.plupload')) {
				node.remove();
			}
		});

		target.prepend(
			'<div class="plupload_wrapper plupload_scroll">' +
				'<div id="' + id + '_container" class="plupload_container">' +
					'<div class="plupload">' +
						'<div class="plupload_header">' +
							'<div class="plupload_header_content">' +
								'<div class="plupload_header_title">' + _('Select files') + '</div>' +
								'<div class="plupload_header_text">' + _('Add files to the upload queue and click the start button.') + '</div>' +
							'</div>' +
						'</div>' +

						'<div class="plupload_content">' +
							'<div class="plupload_filelist_header">' +
								'<div class="plupload_file_name">' + _('Filename') + '</div>' +
								'<div class="plupload_file_action">&nbsp;</div>' +
								'<div class="plupload_file_status"><span>' + _('Status') + '</span></div>' +
								'<div class="plupload_file_size">' + _('Size') + '</div>' +
								'<div class="plupload_clearer">&nbsp;</div>' +
							'</div>' +

							'<ul id="' + id + '_filelist" class="plupload_filelist"></ul>' +

							'<div class="plupload_filelist_footer">' +
								'<div class="plupload_file_name">' +
									'<div class="plupload_buttons">' +
										'<a href="#" class="plupload_button plupload_add" id="' + id + '_browse">' + _('Add Files') + '</a>' +
										'<a href="#" class="plupload_button plupload_start">' + _('Start Upload') + '</a>' +
									'</div>' +
									'<span class="plupload_upload_status"></span>' +
								'</div>' +
								'<div class="plupload_file_action"></div>' +
								'<div class="plupload_file_status"><span class="plupload_total_status">0%</span></div>' +
								'<div class="plupload_file_size"><span class="plupload_total_file_size">0 b</span></div>' +
								'<div class="plupload_progress">' +
									'<div class="plupload_progress_container">' +
										'<div class="plupload_progress_bar"></div>' +
									'</div>' +
								'</div>' +
								'<div class="plupload_clearer">&nbsp;</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<input type="hidden" id="' + id + '_count" name="' + id + '_count" value="0" />' +
			'</div>'
		);
	}

	$.fn.pluploadQueue = function(settings) {
		if (settings) {
			this.each(function() {
				var uploader, target, id, contents_bak;

				target = $(this);
				id = target.attr('id');

				if (!id) {
					id = plupload.guid();
					target.attr('id', id);
				}

				contents_bak = target.html();
				renderUI(id, target);

				settings = $.extend({
					dragdrop : true,
					browse_button : id + '_browse',
					container : id
				}, settings);

				// Enable drag/drop (see PostInit handler as well)
				if (settings.dragdrop) {
					settings.drop_element = id + '_filelist';
				}

				uploader = new plupload.Uploader(settings);

				uploaders[id] = uploader;

				function handleStatus(file) {
					var actionClass;

					if (file.status == plupload.DONE) {
						actionClass = 'plupload_done';
					}

					if (file.status == plupload.FAILED) {
						actionClass = 'plupload_failed';
					}

					if (file.status == plupload.QUEUED) {
						actionClass = 'plupload_delete';
					}

					if (file.status == plupload.UPLOADING) {
						actionClass = 'plupload_uploading';
					}

					var icon = $('#' + file.id).attr('class', actionClass).find('a').css('display', 'block');
					if (file.hint) {
						icon.attr('title', file.hint);	
					}
				}

				function updateTotalProgress() {
					$('span.plupload_total_status', target).html(uploader.total.percent + '%');
					$('div.plupload_progress_bar', target).css('width', uploader.total.percent + '%');
					$('span.plupload_upload_status', target).html(
						o.sprintf(_('Uploaded %d/%d files'), uploader.total.uploaded, uploader.files.length)
					);
				}

				function updateList() {
					var fileList = $('ul.plupload_filelist', target).html(''), inputCount = 0, inputHTML;

					$.each(uploader.files, function(i, file) {
						inputHTML = '';

						if (file.status == plupload.DONE) {
							if (file.target_name) {
								inputHTML += '<input type="hidden" name="' + id + '_' + inputCount + '_tmpname" value="' + plupload.xmlEncode(file.target_name) + '" />';
							}

							inputHTML += '<input type="hidden" name="' + id + '_' + inputCount + '_name" value="' + plupload.xmlEncode(file.name) + '" />';
							inputHTML += '<input type="hidden" name="' + id + '_' + inputCount + '_status" value="' + (file.status == plupload.DONE ? 'done' : 'failed') + '" />';
	
							inputCount++;

							$('#' + id + '_count').val(inputCount);
						}

						fileList.append(
							'<li id="' + file.id + '">' +
								'<div class="plupload_file_name"><span>' + file.name + '</span></div>' +
								'<div class="plupload_file_action"><a href="#"></a></div>' +
								'<div class="plupload_file_status">' + file.percent + '%</div>' +
								'<div class="plupload_file_size">' + plupload.formatSize(file.size) + '</div>' +
								'<div class="plupload_clearer">&nbsp;</div>' +
								inputHTML +
							'</li>'
						);

						handleStatus(file);

						$('#' + file.id + '.plupload_delete a').click(function(e) {
							$('#' + file.id).remove();
							uploader.removeFile(file);

							e.preventDefault();
						});
					});

					$('span.plupload_total_file_size', target).html(plupload.formatSize(uploader.total.size));

					if (uploader.total.queued === 0) {
						$('span.plupload_add_text', target).html(_('Add Files'));
					} else {
						$('span.plupload_add_text', target).html(o.sprintf(_('%d files queued'), uploader.total.queued));
					}

					$('a.plupload_start', target).toggleClass('plupload_disabled', uploader.files.length == (uploader.total.uploaded + uploader.total.failed));

					// Scroll to end of file list
					fileList[0].scrollTop = fileList[0].scrollHeight;

					updateTotalProgress();

					// Re-add drag message if there is no files
					if (!uploader.files.length && uploader.features.dragdrop && uploader.settings.dragdrop) {
						$('#' + id + '_filelist').append('<li class="plupload_droptext">' + _("Drag files here.") + '</li>');
					}
				}

				function destroy() {
					delete uploaders[id];
					uploader.destroy();
					target.html(contents_bak);
					uploader = target = contents_bak = null;
				}

				uploader.bind("UploadFile", function(up, file) {
					$('#' + file.id).addClass('plupload_current_file');
				});

				uploader.bind('Init', function(up, res) {
					// Enable rename support
					if (!settings.unique_names && settings.rename) {
						target.on('click', '#' + id + '_filelist div.plupload_file_name span', function(e) {
							var targetSpan = $(e.target), file, parts, name, ext = "";

							// Get file name and split out name and extension
							file = up.getFile(targetSpan.parents('li')[0].id);
							name = file.name;
							parts = /^(.+)(\.[^.]+)$/.exec(name);
							if (parts) {
								name = parts[1];
								ext = parts[2];
							}

							// Display input element
							targetSpan.hide().after('<input type="text" />');
							targetSpan.next().val(name).focus().blur(function() {
								targetSpan.show().next().remove();
							}).keydown(function(e) {
								var targetInput = $(this);

								if (e.keyCode == 13) {
									e.preventDefault();

									// Rename file and glue extension back on
									file.name = targetInput.val() + ext;
									targetSpan.html(file.name);
									targetInput.blur();
								}
							});
						});
					}

					$('#' + id + '_container').attr('title', 'Using runtime: ' + res.runtime);

					$('a.plupload_start', target).click(function(e) {
						if (!$(this).hasClass('plupload_disabled')) {
							uploader.start();
						}

						e.preventDefault();
					});

					$('a.plupload_stop', target).click(function(e) {
						e.preventDefault();
						uploader.stop();
					});

					$('a.plupload_start', target).addClass('plupload_disabled');
				});

				uploader.bind("Error", function(up, err) {
					var file = err.file, message;

					if (file) {
						message = err.message;

						if (err.details) {
							message += " (" + err.details + ")";
						}

						if (err.code == plupload.FILE_SIZE_ERROR) {
							alert(_("Error: File too large:") + " " + file.name);
						}

						if (err.code == plupload.FILE_EXTENSION_ERROR) {
							alert(_("Error: Invalid file extension:") + " " + file.name);
						}
						
						file.hint = message;
						$('#' + file.id).attr('class', 'plupload_failed').find('a').css('display', 'block').attr('title', message);
					}

					if (err.code === plupload.INIT_ERROR) {
						setTimeout(function() {
							destroy();
						}, 1);
					}
				});

				uploader.bind("PostInit", function(up) {
					// features are populated only after input components are fully instantiated
					if (up.settings.dragdrop && up.features.dragdrop) {
						$('#' + id + '_filelist').append('<li class="plupload_droptext">' + _("Drag files here.") + '</li>');
					}
				});

				uploader.init();

				uploader.bind('StateChanged', function() {
					if (uploader.state === plupload.STARTED) {
						$('li.plupload_delete a,div.plupload_buttons', target).hide();
						uploader.disableBrowse(true);

						$('span.plupload_upload_status,div.plupload_progress,a.plupload_stop', target).css('display', 'block');
						$('span.plupload_upload_status', target).html('Uploaded ' + uploader.total.uploaded + '/' + uploader.files.length + ' files');

						if (settings.multiple_queues) {
							$('span.plupload_total_status,span.plupload_total_file_size', target).show();
						}
					} else {
						updateList();
						$('a.plupload_stop,div.plupload_progress', target).hide();
						$('a.plupload_delete', target).css('display', 'block');

						if (settings.multiple_queues && uploader.total.uploaded + uploader.total.failed == uploader.files.length) {
							$(".plupload_buttons,.plupload_upload_status", target).css("display", "inline");
							uploader.disableBrowse(false);

							$(".plupload_start", target).addClass("plupload_disabled");
							$('span.plupload_total_status,span.plupload_total_file_size', target).hide();
						}
					}
				});

				uploader.bind('FilesAdded', updateList);

				uploader.bind('FilesRemoved', function() {
					// since the whole file list is redrawn for every change in the queue
					// we need to scroll back to the file removal point to avoid annoying
					// scrolling to the bottom bug (see #926)
					var scrollTop = $('#' + id + '_filelist').scrollTop();
					updateList();
					$('#' + id + '_filelist').scrollTop(scrollTop);
				});

				uploader.bind('FileUploaded', function(up, file) {
					handleStatus(file);
				});

				uploader.bind("UploadProgress", function(up, file) {
					// Set file specific progress
					$('#' + file.id + ' div.plupload_file_status', target).html(file.percent + '%');

					handleStatus(file);
					updateTotalProgress();
				});

				// Call setup function
				if (settings.setup) {
					settings.setup(uploader);
				}
			});

			return this;
		} else {
			// Get uploader instance for specified element
			return uploaders[$(this[0]).attr('id')];
		}
	};
})(jQuery, mOxie);
;/**
 * We use this wrapper to control global variables.
 * The only global variable we expose is Raphael.sketchpad.
 */
(function(Raphael) {
	
	/**
	 * Function to create SketchPad object.
	 */
	Raphael.sketchpad = function(paper, options) {
		return new SketchPad(paper, options);
	}
	
	// Current version.
	Raphael.sketchpad.VERSION = '0.5.1';
	
	/**
	 * The Sketchpad object.
	 */
	var SketchPad = function(paper, options) {
		// Use self to reduce confusion about this.
		var self = this;
		
		var _options = {
			width: 100,
			height: 100,
			strokes: [],
			editing: true
		};
		jQuery.extend(_options, options);
		
		
		// The Raphael context to draw on.
		var _paper;
		if (paper.raphael && paper.raphael.constructor == Raphael.constructor) {
			_paper = paper;
		} else if (typeof paper == "string") {
			_paper = Raphael(paper, _options.width, _options.height);
		} else {
			throw "first argument must be a Raphael object, an element ID, an array with 3 elements";
		}
		
		// The Raphael SVG canvas.
		var _canvas = _paper.canvas;

		// The HTML element that contains the canvas.
		var _container = $(_canvas).parent();

		// The default pen.
		var _pen = new Pen();
		
		
		// Public Methods
		//-----------------
		
		self.paper = function() {
			return _paper;
		};
		
		self.canvas = function() {
			return _canvas;
		};
		
		self.container = function() {
			return _container;
		};
		
		self.pen = function(value) {
			if (value === undefined) {
				return _pen;
			}
			_pen = value;
			return self; // function-chaining
		};
		
		// Convert an SVG path into a string, so that it's smaller when JSONified.
		// This function is used by json().
		function svg_path_to_string(path) {
			var str = "";
			for (var i = 0, n = path.length; i < n; i++) {
				var point = path[i];
				str += point[0] + point[1] + "," + point[2];
			}
			return str;
		}
		
		// Convert a string into an SVG path. This reverses the above code.
		function string_to_svg_path(str) {
			var path = [];
			var tokens = str.split("L");
			
			if (tokens.length > 0) {
				var token = tokens[0].replace("M", "");
				var points = token.split(",");
				path.push(["M", parseInt(points[0]), parseInt(points[1])]);
				
				for (var i = 1, n = tokens.length; i < n; i++) {
					token = tokens[i];
					points = token.split(",");
					path.push(["L", parseInt(points[0]), parseInt(points[1])]);
				}
			}
			
			return path;
		}
		
		self.json = function(value) {
			if (value === undefined) {
				for (var i = 0, n = _strokes.length; i < n; i++) {
					var stroke = _strokes[i];
					if (typeof stroke.path == "object") {
						stroke.path = svg_path_to_string(stroke.path);
					}
				}
				return JSON.stringify(_strokes);
			}
			
			return self.strokes(JSON.parse(value));
		};
		
		self.strokes = function(value) {
			if (value === undefined) {
				return _strokes;
			}
			if (jQuery.isArray(value)) {
				_strokes = value;
				
				for (var i = 0, n = _strokes.length; i < n; i++) {
					var stroke = _strokes[i];
					if (typeof stroke.path == "string") {
						stroke.path = string_to_svg_path(stroke.path);
					}
				}
				
				_action_history.add({
					type: "batch",
					strokes: jQuery.merge([], _strokes) // Make a copy.
				})
				
				_redraw_strokes();
				_fire_change();
			}
			return self; // function-chaining
		}
		
		self.freeze_history = function() {
			_action_history.freeze();
		};
		
		self.undoable = function() {
			return _action_history.undoable();
		};

		self.undo = function() {
			if (_action_history.undoable()) {
				_action_history.undo();
				_strokes = _action_history.current_strokes();
				_redraw_strokes();
				_fire_change();
			}
			return self; // function-chaining
		};

		self.redoable = function() {
			return _action_history.redoable();
		};

		self.redo = function() {
			if (_action_history.redoable()) {
				_action_history.redo();
				_strokes = _action_history.current_strokes();
				_redraw_strokes();
				_fire_change();
			}
			return self; // function-chaining
		};
		
		self.clear = function() {
			_action_history.add({
				type: "clear"
			});
			
			_strokes = [];
			_redraw_strokes();
			_fire_change();
			
			return self; // function-chaining
		};
		
		self.animate = function(ms) {
			if (ms === undefined) {
				ms = 500;
			}
			
			_paper.clear();
			
			if (_strokes.length > 0) {
				var i = 0;

				function animate() {
					var stroke = _strokes[i];
					var type = stroke.type;
					_paper[type]()
						.attr(stroke)
						.click(_pathclick);

					i++;
					if (i < _strokes.length) {
						setTimeout(animate, ms);
					}
				};

				animate();
			}
			
			return self; // function-chaining
		};
		
		self.editing = function(mode) {
			if (mode === undefined) {
				return _options.editing;
			}
			
			_options.editing = mode;
			if (_options.editing) {
				if (_options.editing == "erase") {
					// Cursor is crosshair, so it looks like we can do something.
					$(_container).css("cursor", "crosshair");
					$(_container).unbind("mousedown", _mousedown);
					$(_container).unbind("mousemove", _mousemove);
					$(_container).unbind("mouseup", _mouseup);
					$(document).unbind("mouseup", _mouseup);

					// iPhone Events
					var agent = navigator.userAgent;
					if (agent.indexOf("iPhone") > 0 || agent.indexOf("iPod") > 0) {
						$(_container).unbind("touchstart", _touchstart);
						$(_container).unbind("touchmove", _touchmove);
						$(_container).unbind("touchend", _touchend);
					}
				} else {
					// Cursor is crosshair, so it looks like we can do something.
					$(_container).css("cursor", "crosshair");

					$(_container).mousedown(_mousedown);
					$(_container).mousemove(_mousemove);
					$(_container).mouseup(_mouseup);

					// Handle the case when the mouse is released outside the canvas.
					$(document).mouseup(_mouseup);

					// iPhone Events
					var agent = navigator.userAgent;
					if (agent.indexOf("iPhone") > 0 || agent.indexOf("iPod") > 0) {
						$(_container).bind("touchstart", _touchstart);
						$(_container).bind("touchmove", _touchmove);
						$(_container).bind("touchend", _touchend);
					}
				}
			} else {
				// Reverse the settings above.
				$(_container).attr("style", "cursor:default");
				$(_container).unbind("mousedown", _mousedown);
				$(_container).unbind("mousemove", _mousemove);
				$(_container).unbind("mouseup", _mouseup);
				$(document).unbind("mouseup", _mouseup);
				
				// iPhone Events
				var agent = navigator.userAgent;
				if (agent.indexOf("iPhone") > 0 || agent.indexOf("iPod") > 0) {
					$(_container).unbind("touchstart", _touchstart);
					$(_container).unbind("touchmove", _touchmove);
					$(_container).unbind("touchend", _touchend);
				}
			}
			
			return self; // function-chaining
		}
		
		// Change events
		//----------------
		
		var _change_fn = function() {};
		self.change = function(fn) {
			if (fn == null || fn === undefined) {
				_change_fn = function() {};
			} else if (typeof fn == "function") {
				_change_fn = fn;
			}
		};
		
		function _fire_change() {
			_change_fn();
		};
		
		// Miscellaneous methods
		//------------------
		
		function _redraw_strokes() {
			_paper.clear();
			
			for (var i = 0, n = _strokes.length; i < n; i++) {
				var stroke = _strokes[i];
				var type = stroke.type;
				_paper[type]()
					.attr(stroke)
					.click(_pathclick);
			}
		};
		
		function _disable_user_select() {
			$("*").css("-webkit-user-select", "none");
			$("*").css("-moz-user-select", "none");
			var myNav = navigator.userAgent.toLowerCase();
			if (myNav.indexOf('msie') != -1) {
				$("body").attr("onselectstart", "return false;");
			}
		}
		
		function _enable_user_select() {
			$("*").css("-webkit-user-select", "text");
			$("*").css("-moz-user-select", "text");
			var myNav = navigator.userAgent.toLowerCase();
			if (myNav.indexOf('msie') != -1) {
				$("body").removeAttr("onselectstart");
			}
		}
		
		// Event handlers
		//-----------------
		// We can only attach events to the container, so do it.
		
		function _pathclick(e) {
			if (e.which==1){
				if (_options.editing == "erase") {
					var stroke = this.attr();
					stroke.type = this.type;
					
					_action_history.add({
						type: "erase",
						stroke: stroke
					});
					
					for (var i = 0, n = _strokes.length; i < n; i++) {
						var s = _strokes[i];
						if (equiv(s, stroke)) {
							_strokes.splice(i, 1);
						}
					}
					
					_fire_change();
					
					this.remove();
				}
			} 
			
		};
		
		function _mousedown(e) {
			_disable_user_select();
			if (e.which==1){
				_pen.start(e, self);
			}
			
		};

		function _mousemove(e) {
			_pen.move(e, self);
		};

		function _mouseup(e) {
			_enable_user_select();
			if (e.which==1){
			var path = _pen.finish(e, self);
			
			if (path != null) {
				// Add event when clicked.
				path.click(_pathclick);
				
				// Save the stroke.
				var stroke = path.attr();
				stroke.type = path.type;
				
				_strokes.push(stroke);
				
				_action_history.add({
					type: "stroke",
					stroke: stroke
				});
				
				_fire_change();
			}
			}
		};
		
		function _touchstart(e) {
			e = e.originalEvent;
			e.preventDefault();

			if (e.touches.length == 1) {
				var touch = e.touches[0];
				_mousedown(touch);
			}
		}
		
		function _touchmove(e) {
			e = e.originalEvent;
			e.preventDefault();

			if (e.touches.length == 1) {
				var touch = e.touches[0];
				_mousemove(touch);
			}
		}
		
		function _touchend(e) {
			e = e.originalEvent;
			e.preventDefault();

			_mouseup(e);
		}
		
		// Setup
		//--------
		
		var _action_history = new ActionHistory();
		
		// Path data
		var _strokes = _options.strokes;
		if (jQuery.isArray(_strokes) && _strokes.length > 0) {
			_action_history.add({
				type: "init",
				strokes: jQuery.merge([], _strokes)	// Make a clone.
			});
			_redraw_strokes();
		} else {
			_strokes = [];
			_redraw_strokes();
		}
		
		self.editing(_options.editing);
	};
	
	var ActionHistory = function() {
		var self = this;
		
		var _history = [];
		
		// Index of the last state.
		var _current_state = -1;
		
		// Index of the freeze state.
		// The freeze state is the state where actions cannot be undone.
		var _freeze_state = -1;
		
		// The current set of strokes if strokes were to be rebuilt from history.
		// Set to null to force refresh.
		var _current_strokes = null;
		
		self.add = function(action) {
			if (_current_state + 1 < _history.length) {
				_history.splice(_current_state + 1, _history.length - (_current_state + 1));
			}
			
			_history.push(action);
			_current_state = _history.length - 1;
			
			// Reset current strokes.
			_current_strokes = null;
		};
		
		self.freeze = function(index) {
			if (index === undefined) {
				_freeze_state = _current_state;
			} else {
				_freeze_state = index;
			}
		};
		
		self.undoable = function() {
			return (_current_state > -1 && _current_state > _freeze_state);
		};
		
		self.undo = function() {
			if (self.undoable()) {
				_current_state--;
				
				// Reset current strokes.
				_current_strokes = null;
			}
		};
		
		self.redoable = function() {
			return _current_state < _history.length - 1;
		};
		
		self.redo = function() {
			if (self.redoable()) {
				_current_state++;
				
				// Reset current strokes.
				_current_strokes = null;
			}
		};
		
		// Rebuild the strokes from history.
		self.current_strokes = function() {
			if (_current_strokes == null) {
				var strokes = [];
				for (var i = 0; i <= _current_state; i++) {
					var action = _history[i];
					switch(action.type) {
						case "init":
						case "json":
						case "strokes":
						case "batch":
							jQuery.merge(strokes, action.strokes);
							break;
						case "stroke":
							strokes.push(action.stroke);
							break;
						case "erase":
							for (var s = 0, n = strokes.length; s < n; s++) {
								var stroke = strokes[s];
								if (equiv(stroke, action.stroke)) {
									strokes.splice(s, 1);
								}
							}
							break;
						case "clear":
							strokes = [];
							break;
					}
				}
				
				_current_strokes = strokes;
			}
			return _current_strokes;
		};
	};
	
	/**
	 * The default Pen object.
	 */
	var Pen = function() {
		var self = this;

		var _color = "#FFFFFF";
		var _opacity = 1.0;
		var _width = 5;
		var _offset = null;

		// Drawing state
		var _drawing = false;
		var _c = null;
		var _points = [];

		self.color = function(value) {
			if (value === undefined){
		      	return _color;
		    }

			_color = value;

			return self;
		};

		self.width = function(value) {
			if (value === undefined) {
				return _width;
			} 

			if (value < Pen.MIN_WIDTH) {
				value = Pen.MIN_WIDTH;
			} else if (value > Pen.MAX_WIDTH) {
				value = Pen.MAX_WIDTH;
			}

			_width = value;

			return self;
		}

		self.opacity = function(value) {
			if (value === undefined) {
				return _opacity;
			} 

			if (value < 0) {
				value = 0;
			} else if (value > 1) {
				value = 1;
			}

			_opacity = value;

			return self;
		}

		self.start = function(e, sketchpad) {
			_drawing = true;

			_offset = $(sketchpad.container()).offset();
			
			var x = e.pageX - _offset.left,
				y = e.pageY - _offset.top;
			_points.push([x, y]);

			_c = sketchpad.paper().path();

			_c.attr({ 
				stroke: _color,
				"stroke-opacity": _opacity,
				"stroke-width": _width,
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			});
		};

		self.finish = function(e, sketchpad) {
			var path = null;
			
			if (_c != null) {
				if (_points.length <= 1) {
					_c.remove();
				} else {
					path = _c;
				}
			}
			
			_drawing = false;
			_c = null;
			_points = [];
			
			return path;
		};

		self.move = function(e, sketchpad) {
			if (_drawing == true) {
				var x = e.pageX - _offset.left,
					y = e.pageY - _offset.top;			
				_points.push([x, y]);
				_c.attr({ path: points_to_svg() });
			}
		};

		function points_to_svg() {
			if (_points != null && _points.length > 1) {
				var p = _points[0];
				var path = "M" + p[0] + "," + p[1];
				for (var i = 1, n = _points.length; i < n; i++) {
					p = _points[i];
					path += "L" + p[0] + "," + p[1]; 
				} 
				return path;
			} else {
				return "";
			}
		};
	};
	
	Pen.MAX_WIDTH = 1000;
	Pen.MIN_WIDTH = 1;
	
	/**
	 * Utility to generate string representation of an object.
	 */
	function inspect(obj) {
		var str = "";
		for (var i in obj) {
			str += i + "=" + obj[i] + "\n";
		}
		return str;
	}
	
})(window.Raphael);

Raphael.fn.display = function(elements) {
	for (var i = 0, n = elements.length; i < n; i++) {
		var e = elements[i];
		var type = e.type;
		this[type]().attr(e);
	}
};


/**
 * Utility functions to compare objects by Phil Rathe.
 * http://philrathe.com/projects/equiv
 */

// Determine what is o.
function hoozit(o) {
    if (o.constructor === String) {
        return "string";
        
    } else if (o.constructor === Boolean) {
        return "boolean";

    } else if (o.constructor === Number) {

        if (isNaN(o)) {
            return "nan";
        } else {
            return "number";
        }

    } else if (typeof o === "undefined") {
        return "undefined";

    // consider: typeof null === object
    } else if (o === null) {
        return "null";

    // consider: typeof [] === object
    } else if (o instanceof Array) {
        return "array";
    
    // consider: typeof new Date() === object
    } else if (o instanceof Date) {
        return "date";

    // consider: /./ instanceof Object;
    //           /./ instanceof RegExp;
    //          typeof /./ === "function"; // => false in IE and Opera,
    //                                          true in FF and Safari
    } else if (o instanceof RegExp) {
        return "regexp";

    } else if (typeof o === "object") {
        return "object";

    } else if (o instanceof Function) {
        return "function";
    } else {
        return undefined;
    }
}

// Call the o related callback with the given arguments.
function bindCallbacks(o, callbacks, args) {
    var prop = hoozit(o);
    if (prop) {
        if (hoozit(callbacks[prop]) === "function") {
            return callbacks[prop].apply(callbacks, args);
        } else {
            return callbacks[prop]; // or undefined
        }
    }
}

// Test for equality any JavaScript type.
// Discussions and reference: http://philrathe.com/articles/equiv
// Test suites: http://philrathe.com/tests/equiv
// Author: Philippe RathÃ© <prathe@gmail.com>

var equiv = function () {

    var innerEquiv; // the real equiv function
    var callers = []; // stack to decide between skip/abort functions

    
    var callbacks = function () {

        // for string, boolean, number and null
        function useStrictEquality(b, a) {
            if (b instanceof a.constructor || a instanceof b.constructor) {
                // to catch short annotaion VS 'new' annotation of a declaration
                // e.g. var i = 1;
                //      var j = new Number(1);
                return a == b;
            } else {
                return a === b;
            }
        }

        return {
            "string": useStrictEquality,
            "boolean": useStrictEquality,
            "number": useStrictEquality,
            "null": useStrictEquality,
            "undefined": useStrictEquality,

            "nan": function (b) {
                return isNaN(b);
            },

            "date": function (b, a) {
                return hoozit(b) === "date" && a.valueOf() === b.valueOf();
            },

            "regexp": function (b, a) {
                return hoozit(b) === "regexp" &&
                    a.source === b.source && // the regex itself
                    a.global === b.global && // and its modifers (gmi) ...
                    a.ignoreCase === b.ignoreCase &&
                    a.multiline === b.multiline;
            },

            // - skip when the property is a method of an instance (OOP)
            // - abort otherwise,
            //   initial === would have catch identical references anyway
            "function": function () {
                var caller = callers[callers.length - 1];
                return caller !== Object &&
                        typeof caller !== "undefined";
            },

            "array": function (b, a) {
                var i;
                var len;

                // b could be an object literal here
                if ( ! (hoozit(b) === "array")) {
                    return false;
                }

                len = a.length;
                if (len !== b.length) { // safe and faster
                    return false;
                }
                for (i = 0; i < len; i++) {
                    if( ! innerEquiv(a[i], b[i])) {
                        return false;
                    }
                }
                return true;
            },

            "object": function (b, a) {
                var i;
                var eq = true; // unless we can proove it
                var aProperties = [], bProperties = []; // collection of strings

                // comparing constructors is more strict than using instanceof
                if ( a.constructor !== b.constructor) {
                    return false;
                }

                // stack constructor before traversing properties
                callers.push(a.constructor);

                for (i in a) { // be strict: don't ensures hasOwnProperty and go deep

                    aProperties.push(i); // collect a's properties

                    if ( ! innerEquiv(a[i], b[i])) {
                        eq = false;
                    }
                }

                callers.pop(); // unstack, we are done

                for (i in b) {
                    bProperties.push(i); // collect b's properties
                }

                // Ensures identical properties name
                return eq && innerEquiv(aProperties.sort(), bProperties.sort());
            }
        };
    }();

    innerEquiv = function () { // can take multiple arguments
        var args = Array.prototype.slice.apply(arguments);
        if (args.length < 2) {
            return true; // end transition
        }

        return (function (a, b) {
            if (a === b) {
                return true; // catch the most you can
            } else if (a === null || b === null || typeof a === "undefined" || typeof b === "undefined" || hoozit(a) !== hoozit(b)) {
                return false; // don't lose time with error prone cases
            } else {
                return bindCallbacks(a, callbacks, [b, a]);
            }

        // apply transition with (1..n) arguments
        })(args[0], args[1]) && arguments.callee.apply(this, args.splice(1, args.length -1));
    };

    return innerEquiv;

}();;/*global jQuery, plupload */
(function ($, plupload) {
	'use strict';
	
	var Plupload = function (el, options) {
		/*jshint camelcase: false */
		var elementId;
		var overrideOptions = {};
		var defaultOptions = {
			runtimes      :'html5,gears,flash,silverlight',
			max_file_size :'200mb',
			chunk_size    :"2MB",
			url           :'/admin/upload?folder=',
			flash_swf_url      :'/vendor/moxiecode/plupload/js/Moxie.swf',
			silverlight_xap_url:'/vendor/moxiecode/plupload/js/Moxie.xap',
			unique_names       :true
		};
		this.$el = $(el);
		
		// Element id & browse button.
		elementId = this.$el.attr('id');
		if (! elementId) {
			elementId = Math.random().toString(36).substring(2);
			this.$el.attr('id', elementId);
		}
		overrideOptions.browse_button = elementId;
		if (typeof options.folder != "undefined") {
			defaultOptions.url = defaultOptions.url + options.folder;
		}
		
		// Set options to instance.
		this.options = $.extend(defaultOptions, options, overrideOptions);
		
		this.init();
	};
	
	Plupload.prototype.init = function () {
		// Init uploader.
		this.uploader = new plupload.Uploader(this.options);
		this.uploader.init();
		
		// Bind events.
		this.bindEvents();
	};
	
	Plupload.prototype.bindEvents = function () {
		var that = this;
		
		this.$el.on('click mouseenter', function (event) {
			that.uploader.refresh(); // Fixes fallback positioning on IE on mouseenter on the element. This can fix for when the upload button whas previously hidden.
			event.preventDefault(); // Fixes triggering form submit when clicking on the element in Opera.
		});
		
		// File(s) selected event. Start upload.
		this.uploader.bind('FilesAdded', function (uploader) {
			uploader.start();
		});
		
		// Before upload event.
		this.uploader.bind('BeforeUpload', function (uploader, file) {
			if (typeof that.options.onBeforeUpload === 'function') {
				that.options.onBeforeUpload.call(that.$el.get(0), uploader, file);
			}
		});
		
		// Error event.
		this.uploader.bind('Error', function (uploader, error) {
			uploader.refresh(); // Reposition Flash/Silverlight
			
			if (typeof that.options.onError === 'function') {
				that.options.onError.call(that.$el.get(0), uploader, error);
			}
		});
		
		// Upload complete event.
		this.uploader.bind('FileUploaded', function (uploader, file, response) {
			if (typeof that.options.onFileUploaded === 'function') {
				that.options.onFileUploaded.call(that.$el.get(0), uploader, file, response);
			}
		});
		
		// Upload progress event.
		this.uploader.bind('UploadProgress', function (uploader, file) {
			if (typeof that.options.onUploadProgress === 'function') {
				that.options.onUploadProgress.call(that.$el.get(0), uploader, file);
			}
		});
		
		// Upload complete event.
		this.uploader.bind('UploadComplete', function (uploader, file) {
			if (typeof that.options.onUploadComplete === 'function') {
				that.options.onUploadComplete.call(that.$el.get(0), uploader, file);
			}
		});
	};
	
	/*
	 * Register as jQuery plugin.
	 */
	$.fn.plupload = function (options) {
		return this.each(function () {
			if (! $.data(this, 'plupload')) {
				$.data(this, 'plupload', new Plupload(this, options));
			}
		});
	};
	
}(jQuery, plupload));;;
toastr.options = {
	"closeButton": true,
	"debug": false,
	"newestOnTop": false,
	"progressBar": false,
	"positionClass": "toast-top-center",
	"preventDuplicates": true,
	"onclick": null,
	"showDuration": "300",
	"hideDuration": "1000",
	"timeOut": "3000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "slideDown",
	"hideMethod": "slideUp"
};



$.fn.modal.Constructor.prototype.enforceFocus =function(){};
var toolbar = [
	['Source'],
	[
		'Cut',
		'Copy',
		'Paste',
		'Find',
		'Replace'
	],
	[
		'Bold',
		'Italic',
		'Underline',
		'StrikeThrough'
	],
	[
		'Styles',
		'Format',
		'Font',
		'FontSize'
	],
	[
		'NumberedList',
		'BulletedList'
	],
	[
		'Outdent',
		'Indent'
	]
];
var toolbar_small = [
	['Source'],
	[
		'Cut',
		'Copy',
		'Paste',
		'Find',
		'Replace'
	],
	[
		'Bold',
		'Italic',
		'Underline',
		'StrikeThrough'
	]
];



function resize() {
	var wh = $(window).height();
	var ww = $(window).width();
	var mh = wh - $("#navbar-header").outerHeight() - 6;
	$("#menu-bar").css({"max-height":mh});
	scroll();
	
	$(".panel-fixed").each(function(){
		var $this = $(this);
		var h = $this.find("> .panel-heading").outerHeight();
		var f = $this.find("> .panel-footer").outerHeight();
		var $body = $this.find(".panel-body");
		$body.css({top:h,bottom:f});
		
		
		//	console.log(h)
	});
}
function scroll(){
	var ww = $(window).width();
	var $toolbar = $("#toolbar");
	
	if ($toolbar.length){
		
		
		var toolbartop = $toolbar.offset().top;
		var navbarheight = $(".navbar-fixed-top").outerHeight();
		var toolbarheight = $toolbar.outerHeight();
		var scrollTop = $(window).scrollTop();
		
		$nextElement = $toolbar.next();
		
		var contentOffset = $nextElement.offset().top;
		
		var toolboxtopscroll = (contentOffset - toolbarheight)-15
		
		//	console.log("toolbartop: "+toolbartop+" | navbarheight: "+navbarheight+" | scroll:"+scrollTop + " | toolbar fixed: "+$toolbar.hasClass("fixed")+" | v:"+toolboxtopscroll);
		
		if ((scrollTop > (toolboxtopscroll - navbarheight))&& ww > 768){
			$toolbar.addClass("fixed").css({"top":navbarheight - 1});
			$nextElement.css({"margin-top":$toolbar.outerHeight()+31});
		} else {
			$toolbar.removeClass("fixed");
			$nextElement.css({"margin-top":0});
		}
		
	}
	
}

$(document).ready(function(){
	resize();
	$(window).resize(function () {
		$.doTimeout(250, function () {
			resize();
			
		});
	});
	
	$(window).scroll(function (event) {
		scroll();
		// Do something
	});
	
})
$(document).on("change",".has-error input",function(){
	var $field = $(this);
	$field.closest(".has-error").removeClass("has-error").find(".form-validation").remove();
	submitBtnCounter($field.closest("form"));
})



function validationErrors(data, $form) {
	
	if (!$.isEmptyObject(data['errors'])) {
		
		var i = 0;
		//console.log(data.errors);
		$(".form-validation",$form).remove();
		$.each(data.errors, function (k, v) {
			i = i + 1;
			var $field = $("#" + k);
			//console.info(k)
			var $block = $field.closest(".form-group");
			
			$block.addClass("has-error");
			if ($field.parent().hasClass("input-group")) $field = $field.parent();
			
			
			if (v != "") {
				
				$field.after('<span class="help-block s form-validation">' + v + '</span>');
			}
			if ($block.hasClass("has-feedback")){
				$field.after('<span class="fa fa-times form-control-feedback form-validation" aria-hidden="true"></span>')
			}
			
			
		});
		
		
		
		
		$("button[type='submit']", $form).addClass("btn-danger").html("(" + i + ") Error(s) Found");
		
		if (i>1){
			toastr["error"]("There were " + i + " errors saving the form", "Error");
		} else {
			toastr["error"]("There was an error saving the form", "Error");
		}
		
		
		
	} else {
		toastr["success"]("Record Saved", "Success");
		
	}
	
	//submitBtnCounter($form);
	
	
}

function submitBtnCounter($form) {
	var c = $(".has-error",$form).length;
	var $btn = $("button[type='submit']", $form);
	if (c) {
		$btn.addClass("btn-danger").html("(" + c + ") Error(s) Found");
	} else {
		
		var tx = $btn.attr("data-text")||"Save";
		
		$btn.html(tx).removeClass("btn-danger");
	}
}