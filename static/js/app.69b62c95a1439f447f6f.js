webpackJsonp([1],{"55AZ":function(t,s){},"IhI+":function(t,s){},K3X9:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"navbar"}},[s("v-toolbar",{attrs:{light:""}},[s("v-toolbar-title",{staticClass:"brand"},[s("router-link",{attrs:{to:"/"}},[this._v("Web ShikShalaya")])],1),this._v(" "),s("v-spacer"),this._v(" "),s("router-link",{attrs:{to:"/sitemap"}},[s("v-btn",{attrs:{icon:""}},[s("v-icon",[this._v("fa-sitemap")])],1)],1)],1)],1)},staticRenderFns:[]},n=a("VU/8")({name:"nav-bar"},i,!1,function(t){a("K3X9")},"data-v-285957a8",null).exports,r=a("mtWM"),o=a.n(r),c={name:"side-bar",data:function(){return{posts:[],comments:[],errors:[],draft:!1,tag:!1}},created:function(){var t=this;o.a.get("http://127.0.0.1:8000/v1/post/").then(function(s){t.posts=s.data}).catch(function(s){t.errors.push(s)}),o.a.get("http://127.0.0.1:8000/v1/comment/").then(function(s){t.comments=s.data}).catch(function(s){t.errors.push(s)})},filters:{capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""},turncate:function(t,s){return t.length<s?t:(s-=3,t.substring(0,s)+"...")},jsDate:function(t){return new Date(t.year,t.month-1,t.day)}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"side-bar"}},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-expansion-panel",{attrs:{popout:""}},t._l(t.posts.slice(1,5),function(s){return a("v-expansion-panel-content",{key:s.id},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(s.title))]),t._v(" "),a("v-card",[a("v-card-text",{staticClass:"grey lighten-3"},[t._v("\n                "+t._s(t._f("turncate")(s.content,100))+"\n              ")])],1)],1)}))],1)],1),t._v(" "),a("div",{staticClass:"custom-shadow card"},[a("div",{staticClass:"text-center"},[a("p",{staticClass:"sidebar-github mt-2"},[t._v("Contribute on github or download source code and have fun.")]),t._v(" "),a("a",{staticClass:"github-button",attrs:{href:"https://github.com/vimm0","aria-label":"Follow @vimm0 on GitHub"}},[t._v("Follow@vimm0")]),t._v(" "),a("a",{staticClass:"github-button",attrs:{href:"https://github.com/vimm0/web_sikhalaya/fork","data-icon":"octicon-repo-forked","aria-label":"Fork vimm0/web_sikhalaya on GitHub"}},[t._v("Fork")]),t._v(" "),a("a",{staticClass:"github-button",attrs:{href:"https://github.com/vimm0/web_sikhalaya","data-icon":"octicon-star","aria-label":"Star vimm0/web_sikhalaya on GitHub"}},[t._v("Star")])])]),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-expansion-panel",{attrs:{popout:""}},t._l(t.comments.slice(1,5),function(s){return a("v-expansion-panel-content",{key:s.id},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(s.post_name))]),t._v(" "),a("v-card",[a("v-card-text",{staticClass:"grey lighten-3"},[a("p",[t._v(t._s(t._f("turncate")(s.content,100))+"\n                  "),a("small",{staticClass:"meta ml-5"},[t._v(t._s(t._f("jsDate")(s.timestamp))+" By: "+t._s(s.commenter))])])])],1)],1)}))],1)],1)],1)],1)},staticRenderFns:[]},h={name:"app",components:{"nav-bar":n,"side-bar":a("VU/8")(c,l,!1,function(t){a("55AZ")},null,null).exports}},v={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("nav-bar"),this._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-8 col-lg-8"},[s("router-view")],1),this._v(" "),s("div",{staticClass:"col-md-4 col-lg-3"},[s("side-bar")],1)])]),this._v(" "),s("div",{staticClass:"container mt-3"})],1)},staticRenderFns:[]},u=a("VU/8")(h,v,!1,function(t){a("aABt")},null,null).exports,d=a("/ocq"),p={name:"post-list",data:function(){return{posts:[],draft:!1,getFuturePost:!1,errors:[]}},created:function(){var t=this;o.a.get("http://127.0.0.1:8000/v1/post/").then(function(s){t.posts=s.data}).catch(function(s){t.errors.push(s)})},methods:function(){return{getFuturePost:function(t){this.getFuturePost=!!t}}},filters:{capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""},turncate:function(t,s){return t.length<s?t:(s-=3,t.substring(0,s)+"...")}}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"post-list"}},[a("div",{staticClass:"container"},[a("v-flex",t._l(t.posts,function(s){return a("div",{key:s.title},[a("v-card",{staticClass:"my-3",attrs:{hover:""}},[a("v-card-media",{staticClass:"white--text",attrs:{height:"170px",src:"https://opendata.cityofnewyork.us/wp-content/uploads/2016/12/placeholder-1200x400.svg"}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("span",{staticClass:"headline"},[a("router-link",{attrs:{to:{name:"PostDetail",params:{postId:s.id}}}},[t._v(t._s(s.title))])],1)])],1)],1)],1),t._v(" "),a("v-card-text",[a("small",[t._v("Published: "+t._s(s.publish))]),t._v(" "),t.draft?a("h3",[t._v("Staff only: Draft")]):t._e(),t._v(" "),t.getFuturePost?a("h3",[t._v("Staff Only: Future Post")]):t._e(),t._v(" "),a("p",[t._v("Author: "+t._s(s.author))]),t._v("\n            "+t._s(t._f("turncate")(s.content,400))+"\n          ")]),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"red--text",attrs:{icon:""}},[a("v-icon",{attrs:{medium:""}},[t._v("fa-reddit")])],1),t._v(" "),a("v-btn",{staticClass:"light-blue--text",attrs:{icon:""}},[a("v-icon",{attrs:{medium:""}},[t._v("fa-twitter")])],1),t._v(" "),a("v-btn",{staticClass:"blue--text text--darken-4",attrs:{icon:""}},[a("v-icon",{attrs:{medium:""}},[t._v("fa-facebook")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("router-link",{attrs:{to:{name:"PostDetail",params:{postId:s.id}}}},[a("v-btn",{staticClass:"blue--text",attrs:{flat:""}},[t._v("Read More")])],1)],1)],1)],1)}))],1)])},staticRenderFns:[]},m=a("VU/8")(p,_,!1,function(t){a("OP41")},"data-v-c5f9f4e2",null).exports,f=a("EFqf"),b={name:"post-detail",data:function(){return{post:[],errors:[],draft:!1,tag:!1}},created:function(){var t=this;o.a.get("http://127.0.0.1:8000/v1/post/"+this.$route.params.postId).then(function(s){t.post=s.data}).catch(function(s){t.errors.push(s)})},filters:{capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}},computed:{previewText:function(){return f.setOptions({renderer:new f.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1}),f(this.post.content)}}},g={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"post-detail"}},[s("div",{staticClass:"post sitemap"},[s("img",{staticClass:"img-responsive",attrs:{src:"https://opendata.cityofnewyork.us/wp-content/uploads/2016/12/placeholder-1200x400.svg"}}),this._v(" "),s("h1",{staticClass:"detail-title mt-2"},[this._v(this._s(this.post.title)+"\n      "),this.draft?s("small",{staticClass:"detail-draft"},[s("span",[this._v("Draft")])]):this._e()])]),this._v(" "),s("div",{staticClass:"meta"},[s("p",[this._v("Published: "+this._s(this.post.publish)+" ● Updated: "+this._s(this.post.updated))]),this._v(" "),s("p",[this._v("Read time: "+this._s(this.post.read_time)+" min ● Views: 12 times")]),this._v(" "),s("ul",[this.tag?s("div",[s("li",{staticClass:"meta-list"},[this._v("Tag:")]),this._v(" "),this._m(0,!1,!1)]):s("li",{staticClass:"meta-list"},[this._v("No tagged yet.")])]),this._v(" "),s("p",[this._v("Author: "+this._s(this._f("capitalize")(this.post.author)))])]),this._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:" col-md-12 col-lg-12"},[s("div",{staticClass:"post-detail-item",domProps:{innerHTML:this._s(this.previewText)}}),this._v(" "),s("hr"),this._v(" "),s("br"),this._v(" "),s("span",{staticClass:"lead"},[this._v("Share on:")]),this._v(" "),s("hr"),this._v(" "),s("iframe",{staticClass:"mt-2",staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&mobile_iframe=true&width=59&height=20&appId",width:"59",height:"20",scrolling:"no",frameborder:"0",allowTransparency:"true"}}),this._v(" "),this._m(1,!1,!1),this._v(" "),this._m(2,!1,!1),this._v(" "),s("hr")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"meta-list"},[s("a",{attrs:{href:"#"}},[this._v("| tag_num ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-header"},[this._v("\n          Author\n        ")]),this._v(" "),s("div",{staticClass:"card-block"},[s("div",{staticClass:"media "},[s("img",{staticClass:"d-flex mr-3",attrs:{src:"https://yoast-mercury.s3.amazonaws.com/uploads/2015/09/Avatar_Joost_500x500.png",alt:"Generic placeholder image",height:"100",width:"100"}}),this._v(" "),s("div",{staticClass:"media-body"},[s("h5",{staticClass:"mt-3 auth-name"},[s("a",{attrs:{href:"https://vimm0.github.io",title:"personal-website"}},[this._v("Vimm0 |")]),this._v("\n                kathmandu")]),this._v(" "),s("p",[this._v("Python enthusiast, Linux enthusiast and Senior writer at Learning Academy."),s("br"),this._v("\n                website:"),s("a",{staticClass:"auth-website",attrs:{href:"https://vimm0-blog.herokuapp.com"}},[this._v("https://vimm0-blog.herokuapp.com")])])])])]),this._v(" "),s("div",{staticClass:"card-footer text-muted"},[this._v("\n          2 days ago\n        ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card mt-4"},[s("div",{staticClass:"card-header"},[this._v("\n          Related Posts\n        ")]),this._v(" "),s("div",{staticClass:"card-block"},[s("a",{staticClass:"collection-item",attrs:{href:"#!"}},[this._v("New"),s("span",{staticClass:"badge-md"},[this._v("1")])]),this._v(" "),s("a",{staticClass:"collection-item",attrs:{href:"#!"}},[this._v("Comments"),s("span",{staticClass:"new badge-md"},[this._v("4")])]),this._v(" "),s("a",{staticClass:"collection-item",attrs:{href:"#!"}},[this._v("Updates"),s("span",{staticClass:"badge-md"},[this._v("14")])])])])}]},C=a("VU/8")(b,g,!1,function(t){a("hbmF")},null,null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"post-create"}},[s("h3",[this._v("Create Post")])])}]},x=a("VU/8")({name:"post-create",data:function(){return{}}},w,!1,function(t){a("IhI+")},null,null).exports,y={name:"SiteMap",data:function(){return{posts:[],errors:[]}},created:function(){var t=this;o.a.get("http://127.0.0.1:8000/v1/post/").then(function(s){t.posts=s.data}).catch(function(s){t.errors.push(s)})}},k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("div",{staticClass:"container"},[a("div",{staticClass:"post sitemap"},[a("h2",[t._v("Sitemap")]),t._v(" "),a("ul",t._l(t.posts,function(s){return a("li",[a("a",{attrs:{href:"#"}},[t._v(t._s(s.title))]),t._v(" - "+t._s(s.publish)+" ")])}))])])])},staticRenderFns:[]},F=a("VU/8")(y,k,!1,function(t){a("oXB6")},"data-v-70d55a46",null).exports;e.a.use(d.a);var P=new d.a({mode:"history",routes:[{path:"/",name:"PostList",component:m},{path:"/create",name:"PostCreate",component:x},{path:"/post/:postId",name:"PostDetail",component:C},{path:"/sitemap",name:"SiteMap",component:F}]}),A=a("3EgV"),S=a.n(A);e.a.use(S.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:P,template:"<App/>",components:{App:u}})},OP41:function(t,s){},aABt:function(t,s){},hbmF:function(t,s){},oXB6:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.69b62c95a1439f447f6f.js.map