webpackJsonp([1],{IV61:function(e,t,n){t=e.exports=n("FZ+f")(void 0),t.push([e.i,".IATVnLg{padding-top:30px}._1gVznGn{margin-top:8px;font-size:12px}",""]),t.locals={"upload-btn":"IATVnLg","upload-text":"_1gVznGn"}},PgBk:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return V});var l,o,i,u,c,p,m,d,f=n("211U"),h=n.n(f),b=n("Jmof"),g=n.n(b),y=n("oiih"),v=n("xLxO"),E=n("hFTO"),w=n("kbwb"),_=n("WB2H"),k=n("kimJ"),x=n.n(k),O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),L=(l=h()(x.a,{allowMultiple:y.b}))(o=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return r(t,e),j(t,[{key:"render",value:function(){var e={name:"file",action:"https://jsonplaceholder.typicode.com/posts/",headers:{authorization:"authorization-text"},multiple:!0,disabled:!1,onResponse:function(e){return e={result:"success",msg:"上传成功！"},"success"===e.result?{success:!0,message:"上传成功"}:{success:!1,message:e.msg}},onChange:function(e){e.file.status,"done"===e.file.status?_.a.success(e.file.name+" 文件上传成功."):"error"===e.file.status&&_.a.error(e.file.name+" 文件上传失败！")}};return g.a.createElement("div",{className:"markdown-block"},g.a.createElement("h3",null,"1、经典款式，用户点击按钮弹出文件选择框。"),g.a.createElement(v.a,e,g.a.createElement(w.a,{size:"small",type:"secondary",disabled:e.disabled},g.a.createElement(E.a,{size:12,name:"upload"})," 上传文件")))}}]),t}(b.Component))||o,z=(i=h()(x.a,{allowMultiple:y.b}))(u=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return r(t,e),j(t,[{key:"render",value:function(){var e={name:"file",action:"https://jsonplaceholder.typicode.com/posts/",headers:{authorization:"authorization-text"},multiple:!0,disabled:!1,onResponse:function(e){return e={result:"success",msg:"上传成功！"},"success"===e.result?{success:!0,message:"上传成功"}:{success:!1,message:e.msg}},onChange:function(e){e.file.status,"done"===e.file.status?_.a.success(e.file.name+" 文件上传成功."):"error"===e.file.status&&_.a.error(e.file.name+" 文件上传失败！")},defaultFileList:[{uid:1,name:"图片1.png",status:"done",url:"https://www.ehuodi.com/module/index/img/index2/line2_bg.png"},{uid:2,name:"图片2.png",status:"done",url:"https://www.ehuodi.com/module/index/img/index2/line2_bg.png"},{uid:3,name:"图片3.png",status:"error",response:"上传失败，图片太大"}]};return g.a.createElement("div",{className:"markdown-block"},g.a.createElement("h3",null,"2、已上传文件的列表"),g.a.createElement("p",null,"使用 defaultFileList 设置已上传的内容。"),g.a.createElement(v.a,e,g.a.createElement(w.a,{size:"small",type:"secondary",disabled:e.disabled},g.a.createElement(E.a,{size:12,name:"upload"})," 上传文件")))}}]),t}(b.Component))||u,P=(c=h()(x.a,{allowMultiple:y.b}))(p=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={fileList:[{uid:-1,name:"xxx.png",status:"done",url:"https://www.ehuodi.com/module/index/img/index2/line2_bg.png"}]},n}return r(t,e),j(t,[{key:"render",value:function(){var e=this,t={action:"//jsonplaceholder.typicode.com/posts/",disabled:!1,onResponse:function(e){return e={result:"success",msg:"上传成功！"},"success"===e.result?{success:!0,message:"上传成功"}:{success:!1,message:e.msg}},onChange:function(t){var n=t.fileList;n=n.slice(-1),n=n.map(function(e){return e.response&&(e.url=e.response.url),e}),e.setState({fileList:n})}};return g.a.createElement("div",{className:"markdown-block"},g.a.createElement("h3",null,"3、使用 fileList 对列表进行完全控制，可以实现各种自定义功能，以下演示三种情况："),g.a.createElement("p",null,"1) 上传列表数量的限制。"),g.a.createElement("p",null,"2) 读取远程路径并显示链接。"),g.a.createElement("p",null,"3) 按照服务器返回信息筛选成功上传的文件。"),g.a.createElement(v.a,O({},t,{fileList:this.state.fileList}),g.a.createElement(w.a,{size:"small",type:"secondary",disabled:t.disabled},g.a.createElement(E.a,{size:12,name:"upload"})," 上传文件")))}}]),t}(b.Component))||p,C=(m=h()(x.a,{allowMultiple:y.b}))(d=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e){n.setState({fileList:e.fileList})},n.state={fileList:[{uid:-1,name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]},n}return r(t,e),j(t,[{key:"beforeUpload",value:function(e){var t="image/png"===e.type;t||_.a.error("请上传.png文件!");var n=e.size<1024e3;return n||_.a.error("图片不能超过1000KB!"),t&&n}},{key:"render",value:function(){var e={action:"//jsonplaceholder.typicode.com/posts/",disabled:!1,listType:"picture-card",fileList:this.state.fileList,onPreview:this.handlePreview,onChange:this.handleChange,beforeUpload:this.beforeUpload,onResponse:function(e){return e={result:"success",msg:"上传成功！"},"success"===e.result?{success:!0,message:"上传成功"}:{success:!1,message:e.msg}}},t=g.a.createElement("div",{styleName:"upload-btn"},g.a.createElement(E.a,{name:"plus",size:25}),g.a.createElement("div",{styleName:"upload-text"},"上传"));return g.a.createElement("div",{className:"markdown-block"},g.a.createElement("h3",null,"4、显示上传缩略图"),g.a.createElement("p",null,"点击上传图片，并使用 beforeUpload 限制用户上传的图片格式和大小。"),g.a.createElement(v.a,e,this.state.fileList.length>=3?null:t))}}]),t}(b.Component))||d,V=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),j(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"markdown-block"},g.a.createElement(L,null),g.a.createElement("br",null),g.a.createElement("br",null),g.a.createElement(z,null),g.a.createElement("br",null),g.a.createElement("br",null),g.a.createElement(P,null),g.a.createElement("br",null),g.a.createElement("br",null),g.a.createElement(C,null))}}]),t}(b.Component)},kimJ:function(e,t,n){var a=n("IV61");"string"==typeof a&&(a=[[e.i,a,""]]);var s={};s.transform=void 0,n("MTIv")(a,s),a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=1.8052eebc06f80a403cb9.js.map