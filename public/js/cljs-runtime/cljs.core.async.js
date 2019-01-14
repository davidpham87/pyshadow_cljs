goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18875 = arguments.length;
switch (G__18875) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18878 = (function (f,blockable,meta18879){
this.f = f;
this.blockable = blockable;
this.meta18879 = meta18879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18880,meta18879__$1){
var self__ = this;
var _18880__$1 = this;
return (new cljs.core.async.t_cljs$core$async18878(self__.f,self__.blockable,meta18879__$1));
});

cljs.core.async.t_cljs$core$async18878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18880){
var self__ = this;
var _18880__$1 = this;
return self__.meta18879;
});

cljs.core.async.t_cljs$core$async18878.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18878.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18878.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18878.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18879","meta18879",1117428310,null)], null);
});

cljs.core.async.t_cljs$core$async18878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18878";

cljs.core.async.t_cljs$core$async18878.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18878");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18878.
 */
cljs.core.async.__GT_t_cljs$core$async18878 = (function cljs$core$async$__GT_t_cljs$core$async18878(f__$1,blockable__$1,meta18879){
return (new cljs.core.async.t_cljs$core$async18878(f__$1,blockable__$1,meta18879));
});

}

return (new cljs.core.async.t_cljs$core$async18878(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18883 = arguments.length;
switch (G__18883) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18885 = arguments.length;
switch (G__18885) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18887 = arguments.length;
switch (G__18887) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20317 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20317) : fn1.call(null,val_20317));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20317,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20317) : fn1.call(null,val_20317));
});})(val_20317,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18889 = arguments.length;
switch (G__18889) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___20325 = n;
var x_20326 = (0);
while(true){
if((x_20326 < n__4518__auto___20325)){
(a[x_20326] = (0));

var G__20327 = (x_20326 + (1));
x_20326 = G__20327;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__20328 = (i + (1));
i = G__20328;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18890 = (function (flag,meta18891){
this.flag = flag;
this.meta18891 = meta18891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18892,meta18891__$1){
var self__ = this;
var _18892__$1 = this;
return (new cljs.core.async.t_cljs$core$async18890(self__.flag,meta18891__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18892){
var self__ = this;
var _18892__$1 = this;
return self__.meta18891;
});})(flag))
;

cljs.core.async.t_cljs$core$async18890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18890.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18891","meta18891",-188729150,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18890";

cljs.core.async.t_cljs$core$async18890.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18890");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18890.
 */
cljs.core.async.__GT_t_cljs$core$async18890 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18890(flag__$1,meta18891){
return (new cljs.core.async.t_cljs$core$async18890(flag__$1,meta18891));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18890(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18893 = (function (flag,cb,meta18894){
this.flag = flag;
this.cb = cb;
this.meta18894 = meta18894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18895,meta18894__$1){
var self__ = this;
var _18895__$1 = this;
return (new cljs.core.async.t_cljs$core$async18893(self__.flag,self__.cb,meta18894__$1));
});

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18895){
var self__ = this;
var _18895__$1 = this;
return self__.meta18894;
});

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18894","meta18894",-1389627341,null)], null);
});

cljs.core.async.t_cljs$core$async18893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18893";

cljs.core.async.t_cljs$core$async18893.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18893");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18893.
 */
cljs.core.async.__GT_t_cljs$core$async18893 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18893(flag__$1,cb__$1,meta18894){
return (new cljs.core.async.t_cljs$core$async18893(flag__$1,cb__$1,meta18894));
});

}

return (new cljs.core.async.t_cljs$core$async18893(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18896_SHARP_){
var G__18898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18896_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18898) : fret.call(null,G__18898));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18897_SHARP_){
var G__18899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18897_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18899) : fret.call(null,G__18899));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20351 = (i + (1));
i = G__20351;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20356 = arguments.length;
var i__4642__auto___20357 = (0);
while(true){
if((i__4642__auto___20357 < len__4641__auto___20356)){
args__4647__auto__.push((arguments[i__4642__auto___20357]));

var G__20358 = (i__4642__auto___20357 + (1));
i__4642__auto___20357 = G__20358;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18902){
var map__18903 = p__18902;
var map__18903__$1 = (((((!((map__18903 == null))))?(((((map__18903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18903):map__18903);
var opts = map__18903__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18900){
var G__18901 = cljs.core.first(seq18900);
var seq18900__$1 = cljs.core.next(seq18900);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18901,seq18900__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18906 = arguments.length;
switch (G__18906) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18817__auto___20366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___20366){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___20366){
return (function (state_18930){
var state_val_18931 = (state_18930[(1)]);
if((state_val_18931 === (7))){
var inst_18926 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18932_20371 = state_18930__$1;
(statearr_18932_20371[(2)] = inst_18926);

(statearr_18932_20371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (1))){
var state_18930__$1 = state_18930;
var statearr_18933_20372 = state_18930__$1;
(statearr_18933_20372[(2)] = null);

(statearr_18933_20372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (4))){
var inst_18909 = (state_18930[(7)]);
var inst_18909__$1 = (state_18930[(2)]);
var inst_18910 = (inst_18909__$1 == null);
var state_18930__$1 = (function (){var statearr_18934 = state_18930;
(statearr_18934[(7)] = inst_18909__$1);

return statearr_18934;
})();
if(cljs.core.truth_(inst_18910)){
var statearr_18935_20374 = state_18930__$1;
(statearr_18935_20374[(1)] = (5));

} else {
var statearr_18936_20375 = state_18930__$1;
(statearr_18936_20375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (13))){
var state_18930__$1 = state_18930;
var statearr_18937_20376 = state_18930__$1;
(statearr_18937_20376[(2)] = null);

(statearr_18937_20376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (6))){
var inst_18909 = (state_18930[(7)]);
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18930__$1,(11),to,inst_18909);
} else {
if((state_val_18931 === (3))){
var inst_18928 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18930__$1,inst_18928);
} else {
if((state_val_18931 === (12))){
var state_18930__$1 = state_18930;
var statearr_18938_20379 = state_18930__$1;
(statearr_18938_20379[(2)] = null);

(statearr_18938_20379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (2))){
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18930__$1,(4),from);
} else {
if((state_val_18931 === (11))){
var inst_18919 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18919)){
var statearr_18939_20380 = state_18930__$1;
(statearr_18939_20380[(1)] = (12));

} else {
var statearr_18940_20381 = state_18930__$1;
(statearr_18940_20381[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (9))){
var state_18930__$1 = state_18930;
var statearr_18941_20384 = state_18930__$1;
(statearr_18941_20384[(2)] = null);

(statearr_18941_20384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (5))){
var state_18930__$1 = state_18930;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18942_20385 = state_18930__$1;
(statearr_18942_20385[(1)] = (8));

} else {
var statearr_18943_20386 = state_18930__$1;
(statearr_18943_20386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (14))){
var inst_18924 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18944_20390 = state_18930__$1;
(statearr_18944_20390[(2)] = inst_18924);

(statearr_18944_20390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (10))){
var inst_18916 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18945_20391 = state_18930__$1;
(statearr_18945_20391[(2)] = inst_18916);

(statearr_18945_20391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (8))){
var inst_18913 = cljs.core.async.close_BANG_(to);
var state_18930__$1 = state_18930;
var statearr_18946_20392 = state_18930__$1;
(statearr_18946_20392[(2)] = inst_18913);

(statearr_18946_20392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___20366))
;
return ((function (switch__18716__auto__,c__18817__auto___20366){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_18947 = [null,null,null,null,null,null,null,null];
(statearr_18947[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_18947[(1)] = (1));

return statearr_18947;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_18930){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_18930);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e18948){if((e18948 instanceof Object)){
var ex__18720__auto__ = e18948;
var statearr_18949_20394 = state_18930;
(statearr_18949_20394[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20395 = state_18930;
state_18930 = G__20395;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_18930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_18930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___20366))
})();
var state__18819__auto__ = (function (){var statearr_18950 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_18950[(6)] = c__18817__auto___20366);

return statearr_18950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___20366))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__18951){
var vec__18952 = p__18951;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18952,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18952,(1),null);
var job = vec__18952;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18817__auto___20400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___20400,res,vec__18952,v,p,job,jobs,results){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___20400,res,vec__18952,v,p,job,jobs,results){
return (function (state_18959){
var state_val_18960 = (state_18959[(1)]);
if((state_val_18960 === (1))){
var state_18959__$1 = state_18959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18959__$1,(2),res,v);
} else {
if((state_val_18960 === (2))){
var inst_18956 = (state_18959[(2)]);
var inst_18957 = cljs.core.async.close_BANG_(res);
var state_18959__$1 = (function (){var statearr_18961 = state_18959;
(statearr_18961[(7)] = inst_18956);

return statearr_18961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18959__$1,inst_18957);
} else {
return null;
}
}
});})(c__18817__auto___20400,res,vec__18952,v,p,job,jobs,results))
;
return ((function (switch__18716__auto__,c__18817__auto___20400,res,vec__18952,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0 = (function (){
var statearr_18962 = [null,null,null,null,null,null,null,null];
(statearr_18962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__);

(statearr_18962[(1)] = (1));

return statearr_18962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1 = (function (state_18959){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_18959);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e18963){if((e18963 instanceof Object)){
var ex__18720__auto__ = e18963;
var statearr_18964_20407 = state_18959;
(statearr_18964_20407[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18963;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20409 = state_18959;
state_18959 = G__20409;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = function(state_18959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1.call(this,state_18959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___20400,res,vec__18952,v,p,job,jobs,results))
})();
var state__18819__auto__ = (function (){var statearr_18965 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_18965[(6)] = c__18817__auto___20400);

return statearr_18965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___20400,res,vec__18952,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18966){
var vec__18967 = p__18966;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18967,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18967,(1),null);
var job = vec__18967;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___20412 = n;
var __20414 = (0);
while(true){
if((__20414 < n__4518__auto___20412)){
var G__18970_20416 = type;
var G__18970_20417__$1 = (((G__18970_20416 instanceof cljs.core.Keyword))?G__18970_20416.fqn:null);
switch (G__18970_20417__$1) {
case "compute":
var c__18817__auto___20420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20414,c__18817__auto___20420,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (__20414,c__18817__auto___20420,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async){
return (function (state_18983){
var state_val_18984 = (state_18983[(1)]);
if((state_val_18984 === (1))){
var state_18983__$1 = state_18983;
var statearr_18985_20421 = state_18983__$1;
(statearr_18985_20421[(2)] = null);

(statearr_18985_20421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (2))){
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18983__$1,(4),jobs);
} else {
if((state_val_18984 === (3))){
var inst_18981 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18983__$1,inst_18981);
} else {
if((state_val_18984 === (4))){
var inst_18973 = (state_18983[(2)]);
var inst_18974 = process(inst_18973);
var state_18983__$1 = state_18983;
if(cljs.core.truth_(inst_18974)){
var statearr_18986_20424 = state_18983__$1;
(statearr_18986_20424[(1)] = (5));

} else {
var statearr_18987_20433 = state_18983__$1;
(statearr_18987_20433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (5))){
var state_18983__$1 = state_18983;
var statearr_18988_20435 = state_18983__$1;
(statearr_18988_20435[(2)] = null);

(statearr_18988_20435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (6))){
var state_18983__$1 = state_18983;
var statearr_18989_20437 = state_18983__$1;
(statearr_18989_20437[(2)] = null);

(statearr_18989_20437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (7))){
var inst_18979 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_18990_20439 = state_18983__$1;
(statearr_18990_20439[(2)] = inst_18979);

(statearr_18990_20439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20414,c__18817__auto___20420,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async))
;
return ((function (__20414,switch__18716__auto__,c__18817__auto___20420,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0 = (function (){
var statearr_18991 = [null,null,null,null,null,null,null];
(statearr_18991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__);

(statearr_18991[(1)] = (1));

return statearr_18991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1 = (function (state_18983){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_18983);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e18992){if((e18992 instanceof Object)){
var ex__18720__auto__ = e18992;
var statearr_18993_20445 = state_18983;
(statearr_18993_20445[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20446 = state_18983;
state_18983 = G__20446;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = function(state_18983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1.call(this,state_18983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__;
})()
;})(__20414,switch__18716__auto__,c__18817__auto___20420,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async))
})();
var state__18819__auto__ = (function (){var statearr_18994 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_18994[(6)] = c__18817__auto___20420);

return statearr_18994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(__20414,c__18817__auto___20420,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async))
);


break;
case "async":
var c__18817__auto___20447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20414,c__18817__auto___20447,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (__20414,c__18817__auto___20447,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async){
return (function (state_19007){
var state_val_19008 = (state_19007[(1)]);
if((state_val_19008 === (1))){
var state_19007__$1 = state_19007;
var statearr_19009_20448 = state_19007__$1;
(statearr_19009_20448[(2)] = null);

(statearr_19009_20448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (2))){
var state_19007__$1 = state_19007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19007__$1,(4),jobs);
} else {
if((state_val_19008 === (3))){
var inst_19005 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19007__$1,inst_19005);
} else {
if((state_val_19008 === (4))){
var inst_18997 = (state_19007[(2)]);
var inst_18998 = async(inst_18997);
var state_19007__$1 = state_19007;
if(cljs.core.truth_(inst_18998)){
var statearr_19010_20453 = state_19007__$1;
(statearr_19010_20453[(1)] = (5));

} else {
var statearr_19011_20454 = state_19007__$1;
(statearr_19011_20454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (5))){
var state_19007__$1 = state_19007;
var statearr_19012_20456 = state_19007__$1;
(statearr_19012_20456[(2)] = null);

(statearr_19012_20456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (6))){
var state_19007__$1 = state_19007;
var statearr_19013_20457 = state_19007__$1;
(statearr_19013_20457[(2)] = null);

(statearr_19013_20457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (7))){
var inst_19003 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
var statearr_19014_20459 = state_19007__$1;
(statearr_19014_20459[(2)] = inst_19003);

(statearr_19014_20459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20414,c__18817__auto___20447,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async))
;
return ((function (__20414,switch__18716__auto__,c__18817__auto___20447,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0 = (function (){
var statearr_19015 = [null,null,null,null,null,null,null];
(statearr_19015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__);

(statearr_19015[(1)] = (1));

return statearr_19015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1 = (function (state_19007){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19007);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19016){if((e19016 instanceof Object)){
var ex__18720__auto__ = e19016;
var statearr_19017_20461 = state_19007;
(statearr_19017_20461[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20462 = state_19007;
state_19007 = G__20462;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = function(state_19007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1.call(this,state_19007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__;
})()
;})(__20414,switch__18716__auto__,c__18817__auto___20447,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async))
})();
var state__18819__auto__ = (function (){var statearr_19018 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19018[(6)] = c__18817__auto___20447);

return statearr_19018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(__20414,c__18817__auto___20447,G__18970_20416,G__18970_20417__$1,n__4518__auto___20412,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18970_20417__$1)].join('')));

}

var G__20468 = (__20414 + (1));
__20414 = G__20468;
continue;
} else {
}
break;
}

var c__18817__auto___20469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___20469,jobs,results,process,async){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___20469,jobs,results,process,async){
return (function (state_19040){
var state_val_19041 = (state_19040[(1)]);
if((state_val_19041 === (1))){
var state_19040__$1 = state_19040;
var statearr_19042_20470 = state_19040__$1;
(statearr_19042_20470[(2)] = null);

(statearr_19042_20470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (2))){
var state_19040__$1 = state_19040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19040__$1,(4),from);
} else {
if((state_val_19041 === (3))){
var inst_19038 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19040__$1,inst_19038);
} else {
if((state_val_19041 === (4))){
var inst_19021 = (state_19040[(7)]);
var inst_19021__$1 = (state_19040[(2)]);
var inst_19022 = (inst_19021__$1 == null);
var state_19040__$1 = (function (){var statearr_19043 = state_19040;
(statearr_19043[(7)] = inst_19021__$1);

return statearr_19043;
})();
if(cljs.core.truth_(inst_19022)){
var statearr_19044_20472 = state_19040__$1;
(statearr_19044_20472[(1)] = (5));

} else {
var statearr_19045_20473 = state_19040__$1;
(statearr_19045_20473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (5))){
var inst_19024 = cljs.core.async.close_BANG_(jobs);
var state_19040__$1 = state_19040;
var statearr_19046_20477 = state_19040__$1;
(statearr_19046_20477[(2)] = inst_19024);

(statearr_19046_20477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (6))){
var inst_19021 = (state_19040[(7)]);
var inst_19026 = (state_19040[(8)]);
var inst_19026__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19028 = [inst_19021,inst_19026__$1];
var inst_19029 = (new cljs.core.PersistentVector(null,2,(5),inst_19027,inst_19028,null));
var state_19040__$1 = (function (){var statearr_19047 = state_19040;
(statearr_19047[(8)] = inst_19026__$1);

return statearr_19047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19040__$1,(8),jobs,inst_19029);
} else {
if((state_val_19041 === (7))){
var inst_19036 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
var statearr_19048_20478 = state_19040__$1;
(statearr_19048_20478[(2)] = inst_19036);

(statearr_19048_20478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (8))){
var inst_19026 = (state_19040[(8)]);
var inst_19031 = (state_19040[(2)]);
var state_19040__$1 = (function (){var statearr_19049 = state_19040;
(statearr_19049[(9)] = inst_19031);

return statearr_19049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19040__$1,(9),results,inst_19026);
} else {
if((state_val_19041 === (9))){
var inst_19033 = (state_19040[(2)]);
var state_19040__$1 = (function (){var statearr_19050 = state_19040;
(statearr_19050[(10)] = inst_19033);

return statearr_19050;
})();
var statearr_19051_20479 = state_19040__$1;
(statearr_19051_20479[(2)] = null);

(statearr_19051_20479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___20469,jobs,results,process,async))
;
return ((function (switch__18716__auto__,c__18817__auto___20469,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0 = (function (){
var statearr_19052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__);

(statearr_19052[(1)] = (1));

return statearr_19052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1 = (function (state_19040){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19040);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19053){if((e19053 instanceof Object)){
var ex__18720__auto__ = e19053;
var statearr_19054_20480 = state_19040;
(statearr_19054_20480[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20481 = state_19040;
state_19040 = G__20481;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = function(state_19040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1.call(this,state_19040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___20469,jobs,results,process,async))
})();
var state__18819__auto__ = (function (){var statearr_19055 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19055[(6)] = c__18817__auto___20469);

return statearr_19055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___20469,jobs,results,process,async))
);


var c__18817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto__,jobs,results,process,async){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto__,jobs,results,process,async){
return (function (state_19093){
var state_val_19094 = (state_19093[(1)]);
if((state_val_19094 === (7))){
var inst_19089 = (state_19093[(2)]);
var state_19093__$1 = state_19093;
var statearr_19095_20483 = state_19093__$1;
(statearr_19095_20483[(2)] = inst_19089);

(statearr_19095_20483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (20))){
var state_19093__$1 = state_19093;
var statearr_19096_20484 = state_19093__$1;
(statearr_19096_20484[(2)] = null);

(statearr_19096_20484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (1))){
var state_19093__$1 = state_19093;
var statearr_19097_20485 = state_19093__$1;
(statearr_19097_20485[(2)] = null);

(statearr_19097_20485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (4))){
var inst_19058 = (state_19093[(7)]);
var inst_19058__$1 = (state_19093[(2)]);
var inst_19059 = (inst_19058__$1 == null);
var state_19093__$1 = (function (){var statearr_19098 = state_19093;
(statearr_19098[(7)] = inst_19058__$1);

return statearr_19098;
})();
if(cljs.core.truth_(inst_19059)){
var statearr_19099_20488 = state_19093__$1;
(statearr_19099_20488[(1)] = (5));

} else {
var statearr_19100_20489 = state_19093__$1;
(statearr_19100_20489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (15))){
var inst_19071 = (state_19093[(8)]);
var state_19093__$1 = state_19093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19093__$1,(18),to,inst_19071);
} else {
if((state_val_19094 === (21))){
var inst_19084 = (state_19093[(2)]);
var state_19093__$1 = state_19093;
var statearr_19101_20490 = state_19093__$1;
(statearr_19101_20490[(2)] = inst_19084);

(statearr_19101_20490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (13))){
var inst_19086 = (state_19093[(2)]);
var state_19093__$1 = (function (){var statearr_19102 = state_19093;
(statearr_19102[(9)] = inst_19086);

return statearr_19102;
})();
var statearr_19103_20491 = state_19093__$1;
(statearr_19103_20491[(2)] = null);

(statearr_19103_20491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (6))){
var inst_19058 = (state_19093[(7)]);
var state_19093__$1 = state_19093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19093__$1,(11),inst_19058);
} else {
if((state_val_19094 === (17))){
var inst_19079 = (state_19093[(2)]);
var state_19093__$1 = state_19093;
if(cljs.core.truth_(inst_19079)){
var statearr_19104_20494 = state_19093__$1;
(statearr_19104_20494[(1)] = (19));

} else {
var statearr_19105_20495 = state_19093__$1;
(statearr_19105_20495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (3))){
var inst_19091 = (state_19093[(2)]);
var state_19093__$1 = state_19093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19093__$1,inst_19091);
} else {
if((state_val_19094 === (12))){
var inst_19068 = (state_19093[(10)]);
var state_19093__$1 = state_19093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19093__$1,(14),inst_19068);
} else {
if((state_val_19094 === (2))){
var state_19093__$1 = state_19093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19093__$1,(4),results);
} else {
if((state_val_19094 === (19))){
var state_19093__$1 = state_19093;
var statearr_19106_20496 = state_19093__$1;
(statearr_19106_20496[(2)] = null);

(statearr_19106_20496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (11))){
var inst_19068 = (state_19093[(2)]);
var state_19093__$1 = (function (){var statearr_19107 = state_19093;
(statearr_19107[(10)] = inst_19068);

return statearr_19107;
})();
var statearr_19108_20498 = state_19093__$1;
(statearr_19108_20498[(2)] = null);

(statearr_19108_20498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (9))){
var state_19093__$1 = state_19093;
var statearr_19109_20500 = state_19093__$1;
(statearr_19109_20500[(2)] = null);

(statearr_19109_20500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (5))){
var state_19093__$1 = state_19093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19110_20501 = state_19093__$1;
(statearr_19110_20501[(1)] = (8));

} else {
var statearr_19111_20502 = state_19093__$1;
(statearr_19111_20502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (14))){
var inst_19071 = (state_19093[(8)]);
var inst_19073 = (state_19093[(11)]);
var inst_19071__$1 = (state_19093[(2)]);
var inst_19072 = (inst_19071__$1 == null);
var inst_19073__$1 = cljs.core.not(inst_19072);
var state_19093__$1 = (function (){var statearr_19112 = state_19093;
(statearr_19112[(8)] = inst_19071__$1);

(statearr_19112[(11)] = inst_19073__$1);

return statearr_19112;
})();
if(inst_19073__$1){
var statearr_19113_20503 = state_19093__$1;
(statearr_19113_20503[(1)] = (15));

} else {
var statearr_19114_20504 = state_19093__$1;
(statearr_19114_20504[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (16))){
var inst_19073 = (state_19093[(11)]);
var state_19093__$1 = state_19093;
var statearr_19115_20505 = state_19093__$1;
(statearr_19115_20505[(2)] = inst_19073);

(statearr_19115_20505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (10))){
var inst_19065 = (state_19093[(2)]);
var state_19093__$1 = state_19093;
var statearr_19116_20507 = state_19093__$1;
(statearr_19116_20507[(2)] = inst_19065);

(statearr_19116_20507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (18))){
var inst_19076 = (state_19093[(2)]);
var state_19093__$1 = state_19093;
var statearr_19117_20509 = state_19093__$1;
(statearr_19117_20509[(2)] = inst_19076);

(statearr_19117_20509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (8))){
var inst_19062 = cljs.core.async.close_BANG_(to);
var state_19093__$1 = state_19093;
var statearr_19118_20510 = state_19093__$1;
(statearr_19118_20510[(2)] = inst_19062);

(statearr_19118_20510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto__,jobs,results,process,async))
;
return ((function (switch__18716__auto__,c__18817__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0 = (function (){
var statearr_19119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__);

(statearr_19119[(1)] = (1));

return statearr_19119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1 = (function (state_19093){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19093);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19120){if((e19120 instanceof Object)){
var ex__18720__auto__ = e19120;
var statearr_19121_20511 = state_19093;
(statearr_19121_20511[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20512 = state_19093;
state_19093 = G__20512;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__ = function(state_19093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1.call(this,state_19093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18717__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto__,jobs,results,process,async))
})();
var state__18819__auto__ = (function (){var statearr_19122 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19122[(6)] = c__18817__auto__);

return statearr_19122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto__,jobs,results,process,async))
);

return c__18817__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19124 = arguments.length;
switch (G__19124) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__19126 = arguments.length;
switch (G__19126) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__19128 = arguments.length;
switch (G__19128) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18817__auto___20550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___20550,tc,fc){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___20550,tc,fc){
return (function (state_19154){
var state_val_19155 = (state_19154[(1)]);
if((state_val_19155 === (7))){
var inst_19150 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19156_20553 = state_19154__$1;
(statearr_19156_20553[(2)] = inst_19150);

(statearr_19156_20553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (1))){
var state_19154__$1 = state_19154;
var statearr_19157_20557 = state_19154__$1;
(statearr_19157_20557[(2)] = null);

(statearr_19157_20557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (4))){
var inst_19131 = (state_19154[(7)]);
var inst_19131__$1 = (state_19154[(2)]);
var inst_19132 = (inst_19131__$1 == null);
var state_19154__$1 = (function (){var statearr_19158 = state_19154;
(statearr_19158[(7)] = inst_19131__$1);

return statearr_19158;
})();
if(cljs.core.truth_(inst_19132)){
var statearr_19159_20560 = state_19154__$1;
(statearr_19159_20560[(1)] = (5));

} else {
var statearr_19160_20561 = state_19154__$1;
(statearr_19160_20561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (13))){
var state_19154__$1 = state_19154;
var statearr_19161_20562 = state_19154__$1;
(statearr_19161_20562[(2)] = null);

(statearr_19161_20562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (6))){
var inst_19131 = (state_19154[(7)]);
var inst_19137 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19131) : p.call(null,inst_19131));
var state_19154__$1 = state_19154;
if(cljs.core.truth_(inst_19137)){
var statearr_19162_20567 = state_19154__$1;
(statearr_19162_20567[(1)] = (9));

} else {
var statearr_19163_20568 = state_19154__$1;
(statearr_19163_20568[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (3))){
var inst_19152 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19154__$1,inst_19152);
} else {
if((state_val_19155 === (12))){
var state_19154__$1 = state_19154;
var statearr_19164_20572 = state_19154__$1;
(statearr_19164_20572[(2)] = null);

(statearr_19164_20572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (2))){
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19154__$1,(4),ch);
} else {
if((state_val_19155 === (11))){
var inst_19131 = (state_19154[(7)]);
var inst_19141 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19154__$1,(8),inst_19141,inst_19131);
} else {
if((state_val_19155 === (9))){
var state_19154__$1 = state_19154;
var statearr_19165_20580 = state_19154__$1;
(statearr_19165_20580[(2)] = tc);

(statearr_19165_20580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (5))){
var inst_19134 = cljs.core.async.close_BANG_(tc);
var inst_19135 = cljs.core.async.close_BANG_(fc);
var state_19154__$1 = (function (){var statearr_19166 = state_19154;
(statearr_19166[(8)] = inst_19134);

return statearr_19166;
})();
var statearr_19167_20589 = state_19154__$1;
(statearr_19167_20589[(2)] = inst_19135);

(statearr_19167_20589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (14))){
var inst_19148 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19168_20591 = state_19154__$1;
(statearr_19168_20591[(2)] = inst_19148);

(statearr_19168_20591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (10))){
var state_19154__$1 = state_19154;
var statearr_19169_20592 = state_19154__$1;
(statearr_19169_20592[(2)] = fc);

(statearr_19169_20592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (8))){
var inst_19143 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
if(cljs.core.truth_(inst_19143)){
var statearr_19170_20597 = state_19154__$1;
(statearr_19170_20597[(1)] = (12));

} else {
var statearr_19171_20598 = state_19154__$1;
(statearr_19171_20598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___20550,tc,fc))
;
return ((function (switch__18716__auto__,c__18817__auto___20550,tc,fc){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_19172 = [null,null,null,null,null,null,null,null,null];
(statearr_19172[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_19172[(1)] = (1));

return statearr_19172;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_19154){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19154);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19173){if((e19173 instanceof Object)){
var ex__18720__auto__ = e19173;
var statearr_19174_20610 = state_19154;
(statearr_19174_20610[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20613 = state_19154;
state_19154 = G__20613;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_19154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_19154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___20550,tc,fc))
})();
var state__18819__auto__ = (function (){var statearr_19175 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19175[(6)] = c__18817__auto___20550);

return statearr_19175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___20550,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto__){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto__){
return (function (state_19196){
var state_val_19197 = (state_19196[(1)]);
if((state_val_19197 === (7))){
var inst_19192 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19198_20619 = state_19196__$1;
(statearr_19198_20619[(2)] = inst_19192);

(statearr_19198_20619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (1))){
var inst_19176 = init;
var state_19196__$1 = (function (){var statearr_19199 = state_19196;
(statearr_19199[(7)] = inst_19176);

return statearr_19199;
})();
var statearr_19200_20627 = state_19196__$1;
(statearr_19200_20627[(2)] = null);

(statearr_19200_20627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (4))){
var inst_19179 = (state_19196[(8)]);
var inst_19179__$1 = (state_19196[(2)]);
var inst_19180 = (inst_19179__$1 == null);
var state_19196__$1 = (function (){var statearr_19201 = state_19196;
(statearr_19201[(8)] = inst_19179__$1);

return statearr_19201;
})();
if(cljs.core.truth_(inst_19180)){
var statearr_19202_20629 = state_19196__$1;
(statearr_19202_20629[(1)] = (5));

} else {
var statearr_19203_20633 = state_19196__$1;
(statearr_19203_20633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (6))){
var inst_19179 = (state_19196[(8)]);
var inst_19176 = (state_19196[(7)]);
var inst_19183 = (state_19196[(9)]);
var inst_19183__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19176,inst_19179) : f.call(null,inst_19176,inst_19179));
var inst_19184 = cljs.core.reduced_QMARK_(inst_19183__$1);
var state_19196__$1 = (function (){var statearr_19204 = state_19196;
(statearr_19204[(9)] = inst_19183__$1);

return statearr_19204;
})();
if(inst_19184){
var statearr_19205_20638 = state_19196__$1;
(statearr_19205_20638[(1)] = (8));

} else {
var statearr_19206_20643 = state_19196__$1;
(statearr_19206_20643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (3))){
var inst_19194 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19196__$1,inst_19194);
} else {
if((state_val_19197 === (2))){
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19196__$1,(4),ch);
} else {
if((state_val_19197 === (9))){
var inst_19183 = (state_19196[(9)]);
var inst_19176 = inst_19183;
var state_19196__$1 = (function (){var statearr_19207 = state_19196;
(statearr_19207[(7)] = inst_19176);

return statearr_19207;
})();
var statearr_19208_20652 = state_19196__$1;
(statearr_19208_20652[(2)] = null);

(statearr_19208_20652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (5))){
var inst_19176 = (state_19196[(7)]);
var state_19196__$1 = state_19196;
var statearr_19209_20656 = state_19196__$1;
(statearr_19209_20656[(2)] = inst_19176);

(statearr_19209_20656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (10))){
var inst_19190 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19210_20658 = state_19196__$1;
(statearr_19210_20658[(2)] = inst_19190);

(statearr_19210_20658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (8))){
var inst_19183 = (state_19196[(9)]);
var inst_19186 = cljs.core.deref(inst_19183);
var state_19196__$1 = state_19196;
var statearr_19211_20663 = state_19196__$1;
(statearr_19211_20663[(2)] = inst_19186);

(statearr_19211_20663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto__))
;
return ((function (switch__18716__auto__,c__18817__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18717__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18717__auto____0 = (function (){
var statearr_19212 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19212[(0)] = cljs$core$async$reduce_$_state_machine__18717__auto__);

(statearr_19212[(1)] = (1));

return statearr_19212;
});
var cljs$core$async$reduce_$_state_machine__18717__auto____1 = (function (state_19196){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19196);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19213){if((e19213 instanceof Object)){
var ex__18720__auto__ = e19213;
var statearr_19214_20677 = state_19196;
(statearr_19214_20677[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20680 = state_19196;
state_19196 = G__20680;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18717__auto__ = function(state_19196){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18717__auto____1.call(this,state_19196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18717__auto____0;
cljs$core$async$reduce_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18717__auto____1;
return cljs$core$async$reduce_$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto__))
})();
var state__18819__auto__ = (function (){var statearr_19215 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19215[(6)] = c__18817__auto__);

return statearr_19215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto__))
);

return c__18817__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto__,f__$1){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto__,f__$1){
return (function (state_19221){
var state_val_19222 = (state_19221[(1)]);
if((state_val_19222 === (1))){
var inst_19216 = cljs.core.async.reduce(f__$1,init,ch);
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19221__$1,(2),inst_19216);
} else {
if((state_val_19222 === (2))){
var inst_19218 = (state_19221[(2)]);
var inst_19219 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19218) : f__$1.call(null,inst_19218));
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19221__$1,inst_19219);
} else {
return null;
}
}
});})(c__18817__auto__,f__$1))
;
return ((function (switch__18716__auto__,c__18817__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18717__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18717__auto____0 = (function (){
var statearr_19223 = [null,null,null,null,null,null,null];
(statearr_19223[(0)] = cljs$core$async$transduce_$_state_machine__18717__auto__);

(statearr_19223[(1)] = (1));

return statearr_19223;
});
var cljs$core$async$transduce_$_state_machine__18717__auto____1 = (function (state_19221){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19221);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19224){if((e19224 instanceof Object)){
var ex__18720__auto__ = e19224;
var statearr_19225_20688 = state_19221;
(statearr_19225_20688[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20692 = state_19221;
state_19221 = G__20692;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18717__auto__ = function(state_19221){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18717__auto____1.call(this,state_19221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18717__auto____0;
cljs$core$async$transduce_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18717__auto____1;
return cljs$core$async$transduce_$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto__,f__$1))
})();
var state__18819__auto__ = (function (){var statearr_19226 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19226[(6)] = c__18817__auto__);

return statearr_19226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto__,f__$1))
);

return c__18817__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19228 = arguments.length;
switch (G__19228) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto__){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto__){
return (function (state_19253){
var state_val_19254 = (state_19253[(1)]);
if((state_val_19254 === (7))){
var inst_19235 = (state_19253[(2)]);
var state_19253__$1 = state_19253;
var statearr_19255_20697 = state_19253__$1;
(statearr_19255_20697[(2)] = inst_19235);

(statearr_19255_20697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (1))){
var inst_19229 = cljs.core.seq(coll);
var inst_19230 = inst_19229;
var state_19253__$1 = (function (){var statearr_19256 = state_19253;
(statearr_19256[(7)] = inst_19230);

return statearr_19256;
})();
var statearr_19257_20698 = state_19253__$1;
(statearr_19257_20698[(2)] = null);

(statearr_19257_20698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (4))){
var inst_19230 = (state_19253[(7)]);
var inst_19233 = cljs.core.first(inst_19230);
var state_19253__$1 = state_19253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19253__$1,(7),ch,inst_19233);
} else {
if((state_val_19254 === (13))){
var inst_19247 = (state_19253[(2)]);
var state_19253__$1 = state_19253;
var statearr_19258_20701 = state_19253__$1;
(statearr_19258_20701[(2)] = inst_19247);

(statearr_19258_20701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (6))){
var inst_19238 = (state_19253[(2)]);
var state_19253__$1 = state_19253;
if(cljs.core.truth_(inst_19238)){
var statearr_19259_20702 = state_19253__$1;
(statearr_19259_20702[(1)] = (8));

} else {
var statearr_19260_20703 = state_19253__$1;
(statearr_19260_20703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (3))){
var inst_19251 = (state_19253[(2)]);
var state_19253__$1 = state_19253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19253__$1,inst_19251);
} else {
if((state_val_19254 === (12))){
var state_19253__$1 = state_19253;
var statearr_19261_20704 = state_19253__$1;
(statearr_19261_20704[(2)] = null);

(statearr_19261_20704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (2))){
var inst_19230 = (state_19253[(7)]);
var state_19253__$1 = state_19253;
if(cljs.core.truth_(inst_19230)){
var statearr_19262_20705 = state_19253__$1;
(statearr_19262_20705[(1)] = (4));

} else {
var statearr_19263_20706 = state_19253__$1;
(statearr_19263_20706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (11))){
var inst_19244 = cljs.core.async.close_BANG_(ch);
var state_19253__$1 = state_19253;
var statearr_19264_20707 = state_19253__$1;
(statearr_19264_20707[(2)] = inst_19244);

(statearr_19264_20707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (9))){
var state_19253__$1 = state_19253;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19265_20708 = state_19253__$1;
(statearr_19265_20708[(1)] = (11));

} else {
var statearr_19266_20709 = state_19253__$1;
(statearr_19266_20709[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (5))){
var inst_19230 = (state_19253[(7)]);
var state_19253__$1 = state_19253;
var statearr_19267_20710 = state_19253__$1;
(statearr_19267_20710[(2)] = inst_19230);

(statearr_19267_20710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (10))){
var inst_19249 = (state_19253[(2)]);
var state_19253__$1 = state_19253;
var statearr_19268_20712 = state_19253__$1;
(statearr_19268_20712[(2)] = inst_19249);

(statearr_19268_20712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (8))){
var inst_19230 = (state_19253[(7)]);
var inst_19240 = cljs.core.next(inst_19230);
var inst_19230__$1 = inst_19240;
var state_19253__$1 = (function (){var statearr_19269 = state_19253;
(statearr_19269[(7)] = inst_19230__$1);

return statearr_19269;
})();
var statearr_19270_20717 = state_19253__$1;
(statearr_19270_20717[(2)] = null);

(statearr_19270_20717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto__))
;
return ((function (switch__18716__auto__,c__18817__auto__){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_19271 = [null,null,null,null,null,null,null,null];
(statearr_19271[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_19271[(1)] = (1));

return statearr_19271;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_19253){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19253);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19272){if((e19272 instanceof Object)){
var ex__18720__auto__ = e19272;
var statearr_19273_20726 = state_19253;
(statearr_19273_20726[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20727 = state_19253;
state_19253 = G__20727;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_19253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_19253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto__))
})();
var state__18819__auto__ = (function (){var statearr_19274 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19274[(6)] = c__18817__auto__);

return statearr_19274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto__))
);

return c__18817__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19275 = (function (ch,cs,meta19276){
this.ch = ch;
this.cs = cs;
this.meta19276 = meta19276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19277,meta19276__$1){
var self__ = this;
var _19277__$1 = this;
return (new cljs.core.async.t_cljs$core$async19275(self__.ch,self__.cs,meta19276__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19277){
var self__ = this;
var _19277__$1 = this;
return self__.meta19276;
});})(cs))
;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19275.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19276","meta19276",1085725608,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19275";

cljs.core.async.t_cljs$core$async19275.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19275");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19275.
 */
cljs.core.async.__GT_t_cljs$core$async19275 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19275(ch__$1,cs__$1,meta19276){
return (new cljs.core.async.t_cljs$core$async19275(ch__$1,cs__$1,meta19276));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19275(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18817__auto___20782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___20782,cs,m,dchan,dctr,done){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___20782,cs,m,dchan,dctr,done){
return (function (state_19412){
var state_val_19413 = (state_19412[(1)]);
if((state_val_19413 === (7))){
var inst_19408 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19414_20783 = state_19412__$1;
(statearr_19414_20783[(2)] = inst_19408);

(statearr_19414_20783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (20))){
var inst_19311 = (state_19412[(7)]);
var inst_19323 = cljs.core.first(inst_19311);
var inst_19324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19323,(0),null);
var inst_19325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19323,(1),null);
var state_19412__$1 = (function (){var statearr_19415 = state_19412;
(statearr_19415[(8)] = inst_19324);

return statearr_19415;
})();
if(cljs.core.truth_(inst_19325)){
var statearr_19416_20784 = state_19412__$1;
(statearr_19416_20784[(1)] = (22));

} else {
var statearr_19417_20785 = state_19412__$1;
(statearr_19417_20785[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (27))){
var inst_19353 = (state_19412[(9)]);
var inst_19355 = (state_19412[(10)]);
var inst_19280 = (state_19412[(11)]);
var inst_19360 = (state_19412[(12)]);
var inst_19360__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19353,inst_19355);
var inst_19361 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19360__$1,inst_19280,done);
var state_19412__$1 = (function (){var statearr_19418 = state_19412;
(statearr_19418[(12)] = inst_19360__$1);

return statearr_19418;
})();
if(cljs.core.truth_(inst_19361)){
var statearr_19419_20786 = state_19412__$1;
(statearr_19419_20786[(1)] = (30));

} else {
var statearr_19420_20787 = state_19412__$1;
(statearr_19420_20787[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (1))){
var state_19412__$1 = state_19412;
var statearr_19421_20788 = state_19412__$1;
(statearr_19421_20788[(2)] = null);

(statearr_19421_20788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (24))){
var inst_19311 = (state_19412[(7)]);
var inst_19330 = (state_19412[(2)]);
var inst_19331 = cljs.core.next(inst_19311);
var inst_19289 = inst_19331;
var inst_19290 = null;
var inst_19291 = (0);
var inst_19292 = (0);
var state_19412__$1 = (function (){var statearr_19422 = state_19412;
(statearr_19422[(13)] = inst_19330);

(statearr_19422[(14)] = inst_19289);

(statearr_19422[(15)] = inst_19292);

(statearr_19422[(16)] = inst_19290);

(statearr_19422[(17)] = inst_19291);

return statearr_19422;
})();
var statearr_19423_20789 = state_19412__$1;
(statearr_19423_20789[(2)] = null);

(statearr_19423_20789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (39))){
var state_19412__$1 = state_19412;
var statearr_19427_20790 = state_19412__$1;
(statearr_19427_20790[(2)] = null);

(statearr_19427_20790[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (4))){
var inst_19280 = (state_19412[(11)]);
var inst_19280__$1 = (state_19412[(2)]);
var inst_19281 = (inst_19280__$1 == null);
var state_19412__$1 = (function (){var statearr_19428 = state_19412;
(statearr_19428[(11)] = inst_19280__$1);

return statearr_19428;
})();
if(cljs.core.truth_(inst_19281)){
var statearr_19429_20791 = state_19412__$1;
(statearr_19429_20791[(1)] = (5));

} else {
var statearr_19430_20795 = state_19412__$1;
(statearr_19430_20795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (15))){
var inst_19289 = (state_19412[(14)]);
var inst_19292 = (state_19412[(15)]);
var inst_19290 = (state_19412[(16)]);
var inst_19291 = (state_19412[(17)]);
var inst_19307 = (state_19412[(2)]);
var inst_19308 = (inst_19292 + (1));
var tmp19424 = inst_19289;
var tmp19425 = inst_19290;
var tmp19426 = inst_19291;
var inst_19289__$1 = tmp19424;
var inst_19290__$1 = tmp19425;
var inst_19291__$1 = tmp19426;
var inst_19292__$1 = inst_19308;
var state_19412__$1 = (function (){var statearr_19431 = state_19412;
(statearr_19431[(14)] = inst_19289__$1);

(statearr_19431[(15)] = inst_19292__$1);

(statearr_19431[(18)] = inst_19307);

(statearr_19431[(16)] = inst_19290__$1);

(statearr_19431[(17)] = inst_19291__$1);

return statearr_19431;
})();
var statearr_19432_20798 = state_19412__$1;
(statearr_19432_20798[(2)] = null);

(statearr_19432_20798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (21))){
var inst_19334 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19436_20803 = state_19412__$1;
(statearr_19436_20803[(2)] = inst_19334);

(statearr_19436_20803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (31))){
var inst_19360 = (state_19412[(12)]);
var inst_19364 = done(null);
var inst_19365 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19360);
var state_19412__$1 = (function (){var statearr_19437 = state_19412;
(statearr_19437[(19)] = inst_19364);

return statearr_19437;
})();
var statearr_19438_20807 = state_19412__$1;
(statearr_19438_20807[(2)] = inst_19365);

(statearr_19438_20807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (32))){
var inst_19353 = (state_19412[(9)]);
var inst_19355 = (state_19412[(10)]);
var inst_19354 = (state_19412[(20)]);
var inst_19352 = (state_19412[(21)]);
var inst_19367 = (state_19412[(2)]);
var inst_19368 = (inst_19355 + (1));
var tmp19433 = inst_19353;
var tmp19434 = inst_19354;
var tmp19435 = inst_19352;
var inst_19352__$1 = tmp19435;
var inst_19353__$1 = tmp19433;
var inst_19354__$1 = tmp19434;
var inst_19355__$1 = inst_19368;
var state_19412__$1 = (function (){var statearr_19439 = state_19412;
(statearr_19439[(9)] = inst_19353__$1);

(statearr_19439[(10)] = inst_19355__$1);

(statearr_19439[(20)] = inst_19354__$1);

(statearr_19439[(22)] = inst_19367);

(statearr_19439[(21)] = inst_19352__$1);

return statearr_19439;
})();
var statearr_19440_20811 = state_19412__$1;
(statearr_19440_20811[(2)] = null);

(statearr_19440_20811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (40))){
var inst_19380 = (state_19412[(23)]);
var inst_19384 = done(null);
var inst_19385 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19380);
var state_19412__$1 = (function (){var statearr_19441 = state_19412;
(statearr_19441[(24)] = inst_19384);

return statearr_19441;
})();
var statearr_19442_20815 = state_19412__$1;
(statearr_19442_20815[(2)] = inst_19385);

(statearr_19442_20815[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (33))){
var inst_19371 = (state_19412[(25)]);
var inst_19373 = cljs.core.chunked_seq_QMARK_(inst_19371);
var state_19412__$1 = state_19412;
if(inst_19373){
var statearr_19443_20816 = state_19412__$1;
(statearr_19443_20816[(1)] = (36));

} else {
var statearr_19444_20817 = state_19412__$1;
(statearr_19444_20817[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (13))){
var inst_19301 = (state_19412[(26)]);
var inst_19304 = cljs.core.async.close_BANG_(inst_19301);
var state_19412__$1 = state_19412;
var statearr_19445_20818 = state_19412__$1;
(statearr_19445_20818[(2)] = inst_19304);

(statearr_19445_20818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (22))){
var inst_19324 = (state_19412[(8)]);
var inst_19327 = cljs.core.async.close_BANG_(inst_19324);
var state_19412__$1 = state_19412;
var statearr_19446_20819 = state_19412__$1;
(statearr_19446_20819[(2)] = inst_19327);

(statearr_19446_20819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (36))){
var inst_19371 = (state_19412[(25)]);
var inst_19375 = cljs.core.chunk_first(inst_19371);
var inst_19376 = cljs.core.chunk_rest(inst_19371);
var inst_19377 = cljs.core.count(inst_19375);
var inst_19352 = inst_19376;
var inst_19353 = inst_19375;
var inst_19354 = inst_19377;
var inst_19355 = (0);
var state_19412__$1 = (function (){var statearr_19447 = state_19412;
(statearr_19447[(9)] = inst_19353);

(statearr_19447[(10)] = inst_19355);

(statearr_19447[(20)] = inst_19354);

(statearr_19447[(21)] = inst_19352);

return statearr_19447;
})();
var statearr_19448_20822 = state_19412__$1;
(statearr_19448_20822[(2)] = null);

(statearr_19448_20822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (41))){
var inst_19371 = (state_19412[(25)]);
var inst_19387 = (state_19412[(2)]);
var inst_19388 = cljs.core.next(inst_19371);
var inst_19352 = inst_19388;
var inst_19353 = null;
var inst_19354 = (0);
var inst_19355 = (0);
var state_19412__$1 = (function (){var statearr_19449 = state_19412;
(statearr_19449[(9)] = inst_19353);

(statearr_19449[(10)] = inst_19355);

(statearr_19449[(27)] = inst_19387);

(statearr_19449[(20)] = inst_19354);

(statearr_19449[(21)] = inst_19352);

return statearr_19449;
})();
var statearr_19450_20823 = state_19412__$1;
(statearr_19450_20823[(2)] = null);

(statearr_19450_20823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (43))){
var state_19412__$1 = state_19412;
var statearr_19451_20824 = state_19412__$1;
(statearr_19451_20824[(2)] = null);

(statearr_19451_20824[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (29))){
var inst_19396 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19452_20825 = state_19412__$1;
(statearr_19452_20825[(2)] = inst_19396);

(statearr_19452_20825[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (44))){
var inst_19405 = (state_19412[(2)]);
var state_19412__$1 = (function (){var statearr_19453 = state_19412;
(statearr_19453[(28)] = inst_19405);

return statearr_19453;
})();
var statearr_19454_20826 = state_19412__$1;
(statearr_19454_20826[(2)] = null);

(statearr_19454_20826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (6))){
var inst_19344 = (state_19412[(29)]);
var inst_19343 = cljs.core.deref(cs);
var inst_19344__$1 = cljs.core.keys(inst_19343);
var inst_19345 = cljs.core.count(inst_19344__$1);
var inst_19346 = cljs.core.reset_BANG_(dctr,inst_19345);
var inst_19351 = cljs.core.seq(inst_19344__$1);
var inst_19352 = inst_19351;
var inst_19353 = null;
var inst_19354 = (0);
var inst_19355 = (0);
var state_19412__$1 = (function (){var statearr_19455 = state_19412;
(statearr_19455[(9)] = inst_19353);

(statearr_19455[(10)] = inst_19355);

(statearr_19455[(30)] = inst_19346);

(statearr_19455[(20)] = inst_19354);

(statearr_19455[(21)] = inst_19352);

(statearr_19455[(29)] = inst_19344__$1);

return statearr_19455;
})();
var statearr_19456_20828 = state_19412__$1;
(statearr_19456_20828[(2)] = null);

(statearr_19456_20828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (28))){
var inst_19371 = (state_19412[(25)]);
var inst_19352 = (state_19412[(21)]);
var inst_19371__$1 = cljs.core.seq(inst_19352);
var state_19412__$1 = (function (){var statearr_19457 = state_19412;
(statearr_19457[(25)] = inst_19371__$1);

return statearr_19457;
})();
if(inst_19371__$1){
var statearr_19458_20830 = state_19412__$1;
(statearr_19458_20830[(1)] = (33));

} else {
var statearr_19459_20831 = state_19412__$1;
(statearr_19459_20831[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (25))){
var inst_19355 = (state_19412[(10)]);
var inst_19354 = (state_19412[(20)]);
var inst_19357 = (inst_19355 < inst_19354);
var inst_19358 = inst_19357;
var state_19412__$1 = state_19412;
if(cljs.core.truth_(inst_19358)){
var statearr_19460_20832 = state_19412__$1;
(statearr_19460_20832[(1)] = (27));

} else {
var statearr_19461_20833 = state_19412__$1;
(statearr_19461_20833[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (34))){
var state_19412__$1 = state_19412;
var statearr_19462_20834 = state_19412__$1;
(statearr_19462_20834[(2)] = null);

(statearr_19462_20834[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (17))){
var state_19412__$1 = state_19412;
var statearr_19463_20835 = state_19412__$1;
(statearr_19463_20835[(2)] = null);

(statearr_19463_20835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (3))){
var inst_19410 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19412__$1,inst_19410);
} else {
if((state_val_19413 === (12))){
var inst_19339 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19464_20836 = state_19412__$1;
(statearr_19464_20836[(2)] = inst_19339);

(statearr_19464_20836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (2))){
var state_19412__$1 = state_19412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19412__$1,(4),ch);
} else {
if((state_val_19413 === (23))){
var state_19412__$1 = state_19412;
var statearr_19465_20837 = state_19412__$1;
(statearr_19465_20837[(2)] = null);

(statearr_19465_20837[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (35))){
var inst_19394 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19466_20838 = state_19412__$1;
(statearr_19466_20838[(2)] = inst_19394);

(statearr_19466_20838[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (19))){
var inst_19311 = (state_19412[(7)]);
var inst_19315 = cljs.core.chunk_first(inst_19311);
var inst_19316 = cljs.core.chunk_rest(inst_19311);
var inst_19317 = cljs.core.count(inst_19315);
var inst_19289 = inst_19316;
var inst_19290 = inst_19315;
var inst_19291 = inst_19317;
var inst_19292 = (0);
var state_19412__$1 = (function (){var statearr_19467 = state_19412;
(statearr_19467[(14)] = inst_19289);

(statearr_19467[(15)] = inst_19292);

(statearr_19467[(16)] = inst_19290);

(statearr_19467[(17)] = inst_19291);

return statearr_19467;
})();
var statearr_19468_20839 = state_19412__$1;
(statearr_19468_20839[(2)] = null);

(statearr_19468_20839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (11))){
var inst_19311 = (state_19412[(7)]);
var inst_19289 = (state_19412[(14)]);
var inst_19311__$1 = cljs.core.seq(inst_19289);
var state_19412__$1 = (function (){var statearr_19469 = state_19412;
(statearr_19469[(7)] = inst_19311__$1);

return statearr_19469;
})();
if(inst_19311__$1){
var statearr_19470_20841 = state_19412__$1;
(statearr_19470_20841[(1)] = (16));

} else {
var statearr_19471_20842 = state_19412__$1;
(statearr_19471_20842[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (9))){
var inst_19341 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19472_20843 = state_19412__$1;
(statearr_19472_20843[(2)] = inst_19341);

(statearr_19472_20843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (5))){
var inst_19287 = cljs.core.deref(cs);
var inst_19288 = cljs.core.seq(inst_19287);
var inst_19289 = inst_19288;
var inst_19290 = null;
var inst_19291 = (0);
var inst_19292 = (0);
var state_19412__$1 = (function (){var statearr_19473 = state_19412;
(statearr_19473[(14)] = inst_19289);

(statearr_19473[(15)] = inst_19292);

(statearr_19473[(16)] = inst_19290);

(statearr_19473[(17)] = inst_19291);

return statearr_19473;
})();
var statearr_19474_20848 = state_19412__$1;
(statearr_19474_20848[(2)] = null);

(statearr_19474_20848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (14))){
var state_19412__$1 = state_19412;
var statearr_19475_20849 = state_19412__$1;
(statearr_19475_20849[(2)] = null);

(statearr_19475_20849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (45))){
var inst_19402 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19476_20850 = state_19412__$1;
(statearr_19476_20850[(2)] = inst_19402);

(statearr_19476_20850[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (26))){
var inst_19344 = (state_19412[(29)]);
var inst_19398 = (state_19412[(2)]);
var inst_19399 = cljs.core.seq(inst_19344);
var state_19412__$1 = (function (){var statearr_19477 = state_19412;
(statearr_19477[(31)] = inst_19398);

return statearr_19477;
})();
if(inst_19399){
var statearr_19478_20851 = state_19412__$1;
(statearr_19478_20851[(1)] = (42));

} else {
var statearr_19479_20852 = state_19412__$1;
(statearr_19479_20852[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (16))){
var inst_19311 = (state_19412[(7)]);
var inst_19313 = cljs.core.chunked_seq_QMARK_(inst_19311);
var state_19412__$1 = state_19412;
if(inst_19313){
var statearr_19480_20853 = state_19412__$1;
(statearr_19480_20853[(1)] = (19));

} else {
var statearr_19481_20854 = state_19412__$1;
(statearr_19481_20854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (38))){
var inst_19391 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19482_20859 = state_19412__$1;
(statearr_19482_20859[(2)] = inst_19391);

(statearr_19482_20859[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (30))){
var state_19412__$1 = state_19412;
var statearr_19483_20863 = state_19412__$1;
(statearr_19483_20863[(2)] = null);

(statearr_19483_20863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (10))){
var inst_19292 = (state_19412[(15)]);
var inst_19290 = (state_19412[(16)]);
var inst_19300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19290,inst_19292);
var inst_19301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19300,(0),null);
var inst_19302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19300,(1),null);
var state_19412__$1 = (function (){var statearr_19484 = state_19412;
(statearr_19484[(26)] = inst_19301);

return statearr_19484;
})();
if(cljs.core.truth_(inst_19302)){
var statearr_19485_20867 = state_19412__$1;
(statearr_19485_20867[(1)] = (13));

} else {
var statearr_19486_20868 = state_19412__$1;
(statearr_19486_20868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (18))){
var inst_19337 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19487_20869 = state_19412__$1;
(statearr_19487_20869[(2)] = inst_19337);

(statearr_19487_20869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (42))){
var state_19412__$1 = state_19412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19412__$1,(45),dchan);
} else {
if((state_val_19413 === (37))){
var inst_19371 = (state_19412[(25)]);
var inst_19380 = (state_19412[(23)]);
var inst_19280 = (state_19412[(11)]);
var inst_19380__$1 = cljs.core.first(inst_19371);
var inst_19381 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19380__$1,inst_19280,done);
var state_19412__$1 = (function (){var statearr_19488 = state_19412;
(statearr_19488[(23)] = inst_19380__$1);

return statearr_19488;
})();
if(cljs.core.truth_(inst_19381)){
var statearr_19489_20874 = state_19412__$1;
(statearr_19489_20874[(1)] = (39));

} else {
var statearr_19490_20875 = state_19412__$1;
(statearr_19490_20875[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (8))){
var inst_19292 = (state_19412[(15)]);
var inst_19291 = (state_19412[(17)]);
var inst_19294 = (inst_19292 < inst_19291);
var inst_19295 = inst_19294;
var state_19412__$1 = state_19412;
if(cljs.core.truth_(inst_19295)){
var statearr_19491_20876 = state_19412__$1;
(statearr_19491_20876[(1)] = (10));

} else {
var statearr_19492_20877 = state_19412__$1;
(statearr_19492_20877[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___20782,cs,m,dchan,dctr,done))
;
return ((function (switch__18716__auto__,c__18817__auto___20782,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18717__auto__ = null;
var cljs$core$async$mult_$_state_machine__18717__auto____0 = (function (){
var statearr_19493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19493[(0)] = cljs$core$async$mult_$_state_machine__18717__auto__);

(statearr_19493[(1)] = (1));

return statearr_19493;
});
var cljs$core$async$mult_$_state_machine__18717__auto____1 = (function (state_19412){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19412);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19494){if((e19494 instanceof Object)){
var ex__18720__auto__ = e19494;
var statearr_19495_20881 = state_19412;
(statearr_19495_20881[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19494;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20883 = state_19412;
state_19412 = G__20883;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18717__auto__ = function(state_19412){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18717__auto____1.call(this,state_19412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18717__auto____0;
cljs$core$async$mult_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18717__auto____1;
return cljs$core$async$mult_$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___20782,cs,m,dchan,dctr,done))
})();
var state__18819__auto__ = (function (){var statearr_19496 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19496[(6)] = c__18817__auto___20782);

return statearr_19496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___20782,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19498 = arguments.length;
switch (G__19498) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20904 = arguments.length;
var i__4642__auto___20905 = (0);
while(true){
if((i__4642__auto___20905 < len__4641__auto___20904)){
args__4647__auto__.push((arguments[i__4642__auto___20905]));

var G__20907 = (i__4642__auto___20905 + (1));
i__4642__auto___20905 = G__20907;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19503){
var map__19504 = p__19503;
var map__19504__$1 = (((((!((map__19504 == null))))?(((((map__19504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19504):map__19504);
var opts = map__19504__$1;
var statearr_19506_20908 = state;
(statearr_19506_20908[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__19504,map__19504__$1,opts){
return (function (val){
var statearr_19507_20909 = state;
(statearr_19507_20909[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19504,map__19504__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_19508_20911 = state;
(statearr_19508_20911[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19499){
var G__19500 = cljs.core.first(seq19499);
var seq19499__$1 = cljs.core.next(seq19499);
var G__19501 = cljs.core.first(seq19499__$1);
var seq19499__$2 = cljs.core.next(seq19499__$1);
var G__19502 = cljs.core.first(seq19499__$2);
var seq19499__$3 = cljs.core.next(seq19499__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19500,G__19501,G__19502,seq19499__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19509 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19510){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19510 = meta19510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19511,meta19510__$1){
var self__ = this;
var _19511__$1 = this;
return (new cljs.core.async.t_cljs$core$async19509(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19510__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19511){
var self__ = this;
var _19511__$1 = this;
return self__.meta19510;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19509.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19509.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta19510","meta19510",-998199750,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19509";

cljs.core.async.t_cljs$core$async19509.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19509");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19509.
 */
cljs.core.async.__GT_t_cljs$core$async19509 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19509(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19510){
return (new cljs.core.async.t_cljs$core$async19509(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19510));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19509(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18817__auto___20924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___20924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___20924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19613){
var state_val_19614 = (state_19613[(1)]);
if((state_val_19614 === (7))){
var inst_19528 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19615_20925 = state_19613__$1;
(statearr_19615_20925[(2)] = inst_19528);

(statearr_19615_20925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (20))){
var inst_19540 = (state_19613[(7)]);
var state_19613__$1 = state_19613;
var statearr_19616_20926 = state_19613__$1;
(statearr_19616_20926[(2)] = inst_19540);

(statearr_19616_20926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (27))){
var state_19613__$1 = state_19613;
var statearr_19617_20927 = state_19613__$1;
(statearr_19617_20927[(2)] = null);

(statearr_19617_20927[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (1))){
var inst_19515 = (state_19613[(8)]);
var inst_19515__$1 = calc_state();
var inst_19517 = (inst_19515__$1 == null);
var inst_19518 = cljs.core.not(inst_19517);
var state_19613__$1 = (function (){var statearr_19618 = state_19613;
(statearr_19618[(8)] = inst_19515__$1);

return statearr_19618;
})();
if(inst_19518){
var statearr_19619_20929 = state_19613__$1;
(statearr_19619_20929[(1)] = (2));

} else {
var statearr_19620_20930 = state_19613__$1;
(statearr_19620_20930[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (24))){
var inst_19564 = (state_19613[(9)]);
var inst_19573 = (state_19613[(10)]);
var inst_19587 = (state_19613[(11)]);
var inst_19587__$1 = (inst_19564.cljs$core$IFn$_invoke$arity$1 ? inst_19564.cljs$core$IFn$_invoke$arity$1(inst_19573) : inst_19564.call(null,inst_19573));
var state_19613__$1 = (function (){var statearr_19621 = state_19613;
(statearr_19621[(11)] = inst_19587__$1);

return statearr_19621;
})();
if(cljs.core.truth_(inst_19587__$1)){
var statearr_19622_20932 = state_19613__$1;
(statearr_19622_20932[(1)] = (29));

} else {
var statearr_19623_20933 = state_19613__$1;
(statearr_19623_20933[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (4))){
var inst_19531 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19531)){
var statearr_19624_20934 = state_19613__$1;
(statearr_19624_20934[(1)] = (8));

} else {
var statearr_19625_20935 = state_19613__$1;
(statearr_19625_20935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (15))){
var inst_19558 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19558)){
var statearr_19626_20936 = state_19613__$1;
(statearr_19626_20936[(1)] = (19));

} else {
var statearr_19627_20938 = state_19613__$1;
(statearr_19627_20938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (21))){
var inst_19563 = (state_19613[(12)]);
var inst_19563__$1 = (state_19613[(2)]);
var inst_19564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19563__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19563__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19563__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19613__$1 = (function (){var statearr_19628 = state_19613;
(statearr_19628[(13)] = inst_19565);

(statearr_19628[(9)] = inst_19564);

(statearr_19628[(12)] = inst_19563__$1);

return statearr_19628;
})();
return cljs.core.async.ioc_alts_BANG_(state_19613__$1,(22),inst_19566);
} else {
if((state_val_19614 === (31))){
var inst_19595 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19595)){
var statearr_19629_20940 = state_19613__$1;
(statearr_19629_20940[(1)] = (32));

} else {
var statearr_19630_20945 = state_19613__$1;
(statearr_19630_20945[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (32))){
var inst_19572 = (state_19613[(14)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19613__$1,(35),out,inst_19572);
} else {
if((state_val_19614 === (33))){
var inst_19563 = (state_19613[(12)]);
var inst_19540 = inst_19563;
var state_19613__$1 = (function (){var statearr_19631 = state_19613;
(statearr_19631[(7)] = inst_19540);

return statearr_19631;
})();
var statearr_19632_20947 = state_19613__$1;
(statearr_19632_20947[(2)] = null);

(statearr_19632_20947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (13))){
var inst_19540 = (state_19613[(7)]);
var inst_19547 = inst_19540.cljs$lang$protocol_mask$partition0$;
var inst_19548 = (inst_19547 & (64));
var inst_19549 = inst_19540.cljs$core$ISeq$;
var inst_19550 = (cljs.core.PROTOCOL_SENTINEL === inst_19549);
var inst_19551 = ((inst_19548) || (inst_19550));
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19551)){
var statearr_19633_20948 = state_19613__$1;
(statearr_19633_20948[(1)] = (16));

} else {
var statearr_19634_20949 = state_19613__$1;
(statearr_19634_20949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (22))){
var inst_19572 = (state_19613[(14)]);
var inst_19573 = (state_19613[(10)]);
var inst_19571 = (state_19613[(2)]);
var inst_19572__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19571,(0),null);
var inst_19573__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19571,(1),null);
var inst_19574 = (inst_19572__$1 == null);
var inst_19575 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19573__$1,change);
var inst_19576 = ((inst_19574) || (inst_19575));
var state_19613__$1 = (function (){var statearr_19635 = state_19613;
(statearr_19635[(14)] = inst_19572__$1);

(statearr_19635[(10)] = inst_19573__$1);

return statearr_19635;
})();
if(cljs.core.truth_(inst_19576)){
var statearr_19636_20951 = state_19613__$1;
(statearr_19636_20951[(1)] = (23));

} else {
var statearr_19637_20952 = state_19613__$1;
(statearr_19637_20952[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (36))){
var inst_19563 = (state_19613[(12)]);
var inst_19540 = inst_19563;
var state_19613__$1 = (function (){var statearr_19638 = state_19613;
(statearr_19638[(7)] = inst_19540);

return statearr_19638;
})();
var statearr_19639_20953 = state_19613__$1;
(statearr_19639_20953[(2)] = null);

(statearr_19639_20953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (29))){
var inst_19587 = (state_19613[(11)]);
var state_19613__$1 = state_19613;
var statearr_19640_20955 = state_19613__$1;
(statearr_19640_20955[(2)] = inst_19587);

(statearr_19640_20955[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (6))){
var state_19613__$1 = state_19613;
var statearr_19641_20959 = state_19613__$1;
(statearr_19641_20959[(2)] = false);

(statearr_19641_20959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (28))){
var inst_19583 = (state_19613[(2)]);
var inst_19584 = calc_state();
var inst_19540 = inst_19584;
var state_19613__$1 = (function (){var statearr_19642 = state_19613;
(statearr_19642[(7)] = inst_19540);

(statearr_19642[(15)] = inst_19583);

return statearr_19642;
})();
var statearr_19643_20960 = state_19613__$1;
(statearr_19643_20960[(2)] = null);

(statearr_19643_20960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (25))){
var inst_19609 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19644_20961 = state_19613__$1;
(statearr_19644_20961[(2)] = inst_19609);

(statearr_19644_20961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (34))){
var inst_19607 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19645_20962 = state_19613__$1;
(statearr_19645_20962[(2)] = inst_19607);

(statearr_19645_20962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (17))){
var state_19613__$1 = state_19613;
var statearr_19646_20963 = state_19613__$1;
(statearr_19646_20963[(2)] = false);

(statearr_19646_20963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (3))){
var state_19613__$1 = state_19613;
var statearr_19647_20964 = state_19613__$1;
(statearr_19647_20964[(2)] = false);

(statearr_19647_20964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (12))){
var inst_19611 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19613__$1,inst_19611);
} else {
if((state_val_19614 === (2))){
var inst_19515 = (state_19613[(8)]);
var inst_19520 = inst_19515.cljs$lang$protocol_mask$partition0$;
var inst_19521 = (inst_19520 & (64));
var inst_19522 = inst_19515.cljs$core$ISeq$;
var inst_19523 = (cljs.core.PROTOCOL_SENTINEL === inst_19522);
var inst_19524 = ((inst_19521) || (inst_19523));
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19524)){
var statearr_19648_20965 = state_19613__$1;
(statearr_19648_20965[(1)] = (5));

} else {
var statearr_19649_20966 = state_19613__$1;
(statearr_19649_20966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (23))){
var inst_19572 = (state_19613[(14)]);
var inst_19578 = (inst_19572 == null);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19578)){
var statearr_19650_20967 = state_19613__$1;
(statearr_19650_20967[(1)] = (26));

} else {
var statearr_19651_20968 = state_19613__$1;
(statearr_19651_20968[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (35))){
var inst_19598 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19598)){
var statearr_19652_20970 = state_19613__$1;
(statearr_19652_20970[(1)] = (36));

} else {
var statearr_19653_20971 = state_19613__$1;
(statearr_19653_20971[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (19))){
var inst_19540 = (state_19613[(7)]);
var inst_19560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19540);
var state_19613__$1 = state_19613;
var statearr_19654_20972 = state_19613__$1;
(statearr_19654_20972[(2)] = inst_19560);

(statearr_19654_20972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (11))){
var inst_19540 = (state_19613[(7)]);
var inst_19544 = (inst_19540 == null);
var inst_19545 = cljs.core.not(inst_19544);
var state_19613__$1 = state_19613;
if(inst_19545){
var statearr_19655_20973 = state_19613__$1;
(statearr_19655_20973[(1)] = (13));

} else {
var statearr_19656_20974 = state_19613__$1;
(statearr_19656_20974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (9))){
var inst_19515 = (state_19613[(8)]);
var state_19613__$1 = state_19613;
var statearr_19657_20975 = state_19613__$1;
(statearr_19657_20975[(2)] = inst_19515);

(statearr_19657_20975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (5))){
var state_19613__$1 = state_19613;
var statearr_19658_20976 = state_19613__$1;
(statearr_19658_20976[(2)] = true);

(statearr_19658_20976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (14))){
var state_19613__$1 = state_19613;
var statearr_19659_20977 = state_19613__$1;
(statearr_19659_20977[(2)] = false);

(statearr_19659_20977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (26))){
var inst_19573 = (state_19613[(10)]);
var inst_19580 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19573);
var state_19613__$1 = state_19613;
var statearr_19660_20978 = state_19613__$1;
(statearr_19660_20978[(2)] = inst_19580);

(statearr_19660_20978[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (16))){
var state_19613__$1 = state_19613;
var statearr_19661_20984 = state_19613__$1;
(statearr_19661_20984[(2)] = true);

(statearr_19661_20984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (38))){
var inst_19603 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19662_20987 = state_19613__$1;
(statearr_19662_20987[(2)] = inst_19603);

(statearr_19662_20987[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (30))){
var inst_19565 = (state_19613[(13)]);
var inst_19564 = (state_19613[(9)]);
var inst_19573 = (state_19613[(10)]);
var inst_19590 = cljs.core.empty_QMARK_(inst_19564);
var inst_19591 = (inst_19565.cljs$core$IFn$_invoke$arity$1 ? inst_19565.cljs$core$IFn$_invoke$arity$1(inst_19573) : inst_19565.call(null,inst_19573));
var inst_19592 = cljs.core.not(inst_19591);
var inst_19593 = ((inst_19590) && (inst_19592));
var state_19613__$1 = state_19613;
var statearr_19663_20988 = state_19613__$1;
(statearr_19663_20988[(2)] = inst_19593);

(statearr_19663_20988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (10))){
var inst_19515 = (state_19613[(8)]);
var inst_19536 = (state_19613[(2)]);
var inst_19537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19536,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19536,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19536,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19540 = inst_19515;
var state_19613__$1 = (function (){var statearr_19664 = state_19613;
(statearr_19664[(16)] = inst_19539);

(statearr_19664[(17)] = inst_19537);

(statearr_19664[(18)] = inst_19538);

(statearr_19664[(7)] = inst_19540);

return statearr_19664;
})();
var statearr_19665_20989 = state_19613__$1;
(statearr_19665_20989[(2)] = null);

(statearr_19665_20989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (18))){
var inst_19555 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19666_20990 = state_19613__$1;
(statearr_19666_20990[(2)] = inst_19555);

(statearr_19666_20990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (37))){
var state_19613__$1 = state_19613;
var statearr_19667_20991 = state_19613__$1;
(statearr_19667_20991[(2)] = null);

(statearr_19667_20991[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (8))){
var inst_19515 = (state_19613[(8)]);
var inst_19533 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19515);
var state_19613__$1 = state_19613;
var statearr_19668_20992 = state_19613__$1;
(statearr_19668_20992[(2)] = inst_19533);

(statearr_19668_20992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___20924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18716__auto__,c__18817__auto___20924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18717__auto__ = null;
var cljs$core$async$mix_$_state_machine__18717__auto____0 = (function (){
var statearr_19669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19669[(0)] = cljs$core$async$mix_$_state_machine__18717__auto__);

(statearr_19669[(1)] = (1));

return statearr_19669;
});
var cljs$core$async$mix_$_state_machine__18717__auto____1 = (function (state_19613){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19613);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19670){if((e19670 instanceof Object)){
var ex__18720__auto__ = e19670;
var statearr_19671_20994 = state_19613;
(statearr_19671_20994[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20995 = state_19613;
state_19613 = G__20995;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18717__auto__ = function(state_19613){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18717__auto____1.call(this,state_19613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18717__auto____0;
cljs$core$async$mix_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18717__auto____1;
return cljs$core$async$mix_$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___20924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18819__auto__ = (function (){var statearr_19672 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19672[(6)] = c__18817__auto___20924);

return statearr_19672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___20924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19674 = arguments.length;
switch (G__19674) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19677 = arguments.length;
switch (G__19677) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__19675_SHARP_){
if(cljs.core.truth_((p1__19675_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19675_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19675_SHARP_.call(null,topic)))){
return p1__19675_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19675_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19678 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19679){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19679 = meta19679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19680,meta19679__$1){
var self__ = this;
var _19680__$1 = this;
return (new cljs.core.async.t_cljs$core$async19678(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19679__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19680){
var self__ = this;
var _19680__$1 = this;
return self__.meta19679;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19678.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19678.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19678.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19678.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19679","meta19679",769590294,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19678";

cljs.core.async.t_cljs$core$async19678.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19678");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19678.
 */
cljs.core.async.__GT_t_cljs$core$async19678 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19679){
return (new cljs.core.async.t_cljs$core$async19678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19679));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19678(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18817__auto___21018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___21018,mults,ensure_mult,p){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___21018,mults,ensure_mult,p){
return (function (state_19752){
var state_val_19753 = (state_19752[(1)]);
if((state_val_19753 === (7))){
var inst_19748 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
var statearr_19754_21019 = state_19752__$1;
(statearr_19754_21019[(2)] = inst_19748);

(statearr_19754_21019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (20))){
var state_19752__$1 = state_19752;
var statearr_19755_21021 = state_19752__$1;
(statearr_19755_21021[(2)] = null);

(statearr_19755_21021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (1))){
var state_19752__$1 = state_19752;
var statearr_19756_21022 = state_19752__$1;
(statearr_19756_21022[(2)] = null);

(statearr_19756_21022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (24))){
var inst_19731 = (state_19752[(7)]);
var inst_19740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19731);
var state_19752__$1 = state_19752;
var statearr_19757_21024 = state_19752__$1;
(statearr_19757_21024[(2)] = inst_19740);

(statearr_19757_21024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (4))){
var inst_19683 = (state_19752[(8)]);
var inst_19683__$1 = (state_19752[(2)]);
var inst_19684 = (inst_19683__$1 == null);
var state_19752__$1 = (function (){var statearr_19758 = state_19752;
(statearr_19758[(8)] = inst_19683__$1);

return statearr_19758;
})();
if(cljs.core.truth_(inst_19684)){
var statearr_19759_21025 = state_19752__$1;
(statearr_19759_21025[(1)] = (5));

} else {
var statearr_19760_21026 = state_19752__$1;
(statearr_19760_21026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (15))){
var inst_19725 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
var statearr_19761_21027 = state_19752__$1;
(statearr_19761_21027[(2)] = inst_19725);

(statearr_19761_21027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (21))){
var inst_19745 = (state_19752[(2)]);
var state_19752__$1 = (function (){var statearr_19762 = state_19752;
(statearr_19762[(9)] = inst_19745);

return statearr_19762;
})();
var statearr_19763_21031 = state_19752__$1;
(statearr_19763_21031[(2)] = null);

(statearr_19763_21031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (13))){
var inst_19707 = (state_19752[(10)]);
var inst_19709 = cljs.core.chunked_seq_QMARK_(inst_19707);
var state_19752__$1 = state_19752;
if(inst_19709){
var statearr_19764_21036 = state_19752__$1;
(statearr_19764_21036[(1)] = (16));

} else {
var statearr_19765_21040 = state_19752__$1;
(statearr_19765_21040[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (22))){
var inst_19737 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
if(cljs.core.truth_(inst_19737)){
var statearr_19766_21041 = state_19752__$1;
(statearr_19766_21041[(1)] = (23));

} else {
var statearr_19767_21042 = state_19752__$1;
(statearr_19767_21042[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (6))){
var inst_19731 = (state_19752[(7)]);
var inst_19733 = (state_19752[(11)]);
var inst_19683 = (state_19752[(8)]);
var inst_19731__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19683) : topic_fn.call(null,inst_19683));
var inst_19732 = cljs.core.deref(mults);
var inst_19733__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19732,inst_19731__$1);
var state_19752__$1 = (function (){var statearr_19768 = state_19752;
(statearr_19768[(7)] = inst_19731__$1);

(statearr_19768[(11)] = inst_19733__$1);

return statearr_19768;
})();
if(cljs.core.truth_(inst_19733__$1)){
var statearr_19769_21046 = state_19752__$1;
(statearr_19769_21046[(1)] = (19));

} else {
var statearr_19770_21047 = state_19752__$1;
(statearr_19770_21047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (25))){
var inst_19742 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
var statearr_19771_21048 = state_19752__$1;
(statearr_19771_21048[(2)] = inst_19742);

(statearr_19771_21048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (17))){
var inst_19707 = (state_19752[(10)]);
var inst_19716 = cljs.core.first(inst_19707);
var inst_19717 = cljs.core.async.muxch_STAR_(inst_19716);
var inst_19718 = cljs.core.async.close_BANG_(inst_19717);
var inst_19719 = cljs.core.next(inst_19707);
var inst_19693 = inst_19719;
var inst_19694 = null;
var inst_19695 = (0);
var inst_19696 = (0);
var state_19752__$1 = (function (){var statearr_19772 = state_19752;
(statearr_19772[(12)] = inst_19718);

(statearr_19772[(13)] = inst_19695);

(statearr_19772[(14)] = inst_19694);

(statearr_19772[(15)] = inst_19693);

(statearr_19772[(16)] = inst_19696);

return statearr_19772;
})();
var statearr_19773_21050 = state_19752__$1;
(statearr_19773_21050[(2)] = null);

(statearr_19773_21050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (3))){
var inst_19750 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19752__$1,inst_19750);
} else {
if((state_val_19753 === (12))){
var inst_19727 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
var statearr_19774_21054 = state_19752__$1;
(statearr_19774_21054[(2)] = inst_19727);

(statearr_19774_21054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (2))){
var state_19752__$1 = state_19752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19752__$1,(4),ch);
} else {
if((state_val_19753 === (23))){
var state_19752__$1 = state_19752;
var statearr_19775_21061 = state_19752__$1;
(statearr_19775_21061[(2)] = null);

(statearr_19775_21061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (19))){
var inst_19733 = (state_19752[(11)]);
var inst_19683 = (state_19752[(8)]);
var inst_19735 = cljs.core.async.muxch_STAR_(inst_19733);
var state_19752__$1 = state_19752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19752__$1,(22),inst_19735,inst_19683);
} else {
if((state_val_19753 === (11))){
var inst_19693 = (state_19752[(15)]);
var inst_19707 = (state_19752[(10)]);
var inst_19707__$1 = cljs.core.seq(inst_19693);
var state_19752__$1 = (function (){var statearr_19776 = state_19752;
(statearr_19776[(10)] = inst_19707__$1);

return statearr_19776;
})();
if(inst_19707__$1){
var statearr_19777_21068 = state_19752__$1;
(statearr_19777_21068[(1)] = (13));

} else {
var statearr_19778_21069 = state_19752__$1;
(statearr_19778_21069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (9))){
var inst_19729 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
var statearr_19779_21070 = state_19752__$1;
(statearr_19779_21070[(2)] = inst_19729);

(statearr_19779_21070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (5))){
var inst_19690 = cljs.core.deref(mults);
var inst_19691 = cljs.core.vals(inst_19690);
var inst_19692 = cljs.core.seq(inst_19691);
var inst_19693 = inst_19692;
var inst_19694 = null;
var inst_19695 = (0);
var inst_19696 = (0);
var state_19752__$1 = (function (){var statearr_19780 = state_19752;
(statearr_19780[(13)] = inst_19695);

(statearr_19780[(14)] = inst_19694);

(statearr_19780[(15)] = inst_19693);

(statearr_19780[(16)] = inst_19696);

return statearr_19780;
})();
var statearr_19781_21071 = state_19752__$1;
(statearr_19781_21071[(2)] = null);

(statearr_19781_21071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (14))){
var state_19752__$1 = state_19752;
var statearr_19785_21072 = state_19752__$1;
(statearr_19785_21072[(2)] = null);

(statearr_19785_21072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (16))){
var inst_19707 = (state_19752[(10)]);
var inst_19711 = cljs.core.chunk_first(inst_19707);
var inst_19712 = cljs.core.chunk_rest(inst_19707);
var inst_19713 = cljs.core.count(inst_19711);
var inst_19693 = inst_19712;
var inst_19694 = inst_19711;
var inst_19695 = inst_19713;
var inst_19696 = (0);
var state_19752__$1 = (function (){var statearr_19786 = state_19752;
(statearr_19786[(13)] = inst_19695);

(statearr_19786[(14)] = inst_19694);

(statearr_19786[(15)] = inst_19693);

(statearr_19786[(16)] = inst_19696);

return statearr_19786;
})();
var statearr_19787_21079 = state_19752__$1;
(statearr_19787_21079[(2)] = null);

(statearr_19787_21079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (10))){
var inst_19695 = (state_19752[(13)]);
var inst_19694 = (state_19752[(14)]);
var inst_19693 = (state_19752[(15)]);
var inst_19696 = (state_19752[(16)]);
var inst_19701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19694,inst_19696);
var inst_19702 = cljs.core.async.muxch_STAR_(inst_19701);
var inst_19703 = cljs.core.async.close_BANG_(inst_19702);
var inst_19704 = (inst_19696 + (1));
var tmp19782 = inst_19695;
var tmp19783 = inst_19694;
var tmp19784 = inst_19693;
var inst_19693__$1 = tmp19784;
var inst_19694__$1 = tmp19783;
var inst_19695__$1 = tmp19782;
var inst_19696__$1 = inst_19704;
var state_19752__$1 = (function (){var statearr_19788 = state_19752;
(statearr_19788[(17)] = inst_19703);

(statearr_19788[(13)] = inst_19695__$1);

(statearr_19788[(14)] = inst_19694__$1);

(statearr_19788[(15)] = inst_19693__$1);

(statearr_19788[(16)] = inst_19696__$1);

return statearr_19788;
})();
var statearr_19789_21082 = state_19752__$1;
(statearr_19789_21082[(2)] = null);

(statearr_19789_21082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (18))){
var inst_19722 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
var statearr_19790_21087 = state_19752__$1;
(statearr_19790_21087[(2)] = inst_19722);

(statearr_19790_21087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (8))){
var inst_19695 = (state_19752[(13)]);
var inst_19696 = (state_19752[(16)]);
var inst_19698 = (inst_19696 < inst_19695);
var inst_19699 = inst_19698;
var state_19752__$1 = state_19752;
if(cljs.core.truth_(inst_19699)){
var statearr_19791_21090 = state_19752__$1;
(statearr_19791_21090[(1)] = (10));

} else {
var statearr_19792_21092 = state_19752__$1;
(statearr_19792_21092[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___21018,mults,ensure_mult,p))
;
return ((function (switch__18716__auto__,c__18817__auto___21018,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_19793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19793[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_19793[(1)] = (1));

return statearr_19793;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_19752){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19752);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19794){if((e19794 instanceof Object)){
var ex__18720__auto__ = e19794;
var statearr_19795_21099 = state_19752;
(statearr_19795_21099[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21101 = state_19752;
state_19752 = G__21101;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_19752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_19752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___21018,mults,ensure_mult,p))
})();
var state__18819__auto__ = (function (){var statearr_19796 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19796[(6)] = c__18817__auto___21018);

return statearr_19796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___21018,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19798 = arguments.length;
switch (G__19798) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19800 = arguments.length;
switch (G__19800) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19802 = arguments.length;
switch (G__19802) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__18817__auto___21130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___21130,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___21130,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19841){
var state_val_19842 = (state_19841[(1)]);
if((state_val_19842 === (7))){
var state_19841__$1 = state_19841;
var statearr_19843_21134 = state_19841__$1;
(statearr_19843_21134[(2)] = null);

(statearr_19843_21134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (1))){
var state_19841__$1 = state_19841;
var statearr_19844_21137 = state_19841__$1;
(statearr_19844_21137[(2)] = null);

(statearr_19844_21137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (4))){
var inst_19805 = (state_19841[(7)]);
var inst_19807 = (inst_19805 < cnt);
var state_19841__$1 = state_19841;
if(cljs.core.truth_(inst_19807)){
var statearr_19845_21146 = state_19841__$1;
(statearr_19845_21146[(1)] = (6));

} else {
var statearr_19846_21147 = state_19841__$1;
(statearr_19846_21147[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (15))){
var inst_19837 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19847_21148 = state_19841__$1;
(statearr_19847_21148[(2)] = inst_19837);

(statearr_19847_21148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (13))){
var inst_19830 = cljs.core.async.close_BANG_(out);
var state_19841__$1 = state_19841;
var statearr_19848_21149 = state_19841__$1;
(statearr_19848_21149[(2)] = inst_19830);

(statearr_19848_21149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (6))){
var state_19841__$1 = state_19841;
var statearr_19849_21150 = state_19841__$1;
(statearr_19849_21150[(2)] = null);

(statearr_19849_21150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (3))){
var inst_19839 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19841__$1,inst_19839);
} else {
if((state_val_19842 === (12))){
var inst_19827 = (state_19841[(8)]);
var inst_19827__$1 = (state_19841[(2)]);
var inst_19828 = cljs.core.some(cljs.core.nil_QMARK_,inst_19827__$1);
var state_19841__$1 = (function (){var statearr_19850 = state_19841;
(statearr_19850[(8)] = inst_19827__$1);

return statearr_19850;
})();
if(cljs.core.truth_(inst_19828)){
var statearr_19851_21153 = state_19841__$1;
(statearr_19851_21153[(1)] = (13));

} else {
var statearr_19852_21154 = state_19841__$1;
(statearr_19852_21154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (2))){
var inst_19804 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19805 = (0);
var state_19841__$1 = (function (){var statearr_19853 = state_19841;
(statearr_19853[(7)] = inst_19805);

(statearr_19853[(9)] = inst_19804);

return statearr_19853;
})();
var statearr_19854_21157 = state_19841__$1;
(statearr_19854_21157[(2)] = null);

(statearr_19854_21157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (11))){
var inst_19805 = (state_19841[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19841,(10),Object,null,(9));
var inst_19814 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19805) : chs__$1.call(null,inst_19805));
var inst_19815 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19805) : done.call(null,inst_19805));
var inst_19816 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19814,inst_19815);
var state_19841__$1 = state_19841;
var statearr_19855_21159 = state_19841__$1;
(statearr_19855_21159[(2)] = inst_19816);


cljs.core.async.impl.ioc_helpers.process_exception(state_19841__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (9))){
var inst_19805 = (state_19841[(7)]);
var inst_19818 = (state_19841[(2)]);
var inst_19819 = (inst_19805 + (1));
var inst_19805__$1 = inst_19819;
var state_19841__$1 = (function (){var statearr_19856 = state_19841;
(statearr_19856[(10)] = inst_19818);

(statearr_19856[(7)] = inst_19805__$1);

return statearr_19856;
})();
var statearr_19857_21162 = state_19841__$1;
(statearr_19857_21162[(2)] = null);

(statearr_19857_21162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (5))){
var inst_19825 = (state_19841[(2)]);
var state_19841__$1 = (function (){var statearr_19858 = state_19841;
(statearr_19858[(11)] = inst_19825);

return statearr_19858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19841__$1,(12),dchan);
} else {
if((state_val_19842 === (14))){
var inst_19827 = (state_19841[(8)]);
var inst_19832 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19827);
var state_19841__$1 = state_19841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19841__$1,(16),out,inst_19832);
} else {
if((state_val_19842 === (16))){
var inst_19834 = (state_19841[(2)]);
var state_19841__$1 = (function (){var statearr_19859 = state_19841;
(statearr_19859[(12)] = inst_19834);

return statearr_19859;
})();
var statearr_19860_21163 = state_19841__$1;
(statearr_19860_21163[(2)] = null);

(statearr_19860_21163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (10))){
var inst_19809 = (state_19841[(2)]);
var inst_19810 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19841__$1 = (function (){var statearr_19861 = state_19841;
(statearr_19861[(13)] = inst_19809);

return statearr_19861;
})();
var statearr_19862_21164 = state_19841__$1;
(statearr_19862_21164[(2)] = inst_19810);


cljs.core.async.impl.ioc_helpers.process_exception(state_19841__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (8))){
var inst_19823 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19863_21165 = state_19841__$1;
(statearr_19863_21165[(2)] = inst_19823);

(statearr_19863_21165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___21130,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18716__auto__,c__18817__auto___21130,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_19864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19864[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_19864[(1)] = (1));

return statearr_19864;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_19841){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19841);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19865){if((e19865 instanceof Object)){
var ex__18720__auto__ = e19865;
var statearr_19866_21166 = state_19841;
(statearr_19866_21166[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21167 = state_19841;
state_19841 = G__21167;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_19841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_19841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___21130,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18819__auto__ = (function (){var statearr_19867 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19867[(6)] = c__18817__auto___21130);

return statearr_19867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___21130,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19870 = arguments.length;
switch (G__19870) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18817__auto___21174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___21174,out){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___21174,out){
return (function (state_19902){
var state_val_19903 = (state_19902[(1)]);
if((state_val_19903 === (7))){
var inst_19881 = (state_19902[(7)]);
var inst_19882 = (state_19902[(8)]);
var inst_19881__$1 = (state_19902[(2)]);
var inst_19882__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19881__$1,(0),null);
var inst_19883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19881__$1,(1),null);
var inst_19884 = (inst_19882__$1 == null);
var state_19902__$1 = (function (){var statearr_19904 = state_19902;
(statearr_19904[(9)] = inst_19883);

(statearr_19904[(7)] = inst_19881__$1);

(statearr_19904[(8)] = inst_19882__$1);

return statearr_19904;
})();
if(cljs.core.truth_(inst_19884)){
var statearr_19905_21176 = state_19902__$1;
(statearr_19905_21176[(1)] = (8));

} else {
var statearr_19906_21177 = state_19902__$1;
(statearr_19906_21177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (1))){
var inst_19871 = cljs.core.vec(chs);
var inst_19872 = inst_19871;
var state_19902__$1 = (function (){var statearr_19907 = state_19902;
(statearr_19907[(10)] = inst_19872);

return statearr_19907;
})();
var statearr_19908_21178 = state_19902__$1;
(statearr_19908_21178[(2)] = null);

(statearr_19908_21178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (4))){
var inst_19872 = (state_19902[(10)]);
var state_19902__$1 = state_19902;
return cljs.core.async.ioc_alts_BANG_(state_19902__$1,(7),inst_19872);
} else {
if((state_val_19903 === (6))){
var inst_19898 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19909_21182 = state_19902__$1;
(statearr_19909_21182[(2)] = inst_19898);

(statearr_19909_21182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (3))){
var inst_19900 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19902__$1,inst_19900);
} else {
if((state_val_19903 === (2))){
var inst_19872 = (state_19902[(10)]);
var inst_19874 = cljs.core.count(inst_19872);
var inst_19875 = (inst_19874 > (0));
var state_19902__$1 = state_19902;
if(cljs.core.truth_(inst_19875)){
var statearr_19911_21184 = state_19902__$1;
(statearr_19911_21184[(1)] = (4));

} else {
var statearr_19912_21185 = state_19902__$1;
(statearr_19912_21185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (11))){
var inst_19872 = (state_19902[(10)]);
var inst_19891 = (state_19902[(2)]);
var tmp19910 = inst_19872;
var inst_19872__$1 = tmp19910;
var state_19902__$1 = (function (){var statearr_19913 = state_19902;
(statearr_19913[(11)] = inst_19891);

(statearr_19913[(10)] = inst_19872__$1);

return statearr_19913;
})();
var statearr_19914_21186 = state_19902__$1;
(statearr_19914_21186[(2)] = null);

(statearr_19914_21186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (9))){
var inst_19882 = (state_19902[(8)]);
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19902__$1,(11),out,inst_19882);
} else {
if((state_val_19903 === (5))){
var inst_19896 = cljs.core.async.close_BANG_(out);
var state_19902__$1 = state_19902;
var statearr_19915_21187 = state_19902__$1;
(statearr_19915_21187[(2)] = inst_19896);

(statearr_19915_21187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (10))){
var inst_19894 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19916_21189 = state_19902__$1;
(statearr_19916_21189[(2)] = inst_19894);

(statearr_19916_21189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (8))){
var inst_19883 = (state_19902[(9)]);
var inst_19881 = (state_19902[(7)]);
var inst_19882 = (state_19902[(8)]);
var inst_19872 = (state_19902[(10)]);
var inst_19886 = (function (){var cs = inst_19872;
var vec__19877 = inst_19881;
var v = inst_19882;
var c = inst_19883;
return ((function (cs,vec__19877,v,c,inst_19883,inst_19881,inst_19882,inst_19872,state_val_19903,c__18817__auto___21174,out){
return (function (p1__19868_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19868_SHARP_);
});
;})(cs,vec__19877,v,c,inst_19883,inst_19881,inst_19882,inst_19872,state_val_19903,c__18817__auto___21174,out))
})();
var inst_19887 = cljs.core.filterv(inst_19886,inst_19872);
var inst_19872__$1 = inst_19887;
var state_19902__$1 = (function (){var statearr_19917 = state_19902;
(statearr_19917[(10)] = inst_19872__$1);

return statearr_19917;
})();
var statearr_19918_21190 = state_19902__$1;
(statearr_19918_21190[(2)] = null);

(statearr_19918_21190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___21174,out))
;
return ((function (switch__18716__auto__,c__18817__auto___21174,out){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_19919 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19919[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_19919[(1)] = (1));

return statearr_19919;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_19902){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19902);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19920){if((e19920 instanceof Object)){
var ex__18720__auto__ = e19920;
var statearr_19921_21192 = state_19902;
(statearr_19921_21192[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19920;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21193 = state_19902;
state_19902 = G__21193;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_19902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_19902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___21174,out))
})();
var state__18819__auto__ = (function (){var statearr_19922 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19922[(6)] = c__18817__auto___21174);

return statearr_19922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___21174,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19924 = arguments.length;
switch (G__19924) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18817__auto___21195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___21195,out){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___21195,out){
return (function (state_19948){
var state_val_19949 = (state_19948[(1)]);
if((state_val_19949 === (7))){
var inst_19930 = (state_19948[(7)]);
var inst_19930__$1 = (state_19948[(2)]);
var inst_19931 = (inst_19930__$1 == null);
var inst_19932 = cljs.core.not(inst_19931);
var state_19948__$1 = (function (){var statearr_19950 = state_19948;
(statearr_19950[(7)] = inst_19930__$1);

return statearr_19950;
})();
if(inst_19932){
var statearr_19951_21200 = state_19948__$1;
(statearr_19951_21200[(1)] = (8));

} else {
var statearr_19952_21201 = state_19948__$1;
(statearr_19952_21201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (1))){
var inst_19925 = (0);
var state_19948__$1 = (function (){var statearr_19953 = state_19948;
(statearr_19953[(8)] = inst_19925);

return statearr_19953;
})();
var statearr_19954_21206 = state_19948__$1;
(statearr_19954_21206[(2)] = null);

(statearr_19954_21206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (4))){
var state_19948__$1 = state_19948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19948__$1,(7),ch);
} else {
if((state_val_19949 === (6))){
var inst_19943 = (state_19948[(2)]);
var state_19948__$1 = state_19948;
var statearr_19955_21212 = state_19948__$1;
(statearr_19955_21212[(2)] = inst_19943);

(statearr_19955_21212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (3))){
var inst_19945 = (state_19948[(2)]);
var inst_19946 = cljs.core.async.close_BANG_(out);
var state_19948__$1 = (function (){var statearr_19956 = state_19948;
(statearr_19956[(9)] = inst_19945);

return statearr_19956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19948__$1,inst_19946);
} else {
if((state_val_19949 === (2))){
var inst_19925 = (state_19948[(8)]);
var inst_19927 = (inst_19925 < n);
var state_19948__$1 = state_19948;
if(cljs.core.truth_(inst_19927)){
var statearr_19957_21220 = state_19948__$1;
(statearr_19957_21220[(1)] = (4));

} else {
var statearr_19958_21221 = state_19948__$1;
(statearr_19958_21221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (11))){
var inst_19925 = (state_19948[(8)]);
var inst_19935 = (state_19948[(2)]);
var inst_19936 = (inst_19925 + (1));
var inst_19925__$1 = inst_19936;
var state_19948__$1 = (function (){var statearr_19959 = state_19948;
(statearr_19959[(8)] = inst_19925__$1);

(statearr_19959[(10)] = inst_19935);

return statearr_19959;
})();
var statearr_19960_21223 = state_19948__$1;
(statearr_19960_21223[(2)] = null);

(statearr_19960_21223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (9))){
var state_19948__$1 = state_19948;
var statearr_19961_21224 = state_19948__$1;
(statearr_19961_21224[(2)] = null);

(statearr_19961_21224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (5))){
var state_19948__$1 = state_19948;
var statearr_19962_21225 = state_19948__$1;
(statearr_19962_21225[(2)] = null);

(statearr_19962_21225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (10))){
var inst_19940 = (state_19948[(2)]);
var state_19948__$1 = state_19948;
var statearr_19963_21226 = state_19948__$1;
(statearr_19963_21226[(2)] = inst_19940);

(statearr_19963_21226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (8))){
var inst_19930 = (state_19948[(7)]);
var state_19948__$1 = state_19948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19948__$1,(11),out,inst_19930);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___21195,out))
;
return ((function (switch__18716__auto__,c__18817__auto___21195,out){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_19964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19964[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_19964[(1)] = (1));

return statearr_19964;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_19948){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_19948);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e19965){if((e19965 instanceof Object)){
var ex__18720__auto__ = e19965;
var statearr_19966_21231 = state_19948;
(statearr_19966_21231[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21236 = state_19948;
state_19948 = G__21236;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_19948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_19948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___21195,out))
})();
var state__18819__auto__ = (function (){var statearr_19967 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_19967[(6)] = c__18817__auto___21195);

return statearr_19967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___21195,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19969 = (function (f,ch,meta19970){
this.f = f;
this.ch = ch;
this.meta19970 = meta19970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19971,meta19970__$1){
var self__ = this;
var _19971__$1 = this;
return (new cljs.core.async.t_cljs$core$async19969(self__.f,self__.ch,meta19970__$1));
});

cljs.core.async.t_cljs$core$async19969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19971){
var self__ = this;
var _19971__$1 = this;
return self__.meta19970;
});

cljs.core.async.t_cljs$core$async19969.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19969.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19969.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19972 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19972 = (function (f,ch,meta19970,_,fn1,meta19973){
this.f = f;
this.ch = ch;
this.meta19970 = meta19970;
this._ = _;
this.fn1 = fn1;
this.meta19973 = meta19973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19974,meta19973__$1){
var self__ = this;
var _19974__$1 = this;
return (new cljs.core.async.t_cljs$core$async19972(self__.f,self__.ch,self__.meta19970,self__._,self__.fn1,meta19973__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19974){
var self__ = this;
var _19974__$1 = this;
return self__.meta19973;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19972.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19968_SHARP_){
var G__19975 = (((p1__19968_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19968_SHARP_) : self__.f.call(null,p1__19968_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19975) : f1.call(null,G__19975));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19972.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19970","meta19970",2061035713,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19969","cljs.core.async/t_cljs$core$async19969",-1211948236,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19973","meta19973",-909415980,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19972";

cljs.core.async.t_cljs$core$async19972.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19972");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19972.
 */
cljs.core.async.__GT_t_cljs$core$async19972 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19972(f__$1,ch__$1,meta19970__$1,___$2,fn1__$1,meta19973){
return (new cljs.core.async.t_cljs$core$async19972(f__$1,ch__$1,meta19970__$1,___$2,fn1__$1,meta19973));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19972(self__.f,self__.ch,self__.meta19970,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19976 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19976) : self__.f.call(null,G__19976));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19969.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19970","meta19970",2061035713,null)], null);
});

cljs.core.async.t_cljs$core$async19969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19969";

cljs.core.async.t_cljs$core$async19969.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19969");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19969.
 */
cljs.core.async.__GT_t_cljs$core$async19969 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19969(f__$1,ch__$1,meta19970){
return (new cljs.core.async.t_cljs$core$async19969(f__$1,ch__$1,meta19970));
});

}

return (new cljs.core.async.t_cljs$core$async19969(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19977 = (function (f,ch,meta19978){
this.f = f;
this.ch = ch;
this.meta19978 = meta19978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19979,meta19978__$1){
var self__ = this;
var _19979__$1 = this;
return (new cljs.core.async.t_cljs$core$async19977(self__.f,self__.ch,meta19978__$1));
});

cljs.core.async.t_cljs$core$async19977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19979){
var self__ = this;
var _19979__$1 = this;
return self__.meta19978;
});

cljs.core.async.t_cljs$core$async19977.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19977.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19977.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19978","meta19978",2126670104,null)], null);
});

cljs.core.async.t_cljs$core$async19977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19977";

cljs.core.async.t_cljs$core$async19977.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19977");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19977.
 */
cljs.core.async.__GT_t_cljs$core$async19977 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19977(f__$1,ch__$1,meta19978){
return (new cljs.core.async.t_cljs$core$async19977(f__$1,ch__$1,meta19978));
});

}

return (new cljs.core.async.t_cljs$core$async19977(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19980 = (function (p,ch,meta19981){
this.p = p;
this.ch = ch;
this.meta19981 = meta19981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19982,meta19981__$1){
var self__ = this;
var _19982__$1 = this;
return (new cljs.core.async.t_cljs$core$async19980(self__.p,self__.ch,meta19981__$1));
});

cljs.core.async.t_cljs$core$async19980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19982){
var self__ = this;
var _19982__$1 = this;
return self__.meta19981;
});

cljs.core.async.t_cljs$core$async19980.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19980.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19980.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19980.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19980.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19980.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19980.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19981","meta19981",877315282,null)], null);
});

cljs.core.async.t_cljs$core$async19980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19980";

cljs.core.async.t_cljs$core$async19980.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19980");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19980.
 */
cljs.core.async.__GT_t_cljs$core$async19980 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19980(p__$1,ch__$1,meta19981){
return (new cljs.core.async.t_cljs$core$async19980(p__$1,ch__$1,meta19981));
});

}

return (new cljs.core.async.t_cljs$core$async19980(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19984 = arguments.length;
switch (G__19984) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18817__auto___21286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___21286,out){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___21286,out){
return (function (state_20005){
var state_val_20006 = (state_20005[(1)]);
if((state_val_20006 === (7))){
var inst_20001 = (state_20005[(2)]);
var state_20005__$1 = state_20005;
var statearr_20007_21290 = state_20005__$1;
(statearr_20007_21290[(2)] = inst_20001);

(statearr_20007_21290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20006 === (1))){
var state_20005__$1 = state_20005;
var statearr_20008_21291 = state_20005__$1;
(statearr_20008_21291[(2)] = null);

(statearr_20008_21291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20006 === (4))){
var inst_19987 = (state_20005[(7)]);
var inst_19987__$1 = (state_20005[(2)]);
var inst_19988 = (inst_19987__$1 == null);
var state_20005__$1 = (function (){var statearr_20009 = state_20005;
(statearr_20009[(7)] = inst_19987__$1);

return statearr_20009;
})();
if(cljs.core.truth_(inst_19988)){
var statearr_20010_21297 = state_20005__$1;
(statearr_20010_21297[(1)] = (5));

} else {
var statearr_20011_21298 = state_20005__$1;
(statearr_20011_21298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20006 === (6))){
var inst_19987 = (state_20005[(7)]);
var inst_19992 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19987) : p.call(null,inst_19987));
var state_20005__$1 = state_20005;
if(cljs.core.truth_(inst_19992)){
var statearr_20012_21306 = state_20005__$1;
(statearr_20012_21306[(1)] = (8));

} else {
var statearr_20013_21307 = state_20005__$1;
(statearr_20013_21307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20006 === (3))){
var inst_20003 = (state_20005[(2)]);
var state_20005__$1 = state_20005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20005__$1,inst_20003);
} else {
if((state_val_20006 === (2))){
var state_20005__$1 = state_20005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20005__$1,(4),ch);
} else {
if((state_val_20006 === (11))){
var inst_19995 = (state_20005[(2)]);
var state_20005__$1 = state_20005;
var statearr_20014_21317 = state_20005__$1;
(statearr_20014_21317[(2)] = inst_19995);

(statearr_20014_21317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20006 === (9))){
var state_20005__$1 = state_20005;
var statearr_20015_21326 = state_20005__$1;
(statearr_20015_21326[(2)] = null);

(statearr_20015_21326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20006 === (5))){
var inst_19990 = cljs.core.async.close_BANG_(out);
var state_20005__$1 = state_20005;
var statearr_20016_21328 = state_20005__$1;
(statearr_20016_21328[(2)] = inst_19990);

(statearr_20016_21328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20006 === (10))){
var inst_19998 = (state_20005[(2)]);
var state_20005__$1 = (function (){var statearr_20017 = state_20005;
(statearr_20017[(8)] = inst_19998);

return statearr_20017;
})();
var statearr_20018_21337 = state_20005__$1;
(statearr_20018_21337[(2)] = null);

(statearr_20018_21337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20006 === (8))){
var inst_19987 = (state_20005[(7)]);
var state_20005__$1 = state_20005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20005__$1,(11),out,inst_19987);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___21286,out))
;
return ((function (switch__18716__auto__,c__18817__auto___21286,out){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_20019 = [null,null,null,null,null,null,null,null,null];
(statearr_20019[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_20019[(1)] = (1));

return statearr_20019;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_20005){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_20005);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e20020){if((e20020 instanceof Object)){
var ex__18720__auto__ = e20020;
var statearr_20021_21360 = state_20005;
(statearr_20021_21360[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21367 = state_20005;
state_20005 = G__21367;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_20005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_20005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___21286,out))
})();
var state__18819__auto__ = (function (){var statearr_20022 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_20022[(6)] = c__18817__auto___21286);

return statearr_20022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___21286,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20024 = arguments.length;
switch (G__20024) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto__){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto__){
return (function (state_20086){
var state_val_20087 = (state_20086[(1)]);
if((state_val_20087 === (7))){
var inst_20082 = (state_20086[(2)]);
var state_20086__$1 = state_20086;
var statearr_20088_21397 = state_20086__$1;
(statearr_20088_21397[(2)] = inst_20082);

(statearr_20088_21397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (20))){
var inst_20052 = (state_20086[(7)]);
var inst_20063 = (state_20086[(2)]);
var inst_20064 = cljs.core.next(inst_20052);
var inst_20038 = inst_20064;
var inst_20039 = null;
var inst_20040 = (0);
var inst_20041 = (0);
var state_20086__$1 = (function (){var statearr_20089 = state_20086;
(statearr_20089[(8)] = inst_20063);

(statearr_20089[(9)] = inst_20040);

(statearr_20089[(10)] = inst_20039);

(statearr_20089[(11)] = inst_20041);

(statearr_20089[(12)] = inst_20038);

return statearr_20089;
})();
var statearr_20090_21403 = state_20086__$1;
(statearr_20090_21403[(2)] = null);

(statearr_20090_21403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (1))){
var state_20086__$1 = state_20086;
var statearr_20091_21404 = state_20086__$1;
(statearr_20091_21404[(2)] = null);

(statearr_20091_21404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (4))){
var inst_20027 = (state_20086[(13)]);
var inst_20027__$1 = (state_20086[(2)]);
var inst_20028 = (inst_20027__$1 == null);
var state_20086__$1 = (function (){var statearr_20092 = state_20086;
(statearr_20092[(13)] = inst_20027__$1);

return statearr_20092;
})();
if(cljs.core.truth_(inst_20028)){
var statearr_20093_21412 = state_20086__$1;
(statearr_20093_21412[(1)] = (5));

} else {
var statearr_20094_21413 = state_20086__$1;
(statearr_20094_21413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (15))){
var state_20086__$1 = state_20086;
var statearr_20098_21418 = state_20086__$1;
(statearr_20098_21418[(2)] = null);

(statearr_20098_21418[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (21))){
var state_20086__$1 = state_20086;
var statearr_20099_21423 = state_20086__$1;
(statearr_20099_21423[(2)] = null);

(statearr_20099_21423[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (13))){
var inst_20040 = (state_20086[(9)]);
var inst_20039 = (state_20086[(10)]);
var inst_20041 = (state_20086[(11)]);
var inst_20038 = (state_20086[(12)]);
var inst_20048 = (state_20086[(2)]);
var inst_20049 = (inst_20041 + (1));
var tmp20095 = inst_20040;
var tmp20096 = inst_20039;
var tmp20097 = inst_20038;
var inst_20038__$1 = tmp20097;
var inst_20039__$1 = tmp20096;
var inst_20040__$1 = tmp20095;
var inst_20041__$1 = inst_20049;
var state_20086__$1 = (function (){var statearr_20100 = state_20086;
(statearr_20100[(14)] = inst_20048);

(statearr_20100[(9)] = inst_20040__$1);

(statearr_20100[(10)] = inst_20039__$1);

(statearr_20100[(11)] = inst_20041__$1);

(statearr_20100[(12)] = inst_20038__$1);

return statearr_20100;
})();
var statearr_20101_21430 = state_20086__$1;
(statearr_20101_21430[(2)] = null);

(statearr_20101_21430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (22))){
var state_20086__$1 = state_20086;
var statearr_20102_21431 = state_20086__$1;
(statearr_20102_21431[(2)] = null);

(statearr_20102_21431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (6))){
var inst_20027 = (state_20086[(13)]);
var inst_20036 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20027) : f.call(null,inst_20027));
var inst_20037 = cljs.core.seq(inst_20036);
var inst_20038 = inst_20037;
var inst_20039 = null;
var inst_20040 = (0);
var inst_20041 = (0);
var state_20086__$1 = (function (){var statearr_20103 = state_20086;
(statearr_20103[(9)] = inst_20040);

(statearr_20103[(10)] = inst_20039);

(statearr_20103[(11)] = inst_20041);

(statearr_20103[(12)] = inst_20038);

return statearr_20103;
})();
var statearr_20104_21433 = state_20086__$1;
(statearr_20104_21433[(2)] = null);

(statearr_20104_21433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (17))){
var inst_20052 = (state_20086[(7)]);
var inst_20056 = cljs.core.chunk_first(inst_20052);
var inst_20057 = cljs.core.chunk_rest(inst_20052);
var inst_20058 = cljs.core.count(inst_20056);
var inst_20038 = inst_20057;
var inst_20039 = inst_20056;
var inst_20040 = inst_20058;
var inst_20041 = (0);
var state_20086__$1 = (function (){var statearr_20105 = state_20086;
(statearr_20105[(9)] = inst_20040);

(statearr_20105[(10)] = inst_20039);

(statearr_20105[(11)] = inst_20041);

(statearr_20105[(12)] = inst_20038);

return statearr_20105;
})();
var statearr_20106_21438 = state_20086__$1;
(statearr_20106_21438[(2)] = null);

(statearr_20106_21438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (3))){
var inst_20084 = (state_20086[(2)]);
var state_20086__$1 = state_20086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20086__$1,inst_20084);
} else {
if((state_val_20087 === (12))){
var inst_20072 = (state_20086[(2)]);
var state_20086__$1 = state_20086;
var statearr_20107_21441 = state_20086__$1;
(statearr_20107_21441[(2)] = inst_20072);

(statearr_20107_21441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (2))){
var state_20086__$1 = state_20086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20086__$1,(4),in$);
} else {
if((state_val_20087 === (23))){
var inst_20080 = (state_20086[(2)]);
var state_20086__$1 = state_20086;
var statearr_20108_21443 = state_20086__$1;
(statearr_20108_21443[(2)] = inst_20080);

(statearr_20108_21443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (19))){
var inst_20067 = (state_20086[(2)]);
var state_20086__$1 = state_20086;
var statearr_20109_21447 = state_20086__$1;
(statearr_20109_21447[(2)] = inst_20067);

(statearr_20109_21447[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (11))){
var inst_20052 = (state_20086[(7)]);
var inst_20038 = (state_20086[(12)]);
var inst_20052__$1 = cljs.core.seq(inst_20038);
var state_20086__$1 = (function (){var statearr_20110 = state_20086;
(statearr_20110[(7)] = inst_20052__$1);

return statearr_20110;
})();
if(inst_20052__$1){
var statearr_20111_21448 = state_20086__$1;
(statearr_20111_21448[(1)] = (14));

} else {
var statearr_20112_21449 = state_20086__$1;
(statearr_20112_21449[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (9))){
var inst_20074 = (state_20086[(2)]);
var inst_20075 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20086__$1 = (function (){var statearr_20113 = state_20086;
(statearr_20113[(15)] = inst_20074);

return statearr_20113;
})();
if(cljs.core.truth_(inst_20075)){
var statearr_20114_21450 = state_20086__$1;
(statearr_20114_21450[(1)] = (21));

} else {
var statearr_20115_21453 = state_20086__$1;
(statearr_20115_21453[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (5))){
var inst_20030 = cljs.core.async.close_BANG_(out);
var state_20086__$1 = state_20086;
var statearr_20116_21455 = state_20086__$1;
(statearr_20116_21455[(2)] = inst_20030);

(statearr_20116_21455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (14))){
var inst_20052 = (state_20086[(7)]);
var inst_20054 = cljs.core.chunked_seq_QMARK_(inst_20052);
var state_20086__$1 = state_20086;
if(inst_20054){
var statearr_20117_21460 = state_20086__$1;
(statearr_20117_21460[(1)] = (17));

} else {
var statearr_20118_21461 = state_20086__$1;
(statearr_20118_21461[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (16))){
var inst_20070 = (state_20086[(2)]);
var state_20086__$1 = state_20086;
var statearr_20119_21463 = state_20086__$1;
(statearr_20119_21463[(2)] = inst_20070);

(statearr_20119_21463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20087 === (10))){
var inst_20039 = (state_20086[(10)]);
var inst_20041 = (state_20086[(11)]);
var inst_20046 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20039,inst_20041);
var state_20086__$1 = state_20086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20086__$1,(13),out,inst_20046);
} else {
if((state_val_20087 === (18))){
var inst_20052 = (state_20086[(7)]);
var inst_20061 = cljs.core.first(inst_20052);
var state_20086__$1 = state_20086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20086__$1,(20),out,inst_20061);
} else {
if((state_val_20087 === (8))){
var inst_20040 = (state_20086[(9)]);
var inst_20041 = (state_20086[(11)]);
var inst_20043 = (inst_20041 < inst_20040);
var inst_20044 = inst_20043;
var state_20086__$1 = state_20086;
if(cljs.core.truth_(inst_20044)){
var statearr_20120_21483 = state_20086__$1;
(statearr_20120_21483[(1)] = (10));

} else {
var statearr_20121_21484 = state_20086__$1;
(statearr_20121_21484[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto__))
;
return ((function (switch__18716__auto__,c__18817__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18717__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18717__auto____0 = (function (){
var statearr_20122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20122[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18717__auto__);

(statearr_20122[(1)] = (1));

return statearr_20122;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18717__auto____1 = (function (state_20086){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_20086);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e20123){if((e20123 instanceof Object)){
var ex__18720__auto__ = e20123;
var statearr_20124_21492 = state_20086;
(statearr_20124_21492[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21502 = state_20086;
state_20086 = G__21502;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18717__auto__ = function(state_20086){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18717__auto____1.call(this,state_20086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18717__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18717__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto__))
})();
var state__18819__auto__ = (function (){var statearr_20125 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_20125[(6)] = c__18817__auto__);

return statearr_20125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto__))
);

return c__18817__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20127 = arguments.length;
switch (G__20127) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20129 = arguments.length;
switch (G__20129) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20131 = arguments.length;
switch (G__20131) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18817__auto___21519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___21519,out){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___21519,out){
return (function (state_20155){
var state_val_20156 = (state_20155[(1)]);
if((state_val_20156 === (7))){
var inst_20150 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
var statearr_20157_21520 = state_20155__$1;
(statearr_20157_21520[(2)] = inst_20150);

(statearr_20157_21520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (1))){
var inst_20132 = null;
var state_20155__$1 = (function (){var statearr_20158 = state_20155;
(statearr_20158[(7)] = inst_20132);

return statearr_20158;
})();
var statearr_20159_21523 = state_20155__$1;
(statearr_20159_21523[(2)] = null);

(statearr_20159_21523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (4))){
var inst_20135 = (state_20155[(8)]);
var inst_20135__$1 = (state_20155[(2)]);
var inst_20136 = (inst_20135__$1 == null);
var inst_20137 = cljs.core.not(inst_20136);
var state_20155__$1 = (function (){var statearr_20160 = state_20155;
(statearr_20160[(8)] = inst_20135__$1);

return statearr_20160;
})();
if(inst_20137){
var statearr_20161_21531 = state_20155__$1;
(statearr_20161_21531[(1)] = (5));

} else {
var statearr_20162_21532 = state_20155__$1;
(statearr_20162_21532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (6))){
var state_20155__$1 = state_20155;
var statearr_20163_21538 = state_20155__$1;
(statearr_20163_21538[(2)] = null);

(statearr_20163_21538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (3))){
var inst_20152 = (state_20155[(2)]);
var inst_20153 = cljs.core.async.close_BANG_(out);
var state_20155__$1 = (function (){var statearr_20164 = state_20155;
(statearr_20164[(9)] = inst_20152);

return statearr_20164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20155__$1,inst_20153);
} else {
if((state_val_20156 === (2))){
var state_20155__$1 = state_20155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20155__$1,(4),ch);
} else {
if((state_val_20156 === (11))){
var inst_20135 = (state_20155[(8)]);
var inst_20144 = (state_20155[(2)]);
var inst_20132 = inst_20135;
var state_20155__$1 = (function (){var statearr_20165 = state_20155;
(statearr_20165[(7)] = inst_20132);

(statearr_20165[(10)] = inst_20144);

return statearr_20165;
})();
var statearr_20166_21547 = state_20155__$1;
(statearr_20166_21547[(2)] = null);

(statearr_20166_21547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (9))){
var inst_20135 = (state_20155[(8)]);
var state_20155__$1 = state_20155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20155__$1,(11),out,inst_20135);
} else {
if((state_val_20156 === (5))){
var inst_20132 = (state_20155[(7)]);
var inst_20135 = (state_20155[(8)]);
var inst_20139 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20135,inst_20132);
var state_20155__$1 = state_20155;
if(inst_20139){
var statearr_20168_21557 = state_20155__$1;
(statearr_20168_21557[(1)] = (8));

} else {
var statearr_20169_21558 = state_20155__$1;
(statearr_20169_21558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (10))){
var inst_20147 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
var statearr_20170_21562 = state_20155__$1;
(statearr_20170_21562[(2)] = inst_20147);

(statearr_20170_21562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (8))){
var inst_20132 = (state_20155[(7)]);
var tmp20167 = inst_20132;
var inst_20132__$1 = tmp20167;
var state_20155__$1 = (function (){var statearr_20171 = state_20155;
(statearr_20171[(7)] = inst_20132__$1);

return statearr_20171;
})();
var statearr_20172_21563 = state_20155__$1;
(statearr_20172_21563[(2)] = null);

(statearr_20172_21563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___21519,out))
;
return ((function (switch__18716__auto__,c__18817__auto___21519,out){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_20173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20173[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_20173[(1)] = (1));

return statearr_20173;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_20155){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_20155);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e20174){if((e20174 instanceof Object)){
var ex__18720__auto__ = e20174;
var statearr_20175_21565 = state_20155;
(statearr_20175_21565[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21568 = state_20155;
state_20155 = G__21568;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_20155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_20155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___21519,out))
})();
var state__18819__auto__ = (function (){var statearr_20176 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_20176[(6)] = c__18817__auto___21519);

return statearr_20176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___21519,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20178 = arguments.length;
switch (G__20178) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18817__auto___21574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___21574,out){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___21574,out){
return (function (state_20216){
var state_val_20217 = (state_20216[(1)]);
if((state_val_20217 === (7))){
var inst_20212 = (state_20216[(2)]);
var state_20216__$1 = state_20216;
var statearr_20218_21576 = state_20216__$1;
(statearr_20218_21576[(2)] = inst_20212);

(statearr_20218_21576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (1))){
var inst_20179 = (new Array(n));
var inst_20180 = inst_20179;
var inst_20181 = (0);
var state_20216__$1 = (function (){var statearr_20219 = state_20216;
(statearr_20219[(7)] = inst_20181);

(statearr_20219[(8)] = inst_20180);

return statearr_20219;
})();
var statearr_20220_21580 = state_20216__$1;
(statearr_20220_21580[(2)] = null);

(statearr_20220_21580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (4))){
var inst_20184 = (state_20216[(9)]);
var inst_20184__$1 = (state_20216[(2)]);
var inst_20185 = (inst_20184__$1 == null);
var inst_20186 = cljs.core.not(inst_20185);
var state_20216__$1 = (function (){var statearr_20221 = state_20216;
(statearr_20221[(9)] = inst_20184__$1);

return statearr_20221;
})();
if(inst_20186){
var statearr_20222_21581 = state_20216__$1;
(statearr_20222_21581[(1)] = (5));

} else {
var statearr_20223_21582 = state_20216__$1;
(statearr_20223_21582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (15))){
var inst_20206 = (state_20216[(2)]);
var state_20216__$1 = state_20216;
var statearr_20224_21587 = state_20216__$1;
(statearr_20224_21587[(2)] = inst_20206);

(statearr_20224_21587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (13))){
var state_20216__$1 = state_20216;
var statearr_20225_21588 = state_20216__$1;
(statearr_20225_21588[(2)] = null);

(statearr_20225_21588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (6))){
var inst_20181 = (state_20216[(7)]);
var inst_20202 = (inst_20181 > (0));
var state_20216__$1 = state_20216;
if(cljs.core.truth_(inst_20202)){
var statearr_20226_21589 = state_20216__$1;
(statearr_20226_21589[(1)] = (12));

} else {
var statearr_20227_21590 = state_20216__$1;
(statearr_20227_21590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (3))){
var inst_20214 = (state_20216[(2)]);
var state_20216__$1 = state_20216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20216__$1,inst_20214);
} else {
if((state_val_20217 === (12))){
var inst_20180 = (state_20216[(8)]);
var inst_20204 = cljs.core.vec(inst_20180);
var state_20216__$1 = state_20216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20216__$1,(15),out,inst_20204);
} else {
if((state_val_20217 === (2))){
var state_20216__$1 = state_20216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20216__$1,(4),ch);
} else {
if((state_val_20217 === (11))){
var inst_20196 = (state_20216[(2)]);
var inst_20197 = (new Array(n));
var inst_20180 = inst_20197;
var inst_20181 = (0);
var state_20216__$1 = (function (){var statearr_20228 = state_20216;
(statearr_20228[(10)] = inst_20196);

(statearr_20228[(7)] = inst_20181);

(statearr_20228[(8)] = inst_20180);

return statearr_20228;
})();
var statearr_20229_21592 = state_20216__$1;
(statearr_20229_21592[(2)] = null);

(statearr_20229_21592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (9))){
var inst_20180 = (state_20216[(8)]);
var inst_20194 = cljs.core.vec(inst_20180);
var state_20216__$1 = state_20216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20216__$1,(11),out,inst_20194);
} else {
if((state_val_20217 === (5))){
var inst_20184 = (state_20216[(9)]);
var inst_20181 = (state_20216[(7)]);
var inst_20189 = (state_20216[(11)]);
var inst_20180 = (state_20216[(8)]);
var inst_20188 = (inst_20180[inst_20181] = inst_20184);
var inst_20189__$1 = (inst_20181 + (1));
var inst_20190 = (inst_20189__$1 < n);
var state_20216__$1 = (function (){var statearr_20230 = state_20216;
(statearr_20230[(11)] = inst_20189__$1);

(statearr_20230[(12)] = inst_20188);

return statearr_20230;
})();
if(cljs.core.truth_(inst_20190)){
var statearr_20231_21595 = state_20216__$1;
(statearr_20231_21595[(1)] = (8));

} else {
var statearr_20232_21596 = state_20216__$1;
(statearr_20232_21596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (14))){
var inst_20209 = (state_20216[(2)]);
var inst_20210 = cljs.core.async.close_BANG_(out);
var state_20216__$1 = (function (){var statearr_20234 = state_20216;
(statearr_20234[(13)] = inst_20209);

return statearr_20234;
})();
var statearr_20235_21599 = state_20216__$1;
(statearr_20235_21599[(2)] = inst_20210);

(statearr_20235_21599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (10))){
var inst_20200 = (state_20216[(2)]);
var state_20216__$1 = state_20216;
var statearr_20236_21602 = state_20216__$1;
(statearr_20236_21602[(2)] = inst_20200);

(statearr_20236_21602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20217 === (8))){
var inst_20189 = (state_20216[(11)]);
var inst_20180 = (state_20216[(8)]);
var tmp20233 = inst_20180;
var inst_20180__$1 = tmp20233;
var inst_20181 = inst_20189;
var state_20216__$1 = (function (){var statearr_20237 = state_20216;
(statearr_20237[(7)] = inst_20181);

(statearr_20237[(8)] = inst_20180__$1);

return statearr_20237;
})();
var statearr_20238_21607 = state_20216__$1;
(statearr_20238_21607[(2)] = null);

(statearr_20238_21607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___21574,out))
;
return ((function (switch__18716__auto__,c__18817__auto___21574,out){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_20239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20239[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_20239[(1)] = (1));

return statearr_20239;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_20216){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_20216);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e20240){if((e20240 instanceof Object)){
var ex__18720__auto__ = e20240;
var statearr_20241_21608 = state_20216;
(statearr_20241_21608[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21609 = state_20216;
state_20216 = G__21609;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_20216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_20216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___21574,out))
})();
var state__18819__auto__ = (function (){var statearr_20242 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_20242[(6)] = c__18817__auto___21574);

return statearr_20242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___21574,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20244 = arguments.length;
switch (G__20244) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18817__auto___21613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto___21613,out){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto___21613,out){
return (function (state_20286){
var state_val_20287 = (state_20286[(1)]);
if((state_val_20287 === (7))){
var inst_20282 = (state_20286[(2)]);
var state_20286__$1 = state_20286;
var statearr_20288_21614 = state_20286__$1;
(statearr_20288_21614[(2)] = inst_20282);

(statearr_20288_21614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (1))){
var inst_20245 = [];
var inst_20246 = inst_20245;
var inst_20247 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20286__$1 = (function (){var statearr_20289 = state_20286;
(statearr_20289[(7)] = inst_20246);

(statearr_20289[(8)] = inst_20247);

return statearr_20289;
})();
var statearr_20290_21615 = state_20286__$1;
(statearr_20290_21615[(2)] = null);

(statearr_20290_21615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (4))){
var inst_20250 = (state_20286[(9)]);
var inst_20250__$1 = (state_20286[(2)]);
var inst_20251 = (inst_20250__$1 == null);
var inst_20252 = cljs.core.not(inst_20251);
var state_20286__$1 = (function (){var statearr_20291 = state_20286;
(statearr_20291[(9)] = inst_20250__$1);

return statearr_20291;
})();
if(inst_20252){
var statearr_20292_21617 = state_20286__$1;
(statearr_20292_21617[(1)] = (5));

} else {
var statearr_20293_21618 = state_20286__$1;
(statearr_20293_21618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (15))){
var inst_20276 = (state_20286[(2)]);
var state_20286__$1 = state_20286;
var statearr_20294_21619 = state_20286__$1;
(statearr_20294_21619[(2)] = inst_20276);

(statearr_20294_21619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (13))){
var state_20286__$1 = state_20286;
var statearr_20295_21620 = state_20286__$1;
(statearr_20295_21620[(2)] = null);

(statearr_20295_21620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (6))){
var inst_20246 = (state_20286[(7)]);
var inst_20271 = inst_20246.length;
var inst_20272 = (inst_20271 > (0));
var state_20286__$1 = state_20286;
if(cljs.core.truth_(inst_20272)){
var statearr_20296_21627 = state_20286__$1;
(statearr_20296_21627[(1)] = (12));

} else {
var statearr_20297_21628 = state_20286__$1;
(statearr_20297_21628[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (3))){
var inst_20284 = (state_20286[(2)]);
var state_20286__$1 = state_20286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20286__$1,inst_20284);
} else {
if((state_val_20287 === (12))){
var inst_20246 = (state_20286[(7)]);
var inst_20274 = cljs.core.vec(inst_20246);
var state_20286__$1 = state_20286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20286__$1,(15),out,inst_20274);
} else {
if((state_val_20287 === (2))){
var state_20286__$1 = state_20286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20286__$1,(4),ch);
} else {
if((state_val_20287 === (11))){
var inst_20250 = (state_20286[(9)]);
var inst_20254 = (state_20286[(10)]);
var inst_20264 = (state_20286[(2)]);
var inst_20265 = [];
var inst_20266 = inst_20265.push(inst_20250);
var inst_20246 = inst_20265;
var inst_20247 = inst_20254;
var state_20286__$1 = (function (){var statearr_20298 = state_20286;
(statearr_20298[(7)] = inst_20246);

(statearr_20298[(8)] = inst_20247);

(statearr_20298[(11)] = inst_20266);

(statearr_20298[(12)] = inst_20264);

return statearr_20298;
})();
var statearr_20299_21633 = state_20286__$1;
(statearr_20299_21633[(2)] = null);

(statearr_20299_21633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (9))){
var inst_20246 = (state_20286[(7)]);
var inst_20262 = cljs.core.vec(inst_20246);
var state_20286__$1 = state_20286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20286__$1,(11),out,inst_20262);
} else {
if((state_val_20287 === (5))){
var inst_20247 = (state_20286[(8)]);
var inst_20250 = (state_20286[(9)]);
var inst_20254 = (state_20286[(10)]);
var inst_20254__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20250) : f.call(null,inst_20250));
var inst_20255 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20254__$1,inst_20247);
var inst_20256 = cljs.core.keyword_identical_QMARK_(inst_20247,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20257 = ((inst_20255) || (inst_20256));
var state_20286__$1 = (function (){var statearr_20300 = state_20286;
(statearr_20300[(10)] = inst_20254__$1);

return statearr_20300;
})();
if(cljs.core.truth_(inst_20257)){
var statearr_20301_21641 = state_20286__$1;
(statearr_20301_21641[(1)] = (8));

} else {
var statearr_20302_21642 = state_20286__$1;
(statearr_20302_21642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (14))){
var inst_20279 = (state_20286[(2)]);
var inst_20280 = cljs.core.async.close_BANG_(out);
var state_20286__$1 = (function (){var statearr_20304 = state_20286;
(statearr_20304[(13)] = inst_20279);

return statearr_20304;
})();
var statearr_20305_21643 = state_20286__$1;
(statearr_20305_21643[(2)] = inst_20280);

(statearr_20305_21643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (10))){
var inst_20269 = (state_20286[(2)]);
var state_20286__$1 = state_20286;
var statearr_20306_21645 = state_20286__$1;
(statearr_20306_21645[(2)] = inst_20269);

(statearr_20306_21645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20287 === (8))){
var inst_20246 = (state_20286[(7)]);
var inst_20250 = (state_20286[(9)]);
var inst_20254 = (state_20286[(10)]);
var inst_20259 = inst_20246.push(inst_20250);
var tmp20303 = inst_20246;
var inst_20246__$1 = tmp20303;
var inst_20247 = inst_20254;
var state_20286__$1 = (function (){var statearr_20307 = state_20286;
(statearr_20307[(7)] = inst_20246__$1);

(statearr_20307[(8)] = inst_20247);

(statearr_20307[(14)] = inst_20259);

return statearr_20307;
})();
var statearr_20308_21648 = state_20286__$1;
(statearr_20308_21648[(2)] = null);

(statearr_20308_21648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18817__auto___21613,out))
;
return ((function (switch__18716__auto__,c__18817__auto___21613,out){
return (function() {
var cljs$core$async$state_machine__18717__auto__ = null;
var cljs$core$async$state_machine__18717__auto____0 = (function (){
var statearr_20309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20309[(0)] = cljs$core$async$state_machine__18717__auto__);

(statearr_20309[(1)] = (1));

return statearr_20309;
});
var cljs$core$async$state_machine__18717__auto____1 = (function (state_20286){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_20286);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e20310){if((e20310 instanceof Object)){
var ex__18720__auto__ = e20310;
var statearr_20311_21653 = state_20286;
(statearr_20311_21653[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21654 = state_20286;
state_20286 = G__21654;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
cljs$core$async$state_machine__18717__auto__ = function(state_20286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18717__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18717__auto____1.call(this,state_20286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18717__auto____0;
cljs$core$async$state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18717__auto____1;
return cljs$core$async$state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto___21613,out))
})();
var state__18819__auto__ = (function (){var statearr_20312 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_20312[(6)] = c__18817__auto___21613);

return statearr_20312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto___21613,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
