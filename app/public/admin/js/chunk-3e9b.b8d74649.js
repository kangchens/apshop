(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3e9b"],{"31Ud":function(t,e,o){"use strict";var s=o("oDNp");o.n(s).a},P14b:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var s=o("t3Un");function i(t,e){var o=new FormData;return o.append("file",e,t),Object(s.a)({url:"/upload/image",method:"post",headers:{"Content-Type":"multipart/form-data"},data:o})}},YilU:function(t,e,o){"use strict";var s=o("14Xm"),i=o.n(s),r=o("D3Ub"),a=o.n(r),n=o("P2sY"),l=o.n(n),u=o("X4fA"),c={name:"Ueditor",props:{id:{type:String,default:function(){return"vue-ueditor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},height:{type:Number,required:!1,default:360},width:{type:Number,required:!1,default:700}},data:function(){return{ueditor:null,hasChange:!1,hasInit:!1,ueditorId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN"}}},computed:{language:function(){return this.languageTypeList[this.$store.getters.language]}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return e.ueditor.setContent(t||"")})},language:function(){var t=this;this.destroyUeditor(),this.$nextTick(function(){return t.initUeditor()})}},mounted:function(){this.initUeditor()},activated:function(){this.initUeditor()},deactivated:function(){this.destroyUeditor()},destroyed:function(){this.destroyUeditor()},methods:{initUeditor:function(){var t=this,e={serverUrl:"/admin/ueditor?_csrf="+Object(u.a)("csrfToken"),initialFrameWidth:this.width,initialFrameHeight:this.height,autoHeightEnabled:!1};this.ueditor=UE.getEditor(this.ueditorId,e),this.ueditor.ready(function(){t.value&&t.ueditor.setContent(t.value),t.hasInit=!0}),this.ueditor.on("contentchange",function(){t.hasChange=!0,t.$emit("input",t.ueditor.getContent())})},destroyUeditor:function(){this.ueditor&&this.ueditor.destroy()},setContent:function(t){this.ueditor.setContent(t)},getContent:function(){this.ueditor.getContent()}}},d=o("KHd+"),p=Object(d.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.ueditorId}})},[],!1,null,null,null);p.options.__file="index.vue";var m=p.exports,h=o("Grqa"),f=o("uARZ"),g=o("xA6U"),v=o("Hy6Q"),b={name:"CroppaList",components:{Croppa:v.a},props:{value:{type:Array,default:""},height:{type:Number,required:!1,default:240},width:{type:Number,required:!1,default:240},quality:{type:Number,required:!1,default:1}},data:function(){return{hasChange:!1,hasInit:!1,list:[{url:"",name:""}],uploadList:[]}},watch:{value:function(t){this.hasChange||this.hasInit||(Array.isArray(t)&&t.length>0&&(this.list=t.concat([{url:"",name:""}]),this.uploadList=this.uploadList.concat(t)),this.hasInit=!0)}},methods:{onSelect:function(t){this.list.push({url:"",name:""})},onRemove:function(t){this.hasChange=!0,this.list.splice(t,1),this.uploadList.splice(t,1),this.$emit("input",this.uploadList)},onUpload:function(t){this.hasChange=!0,this.uploadList.push(t),this.$emit("input",this.uploadList)}}},y=(o("31Ud"),Object(d.a)(b,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"upload-list"},t._l(t.list,function(e,s){return o("li",[o("Croppa",{attrs:{index:s,width:t.width,height:t.height,isShowUpload:!0,quality:t.quality},on:{onSelect:t.onSelect,onRemove:t.onRemove,onUpload:t.onUpload},model:{value:e.url,callback:function(o){t.$set(e,"url",o)},expression:"item.url"}})],1)}))},[],!1,null,"20224554",null));y.options.__file="index.vue";var F=y.exports,_={goodsID:"",title:"",note:"",name:"",goodsType:"",imgurl:"",price:0,priceMarket:0,stock:500,goodsStatus:"0",sortNo:0,goodsImages:[],recommendFlag:!1,comment_disabled:!1},k=[{key:"T",display_name:"主题"},{key:"C",display_name:"组件"}],w=[{key:"0",display_name:"新建"},{key:"D",display_name:"下架"},{key:"U",display_name:"上架"},{key:"C",display_name:"删除"}],x={name:"productDetail",components:{Ueditor:m,MDinput:h.a,Croppa:v.a,Sticky:f.a,CroppaList:F},props:{isEdit:{type:Boolean,default:!1},goods_id:""},data:function(){return{dialogImageUrl:"",dialogVisible:!1,calendarTypeOptions:k,calendargoodsStatusOptions:w,postForm:l()({},_),fetchSuccess:!0,loading:!1,rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],name:[{required:!0,message:"请输入商品名",trigger:"blur"}],goodsType:[{required:!0,message:"请选择类型",trigger:"blur"}],price:[{type:"number",required:!0,message:"请输入价格",trigger:"blur"}],priceMarket:[{type:"number",required:!0,message:"请输入市场价",trigger:"blur"}],goodsStatus:[{required:!0,message:"请选择状态",trigger:"blur"}]}}},computed:{contentShortLength:function(){return this.postForm.name.length}},created:function(){this.isEdit?this.fetchData():(this.postForm=l()({opBy:this.$store.state.user.name},_),this.postForm.goodsImages=[])},methods:{resetForm:function(t){this.$refs[t].resetFields(),this.$refs.imgurl.clear(),this.$refs.editor.setContent(""),this.postForm.goodsImages=[]},fetchData:function(){var t=this;Object(g.a)(this.goods_id).then(function(e){t.postForm=e.result}).catch(function(e){t.fetchSuccess=!1,console.log(e)})},saveData:function(){var t=this;return a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.imgurl.upload();case 2:e.sent&&t.$refs.postForm.validate(function(e){e?(t.loading=!0,Object(g.d)(t.postForm).then(function(e){t.fetchSuccess=!0,t.$notify({title:"成功",message:"商品发布成功",type:"success",duration:2e3}),t.isEdit||t.resetForm("postForm"),t.loading=!1,t.postForm.status="published"}).catch(function(e){t.fetchSuccess=!1,t.postForm.status="draft",console.log(e)})):console.log("error submit!!")});case 4:case"end":return e.stop()}},e,t)}))()},submitForm:function(){var t=this;"U"==this.postForm.goodsStatus?this.$confirm("当前商品为上架状态，您确定要发布吗？","提示").then(function(){t.saveData()}):this.saveData()}}},C=(o("q4if"),Object(d.a)(x,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{"status-icon":"",model:t.postForm,rules:t.rules}},[o("sticky",{attrs:{className:"sub-navbar "+t.postForm.status}},[t.fetchSuccess?[o("el-dropdown",{attrs:{trigger:"click"}},[o("el-button",[t._v(t._s(t.postForm.comment_disabled?"评论已关闭":"评论已打开")+"\n            "),o("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[o("el-radio-group",{staticStyle:{padding:"10px"},model:{value:t.postForm.comment_disabled,callback:function(e){t.$set(t.postForm,"comment_disabled",e)},expression:"postForm.comment_disabled"}},[o("el-radio",{attrs:{label:!0}},[t._v("关闭评论")]),t._v(" "),o("el-radio",{attrs:{label:!1}},[t._v("打开评论")])],1)],1)],1)],1),t._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(e){t.submitForm()}}},[t._v("发布\n        ")]),t._v(" "),o("el-button",{staticStyle:{"margin-left":"10px"},on:{click:function(e){t.resetForm("postForm")}}},[t._v("重置\n        ")])]:[o("el-tag",[t._v("发送异常错误,刷新页面,或者联系老大")])]],2),t._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-col",{attrs:{span:21}},[o("el-row",[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"商品封面(436x360):",prop:"imgurl"}},[o("Croppa",{ref:"imgurl",attrs:{width:218,height:180,quality:2},model:{value:t.postForm.imgurl,callback:function(e){t.$set(t.postForm,"imgurl",e)},expression:"postForm.imgurl"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:15}},[o("el-form-item",{attrs:{prop:"title"}},[o("MDinput",{attrs:{name:"name",required:"",maxlength:100},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[t._v("\n                标题\n              ")]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.postForm.title.length>=26,expression:"postForm.title.length>=26"}],staticClass:"title-prompt"},[t._v("APP可能会显示不全")])],1),t._v(" "),o("el-form-item",{attrs:{label:"商品名称:",prop:"name"}},[o("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"字")])],1)],1)],1),t._v(" "),o("div",{staticClass:"postInfo-container"},[o("el-row",[o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"类型:",prop:"goodsType"}},[o("el-select",{staticClass:"filter-item",staticStyle:{"min-width":"200px"},attrs:{clearable:"",placeholder:"类型"},model:{value:t.postForm.goodsType,callback:function(e){t.$set(t.postForm,"goodsType",e)},expression:"postForm.goodsType"}},t._l(t.calendarTypeOptions,function(t){return o("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"市场价:",prop:"priceMarket"}},[o("el-input-number",{staticStyle:{"min-width":"200px"},attrs:{placeholder:"市场价"},model:{value:t.postForm.priceMarket,callback:function(e){t.$set(t.postForm,"priceMarket",t._n(e))},expression:"postForm.priceMarket"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"销售价:",prop:"price"}},[o("el-input-number",{staticStyle:{"min-width":"200px"},attrs:{placeholder:"销售价"},model:{value:t.postForm.price,callback:function(e){t.$set(t.postForm,"price",t._n(e))},expression:"postForm.price"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"状态:",prop:"goodsStatus"}},[o("el-select",{staticClass:"filter-item",staticStyle:{"min-width":"200px"},attrs:{clearable:"",placeholder:"状态"},model:{value:t.postForm.goodsStatus,callback:function(e){t.$set(t.postForm,"goodsStatus",e)},expression:"postForm.goodsStatus"}},t._l(t.calendargoodsStatusOptions,function(t){return o("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1)],1)],1),t._v(" "),o("el-row",[o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"库存:",prop:"stock"}},[o("el-input-number",{staticStyle:{"min-width":"200px"},attrs:{placeholder:"库存"},model:{value:t.postForm.stock,callback:function(e){t.$set(t.postForm,"stock",t._n(e))},expression:"postForm.stock"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"显示顺序:",prop:"sortNo"}},[o("el-input-number",{staticStyle:{"min-width":"200px"},attrs:{placeholder:"显示顺序"},model:{value:t.postForm.sortNo,callback:function(e){t.$set(t.postForm,"sortNo",t._n(e))},expression:"postForm.sortNo"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"推荐:"}},[o("el-checkbox",{staticStyle:{"min-width":"200px"},attrs:{label:"首页",border:""},model:{value:t.postForm.recommendFlag,callback:function(e){t.$set(t.postForm,"recommendFlag",e)},expression:"postForm.recommendFlag"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"editor-container"},[o("Ueditor",{ref:"editor",attrs:{height:400},model:{value:t.postForm.note,callback:function(e){t.$set(t.postForm,"note",e)},expression:"postForm.note"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"轮播图(436x360):"}},[o("CroppaList",{ref:"uploadImages",attrs:{width:218,height:180,quality:2},model:{value:t.postForm.goodsImages,callback:function(e){t.$set(t.postForm,"goodsImages",e)},expression:"postForm.goodsImages"}})],1),t._v(" "),o("el-dialog",{attrs:{visible:t.dialogVisible,size:"tiny"},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1)],1)},[],!1,null,"055a53eb",null));C.options.__file="ProductDetail.vue";e.a=C.exports},jNee:function(t,e,o){"use strict";o.r(e);var s={name:"editProduct",components:{ProductDetail:o("YilU").a}},i=o("KHd+"),r=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("product-detail",{attrs:{"is-edit":!0,goods_id:this.$route.params.goods_id}})},[],!1,null,null,null);r.options.__file="edit.vue";e.default=r.exports},oDNp:function(t,e,o){},q4if:function(t,e,o){"use strict";var s=o("rY6X");o.n(s).a},rY6X:function(t,e,o){},xA6U:function(t,e,o){"use strict";o.d(e,"b",function(){return i}),o.d(e,"a",function(){return r}),o.d(e,"d",function(){return a}),o.d(e,"e",function(){return n}),o.d(e,"f",function(){return l}),o.d(e,"c",function(){return u});var s=o("t3Un");function i(t){return Object(s.a)({url:"/goods/list",method:"get",params:t})}function r(t){return Object(s.a)({url:"/goods/"+t,method:"get"})}function a(t){return Object(s.a)({url:"/goods",method:"post",data:t})}function n(t){return Object(s.a)({url:"/goods/status",method:"post",data:t})}function l(t){return Object(s.a)({url:"/goods/recommend",method:"post",data:t})}function u(t){return Object(s.a)({url:"/goods/pv",method:"get",params:{pv:t}})}}}]);