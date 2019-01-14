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
return cljs.core.cons((coll[idx]),(function (){var G__20466 = coll;
var G__20467 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__20466,G__20467) : shadow.dom.lazy_native_coll_seq.call(null,G__20466,G__20467));
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
var G__20487 = arguments.length;
switch (G__20487) {
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
var G__20493 = arguments.length;
switch (G__20493) {
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
var G__20499 = arguments.length;
switch (G__20499) {
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
var G__20508 = arguments.length;
switch (G__20508) {
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
var G__20514 = arguments.length;
switch (G__20514) {
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
var G__20518 = document;
var G__20519 = shadow.dom.dom_node(el);
return goog.dom.contains(G__20518,G__20519);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__20523 = shadow.dom.dom_node(parent);
var G__20524 = shadow.dom.dom_node(el);
return goog.dom.contains(G__20523,G__20524);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__20527 = shadow.dom.dom_node(el);
var G__20528 = cls;
return goog.dom.classlist.add(G__20527,G__20528);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__20533 = shadow.dom.dom_node(el);
var G__20534 = cls;
return goog.dom.classlist.remove(G__20533,G__20534);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20539 = arguments.length;
switch (G__20539) {
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
var G__20544 = shadow.dom.dom_node(el);
var G__20545 = cls;
return goog.dom.classlist.toggle(G__20544,G__20545);
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
}catch (e20558){if((e20558 instanceof Object)){
var e = e20558;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20558;

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
var seq__20575 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20576 = null;
var count__20577 = (0);
var i__20578 = (0);
while(true){
if((i__20578 < count__20577)){
var el = chunk__20576.cljs$core$IIndexed$_nth$arity$2(null,i__20578);
var handler_21196__$1 = ((function (seq__20575,chunk__20576,count__20577,i__20578,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20575,chunk__20576,count__20577,i__20578,el))
;
var G__20586_21197 = el;
var G__20587_21198 = cljs.core.name(ev);
var G__20588_21199 = handler_21196__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20586_21197,G__20587_21198,G__20588_21199) : shadow.dom.dom_listen.call(null,G__20586_21197,G__20587_21198,G__20588_21199));


var G__21202 = seq__20575;
var G__21203 = chunk__20576;
var G__21204 = count__20577;
var G__21205 = (i__20578 + (1));
seq__20575 = G__21202;
chunk__20576 = G__21203;
count__20577 = G__21204;
i__20578 = G__21205;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20575);
if(temp__5457__auto__){
var seq__20575__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20575__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20575__$1);
var G__21207 = cljs.core.chunk_rest(seq__20575__$1);
var G__21208 = c__4461__auto__;
var G__21209 = cljs.core.count(c__4461__auto__);
var G__21210 = (0);
seq__20575 = G__21207;
chunk__20576 = G__21208;
count__20577 = G__21209;
i__20578 = G__21210;
continue;
} else {
var el = cljs.core.first(seq__20575__$1);
var handler_21211__$1 = ((function (seq__20575,chunk__20576,count__20577,i__20578,el,seq__20575__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20575,chunk__20576,count__20577,i__20578,el,seq__20575__$1,temp__5457__auto__))
;
var G__20599_21213 = el;
var G__20600_21214 = cljs.core.name(ev);
var G__20601_21215 = handler_21211__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20599_21213,G__20600_21214,G__20601_21215) : shadow.dom.dom_listen.call(null,G__20599_21213,G__20600_21214,G__20601_21215));


var G__21216 = cljs.core.next(seq__20575__$1);
var G__21217 = null;
var G__21218 = (0);
var G__21219 = (0);
seq__20575 = G__21216;
chunk__20576 = G__21217;
count__20577 = G__21218;
i__20578 = G__21219;
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
var G__20611 = arguments.length;
switch (G__20611) {
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
var G__20622 = shadow.dom.dom_node(el);
var G__20623 = cljs.core.name(ev);
var G__20624 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20622,G__20623,G__20624) : shadow.dom.dom_listen.call(null,G__20622,G__20623,G__20624));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__20630 = shadow.dom.dom_node(el);
var G__20631 = cljs.core.name(ev);
var G__20632 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__20630,G__20631,G__20632) : shadow.dom.dom_listen_remove.call(null,G__20630,G__20631,G__20632));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20639 = cljs.core.seq(events);
var chunk__20640 = null;
var count__20641 = (0);
var i__20642 = (0);
while(true){
if((i__20642 < count__20641)){
var vec__20644 = chunk__20640.cljs$core$IIndexed$_nth$arity$2(null,i__20642);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20644,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21232 = seq__20639;
var G__21233 = chunk__20640;
var G__21234 = count__20641;
var G__21235 = (i__20642 + (1));
seq__20639 = G__21232;
chunk__20640 = G__21233;
count__20641 = G__21234;
i__20642 = G__21235;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20639);
if(temp__5457__auto__){
var seq__20639__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20639__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20639__$1);
var G__21238 = cljs.core.chunk_rest(seq__20639__$1);
var G__21239 = c__4461__auto__;
var G__21240 = cljs.core.count(c__4461__auto__);
var G__21241 = (0);
seq__20639 = G__21238;
chunk__20640 = G__21239;
count__20641 = G__21240;
i__20642 = G__21241;
continue;
} else {
var vec__20653 = cljs.core.first(seq__20639__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20653,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20653,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21244 = cljs.core.next(seq__20639__$1);
var G__21245 = null;
var G__21246 = (0);
var G__21247 = (0);
seq__20639 = G__21244;
chunk__20640 = G__21245;
count__20641 = G__21246;
i__20642 = G__21247;
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
var seq__20664 = cljs.core.seq(styles);
var chunk__20665 = null;
var count__20666 = (0);
var i__20667 = (0);
while(true){
if((i__20667 < count__20666)){
var vec__20669 = chunk__20665.cljs$core$IIndexed$_nth$arity$2(null,i__20667);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20669,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20669,(1),null);
var G__20672_21248 = dom;
var G__20673_21249 = cljs.core.name(k);
var G__20674_21250 = (((v == null))?"":v);
goog.style.setStyle(G__20672_21248,G__20673_21249,G__20674_21250);


var G__21251 = seq__20664;
var G__21252 = chunk__20665;
var G__21253 = count__20666;
var G__21254 = (i__20667 + (1));
seq__20664 = G__21251;
chunk__20665 = G__21252;
count__20666 = G__21253;
i__20667 = G__21254;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20664);
if(temp__5457__auto__){
var seq__20664__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20664__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20664__$1);
var G__21255 = cljs.core.chunk_rest(seq__20664__$1);
var G__21256 = c__4461__auto__;
var G__21257 = cljs.core.count(c__4461__auto__);
var G__21258 = (0);
seq__20664 = G__21255;
chunk__20665 = G__21256;
count__20666 = G__21257;
i__20667 = G__21258;
continue;
} else {
var vec__20681 = cljs.core.first(seq__20664__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20681,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20681,(1),null);
var G__20684_21259 = dom;
var G__20685_21260 = cljs.core.name(k);
var G__20686_21261 = (((v == null))?"":v);
goog.style.setStyle(G__20684_21259,G__20685_21260,G__20686_21261);


var G__21262 = cljs.core.next(seq__20664__$1);
var G__21263 = null;
var G__21264 = (0);
var G__21265 = (0);
seq__20664 = G__21262;
chunk__20665 = G__21263;
count__20666 = G__21264;
i__20667 = G__21265;
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
var G__20687_21269 = key;
var G__20687_21270__$1 = (((G__20687_21269 instanceof cljs.core.Keyword))?G__20687_21269.fqn:null);
switch (G__20687_21270__$1) {
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
var ks_21274 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(ks_21274,"data-");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.string.startsWith(ks_21274,"aria-");
}
})())){
el.setAttribute(ks_21274,value);
} else {
(el[ks_21274] = value);
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
var G__20699 = shadow.dom.dom_node(el);
var G__20700 = cls;
return goog.dom.classlist.contains(G__20699,G__20700);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20711){
var map__20713 = p__20711;
var map__20713__$1 = (((((!((map__20713 == null))))?(((((map__20713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20713):map__20713);
var props = map__20713__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20713__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20720 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20720,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20720,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20720,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20725 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20725,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20725;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20733 = arguments.length;
switch (G__20733) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20739){
var vec__20740 = p__20739;
var seq__20741 = cljs.core.seq(vec__20740);
var first__20742 = cljs.core.first(seq__20741);
var seq__20741__$1 = cljs.core.next(seq__20741);
var nn = first__20742;
var first__20742__$1 = cljs.core.first(seq__20741__$1);
var seq__20741__$2 = cljs.core.next(seq__20741__$1);
var np = first__20742__$1;
var nc = seq__20741__$2;
var node = vec__20740;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20747 = nn;
var G__20748 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20747,G__20748) : create_fn.call(null,G__20747,G__20748));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20751 = nn;
var G__20752 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20751,G__20752) : create_fn.call(null,G__20751,G__20752));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20758 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20758,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20758,(1),null);
var seq__20761_21293 = cljs.core.seq(node_children);
var chunk__20763_21294 = null;
var count__20764_21295 = (0);
var i__20765_21296 = (0);
while(true){
if((i__20765_21296 < count__20764_21295)){
var child_struct_21300 = chunk__20763_21294.cljs$core$IIndexed$_nth$arity$2(null,i__20765_21296);
var children_21301 = shadow.dom.dom_node(child_struct_21300);
if(cljs.core.seq_QMARK_(children_21301)){
var seq__20768_21302 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21301));
var chunk__20770_21303 = null;
var count__20771_21304 = (0);
var i__20772_21305 = (0);
while(true){
if((i__20772_21305 < count__20771_21304)){
var child_21308 = chunk__20770_21303.cljs$core$IIndexed$_nth$arity$2(null,i__20772_21305);
if(cljs.core.truth_(child_21308)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21308);


var G__21309 = seq__20768_21302;
var G__21310 = chunk__20770_21303;
var G__21311 = count__20771_21304;
var G__21312 = (i__20772_21305 + (1));
seq__20768_21302 = G__21309;
chunk__20770_21303 = G__21310;
count__20771_21304 = G__21311;
i__20772_21305 = G__21312;
continue;
} else {
var G__21313 = seq__20768_21302;
var G__21314 = chunk__20770_21303;
var G__21315 = count__20771_21304;
var G__21316 = (i__20772_21305 + (1));
seq__20768_21302 = G__21313;
chunk__20770_21303 = G__21314;
count__20771_21304 = G__21315;
i__20772_21305 = G__21316;
continue;
}
} else {
var temp__5457__auto___21318 = cljs.core.seq(seq__20768_21302);
if(temp__5457__auto___21318){
var seq__20768_21320__$1 = temp__5457__auto___21318;
if(cljs.core.chunked_seq_QMARK_(seq__20768_21320__$1)){
var c__4461__auto___21321 = cljs.core.chunk_first(seq__20768_21320__$1);
var G__21322 = cljs.core.chunk_rest(seq__20768_21320__$1);
var G__21323 = c__4461__auto___21321;
var G__21324 = cljs.core.count(c__4461__auto___21321);
var G__21325 = (0);
seq__20768_21302 = G__21322;
chunk__20770_21303 = G__21323;
count__20771_21304 = G__21324;
i__20772_21305 = G__21325;
continue;
} else {
var child_21327 = cljs.core.first(seq__20768_21320__$1);
if(cljs.core.truth_(child_21327)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21327);


var G__21329 = cljs.core.next(seq__20768_21320__$1);
var G__21330 = null;
var G__21331 = (0);
var G__21332 = (0);
seq__20768_21302 = G__21329;
chunk__20770_21303 = G__21330;
count__20771_21304 = G__21331;
i__20772_21305 = G__21332;
continue;
} else {
var G__21333 = cljs.core.next(seq__20768_21320__$1);
var G__21334 = null;
var G__21335 = (0);
var G__21336 = (0);
seq__20768_21302 = G__21333;
chunk__20770_21303 = G__21334;
count__20771_21304 = G__21335;
i__20772_21305 = G__21336;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21301);
}


var G__21338 = seq__20761_21293;
var G__21339 = chunk__20763_21294;
var G__21340 = count__20764_21295;
var G__21341 = (i__20765_21296 + (1));
seq__20761_21293 = G__21338;
chunk__20763_21294 = G__21339;
count__20764_21295 = G__21340;
i__20765_21296 = G__21341;
continue;
} else {
var temp__5457__auto___21344 = cljs.core.seq(seq__20761_21293);
if(temp__5457__auto___21344){
var seq__20761_21346__$1 = temp__5457__auto___21344;
if(cljs.core.chunked_seq_QMARK_(seq__20761_21346__$1)){
var c__4461__auto___21348 = cljs.core.chunk_first(seq__20761_21346__$1);
var G__21350 = cljs.core.chunk_rest(seq__20761_21346__$1);
var G__21351 = c__4461__auto___21348;
var G__21352 = cljs.core.count(c__4461__auto___21348);
var G__21353 = (0);
seq__20761_21293 = G__21350;
chunk__20763_21294 = G__21351;
count__20764_21295 = G__21352;
i__20765_21296 = G__21353;
continue;
} else {
var child_struct_21354 = cljs.core.first(seq__20761_21346__$1);
var children_21355 = shadow.dom.dom_node(child_struct_21354);
if(cljs.core.seq_QMARK_(children_21355)){
var seq__20776_21356 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21355));
var chunk__20778_21357 = null;
var count__20779_21358 = (0);
var i__20780_21359 = (0);
while(true){
if((i__20780_21359 < count__20779_21358)){
var child_21361 = chunk__20778_21357.cljs$core$IIndexed$_nth$arity$2(null,i__20780_21359);
if(cljs.core.truth_(child_21361)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21361);


var G__21363 = seq__20776_21356;
var G__21364 = chunk__20778_21357;
var G__21365 = count__20779_21358;
var G__21366 = (i__20780_21359 + (1));
seq__20776_21356 = G__21363;
chunk__20778_21357 = G__21364;
count__20779_21358 = G__21365;
i__20780_21359 = G__21366;
continue;
} else {
var G__21369 = seq__20776_21356;
var G__21370 = chunk__20778_21357;
var G__21371 = count__20779_21358;
var G__21372 = (i__20780_21359 + (1));
seq__20776_21356 = G__21369;
chunk__20778_21357 = G__21370;
count__20779_21358 = G__21371;
i__20780_21359 = G__21372;
continue;
}
} else {
var temp__5457__auto___21373__$1 = cljs.core.seq(seq__20776_21356);
if(temp__5457__auto___21373__$1){
var seq__20776_21375__$1 = temp__5457__auto___21373__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20776_21375__$1)){
var c__4461__auto___21376 = cljs.core.chunk_first(seq__20776_21375__$1);
var G__21377 = cljs.core.chunk_rest(seq__20776_21375__$1);
var G__21378 = c__4461__auto___21376;
var G__21379 = cljs.core.count(c__4461__auto___21376);
var G__21380 = (0);
seq__20776_21356 = G__21377;
chunk__20778_21357 = G__21378;
count__20779_21358 = G__21379;
i__20780_21359 = G__21380;
continue;
} else {
var child_21382 = cljs.core.first(seq__20776_21375__$1);
if(cljs.core.truth_(child_21382)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21382);


var G__21383 = cljs.core.next(seq__20776_21375__$1);
var G__21384 = null;
var G__21385 = (0);
var G__21386 = (0);
seq__20776_21356 = G__21383;
chunk__20778_21357 = G__21384;
count__20779_21358 = G__21385;
i__20780_21359 = G__21386;
continue;
} else {
var G__21387 = cljs.core.next(seq__20776_21375__$1);
var G__21388 = null;
var G__21389 = (0);
var G__21390 = (0);
seq__20776_21356 = G__21387;
chunk__20778_21357 = G__21388;
count__20779_21358 = G__21389;
i__20780_21359 = G__21390;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21355);
}


var G__21392 = cljs.core.next(seq__20761_21346__$1);
var G__21393 = null;
var G__21394 = (0);
var G__21395 = (0);
seq__20761_21293 = G__21392;
chunk__20763_21294 = G__21393;
count__20764_21295 = G__21394;
i__20765_21296 = G__21395;
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
var G__20796 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__20796);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20799 = cljs.core.seq(node);
var chunk__20800 = null;
var count__20801 = (0);
var i__20802 = (0);
while(true){
if((i__20802 < count__20801)){
var n = chunk__20800.cljs$core$IIndexed$_nth$arity$2(null,i__20802);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21408 = seq__20799;
var G__21409 = chunk__20800;
var G__21410 = count__20801;
var G__21411 = (i__20802 + (1));
seq__20799 = G__21408;
chunk__20800 = G__21409;
count__20801 = G__21410;
i__20802 = G__21411;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20799);
if(temp__5457__auto__){
var seq__20799__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20799__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20799__$1);
var G__21414 = cljs.core.chunk_rest(seq__20799__$1);
var G__21415 = c__4461__auto__;
var G__21416 = cljs.core.count(c__4461__auto__);
var G__21417 = (0);
seq__20799 = G__21414;
chunk__20800 = G__21415;
count__20801 = G__21416;
i__20802 = G__21417;
continue;
} else {
var n = cljs.core.first(seq__20799__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21419 = cljs.core.next(seq__20799__$1);
var G__21420 = null;
var G__21421 = (0);
var G__21422 = (0);
seq__20799 = G__21419;
chunk__20800 = G__21420;
count__20801 = G__21421;
i__20802 = G__21422;
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
var G__20809 = shadow.dom.dom_node(new$);
var G__20810 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__20809,G__20810);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20814 = arguments.length;
switch (G__20814) {
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
var G__20821 = arguments.length;
switch (G__20821) {
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
var G__20829 = arguments.length;
switch (G__20829) {
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
var len__4641__auto___21451 = arguments.length;
var i__4642__auto___21452 = (0);
while(true){
if((i__4642__auto___21452 < len__4641__auto___21451)){
args__4647__auto__.push((arguments[i__4642__auto___21452]));

var G__21454 = (i__4642__auto___21452 + (1));
i__4642__auto___21452 = G__21454;
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
var seq__20844_21456 = cljs.core.seq(nodes);
var chunk__20845_21457 = null;
var count__20846_21458 = (0);
var i__20847_21459 = (0);
while(true){
if((i__20847_21459 < count__20846_21458)){
var node_21462 = chunk__20845_21457.cljs$core$IIndexed$_nth$arity$2(null,i__20847_21459);
fragment.appendChild(shadow.dom._to_dom(node_21462));


var G__21466 = seq__20844_21456;
var G__21467 = chunk__20845_21457;
var G__21468 = count__20846_21458;
var G__21469 = (i__20847_21459 + (1));
seq__20844_21456 = G__21466;
chunk__20845_21457 = G__21467;
count__20846_21458 = G__21468;
i__20847_21459 = G__21469;
continue;
} else {
var temp__5457__auto___21471 = cljs.core.seq(seq__20844_21456);
if(temp__5457__auto___21471){
var seq__20844_21472__$1 = temp__5457__auto___21471;
if(cljs.core.chunked_seq_QMARK_(seq__20844_21472__$1)){
var c__4461__auto___21473 = cljs.core.chunk_first(seq__20844_21472__$1);
var G__21474 = cljs.core.chunk_rest(seq__20844_21472__$1);
var G__21475 = c__4461__auto___21473;
var G__21476 = cljs.core.count(c__4461__auto___21473);
var G__21477 = (0);
seq__20844_21456 = G__21474;
chunk__20845_21457 = G__21475;
count__20846_21458 = G__21476;
i__20847_21459 = G__21477;
continue;
} else {
var node_21478 = cljs.core.first(seq__20844_21472__$1);
fragment.appendChild(shadow.dom._to_dom(node_21478));


var G__21479 = cljs.core.next(seq__20844_21472__$1);
var G__21480 = null;
var G__21481 = (0);
var G__21482 = (0);
seq__20844_21456 = G__21479;
chunk__20845_21457 = G__21480;
count__20846_21458 = G__21481;
i__20847_21459 = G__21482;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq20840){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20840));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20855_21485 = cljs.core.seq(scripts);
var chunk__20856_21486 = null;
var count__20857_21487 = (0);
var i__20858_21488 = (0);
while(true){
if((i__20858_21488 < count__20857_21487)){
var vec__20860_21489 = chunk__20856_21486.cljs$core$IIndexed$_nth$arity$2(null,i__20858_21488);
var script_tag_21490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20860_21489,(0),null);
var script_body_21491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20860_21489,(1),null);
eval(script_body_21491);


var G__21493 = seq__20855_21485;
var G__21494 = chunk__20856_21486;
var G__21495 = count__20857_21487;
var G__21496 = (i__20858_21488 + (1));
seq__20855_21485 = G__21493;
chunk__20856_21486 = G__21494;
count__20857_21487 = G__21495;
i__20858_21488 = G__21496;
continue;
} else {
var temp__5457__auto___21500 = cljs.core.seq(seq__20855_21485);
if(temp__5457__auto___21500){
var seq__20855_21501__$1 = temp__5457__auto___21500;
if(cljs.core.chunked_seq_QMARK_(seq__20855_21501__$1)){
var c__4461__auto___21503 = cljs.core.chunk_first(seq__20855_21501__$1);
var G__21504 = cljs.core.chunk_rest(seq__20855_21501__$1);
var G__21505 = c__4461__auto___21503;
var G__21506 = cljs.core.count(c__4461__auto___21503);
var G__21507 = (0);
seq__20855_21485 = G__21504;
chunk__20856_21486 = G__21505;
count__20857_21487 = G__21506;
i__20858_21488 = G__21507;
continue;
} else {
var vec__20864_21508 = cljs.core.first(seq__20855_21501__$1);
var script_tag_21509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864_21508,(0),null);
var script_body_21510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864_21508,(1),null);
eval(script_body_21510);


var G__21511 = cljs.core.next(seq__20855_21501__$1);
var G__21512 = null;
var G__21513 = (0);
var G__21514 = (0);
seq__20855_21485 = G__21511;
chunk__20856_21486 = G__21512;
count__20857_21487 = G__21513;
i__20858_21488 = G__21514;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__20870){
var vec__20871 = p__20870;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20871,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20871,(1),null);
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
var G__20878 = shadow.dom.dom_node(el);
var G__20879 = cls;
return goog.dom.getAncestorByClass(G__20878,G__20879);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20882 = arguments.length;
switch (G__20882) {
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
var G__20884 = shadow.dom.dom_node(el);
var G__20885 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__20884,G__20885);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__20889 = shadow.dom.dom_node(el);
var G__20890 = cljs.core.name(tag);
var G__20891 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__20889,G__20890,G__20891);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__20892 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__20892);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__20893 = shadow.dom.dom_node(dom);
var G__20894 = value;
return goog.dom.forms.setValue(G__20893,G__20894);
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
var seq__20896 = cljs.core.seq(style_keys);
var chunk__20897 = null;
var count__20898 = (0);
var i__20899 = (0);
while(true){
if((i__20899 < count__20898)){
var it = chunk__20897.cljs$core$IIndexed$_nth$arity$2(null,i__20899);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21526 = seq__20896;
var G__21527 = chunk__20897;
var G__21528 = count__20898;
var G__21529 = (i__20899 + (1));
seq__20896 = G__21526;
chunk__20897 = G__21527;
count__20898 = G__21528;
i__20899 = G__21529;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20896);
if(temp__5457__auto__){
var seq__20896__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20896__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20896__$1);
var G__21534 = cljs.core.chunk_rest(seq__20896__$1);
var G__21535 = c__4461__auto__;
var G__21536 = cljs.core.count(c__4461__auto__);
var G__21537 = (0);
seq__20896 = G__21534;
chunk__20897 = G__21535;
count__20898 = G__21536;
i__20899 = G__21537;
continue;
} else {
var it = cljs.core.first(seq__20896__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21539 = cljs.core.next(seq__20896__$1);
var G__21540 = null;
var G__21541 = (0);
var G__21542 = (0);
seq__20896 = G__21539;
chunk__20897 = G__21540;
count__20898 = G__21541;
i__20899 = G__21542;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k20901,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__20910 = k20901;
var G__20910__$1 = (((G__20910 instanceof cljs.core.Keyword))?G__20910.fqn:null);
switch (G__20910__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20901,else__4304__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__20912){
var vec__20913 = p__20912;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20913,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20913,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20900){
var self__ = this;
var G__20900__$1 = this;
return (new cljs.core.RecordIter((0),G__20900__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__20916 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__20916(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20902,other20903){
var self__ = this;
var this20902__$1 = this;
return (((!((other20903 == null)))) && ((this20902__$1.constructor === other20903.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20902__$1.x,other20903.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20902__$1.y,other20903.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20902__$1.__extmap,other20903.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__20900){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__20917 = cljs.core.keyword_identical_QMARK_;
var expr__20918 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__20920 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__20921 = expr__20918;
return (pred__20917.cljs$core$IFn$_invoke$arity$2 ? pred__20917.cljs$core$IFn$_invoke$arity$2(G__20920,G__20921) : pred__20917.call(null,G__20920,G__20921));
})())){
return (new shadow.dom.Coordinate(G__20900,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20922 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__20923 = expr__20918;
return (pred__20917.cljs$core$IFn$_invoke$arity$2 ? pred__20917.cljs$core$IFn$_invoke$arity$2(G__20922,G__20923) : pred__20917.call(null,G__20922,G__20923));
})())){
return (new shadow.dom.Coordinate(self__.x,G__20900,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__20900),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__20900){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20900,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20906){
var extmap__4340__auto__ = (function (){var G__20928 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20906,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20906)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20928);
} else {
return G__20928;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20906),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20906),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__20931 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__20931);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__20937 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__20937);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__20939 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__20939);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k20942,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__20950 = k20942;
var G__20950__$1 = (((G__20950 instanceof cljs.core.Keyword))?G__20950.fqn:null);
switch (G__20950__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20942,else__4304__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__20954){
var vec__20956 = p__20954;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20956,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20956,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20941){
var self__ = this;
var G__20941__$1 = this;
return (new cljs.core.RecordIter((0),G__20941__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__20969 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__20969(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20943,other20944){
var self__ = this;
var this20943__$1 = this;
return (((!((other20944 == null)))) && ((this20943__$1.constructor === other20944.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20943__$1.w,other20944.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20943__$1.h,other20944.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20943__$1.__extmap,other20944.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__20941){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__20979 = cljs.core.keyword_identical_QMARK_;
var expr__20980 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__20982 = new cljs.core.Keyword(null,"w","w",354169001);
var G__20983 = expr__20980;
return (pred__20979.cljs$core$IFn$_invoke$arity$2 ? pred__20979.cljs$core$IFn$_invoke$arity$2(G__20982,G__20983) : pred__20979.call(null,G__20982,G__20983));
})())){
return (new shadow.dom.Size(G__20941,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20985 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__20986 = expr__20980;
return (pred__20979.cljs$core$IFn$_invoke$arity$2 ? pred__20979.cljs$core$IFn$_invoke$arity$2(G__20985,G__20986) : pred__20979.call(null,G__20985,G__20986));
})())){
return (new shadow.dom.Size(self__.w,G__20941,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__20941),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__20941){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20941,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20946){
var extmap__4340__auto__ = (function (){var G__20993 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20946,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20946)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20993);
} else {
return G__20993;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20946),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20946),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__20996 = shadow.dom.dom_node(el);
return goog.style.getSize(G__20996);
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
var G__21635 = (i + (1));
var G__21636 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21635;
ret = G__21636;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20998){
var vec__21000 = p__20998;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21000,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__21005 = arguments.length;
switch (G__21005) {
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
var G__21007_21649 = new_node;
var G__21008_21650 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__21007_21649,G__21008_21650);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__21009_21651 = new_node;
var G__21010_21652 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__21009_21651,G__21010_21652);

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
var G__21656 = ps;
var G__21657 = (i + (1));
el__$1 = G__21656;
i = G__21657;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__21013 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__21013);
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
var G__21020 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__21020);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__21023 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__21023);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__21028 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21028,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21028,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21028,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__21032_21665 = cljs.core.seq(props);
var chunk__21033_21666 = null;
var count__21034_21667 = (0);
var i__21035_21668 = (0);
while(true){
if((i__21035_21668 < count__21034_21667)){
var vec__21037_21669 = chunk__21033_21666.cljs$core$IIndexed$_nth$arity$2(null,i__21035_21668);
var k_21670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21037_21669,(0),null);
var v_21671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21037_21669,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_21670);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21670),v_21671);


var G__21672 = seq__21032_21665;
var G__21673 = chunk__21033_21666;
var G__21674 = count__21034_21667;
var G__21675 = (i__21035_21668 + (1));
seq__21032_21665 = G__21672;
chunk__21033_21666 = G__21673;
count__21034_21667 = G__21674;
i__21035_21668 = G__21675;
continue;
} else {
var temp__5457__auto___21676 = cljs.core.seq(seq__21032_21665);
if(temp__5457__auto___21676){
var seq__21032_21677__$1 = temp__5457__auto___21676;
if(cljs.core.chunked_seq_QMARK_(seq__21032_21677__$1)){
var c__4461__auto___21678 = cljs.core.chunk_first(seq__21032_21677__$1);
var G__21679 = cljs.core.chunk_rest(seq__21032_21677__$1);
var G__21680 = c__4461__auto___21678;
var G__21681 = cljs.core.count(c__4461__auto___21678);
var G__21682 = (0);
seq__21032_21665 = G__21679;
chunk__21033_21666 = G__21680;
count__21034_21667 = G__21681;
i__21035_21668 = G__21682;
continue;
} else {
var vec__21043_21683 = cljs.core.first(seq__21032_21677__$1);
var k_21684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21043_21683,(0),null);
var v_21685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21043_21683,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_21684);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21684),v_21685);


var G__21686 = cljs.core.next(seq__21032_21677__$1);
var G__21687 = null;
var G__21688 = (0);
var G__21689 = (0);
seq__21032_21665 = G__21686;
chunk__21033_21666 = G__21687;
count__21034_21667 = G__21688;
i__21035_21668 = G__21689;
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
var vec__21051 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21051,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21051,(1),null);
var seq__21055_21691 = cljs.core.seq(node_children);
var chunk__21057_21692 = null;
var count__21058_21693 = (0);
var i__21059_21694 = (0);
while(true){
if((i__21059_21694 < count__21058_21693)){
var child_struct_21696 = chunk__21057_21692.cljs$core$IIndexed$_nth$arity$2(null,i__21059_21694);
if((!((child_struct_21696 == null)))){
if(typeof child_struct_21696 === 'string'){
var text_21697 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_21696)].join(''));
} else {
var children_21698 = shadow.dom.svg_node(child_struct_21696);
if(cljs.core.seq_QMARK_(children_21698)){
var seq__21062_21699 = cljs.core.seq(children_21698);
var chunk__21064_21700 = null;
var count__21065_21701 = (0);
var i__21066_21702 = (0);
while(true){
if((i__21066_21702 < count__21065_21701)){
var child_21703 = chunk__21064_21700.cljs$core$IIndexed$_nth$arity$2(null,i__21066_21702);
if(cljs.core.truth_(child_21703)){
node.appendChild(child_21703);


var G__21704 = seq__21062_21699;
var G__21705 = chunk__21064_21700;
var G__21706 = count__21065_21701;
var G__21707 = (i__21066_21702 + (1));
seq__21062_21699 = G__21704;
chunk__21064_21700 = G__21705;
count__21065_21701 = G__21706;
i__21066_21702 = G__21707;
continue;
} else {
var G__21708 = seq__21062_21699;
var G__21709 = chunk__21064_21700;
var G__21710 = count__21065_21701;
var G__21711 = (i__21066_21702 + (1));
seq__21062_21699 = G__21708;
chunk__21064_21700 = G__21709;
count__21065_21701 = G__21710;
i__21066_21702 = G__21711;
continue;
}
} else {
var temp__5457__auto___21713 = cljs.core.seq(seq__21062_21699);
if(temp__5457__auto___21713){
var seq__21062_21714__$1 = temp__5457__auto___21713;
if(cljs.core.chunked_seq_QMARK_(seq__21062_21714__$1)){
var c__4461__auto___21715 = cljs.core.chunk_first(seq__21062_21714__$1);
var G__21716 = cljs.core.chunk_rest(seq__21062_21714__$1);
var G__21717 = c__4461__auto___21715;
var G__21718 = cljs.core.count(c__4461__auto___21715);
var G__21719 = (0);
seq__21062_21699 = G__21716;
chunk__21064_21700 = G__21717;
count__21065_21701 = G__21718;
i__21066_21702 = G__21719;
continue;
} else {
var child_21720 = cljs.core.first(seq__21062_21714__$1);
if(cljs.core.truth_(child_21720)){
node.appendChild(child_21720);


var G__21721 = cljs.core.next(seq__21062_21714__$1);
var G__21722 = null;
var G__21723 = (0);
var G__21724 = (0);
seq__21062_21699 = G__21721;
chunk__21064_21700 = G__21722;
count__21065_21701 = G__21723;
i__21066_21702 = G__21724;
continue;
} else {
var G__21725 = cljs.core.next(seq__21062_21714__$1);
var G__21726 = null;
var G__21727 = (0);
var G__21728 = (0);
seq__21062_21699 = G__21725;
chunk__21064_21700 = G__21726;
count__21065_21701 = G__21727;
i__21066_21702 = G__21728;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21698);
}
}


var G__21729 = seq__21055_21691;
var G__21730 = chunk__21057_21692;
var G__21731 = count__21058_21693;
var G__21732 = (i__21059_21694 + (1));
seq__21055_21691 = G__21729;
chunk__21057_21692 = G__21730;
count__21058_21693 = G__21731;
i__21059_21694 = G__21732;
continue;
} else {
var G__21733 = seq__21055_21691;
var G__21734 = chunk__21057_21692;
var G__21735 = count__21058_21693;
var G__21736 = (i__21059_21694 + (1));
seq__21055_21691 = G__21733;
chunk__21057_21692 = G__21734;
count__21058_21693 = G__21735;
i__21059_21694 = G__21736;
continue;
}
} else {
var temp__5457__auto___21737 = cljs.core.seq(seq__21055_21691);
if(temp__5457__auto___21737){
var seq__21055_21738__$1 = temp__5457__auto___21737;
if(cljs.core.chunked_seq_QMARK_(seq__21055_21738__$1)){
var c__4461__auto___21739 = cljs.core.chunk_first(seq__21055_21738__$1);
var G__21740 = cljs.core.chunk_rest(seq__21055_21738__$1);
var G__21741 = c__4461__auto___21739;
var G__21742 = cljs.core.count(c__4461__auto___21739);
var G__21743 = (0);
seq__21055_21691 = G__21740;
chunk__21057_21692 = G__21741;
count__21058_21693 = G__21742;
i__21059_21694 = G__21743;
continue;
} else {
var child_struct_21744 = cljs.core.first(seq__21055_21738__$1);
if((!((child_struct_21744 == null)))){
if(typeof child_struct_21744 === 'string'){
var text_21745 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21745),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_21744)].join(''));
} else {
var children_21746 = shadow.dom.svg_node(child_struct_21744);
if(cljs.core.seq_QMARK_(children_21746)){
var seq__21073_21747 = cljs.core.seq(children_21746);
var chunk__21075_21748 = null;
var count__21076_21749 = (0);
var i__21077_21750 = (0);
while(true){
if((i__21077_21750 < count__21076_21749)){
var child_21751 = chunk__21075_21748.cljs$core$IIndexed$_nth$arity$2(null,i__21077_21750);
if(cljs.core.truth_(child_21751)){
node.appendChild(child_21751);


var G__21752 = seq__21073_21747;
var G__21753 = chunk__21075_21748;
var G__21754 = count__21076_21749;
var G__21755 = (i__21077_21750 + (1));
seq__21073_21747 = G__21752;
chunk__21075_21748 = G__21753;
count__21076_21749 = G__21754;
i__21077_21750 = G__21755;
continue;
} else {
var G__21756 = seq__21073_21747;
var G__21757 = chunk__21075_21748;
var G__21758 = count__21076_21749;
var G__21759 = (i__21077_21750 + (1));
seq__21073_21747 = G__21756;
chunk__21075_21748 = G__21757;
count__21076_21749 = G__21758;
i__21077_21750 = G__21759;
continue;
}
} else {
var temp__5457__auto___21760__$1 = cljs.core.seq(seq__21073_21747);
if(temp__5457__auto___21760__$1){
var seq__21073_21761__$1 = temp__5457__auto___21760__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21073_21761__$1)){
var c__4461__auto___21762 = cljs.core.chunk_first(seq__21073_21761__$1);
var G__21765 = cljs.core.chunk_rest(seq__21073_21761__$1);
var G__21766 = c__4461__auto___21762;
var G__21767 = cljs.core.count(c__4461__auto___21762);
var G__21768 = (0);
seq__21073_21747 = G__21765;
chunk__21075_21748 = G__21766;
count__21076_21749 = G__21767;
i__21077_21750 = G__21768;
continue;
} else {
var child_21769 = cljs.core.first(seq__21073_21761__$1);
if(cljs.core.truth_(child_21769)){
node.appendChild(child_21769);


var G__21771 = cljs.core.next(seq__21073_21761__$1);
var G__21772 = null;
var G__21773 = (0);
var G__21774 = (0);
seq__21073_21747 = G__21771;
chunk__21075_21748 = G__21772;
count__21076_21749 = G__21773;
i__21077_21750 = G__21774;
continue;
} else {
var G__21775 = cljs.core.next(seq__21073_21761__$1);
var G__21776 = null;
var G__21777 = (0);
var G__21778 = (0);
seq__21073_21747 = G__21775;
chunk__21075_21748 = G__21776;
count__21076_21749 = G__21777;
i__21077_21750 = G__21778;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21746);
}
}


var G__21779 = cljs.core.next(seq__21055_21738__$1);
var G__21780 = null;
var G__21781 = (0);
var G__21782 = (0);
seq__21055_21691 = G__21779;
chunk__21057_21692 = G__21780;
count__21058_21693 = G__21781;
i__21059_21694 = G__21782;
continue;
} else {
var G__21783 = cljs.core.next(seq__21055_21738__$1);
var G__21784 = null;
var G__21785 = (0);
var G__21786 = (0);
seq__21055_21691 = G__21783;
chunk__21057_21692 = G__21784;
count__21058_21693 = G__21785;
i__21059_21694 = G__21786;
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

var G__21083_21787 = shadow.dom._to_svg;
var G__21084_21788 = "string";
var G__21085_21789 = ((function (G__21083_21787,G__21084_21788){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__21083_21787,G__21084_21788))
;
goog.object.set(G__21083_21787,G__21084_21788,G__21085_21789);

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

var G__21096_21793 = shadow.dom._to_svg;
var G__21097_21794 = "null";
var G__21098_21795 = ((function (G__21096_21793,G__21097_21794){
return (function (_){
return null;
});})(G__21096_21793,G__21097_21794))
;
goog.object.set(G__21096_21793,G__21097_21794,G__21098_21795);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___21796 = arguments.length;
var i__4642__auto___21797 = (0);
while(true){
if((i__4642__auto___21797 < len__4641__auto___21796)){
args__4647__auto__.push((arguments[i__4642__auto___21797]));

var G__21798 = (i__4642__auto___21797 + (1));
i__4642__auto___21797 = G__21798;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq21102){
var G__21103 = cljs.core.first(seq21102);
var seq21102__$1 = cljs.core.next(seq21102);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21103,seq21102__$1);
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
var G__21126 = arguments.length;
switch (G__21126) {
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
var G__21131_21808 = shadow.dom.dom_node(el);
var G__21132_21809 = cljs.core.name(event);
var G__21133_21810 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__21131_21808,G__21132_21809,G__21133_21810) : shadow.dom.dom_listen.call(null,G__21131_21808,G__21132_21809,G__21133_21810));

if(cljs.core.truth_((function (){var and__4036__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4036__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4036__auto__;
}
})())){
var c__18817__auto___21815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___21815,buf,chan,event_fn){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___21815,buf,chan,event_fn){
return (function (state_21144){
var state_val_21145 = (state_21144[(1)]);
if((state_val_21145 === (1))){
var state_21144__$1 = state_21144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21144__$1,(2),once_or_cleanup);
} else {
if((state_val_21145 === (2))){
var inst_21141 = (state_21144[(2)]);
var inst_21142 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21144__$1 = (function (){var statearr_21151 = state_21144;
(statearr_21151[(7)] = inst_21141);

return statearr_21151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21144__$1,inst_21142);
} else {
return null;
}
}
});})(c__18817__auto___21815,buf,chan,event_fn))
;
return ((function (switch__18716__auto__,c__18817__auto___21815,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__18717__auto__ = null;
var shadow$dom$state_machine__18717__auto____0 = (function (){
var statearr_21152 = [null,null,null,null,null,null,null,null];
(statearr_21152[(0)] = shadow$dom$state_machine__18717__auto__);

(statearr_21152[(1)] = (1));

return statearr_21152;
});
var shadow$dom$state_machine__18717__auto____1 = (function (state_21144){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_21144);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e21155){if((e21155 instanceof Object)){
var ex__18720__auto__ = e21155;
var statearr_21156_21820 = state_21144;
(statearr_21156_21820[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21821 = state_21144;
state_21144 = G__21821;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
shadow$dom$state_machine__18717__auto__ = function(state_21144){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__18717__auto____0.call(this);
case 1:
return shadow$dom$state_machine__18717__auto____1.call(this,state_21144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__18717__auto____0;
shadow$dom$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__18717__auto____1;
return shadow$dom$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___21815,buf,chan,event_fn))
})();
var state__18819__auto__ = (function (){var statearr_21158 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_21158[(6)] = c__18817__auto___21815);

return statearr_21158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___21815,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
