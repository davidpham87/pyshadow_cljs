goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__20481__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20484__i = 0, G__20484__a = new Array(arguments.length -  0);
while (G__20484__i < G__20484__a.length) {G__20484__a[G__20484__i] = arguments[G__20484__i + 0]; ++G__20484__i;}
  args = new cljs.core.IndexedSeq(G__20484__a,0,null);
} 
return G__20481__delegate.call(this,args);};
G__20481.cljs$lang$maxFixedArity = 0;
G__20481.cljs$lang$applyTo = (function (arglist__20485){
var args = cljs.core.seq(arglist__20485);
return G__20481__delegate(args);
});
G__20481.cljs$core$IFn$_invoke$arity$variadic = G__20481__delegate;
return G__20481;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20487__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20489__i = 0, G__20489__a = new Array(arguments.length -  0);
while (G__20489__i < G__20489__a.length) {G__20489__a[G__20489__i] = arguments[G__20489__i + 0]; ++G__20489__i;}
  args = new cljs.core.IndexedSeq(G__20489__a,0,null);
} 
return G__20487__delegate.call(this,args);};
G__20487.cljs$lang$maxFixedArity = 0;
G__20487.cljs$lang$applyTo = (function (arglist__20491){
var args = cljs.core.seq(arglist__20491);
return G__20487__delegate(args);
});
G__20487.cljs$core$IFn$_invoke$arity$variadic = G__20487__delegate;
return G__20487;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
