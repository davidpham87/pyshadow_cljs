goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_dom["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_svg["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18557 = coll;
var G__18558 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18557,G__18558) : shadow.dom.lazy_native_coll_seq.call(null,G__18557,G__18558));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4047__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18605 = arguments.length;
switch (G__18605) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18637 = arguments.length;
switch (G__18637) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18650 = arguments.length;
switch (G__18650) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18655 = arguments.length;
switch (G__18655) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18657 = arguments.length;
switch (G__18657) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__18658 = document;
var G__18659 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18658,G__18659);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__18660 = shadow.dom.dom_node(parent);
var G__18661 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18660,G__18661);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__18662 = shadow.dom.dom_node(el);
var G__18663 = cls;
return goog.dom.classlist.add(G__18662,G__18663);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__18666 = shadow.dom.dom_node(el);
var G__18667 = cls;
return goog.dom.classlist.remove(G__18666,G__18667);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18670 = arguments.length;
switch (G__18670) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__18676 = shadow.dom.dom_node(el);
var G__18677 = cls;
return goog.dom.classlist.toggle(G__18676,G__18677);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18682){if((e18682 instanceof Object)){
var e = e18682;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18682;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18698 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18699 = null;
var count__18700 = (0);
var i__18701 = (0);
while(true){
if((i__18701 < count__18700)){
var el = chunk__18699.cljs$core$IIndexed$_nth$arity$2(null,i__18701);
var handler_19255__$1 = ((function (seq__18698,chunk__18699,count__18700,i__18701,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18698,chunk__18699,count__18700,i__18701,el))
;
var G__18706_19256 = el;
var G__18707_19257 = cljs.core.name(ev);
var G__18708_19258 = handler_19255__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18706_19256,G__18707_19257,G__18708_19258) : shadow.dom.dom_listen.call(null,G__18706_19256,G__18707_19257,G__18708_19258));


var G__19259 = seq__18698;
var G__19260 = chunk__18699;
var G__19261 = count__18700;
var G__19262 = (i__18701 + (1));
seq__18698 = G__19259;
chunk__18699 = G__19260;
count__18700 = G__19261;
i__18701 = G__19262;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18698);
if(temp__5457__auto__){
var seq__18698__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18698__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18698__$1);
var G__19263 = cljs.core.chunk_rest(seq__18698__$1);
var G__19264 = c__4461__auto__;
var G__19265 = cljs.core.count(c__4461__auto__);
var G__19266 = (0);
seq__18698 = G__19263;
chunk__18699 = G__19264;
count__18700 = G__19265;
i__18701 = G__19266;
continue;
} else {
var el = cljs.core.first(seq__18698__$1);
var handler_19267__$1 = ((function (seq__18698,chunk__18699,count__18700,i__18701,el,seq__18698__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18698,chunk__18699,count__18700,i__18701,el,seq__18698__$1,temp__5457__auto__))
;
var G__18719_19268 = el;
var G__18720_19269 = cljs.core.name(ev);
var G__18721_19270 = handler_19267__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18719_19268,G__18720_19269,G__18721_19270) : shadow.dom.dom_listen.call(null,G__18719_19268,G__18720_19269,G__18721_19270));


var G__19283 = cljs.core.next(seq__18698__$1);
var G__19284 = null;
var G__19285 = (0);
var G__19286 = (0);
seq__18698 = G__19283;
chunk__18699 = G__19284;
count__18700 = G__19285;
i__18701 = G__19286;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18725 = arguments.length;
switch (G__18725) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__18729 = shadow.dom.dom_node(el);
var G__18730 = cljs.core.name(ev);
var G__18731 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18729,G__18730,G__18731) : shadow.dom.dom_listen.call(null,G__18729,G__18730,G__18731));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__18736 = shadow.dom.dom_node(el);
var G__18737 = cljs.core.name(ev);
var G__18738 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__18736,G__18737,G__18738) : shadow.dom.dom_listen_remove.call(null,G__18736,G__18737,G__18738));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18742 = cljs.core.seq(events);
var chunk__18743 = null;
var count__18744 = (0);
var i__18745 = (0);
while(true){
if((i__18745 < count__18744)){
var vec__18746 = chunk__18743.cljs$core$IIndexed$_nth$arity$2(null,i__18745);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18746,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18746,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19290 = seq__18742;
var G__19291 = chunk__18743;
var G__19292 = count__18744;
var G__19293 = (i__18745 + (1));
seq__18742 = G__19290;
chunk__18743 = G__19291;
count__18744 = G__19292;
i__18745 = G__19293;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18742);
if(temp__5457__auto__){
var seq__18742__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18742__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18742__$1);
var G__19294 = cljs.core.chunk_rest(seq__18742__$1);
var G__19295 = c__4461__auto__;
var G__19296 = cljs.core.count(c__4461__auto__);
var G__19297 = (0);
seq__18742 = G__19294;
chunk__18743 = G__19295;
count__18744 = G__19296;
i__18745 = G__19297;
continue;
} else {
var vec__18750 = cljs.core.first(seq__18742__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18750,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19301 = cljs.core.next(seq__18742__$1);
var G__19302 = null;
var G__19303 = (0);
var G__19304 = (0);
seq__18742 = G__19301;
chunk__18743 = G__19302;
count__18744 = G__19303;
i__18745 = G__19304;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18757 = cljs.core.seq(styles);
var chunk__18758 = null;
var count__18759 = (0);
var i__18760 = (0);
while(true){
if((i__18760 < count__18759)){
var vec__18761 = chunk__18758.cljs$core$IIndexed$_nth$arity$2(null,i__18760);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18761,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18761,(1),null);
var G__18766_19308 = dom;
var G__18767_19309 = cljs.core.name(k);
var G__18768_19310 = (((v == null))?"":v);
goog.style.setStyle(G__18766_19308,G__18767_19309,G__18768_19310);


var G__19312 = seq__18757;
var G__19313 = chunk__18758;
var G__19314 = count__18759;
var G__19315 = (i__18760 + (1));
seq__18757 = G__19312;
chunk__18758 = G__19313;
count__18759 = G__19314;
i__18760 = G__19315;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18757);
if(temp__5457__auto__){
var seq__18757__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18757__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18757__$1);
var G__19316 = cljs.core.chunk_rest(seq__18757__$1);
var G__19317 = c__4461__auto__;
var G__19318 = cljs.core.count(c__4461__auto__);
var G__19319 = (0);
seq__18757 = G__19316;
chunk__18758 = G__19317;
count__18759 = G__19318;
i__18760 = G__19319;
continue;
} else {
var vec__18772 = cljs.core.first(seq__18757__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18772,(1),null);
var G__18776_19326 = dom;
var G__18777_19327 = cljs.core.name(k);
var G__18778_19328 = (((v == null))?"":v);
goog.style.setStyle(G__18776_19326,G__18777_19327,G__18778_19328);


var G__19330 = cljs.core.next(seq__18757__$1);
var G__19331 = null;
var G__19332 = (0);
var G__19333 = (0);
seq__18757 = G__19330;
chunk__18758 = G__19331;
count__18759 = G__19332;
i__18760 = G__19333;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18785_19334 = key;
var G__18785_19335__$1 = (((G__18785_19334 instanceof cljs.core.Keyword))?G__18785_19334.fqn:null);
switch (G__18785_19335__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19344 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(ks_19344,"data-");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.string.startsWith(ks_19344,"aria-");
}
})())){
el.setAttribute(ks_19344,value);
} else {
(el[ks_19344] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__18789 = shadow.dom.dom_node(el);
var G__18790 = cls;
return goog.dom.classlist.contains(G__18789,G__18790);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18801){
var map__18803 = p__18801;
var map__18803__$1 = (((((!((map__18803 == null))))?(((((map__18803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18803):map__18803);
var props = map__18803__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18803__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18807 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18807,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18807,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18807,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18811 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18811,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18811;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18819 = arguments.length;
switch (G__18819) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18825){
var vec__18826 = p__18825;
var seq__18827 = cljs.core.seq(vec__18826);
var first__18828 = cljs.core.first(seq__18827);
var seq__18827__$1 = cljs.core.next(seq__18827);
var nn = first__18828;
var first__18828__$1 = cljs.core.first(seq__18827__$1);
var seq__18827__$2 = cljs.core.next(seq__18827__$1);
var np = first__18828__$1;
var nc = seq__18827__$2;
var node = vec__18826;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18829 = nn;
var G__18830 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18829,G__18830) : create_fn.call(null,G__18829,G__18830));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18831 = nn;
var G__18832 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18831,G__18832) : create_fn.call(null,G__18831,G__18832));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18833 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(1),null);
var seq__18836_19359 = cljs.core.seq(node_children);
var chunk__18837_19360 = null;
var count__18838_19361 = (0);
var i__18839_19362 = (0);
while(true){
if((i__18839_19362 < count__18838_19361)){
var child_struct_19364 = chunk__18837_19360.cljs$core$IIndexed$_nth$arity$2(null,i__18839_19362);
var children_19365 = shadow.dom.dom_node(child_struct_19364);
if(cljs.core.seq_QMARK_(children_19365)){
var seq__18840_19367 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19365));
var chunk__18842_19368 = null;
var count__18843_19369 = (0);
var i__18844_19370 = (0);
while(true){
if((i__18844_19370 < count__18843_19369)){
var child_19371 = chunk__18842_19368.cljs$core$IIndexed$_nth$arity$2(null,i__18844_19370);
if(cljs.core.truth_(child_19371)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19371);


var G__19372 = seq__18840_19367;
var G__19373 = chunk__18842_19368;
var G__19374 = count__18843_19369;
var G__19375 = (i__18844_19370 + (1));
seq__18840_19367 = G__19372;
chunk__18842_19368 = G__19373;
count__18843_19369 = G__19374;
i__18844_19370 = G__19375;
continue;
} else {
var G__19378 = seq__18840_19367;
var G__19379 = chunk__18842_19368;
var G__19380 = count__18843_19369;
var G__19381 = (i__18844_19370 + (1));
seq__18840_19367 = G__19378;
chunk__18842_19368 = G__19379;
count__18843_19369 = G__19380;
i__18844_19370 = G__19381;
continue;
}
} else {
var temp__5457__auto___19385 = cljs.core.seq(seq__18840_19367);
if(temp__5457__auto___19385){
var seq__18840_19386__$1 = temp__5457__auto___19385;
if(cljs.core.chunked_seq_QMARK_(seq__18840_19386__$1)){
var c__4461__auto___19387 = cljs.core.chunk_first(seq__18840_19386__$1);
var G__19388 = cljs.core.chunk_rest(seq__18840_19386__$1);
var G__19389 = c__4461__auto___19387;
var G__19390 = cljs.core.count(c__4461__auto___19387);
var G__19391 = (0);
seq__18840_19367 = G__19388;
chunk__18842_19368 = G__19389;
count__18843_19369 = G__19390;
i__18844_19370 = G__19391;
continue;
} else {
var child_19394 = cljs.core.first(seq__18840_19386__$1);
if(cljs.core.truth_(child_19394)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19394);


var G__19395 = cljs.core.next(seq__18840_19386__$1);
var G__19396 = null;
var G__19397 = (0);
var G__19398 = (0);
seq__18840_19367 = G__19395;
chunk__18842_19368 = G__19396;
count__18843_19369 = G__19397;
i__18844_19370 = G__19398;
continue;
} else {
var G__19400 = cljs.core.next(seq__18840_19386__$1);
var G__19401 = null;
var G__19402 = (0);
var G__19403 = (0);
seq__18840_19367 = G__19400;
chunk__18842_19368 = G__19401;
count__18843_19369 = G__19402;
i__18844_19370 = G__19403;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19365);
}


var G__19404 = seq__18836_19359;
var G__19405 = chunk__18837_19360;
var G__19406 = count__18838_19361;
var G__19407 = (i__18839_19362 + (1));
seq__18836_19359 = G__19404;
chunk__18837_19360 = G__19405;
count__18838_19361 = G__19406;
i__18839_19362 = G__19407;
continue;
} else {
var temp__5457__auto___19410 = cljs.core.seq(seq__18836_19359);
if(temp__5457__auto___19410){
var seq__18836_19411__$1 = temp__5457__auto___19410;
if(cljs.core.chunked_seq_QMARK_(seq__18836_19411__$1)){
var c__4461__auto___19412 = cljs.core.chunk_first(seq__18836_19411__$1);
var G__19414 = cljs.core.chunk_rest(seq__18836_19411__$1);
var G__19415 = c__4461__auto___19412;
var G__19416 = cljs.core.count(c__4461__auto___19412);
var G__19417 = (0);
seq__18836_19359 = G__19414;
chunk__18837_19360 = G__19415;
count__18838_19361 = G__19416;
i__18839_19362 = G__19417;
continue;
} else {
var child_struct_19418 = cljs.core.first(seq__18836_19411__$1);
var children_19419 = shadow.dom.dom_node(child_struct_19418);
if(cljs.core.seq_QMARK_(children_19419)){
var seq__18846_19420 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19419));
var chunk__18848_19421 = null;
var count__18849_19422 = (0);
var i__18850_19423 = (0);
while(true){
if((i__18850_19423 < count__18849_19422)){
var child_19424 = chunk__18848_19421.cljs$core$IIndexed$_nth$arity$2(null,i__18850_19423);
if(cljs.core.truth_(child_19424)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19424);


var G__19425 = seq__18846_19420;
var G__19426 = chunk__18848_19421;
var G__19427 = count__18849_19422;
var G__19428 = (i__18850_19423 + (1));
seq__18846_19420 = G__19425;
chunk__18848_19421 = G__19426;
count__18849_19422 = G__19427;
i__18850_19423 = G__19428;
continue;
} else {
var G__19429 = seq__18846_19420;
var G__19430 = chunk__18848_19421;
var G__19431 = count__18849_19422;
var G__19432 = (i__18850_19423 + (1));
seq__18846_19420 = G__19429;
chunk__18848_19421 = G__19430;
count__18849_19422 = G__19431;
i__18850_19423 = G__19432;
continue;
}
} else {
var temp__5457__auto___19434__$1 = cljs.core.seq(seq__18846_19420);
if(temp__5457__auto___19434__$1){
var seq__18846_19437__$1 = temp__5457__auto___19434__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18846_19437__$1)){
var c__4461__auto___19440 = cljs.core.chunk_first(seq__18846_19437__$1);
var G__19441 = cljs.core.chunk_rest(seq__18846_19437__$1);
var G__19442 = c__4461__auto___19440;
var G__19443 = cljs.core.count(c__4461__auto___19440);
var G__19444 = (0);
seq__18846_19420 = G__19441;
chunk__18848_19421 = G__19442;
count__18849_19422 = G__19443;
i__18850_19423 = G__19444;
continue;
} else {
var child_19445 = cljs.core.first(seq__18846_19437__$1);
if(cljs.core.truth_(child_19445)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19445);


var G__19446 = cljs.core.next(seq__18846_19437__$1);
var G__19447 = null;
var G__19448 = (0);
var G__19449 = (0);
seq__18846_19420 = G__19446;
chunk__18848_19421 = G__19447;
count__18849_19422 = G__19448;
i__18850_19423 = G__19449;
continue;
} else {
var G__19450 = cljs.core.next(seq__18846_19437__$1);
var G__19451 = null;
var G__19452 = (0);
var G__19453 = (0);
seq__18846_19420 = G__19450;
chunk__18848_19421 = G__19451;
count__18849_19422 = G__19452;
i__18850_19423 = G__19453;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19419);
}


var G__19455 = cljs.core.next(seq__18836_19411__$1);
var G__19456 = null;
var G__19457 = (0);
var G__19458 = (0);
seq__18836_19359 = G__19455;
chunk__18837_19360 = G__19456;
count__18838_19361 = G__19457;
i__18839_19362 = G__19458;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__18855 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__18855);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18857 = cljs.core.seq(node);
var chunk__18858 = null;
var count__18859 = (0);
var i__18860 = (0);
while(true){
if((i__18860 < count__18859)){
var n = chunk__18858.cljs$core$IIndexed$_nth$arity$2(null,i__18860);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19464 = seq__18857;
var G__19465 = chunk__18858;
var G__19466 = count__18859;
var G__19467 = (i__18860 + (1));
seq__18857 = G__19464;
chunk__18858 = G__19465;
count__18859 = G__19466;
i__18860 = G__19467;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18857);
if(temp__5457__auto__){
var seq__18857__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18857__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18857__$1);
var G__19469 = cljs.core.chunk_rest(seq__18857__$1);
var G__19470 = c__4461__auto__;
var G__19471 = cljs.core.count(c__4461__auto__);
var G__19472 = (0);
seq__18857 = G__19469;
chunk__18858 = G__19470;
count__18859 = G__19471;
i__18860 = G__19472;
continue;
} else {
var n = cljs.core.first(seq__18857__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19473 = cljs.core.next(seq__18857__$1);
var G__19474 = null;
var G__19475 = (0);
var G__19476 = (0);
seq__18857 = G__19473;
chunk__18858 = G__19474;
count__18859 = G__19475;
i__18860 = G__19476;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__18866 = shadow.dom.dom_node(new$);
var G__18867 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__18866,G__18867);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18871 = arguments.length;
switch (G__18871) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18877 = arguments.length;
switch (G__18877) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18882 = arguments.length;
switch (G__18882) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4047__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19495 = arguments.length;
var i__4642__auto___19496 = (0);
while(true){
if((i__4642__auto___19496 < len__4641__auto___19495)){
args__4647__auto__.push((arguments[i__4642__auto___19496]));

var G__19498 = (i__4642__auto___19496 + (1));
i__4642__auto___19496 = G__19498;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18900_19499 = cljs.core.seq(nodes);
var chunk__18901_19500 = null;
var count__18902_19501 = (0);
var i__18903_19502 = (0);
while(true){
if((i__18903_19502 < count__18902_19501)){
var node_19503 = chunk__18901_19500.cljs$core$IIndexed$_nth$arity$2(null,i__18903_19502);
fragment.appendChild(shadow.dom._to_dom(node_19503));


var G__19505 = seq__18900_19499;
var G__19506 = chunk__18901_19500;
var G__19507 = count__18902_19501;
var G__19508 = (i__18903_19502 + (1));
seq__18900_19499 = G__19505;
chunk__18901_19500 = G__19506;
count__18902_19501 = G__19507;
i__18903_19502 = G__19508;
continue;
} else {
var temp__5457__auto___19509 = cljs.core.seq(seq__18900_19499);
if(temp__5457__auto___19509){
var seq__18900_19510__$1 = temp__5457__auto___19509;
if(cljs.core.chunked_seq_QMARK_(seq__18900_19510__$1)){
var c__4461__auto___19512 = cljs.core.chunk_first(seq__18900_19510__$1);
var G__19513 = cljs.core.chunk_rest(seq__18900_19510__$1);
var G__19514 = c__4461__auto___19512;
var G__19515 = cljs.core.count(c__4461__auto___19512);
var G__19516 = (0);
seq__18900_19499 = G__19513;
chunk__18901_19500 = G__19514;
count__18902_19501 = G__19515;
i__18903_19502 = G__19516;
continue;
} else {
var node_19517 = cljs.core.first(seq__18900_19510__$1);
fragment.appendChild(shadow.dom._to_dom(node_19517));


var G__19518 = cljs.core.next(seq__18900_19510__$1);
var G__19519 = null;
var G__19520 = (0);
var G__19521 = (0);
seq__18900_19499 = G__19518;
chunk__18901_19500 = G__19519;
count__18902_19501 = G__19520;
i__18903_19502 = G__19521;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq18899){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18899));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18904_19530 = cljs.core.seq(scripts);
var chunk__18905_19531 = null;
var count__18906_19532 = (0);
var i__18907_19533 = (0);
while(true){
if((i__18907_19533 < count__18906_19532)){
var vec__18908_19534 = chunk__18905_19531.cljs$core$IIndexed$_nth$arity$2(null,i__18907_19533);
var script_tag_19535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908_19534,(0),null);
var script_body_19536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908_19534,(1),null);
eval(script_body_19536);


var G__19538 = seq__18904_19530;
var G__19539 = chunk__18905_19531;
var G__19540 = count__18906_19532;
var G__19541 = (i__18907_19533 + (1));
seq__18904_19530 = G__19538;
chunk__18905_19531 = G__19539;
count__18906_19532 = G__19540;
i__18907_19533 = G__19541;
continue;
} else {
var temp__5457__auto___19542 = cljs.core.seq(seq__18904_19530);
if(temp__5457__auto___19542){
var seq__18904_19543__$1 = temp__5457__auto___19542;
if(cljs.core.chunked_seq_QMARK_(seq__18904_19543__$1)){
var c__4461__auto___19545 = cljs.core.chunk_first(seq__18904_19543__$1);
var G__19546 = cljs.core.chunk_rest(seq__18904_19543__$1);
var G__19547 = c__4461__auto___19545;
var G__19548 = cljs.core.count(c__4461__auto___19545);
var G__19549 = (0);
seq__18904_19530 = G__19546;
chunk__18905_19531 = G__19547;
count__18906_19532 = G__19548;
i__18907_19533 = G__19549;
continue;
} else {
var vec__18911_19550 = cljs.core.first(seq__18904_19543__$1);
var script_tag_19551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18911_19550,(0),null);
var script_body_19552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18911_19550,(1),null);
eval(script_body_19552);


var G__19554 = cljs.core.next(seq__18904_19543__$1);
var G__19555 = null;
var G__19556 = (0);
var G__19557 = (0);
seq__18904_19530 = G__19554;
chunk__18905_19531 = G__19555;
count__18906_19532 = G__19556;
i__18907_19533 = G__19557;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__18915){
var vec__18916 = p__18915;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18916,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18916,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__18925 = shadow.dom.dom_node(el);
var G__18926 = cls;
return goog.dom.getAncestorByClass(G__18925,G__18926);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18931 = arguments.length;
switch (G__18931) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__18933 = shadow.dom.dom_node(el);
var G__18934 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__18933,G__18934);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__18937 = shadow.dom.dom_node(el);
var G__18938 = cljs.core.name(tag);
var G__18939 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__18937,G__18938,G__18939);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__18941 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__18941);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__18943 = shadow.dom.dom_node(dom);
var G__18944 = value;
return goog.dom.forms.setValue(G__18943,G__18944);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18952 = cljs.core.seq(style_keys);
var chunk__18953 = null;
var count__18954 = (0);
var i__18955 = (0);
while(true){
if((i__18955 < count__18954)){
var it = chunk__18953.cljs$core$IIndexed$_nth$arity$2(null,i__18955);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19576 = seq__18952;
var G__19577 = chunk__18953;
var G__19578 = count__18954;
var G__19579 = (i__18955 + (1));
seq__18952 = G__19576;
chunk__18953 = G__19577;
count__18954 = G__19578;
i__18955 = G__19579;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18952);
if(temp__5457__auto__){
var seq__18952__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18952__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18952__$1);
var G__19581 = cljs.core.chunk_rest(seq__18952__$1);
var G__19582 = c__4461__auto__;
var G__19583 = cljs.core.count(c__4461__auto__);
var G__19584 = (0);
seq__18952 = G__19581;
chunk__18953 = G__19582;
count__18954 = G__19583;
i__18955 = G__19584;
continue;
} else {
var it = cljs.core.first(seq__18952__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19586 = cljs.core.next(seq__18952__$1);
var G__19587 = null;
var G__19588 = (0);
var G__19589 = (0);
seq__18952 = G__19586;
chunk__18953 = G__19587;
count__18954 = G__19588;
i__18955 = G__19589;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k18960,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__18971 = k18960;
var G__18971__$1 = (((G__18971 instanceof cljs.core.Keyword))?G__18971.fqn:null);
switch (G__18971__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18960,else__4304__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__18975){
var vec__18976 = p__18975;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18959){
var self__ = this;
var G__18959__$1 = this;
return (new cljs.core.RecordIter((0),G__18959__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__18990 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__18990(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18961,other18962){
var self__ = this;
var this18961__$1 = this;
return (((!((other18962 == null)))) && ((this18961__$1.constructor === other18962.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18961__$1.x,other18962.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18961__$1.y,other18962.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18961__$1.__extmap,other18962.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__18959){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__18996 = cljs.core.keyword_identical_QMARK_;
var expr__18997 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__18999 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__19000 = expr__18997;
return (pred__18996.cljs$core$IFn$_invoke$arity$2 ? pred__18996.cljs$core$IFn$_invoke$arity$2(G__18999,G__19000) : pred__18996.call(null,G__18999,G__19000));
})())){
return (new shadow.dom.Coordinate(G__18959,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19001 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__19002 = expr__18997;
return (pred__18996.cljs$core$IFn$_invoke$arity$2 ? pred__18996.cljs$core$IFn$_invoke$arity$2(G__19001,G__19002) : pred__18996.call(null,G__19001,G__19002));
})())){
return (new shadow.dom.Coordinate(self__.x,G__18959,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__18959),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__18959){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18959,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18964){
var extmap__4340__auto__ = (function (){var G__19005 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18964,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18964)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19005);
} else {
return G__19005;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18964),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18964),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__19008 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__19008);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__19011 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__19011);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__19013 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__19013);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k19015,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__19019 = k19015;
var G__19019__$1 = (((G__19019 instanceof cljs.core.Keyword))?G__19019.fqn:null);
switch (G__19019__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19015,else__4304__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__19020){
var vec__19021 = p__19020;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19021,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19021,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Size{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19014){
var self__ = this;
var G__19014__$1 = this;
return (new cljs.core.RecordIter((0),G__19014__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__19030 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__19030(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19016,other19017){
var self__ = this;
var this19016__$1 = this;
return (((!((other19017 == null)))) && ((this19016__$1.constructor === other19017.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19016__$1.w,other19017.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19016__$1.h,other19017.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19016__$1.__extmap,other19017.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__19014){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__19031 = cljs.core.keyword_identical_QMARK_;
var expr__19032 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__19034 = new cljs.core.Keyword(null,"w","w",354169001);
var G__19035 = expr__19032;
return (pred__19031.cljs$core$IFn$_invoke$arity$2 ? pred__19031.cljs$core$IFn$_invoke$arity$2(G__19034,G__19035) : pred__19031.call(null,G__19034,G__19035));
})())){
return (new shadow.dom.Size(G__19014,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19036 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__19037 = expr__19032;
return (pred__19031.cljs$core$IFn$_invoke$arity$2 ? pred__19031.cljs$core$IFn$_invoke$arity$2(G__19036,G__19037) : pred__19031.call(null,G__19036,G__19037));
})())){
return (new shadow.dom.Size(self__.w,G__19014,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__19014),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__19014){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19014,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19018){
var extmap__4340__auto__ = (function (){var G__19038 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19018,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19018)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19038);
} else {
return G__19038;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19018),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19018),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__19039 = shadow.dom.dom_node(el);
return goog.style.getSize(G__19039);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4515__auto__ = opts;
var l__4516__auto__ = a__4515__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4516__auto__)){
var G__19617 = (i + (1));
var G__19618 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19617;
ret = G__19618;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19052){
var vec__19053 = p__19052;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19053,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19065 = arguments.length;
switch (G__19065) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19075_19620 = new_node;
var G__19076_19621 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__19075_19620,G__19076_19621);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19082_19622 = new_node;
var G__19083_19623 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__19082_19622,G__19083_19623);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19624 = ps;
var G__19625 = (i + (1));
el__$1 = G__19624;
i = G__19625;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__19092 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__19092);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__19098 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__19098);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__19099 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__19099);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19101 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19101,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19101,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19101,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19104_19627 = cljs.core.seq(props);
var chunk__19105_19628 = null;
var count__19106_19629 = (0);
var i__19107_19630 = (0);
while(true){
if((i__19107_19630 < count__19106_19629)){
var vec__19109_19631 = chunk__19105_19628.cljs$core$IIndexed$_nth$arity$2(null,i__19107_19630);
var k_19632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19109_19631,(0),null);
var v_19633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19109_19631,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_19632);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19632),v_19633);


var G__19639 = seq__19104_19627;
var G__19640 = chunk__19105_19628;
var G__19641 = count__19106_19629;
var G__19642 = (i__19107_19630 + (1));
seq__19104_19627 = G__19639;
chunk__19105_19628 = G__19640;
count__19106_19629 = G__19641;
i__19107_19630 = G__19642;
continue;
} else {
var temp__5457__auto___19643 = cljs.core.seq(seq__19104_19627);
if(temp__5457__auto___19643){
var seq__19104_19644__$1 = temp__5457__auto___19643;
if(cljs.core.chunked_seq_QMARK_(seq__19104_19644__$1)){
var c__4461__auto___19645 = cljs.core.chunk_first(seq__19104_19644__$1);
var G__19646 = cljs.core.chunk_rest(seq__19104_19644__$1);
var G__19647 = c__4461__auto___19645;
var G__19648 = cljs.core.count(c__4461__auto___19645);
var G__19649 = (0);
seq__19104_19627 = G__19646;
chunk__19105_19628 = G__19647;
count__19106_19629 = G__19648;
i__19107_19630 = G__19649;
continue;
} else {
var vec__19112_19650 = cljs.core.first(seq__19104_19644__$1);
var k_19651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19112_19650,(0),null);
var v_19652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19112_19650,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_19651);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19651),v_19652);


var G__19654 = cljs.core.next(seq__19104_19644__$1);
var G__19655 = null;
var G__19656 = (0);
var G__19657 = (0);
seq__19104_19627 = G__19654;
chunk__19105_19628 = G__19655;
count__19106_19629 = G__19656;
i__19107_19630 = G__19657;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19116 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19116,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19116,(1),null);
var seq__19119_19662 = cljs.core.seq(node_children);
var chunk__19121_19663 = null;
var count__19122_19664 = (0);
var i__19123_19665 = (0);
while(true){
if((i__19123_19665 < count__19122_19664)){
var child_struct_19666 = chunk__19121_19663.cljs$core$IIndexed$_nth$arity$2(null,i__19123_19665);
if((!((child_struct_19666 == null)))){
if(typeof child_struct_19666 === 'string'){
var text_19667 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19667),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19666)].join(''));
} else {
var children_19668 = shadow.dom.svg_node(child_struct_19666);
if(cljs.core.seq_QMARK_(children_19668)){
var seq__19125_19669 = cljs.core.seq(children_19668);
var chunk__19127_19670 = null;
var count__19128_19671 = (0);
var i__19129_19672 = (0);
while(true){
if((i__19129_19672 < count__19128_19671)){
var child_19673 = chunk__19127_19670.cljs$core$IIndexed$_nth$arity$2(null,i__19129_19672);
if(cljs.core.truth_(child_19673)){
node.appendChild(child_19673);


var G__19674 = seq__19125_19669;
var G__19675 = chunk__19127_19670;
var G__19676 = count__19128_19671;
var G__19677 = (i__19129_19672 + (1));
seq__19125_19669 = G__19674;
chunk__19127_19670 = G__19675;
count__19128_19671 = G__19676;
i__19129_19672 = G__19677;
continue;
} else {
var G__19678 = seq__19125_19669;
var G__19679 = chunk__19127_19670;
var G__19680 = count__19128_19671;
var G__19681 = (i__19129_19672 + (1));
seq__19125_19669 = G__19678;
chunk__19127_19670 = G__19679;
count__19128_19671 = G__19680;
i__19129_19672 = G__19681;
continue;
}
} else {
var temp__5457__auto___19682 = cljs.core.seq(seq__19125_19669);
if(temp__5457__auto___19682){
var seq__19125_19683__$1 = temp__5457__auto___19682;
if(cljs.core.chunked_seq_QMARK_(seq__19125_19683__$1)){
var c__4461__auto___19684 = cljs.core.chunk_first(seq__19125_19683__$1);
var G__19685 = cljs.core.chunk_rest(seq__19125_19683__$1);
var G__19686 = c__4461__auto___19684;
var G__19687 = cljs.core.count(c__4461__auto___19684);
var G__19688 = (0);
seq__19125_19669 = G__19685;
chunk__19127_19670 = G__19686;
count__19128_19671 = G__19687;
i__19129_19672 = G__19688;
continue;
} else {
var child_19689 = cljs.core.first(seq__19125_19683__$1);
if(cljs.core.truth_(child_19689)){
node.appendChild(child_19689);


var G__19690 = cljs.core.next(seq__19125_19683__$1);
var G__19691 = null;
var G__19692 = (0);
var G__19693 = (0);
seq__19125_19669 = G__19690;
chunk__19127_19670 = G__19691;
count__19128_19671 = G__19692;
i__19129_19672 = G__19693;
continue;
} else {
var G__19694 = cljs.core.next(seq__19125_19683__$1);
var G__19695 = null;
var G__19696 = (0);
var G__19697 = (0);
seq__19125_19669 = G__19694;
chunk__19127_19670 = G__19695;
count__19128_19671 = G__19696;
i__19129_19672 = G__19697;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19668);
}
}


var G__19698 = seq__19119_19662;
var G__19699 = chunk__19121_19663;
var G__19700 = count__19122_19664;
var G__19701 = (i__19123_19665 + (1));
seq__19119_19662 = G__19698;
chunk__19121_19663 = G__19699;
count__19122_19664 = G__19700;
i__19123_19665 = G__19701;
continue;
} else {
var G__19702 = seq__19119_19662;
var G__19703 = chunk__19121_19663;
var G__19704 = count__19122_19664;
var G__19705 = (i__19123_19665 + (1));
seq__19119_19662 = G__19702;
chunk__19121_19663 = G__19703;
count__19122_19664 = G__19704;
i__19123_19665 = G__19705;
continue;
}
} else {
var temp__5457__auto___19706 = cljs.core.seq(seq__19119_19662);
if(temp__5457__auto___19706){
var seq__19119_19707__$1 = temp__5457__auto___19706;
if(cljs.core.chunked_seq_QMARK_(seq__19119_19707__$1)){
var c__4461__auto___19708 = cljs.core.chunk_first(seq__19119_19707__$1);
var G__19709 = cljs.core.chunk_rest(seq__19119_19707__$1);
var G__19710 = c__4461__auto___19708;
var G__19711 = cljs.core.count(c__4461__auto___19708);
var G__19712 = (0);
seq__19119_19662 = G__19709;
chunk__19121_19663 = G__19710;
count__19122_19664 = G__19711;
i__19123_19665 = G__19712;
continue;
} else {
var child_struct_19714 = cljs.core.first(seq__19119_19707__$1);
if((!((child_struct_19714 == null)))){
if(typeof child_struct_19714 === 'string'){
var text_19715 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19715),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19714)].join(''));
} else {
var children_19716 = shadow.dom.svg_node(child_struct_19714);
if(cljs.core.seq_QMARK_(children_19716)){
var seq__19131_19717 = cljs.core.seq(children_19716);
var chunk__19133_19718 = null;
var count__19134_19719 = (0);
var i__19135_19720 = (0);
while(true){
if((i__19135_19720 < count__19134_19719)){
var child_19721 = chunk__19133_19718.cljs$core$IIndexed$_nth$arity$2(null,i__19135_19720);
if(cljs.core.truth_(child_19721)){
node.appendChild(child_19721);


var G__19722 = seq__19131_19717;
var G__19723 = chunk__19133_19718;
var G__19724 = count__19134_19719;
var G__19725 = (i__19135_19720 + (1));
seq__19131_19717 = G__19722;
chunk__19133_19718 = G__19723;
count__19134_19719 = G__19724;
i__19135_19720 = G__19725;
continue;
} else {
var G__19726 = seq__19131_19717;
var G__19727 = chunk__19133_19718;
var G__19728 = count__19134_19719;
var G__19729 = (i__19135_19720 + (1));
seq__19131_19717 = G__19726;
chunk__19133_19718 = G__19727;
count__19134_19719 = G__19728;
i__19135_19720 = G__19729;
continue;
}
} else {
var temp__5457__auto___19730__$1 = cljs.core.seq(seq__19131_19717);
if(temp__5457__auto___19730__$1){
var seq__19131_19731__$1 = temp__5457__auto___19730__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19131_19731__$1)){
var c__4461__auto___19732 = cljs.core.chunk_first(seq__19131_19731__$1);
var G__19733 = cljs.core.chunk_rest(seq__19131_19731__$1);
var G__19734 = c__4461__auto___19732;
var G__19735 = cljs.core.count(c__4461__auto___19732);
var G__19736 = (0);
seq__19131_19717 = G__19733;
chunk__19133_19718 = G__19734;
count__19134_19719 = G__19735;
i__19135_19720 = G__19736;
continue;
} else {
var child_19737 = cljs.core.first(seq__19131_19731__$1);
if(cljs.core.truth_(child_19737)){
node.appendChild(child_19737);


var G__19738 = cljs.core.next(seq__19131_19731__$1);
var G__19739 = null;
var G__19740 = (0);
var G__19741 = (0);
seq__19131_19717 = G__19738;
chunk__19133_19718 = G__19739;
count__19134_19719 = G__19740;
i__19135_19720 = G__19741;
continue;
} else {
var G__19742 = cljs.core.next(seq__19131_19731__$1);
var G__19743 = null;
var G__19744 = (0);
var G__19745 = (0);
seq__19131_19717 = G__19742;
chunk__19133_19718 = G__19743;
count__19134_19719 = G__19744;
i__19135_19720 = G__19745;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19716);
}
}


var G__19746 = cljs.core.next(seq__19119_19707__$1);
var G__19747 = null;
var G__19748 = (0);
var G__19749 = (0);
seq__19119_19662 = G__19746;
chunk__19121_19663 = G__19747;
count__19122_19664 = G__19748;
i__19123_19665 = G__19749;
continue;
} else {
var G__19750 = cljs.core.next(seq__19119_19707__$1);
var G__19751 = null;
var G__19752 = (0);
var G__19753 = (0);
seq__19119_19662 = G__19750;
chunk__19121_19663 = G__19751;
count__19122_19664 = G__19752;
i__19123_19665 = G__19753;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__19139_19754 = shadow.dom._to_svg;
var G__19140_19755 = "string";
var G__19141_19756 = ((function (G__19139_19754,G__19140_19755){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__19139_19754,G__19140_19755))
;
goog.object.set(G__19139_19754,G__19140_19755,G__19141_19756);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__19142_19757 = shadow.dom._to_svg;
var G__19143_19758 = "null";
var G__19144_19759 = ((function (G__19142_19757,G__19143_19758){
return (function (_){
return null;
});})(G__19142_19757,G__19143_19758))
;
goog.object.set(G__19142_19757,G__19143_19758,G__19144_19759);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19760 = arguments.length;
var i__4642__auto___19761 = (0);
while(true){
if((i__4642__auto___19761 < len__4641__auto___19760)){
args__4647__auto__.push((arguments[i__4642__auto___19761]));

var G__19762 = (i__4642__auto___19761 + (1));
i__4642__auto___19761 = G__19762;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq19145){
var G__19146 = cljs.core.first(seq19145);
var seq19145__$1 = cljs.core.next(seq19145);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19146,seq19145__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19152 = arguments.length;
switch (G__19152) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__19159_19771 = shadow.dom.dom_node(el);
var G__19160_19772 = cljs.core.name(event);
var G__19161_19773 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__19159_19771,G__19160_19772,G__19161_19773) : shadow.dom.dom_listen.call(null,G__19159_19771,G__19160_19772,G__19161_19773));

if(cljs.core.truth_((function (){var and__4036__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4036__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4036__auto__;
}
})())){
var c__15982__auto___19774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19774,buf,chan,event_fn){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19774,buf,chan,event_fn){
return (function (state_19169){
var state_val_19170 = (state_19169[(1)]);
if((state_val_19170 === (1))){
var state_19169__$1 = state_19169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19169__$1,(2),once_or_cleanup);
} else {
if((state_val_19170 === (2))){
var inst_19166 = (state_19169[(2)]);
var inst_19167 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19169__$1 = (function (){var statearr_19174 = state_19169;
(statearr_19174[(7)] = inst_19166);

return statearr_19174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19169__$1,inst_19167);
} else {
return null;
}
}
});})(c__15982__auto___19774,buf,chan,event_fn))
;
return ((function (switch__15760__auto__,c__15982__auto___19774,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__15761__auto__ = null;
var shadow$dom$state_machine__15761__auto____0 = (function (){
var statearr_19185 = [null,null,null,null,null,null,null,null];
(statearr_19185[(0)] = shadow$dom$state_machine__15761__auto__);

(statearr_19185[(1)] = (1));

return statearr_19185;
});
var shadow$dom$state_machine__15761__auto____1 = (function (state_19169){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_19169);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e19187){if((e19187 instanceof Object)){
var ex__15764__auto__ = e19187;
var statearr_19188_19775 = state_19169;
(statearr_19188_19775[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19776 = state_19169;
state_19169 = G__19776;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
shadow$dom$state_machine__15761__auto__ = function(state_19169){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15761__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15761__auto____1.call(this,state_19169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15761__auto____0;
shadow$dom$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15761__auto____1;
return shadow$dom$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19774,buf,chan,event_fn))
})();
var state__15984__auto__ = (function (){var statearr_19191 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_19191[(6)] = c__15982__auto___19774);

return statearr_19191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19774,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
