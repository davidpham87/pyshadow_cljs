goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12816){
var map__12817 = p__12816;
var map__12817__$1 = (((((!((map__12817 == null))))?(((((map__12817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12817):map__12817);
var m = map__12817__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12817__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12823_12880 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12824_12881 = null;
var count__12825_12882 = (0);
var i__12826_12883 = (0);
while(true){
if((i__12826_12883 < count__12825_12882)){
var f_12885 = chunk__12824_12881.cljs$core$IIndexed$_nth$arity$2(null,i__12826_12883);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12885], 0));


var G__12887 = seq__12823_12880;
var G__12888 = chunk__12824_12881;
var G__12889 = count__12825_12882;
var G__12890 = (i__12826_12883 + (1));
seq__12823_12880 = G__12887;
chunk__12824_12881 = G__12888;
count__12825_12882 = G__12889;
i__12826_12883 = G__12890;
continue;
} else {
var temp__5457__auto___12891 = cljs.core.seq(seq__12823_12880);
if(temp__5457__auto___12891){
var seq__12823_12892__$1 = temp__5457__auto___12891;
if(cljs.core.chunked_seq_QMARK_(seq__12823_12892__$1)){
var c__4461__auto___12895 = cljs.core.chunk_first(seq__12823_12892__$1);
var G__12896 = cljs.core.chunk_rest(seq__12823_12892__$1);
var G__12897 = c__4461__auto___12895;
var G__12898 = cljs.core.count(c__4461__auto___12895);
var G__12899 = (0);
seq__12823_12880 = G__12896;
chunk__12824_12881 = G__12897;
count__12825_12882 = G__12898;
i__12826_12883 = G__12899;
continue;
} else {
var f_12901 = cljs.core.first(seq__12823_12892__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12901], 0));


var G__12902 = cljs.core.next(seq__12823_12892__$1);
var G__12903 = null;
var G__12904 = (0);
var G__12905 = (0);
seq__12823_12880 = G__12902;
chunk__12824_12881 = G__12903;
count__12825_12882 = G__12904;
i__12826_12883 = G__12905;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12906 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_12906], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_12906)))?cljs.core.second(arglists_12906):arglists_12906)], 0));
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
var seq__12835_12913 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12836_12914 = null;
var count__12837_12915 = (0);
var i__12838_12916 = (0);
while(true){
if((i__12838_12916 < count__12837_12915)){
var vec__12840_12917 = chunk__12836_12914.cljs$core$IIndexed$_nth$arity$2(null,i__12838_12916);
var name_12918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840_12917,(0),null);
var map__12843_12919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840_12917,(1),null);
var map__12843_12920__$1 = (((((!((map__12843_12919 == null))))?(((((map__12843_12919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12843_12919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12843_12919):map__12843_12919);
var doc_12921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12843_12920__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12843_12920__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12918], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12922], 0));

if(cljs.core.truth_(doc_12921)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12921], 0));
} else {
}


var G__12929 = seq__12835_12913;
var G__12930 = chunk__12836_12914;
var G__12931 = count__12837_12915;
var G__12932 = (i__12838_12916 + (1));
seq__12835_12913 = G__12929;
chunk__12836_12914 = G__12930;
count__12837_12915 = G__12931;
i__12838_12916 = G__12932;
continue;
} else {
var temp__5457__auto___12935 = cljs.core.seq(seq__12835_12913);
if(temp__5457__auto___12935){
var seq__12835_12936__$1 = temp__5457__auto___12935;
if(cljs.core.chunked_seq_QMARK_(seq__12835_12936__$1)){
var c__4461__auto___12937 = cljs.core.chunk_first(seq__12835_12936__$1);
var G__12939 = cljs.core.chunk_rest(seq__12835_12936__$1);
var G__12940 = c__4461__auto___12937;
var G__12941 = cljs.core.count(c__4461__auto___12937);
var G__12942 = (0);
seq__12835_12913 = G__12939;
chunk__12836_12914 = G__12940;
count__12837_12915 = G__12941;
i__12838_12916 = G__12942;
continue;
} else {
var vec__12851_12943 = cljs.core.first(seq__12835_12936__$1);
var name_12944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12851_12943,(0),null);
var map__12854_12945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12851_12943,(1),null);
var map__12854_12946__$1 = (((((!((map__12854_12945 == null))))?(((((map__12854_12945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12854_12945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12854_12945):map__12854_12945);
var doc_12947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12854_12946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12854_12946__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12944], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12948], 0));

if(cljs.core.truth_(doc_12947)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12947], 0));
} else {
}


var G__12950 = cljs.core.next(seq__12835_12936__$1);
var G__12951 = null;
var G__12952 = (0);
var G__12953 = (0);
seq__12835_12913 = G__12950;
chunk__12836_12914 = G__12951;
count__12837_12915 = G__12952;
i__12838_12916 = G__12953;
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

var seq__12865 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12866 = null;
var count__12867 = (0);
var i__12868 = (0);
while(true){
if((i__12868 < count__12867)){
var role = chunk__12866.cljs$core$IIndexed$_nth$arity$2(null,i__12868);
var temp__5457__auto___12954__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12954__$1)){
var spec_12957 = temp__5457__auto___12954__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_12957)], 0));
} else {
}


var G__12958 = seq__12865;
var G__12959 = chunk__12866;
var G__12960 = count__12867;
var G__12961 = (i__12868 + (1));
seq__12865 = G__12958;
chunk__12866 = G__12959;
count__12867 = G__12960;
i__12868 = G__12961;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__12865);
if(temp__5457__auto____$1){
var seq__12865__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__12865__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__12865__$1);
var G__12963 = cljs.core.chunk_rest(seq__12865__$1);
var G__12964 = c__4461__auto__;
var G__12965 = cljs.core.count(c__4461__auto__);
var G__12966 = (0);
seq__12865 = G__12963;
chunk__12866 = G__12964;
count__12867 = G__12965;
i__12868 = G__12966;
continue;
} else {
var role = cljs.core.first(seq__12865__$1);
var temp__5457__auto___12967__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12967__$2)){
var spec_12968 = temp__5457__auto___12967__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_12968)], 0));
} else {
}


var G__12969 = cljs.core.next(seq__12865__$1);
var G__12970 = null;
var G__12971 = (0);
var G__12972 = (0);
seq__12865 = G__12969;
chunk__12866 = G__12970;
count__12867 = G__12971;
i__12868 = G__12972;
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
