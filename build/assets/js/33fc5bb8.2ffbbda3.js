"use strict";(self.webpackChunkmglfw_docs=self.webpackChunkmglfw_docs||[]).push([[867],{4003:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(6540);var s=a(4164),n=a(1082),r=a(204),l=a(1926),i=a(6289),o=a(3750),c=a(569),d=a(7448),u=a(7220),g=a(4005),h=a(5921),m=a(4848);function p(e){let{author:t}=e;const a=(0,l.wI)(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.be,{title:a}),(0,m.jsx)(u.A,{tag:"blog_authors_posts"})]})}function x(){const{authorsListPath:e}=(0,o.x)();return(0,m.jsx)(i.A,{href:e,children:(0,m.jsx)(l.np,{})})}function j(e){let{author:t,items:a,sidebar:s,listMetadata:n}=e;return(0,m.jsxs)(c.A,{sidebar:s,children:[(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(h.A,{as:"h1",author:t}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(x,{})]}),0===a.length?(0,m.jsx)("p",{children:(0,m.jsx)(l.Y4,{})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("hr",{}),(0,m.jsx)(g.A,{items:a}),(0,m.jsx)(d.A,{metadata:n})]})]})}function b(e){return(0,m.jsxs)(n.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsPostsPage),children:[(0,m.jsx)(p,{...e}),(0,m.jsx)(j,{...e})]})}},7448:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(539),n=a(1865),r=a(4848);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,r.jsx)(n.A,{permalink:l,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8189:(e,t,a)=>{a.d(t,{A:()=>C});a(6540);var s=a(4164),n=a(3750),r=a(4848);function l(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var i=a(6289);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,n.e7)(),{permalink:c,title:d}=a,u=l?"h1":"h2";return(0,r.jsx)(u,{className:(0,s.A)(o.title,t),children:l?d:(0,r.jsx)(i.A,{to:c,children:d})})}var d=a(539),u=a(1430),g=a(8569);const h={container:"container_mt6G"};function m(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:l,readingTime:i}=a,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(m,{readingTime:i})]})]});var c}var b=a(5921);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,n.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?f.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?f.imageOnlyAuthorCol:f.authorCol),children:(0,r.jsx)(b.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(A,{})]})}var N=a(99),T=a(4522);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,n.e7)();return(0,r.jsx)("div",{id:l?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,r.jsx)(T.A,{children:t})})}var _=a(204),k=a(5783),P=a(6547);function y(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(y,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,g=a.length>0;if(!(g||u||i))return null;if(t){const e=!!(i||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(P.A,{tags:a})})}),e&&(0,r.jsx)(k.A,{className:(0,s.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,r.jsx)(P.A,{tags:a})}),u&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":g}),children:(0,r.jsx)(R,{blogPostTitle:l,to:e.permalink})})]})}function C(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,s.A)(i,a),children:[(0,r.jsx)(v,{}),(0,r.jsx)(w,{children:t}),(0,r.jsx)(U,{})]})}},4005:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(3750),n=a(8189),r=a(4848);function l(e){let{items:t,component:a=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.in,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},1865:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),n=a(6289),r=a(4848);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,r.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},6547:(e,t,a)=>{a.d(t,{A:()=>d});a(6540);var s=a(4164),n=a(539),r=a(6289);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(4848);function o(e){let{permalink:t,label:a,count:n,description:o}=e;return(0,i.jsxs)(r.A,{href:t,title:o,className:(0,s.A)(l.tag,n?l.tagWithCount:l.tagRegular),children:[a,n&&(0,i.jsx)("span",{children:n})]})}const c={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:c.tag,children:(0,i.jsx)(o,{...e})},e.permalink)))})]})}},1926:(e,t,a)=>{a.d(t,{Y4:()=>d,np:()=>c,uz:()=>o,wI:()=>i});a(6540);var s=a(539),n=a(1430),r=a(4848);function l(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=l();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const o=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,r.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function d(){return(0,r.jsx)(s.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}}}]);