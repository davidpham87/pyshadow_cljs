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
var len__4641__auto___23110 = arguments.length;
var i__4642__auto___23111 = (0);
while(true){
if((i__4642__auto___23111 < len__4641__auto___23110)){
args__4647__auto__.push((arguments[i__4642__auto___23111]));

var G__23112 = (i__4642__auto___23111 + (1));
i__4642__auto___23111 = G__23112;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22822){
var G__22823 = cljs.core.first(seq22822);
var seq22822__$1 = cljs.core.next(seq22822);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22823,seq22822__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__22829){
var map__22830 = p__22829;
var map__22830__$1 = (((((!((map__22830 == null))))?(((((map__22830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22830):map__22830);
var src = map__22830__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22830__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22830__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__22834 = cljs.core.seq(sources);
var chunk__22835 = null;
var count__22836 = (0);
var i__22837 = (0);
while(true){
if((i__22837 < count__22836)){
var map__22840 = chunk__22835.cljs$core$IIndexed$_nth$arity$2(null,i__22837);
var map__22840__$1 = (((((!((map__22840 == null))))?(((((map__22840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22840):map__22840);
var src = map__22840__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22840__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22840__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22840__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22840__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__23125 = seq__22834;
var G__23126 = chunk__22835;
var G__23127 = count__22836;
var G__23128 = (i__22837 + (1));
seq__22834 = G__23125;
chunk__22835 = G__23126;
count__22836 = G__23127;
i__22837 = G__23128;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22834);
if(temp__5457__auto__){
var seq__22834__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22834__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__22834__$1);
var G__23129 = cljs.core.chunk_rest(seq__22834__$1);
var G__23130 = c__4461__auto__;
var G__23131 = cljs.core.count(c__4461__auto__);
var G__23132 = (0);
seq__22834 = G__23129;
chunk__22835 = G__23130;
count__22836 = G__23131;
i__22837 = G__23132;
continue;
} else {
var map__22864 = cljs.core.first(seq__22834__$1);
var map__22864__$1 = (((((!((map__22864 == null))))?(((((map__22864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22864):map__22864);
var src = map__22864__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__23137 = cljs.core.next(seq__22834__$1);
var G__23138 = null;
var G__23139 = (0);
var G__23140 = (0);
seq__22834 = G__23137;
chunk__22835 = G__23138;
count__22836 = G__23139;
i__22837 = G__23140;
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
var seq__22879 = cljs.core.seq(js_requires);
var chunk__22880 = null;
var count__22881 = (0);
var i__22882 = (0);
while(true){
if((i__22882 < count__22881)){
var js_ns = chunk__22880.cljs$core$IIndexed$_nth$arity$2(null,i__22882);
var require_str_23146 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23146);


var G__23147 = seq__22879;
var G__23148 = chunk__22880;
var G__23149 = count__22881;
var G__23150 = (i__22882 + (1));
seq__22879 = G__23147;
chunk__22880 = G__23148;
count__22881 = G__23149;
i__22882 = G__23150;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22879);
if(temp__5457__auto__){
var seq__22879__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22879__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__22879__$1);
var G__23151 = cljs.core.chunk_rest(seq__22879__$1);
var G__23152 = c__4461__auto__;
var G__23153 = cljs.core.count(c__4461__auto__);
var G__23154 = (0);
seq__22879 = G__23151;
chunk__22880 = G__23152;
count__22881 = G__23153;
i__22882 = G__23154;
continue;
} else {
var js_ns = cljs.core.first(seq__22879__$1);
var require_str_23155 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23155);


var G__23156 = cljs.core.next(seq__22879__$1);
var G__23157 = null;
var G__23158 = (0);
var G__23159 = (0);
seq__22879 = G__23156;
chunk__22880 = G__23157;
count__22881 = G__23158;
i__22882 = G__23159;
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
var G__22887 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__22887) : callback.call(null,G__22887));
} else {
var G__22888 = shadow.cljs.devtools.client.env.files_url();
var G__22889 = ((function (G__22888){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__22888))
;
var G__22890 = "POST";
var G__22891 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__22892 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__22888,G__22889,G__22890,G__22891,G__22892);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__22899){
var map__22900 = p__22899;
var map__22900__$1 = (((((!((map__22900 == null))))?(((((map__22900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22900):map__22900);
var msg = map__22900__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22900__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22900__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__22903 = info;
var map__22903__$1 = (((((!((map__22903 == null))))?(((((map__22903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22903):map__22903);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22903__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22903__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__22903,map__22903__$1,sources,compiled,map__22900,map__22900__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22906(s__22907){
return (new cljs.core.LazySeq(null,((function (map__22903,map__22903__$1,sources,compiled,map__22900,map__22900__$1,msg,info,reload_info){
return (function (){
var s__22907__$1 = s__22907;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22907__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__22914 = cljs.core.first(xs__6012__auto__);
var map__22914__$1 = (((((!((map__22914 == null))))?(((((map__22914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22914):map__22914);
var src = map__22914__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__22907__$1,map__22914,map__22914__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22903,map__22903__$1,sources,compiled,map__22900,map__22900__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22906_$_iter__22908(s__22909){
return (new cljs.core.LazySeq(null,((function (s__22907__$1,map__22914,map__22914__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22903,map__22903__$1,sources,compiled,map__22900,map__22900__$1,msg,info,reload_info){
return (function (){
var s__22909__$1 = s__22909;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__22909__$1);
if(temp__5457__auto____$1){
var s__22909__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22909__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__22909__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__22911 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__22910 = (0);
while(true){
if((i__22910 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__22910);
cljs.core.chunk_append(b__22911,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23172 = (i__22910 + (1));
i__22910 = G__23172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22911),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22906_$_iter__22908(cljs.core.chunk_rest(s__22909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22911),null);
}
} else {
var warning = cljs.core.first(s__22909__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22906_$_iter__22908(cljs.core.rest(s__22909__$2)));
}
} else {
return null;
}
break;
}
});})(s__22907__$1,map__22914,map__22914__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22903,map__22903__$1,sources,compiled,map__22900,map__22900__$1,msg,info,reload_info))
,null,null));
});})(s__22907__$1,map__22914,map__22914__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22903,map__22903__$1,sources,compiled,map__22900,map__22900__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22906(cljs.core.rest(s__22907__$1)));
} else {
var G__23178 = cljs.core.rest(s__22907__$1);
s__22907__$1 = G__23178;
continue;
}
} else {
var G__23179 = cljs.core.rest(s__22907__$1);
s__22907__$1 = G__23179;
continue;
}
} else {
return null;
}
break;
}
});})(map__22903,map__22903__$1,sources,compiled,map__22900,map__22900__$1,msg,info,reload_info))
,null,null));
});})(map__22903,map__22903__$1,sources,compiled,map__22900,map__22900__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
var seq__22924_23183 = cljs.core.seq(warnings);
var chunk__22925_23184 = null;
var count__22926_23185 = (0);
var i__22927_23186 = (0);
while(true){
if((i__22927_23186 < count__22926_23185)){
var map__22929_23188 = chunk__22925_23184.cljs$core$IIndexed$_nth$arity$2(null,i__22927_23186);
var map__22929_23189__$1 = (((((!((map__22929_23188 == null))))?(((((map__22929_23188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22929_23188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22929_23188):map__22929_23188);
var w_23190 = map__22929_23189__$1;
var msg_23191__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22929_23189__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22929_23189__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22929_23189__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22929_23189__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23194)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23192),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23193),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23191__$1)].join(''));


var G__23197 = seq__22924_23183;
var G__23198 = chunk__22925_23184;
var G__23199 = count__22926_23185;
var G__23200 = (i__22927_23186 + (1));
seq__22924_23183 = G__23197;
chunk__22925_23184 = G__23198;
count__22926_23185 = G__23199;
i__22927_23186 = G__23200;
continue;
} else {
var temp__5457__auto___23201 = cljs.core.seq(seq__22924_23183);
if(temp__5457__auto___23201){
var seq__22924_23202__$1 = temp__5457__auto___23201;
if(cljs.core.chunked_seq_QMARK_(seq__22924_23202__$1)){
var c__4461__auto___23205 = cljs.core.chunk_first(seq__22924_23202__$1);
var G__23206 = cljs.core.chunk_rest(seq__22924_23202__$1);
var G__23207 = c__4461__auto___23205;
var G__23208 = cljs.core.count(c__4461__auto___23205);
var G__23209 = (0);
seq__22924_23183 = G__23206;
chunk__22925_23184 = G__23207;
count__22926_23185 = G__23208;
i__22927_23186 = G__23209;
continue;
} else {
var map__22934_23210 = cljs.core.first(seq__22924_23202__$1);
var map__22934_23211__$1 = (((((!((map__22934_23210 == null))))?(((((map__22934_23210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22934_23210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22934_23210):map__22934_23210);
var w_23212 = map__22934_23211__$1;
var msg_23213__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23211__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23211__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23211__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23211__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23216)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23214),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23215),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23213__$1)].join(''));


var G__23218 = cljs.core.next(seq__22924_23202__$1);
var G__23219 = null;
var G__23220 = (0);
var G__23221 = (0);
seq__22924_23183 = G__23218;
chunk__22925_23184 = G__23219;
count__22926_23185 = G__23220;
i__22927_23186 = G__23221;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22903,map__22903__$1,sources,compiled,warnings,map__22900,map__22900__$1,msg,info,reload_info){
return (function (p__22938){
var map__22939 = p__22938;
var map__22939__$1 = (((((!((map__22939 == null))))?(((((map__22939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22939):map__22939);
var src = map__22939__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22939__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22939__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__22903,map__22903__$1,sources,compiled,warnings,map__22900,map__22900__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__22903,map__22903__$1,sources,compiled,warnings,map__22900,map__22900__$1,msg,info,reload_info){
return (function (p__22947){
var map__22948 = p__22947;
var map__22948__$1 = (((((!((map__22948 == null))))?(((((map__22948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22948):map__22948);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__22903,map__22903__$1,sources,compiled,warnings,map__22900,map__22900__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22903,map__22903__$1,sources,compiled,warnings,map__22900,map__22900__$1,msg,info,reload_info){
return (function (p__22950){
var map__22951 = p__22950;
var map__22951__$1 = (((((!((map__22951 == null))))?(((((map__22951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22951):map__22951);
var rc = map__22951__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__22903,map__22903__$1,sources,compiled,warnings,map__22900,map__22900__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__22903,map__22903__$1,sources,compiled,warnings,map__22900,map__22900__$1,msg,info,reload_info){
return (function (p1__22898_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22898_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__22903,map__22903__$1,sources,compiled,warnings,map__22900,map__22900__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__22961){
var map__22962 = p__22961;
var map__22962__$1 = (((((!((map__22962 == null))))?(((((map__22962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22962):map__22962);
var msg = map__22962__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__22965 = cljs.core.seq(updates);
var chunk__22967 = null;
var count__22968 = (0);
var i__22969 = (0);
while(true){
if((i__22969 < count__22968)){
var path = chunk__22967.cljs$core$IIndexed$_nth$arity$2(null,i__22969);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22971_23267 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22974_23268 = null;
var count__22975_23269 = (0);
var i__22976_23270 = (0);
while(true){
if((i__22976_23270 < count__22975_23269)){
var node_23271 = chunk__22974_23268.cljs$core$IIndexed$_nth$arity$2(null,i__22976_23270);
var path_match_23272 = shadow.cljs.devtools.client.browser.match_paths(node_23271.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23272)){
var new_link_23273 = (function (){var G__22979 = node_23271.cloneNode(true);
G__22979.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23272),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22979;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23272], 0));

goog.dom.insertSiblingAfter(new_link_23273,node_23271);

goog.dom.removeNode(node_23271);


var G__23274 = seq__22971_23267;
var G__23275 = chunk__22974_23268;
var G__23276 = count__22975_23269;
var G__23277 = (i__22976_23270 + (1));
seq__22971_23267 = G__23274;
chunk__22974_23268 = G__23275;
count__22975_23269 = G__23276;
i__22976_23270 = G__23277;
continue;
} else {
var G__23280 = seq__22971_23267;
var G__23281 = chunk__22974_23268;
var G__23282 = count__22975_23269;
var G__23283 = (i__22976_23270 + (1));
seq__22971_23267 = G__23280;
chunk__22974_23268 = G__23281;
count__22975_23269 = G__23282;
i__22976_23270 = G__23283;
continue;
}
} else {
var temp__5457__auto___23284 = cljs.core.seq(seq__22971_23267);
if(temp__5457__auto___23284){
var seq__22971_23285__$1 = temp__5457__auto___23284;
if(cljs.core.chunked_seq_QMARK_(seq__22971_23285__$1)){
var c__4461__auto___23286 = cljs.core.chunk_first(seq__22971_23285__$1);
var G__23287 = cljs.core.chunk_rest(seq__22971_23285__$1);
var G__23288 = c__4461__auto___23286;
var G__23289 = cljs.core.count(c__4461__auto___23286);
var G__23290 = (0);
seq__22971_23267 = G__23287;
chunk__22974_23268 = G__23288;
count__22975_23269 = G__23289;
i__22976_23270 = G__23290;
continue;
} else {
var node_23291 = cljs.core.first(seq__22971_23285__$1);
var path_match_23292 = shadow.cljs.devtools.client.browser.match_paths(node_23291.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23292)){
var new_link_23294 = (function (){var G__22981 = node_23291.cloneNode(true);
G__22981.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23292),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22981;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23292], 0));

goog.dom.insertSiblingAfter(new_link_23294,node_23291);

goog.dom.removeNode(node_23291);


var G__23296 = cljs.core.next(seq__22971_23285__$1);
var G__23297 = null;
var G__23298 = (0);
var G__23299 = (0);
seq__22971_23267 = G__23296;
chunk__22974_23268 = G__23297;
count__22975_23269 = G__23298;
i__22976_23270 = G__23299;
continue;
} else {
var G__23300 = cljs.core.next(seq__22971_23285__$1);
var G__23301 = null;
var G__23302 = (0);
var G__23303 = (0);
seq__22971_23267 = G__23300;
chunk__22974_23268 = G__23301;
count__22975_23269 = G__23302;
i__22976_23270 = G__23303;
continue;
}
}
} else {
}
}
break;
}


var G__23304 = seq__22965;
var G__23305 = chunk__22967;
var G__23306 = count__22968;
var G__23307 = (i__22969 + (1));
seq__22965 = G__23304;
chunk__22967 = G__23305;
count__22968 = G__23306;
i__22969 = G__23307;
continue;
} else {
var G__23308 = seq__22965;
var G__23309 = chunk__22967;
var G__23310 = count__22968;
var G__23311 = (i__22969 + (1));
seq__22965 = G__23308;
chunk__22967 = G__23309;
count__22968 = G__23310;
i__22969 = G__23311;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22965);
if(temp__5457__auto__){
var seq__22965__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22965__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__22965__$1);
var G__23312 = cljs.core.chunk_rest(seq__22965__$1);
var G__23313 = c__4461__auto__;
var G__23314 = cljs.core.count(c__4461__auto__);
var G__23315 = (0);
seq__22965 = G__23312;
chunk__22967 = G__23313;
count__22968 = G__23314;
i__22969 = G__23315;
continue;
} else {
var path = cljs.core.first(seq__22965__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22983_23316 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22986_23317 = null;
var count__22987_23318 = (0);
var i__22988_23319 = (0);
while(true){
if((i__22988_23319 < count__22987_23318)){
var node_23320 = chunk__22986_23317.cljs$core$IIndexed$_nth$arity$2(null,i__22988_23319);
var path_match_23321 = shadow.cljs.devtools.client.browser.match_paths(node_23320.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23321)){
var new_link_23323 = (function (){var G__22991 = node_23320.cloneNode(true);
G__22991.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23321),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22991;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23321], 0));

goog.dom.insertSiblingAfter(new_link_23323,node_23320);

goog.dom.removeNode(node_23320);


var G__23329 = seq__22983_23316;
var G__23330 = chunk__22986_23317;
var G__23331 = count__22987_23318;
var G__23332 = (i__22988_23319 + (1));
seq__22983_23316 = G__23329;
chunk__22986_23317 = G__23330;
count__22987_23318 = G__23331;
i__22988_23319 = G__23332;
continue;
} else {
var G__23333 = seq__22983_23316;
var G__23334 = chunk__22986_23317;
var G__23335 = count__22987_23318;
var G__23336 = (i__22988_23319 + (1));
seq__22983_23316 = G__23333;
chunk__22986_23317 = G__23334;
count__22987_23318 = G__23335;
i__22988_23319 = G__23336;
continue;
}
} else {
var temp__5457__auto___23337__$1 = cljs.core.seq(seq__22983_23316);
if(temp__5457__auto___23337__$1){
var seq__22983_23338__$1 = temp__5457__auto___23337__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22983_23338__$1)){
var c__4461__auto___23339 = cljs.core.chunk_first(seq__22983_23338__$1);
var G__23340 = cljs.core.chunk_rest(seq__22983_23338__$1);
var G__23341 = c__4461__auto___23339;
var G__23342 = cljs.core.count(c__4461__auto___23339);
var G__23343 = (0);
seq__22983_23316 = G__23340;
chunk__22986_23317 = G__23341;
count__22987_23318 = G__23342;
i__22988_23319 = G__23343;
continue;
} else {
var node_23344 = cljs.core.first(seq__22983_23338__$1);
var path_match_23345 = shadow.cljs.devtools.client.browser.match_paths(node_23344.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23345)){
var new_link_23346 = (function (){var G__22996 = node_23344.cloneNode(true);
G__22996.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23345),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22996;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23345], 0));

goog.dom.insertSiblingAfter(new_link_23346,node_23344);

goog.dom.removeNode(node_23344);


var G__23347 = cljs.core.next(seq__22983_23338__$1);
var G__23348 = null;
var G__23349 = (0);
var G__23350 = (0);
seq__22983_23316 = G__23347;
chunk__22986_23317 = G__23348;
count__22987_23318 = G__23349;
i__22988_23319 = G__23350;
continue;
} else {
var G__23351 = cljs.core.next(seq__22983_23338__$1);
var G__23352 = null;
var G__23353 = (0);
var G__23354 = (0);
seq__22983_23316 = G__23351;
chunk__22986_23317 = G__23352;
count__22987_23318 = G__23353;
i__22988_23319 = G__23354;
continue;
}
}
} else {
}
}
break;
}


var G__23356 = cljs.core.next(seq__22965__$1);
var G__23357 = null;
var G__23358 = (0);
var G__23359 = (0);
seq__22965 = G__23356;
chunk__22967 = G__23357;
count__22968 = G__23358;
i__22969 = G__23359;
continue;
} else {
var G__23361 = cljs.core.next(seq__22965__$1);
var G__23362 = null;
var G__23363 = (0);
var G__23364 = (0);
seq__22965 = G__23361;
chunk__22967 = G__23362;
count__22968 = G__23363;
i__22969 = G__23364;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__23004){
var map__23005 = p__23004;
var map__23005__$1 = (((((!((map__23005 == null))))?(((((map__23005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23005):map__23005);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23005__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23005__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__23005,map__23005__$1,id,js){
return (function (){
return eval(js);
});})(map__23005,map__23005__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__23012){
var map__23013 = p__23012;
var map__23013__$1 = (((((!((map__23013 == null))))?(((((map__23013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23013):map__23013);
var msg = map__23013__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__23013,map__23013__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__23019){
var map__23021 = p__23019;
var map__23021__$1 = (((((!((map__23021 == null))))?(((((map__23021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23021):map__23021);
var src = map__23021__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23021__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4036__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4036__auto__;
}
});})(map__23013,map__23013__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__23013,map__23013__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__23013,map__23013__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__23029){
var map__23030 = p__23029;
var map__23030__$1 = (((((!((map__23030 == null))))?(((((map__23030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23030):map__23030);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23030__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23030__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__23030,map__23030__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__23030,map__23030__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__23044){
var map__23045 = p__23044;
var map__23045__$1 = (((((!((map__23045 == null))))?(((((map__23045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23045):map__23045);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23045__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23045__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__23058){
var map__23060 = p__23058;
var map__23060__$1 = (((((!((map__23060 == null))))?(((((map__23060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23060):map__23060);
var msg = map__23060__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23060__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__23065 = type;
var G__23065__$1 = (((G__23065 instanceof cljs.core.Keyword))?G__23065.fqn:null);
switch (G__23065__$1) {
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
var G__23071 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__23072 = ((function (G__23071){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__23071))
;
var G__23073 = "POST";
var G__23074 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__23075 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__23071,G__23072,G__23073,G__23074,G__23075);
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
}catch (e23084){var e = e23084;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___23394 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___23394)){
var s_23397 = temp__5457__auto___23394;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_23397.onclose = ((function (s_23397,temp__5457__auto___23394){
return (function (e){
return null;
});})(s_23397,temp__5457__auto___23394))
;

s_23397.close();

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
