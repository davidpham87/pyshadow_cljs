goog.provide('pycljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
pycljs.core.json_parse_js = (function pycljs$core$json_parse_js(string){
var fexpr__11357 = JSON.parse;
return (fexpr__11357.cljs$core$IFn$_invoke$arity$1 ? fexpr__11357.cljs$core$IFn$_invoke$arity$1(string) : fexpr__11357.call(null,string));
});
pycljs.core.json_parse = (function pycljs$core$json_parse(string){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(pycljs.core.json_parse_js(string));
});
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/pycljs/core.cljs. Go ahead and edit it and see reloading?"], 0));
if((typeof pycljs !== 'undefined') && (typeof pycljs.core !== 'undefined') && (typeof pycljs.core.app_state !== 'undefined')){
} else {
pycljs.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world! New"], null));
}
pycljs.core.add_load_func = (function pycljs$core$add_load_func(f){
var old_onload = window.onload;
return window.onload = (((old_onload == null))?f:((function (old_onload){
return (function (_){
(old_onload.cljs$core$IFn$_invoke$arity$0 ? old_onload.cljs$core$IFn$_invoke$arity$0() : old_onload.call(null));

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(old_onload))
);
});
pycljs.core.make_request = (function pycljs$core$make_request(method,url,async,handler){
var req = (new XMLHttpRequest());
var req_ok = ((function (req){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200));
});})(req))
;
var data_ready = ((function (req,req_ok){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.readyState,(4));
});})(req,req_ok))
;
var req_done = ((function (req,req_ok,data_ready){
return (function (){
var and__4036__auto__ = req_ok();
if(cljs.core.truth_(and__4036__auto__)){
return data_ready();
} else {
return and__4036__auto__;
}
});})(req,req_ok,data_ready))
;
var parse_resp = ((function (req,req_ok,data_ready,req_done){
return (function (){
return pycljs.core.json_parse(req.responseText);
});})(req,req_ok,data_ready,req_done))
;
var handle_resp = ((function (req,req_ok,data_ready,req_done,parse_resp){
return (function (_){
if(cljs.core.truth_(req_done())){
var response = parse_resp();
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(response) : handler.call(null,response));
} else {
return null;
}
});})(req,req_ok,data_ready,req_done,parse_resp))
;
req.onreadystatechange = handle_resp;

req.open(method,url,async);

return req.send();
});
pycljs.core.on_js_reload = (function pycljs$core$on_js_reload(){
console.log("Call");

return pycljs.core.add_load_func((function (){
return pycljs.core.make_request("GET","/newtext",true,(function (response){
console.log((response.cljs$core$IFn$_invoke$arity$1 ? response.cljs$core$IFn$_invoke$arity$1("text") : response.call(null,"text")));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pycljs.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),(response.cljs$core$IFn$_invoke$arity$1 ? response.cljs$core$IFn$_invoke$arity$1("text") : response.call(null,"text")));
}));
}));
});
pycljs.core.test_request = (function pycljs$core$test_request(var_args){
var G__11359 = arguments.length;
switch (G__11359) {
case 0:
return pycljs.core.test_request.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return pycljs.core.test_request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pycljs.core.test_request.cljs$core$IFn$_invoke$arity$0 = (function (){
return pycljs.core.test_request.cljs$core$IFn$_invoke$arity$3("/newtext",pycljs.core.app_state,new cljs.core.Keyword(null,"text","text",-1790561697));
});

pycljs.core.test_request.cljs$core$IFn$_invoke$arity$3 = (function (resource_path,data_container,field){
console.log(resource_path);

console.log(["test ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_path)].join(''));

console.log(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pycljs.core.app_state)));

return pycljs.core.make_request("GET",resource_path,true,(function (response){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_container,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),(response.cljs$core$IFn$_invoke$arity$1 ? response.cljs$core$IFn$_invoke$arity$1("text") : response.call(null,"text")));
}));
});

pycljs.core.test_request.cljs$lang$maxFixedArity = 3;

pycljs.core.text_world = (function pycljs$core$text_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Reload, test, old-version"], null);
});
pycljs.core.show_json = (function pycljs$core$show_json(ts_id){
var server_request = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
return ((function (server_request){
return (function (ts_id__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (server_request){
return (function (){
return pycljs.core.test_request.cljs$core$IFn$_invoke$arity$3(["ts/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts_id__$1)].join(''),server_request,new cljs.core.Keyword(null,"data","data",-232669377));
});})(server_request))
], null),"New Data"], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(server_request))], null);
});
;})(server_request))
});
pycljs.core.hello_world = (function pycljs$core$hello_world(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Flask with clojurescript and figwheel demo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The heading below should change to say hi from flask"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pycljs.core.text_world], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pycljs.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return pycljs.core.test_request.cljs$core$IFn$_invoke$arity$0();
})], null),"Reload Text"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pycljs.core.show_json,"roche"], null)], null);
});
pycljs.core.init = (function pycljs$core$init(){
pycljs.core.on_js_reload();

var G__11360 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pycljs.core.hello_world], null);
var G__11361 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11360,G__11361) : reagent.core.render_component.call(null,G__11360,G__11361));
});
goog.exportSymbol('pycljs.core.init', pycljs.core.init);

//# sourceMappingURL=pycljs.core.js.map
