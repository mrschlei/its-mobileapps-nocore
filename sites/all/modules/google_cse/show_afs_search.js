(function (){ var b=null,g=window,k=g.googleSearchResizeIframe||g.googleSearchPath&&"/cse"==g.googleSearchPath&&"undefined"==typeof g.googleSearchResizeIframe,l=document.location.protocol,m=document.location.search,n,p,s,t;function u(c,a,d,e){var f={};c=c.split(d);for(d=0;d<c.length;d++){var h=c[d],r=h.indexOf(a);if(0<r){var q=h.substring(0,r),q=e?q.toUpperCase():q.toLowerCase(),h=h.substring(r+1,h.length);f[q]=h}}return f}
function v(c,a,d){if(d){var e=c.slice(-1);a=[c,"?"==e?"":"&",a,"=",encodeURIComponent(d)].join("");if(2048>=a.length)return a}return c}function w(c,a){return c?Math.max(c,a):a}


function x(){
	
	var c="",
	c=g.googleSearchDomain?c+g.googleSearchDomain:c+"www.google.com",a=!1,c=g.googleSearchPath?c+g.googleSearchPath:c+"/custom",c=(a?l:"https:")+"//"+c+"?";g.googleSearchQueryString&&(g.googleSearchQueryString=g.googleSearchQueryString.toLowerCase());var d;a=m;

if(1>a.length)d="";

else{a=a.substring(1,a.length);a=u(a,"=","&",!1);

"q"!=g.googleSearchQueryString&&a[g.googleSearchQueryString]&&(a.q=a[g.googleSearchQueryString],delete a[g.googleSearchQueryString]);

if(a.cof){var e=u(decodeURIComponent(a.cof),
":",";",!0);

(e=e.FORID)&&(n=parseInt(e,10))}a.siteurl&&(t=decodeURIComponent(a.siteurl));if(e=document.getElementById(g.googleSearchFormName))if(!e.q||!a.q||a.ie&&"utf-8"!=a.ie.toLowerCase()||(e.q.value=decodeURIComponent(a.q.replace(/\+/g," "))),e.sitesearch)for(var f=0;f<e.sitesearch.length;f++)e.sitesearch[f].checked=a.sitesearch==b&&""==e.sitesearch[f].value?!0:e.sitesearch[f].value==a.sitesearch?!0:!1;e="";for(d in a)e+="&"+d+"="+a[d];d=e.substring(1,e.length)}c+=d;c=v(c,"ad","n"+p);c=v(c,"num",
s);c=v(c,"adtest",g.googleAdtest);k&&(d=g.location.href,a=d.indexOf("#"),-1!=a&&(d=d.substring(0,a)),c=v(c,"rurl",d));d=c;c=g.document.getElementById(g.googleSearchFormName);t||(t=g.document.referrer,d=v(d,"siteurl",t));c&&!c.siteurl&&(a=document.createElement("input"),a.name="siteurl",a.type="hidden",a.value=t,c.appendChild(a));return c=d}
function y(c,a,d){var e={};e[9]=300+90*a;e[10]=300+50*Math.min(c,4)+90*a;e[11]=300+50*c+90*a;if(d)for(c=660+120*a,a=9;11>=a;a++)e[a]=Math.max(e[a],c);return e}
function z(){(p=g.googleSearchNumAds)||(p=9);s=(s=g.googleNumSearchResults)?Math.min(s,20):10;var c={9:795,10:795,11:500},a=y(p,s,"/cse"==g.googleSearchPath),d=x();g.googleSearchFrameborder||(g.googleSearchFrameborder="0");var e=document.getElementById(g.googleSearchIframeName);if(e&&c[n]){var c=w(g.googleSearchFrameWidth,c[n]),a=w(g.googleSearchFrameHeight,a[n]),f=document.createElement("iframe"),d={name:"googleSearchFrame",src:d,frameBorder:g.googleSearchFrameborder,width:c,height:a,marginWidth:"0",
marginHeight:"0",hspace:"0",vspace:"0",allowTransparency:"true",scrolling:"no"},h;for(h in d)f.setAttribute(h,d[h]);e.appendChild(f);f.attachEvent?f.attachEvent("onload",function(){window.scrollTo(0,0)}):f.addEventListener("load",function(){window.scrollTo(0,0)},!1);k&&g.setInterval(function(){if(g.location.hash&&"#"!=g.location.hash){var a=g.location.hash.substring(1)+"px";f.height!=a&&"0px"!=a&&(f.height=a)}},10)}g.googleSearchIframeName=b;g.googleSearchFormName=b;g.googleSearchResizeIframe=b;g.googleSearchQueryString=
b;g.googleSearchDomain=b;g.googleSearchPath=b;g.googleSearchFrameborder=b;g.googleSearchFrameWidth=b;g.googleSearchFrameHeight=b;g.googleSearchNumAds=b;g.googleNumSearchResults=b;g.googleAdtest=b}z(); })();