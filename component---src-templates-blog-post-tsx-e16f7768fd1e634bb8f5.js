(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var r=a(0),i=a.n(r),n=a(201),o=a(208),s=a(204),l=a(202),d=a(205),c=a(200),u=n.a.p.withConfig({displayName:"blog-post__Date",componentId:"sc-1jbsnju-0"})(["display:block;",";margin-bottom:",";margin-top:",";"],Object(c.b)(-.2),Object(c.a)(1),Object(c.a)(-1)),f=n.a.hr.withConfig({displayName:"blog-post__Divider",componentId:"sc-1jbsnju-1"})(["margin-bottom:",";"],Object(c.a)(1)),A=n.a.ul.withConfig({displayName:"blog-post__PostNavigator",componentId:"sc-1jbsnju-2"})(["display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none;padding:0;"]);t.default=function(e){var t=e.data,a=t.markdownRemark,r=a.excerpt,n=a.frontmatter,c=a.html,p=t.site.siteMetadata.title,g=e.pageContext,m=g.previous,h=g.next;return i.a.createElement(s.a,{location:e.location,title:p},i.a.createElement(d.a,{title:n.title,description:n.description||r}),i.a.createElement("h1",null,a.frontmatter.title),i.a.createElement(u,null,n.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}),i.a.createElement(f,null),i.a.createElement(o.a,null),i.a.createElement(A,null,i.a.createElement("li",null,m&&i.a.createElement(l.a,{to:m.fields.slug,rel:"prev"},"← ",m.frontmatter.title)),i.a.createElement("li",null,h&&i.a.createElement(l.a,{to:h.fields.slug,rel:"next"},h.frontmatter.title," →"))))};var p="3654438753"},200:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(213),i=a.n(r),n=a(214),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},202:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(37);var r=a(27),i=a.n(r),n=a(215),o=a.n(n),s=a(0),l=function(e){var t=e.children,a=i()(e,["children"]);return s.createElement(o.a,Object.assign({fade:!0,duration:.5},a),t)}},204:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var r=a(0),i=a.n(r),n=a(201),o=a(200),s=a(202),l=n.a.h1.withConfig({displayName:"layout__StyledH1",componentId:"z7e7u9-0"})(["",";margin-bottom:",";margin-top:0;"],Object(o.b)(1.5),Object(o.a)(1.5)),d=n.a.h3.withConfig({displayName:"layout__StyledH3",componentId:"z7e7u9-1"})(["font-family:Montserrat,sans-serif;margin-top:0;"]),c=Object(n.a)(s.a).withConfig({displayName:"layout__StyledLink",componentId:"z7e7u9-2"})(["box-shadow:none;color:inherit;text-decoration:none;"]),u=n.a.div.withConfig({displayName:"layout__Content",componentId:"z7e7u9-3"})(["margin-left:auto;margin-right:auto;max-width:",";padding:",";"],Object(o.a)(24),Object(o.a)(1.5)+" "+Object(o.a)(.75)),f=function(e){var t=e.location,a=e.title,r=e.children,n="/"===t.pathname?l:d;return i.a.createElement(u,null,i.a.createElement("header",null,i.a.createElement(n,null,i.a.createElement(c,{to:"/"},a))),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}},205:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(206),i=a(0),n=a.n(i),o=a(217),s=a.n(o),l=function(e){var t=e.lang||"en",a=e.meta||[],i=e.keywords||[],o=e.description||"",l=r.data.site,d=o||l.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:t},title:e.title,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{content:d,name:"description"},{content:e.title,property:"og:title"},{content:d,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:l.siteMetadata.author,name:"twitter:creator"},{content:e.title,name:"twitter:title"},{content:d,name:"twitter:description"}].concat(i.length>0?{content:i.join(", "),name:"keywords"}:[]).concat(a)})}},206:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Kyle Mathews"}}}}},208:function(e,t,a){"use strict";a.d(t,"a",function(){return A});a(209),a(37);var r=a(211),i=a(212),n=a.n(i),o=a(0),s=a.n(o),l=a(201),d=a(200),c=l.a.div.withConfig({displayName:"bio__Content",componentId:"sc-137rv77-0"})(["display:flex;margin-bottom:",";"],Object(d.a)(2.5)),u=Object(o.forwardRef)(function(e,t){return s.a.createElement(n.a,Object.assign({},e,{ref:t}))}),f=Object(l.a)(u).withConfig({displayName:"bio__Avatar",componentId:"sc-137rv77-1"})(["border-radius:100%;margin-bottom:0;margin-right:",";min-width:50px;"],Object(d.a)(.5)),A=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return s.a.createElement(c,null,s.a.createElement(f,{fixed:e.avatar.childImageSharp.fixed,alt:a,imgStyle:{borderRadius:"50%"}}),s.a.createElement("p",null,"Written by ",s.a.createElement("strong",null,a)," who lives and works in San Francisco building useful things."," ",s.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"You should follow him on Twitter")))}},209:function(e,t,a){"use strict";a(210)("fixed",function(e){return function(){return e(this,"tt","","")}})},210:function(e,t,a){var r=a(11),i=a(14),n=a(30),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},211:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg",srcSet:"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/06a10/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Kyle Mathews",social:{twitter:"kylemathews"}}}}}},212:function(e,t,a){"use strict";var r=a(4);t.__esModule=!0,t.default=void 0;var i,n=r(a(6)),o=r(a(28)),s=r(a(27)),l=r(a(13)),d=r(a(0)),c=r(a(1)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)}).join("")+"<img "+d+o+s+a+r+t+n+i+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(I,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},I=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:o,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,v=e.loading,j=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,l.default)({opacity:j?1:0,transition:O?"opacity "+h+"ms":"none"},s),N="boolean"==typeof m?"lightgray":m,R={transitionDelay:h+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&R,s,f),Q={title:t,alt:this.state.isVisible?"":a,style:L,className:A};if(p){var k=p,M=k[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),N&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&R)}),M.base64&&d.default.createElement(B,{src:M.base64,spreadProps:Q,imageVariants:k,generateSources:S}),M.tracedSVG&&d.default.createElement(B,{src:M.tracedSVG,spreadProps:Q,imageVariants:k,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(k),d.default.createElement(I,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:v},M,{imageVariants:k}))}}))}if(g){var V=g,Y=V[0],z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},n);return"inherit"===n.display&&delete z.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},N&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:N,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},O&&R)}),Y.base64&&d.default.createElement(B,{src:Y.base64,spreadProps:Q,imageVariants:V,generateSources:S}),Y.tracedSVG&&d.default.createElement(B,{src:Y.tracedSVG,spreadProps:Q,imageVariants:V,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(V),d.default.createElement(I,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:v},Y,{imageVariants:V}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:C,sizes:N,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([N,c.default.arrayOf(N)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var R=O;t.default=R}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-e16f7768fd1e634bb8f5.js.map