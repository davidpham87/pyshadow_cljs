goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__16431){
var vec__16432 = p__16431;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16432,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16432,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__16436 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16436,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16436,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16436,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__16450 = arguments.length;
switch (G__16450) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4135__auto__ = cljs.core.count(a);
var y__4136__auto__ = cljs.core.count(b);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4347__auto__ = (((x == null))?null:x);
var m__4348__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto__.call(null,x));
} else {
var m__4348__auto____$1 = (clojure.data.equality_partition["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4347__auto__ = (((a == null))?null:a);
var m__4348__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto__.call(null,a,b));
} else {
var m__4348__auto____$1 = (clojure.data.diff_similar["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__16494_16618 = clojure.data.equality_partition;
var G__16495_16619 = "null";
var G__16496_16620 = ((function (G__16494_16618,G__16495_16619){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16494_16618,G__16495_16619))
;
goog.object.set(G__16494_16618,G__16495_16619,G__16496_16620);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__16499_16622 = clojure.data.equality_partition;
var G__16500_16623 = "string";
var G__16501_16624 = ((function (G__16499_16622,G__16500_16623){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16499_16622,G__16500_16623))
;
goog.object.set(G__16499_16622,G__16500_16623,G__16501_16624);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__16503_16625 = clojure.data.equality_partition;
var G__16504_16626 = "number";
var G__16505_16627 = ((function (G__16503_16625,G__16504_16626){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16503_16625,G__16504_16626))
;
goog.object.set(G__16503_16625,G__16504_16626,G__16505_16627);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__16506_16628 = clojure.data.equality_partition;
var G__16507_16629 = "array";
var G__16508_16630 = ((function (G__16506_16628,G__16507_16629){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__16506_16628,G__16507_16629))
;
goog.object.set(G__16506_16628,G__16507_16629,G__16508_16630);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__16511_16631 = clojure.data.equality_partition;
var G__16512_16632 = "function";
var G__16513_16633 = ((function (G__16511_16631,G__16512_16632){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16511_16631,G__16512_16632))
;
goog.object.set(G__16511_16631,G__16512_16632,G__16513_16633);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__16516_16636 = clojure.data.equality_partition;
var G__16517_16637 = "boolean";
var G__16518_16638 = ((function (G__16516_16636,G__16517_16637){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16516_16636,G__16517_16637))
;
goog.object.set(G__16516_16636,G__16517_16637,G__16518_16638);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__16520_16641 = clojure.data.equality_partition;
var G__16521_16642 = "_";
var G__16522_16643 = ((function (G__16520_16641,G__16521_16642){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__16520_16641,G__16521_16642))
;
goog.object.set(G__16520_16641,G__16521_16642,G__16522_16643);
goog.object.set(clojure.data.Diff,"null",true);

var G__16542_16649 = clojure.data.diff_similar;
var G__16543_16650 = "null";
var G__16544_16651 = ((function (G__16542_16649,G__16543_16650){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16542_16649,G__16543_16650))
;
goog.object.set(G__16542_16649,G__16543_16650,G__16544_16651);

goog.object.set(clojure.data.Diff,"string",true);

var G__16547_16653 = clojure.data.diff_similar;
var G__16548_16654 = "string";
var G__16549_16655 = ((function (G__16547_16653,G__16548_16654){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16547_16653,G__16548_16654))
;
goog.object.set(G__16547_16653,G__16548_16654,G__16549_16655);

goog.object.set(clojure.data.Diff,"number",true);

var G__16551_16659 = clojure.data.diff_similar;
var G__16552_16660 = "number";
var G__16553_16661 = ((function (G__16551_16659,G__16552_16660){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16551_16659,G__16552_16660))
;
goog.object.set(G__16551_16659,G__16552_16660,G__16553_16661);

goog.object.set(clojure.data.Diff,"array",true);

var G__16554_16664 = clojure.data.diff_similar;
var G__16555_16665 = "array";
var G__16556_16666 = ((function (G__16554_16664,G__16555_16665){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__16554_16664,G__16555_16665))
;
goog.object.set(G__16554_16664,G__16555_16665,G__16556_16666);

goog.object.set(clojure.data.Diff,"function",true);

var G__16560_16668 = clojure.data.diff_similar;
var G__16561_16669 = "function";
var G__16562_16670 = ((function (G__16560_16668,G__16561_16669){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16560_16668,G__16561_16669))
;
goog.object.set(G__16560_16668,G__16561_16669,G__16562_16670);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__16565_16675 = clojure.data.diff_similar;
var G__16566_16676 = "boolean";
var G__16567_16677 = ((function (G__16565_16675,G__16566_16676){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16565_16675,G__16566_16676))
;
goog.object.set(G__16565_16675,G__16566_16676,G__16567_16677);

goog.object.set(clojure.data.Diff,"_",true);

var G__16570_16678 = clojure.data.diff_similar;
var G__16571_16679 = "_";
var G__16572_16680 = ((function (G__16570_16678,G__16571_16679){
return (function (a,b){
var fexpr__16577 = (function (){var G__16578 = clojure.data.equality_partition(a);
var G__16578__$1 = (((G__16578 instanceof cljs.core.Keyword))?G__16578.fqn:null);
switch (G__16578__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16578__$1)].join('')));

}
})();
return (fexpr__16577.cljs$core$IFn$_invoke$arity$2 ? fexpr__16577.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__16577.call(null,a,b));
});})(G__16570_16678,G__16571_16679))
;
goog.object.set(G__16570_16678,G__16571_16679,G__16572_16680);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
