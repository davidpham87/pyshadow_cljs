goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20811 = arguments.length;
var i__4642__auto___20813 = (0);
while(true){
if((i__4642__auto___20813 < len__4641__auto___20811)){
args__4647__auto__.push((arguments[i__4642__auto___20813]));

var G__20816 = (i__4642__auto___20813 + (1));
i__4642__auto___20813 = G__20816;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20638){
var G__20639 = cljs.core.first(seq20638);
var seq20638__$1 = cljs.core.next(seq20638);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20639,seq20638__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__20647){
var map__20648 = p__20647;
var map__20648__$1 = (((((!((map__20648 == null))))?(((((map__20648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20648):map__20648);
var src = map__20648__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20648__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20648__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4047__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20651 = cljs.core.seq(sources);
var chunk__20652 = null;
var count__20653 = (0);
var i__20654 = (0);
while(true){
if((i__20654 < count__20653)){
var map__20655 = chunk__20652.cljs$core$IIndexed$_nth$arity$2(null,i__20654);
var map__20655__$1 = (((((!((map__20655 == null))))?(((((map__20655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20655):map__20655);
var src = map__20655__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20655__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20655__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20655__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20655__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20824 = seq__20651;
var G__20825 = chunk__20652;
var G__20826 = count__20653;
var G__20827 = (i__20654 + (1));
seq__20651 = G__20824;
chunk__20652 = G__20825;
count__20653 = G__20826;
i__20654 = G__20827;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20651);
if(temp__5457__auto__){
var seq__20651__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20651__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20651__$1);
var G__20828 = cljs.core.chunk_rest(seq__20651__$1);
var G__20829 = c__4461__auto__;
var G__20830 = cljs.core.count(c__4461__auto__);
var G__20831 = (0);
seq__20651 = G__20828;
chunk__20652 = G__20829;
count__20653 = G__20830;
i__20654 = G__20831;
continue;
} else {
var map__20657 = cljs.core.first(seq__20651__$1);
var map__20657__$1 = (((((!((map__20657 == null))))?(((((map__20657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20657):map__20657);
var src = map__20657__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20657__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20657__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20657__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20657__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20832 = cljs.core.next(seq__20651__$1);
var G__20833 = null;
var G__20834 = (0);
var G__20835 = (0);
seq__20651 = G__20832;
chunk__20652 = G__20833;
count__20653 = G__20834;
i__20654 = G__20835;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20661 = cljs.core.seq(js_requires);
var chunk__20662 = null;
var count__20663 = (0);
var i__20664 = (0);
while(true){
if((i__20664 < count__20663)){
var js_ns = chunk__20662.cljs$core$IIndexed$_nth$arity$2(null,i__20664);
var require_str_20836 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20836);


var G__20837 = seq__20661;
var G__20838 = chunk__20662;
var G__20839 = count__20663;
var G__20840 = (i__20664 + (1));
seq__20661 = G__20837;
chunk__20662 = G__20838;
count__20663 = G__20839;
i__20664 = G__20840;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20661);
if(temp__5457__auto__){
var seq__20661__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20661__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20661__$1);
var G__20841 = cljs.core.chunk_rest(seq__20661__$1);
var G__20842 = c__4461__auto__;
var G__20843 = cljs.core.count(c__4461__auto__);
var G__20844 = (0);
seq__20661 = G__20841;
chunk__20662 = G__20842;
count__20663 = G__20843;
i__20664 = G__20844;
continue;
} else {
var js_ns = cljs.core.first(seq__20661__$1);
var require_str_20845 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20845);


var G__20846 = cljs.core.next(seq__20661__$1);
var G__20847 = null;
var G__20848 = (0);
var G__20849 = (0);
seq__20661 = G__20846;
chunk__20662 = G__20847;
count__20663 = G__20848;
i__20664 = G__20849;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__20668 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__20668) : callback.call(null,G__20668));
} else {
var G__20669 = shadow.cljs.devtools.client.env.files_url();
var G__20670 = ((function (G__20669){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__20669))
;
var G__20671 = "POST";
var G__20672 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__20673 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20669,G__20670,G__20671,G__20672,G__20673);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__20687){
var map__20689 = p__20687;
var map__20689__$1 = (((((!((map__20689 == null))))?(((((map__20689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20689):map__20689);
var msg = map__20689__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20689__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20689__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__20693 = info;
var map__20693__$1 = (((((!((map__20693 == null))))?(((((map__20693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20693):map__20693);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20693__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20693__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__20693,map__20693__$1,sources,compiled,map__20689,map__20689__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20695(s__20696){
return (new cljs.core.LazySeq(null,((function (map__20693,map__20693__$1,sources,compiled,map__20689,map__20689__$1,msg,info,reload_info){
return (function (){
var s__20696__$1 = s__20696;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20696__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__20704 = cljs.core.first(xs__6012__auto__);
var map__20704__$1 = (((((!((map__20704 == null))))?(((((map__20704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20704):map__20704);
var src = map__20704__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20704__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20704__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__20696__$1,map__20704,map__20704__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20693,map__20693__$1,sources,compiled,map__20689,map__20689__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20695_$_iter__20697(s__20698){
return (new cljs.core.LazySeq(null,((function (s__20696__$1,map__20704,map__20704__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20693,map__20693__$1,sources,compiled,map__20689,map__20689__$1,msg,info,reload_info){
return (function (){
var s__20698__$1 = s__20698;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__20698__$1);
if(temp__5457__auto____$1){
var s__20698__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20698__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__20698__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__20700 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__20699 = (0);
while(true){
if((i__20699 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__20699);
cljs.core.chunk_append(b__20700,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20856 = (i__20699 + (1));
i__20699 = G__20856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20700),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20695_$_iter__20697(cljs.core.chunk_rest(s__20698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20700),null);
}
} else {
var warning = cljs.core.first(s__20698__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20695_$_iter__20697(cljs.core.rest(s__20698__$2)));
}
} else {
return null;
}
break;
}
});})(s__20696__$1,map__20704,map__20704__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20693,map__20693__$1,sources,compiled,map__20689,map__20689__$1,msg,info,reload_info))
,null,null));
});})(s__20696__$1,map__20704,map__20704__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20693,map__20693__$1,sources,compiled,map__20689,map__20689__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20695(cljs.core.rest(s__20696__$1)));
} else {
var G__20858 = cljs.core.rest(s__20696__$1);
s__20696__$1 = G__20858;
continue;
}
} else {
var G__20859 = cljs.core.rest(s__20696__$1);
s__20696__$1 = G__20859;
continue;
}
} else {
return null;
}
break;
}
});})(map__20693,map__20693__$1,sources,compiled,map__20689,map__20689__$1,msg,info,reload_info))
,null,null));
});})(map__20693,map__20693__$1,sources,compiled,map__20689,map__20689__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
var seq__20713_20860 = cljs.core.seq(warnings);
var chunk__20714_20861 = null;
var count__20715_20862 = (0);
var i__20716_20863 = (0);
while(true){
if((i__20716_20863 < count__20715_20862)){
var map__20718_20864 = chunk__20714_20861.cljs$core$IIndexed$_nth$arity$2(null,i__20716_20863);
var map__20718_20865__$1 = (((((!((map__20718_20864 == null))))?(((((map__20718_20864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20718_20864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20718_20864):map__20718_20864);
var w_20866 = map__20718_20865__$1;
var msg_20867__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718_20865__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718_20865__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718_20865__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718_20865__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20870)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20868),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20869),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20867__$1)].join(''));


var G__20871 = seq__20713_20860;
var G__20872 = chunk__20714_20861;
var G__20873 = count__20715_20862;
var G__20874 = (i__20716_20863 + (1));
seq__20713_20860 = G__20871;
chunk__20714_20861 = G__20872;
count__20715_20862 = G__20873;
i__20716_20863 = G__20874;
continue;
} else {
var temp__5457__auto___20875 = cljs.core.seq(seq__20713_20860);
if(temp__5457__auto___20875){
var seq__20713_20876__$1 = temp__5457__auto___20875;
if(cljs.core.chunked_seq_QMARK_(seq__20713_20876__$1)){
var c__4461__auto___20877 = cljs.core.chunk_first(seq__20713_20876__$1);
var G__20878 = cljs.core.chunk_rest(seq__20713_20876__$1);
var G__20879 = c__4461__auto___20877;
var G__20880 = cljs.core.count(c__4461__auto___20877);
var G__20881 = (0);
seq__20713_20860 = G__20878;
chunk__20714_20861 = G__20879;
count__20715_20862 = G__20880;
i__20716_20863 = G__20881;
continue;
} else {
var map__20727_20882 = cljs.core.first(seq__20713_20876__$1);
var map__20727_20883__$1 = (((((!((map__20727_20882 == null))))?(((((map__20727_20882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20727_20882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20727_20882):map__20727_20882);
var w_20884 = map__20727_20883__$1;
var msg_20885__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727_20883__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727_20883__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727_20883__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727_20883__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20888)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20886),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20887),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20885__$1)].join(''));


var G__20891 = cljs.core.next(seq__20713_20876__$1);
var G__20892 = null;
var G__20893 = (0);
var G__20894 = (0);
seq__20713_20860 = G__20891;
chunk__20714_20861 = G__20892;
count__20715_20862 = G__20893;
i__20716_20863 = G__20894;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20693,map__20693__$1,sources,compiled,warnings,map__20689,map__20689__$1,msg,info,reload_info){
return (function (p__20729){
var map__20730 = p__20729;
var map__20730__$1 = (((((!((map__20730 == null))))?(((((map__20730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20730):map__20730);
var src = map__20730__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20730__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20730__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__20693,map__20693__$1,sources,compiled,warnings,map__20689,map__20689__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20693,map__20693__$1,sources,compiled,warnings,map__20689,map__20689__$1,msg,info,reload_info){
return (function (p__20732){
var map__20733 = p__20732;
var map__20733__$1 = (((((!((map__20733 == null))))?(((((map__20733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20733):map__20733);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20733__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__20693,map__20693__$1,sources,compiled,warnings,map__20689,map__20689__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20693,map__20693__$1,sources,compiled,warnings,map__20689,map__20689__$1,msg,info,reload_info){
return (function (p__20735){
var map__20736 = p__20735;
var map__20736__$1 = (((((!((map__20736 == null))))?(((((map__20736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20736):map__20736);
var rc = map__20736__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__20693,map__20693__$1,sources,compiled,warnings,map__20689,map__20689__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__20693,map__20693__$1,sources,compiled,warnings,map__20689,map__20689__$1,msg,info,reload_info){
return (function (p1__20674_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20674_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__20693,map__20693__$1,sources,compiled,warnings,map__20689,map__20689__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__4036__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__4036__auto__){
return rel_new;
} else {
return and__4036__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4036__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4036__auto____$1){
return new$;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__20745){
var map__20746 = p__20745;
var map__20746__$1 = (((((!((map__20746 == null))))?(((((map__20746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20746):map__20746);
var msg = map__20746__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20746__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__20748 = cljs.core.seq(updates);
var chunk__20750 = null;
var count__20751 = (0);
var i__20752 = (0);
while(true){
if((i__20752 < count__20751)){
var path = chunk__20750.cljs$core$IIndexed$_nth$arity$2(null,i__20752);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20756_20902 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20759_20903 = null;
var count__20760_20904 = (0);
var i__20761_20905 = (0);
while(true){
if((i__20761_20905 < count__20760_20904)){
var node_20906 = chunk__20759_20903.cljs$core$IIndexed$_nth$arity$2(null,i__20761_20905);
var path_match_20908 = shadow.cljs.devtools.client.browser.match_paths(node_20906.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20908)){
var new_link_20909 = (function (){var G__20766 = node_20906.cloneNode(true);
G__20766.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20908),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20766;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20908], 0));

goog.dom.insertSiblingAfter(new_link_20909,node_20906);

goog.dom.removeNode(node_20906);


var G__20910 = seq__20756_20902;
var G__20911 = chunk__20759_20903;
var G__20912 = count__20760_20904;
var G__20913 = (i__20761_20905 + (1));
seq__20756_20902 = G__20910;
chunk__20759_20903 = G__20911;
count__20760_20904 = G__20912;
i__20761_20905 = G__20913;
continue;
} else {
var G__20914 = seq__20756_20902;
var G__20915 = chunk__20759_20903;
var G__20916 = count__20760_20904;
var G__20917 = (i__20761_20905 + (1));
seq__20756_20902 = G__20914;
chunk__20759_20903 = G__20915;
count__20760_20904 = G__20916;
i__20761_20905 = G__20917;
continue;
}
} else {
var temp__5457__auto___20918 = cljs.core.seq(seq__20756_20902);
if(temp__5457__auto___20918){
var seq__20756_20919__$1 = temp__5457__auto___20918;
if(cljs.core.chunked_seq_QMARK_(seq__20756_20919__$1)){
var c__4461__auto___20920 = cljs.core.chunk_first(seq__20756_20919__$1);
var G__20921 = cljs.core.chunk_rest(seq__20756_20919__$1);
var G__20922 = c__4461__auto___20920;
var G__20923 = cljs.core.count(c__4461__auto___20920);
var G__20924 = (0);
seq__20756_20902 = G__20921;
chunk__20759_20903 = G__20922;
count__20760_20904 = G__20923;
i__20761_20905 = G__20924;
continue;
} else {
var node_20925 = cljs.core.first(seq__20756_20919__$1);
var path_match_20926 = shadow.cljs.devtools.client.browser.match_paths(node_20925.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20926)){
var new_link_20927 = (function (){var G__20767 = node_20925.cloneNode(true);
G__20767.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20926),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20767;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20926], 0));

goog.dom.insertSiblingAfter(new_link_20927,node_20925);

goog.dom.removeNode(node_20925);


var G__20928 = cljs.core.next(seq__20756_20919__$1);
var G__20929 = null;
var G__20930 = (0);
var G__20931 = (0);
seq__20756_20902 = G__20928;
chunk__20759_20903 = G__20929;
count__20760_20904 = G__20930;
i__20761_20905 = G__20931;
continue;
} else {
var G__20932 = cljs.core.next(seq__20756_20919__$1);
var G__20933 = null;
var G__20934 = (0);
var G__20935 = (0);
seq__20756_20902 = G__20932;
chunk__20759_20903 = G__20933;
count__20760_20904 = G__20934;
i__20761_20905 = G__20935;
continue;
}
}
} else {
}
}
break;
}


var G__20936 = seq__20748;
var G__20937 = chunk__20750;
var G__20938 = count__20751;
var G__20939 = (i__20752 + (1));
seq__20748 = G__20936;
chunk__20750 = G__20937;
count__20751 = G__20938;
i__20752 = G__20939;
continue;
} else {
var G__20940 = seq__20748;
var G__20941 = chunk__20750;
var G__20942 = count__20751;
var G__20943 = (i__20752 + (1));
seq__20748 = G__20940;
chunk__20750 = G__20941;
count__20751 = G__20942;
i__20752 = G__20943;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20748);
if(temp__5457__auto__){
var seq__20748__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20748__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20748__$1);
var G__20945 = cljs.core.chunk_rest(seq__20748__$1);
var G__20946 = c__4461__auto__;
var G__20947 = cljs.core.count(c__4461__auto__);
var G__20948 = (0);
seq__20748 = G__20945;
chunk__20750 = G__20946;
count__20751 = G__20947;
i__20752 = G__20948;
continue;
} else {
var path = cljs.core.first(seq__20748__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20768_20950 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20771_20951 = null;
var count__20772_20952 = (0);
var i__20773_20953 = (0);
while(true){
if((i__20773_20953 < count__20772_20952)){
var node_20954 = chunk__20771_20951.cljs$core$IIndexed$_nth$arity$2(null,i__20773_20953);
var path_match_20955 = shadow.cljs.devtools.client.browser.match_paths(node_20954.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20955)){
var new_link_20956 = (function (){var G__20776 = node_20954.cloneNode(true);
G__20776.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20955),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20776;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20955], 0));

goog.dom.insertSiblingAfter(new_link_20956,node_20954);

goog.dom.removeNode(node_20954);


var G__20957 = seq__20768_20950;
var G__20958 = chunk__20771_20951;
var G__20959 = count__20772_20952;
var G__20960 = (i__20773_20953 + (1));
seq__20768_20950 = G__20957;
chunk__20771_20951 = G__20958;
count__20772_20952 = G__20959;
i__20773_20953 = G__20960;
continue;
} else {
var G__20961 = seq__20768_20950;
var G__20962 = chunk__20771_20951;
var G__20963 = count__20772_20952;
var G__20964 = (i__20773_20953 + (1));
seq__20768_20950 = G__20961;
chunk__20771_20951 = G__20962;
count__20772_20952 = G__20963;
i__20773_20953 = G__20964;
continue;
}
} else {
var temp__5457__auto___20965__$1 = cljs.core.seq(seq__20768_20950);
if(temp__5457__auto___20965__$1){
var seq__20768_20966__$1 = temp__5457__auto___20965__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20768_20966__$1)){
var c__4461__auto___20967 = cljs.core.chunk_first(seq__20768_20966__$1);
var G__20968 = cljs.core.chunk_rest(seq__20768_20966__$1);
var G__20969 = c__4461__auto___20967;
var G__20970 = cljs.core.count(c__4461__auto___20967);
var G__20971 = (0);
seq__20768_20950 = G__20968;
chunk__20771_20951 = G__20969;
count__20772_20952 = G__20970;
i__20773_20953 = G__20971;
continue;
} else {
var node_20972 = cljs.core.first(seq__20768_20966__$1);
var path_match_20973 = shadow.cljs.devtools.client.browser.match_paths(node_20972.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20973)){
var new_link_20974 = (function (){var G__20777 = node_20972.cloneNode(true);
G__20777.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20973),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20777;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20973], 0));

goog.dom.insertSiblingAfter(new_link_20974,node_20972);

goog.dom.removeNode(node_20972);


var G__20975 = cljs.core.next(seq__20768_20966__$1);
var G__20976 = null;
var G__20977 = (0);
var G__20978 = (0);
seq__20768_20950 = G__20975;
chunk__20771_20951 = G__20976;
count__20772_20952 = G__20977;
i__20773_20953 = G__20978;
continue;
} else {
var G__20979 = cljs.core.next(seq__20768_20966__$1);
var G__20980 = null;
var G__20981 = (0);
var G__20982 = (0);
seq__20768_20950 = G__20979;
chunk__20771_20951 = G__20980;
count__20772_20952 = G__20981;
i__20773_20953 = G__20982;
continue;
}
}
} else {
}
}
break;
}


var G__20983 = cljs.core.next(seq__20748__$1);
var G__20984 = null;
var G__20985 = (0);
var G__20986 = (0);
seq__20748 = G__20983;
chunk__20750 = G__20984;
count__20751 = G__20985;
i__20752 = G__20986;
continue;
} else {
var G__20987 = cljs.core.next(seq__20748__$1);
var G__20988 = null;
var G__20989 = (0);
var G__20990 = (0);
seq__20748 = G__20987;
chunk__20750 = G__20988;
count__20751 = G__20989;
i__20752 = G__20990;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__20780){
var map__20781 = p__20780;
var map__20781__$1 = (((((!((map__20781 == null))))?(((((map__20781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20781):map__20781);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__20781,map__20781__$1,id,js){
return (function (){
return eval(js);
});})(map__20781,map__20781__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__20783){
var map__20784 = p__20783;
var map__20784__$1 = (((((!((map__20784 == null))))?(((((map__20784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20784):map__20784);
var msg = map__20784__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20784,map__20784__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__20786){
var map__20787 = p__20786;
var map__20787__$1 = (((((!((map__20787 == null))))?(((((map__20787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20787):map__20787);
var src = map__20787__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4036__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4036__auto__;
}
});})(map__20784,map__20784__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__20784,map__20784__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__20784,map__20784__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__20792){
var map__20793 = p__20792;
var map__20793__$1 = (((((!((map__20793 == null))))?(((((map__20793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20793):map__20793);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__20793,map__20793__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__20793,map__20793__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__20796){
var map__20797 = p__20796;
var map__20797__$1 = (((((!((map__20797 == null))))?(((((map__20797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20797):map__20797);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__20801){
var map__20802 = p__20801;
var map__20802__$1 = (((((!((map__20802 == null))))?(((((map__20802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20802):map__20802);
var msg = map__20802__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20802__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__20804 = type;
var G__20804__$1 = (((G__20804 instanceof cljs.core.Keyword))?G__20804.fqn:null);
switch (G__20804__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__20805 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__20806 = ((function (G__20805){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__20805))
;
var G__20807 = "POST";
var G__20808 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__20809 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20805,G__20806,G__20807,G__20808,G__20809);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4047__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e20810){var e = e20810;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___21004 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___21004)){
var s_21006 = temp__5457__auto___21004;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_21006.onclose = ((function (s_21006,temp__5457__auto___21004){
return (function (e){
return null;
});})(s_21006,temp__5457__auto___21004))
;

s_21006.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4036__auto__ = document;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4036__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
