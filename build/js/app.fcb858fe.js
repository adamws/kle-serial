(function(e){function t(t){for(var r,c,i=t[0],a=t[1],u=t[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&p.push(l[c][0]),l[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);b&&b(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==l[a]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},l={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/kle-serial/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var b=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b4e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),l=n("3fd4"),o=(n("7dd6"),{id:"app"}),c=Object(r["m"])("div",null,"KLE converter",-1),i={href:"https://github.com/adamws/kle-serial"};function a(e,t,n,l,a,u){var b=Object(r["M"])("el-header"),d=Object(r["M"])("KleConverter"),p=Object(r["M"])("el-main"),s=Object(r["M"])("el-footer"),j=Object(r["M"])("el-container");return Object(r["D"])(),Object(r["i"])("div",o,[Object(r["m"])(j,null,{default:Object(r["ab"])((function(){return[Object(r["m"])(b,{style:{height:"20px"}},{default:Object(r["ab"])((function(){return[c]})),_:1}),Object(r["m"])(p,null,{default:Object(r["ab"])((function(){return[Object(r["m"])(d)]})),_:1}),Object(r["m"])(s,null,{default:Object(r["ab"])((function(){return[Object(r["m"])("div",null,[Object(r["m"])("a",i,[Object(r["m"])("img",{src:a.githubIcon},null,8,["src"])])])]})),_:1})]})),_:1})])}var u=Object(r["eb"])("data-v-209707a2");Object(r["G"])("data-v-209707a2");var b=Object(r["m"])("div",null,[Object(r["l"])(" Convert json layout generated by "),Object(r["m"])("a",{href:"http://www.keyboard-layout-editor.com"},"keyboard-layout-editor"),Object(r["l"])(" to it's internal form: ")],-1),d=Object(r["m"])("br",null,null,-1),p=Object(r["l"])("Upload layout "),s=Object(r["m"])("i",{class:"el-icon-upload el-icon-right"},null,-1),j=Object(r["m"])("br",null,null,-1),f={key:0,style:{height:"400px"}},O=Object(r["m"])("br",null,null,-1),h=Object(r["l"])("Download");Object(r["E"])();var m=u((function(e,t,n,l,o,c){var i=Object(r["M"])("el-button"),a=Object(r["M"])("prism-editor");return Object(r["D"])(),Object(r["i"])(r["b"],null,[b,d,Object(r["m"])("div",null,[Object(r["m"])(i,{type:"primary",onClick:t[1]||(t[1]=function(e){return c.triggerUpload()})},{default:u((function(){return[p,s]})),_:1}),Object(r["m"])("input",{type:"file",id:"file",ref:"file",accept:".json",onChange:t[2]||(t[2]=function(e){return c.uploadLayout()}),style:{display:"none"}},null,544)]),j,""!==o.convertedLayout?(Object(r["D"])(),Object(r["i"])("div",f,[Object(r["m"])(a,{class:"kle-raw-input",modelValue:o.convertedLayout,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.convertedLayout=e}),highlight:c.highlighter,"line-numbers":"",readonly:""},null,8,["modelValue","highlight"])])):Object(r["j"])("",!0),O,Object(r["m"])("div",null,[""!==o.convertedLayout?(Object(r["D"])(),Object(r["i"])(i,{key:0,type:"success",onClick:t[4]||(t[4]=function(e){return c.getConvertedLayout()})},{default:u((function(){return[h]})),_:1})):Object(r["j"])("",!0)])],64)})),v=(n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("21a6")),A=n.n(v),y=n("e57a"),g=(n("cabf"),n("8c7a")),M=(n("cb55"),n("416b"),n("6b2c"),{name:"KleConverter",components:{PrismEditor:y["a"]},data:function(){return{convertedLayout:"",convertedLayoutFilename:""}},methods:{highlighter:function(e){return Object(g["highlight"])(e,g["languages"].js)},showFailAlert:function(e){this.$alert(e,"Failed",{confirmButtonText:"OK",type:"error"})},triggerUpload:function(){this.$refs.file.click()},uploadLayout:function(){var e=this;this.convertedLayout="";var t=n("4030"),r=this.$refs.file.files[0],l=new FileReader;l.readAsText(r,"UTF-8"),l.onload=function(n){if("application/json"===r.type){e.convertedLayoutFilename=r.name.replace(/\.[^/.]+$/,"");var l=n.target.result;try{var o=t.Serial.deserialize(JSON.parse(l));e.convertedLayout=JSON.stringify(o,null,2)}catch(c){e.showFailAlert(c.toString())}}else e.showFailAlert("Unsupported file type")},l.onerror=function(e){console.error(e)}},getConvertedLayout:function(){var e=new Blob([this.convertedLayout],{type:"text/plain;charset=utf-8"});A.a.saveAs(e,this.convertedLayoutFilename+"-converted.json")}}});n("fe45");M.render=m,M.__scopeId="data-v-209707a2";var w=M,I={name:"App",data:function(){return{githubIcon:n("1b4e")}},components:{KleConverter:w}};n("5d13");I.render=a;var E=I,B=Object(r["h"])(E);B.use(l["a"]),B.mount("#app")},"5d13":function(e,t,n){"use strict";n("cd11")},aeb6:function(e,t,n){},cd11:function(e,t,n){},fe45:function(e,t,n){"use strict";n("aeb6")}});
//# sourceMappingURL=app.fcb858fe.js.map