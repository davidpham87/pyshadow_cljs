goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17206){
var map__17207 = p__17206;
var map__17207__$1 = (((((!((map__17207 == null))))?(((((map__17207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17207):map__17207);
var m = map__17207__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17207__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17211_17244 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17212_17245 = null;
var count__17213_17246 = (0);
var i__17214_17247 = (0);
while(true){
if((i__17214_17247 < count__17213_17246)){
var f_17248 = chunk__17212_17245.cljs$core$IIndexed$_nth$arity$2(null,i__17214_17247);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17248], 0));


var G__17249 = seq__17211_17244;
var G__17250 = chunk__17212_17245;
var G__17251 = count__17213_17246;
var G__17252 = (i__17214_17247 + (1));
seq__17211_17244 = G__17249;
chunk__17212_17245 = G__17250;
count__17213_17246 = G__17251;
i__17214_17247 = G__17252;
continue;
} else {
var temp__5457__auto___17253 = cljs.core.seq(seq__17211_17244);
if(temp__5457__auto___17253){
var seq__17211_17254__$1 = temp__5457__auto___17253;
if(cljs.core.chunked_seq_QMARK_(seq__17211_17254__$1)){
var c__4461__auto___17255 = cljs.core.chunk_first(seq__17211_17254__$1);
var G__17256 = cljs.core.chunk_rest(seq__17211_17254__$1);
var G__17257 = c__4461__auto___17255;
var G__17258 = cljs.core.count(c__4461__auto___17255);
var G__17259 = (0);
seq__17211_17244 = G__17256;
chunk__17212_17245 = G__17257;
count__17213_17246 = G__17258;
i__17214_17247 = G__17259;
continue;
} else {
var f_17260 = cljs.core.first(seq__17211_17254__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17260], 0));


var G__17261 = cljs.core.next(seq__17211_17254__$1);
var G__17262 = null;
var G__17263 = (0);
var G__17264 = (0);
seq__17211_17244 = G__17261;
chunk__17212_17245 = G__17262;
count__17213_17246 = G__17263;
i__17214_17247 = G__17264;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17265 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17265], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17265)))?cljs.core.second(arglists_17265):arglists_17265)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17226_17266 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17227_17267 = null;
var count__17228_17268 = (0);
var i__17229_17269 = (0);
while(true){
if((i__17229_17269 < count__17228_17268)){
var vec__17230_17270 = chunk__17227_17267.cljs$core$IIndexed$_nth$arity$2(null,i__17229_17269);
var name_17271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17230_17270,(0),null);
var map__17233_17272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17230_17270,(1),null);
var map__17233_17273__$1 = (((((!((map__17233_17272 == null))))?(((((map__17233_17272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17233_17272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17233_17272):map__17233_17272);
var doc_17274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17233_17273__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17233_17273__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17271], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17275], 0));

if(cljs.core.truth_(doc_17274)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17274], 0));
} else {
}


var G__17276 = seq__17226_17266;
var G__17277 = chunk__17227_17267;
var G__17278 = count__17228_17268;
var G__17279 = (i__17229_17269 + (1));
seq__17226_17266 = G__17276;
chunk__17227_17267 = G__17277;
count__17228_17268 = G__17278;
i__17229_17269 = G__17279;
continue;
} else {
var temp__5457__auto___17280 = cljs.core.seq(seq__17226_17266);
if(temp__5457__auto___17280){
var seq__17226_17281__$1 = temp__5457__auto___17280;
if(cljs.core.chunked_seq_QMARK_(seq__17226_17281__$1)){
var c__4461__auto___17282 = cljs.core.chunk_first(seq__17226_17281__$1);
var G__17283 = cljs.core.chunk_rest(seq__17226_17281__$1);
var G__17284 = c__4461__auto___17282;
var G__17285 = cljs.core.count(c__4461__auto___17282);
var G__17286 = (0);
seq__17226_17266 = G__17283;
chunk__17227_17267 = G__17284;
count__17228_17268 = G__17285;
i__17229_17269 = G__17286;
continue;
} else {
var vec__17235_17287 = cljs.core.first(seq__17226_17281__$1);
var name_17288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17235_17287,(0),null);
var map__17238_17289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17235_17287,(1),null);
var map__17238_17290__$1 = (((((!((map__17238_17289 == null))))?(((((map__17238_17289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17238_17289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17238_17289):map__17238_17289);
var doc_17291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17238_17290__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17238_17290__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17288], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17292], 0));

if(cljs.core.truth_(doc_17291)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17291], 0));
} else {
}


var G__17297 = cljs.core.next(seq__17226_17281__$1);
var G__17298 = null;
var G__17299 = (0);
var G__17300 = (0);
seq__17226_17266 = G__17297;
chunk__17227_17267 = G__17298;
count__17228_17268 = G__17299;
i__17229_17269 = G__17300;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17240 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17241 = null;
var count__17242 = (0);
var i__17243 = (0);
while(true){
if((i__17243 < count__17242)){
var role = chunk__17241.cljs$core$IIndexed$_nth$arity$2(null,i__17243);
var temp__5457__auto___17302__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17302__$1)){
var spec_17303 = temp__5457__auto___17302__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_17303)], 0));
} else {
}


var G__17304 = seq__17240;
var G__17305 = chunk__17241;
var G__17306 = count__17242;
var G__17307 = (i__17243 + (1));
seq__17240 = G__17304;
chunk__17241 = G__17305;
count__17242 = G__17306;
i__17243 = G__17307;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__17240);
if(temp__5457__auto____$1){
var seq__17240__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17240__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__17240__$1);
var G__17308 = cljs.core.chunk_rest(seq__17240__$1);
var G__17309 = c__4461__auto__;
var G__17310 = cljs.core.count(c__4461__auto__);
var G__17311 = (0);
seq__17240 = G__17308;
chunk__17241 = G__17309;
count__17242 = G__17310;
i__17243 = G__17311;
continue;
} else {
var role = cljs.core.first(seq__17240__$1);
var temp__5457__auto___17312__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17312__$2)){
var spec_17313 = temp__5457__auto___17312__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_17313)], 0));
} else {
}


var G__17314 = cljs.core.next(seq__17240__$1);
var G__17315 = null;
var G__17316 = (0);
var G__17317 = (0);
seq__17240 = G__17314;
chunk__17241 = G__17315;
count__17242 = G__17316;
i__17243 = G__17317;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
