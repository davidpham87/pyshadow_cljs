goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16113 = arguments.length;
switch (G__16113) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16118 = (function (f,blockable,meta16119){
this.f = f;
this.blockable = blockable;
this.meta16119 = meta16119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16120,meta16119__$1){
var self__ = this;
var _16120__$1 = this;
return (new cljs.core.async.t_cljs$core$async16118(self__.f,self__.blockable,meta16119__$1));
});

cljs.core.async.t_cljs$core$async16118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16120){
var self__ = this;
var _16120__$1 = this;
return self__.meta16119;
});

cljs.core.async.t_cljs$core$async16118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16119","meta16119",1480382016,null)], null);
});

cljs.core.async.t_cljs$core$async16118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16118";

cljs.core.async.t_cljs$core$async16118.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16118");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16118.
 */
cljs.core.async.__GT_t_cljs$core$async16118 = (function cljs$core$async$__GT_t_cljs$core$async16118(f__$1,blockable__$1,meta16119){
return (new cljs.core.async.t_cljs$core$async16118(f__$1,blockable__$1,meta16119));
});

}

return (new cljs.core.async.t_cljs$core$async16118(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16166 = arguments.length;
switch (G__16166) {
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
var G__16176 = arguments.length;
switch (G__16176) {
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
var G__16188 = arguments.length;
switch (G__16188) {
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
var val_18429 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18429) : fn1.call(null,val_18429));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18429,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18429) : fn1.call(null,val_18429));
});})(val_18429,ret))
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
var G__16213 = arguments.length;
switch (G__16213) {
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
var n__4518__auto___18455 = n;
var x_18456 = (0);
while(true){
if((x_18456 < n__4518__auto___18455)){
(a[x_18456] = (0));

var G__18459 = (x_18456 + (1));
x_18456 = G__18459;
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

var G__18463 = (i + (1));
i = G__18463;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16240 = (function (flag,meta16241){
this.flag = flag;
this.meta16241 = meta16241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16242,meta16241__$1){
var self__ = this;
var _16242__$1 = this;
return (new cljs.core.async.t_cljs$core$async16240(self__.flag,meta16241__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16242){
var self__ = this;
var _16242__$1 = this;
return self__.meta16241;
});})(flag))
;

cljs.core.async.t_cljs$core$async16240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16240.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16241","meta16241",368632764,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16240";

cljs.core.async.t_cljs$core$async16240.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16240");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16240.
 */
cljs.core.async.__GT_t_cljs$core$async16240 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16240(flag__$1,meta16241){
return (new cljs.core.async.t_cljs$core$async16240(flag__$1,meta16241));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16240(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16257 = (function (flag,cb,meta16258){
this.flag = flag;
this.cb = cb;
this.meta16258 = meta16258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16259,meta16258__$1){
var self__ = this;
var _16259__$1 = this;
return (new cljs.core.async.t_cljs$core$async16257(self__.flag,self__.cb,meta16258__$1));
});

cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16259){
var self__ = this;
var _16259__$1 = this;
return self__.meta16258;
});

cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16258","meta16258",1067134720,null)], null);
});

cljs.core.async.t_cljs$core$async16257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16257";

cljs.core.async.t_cljs$core$async16257.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16257");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16257.
 */
cljs.core.async.__GT_t_cljs$core$async16257 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16257(flag__$1,cb__$1,meta16258){
return (new cljs.core.async.t_cljs$core$async16257(flag__$1,cb__$1,meta16258));
});

}

return (new cljs.core.async.t_cljs$core$async16257(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16275_SHARP_){
var G__16285 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16275_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16285) : fret.call(null,G__16285));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16276_SHARP_){
var G__16287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16276_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16287) : fret.call(null,G__16287));
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
var G__18508 = (i + (1));
i = G__18508;
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
var len__4641__auto___18515 = arguments.length;
var i__4642__auto___18517 = (0);
while(true){
if((i__4642__auto___18517 < len__4641__auto___18515)){
args__4647__auto__.push((arguments[i__4642__auto___18517]));

var G__18519 = (i__4642__auto___18517 + (1));
i__4642__auto___18517 = G__18519;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16304){
var map__16305 = p__16304;
var map__16305__$1 = (((((!((map__16305 == null))))?(((((map__16305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16305):map__16305);
var opts = map__16305__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16298){
var G__16299 = cljs.core.first(seq16298);
var seq16298__$1 = cljs.core.next(seq16298);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16299,seq16298__$1);
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
var G__16332 = arguments.length;
switch (G__16332) {
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
var c__15982__auto___18534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___18534){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___18534){
return (function (state_16384){
var state_val_16385 = (state_16384[(1)]);
if((state_val_16385 === (7))){
var inst_16377 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
var statearr_16393_18535 = state_16384__$1;
(statearr_16393_18535[(2)] = inst_16377);

(statearr_16393_18535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (1))){
var state_16384__$1 = state_16384;
var statearr_16394_18540 = state_16384__$1;
(statearr_16394_18540[(2)] = null);

(statearr_16394_18540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (4))){
var inst_16360 = (state_16384[(7)]);
var inst_16360__$1 = (state_16384[(2)]);
var inst_16361 = (inst_16360__$1 == null);
var state_16384__$1 = (function (){var statearr_16397 = state_16384;
(statearr_16397[(7)] = inst_16360__$1);

return statearr_16397;
})();
if(cljs.core.truth_(inst_16361)){
var statearr_16400_18542 = state_16384__$1;
(statearr_16400_18542[(1)] = (5));

} else {
var statearr_16401_18543 = state_16384__$1;
(statearr_16401_18543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (13))){
var state_16384__$1 = state_16384;
var statearr_16402_18545 = state_16384__$1;
(statearr_16402_18545[(2)] = null);

(statearr_16402_18545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (6))){
var inst_16360 = (state_16384[(7)]);
var state_16384__$1 = state_16384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16384__$1,(11),to,inst_16360);
} else {
if((state_val_16385 === (3))){
var inst_16380 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16384__$1,inst_16380);
} else {
if((state_val_16385 === (12))){
var state_16384__$1 = state_16384;
var statearr_16404_18550 = state_16384__$1;
(statearr_16404_18550[(2)] = null);

(statearr_16404_18550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (2))){
var state_16384__$1 = state_16384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16384__$1,(4),from);
} else {
if((state_val_16385 === (11))){
var inst_16370 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
if(cljs.core.truth_(inst_16370)){
var statearr_16405_18553 = state_16384__$1;
(statearr_16405_18553[(1)] = (12));

} else {
var statearr_16406_18555 = state_16384__$1;
(statearr_16406_18555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (9))){
var state_16384__$1 = state_16384;
var statearr_16408_18556 = state_16384__$1;
(statearr_16408_18556[(2)] = null);

(statearr_16408_18556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (5))){
var state_16384__$1 = state_16384;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16409_18559 = state_16384__$1;
(statearr_16409_18559[(1)] = (8));

} else {
var statearr_16410_18560 = state_16384__$1;
(statearr_16410_18560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (14))){
var inst_16375 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
var statearr_16411_18562 = state_16384__$1;
(statearr_16411_18562[(2)] = inst_16375);

(statearr_16411_18562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (10))){
var inst_16367 = (state_16384[(2)]);
var state_16384__$1 = state_16384;
var statearr_16416_18565 = state_16384__$1;
(statearr_16416_18565[(2)] = inst_16367);

(statearr_16416_18565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16385 === (8))){
var inst_16364 = cljs.core.async.close_BANG_(to);
var state_16384__$1 = state_16384;
var statearr_16417_18570 = state_16384__$1;
(statearr_16417_18570[(2)] = inst_16364);

(statearr_16417_18570[(1)] = (10));


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
});})(c__15982__auto___18534))
;
return ((function (switch__15760__auto__,c__15982__auto___18534){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_16419 = [null,null,null,null,null,null,null,null];
(statearr_16419[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_16419[(1)] = (1));

return statearr_16419;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_16384){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_16384);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e16421){if((e16421 instanceof Object)){
var ex__15764__auto__ = e16421;
var statearr_16422_18573 = state_16384;
(statearr_16422_18573[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16421;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18578 = state_16384;
state_16384 = G__18578;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_16384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_16384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___18534))
})();
var state__15984__auto__ = (function (){var statearr_16424 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_16424[(6)] = c__15982__auto___18534);

return statearr_16424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___18534))
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
return (function (p__16452){
var vec__16453 = p__16452;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16453,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16453,(1),null);
var job = vec__16453;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15982__auto___18585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___18585,res,vec__16453,v,p,job,jobs,results){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___18585,res,vec__16453,v,p,job,jobs,results){
return (function (state_16464){
var state_val_16465 = (state_16464[(1)]);
if((state_val_16465 === (1))){
var state_16464__$1 = state_16464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16464__$1,(2),res,v);
} else {
if((state_val_16465 === (2))){
var inst_16458 = (state_16464[(2)]);
var inst_16459 = cljs.core.async.close_BANG_(res);
var state_16464__$1 = (function (){var statearr_16470 = state_16464;
(statearr_16470[(7)] = inst_16458);

return statearr_16470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16464__$1,inst_16459);
} else {
return null;
}
}
});})(c__15982__auto___18585,res,vec__16453,v,p,job,jobs,results))
;
return ((function (switch__15760__auto__,c__15982__auto___18585,res,vec__16453,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0 = (function (){
var statearr_16472 = [null,null,null,null,null,null,null,null];
(statearr_16472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__);

(statearr_16472[(1)] = (1));

return statearr_16472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1 = (function (state_16464){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_16464);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e16474){if((e16474 instanceof Object)){
var ex__15764__auto__ = e16474;
var statearr_16475_18595 = state_16464;
(statearr_16475_18595[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18596 = state_16464;
state_16464 = G__18596;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = function(state_16464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1.call(this,state_16464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___18585,res,vec__16453,v,p,job,jobs,results))
})();
var state__15984__auto__ = (function (){var statearr_16476 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_16476[(6)] = c__15982__auto___18585);

return statearr_16476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___18585,res,vec__16453,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16477){
var vec__16478 = p__16477;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16478,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16478,(1),null);
var job = vec__16478;
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
var n__4518__auto___18601 = n;
var __18602 = (0);
while(true){
if((__18602 < n__4518__auto___18601)){
var G__16481_18603 = type;
var G__16481_18604__$1 = (((G__16481_18603 instanceof cljs.core.Keyword))?G__16481_18603.fqn:null);
switch (G__16481_18604__$1) {
case "compute":
var c__15982__auto___18607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18602,c__15982__auto___18607,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (__18602,c__15982__auto___18607,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async){
return (function (state_16497){
var state_val_16498 = (state_16497[(1)]);
if((state_val_16498 === (1))){
var state_16497__$1 = state_16497;
var statearr_16502_18608 = state_16497__$1;
(statearr_16502_18608[(2)] = null);

(statearr_16502_18608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (2))){
var state_16497__$1 = state_16497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16497__$1,(4),jobs);
} else {
if((state_val_16498 === (3))){
var inst_16492 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16497__$1,inst_16492);
} else {
if((state_val_16498 === (4))){
var inst_16484 = (state_16497[(2)]);
var inst_16485 = process(inst_16484);
var state_16497__$1 = state_16497;
if(cljs.core.truth_(inst_16485)){
var statearr_16509_18614 = state_16497__$1;
(statearr_16509_18614[(1)] = (5));

} else {
var statearr_16510_18615 = state_16497__$1;
(statearr_16510_18615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (5))){
var state_16497__$1 = state_16497;
var statearr_16514_18622 = state_16497__$1;
(statearr_16514_18622[(2)] = null);

(statearr_16514_18622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (6))){
var state_16497__$1 = state_16497;
var statearr_16515_18624 = state_16497__$1;
(statearr_16515_18624[(2)] = null);

(statearr_16515_18624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16498 === (7))){
var inst_16490 = (state_16497[(2)]);
var state_16497__$1 = state_16497;
var statearr_16519_18632 = state_16497__$1;
(statearr_16519_18632[(2)] = inst_16490);

(statearr_16519_18632[(1)] = (3));


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
});})(__18602,c__15982__auto___18607,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async))
;
return ((function (__18602,switch__15760__auto__,c__15982__auto___18607,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0 = (function (){
var statearr_16524 = [null,null,null,null,null,null,null];
(statearr_16524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__);

(statearr_16524[(1)] = (1));

return statearr_16524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1 = (function (state_16497){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_16497);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e16525){if((e16525 instanceof Object)){
var ex__15764__auto__ = e16525;
var statearr_16527_18639 = state_16497;
(statearr_16527_18639[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18643 = state_16497;
state_16497 = G__18643;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = function(state_16497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1.call(this,state_16497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__;
})()
;})(__18602,switch__15760__auto__,c__15982__auto___18607,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async))
})();
var state__15984__auto__ = (function (){var statearr_16529 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_16529[(6)] = c__15982__auto___18607);

return statearr_16529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(__18602,c__15982__auto___18607,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async))
);


break;
case "async":
var c__15982__auto___18644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18602,c__15982__auto___18644,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (__18602,c__15982__auto___18644,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async){
return (function (state_16545){
var state_val_16546 = (state_16545[(1)]);
if((state_val_16546 === (1))){
var state_16545__$1 = state_16545;
var statearr_16550_18646 = state_16545__$1;
(statearr_16550_18646[(2)] = null);

(statearr_16550_18646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (2))){
var state_16545__$1 = state_16545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16545__$1,(4),jobs);
} else {
if((state_val_16546 === (3))){
var inst_16540 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16545__$1,inst_16540);
} else {
if((state_val_16546 === (4))){
var inst_16532 = (state_16545[(2)]);
var inst_16533 = async(inst_16532);
var state_16545__$1 = state_16545;
if(cljs.core.truth_(inst_16533)){
var statearr_16558_18671 = state_16545__$1;
(statearr_16558_18671[(1)] = (5));

} else {
var statearr_16559_18672 = state_16545__$1;
(statearr_16559_18672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (5))){
var state_16545__$1 = state_16545;
var statearr_16563_18673 = state_16545__$1;
(statearr_16563_18673[(2)] = null);

(statearr_16563_18673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (6))){
var state_16545__$1 = state_16545;
var statearr_16564_18675 = state_16545__$1;
(statearr_16564_18675[(2)] = null);

(statearr_16564_18675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (7))){
var inst_16538 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16568_18679 = state_16545__$1;
(statearr_16568_18679[(2)] = inst_16538);

(statearr_16568_18679[(1)] = (3));


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
});})(__18602,c__15982__auto___18644,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async))
;
return ((function (__18602,switch__15760__auto__,c__15982__auto___18644,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0 = (function (){
var statearr_16573 = [null,null,null,null,null,null,null];
(statearr_16573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__);

(statearr_16573[(1)] = (1));

return statearr_16573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1 = (function (state_16545){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_16545);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e16575){if((e16575 instanceof Object)){
var ex__15764__auto__ = e16575;
var statearr_16576_18680 = state_16545;
(statearr_16576_18680[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16575;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18681 = state_16545;
state_16545 = G__18681;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = function(state_16545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1.call(this,state_16545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__;
})()
;})(__18602,switch__15760__auto__,c__15982__auto___18644,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async))
})();
var state__15984__auto__ = (function (){var statearr_16579 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_16579[(6)] = c__15982__auto___18644);

return statearr_16579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(__18602,c__15982__auto___18644,G__16481_18603,G__16481_18604__$1,n__4518__auto___18601,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16481_18604__$1)].join('')));

}

var G__18683 = (__18602 + (1));
__18602 = G__18683;
continue;
} else {
}
break;
}

var c__15982__auto___18684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___18684,jobs,results,process,async){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___18684,jobs,results,process,async){
return (function (state_16604){
var state_val_16605 = (state_16604[(1)]);
if((state_val_16605 === (1))){
var state_16604__$1 = state_16604;
var statearr_16606_18686 = state_16604__$1;
(statearr_16606_18686[(2)] = null);

(statearr_16606_18686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16605 === (2))){
var state_16604__$1 = state_16604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16604__$1,(4),from);
} else {
if((state_val_16605 === (3))){
var inst_16602 = (state_16604[(2)]);
var state_16604__$1 = state_16604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16604__$1,inst_16602);
} else {
if((state_val_16605 === (4))){
var inst_16582 = (state_16604[(7)]);
var inst_16582__$1 = (state_16604[(2)]);
var inst_16583 = (inst_16582__$1 == null);
var state_16604__$1 = (function (){var statearr_16611 = state_16604;
(statearr_16611[(7)] = inst_16582__$1);

return statearr_16611;
})();
if(cljs.core.truth_(inst_16583)){
var statearr_16612_18695 = state_16604__$1;
(statearr_16612_18695[(1)] = (5));

} else {
var statearr_16613_18696 = state_16604__$1;
(statearr_16613_18696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16605 === (5))){
var inst_16586 = cljs.core.async.close_BANG_(jobs);
var state_16604__$1 = state_16604;
var statearr_16614_18697 = state_16604__$1;
(statearr_16614_18697[(2)] = inst_16586);

(statearr_16614_18697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16605 === (6))){
var inst_16582 = (state_16604[(7)]);
var inst_16589 = (state_16604[(8)]);
var inst_16589__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16592 = [inst_16582,inst_16589__$1];
var inst_16593 = (new cljs.core.PersistentVector(null,2,(5),inst_16591,inst_16592,null));
var state_16604__$1 = (function (){var statearr_16616 = state_16604;
(statearr_16616[(8)] = inst_16589__$1);

return statearr_16616;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16604__$1,(8),jobs,inst_16593);
} else {
if((state_val_16605 === (7))){
var inst_16600 = (state_16604[(2)]);
var state_16604__$1 = state_16604;
var statearr_16617_18713 = state_16604__$1;
(statearr_16617_18713[(2)] = inst_16600);

(statearr_16617_18713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16605 === (8))){
var inst_16589 = (state_16604[(8)]);
var inst_16595 = (state_16604[(2)]);
var state_16604__$1 = (function (){var statearr_16621 = state_16604;
(statearr_16621[(9)] = inst_16595);

return statearr_16621;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16604__$1,(9),results,inst_16589);
} else {
if((state_val_16605 === (9))){
var inst_16597 = (state_16604[(2)]);
var state_16604__$1 = (function (){var statearr_16634 = state_16604;
(statearr_16634[(10)] = inst_16597);

return statearr_16634;
})();
var statearr_16635_18718 = state_16604__$1;
(statearr_16635_18718[(2)] = null);

(statearr_16635_18718[(1)] = (2));


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
});})(c__15982__auto___18684,jobs,results,process,async))
;
return ((function (switch__15760__auto__,c__15982__auto___18684,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0 = (function (){
var statearr_16644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__);

(statearr_16644[(1)] = (1));

return statearr_16644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1 = (function (state_16604){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_16604);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e16646){if((e16646 instanceof Object)){
var ex__15764__auto__ = e16646;
var statearr_16647_18722 = state_16604;
(statearr_16647_18722[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18723 = state_16604;
state_16604 = G__18723;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = function(state_16604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1.call(this,state_16604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___18684,jobs,results,process,async))
})();
var state__15984__auto__ = (function (){var statearr_16652 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_16652[(6)] = c__15982__auto___18684);

return statearr_16652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___18684,jobs,results,process,async))
);


var c__15982__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto__,jobs,results,process,async){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto__,jobs,results,process,async){
return (function (state_16716){
var state_val_16717 = (state_16716[(1)]);
if((state_val_16717 === (7))){
var inst_16712 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16718_18726 = state_16716__$1;
(statearr_16718_18726[(2)] = inst_16712);

(statearr_16718_18726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (20))){
var state_16716__$1 = state_16716;
var statearr_16723_18727 = state_16716__$1;
(statearr_16723_18727[(2)] = null);

(statearr_16723_18727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (1))){
var state_16716__$1 = state_16716;
var statearr_16724_18728 = state_16716__$1;
(statearr_16724_18728[(2)] = null);

(statearr_16724_18728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (4))){
var inst_16658 = (state_16716[(7)]);
var inst_16658__$1 = (state_16716[(2)]);
var inst_16682 = (inst_16658__$1 == null);
var state_16716__$1 = (function (){var statearr_16725 = state_16716;
(statearr_16725[(7)] = inst_16658__$1);

return statearr_16725;
})();
if(cljs.core.truth_(inst_16682)){
var statearr_16726_18732 = state_16716__$1;
(statearr_16726_18732[(1)] = (5));

} else {
var statearr_16727_18733 = state_16716__$1;
(statearr_16727_18733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (15))){
var inst_16694 = (state_16716[(8)]);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16716__$1,(18),to,inst_16694);
} else {
if((state_val_16717 === (21))){
var inst_16707 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16728_18734 = state_16716__$1;
(statearr_16728_18734[(2)] = inst_16707);

(statearr_16728_18734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (13))){
var inst_16709 = (state_16716[(2)]);
var state_16716__$1 = (function (){var statearr_16729 = state_16716;
(statearr_16729[(9)] = inst_16709);

return statearr_16729;
})();
var statearr_16731_18735 = state_16716__$1;
(statearr_16731_18735[(2)] = null);

(statearr_16731_18735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (6))){
var inst_16658 = (state_16716[(7)]);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16716__$1,(11),inst_16658);
} else {
if((state_val_16717 === (17))){
var inst_16702 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
if(cljs.core.truth_(inst_16702)){
var statearr_16733_18740 = state_16716__$1;
(statearr_16733_18740[(1)] = (19));

} else {
var statearr_16734_18741 = state_16716__$1;
(statearr_16734_18741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (3))){
var inst_16714 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16716__$1,inst_16714);
} else {
if((state_val_16717 === (12))){
var inst_16691 = (state_16716[(10)]);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16716__$1,(14),inst_16691);
} else {
if((state_val_16717 === (2))){
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16716__$1,(4),results);
} else {
if((state_val_16717 === (19))){
var state_16716__$1 = state_16716;
var statearr_16740_18749 = state_16716__$1;
(statearr_16740_18749[(2)] = null);

(statearr_16740_18749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (11))){
var inst_16691 = (state_16716[(2)]);
var state_16716__$1 = (function (){var statearr_16741 = state_16716;
(statearr_16741[(10)] = inst_16691);

return statearr_16741;
})();
var statearr_16742_18753 = state_16716__$1;
(statearr_16742_18753[(2)] = null);

(statearr_16742_18753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (9))){
var state_16716__$1 = state_16716;
var statearr_16743_18754 = state_16716__$1;
(statearr_16743_18754[(2)] = null);

(statearr_16743_18754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (5))){
var state_16716__$1 = state_16716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16744_18755 = state_16716__$1;
(statearr_16744_18755[(1)] = (8));

} else {
var statearr_16745_18756 = state_16716__$1;
(statearr_16745_18756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (14))){
var inst_16696 = (state_16716[(11)]);
var inst_16694 = (state_16716[(8)]);
var inst_16694__$1 = (state_16716[(2)]);
var inst_16695 = (inst_16694__$1 == null);
var inst_16696__$1 = cljs.core.not(inst_16695);
var state_16716__$1 = (function (){var statearr_16746 = state_16716;
(statearr_16746[(11)] = inst_16696__$1);

(statearr_16746[(8)] = inst_16694__$1);

return statearr_16746;
})();
if(inst_16696__$1){
var statearr_16747_18764 = state_16716__$1;
(statearr_16747_18764[(1)] = (15));

} else {
var statearr_16748_18765 = state_16716__$1;
(statearr_16748_18765[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (16))){
var inst_16696 = (state_16716[(11)]);
var state_16716__$1 = state_16716;
var statearr_16750_18769 = state_16716__$1;
(statearr_16750_18769[(2)] = inst_16696);

(statearr_16750_18769[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (10))){
var inst_16688 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16752_18770 = state_16716__$1;
(statearr_16752_18770[(2)] = inst_16688);

(statearr_16752_18770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (18))){
var inst_16699 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16753_18771 = state_16716__$1;
(statearr_16753_18771[(2)] = inst_16699);

(statearr_16753_18771[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (8))){
var inst_16685 = cljs.core.async.close_BANG_(to);
var state_16716__$1 = state_16716;
var statearr_16754_18775 = state_16716__$1;
(statearr_16754_18775[(2)] = inst_16685);

(statearr_16754_18775[(1)] = (10));


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
});})(c__15982__auto__,jobs,results,process,async))
;
return ((function (switch__15760__auto__,c__15982__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0 = (function (){
var statearr_16756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__);

(statearr_16756[(1)] = (1));

return statearr_16756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1 = (function (state_16716){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_16716);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e16757){if((e16757 instanceof Object)){
var ex__15764__auto__ = e16757;
var statearr_16758_18783 = state_16716;
(statearr_16758_18783[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18784 = state_16716;
state_16716 = G__18784;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__ = function(state_16716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1.call(this,state_16716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15761__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto__,jobs,results,process,async))
})();
var state__15984__auto__ = (function (){var statearr_16760 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_16760[(6)] = c__15982__auto__);

return statearr_16760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto__,jobs,results,process,async))
);

return c__15982__auto__;
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
var G__16763 = arguments.length;
switch (G__16763) {
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
var G__16772 = arguments.length;
switch (G__16772) {
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
var G__16775 = arguments.length;
switch (G__16775) {
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
var c__15982__auto___18791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___18791,tc,fc){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___18791,tc,fc){
return (function (state_16814){
var state_val_16815 = (state_16814[(1)]);
if((state_val_16815 === (7))){
var inst_16810 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16819_18792 = state_16814__$1;
(statearr_16819_18792[(2)] = inst_16810);

(statearr_16819_18792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (1))){
var state_16814__$1 = state_16814;
var statearr_16820_18793 = state_16814__$1;
(statearr_16820_18793[(2)] = null);

(statearr_16820_18793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (4))){
var inst_16791 = (state_16814[(7)]);
var inst_16791__$1 = (state_16814[(2)]);
var inst_16792 = (inst_16791__$1 == null);
var state_16814__$1 = (function (){var statearr_16821 = state_16814;
(statearr_16821[(7)] = inst_16791__$1);

return statearr_16821;
})();
if(cljs.core.truth_(inst_16792)){
var statearr_16822_18794 = state_16814__$1;
(statearr_16822_18794[(1)] = (5));

} else {
var statearr_16823_18795 = state_16814__$1;
(statearr_16823_18795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (13))){
var state_16814__$1 = state_16814;
var statearr_16824_18796 = state_16814__$1;
(statearr_16824_18796[(2)] = null);

(statearr_16824_18796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (6))){
var inst_16791 = (state_16814[(7)]);
var inst_16797 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16791) : p.call(null,inst_16791));
var state_16814__$1 = state_16814;
if(cljs.core.truth_(inst_16797)){
var statearr_16832_18798 = state_16814__$1;
(statearr_16832_18798[(1)] = (9));

} else {
var statearr_16833_18799 = state_16814__$1;
(statearr_16833_18799[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (3))){
var inst_16812 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16814__$1,inst_16812);
} else {
if((state_val_16815 === (12))){
var state_16814__$1 = state_16814;
var statearr_16842_18802 = state_16814__$1;
(statearr_16842_18802[(2)] = null);

(statearr_16842_18802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (2))){
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16814__$1,(4),ch);
} else {
if((state_val_16815 === (11))){
var inst_16791 = (state_16814[(7)]);
var inst_16801 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16814__$1,(8),inst_16801,inst_16791);
} else {
if((state_val_16815 === (9))){
var state_16814__$1 = state_16814;
var statearr_16855_18806 = state_16814__$1;
(statearr_16855_18806[(2)] = tc);

(statearr_16855_18806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (5))){
var inst_16794 = cljs.core.async.close_BANG_(tc);
var inst_16795 = cljs.core.async.close_BANG_(fc);
var state_16814__$1 = (function (){var statearr_16865 = state_16814;
(statearr_16865[(8)] = inst_16794);

return statearr_16865;
})();
var statearr_16866_18810 = state_16814__$1;
(statearr_16866_18810[(2)] = inst_16795);

(statearr_16866_18810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (14))){
var inst_16808 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16873_18812 = state_16814__$1;
(statearr_16873_18812[(2)] = inst_16808);

(statearr_16873_18812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (10))){
var state_16814__$1 = state_16814;
var statearr_16880_18813 = state_16814__$1;
(statearr_16880_18813[(2)] = fc);

(statearr_16880_18813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (8))){
var inst_16803 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
if(cljs.core.truth_(inst_16803)){
var statearr_16886_18814 = state_16814__$1;
(statearr_16886_18814[(1)] = (12));

} else {
var statearr_16887_18815 = state_16814__$1;
(statearr_16887_18815[(1)] = (13));

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
});})(c__15982__auto___18791,tc,fc))
;
return ((function (switch__15760__auto__,c__15982__auto___18791,tc,fc){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_16888 = [null,null,null,null,null,null,null,null,null];
(statearr_16888[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_16888[(1)] = (1));

return statearr_16888;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_16814){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_16814);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e16889){if((e16889 instanceof Object)){
var ex__15764__auto__ = e16889;
var statearr_16890_18821 = state_16814;
(statearr_16890_18821[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18822 = state_16814;
state_16814 = G__18822;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_16814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_16814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___18791,tc,fc))
})();
var state__15984__auto__ = (function (){var statearr_16892 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_16892[(6)] = c__15982__auto___18791);

return statearr_16892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___18791,tc,fc))
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
var c__15982__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto__){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto__){
return (function (state_16916){
var state_val_16917 = (state_16916[(1)]);
if((state_val_16917 === (7))){
var inst_16912 = (state_16916[(2)]);
var state_16916__$1 = state_16916;
var statearr_16918_18824 = state_16916__$1;
(statearr_16918_18824[(2)] = inst_16912);

(statearr_16918_18824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (1))){
var inst_16896 = init;
var state_16916__$1 = (function (){var statearr_16919 = state_16916;
(statearr_16919[(7)] = inst_16896);

return statearr_16919;
})();
var statearr_16920_18861 = state_16916__$1;
(statearr_16920_18861[(2)] = null);

(statearr_16920_18861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (4))){
var inst_16899 = (state_16916[(8)]);
var inst_16899__$1 = (state_16916[(2)]);
var inst_16900 = (inst_16899__$1 == null);
var state_16916__$1 = (function (){var statearr_16921 = state_16916;
(statearr_16921[(8)] = inst_16899__$1);

return statearr_16921;
})();
if(cljs.core.truth_(inst_16900)){
var statearr_16922_18862 = state_16916__$1;
(statearr_16922_18862[(1)] = (5));

} else {
var statearr_16923_18863 = state_16916__$1;
(statearr_16923_18863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (6))){
var inst_16903 = (state_16916[(9)]);
var inst_16899 = (state_16916[(8)]);
var inst_16896 = (state_16916[(7)]);
var inst_16903__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16896,inst_16899) : f.call(null,inst_16896,inst_16899));
var inst_16904 = cljs.core.reduced_QMARK_(inst_16903__$1);
var state_16916__$1 = (function (){var statearr_16925 = state_16916;
(statearr_16925[(9)] = inst_16903__$1);

return statearr_16925;
})();
if(inst_16904){
var statearr_16926_18864 = state_16916__$1;
(statearr_16926_18864[(1)] = (8));

} else {
var statearr_16927_18865 = state_16916__$1;
(statearr_16927_18865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (3))){
var inst_16914 = (state_16916[(2)]);
var state_16916__$1 = state_16916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16916__$1,inst_16914);
} else {
if((state_val_16917 === (2))){
var state_16916__$1 = state_16916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16916__$1,(4),ch);
} else {
if((state_val_16917 === (9))){
var inst_16903 = (state_16916[(9)]);
var inst_16896 = inst_16903;
var state_16916__$1 = (function (){var statearr_16930 = state_16916;
(statearr_16930[(7)] = inst_16896);

return statearr_16930;
})();
var statearr_16931_18868 = state_16916__$1;
(statearr_16931_18868[(2)] = null);

(statearr_16931_18868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (5))){
var inst_16896 = (state_16916[(7)]);
var state_16916__$1 = state_16916;
var statearr_16933_18870 = state_16916__$1;
(statearr_16933_18870[(2)] = inst_16896);

(statearr_16933_18870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (10))){
var inst_16910 = (state_16916[(2)]);
var state_16916__$1 = state_16916;
var statearr_16934_18872 = state_16916__$1;
(statearr_16934_18872[(2)] = inst_16910);

(statearr_16934_18872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (8))){
var inst_16903 = (state_16916[(9)]);
var inst_16906 = cljs.core.deref(inst_16903);
var state_16916__$1 = state_16916;
var statearr_16938_18873 = state_16916__$1;
(statearr_16938_18873[(2)] = inst_16906);

(statearr_16938_18873[(1)] = (10));


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
});})(c__15982__auto__))
;
return ((function (switch__15760__auto__,c__15982__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15761__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15761__auto____0 = (function (){
var statearr_16940 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16940[(0)] = cljs$core$async$reduce_$_state_machine__15761__auto__);

(statearr_16940[(1)] = (1));

return statearr_16940;
});
var cljs$core$async$reduce_$_state_machine__15761__auto____1 = (function (state_16916){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_16916);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e16941){if((e16941 instanceof Object)){
var ex__15764__auto__ = e16941;
var statearr_16942_18874 = state_16916;
(statearr_16942_18874[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18876 = state_16916;
state_16916 = G__18876;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15761__auto__ = function(state_16916){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15761__auto____1.call(this,state_16916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15761__auto____0;
cljs$core$async$reduce_$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15761__auto____1;
return cljs$core$async$reduce_$_state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto__))
})();
var state__15984__auto__ = (function (){var statearr_16945 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_16945[(6)] = c__15982__auto__);

return statearr_16945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto__))
);

return c__15982__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15982__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto__,f__$1){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto__,f__$1){
return (function (state_16958){
var state_val_16959 = (state_16958[(1)]);
if((state_val_16959 === (1))){
var inst_16951 = cljs.core.async.reduce(f__$1,init,ch);
var state_16958__$1 = state_16958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16958__$1,(2),inst_16951);
} else {
if((state_val_16959 === (2))){
var inst_16953 = (state_16958[(2)]);
var inst_16954 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16953) : f__$1.call(null,inst_16953));
var state_16958__$1 = state_16958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16958__$1,inst_16954);
} else {
return null;
}
}
});})(c__15982__auto__,f__$1))
;
return ((function (switch__15760__auto__,c__15982__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15761__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15761__auto____0 = (function (){
var statearr_16963 = [null,null,null,null,null,null,null];
(statearr_16963[(0)] = cljs$core$async$transduce_$_state_machine__15761__auto__);

(statearr_16963[(1)] = (1));

return statearr_16963;
});
var cljs$core$async$transduce_$_state_machine__15761__auto____1 = (function (state_16958){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_16958);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e16964){if((e16964 instanceof Object)){
var ex__15764__auto__ = e16964;
var statearr_16965_18878 = state_16958;
(statearr_16965_18878[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18879 = state_16958;
state_16958 = G__18879;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15761__auto__ = function(state_16958){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15761__auto____1.call(this,state_16958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15761__auto____0;
cljs$core$async$transduce_$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15761__auto____1;
return cljs$core$async$transduce_$_state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto__,f__$1))
})();
var state__15984__auto__ = (function (){var statearr_16967 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_16967[(6)] = c__15982__auto__);

return statearr_16967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto__,f__$1))
);

return c__15982__auto__;
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
var G__16971 = arguments.length;
switch (G__16971) {
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
var c__15982__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto__){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto__){
return (function (state_17010){
var state_val_17011 = (state_17010[(1)]);
if((state_val_17011 === (7))){
var inst_16988 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
var statearr_17016_18883 = state_17010__$1;
(statearr_17016_18883[(2)] = inst_16988);

(statearr_17016_18883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (1))){
var inst_16977 = cljs.core.seq(coll);
var inst_16978 = inst_16977;
var state_17010__$1 = (function (){var statearr_17021 = state_17010;
(statearr_17021[(7)] = inst_16978);

return statearr_17021;
})();
var statearr_17023_18884 = state_17010__$1;
(statearr_17023_18884[(2)] = null);

(statearr_17023_18884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (4))){
var inst_16978 = (state_17010[(7)]);
var inst_16986 = cljs.core.first(inst_16978);
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17010__$1,(7),ch,inst_16986);
} else {
if((state_val_17011 === (13))){
var inst_17004 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
var statearr_17024_18885 = state_17010__$1;
(statearr_17024_18885[(2)] = inst_17004);

(statearr_17024_18885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (6))){
var inst_16991 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
if(cljs.core.truth_(inst_16991)){
var statearr_17026_18886 = state_17010__$1;
(statearr_17026_18886[(1)] = (8));

} else {
var statearr_17027_18887 = state_17010__$1;
(statearr_17027_18887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (3))){
var inst_17008 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17010__$1,inst_17008);
} else {
if((state_val_17011 === (12))){
var state_17010__$1 = state_17010;
var statearr_17028_18888 = state_17010__$1;
(statearr_17028_18888[(2)] = null);

(statearr_17028_18888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (2))){
var inst_16978 = (state_17010[(7)]);
var state_17010__$1 = state_17010;
if(cljs.core.truth_(inst_16978)){
var statearr_17029_18889 = state_17010__$1;
(statearr_17029_18889[(1)] = (4));

} else {
var statearr_17030_18890 = state_17010__$1;
(statearr_17030_18890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (11))){
var inst_16997 = cljs.core.async.close_BANG_(ch);
var state_17010__$1 = state_17010;
var statearr_17031_18891 = state_17010__$1;
(statearr_17031_18891[(2)] = inst_16997);

(statearr_17031_18891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (9))){
var state_17010__$1 = state_17010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17032_18892 = state_17010__$1;
(statearr_17032_18892[(1)] = (11));

} else {
var statearr_17033_18893 = state_17010__$1;
(statearr_17033_18893[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (5))){
var inst_16978 = (state_17010[(7)]);
var state_17010__$1 = state_17010;
var statearr_17034_18894 = state_17010__$1;
(statearr_17034_18894[(2)] = inst_16978);

(statearr_17034_18894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (10))){
var inst_17006 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
var statearr_17035_18895 = state_17010__$1;
(statearr_17035_18895[(2)] = inst_17006);

(statearr_17035_18895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (8))){
var inst_16978 = (state_17010[(7)]);
var inst_16993 = cljs.core.next(inst_16978);
var inst_16978__$1 = inst_16993;
var state_17010__$1 = (function (){var statearr_17036 = state_17010;
(statearr_17036[(7)] = inst_16978__$1);

return statearr_17036;
})();
var statearr_17037_18896 = state_17010__$1;
(statearr_17037_18896[(2)] = null);

(statearr_17037_18896[(1)] = (2));


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
});})(c__15982__auto__))
;
return ((function (switch__15760__auto__,c__15982__auto__){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_17038 = [null,null,null,null,null,null,null,null];
(statearr_17038[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_17038[(1)] = (1));

return statearr_17038;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_17010){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_17010);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e17040){if((e17040 instanceof Object)){
var ex__15764__auto__ = e17040;
var statearr_17041_18897 = state_17010;
(statearr_17041_18897[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17040;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18898 = state_17010;
state_17010 = G__18898;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_17010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_17010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto__))
})();
var state__15984__auto__ = (function (){var statearr_17042 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_17042[(6)] = c__15982__auto__);

return statearr_17042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto__))
);

return c__15982__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17059 = (function (ch,cs,meta17060){
this.ch = ch;
this.cs = cs;
this.meta17060 = meta17060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17061,meta17060__$1){
var self__ = this;
var _17061__$1 = this;
return (new cljs.core.async.t_cljs$core$async17059(self__.ch,self__.cs,meta17060__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17061){
var self__ = this;
var _17061__$1 = this;
return self__.meta17060;
});})(cs))
;

cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17059.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17060","meta17060",137534862,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17059";

cljs.core.async.t_cljs$core$async17059.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17059");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17059.
 */
cljs.core.async.__GT_t_cljs$core$async17059 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17059(ch__$1,cs__$1,meta17060){
return (new cljs.core.async.t_cljs$core$async17059(ch__$1,cs__$1,meta17060));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17059(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15982__auto___18914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___18914,cs,m,dchan,dctr,done){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___18914,cs,m,dchan,dctr,done){
return (function (state_17212){
var state_val_17213 = (state_17212[(1)]);
if((state_val_17213 === (7))){
var inst_17208 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17215_18919 = state_17212__$1;
(statearr_17215_18919[(2)] = inst_17208);

(statearr_17215_18919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (20))){
var inst_17107 = (state_17212[(7)]);
var inst_17120 = cljs.core.first(inst_17107);
var inst_17121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17120,(0),null);
var inst_17122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17120,(1),null);
var state_17212__$1 = (function (){var statearr_17220 = state_17212;
(statearr_17220[(8)] = inst_17121);

return statearr_17220;
})();
if(cljs.core.truth_(inst_17122)){
var statearr_17221_18920 = state_17212__$1;
(statearr_17221_18920[(1)] = (22));

} else {
var statearr_17222_18921 = state_17212__$1;
(statearr_17222_18921[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (27))){
var inst_17157 = (state_17212[(9)]);
var inst_17150 = (state_17212[(10)]);
var inst_17152 = (state_17212[(11)]);
var inst_17076 = (state_17212[(12)]);
var inst_17157__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17150,inst_17152);
var inst_17158 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17157__$1,inst_17076,done);
var state_17212__$1 = (function (){var statearr_17223 = state_17212;
(statearr_17223[(9)] = inst_17157__$1);

return statearr_17223;
})();
if(cljs.core.truth_(inst_17158)){
var statearr_17224_18922 = state_17212__$1;
(statearr_17224_18922[(1)] = (30));

} else {
var statearr_17225_18923 = state_17212__$1;
(statearr_17225_18923[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (1))){
var state_17212__$1 = state_17212;
var statearr_17226_18924 = state_17212__$1;
(statearr_17226_18924[(2)] = null);

(statearr_17226_18924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (24))){
var inst_17107 = (state_17212[(7)]);
var inst_17127 = (state_17212[(2)]);
var inst_17128 = cljs.core.next(inst_17107);
var inst_17085 = inst_17128;
var inst_17086 = null;
var inst_17087 = (0);
var inst_17088 = (0);
var state_17212__$1 = (function (){var statearr_17227 = state_17212;
(statearr_17227[(13)] = inst_17088);

(statearr_17227[(14)] = inst_17085);

(statearr_17227[(15)] = inst_17127);

(statearr_17227[(16)] = inst_17087);

(statearr_17227[(17)] = inst_17086);

return statearr_17227;
})();
var statearr_17228_18927 = state_17212__$1;
(statearr_17228_18927[(2)] = null);

(statearr_17228_18927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (39))){
var state_17212__$1 = state_17212;
var statearr_17232_18928 = state_17212__$1;
(statearr_17232_18928[(2)] = null);

(statearr_17232_18928[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (4))){
var inst_17076 = (state_17212[(12)]);
var inst_17076__$1 = (state_17212[(2)]);
var inst_17077 = (inst_17076__$1 == null);
var state_17212__$1 = (function (){var statearr_17233 = state_17212;
(statearr_17233[(12)] = inst_17076__$1);

return statearr_17233;
})();
if(cljs.core.truth_(inst_17077)){
var statearr_17234_18930 = state_17212__$1;
(statearr_17234_18930[(1)] = (5));

} else {
var statearr_17235_18932 = state_17212__$1;
(statearr_17235_18932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (15))){
var inst_17088 = (state_17212[(13)]);
var inst_17085 = (state_17212[(14)]);
var inst_17087 = (state_17212[(16)]);
var inst_17086 = (state_17212[(17)]);
var inst_17103 = (state_17212[(2)]);
var inst_17104 = (inst_17088 + (1));
var tmp17229 = inst_17085;
var tmp17230 = inst_17087;
var tmp17231 = inst_17086;
var inst_17085__$1 = tmp17229;
var inst_17086__$1 = tmp17231;
var inst_17087__$1 = tmp17230;
var inst_17088__$1 = inst_17104;
var state_17212__$1 = (function (){var statearr_17236 = state_17212;
(statearr_17236[(13)] = inst_17088__$1);

(statearr_17236[(14)] = inst_17085__$1);

(statearr_17236[(16)] = inst_17087__$1);

(statearr_17236[(18)] = inst_17103);

(statearr_17236[(17)] = inst_17086__$1);

return statearr_17236;
})();
var statearr_17237_18935 = state_17212__$1;
(statearr_17237_18935[(2)] = null);

(statearr_17237_18935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (21))){
var inst_17131 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17241_18936 = state_17212__$1;
(statearr_17241_18936[(2)] = inst_17131);

(statearr_17241_18936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (31))){
var inst_17157 = (state_17212[(9)]);
var inst_17161 = done(null);
var inst_17162 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17157);
var state_17212__$1 = (function (){var statearr_17242 = state_17212;
(statearr_17242[(19)] = inst_17161);

return statearr_17242;
})();
var statearr_17245_18940 = state_17212__$1;
(statearr_17245_18940[(2)] = inst_17162);

(statearr_17245_18940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (32))){
var inst_17151 = (state_17212[(20)]);
var inst_17150 = (state_17212[(10)]);
var inst_17149 = (state_17212[(21)]);
var inst_17152 = (state_17212[(11)]);
var inst_17164 = (state_17212[(2)]);
var inst_17165 = (inst_17152 + (1));
var tmp17238 = inst_17151;
var tmp17239 = inst_17150;
var tmp17240 = inst_17149;
var inst_17149__$1 = tmp17240;
var inst_17150__$1 = tmp17239;
var inst_17151__$1 = tmp17238;
var inst_17152__$1 = inst_17165;
var state_17212__$1 = (function (){var statearr_17247 = state_17212;
(statearr_17247[(20)] = inst_17151__$1);

(statearr_17247[(10)] = inst_17150__$1);

(statearr_17247[(21)] = inst_17149__$1);

(statearr_17247[(22)] = inst_17164);

(statearr_17247[(11)] = inst_17152__$1);

return statearr_17247;
})();
var statearr_17248_18942 = state_17212__$1;
(statearr_17248_18942[(2)] = null);

(statearr_17248_18942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (40))){
var inst_17177 = (state_17212[(23)]);
var inst_17181 = done(null);
var inst_17182 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17177);
var state_17212__$1 = (function (){var statearr_17249 = state_17212;
(statearr_17249[(24)] = inst_17181);

return statearr_17249;
})();
var statearr_17250_18945 = state_17212__$1;
(statearr_17250_18945[(2)] = inst_17182);

(statearr_17250_18945[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (33))){
var inst_17168 = (state_17212[(25)]);
var inst_17170 = cljs.core.chunked_seq_QMARK_(inst_17168);
var state_17212__$1 = state_17212;
if(inst_17170){
var statearr_17251_18946 = state_17212__$1;
(statearr_17251_18946[(1)] = (36));

} else {
var statearr_17252_18947 = state_17212__$1;
(statearr_17252_18947[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (13))){
var inst_17097 = (state_17212[(26)]);
var inst_17100 = cljs.core.async.close_BANG_(inst_17097);
var state_17212__$1 = state_17212;
var statearr_17253_18948 = state_17212__$1;
(statearr_17253_18948[(2)] = inst_17100);

(statearr_17253_18948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (22))){
var inst_17121 = (state_17212[(8)]);
var inst_17124 = cljs.core.async.close_BANG_(inst_17121);
var state_17212__$1 = state_17212;
var statearr_17254_18949 = state_17212__$1;
(statearr_17254_18949[(2)] = inst_17124);

(statearr_17254_18949[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (36))){
var inst_17168 = (state_17212[(25)]);
var inst_17172 = cljs.core.chunk_first(inst_17168);
var inst_17173 = cljs.core.chunk_rest(inst_17168);
var inst_17174 = cljs.core.count(inst_17172);
var inst_17149 = inst_17173;
var inst_17150 = inst_17172;
var inst_17151 = inst_17174;
var inst_17152 = (0);
var state_17212__$1 = (function (){var statearr_17259 = state_17212;
(statearr_17259[(20)] = inst_17151);

(statearr_17259[(10)] = inst_17150);

(statearr_17259[(21)] = inst_17149);

(statearr_17259[(11)] = inst_17152);

return statearr_17259;
})();
var statearr_17262_18950 = state_17212__$1;
(statearr_17262_18950[(2)] = null);

(statearr_17262_18950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (41))){
var inst_17168 = (state_17212[(25)]);
var inst_17184 = (state_17212[(2)]);
var inst_17185 = cljs.core.next(inst_17168);
var inst_17149 = inst_17185;
var inst_17150 = null;
var inst_17151 = (0);
var inst_17152 = (0);
var state_17212__$1 = (function (){var statearr_17263 = state_17212;
(statearr_17263[(20)] = inst_17151);

(statearr_17263[(10)] = inst_17150);

(statearr_17263[(21)] = inst_17149);

(statearr_17263[(27)] = inst_17184);

(statearr_17263[(11)] = inst_17152);

return statearr_17263;
})();
var statearr_17264_18951 = state_17212__$1;
(statearr_17264_18951[(2)] = null);

(statearr_17264_18951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (43))){
var state_17212__$1 = state_17212;
var statearr_17265_18956 = state_17212__$1;
(statearr_17265_18956[(2)] = null);

(statearr_17265_18956[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (29))){
var inst_17194 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17267_18957 = state_17212__$1;
(statearr_17267_18957[(2)] = inst_17194);

(statearr_17267_18957[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (44))){
var inst_17205 = (state_17212[(2)]);
var state_17212__$1 = (function (){var statearr_17268 = state_17212;
(statearr_17268[(28)] = inst_17205);

return statearr_17268;
})();
var statearr_17269_18958 = state_17212__$1;
(statearr_17269_18958[(2)] = null);

(statearr_17269_18958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (6))){
var inst_17141 = (state_17212[(29)]);
var inst_17140 = cljs.core.deref(cs);
var inst_17141__$1 = cljs.core.keys(inst_17140);
var inst_17142 = cljs.core.count(inst_17141__$1);
var inst_17143 = cljs.core.reset_BANG_(dctr,inst_17142);
var inst_17148 = cljs.core.seq(inst_17141__$1);
var inst_17149 = inst_17148;
var inst_17150 = null;
var inst_17151 = (0);
var inst_17152 = (0);
var state_17212__$1 = (function (){var statearr_17272 = state_17212;
(statearr_17272[(20)] = inst_17151);

(statearr_17272[(10)] = inst_17150);

(statearr_17272[(21)] = inst_17149);

(statearr_17272[(11)] = inst_17152);

(statearr_17272[(29)] = inst_17141__$1);

(statearr_17272[(30)] = inst_17143);

return statearr_17272;
})();
var statearr_17273_18963 = state_17212__$1;
(statearr_17273_18963[(2)] = null);

(statearr_17273_18963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (28))){
var inst_17149 = (state_17212[(21)]);
var inst_17168 = (state_17212[(25)]);
var inst_17168__$1 = cljs.core.seq(inst_17149);
var state_17212__$1 = (function (){var statearr_17274 = state_17212;
(statearr_17274[(25)] = inst_17168__$1);

return statearr_17274;
})();
if(inst_17168__$1){
var statearr_17275_18965 = state_17212__$1;
(statearr_17275_18965[(1)] = (33));

} else {
var statearr_17276_18966 = state_17212__$1;
(statearr_17276_18966[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (25))){
var inst_17151 = (state_17212[(20)]);
var inst_17152 = (state_17212[(11)]);
var inst_17154 = (inst_17152 < inst_17151);
var inst_17155 = inst_17154;
var state_17212__$1 = state_17212;
if(cljs.core.truth_(inst_17155)){
var statearr_17277_18967 = state_17212__$1;
(statearr_17277_18967[(1)] = (27));

} else {
var statearr_17278_18968 = state_17212__$1;
(statearr_17278_18968[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (34))){
var state_17212__$1 = state_17212;
var statearr_17279_18969 = state_17212__$1;
(statearr_17279_18969[(2)] = null);

(statearr_17279_18969[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (17))){
var state_17212__$1 = state_17212;
var statearr_17280_18970 = state_17212__$1;
(statearr_17280_18970[(2)] = null);

(statearr_17280_18970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (3))){
var inst_17210 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17212__$1,inst_17210);
} else {
if((state_val_17213 === (12))){
var inst_17136 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17283_18972 = state_17212__$1;
(statearr_17283_18972[(2)] = inst_17136);

(statearr_17283_18972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (2))){
var state_17212__$1 = state_17212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17212__$1,(4),ch);
} else {
if((state_val_17213 === (23))){
var state_17212__$1 = state_17212;
var statearr_17285_18973 = state_17212__$1;
(statearr_17285_18973[(2)] = null);

(statearr_17285_18973[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (35))){
var inst_17192 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17286_18974 = state_17212__$1;
(statearr_17286_18974[(2)] = inst_17192);

(statearr_17286_18974[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (19))){
var inst_17107 = (state_17212[(7)]);
var inst_17112 = cljs.core.chunk_first(inst_17107);
var inst_17113 = cljs.core.chunk_rest(inst_17107);
var inst_17114 = cljs.core.count(inst_17112);
var inst_17085 = inst_17113;
var inst_17086 = inst_17112;
var inst_17087 = inst_17114;
var inst_17088 = (0);
var state_17212__$1 = (function (){var statearr_17287 = state_17212;
(statearr_17287[(13)] = inst_17088);

(statearr_17287[(14)] = inst_17085);

(statearr_17287[(16)] = inst_17087);

(statearr_17287[(17)] = inst_17086);

return statearr_17287;
})();
var statearr_17288_18979 = state_17212__$1;
(statearr_17288_18979[(2)] = null);

(statearr_17288_18979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (11))){
var inst_17085 = (state_17212[(14)]);
var inst_17107 = (state_17212[(7)]);
var inst_17107__$1 = cljs.core.seq(inst_17085);
var state_17212__$1 = (function (){var statearr_17289 = state_17212;
(statearr_17289[(7)] = inst_17107__$1);

return statearr_17289;
})();
if(inst_17107__$1){
var statearr_17290_18980 = state_17212__$1;
(statearr_17290_18980[(1)] = (16));

} else {
var statearr_17291_18981 = state_17212__$1;
(statearr_17291_18981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (9))){
var inst_17138 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17293_18982 = state_17212__$1;
(statearr_17293_18982[(2)] = inst_17138);

(statearr_17293_18982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (5))){
var inst_17083 = cljs.core.deref(cs);
var inst_17084 = cljs.core.seq(inst_17083);
var inst_17085 = inst_17084;
var inst_17086 = null;
var inst_17087 = (0);
var inst_17088 = (0);
var state_17212__$1 = (function (){var statearr_17294 = state_17212;
(statearr_17294[(13)] = inst_17088);

(statearr_17294[(14)] = inst_17085);

(statearr_17294[(16)] = inst_17087);

(statearr_17294[(17)] = inst_17086);

return statearr_17294;
})();
var statearr_17295_18983 = state_17212__$1;
(statearr_17295_18983[(2)] = null);

(statearr_17295_18983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (14))){
var state_17212__$1 = state_17212;
var statearr_17296_18984 = state_17212__$1;
(statearr_17296_18984[(2)] = null);

(statearr_17296_18984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (45))){
var inst_17202 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17297_18985 = state_17212__$1;
(statearr_17297_18985[(2)] = inst_17202);

(statearr_17297_18985[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (26))){
var inst_17141 = (state_17212[(29)]);
var inst_17196 = (state_17212[(2)]);
var inst_17197 = cljs.core.seq(inst_17141);
var state_17212__$1 = (function (){var statearr_17298 = state_17212;
(statearr_17298[(31)] = inst_17196);

return statearr_17298;
})();
if(inst_17197){
var statearr_17299_18986 = state_17212__$1;
(statearr_17299_18986[(1)] = (42));

} else {
var statearr_17300_18987 = state_17212__$1;
(statearr_17300_18987[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (16))){
var inst_17107 = (state_17212[(7)]);
var inst_17110 = cljs.core.chunked_seq_QMARK_(inst_17107);
var state_17212__$1 = state_17212;
if(inst_17110){
var statearr_17301_18988 = state_17212__$1;
(statearr_17301_18988[(1)] = (19));

} else {
var statearr_17302_18989 = state_17212__$1;
(statearr_17302_18989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (38))){
var inst_17189 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17303_18991 = state_17212__$1;
(statearr_17303_18991[(2)] = inst_17189);

(statearr_17303_18991[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (30))){
var state_17212__$1 = state_17212;
var statearr_17304_18992 = state_17212__$1;
(statearr_17304_18992[(2)] = null);

(statearr_17304_18992[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (10))){
var inst_17088 = (state_17212[(13)]);
var inst_17086 = (state_17212[(17)]);
var inst_17096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17086,inst_17088);
var inst_17097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17096,(0),null);
var inst_17098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17096,(1),null);
var state_17212__$1 = (function (){var statearr_17305 = state_17212;
(statearr_17305[(26)] = inst_17097);

return statearr_17305;
})();
if(cljs.core.truth_(inst_17098)){
var statearr_17306_18993 = state_17212__$1;
(statearr_17306_18993[(1)] = (13));

} else {
var statearr_17307_18994 = state_17212__$1;
(statearr_17307_18994[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (18))){
var inst_17134 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17308_18995 = state_17212__$1;
(statearr_17308_18995[(2)] = inst_17134);

(statearr_17308_18995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (42))){
var state_17212__$1 = state_17212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17212__$1,(45),dchan);
} else {
if((state_val_17213 === (37))){
var inst_17177 = (state_17212[(23)]);
var inst_17168 = (state_17212[(25)]);
var inst_17076 = (state_17212[(12)]);
var inst_17177__$1 = cljs.core.first(inst_17168);
var inst_17178 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17177__$1,inst_17076,done);
var state_17212__$1 = (function (){var statearr_17309 = state_17212;
(statearr_17309[(23)] = inst_17177__$1);

return statearr_17309;
})();
if(cljs.core.truth_(inst_17178)){
var statearr_17310_19003 = state_17212__$1;
(statearr_17310_19003[(1)] = (39));

} else {
var statearr_17311_19004 = state_17212__$1;
(statearr_17311_19004[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (8))){
var inst_17088 = (state_17212[(13)]);
var inst_17087 = (state_17212[(16)]);
var inst_17090 = (inst_17088 < inst_17087);
var inst_17091 = inst_17090;
var state_17212__$1 = state_17212;
if(cljs.core.truth_(inst_17091)){
var statearr_17312_19006 = state_17212__$1;
(statearr_17312_19006[(1)] = (10));

} else {
var statearr_17313_19007 = state_17212__$1;
(statearr_17313_19007[(1)] = (11));

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
});})(c__15982__auto___18914,cs,m,dchan,dctr,done))
;
return ((function (switch__15760__auto__,c__15982__auto___18914,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15761__auto__ = null;
var cljs$core$async$mult_$_state_machine__15761__auto____0 = (function (){
var statearr_17314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17314[(0)] = cljs$core$async$mult_$_state_machine__15761__auto__);

(statearr_17314[(1)] = (1));

return statearr_17314;
});
var cljs$core$async$mult_$_state_machine__15761__auto____1 = (function (state_17212){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_17212);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e17315){if((e17315 instanceof Object)){
var ex__15764__auto__ = e17315;
var statearr_17316_19009 = state_17212;
(statearr_17316_19009[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19010 = state_17212;
state_17212 = G__19010;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15761__auto__ = function(state_17212){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15761__auto____1.call(this,state_17212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15761__auto____0;
cljs$core$async$mult_$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15761__auto____1;
return cljs$core$async$mult_$_state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___18914,cs,m,dchan,dctr,done))
})();
var state__15984__auto__ = (function (){var statearr_17317 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_17317[(6)] = c__15982__auto___18914);

return statearr_17317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___18914,cs,m,dchan,dctr,done))
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
var G__17319 = arguments.length;
switch (G__17319) {
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
var len__4641__auto___19024 = arguments.length;
var i__4642__auto___19025 = (0);
while(true){
if((i__4642__auto___19025 < len__4641__auto___19024)){
args__4647__auto__.push((arguments[i__4642__auto___19025]));

var G__19026 = (i__4642__auto___19025 + (1));
i__4642__auto___19025 = G__19026;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17325){
var map__17326 = p__17325;
var map__17326__$1 = (((((!((map__17326 == null))))?(((((map__17326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17326):map__17326);
var opts = map__17326__$1;
var statearr_17328_19027 = state;
(statearr_17328_19027[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__17326,map__17326__$1,opts){
return (function (val){
var statearr_17329_19028 = state;
(statearr_17329_19028[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17326,map__17326__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17330_19029 = state;
(statearr_17330_19029[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17321){
var G__17322 = cljs.core.first(seq17321);
var seq17321__$1 = cljs.core.next(seq17321);
var G__17323 = cljs.core.first(seq17321__$1);
var seq17321__$2 = cljs.core.next(seq17321__$1);
var G__17324 = cljs.core.first(seq17321__$2);
var seq17321__$3 = cljs.core.next(seq17321__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17322,G__17323,G__17324,seq17321__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17331 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17332){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17332 = meta17332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17333,meta17332__$1){
var self__ = this;
var _17333__$1 = this;
return (new cljs.core.async.t_cljs$core$async17331(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17332__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17333){
var self__ = this;
var _17333__$1 = this;
return self__.meta17332;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17331.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17332","meta17332",1650219018,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17331";

cljs.core.async.t_cljs$core$async17331.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17331");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17331.
 */
cljs.core.async.__GT_t_cljs$core$async17331 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17331(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17332){
return (new cljs.core.async.t_cljs$core$async17331(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17332));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17331(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15982__auto___19040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17441){
var state_val_17442 = (state_17441[(1)]);
if((state_val_17442 === (7))){
var inst_17356 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
var statearr_17443_19041 = state_17441__$1;
(statearr_17443_19041[(2)] = inst_17356);

(statearr_17443_19041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (20))){
var inst_17368 = (state_17441[(7)]);
var state_17441__$1 = state_17441;
var statearr_17448_19042 = state_17441__$1;
(statearr_17448_19042[(2)] = inst_17368);

(statearr_17448_19042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (27))){
var state_17441__$1 = state_17441;
var statearr_17449_19043 = state_17441__$1;
(statearr_17449_19043[(2)] = null);

(statearr_17449_19043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (1))){
var inst_17343 = (state_17441[(8)]);
var inst_17343__$1 = calc_state();
var inst_17345 = (inst_17343__$1 == null);
var inst_17346 = cljs.core.not(inst_17345);
var state_17441__$1 = (function (){var statearr_17450 = state_17441;
(statearr_17450[(8)] = inst_17343__$1);

return statearr_17450;
})();
if(inst_17346){
var statearr_17451_19044 = state_17441__$1;
(statearr_17451_19044[(1)] = (2));

} else {
var statearr_17454_19045 = state_17441__$1;
(statearr_17454_19045[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (24))){
var inst_17415 = (state_17441[(9)]);
var inst_17392 = (state_17441[(10)]);
var inst_17401 = (state_17441[(11)]);
var inst_17415__$1 = (inst_17392.cljs$core$IFn$_invoke$arity$1 ? inst_17392.cljs$core$IFn$_invoke$arity$1(inst_17401) : inst_17392.call(null,inst_17401));
var state_17441__$1 = (function (){var statearr_17457 = state_17441;
(statearr_17457[(9)] = inst_17415__$1);

return statearr_17457;
})();
if(cljs.core.truth_(inst_17415__$1)){
var statearr_17458_19046 = state_17441__$1;
(statearr_17458_19046[(1)] = (29));

} else {
var statearr_17459_19047 = state_17441__$1;
(statearr_17459_19047[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (4))){
var inst_17359 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
if(cljs.core.truth_(inst_17359)){
var statearr_17461_19048 = state_17441__$1;
(statearr_17461_19048[(1)] = (8));

} else {
var statearr_17462_19049 = state_17441__$1;
(statearr_17462_19049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (15))){
var inst_17386 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
if(cljs.core.truth_(inst_17386)){
var statearr_17463_19050 = state_17441__$1;
(statearr_17463_19050[(1)] = (19));

} else {
var statearr_17464_19051 = state_17441__$1;
(statearr_17464_19051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (21))){
var inst_17391 = (state_17441[(12)]);
var inst_17391__$1 = (state_17441[(2)]);
var inst_17392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17391__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17391__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17391__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17441__$1 = (function (){var statearr_17465 = state_17441;
(statearr_17465[(10)] = inst_17392);

(statearr_17465[(13)] = inst_17393);

(statearr_17465[(12)] = inst_17391__$1);

return statearr_17465;
})();
return cljs.core.async.ioc_alts_BANG_(state_17441__$1,(22),inst_17394);
} else {
if((state_val_17442 === (31))){
var inst_17423 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
if(cljs.core.truth_(inst_17423)){
var statearr_17466_19056 = state_17441__$1;
(statearr_17466_19056[(1)] = (32));

} else {
var statearr_17467_19057 = state_17441__$1;
(statearr_17467_19057[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (32))){
var inst_17400 = (state_17441[(14)]);
var state_17441__$1 = state_17441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17441__$1,(35),out,inst_17400);
} else {
if((state_val_17442 === (33))){
var inst_17391 = (state_17441[(12)]);
var inst_17368 = inst_17391;
var state_17441__$1 = (function (){var statearr_17470 = state_17441;
(statearr_17470[(7)] = inst_17368);

return statearr_17470;
})();
var statearr_17471_19058 = state_17441__$1;
(statearr_17471_19058[(2)] = null);

(statearr_17471_19058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (13))){
var inst_17368 = (state_17441[(7)]);
var inst_17375 = inst_17368.cljs$lang$protocol_mask$partition0$;
var inst_17376 = (inst_17375 & (64));
var inst_17377 = inst_17368.cljs$core$ISeq$;
var inst_17378 = (cljs.core.PROTOCOL_SENTINEL === inst_17377);
var inst_17379 = ((inst_17376) || (inst_17378));
var state_17441__$1 = state_17441;
if(cljs.core.truth_(inst_17379)){
var statearr_17475_19059 = state_17441__$1;
(statearr_17475_19059[(1)] = (16));

} else {
var statearr_17476_19060 = state_17441__$1;
(statearr_17476_19060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (22))){
var inst_17400 = (state_17441[(14)]);
var inst_17401 = (state_17441[(11)]);
var inst_17399 = (state_17441[(2)]);
var inst_17400__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17399,(0),null);
var inst_17401__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17399,(1),null);
var inst_17402 = (inst_17400__$1 == null);
var inst_17403 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17401__$1,change);
var inst_17404 = ((inst_17402) || (inst_17403));
var state_17441__$1 = (function (){var statearr_17477 = state_17441;
(statearr_17477[(14)] = inst_17400__$1);

(statearr_17477[(11)] = inst_17401__$1);

return statearr_17477;
})();
if(cljs.core.truth_(inst_17404)){
var statearr_17478_19061 = state_17441__$1;
(statearr_17478_19061[(1)] = (23));

} else {
var statearr_17479_19062 = state_17441__$1;
(statearr_17479_19062[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (36))){
var inst_17391 = (state_17441[(12)]);
var inst_17368 = inst_17391;
var state_17441__$1 = (function (){var statearr_17483 = state_17441;
(statearr_17483[(7)] = inst_17368);

return statearr_17483;
})();
var statearr_17484_19064 = state_17441__$1;
(statearr_17484_19064[(2)] = null);

(statearr_17484_19064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (29))){
var inst_17415 = (state_17441[(9)]);
var state_17441__$1 = state_17441;
var statearr_17486_19066 = state_17441__$1;
(statearr_17486_19066[(2)] = inst_17415);

(statearr_17486_19066[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (6))){
var state_17441__$1 = state_17441;
var statearr_17487_19067 = state_17441__$1;
(statearr_17487_19067[(2)] = false);

(statearr_17487_19067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (28))){
var inst_17411 = (state_17441[(2)]);
var inst_17412 = calc_state();
var inst_17368 = inst_17412;
var state_17441__$1 = (function (){var statearr_17488 = state_17441;
(statearr_17488[(7)] = inst_17368);

(statearr_17488[(15)] = inst_17411);

return statearr_17488;
})();
var statearr_17489_19068 = state_17441__$1;
(statearr_17489_19068[(2)] = null);

(statearr_17489_19068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (25))){
var inst_17437 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
var statearr_17490_19069 = state_17441__$1;
(statearr_17490_19069[(2)] = inst_17437);

(statearr_17490_19069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (34))){
var inst_17435 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
var statearr_17495_19070 = state_17441__$1;
(statearr_17495_19070[(2)] = inst_17435);

(statearr_17495_19070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (17))){
var state_17441__$1 = state_17441;
var statearr_17500_19071 = state_17441__$1;
(statearr_17500_19071[(2)] = false);

(statearr_17500_19071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (3))){
var state_17441__$1 = state_17441;
var statearr_17501_19072 = state_17441__$1;
(statearr_17501_19072[(2)] = false);

(statearr_17501_19072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (12))){
var inst_17439 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17441__$1,inst_17439);
} else {
if((state_val_17442 === (2))){
var inst_17343 = (state_17441[(8)]);
var inst_17348 = inst_17343.cljs$lang$protocol_mask$partition0$;
var inst_17349 = (inst_17348 & (64));
var inst_17350 = inst_17343.cljs$core$ISeq$;
var inst_17351 = (cljs.core.PROTOCOL_SENTINEL === inst_17350);
var inst_17352 = ((inst_17349) || (inst_17351));
var state_17441__$1 = state_17441;
if(cljs.core.truth_(inst_17352)){
var statearr_17504_19073 = state_17441__$1;
(statearr_17504_19073[(1)] = (5));

} else {
var statearr_17505_19074 = state_17441__$1;
(statearr_17505_19074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (23))){
var inst_17400 = (state_17441[(14)]);
var inst_17406 = (inst_17400 == null);
var state_17441__$1 = state_17441;
if(cljs.core.truth_(inst_17406)){
var statearr_17509_19077 = state_17441__$1;
(statearr_17509_19077[(1)] = (26));

} else {
var statearr_17510_19078 = state_17441__$1;
(statearr_17510_19078[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (35))){
var inst_17426 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
if(cljs.core.truth_(inst_17426)){
var statearr_17512_19079 = state_17441__$1;
(statearr_17512_19079[(1)] = (36));

} else {
var statearr_17513_19080 = state_17441__$1;
(statearr_17513_19080[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (19))){
var inst_17368 = (state_17441[(7)]);
var inst_17388 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17368);
var state_17441__$1 = state_17441;
var statearr_17514_19081 = state_17441__$1;
(statearr_17514_19081[(2)] = inst_17388);

(statearr_17514_19081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (11))){
var inst_17368 = (state_17441[(7)]);
var inst_17372 = (inst_17368 == null);
var inst_17373 = cljs.core.not(inst_17372);
var state_17441__$1 = state_17441;
if(inst_17373){
var statearr_17515_19084 = state_17441__$1;
(statearr_17515_19084[(1)] = (13));

} else {
var statearr_17516_19085 = state_17441__$1;
(statearr_17516_19085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (9))){
var inst_17343 = (state_17441[(8)]);
var state_17441__$1 = state_17441;
var statearr_17521_19086 = state_17441__$1;
(statearr_17521_19086[(2)] = inst_17343);

(statearr_17521_19086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (5))){
var state_17441__$1 = state_17441;
var statearr_17522_19087 = state_17441__$1;
(statearr_17522_19087[(2)] = true);

(statearr_17522_19087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (14))){
var state_17441__$1 = state_17441;
var statearr_17523_19088 = state_17441__$1;
(statearr_17523_19088[(2)] = false);

(statearr_17523_19088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (26))){
var inst_17401 = (state_17441[(11)]);
var inst_17408 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17401);
var state_17441__$1 = state_17441;
var statearr_17524_19089 = state_17441__$1;
(statearr_17524_19089[(2)] = inst_17408);

(statearr_17524_19089[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (16))){
var state_17441__$1 = state_17441;
var statearr_17525_19090 = state_17441__$1;
(statearr_17525_19090[(2)] = true);

(statearr_17525_19090[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (38))){
var inst_17431 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
var statearr_17526_19091 = state_17441__$1;
(statearr_17526_19091[(2)] = inst_17431);

(statearr_17526_19091[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (30))){
var inst_17392 = (state_17441[(10)]);
var inst_17393 = (state_17441[(13)]);
var inst_17401 = (state_17441[(11)]);
var inst_17418 = cljs.core.empty_QMARK_(inst_17392);
var inst_17419 = (inst_17393.cljs$core$IFn$_invoke$arity$1 ? inst_17393.cljs$core$IFn$_invoke$arity$1(inst_17401) : inst_17393.call(null,inst_17401));
var inst_17420 = cljs.core.not(inst_17419);
var inst_17421 = ((inst_17418) && (inst_17420));
var state_17441__$1 = state_17441;
var statearr_17527_19093 = state_17441__$1;
(statearr_17527_19093[(2)] = inst_17421);

(statearr_17527_19093[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (10))){
var inst_17343 = (state_17441[(8)]);
var inst_17364 = (state_17441[(2)]);
var inst_17365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17364,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17364,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17364,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17368 = inst_17343;
var state_17441__$1 = (function (){var statearr_17533 = state_17441;
(statearr_17533[(16)] = inst_17366);

(statearr_17533[(7)] = inst_17368);

(statearr_17533[(17)] = inst_17367);

(statearr_17533[(18)] = inst_17365);

return statearr_17533;
})();
var statearr_17538_19094 = state_17441__$1;
(statearr_17538_19094[(2)] = null);

(statearr_17538_19094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (18))){
var inst_17383 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
var statearr_17539_19095 = state_17441__$1;
(statearr_17539_19095[(2)] = inst_17383);

(statearr_17539_19095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (37))){
var state_17441__$1 = state_17441;
var statearr_17545_19096 = state_17441__$1;
(statearr_17545_19096[(2)] = null);

(statearr_17545_19096[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (8))){
var inst_17343 = (state_17441[(8)]);
var inst_17361 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17343);
var state_17441__$1 = state_17441;
var statearr_17546_19097 = state_17441__$1;
(statearr_17546_19097[(2)] = inst_17361);

(statearr_17546_19097[(1)] = (10));


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
});})(c__15982__auto___19040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15760__auto__,c__15982__auto___19040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15761__auto__ = null;
var cljs$core$async$mix_$_state_machine__15761__auto____0 = (function (){
var statearr_17556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17556[(0)] = cljs$core$async$mix_$_state_machine__15761__auto__);

(statearr_17556[(1)] = (1));

return statearr_17556;
});
var cljs$core$async$mix_$_state_machine__15761__auto____1 = (function (state_17441){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_17441);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e17557){if((e17557 instanceof Object)){
var ex__15764__auto__ = e17557;
var statearr_17559_19100 = state_17441;
(statearr_17559_19100[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19108 = state_17441;
state_17441 = G__19108;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15761__auto__ = function(state_17441){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15761__auto____1.call(this,state_17441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15761__auto____0;
cljs$core$async$mix_$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15761__auto____1;
return cljs$core$async$mix_$_state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15984__auto__ = (function (){var statearr_17564 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_17564[(6)] = c__15982__auto___19040);

return statearr_17564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__17571 = arguments.length;
switch (G__17571) {
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
var G__17579 = arguments.length;
switch (G__17579) {
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
return (function (p1__17577_SHARP_){
if(cljs.core.truth_((p1__17577_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17577_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17577_SHARP_.call(null,topic)))){
return p1__17577_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17577_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17608 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17609){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17609 = meta17609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17610,meta17609__$1){
var self__ = this;
var _17610__$1 = this;
return (new cljs.core.async.t_cljs$core$async17608(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17609__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17610){
var self__ = this;
var _17610__$1 = this;
return self__.meta17609;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17608.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17609","meta17609",-1018724522,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17608";

cljs.core.async.t_cljs$core$async17608.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17608");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17608.
 */
cljs.core.async.__GT_t_cljs$core$async17608 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17608(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17609){
return (new cljs.core.async.t_cljs$core$async17608(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17609));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17608(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15982__auto___19147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19147,mults,ensure_mult,p){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19147,mults,ensure_mult,p){
return (function (state_17688){
var state_val_17689 = (state_17688[(1)]);
if((state_val_17689 === (7))){
var inst_17684 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17690_19148 = state_17688__$1;
(statearr_17690_19148[(2)] = inst_17684);

(statearr_17690_19148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (20))){
var state_17688__$1 = state_17688;
var statearr_17691_19150 = state_17688__$1;
(statearr_17691_19150[(2)] = null);

(statearr_17691_19150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (1))){
var state_17688__$1 = state_17688;
var statearr_17692_19151 = state_17688__$1;
(statearr_17692_19151[(2)] = null);

(statearr_17692_19151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (24))){
var inst_17667 = (state_17688[(7)]);
var inst_17676 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17667);
var state_17688__$1 = state_17688;
var statearr_17693_19153 = state_17688__$1;
(statearr_17693_19153[(2)] = inst_17676);

(statearr_17693_19153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (4))){
var inst_17619 = (state_17688[(8)]);
var inst_17619__$1 = (state_17688[(2)]);
var inst_17620 = (inst_17619__$1 == null);
var state_17688__$1 = (function (){var statearr_17694 = state_17688;
(statearr_17694[(8)] = inst_17619__$1);

return statearr_17694;
})();
if(cljs.core.truth_(inst_17620)){
var statearr_17695_19154 = state_17688__$1;
(statearr_17695_19154[(1)] = (5));

} else {
var statearr_17696_19155 = state_17688__$1;
(statearr_17696_19155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (15))){
var inst_17661 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17697_19156 = state_17688__$1;
(statearr_17697_19156[(2)] = inst_17661);

(statearr_17697_19156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (21))){
var inst_17681 = (state_17688[(2)]);
var state_17688__$1 = (function (){var statearr_17698 = state_17688;
(statearr_17698[(9)] = inst_17681);

return statearr_17698;
})();
var statearr_17699_19157 = state_17688__$1;
(statearr_17699_19157[(2)] = null);

(statearr_17699_19157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (13))){
var inst_17643 = (state_17688[(10)]);
var inst_17645 = cljs.core.chunked_seq_QMARK_(inst_17643);
var state_17688__$1 = state_17688;
if(inst_17645){
var statearr_17700_19158 = state_17688__$1;
(statearr_17700_19158[(1)] = (16));

} else {
var statearr_17701_19162 = state_17688__$1;
(statearr_17701_19162[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (22))){
var inst_17673 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
if(cljs.core.truth_(inst_17673)){
var statearr_17702_19163 = state_17688__$1;
(statearr_17702_19163[(1)] = (23));

} else {
var statearr_17703_19164 = state_17688__$1;
(statearr_17703_19164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (6))){
var inst_17619 = (state_17688[(8)]);
var inst_17667 = (state_17688[(7)]);
var inst_17669 = (state_17688[(11)]);
var inst_17667__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17619) : topic_fn.call(null,inst_17619));
var inst_17668 = cljs.core.deref(mults);
var inst_17669__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17668,inst_17667__$1);
var state_17688__$1 = (function (){var statearr_17704 = state_17688;
(statearr_17704[(7)] = inst_17667__$1);

(statearr_17704[(11)] = inst_17669__$1);

return statearr_17704;
})();
if(cljs.core.truth_(inst_17669__$1)){
var statearr_17705_19171 = state_17688__$1;
(statearr_17705_19171[(1)] = (19));

} else {
var statearr_17706_19172 = state_17688__$1;
(statearr_17706_19172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (25))){
var inst_17678 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17707_19173 = state_17688__$1;
(statearr_17707_19173[(2)] = inst_17678);

(statearr_17707_19173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (17))){
var inst_17643 = (state_17688[(10)]);
var inst_17652 = cljs.core.first(inst_17643);
var inst_17653 = cljs.core.async.muxch_STAR_(inst_17652);
var inst_17654 = cljs.core.async.close_BANG_(inst_17653);
var inst_17655 = cljs.core.next(inst_17643);
var inst_17629 = inst_17655;
var inst_17630 = null;
var inst_17631 = (0);
var inst_17632 = (0);
var state_17688__$1 = (function (){var statearr_17708 = state_17688;
(statearr_17708[(12)] = inst_17632);

(statearr_17708[(13)] = inst_17629);

(statearr_17708[(14)] = inst_17630);

(statearr_17708[(15)] = inst_17631);

(statearr_17708[(16)] = inst_17654);

return statearr_17708;
})();
var statearr_17709_19175 = state_17688__$1;
(statearr_17709_19175[(2)] = null);

(statearr_17709_19175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (3))){
var inst_17686 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17688__$1,inst_17686);
} else {
if((state_val_17689 === (12))){
var inst_17663 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17710_19176 = state_17688__$1;
(statearr_17710_19176[(2)] = inst_17663);

(statearr_17710_19176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (2))){
var state_17688__$1 = state_17688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17688__$1,(4),ch);
} else {
if((state_val_17689 === (23))){
var state_17688__$1 = state_17688;
var statearr_17711_19177 = state_17688__$1;
(statearr_17711_19177[(2)] = null);

(statearr_17711_19177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (19))){
var inst_17619 = (state_17688[(8)]);
var inst_17669 = (state_17688[(11)]);
var inst_17671 = cljs.core.async.muxch_STAR_(inst_17669);
var state_17688__$1 = state_17688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17688__$1,(22),inst_17671,inst_17619);
} else {
if((state_val_17689 === (11))){
var inst_17643 = (state_17688[(10)]);
var inst_17629 = (state_17688[(13)]);
var inst_17643__$1 = cljs.core.seq(inst_17629);
var state_17688__$1 = (function (){var statearr_17715 = state_17688;
(statearr_17715[(10)] = inst_17643__$1);

return statearr_17715;
})();
if(inst_17643__$1){
var statearr_17716_19178 = state_17688__$1;
(statearr_17716_19178[(1)] = (13));

} else {
var statearr_17717_19179 = state_17688__$1;
(statearr_17717_19179[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (9))){
var inst_17665 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17718_19180 = state_17688__$1;
(statearr_17718_19180[(2)] = inst_17665);

(statearr_17718_19180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (5))){
var inst_17626 = cljs.core.deref(mults);
var inst_17627 = cljs.core.vals(inst_17626);
var inst_17628 = cljs.core.seq(inst_17627);
var inst_17629 = inst_17628;
var inst_17630 = null;
var inst_17631 = (0);
var inst_17632 = (0);
var state_17688__$1 = (function (){var statearr_17719 = state_17688;
(statearr_17719[(12)] = inst_17632);

(statearr_17719[(13)] = inst_17629);

(statearr_17719[(14)] = inst_17630);

(statearr_17719[(15)] = inst_17631);

return statearr_17719;
})();
var statearr_17720_19181 = state_17688__$1;
(statearr_17720_19181[(2)] = null);

(statearr_17720_19181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (14))){
var state_17688__$1 = state_17688;
var statearr_17726_19182 = state_17688__$1;
(statearr_17726_19182[(2)] = null);

(statearr_17726_19182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (16))){
var inst_17643 = (state_17688[(10)]);
var inst_17647 = cljs.core.chunk_first(inst_17643);
var inst_17648 = cljs.core.chunk_rest(inst_17643);
var inst_17649 = cljs.core.count(inst_17647);
var inst_17629 = inst_17648;
var inst_17630 = inst_17647;
var inst_17631 = inst_17649;
var inst_17632 = (0);
var state_17688__$1 = (function (){var statearr_17727 = state_17688;
(statearr_17727[(12)] = inst_17632);

(statearr_17727[(13)] = inst_17629);

(statearr_17727[(14)] = inst_17630);

(statearr_17727[(15)] = inst_17631);

return statearr_17727;
})();
var statearr_17728_19183 = state_17688__$1;
(statearr_17728_19183[(2)] = null);

(statearr_17728_19183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (10))){
var inst_17632 = (state_17688[(12)]);
var inst_17629 = (state_17688[(13)]);
var inst_17630 = (state_17688[(14)]);
var inst_17631 = (state_17688[(15)]);
var inst_17637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17630,inst_17632);
var inst_17638 = cljs.core.async.muxch_STAR_(inst_17637);
var inst_17639 = cljs.core.async.close_BANG_(inst_17638);
var inst_17640 = (inst_17632 + (1));
var tmp17721 = inst_17629;
var tmp17722 = inst_17630;
var tmp17723 = inst_17631;
var inst_17629__$1 = tmp17721;
var inst_17630__$1 = tmp17722;
var inst_17631__$1 = tmp17723;
var inst_17632__$1 = inst_17640;
var state_17688__$1 = (function (){var statearr_17729 = state_17688;
(statearr_17729[(12)] = inst_17632__$1);

(statearr_17729[(13)] = inst_17629__$1);

(statearr_17729[(14)] = inst_17630__$1);

(statearr_17729[(15)] = inst_17631__$1);

(statearr_17729[(17)] = inst_17639);

return statearr_17729;
})();
var statearr_17730_19184 = state_17688__$1;
(statearr_17730_19184[(2)] = null);

(statearr_17730_19184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (18))){
var inst_17658 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17734_19186 = state_17688__$1;
(statearr_17734_19186[(2)] = inst_17658);

(statearr_17734_19186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (8))){
var inst_17632 = (state_17688[(12)]);
var inst_17631 = (state_17688[(15)]);
var inst_17634 = (inst_17632 < inst_17631);
var inst_17635 = inst_17634;
var state_17688__$1 = state_17688;
if(cljs.core.truth_(inst_17635)){
var statearr_17735_19189 = state_17688__$1;
(statearr_17735_19189[(1)] = (10));

} else {
var statearr_17736_19190 = state_17688__$1;
(statearr_17736_19190[(1)] = (11));

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
});})(c__15982__auto___19147,mults,ensure_mult,p))
;
return ((function (switch__15760__auto__,c__15982__auto___19147,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_17737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17737[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_17737[(1)] = (1));

return statearr_17737;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_17688){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_17688);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e17738){if((e17738 instanceof Object)){
var ex__15764__auto__ = e17738;
var statearr_17739_19192 = state_17688;
(statearr_17739_19192[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19193 = state_17688;
state_17688 = G__19193;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_17688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_17688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19147,mults,ensure_mult,p))
})();
var state__15984__auto__ = (function (){var statearr_17742 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_17742[(6)] = c__15982__auto___19147);

return statearr_17742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19147,mults,ensure_mult,p))
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
var G__17744 = arguments.length;
switch (G__17744) {
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
var G__17749 = arguments.length;
switch (G__17749) {
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
var G__17751 = arguments.length;
switch (G__17751) {
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
var c__15982__auto___19198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17798){
var state_val_17799 = (state_17798[(1)]);
if((state_val_17799 === (7))){
var state_17798__$1 = state_17798;
var statearr_17800_19200 = state_17798__$1;
(statearr_17800_19200[(2)] = null);

(statearr_17800_19200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (1))){
var state_17798__$1 = state_17798;
var statearr_17801_19201 = state_17798__$1;
(statearr_17801_19201[(2)] = null);

(statearr_17801_19201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (4))){
var inst_17762 = (state_17798[(7)]);
var inst_17764 = (inst_17762 < cnt);
var state_17798__$1 = state_17798;
if(cljs.core.truth_(inst_17764)){
var statearr_17802_19202 = state_17798__$1;
(statearr_17802_19202[(1)] = (6));

} else {
var statearr_17803_19204 = state_17798__$1;
(statearr_17803_19204[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (15))){
var inst_17794 = (state_17798[(2)]);
var state_17798__$1 = state_17798;
var statearr_17804_19205 = state_17798__$1;
(statearr_17804_19205[(2)] = inst_17794);

(statearr_17804_19205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (13))){
var inst_17787 = cljs.core.async.close_BANG_(out);
var state_17798__$1 = state_17798;
var statearr_17805_19206 = state_17798__$1;
(statearr_17805_19206[(2)] = inst_17787);

(statearr_17805_19206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (6))){
var state_17798__$1 = state_17798;
var statearr_17806_19207 = state_17798__$1;
(statearr_17806_19207[(2)] = null);

(statearr_17806_19207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (3))){
var inst_17796 = (state_17798[(2)]);
var state_17798__$1 = state_17798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17798__$1,inst_17796);
} else {
if((state_val_17799 === (12))){
var inst_17784 = (state_17798[(8)]);
var inst_17784__$1 = (state_17798[(2)]);
var inst_17785 = cljs.core.some(cljs.core.nil_QMARK_,inst_17784__$1);
var state_17798__$1 = (function (){var statearr_17807 = state_17798;
(statearr_17807[(8)] = inst_17784__$1);

return statearr_17807;
})();
if(cljs.core.truth_(inst_17785)){
var statearr_17808_19209 = state_17798__$1;
(statearr_17808_19209[(1)] = (13));

} else {
var statearr_17809_19210 = state_17798__$1;
(statearr_17809_19210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (2))){
var inst_17761 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17762 = (0);
var state_17798__$1 = (function (){var statearr_17810 = state_17798;
(statearr_17810[(9)] = inst_17761);

(statearr_17810[(7)] = inst_17762);

return statearr_17810;
})();
var statearr_17811_19211 = state_17798__$1;
(statearr_17811_19211[(2)] = null);

(statearr_17811_19211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (11))){
var inst_17762 = (state_17798[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17798,(10),Object,null,(9));
var inst_17771 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17762) : chs__$1.call(null,inst_17762));
var inst_17772 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17762) : done.call(null,inst_17762));
var inst_17773 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17771,inst_17772);
var state_17798__$1 = state_17798;
var statearr_17812_19213 = state_17798__$1;
(statearr_17812_19213[(2)] = inst_17773);


cljs.core.async.impl.ioc_helpers.process_exception(state_17798__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (9))){
var inst_17762 = (state_17798[(7)]);
var inst_17775 = (state_17798[(2)]);
var inst_17776 = (inst_17762 + (1));
var inst_17762__$1 = inst_17776;
var state_17798__$1 = (function (){var statearr_17813 = state_17798;
(statearr_17813[(10)] = inst_17775);

(statearr_17813[(7)] = inst_17762__$1);

return statearr_17813;
})();
var statearr_17814_19214 = state_17798__$1;
(statearr_17814_19214[(2)] = null);

(statearr_17814_19214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (5))){
var inst_17782 = (state_17798[(2)]);
var state_17798__$1 = (function (){var statearr_17815 = state_17798;
(statearr_17815[(11)] = inst_17782);

return statearr_17815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17798__$1,(12),dchan);
} else {
if((state_val_17799 === (14))){
var inst_17784 = (state_17798[(8)]);
var inst_17789 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17784);
var state_17798__$1 = state_17798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17798__$1,(16),out,inst_17789);
} else {
if((state_val_17799 === (16))){
var inst_17791 = (state_17798[(2)]);
var state_17798__$1 = (function (){var statearr_17816 = state_17798;
(statearr_17816[(12)] = inst_17791);

return statearr_17816;
})();
var statearr_17817_19216 = state_17798__$1;
(statearr_17817_19216[(2)] = null);

(statearr_17817_19216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (10))){
var inst_17766 = (state_17798[(2)]);
var inst_17767 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17798__$1 = (function (){var statearr_17818 = state_17798;
(statearr_17818[(13)] = inst_17766);

return statearr_17818;
})();
var statearr_17819_19217 = state_17798__$1;
(statearr_17819_19217[(2)] = inst_17767);


cljs.core.async.impl.ioc_helpers.process_exception(state_17798__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17799 === (8))){
var inst_17780 = (state_17798[(2)]);
var state_17798__$1 = state_17798;
var statearr_17820_19218 = state_17798__$1;
(statearr_17820_19218[(2)] = inst_17780);

(statearr_17820_19218[(1)] = (5));


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
});})(c__15982__auto___19198,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15760__auto__,c__15982__auto___19198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_17821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17821[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_17821[(1)] = (1));

return statearr_17821;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_17798){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_17798);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e17822){if((e17822 instanceof Object)){
var ex__15764__auto__ = e17822;
var statearr_17823_19219 = state_17798;
(statearr_17823_19219[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19220 = state_17798;
state_17798 = G__19220;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_17798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_17798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19198,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15984__auto__ = (function (){var statearr_17824 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_17824[(6)] = c__15982__auto___19198);

return statearr_17824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19198,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17827 = arguments.length;
switch (G__17827) {
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
var c__15982__auto___19222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19222,out){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19222,out){
return (function (state_17868){
var state_val_17869 = (state_17868[(1)]);
if((state_val_17869 === (7))){
var inst_17847 = (state_17868[(7)]);
var inst_17848 = (state_17868[(8)]);
var inst_17847__$1 = (state_17868[(2)]);
var inst_17848__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17847__$1,(0),null);
var inst_17849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17847__$1,(1),null);
var inst_17850 = (inst_17848__$1 == null);
var state_17868__$1 = (function (){var statearr_17874 = state_17868;
(statearr_17874[(7)] = inst_17847__$1);

(statearr_17874[(9)] = inst_17849);

(statearr_17874[(8)] = inst_17848__$1);

return statearr_17874;
})();
if(cljs.core.truth_(inst_17850)){
var statearr_17875_19223 = state_17868__$1;
(statearr_17875_19223[(1)] = (8));

} else {
var statearr_17876_19224 = state_17868__$1;
(statearr_17876_19224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (1))){
var inst_17832 = cljs.core.vec(chs);
var inst_17833 = inst_17832;
var state_17868__$1 = (function (){var statearr_17877 = state_17868;
(statearr_17877[(10)] = inst_17833);

return statearr_17877;
})();
var statearr_17878_19225 = state_17868__$1;
(statearr_17878_19225[(2)] = null);

(statearr_17878_19225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (4))){
var inst_17833 = (state_17868[(10)]);
var state_17868__$1 = state_17868;
return cljs.core.async.ioc_alts_BANG_(state_17868__$1,(7),inst_17833);
} else {
if((state_val_17869 === (6))){
var inst_17864 = (state_17868[(2)]);
var state_17868__$1 = state_17868;
var statearr_17879_19226 = state_17868__$1;
(statearr_17879_19226[(2)] = inst_17864);

(statearr_17879_19226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (3))){
var inst_17866 = (state_17868[(2)]);
var state_17868__$1 = state_17868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17868__$1,inst_17866);
} else {
if((state_val_17869 === (2))){
var inst_17833 = (state_17868[(10)]);
var inst_17835 = cljs.core.count(inst_17833);
var inst_17836 = (inst_17835 > (0));
var state_17868__$1 = state_17868;
if(cljs.core.truth_(inst_17836)){
var statearr_17881_19227 = state_17868__$1;
(statearr_17881_19227[(1)] = (4));

} else {
var statearr_17882_19228 = state_17868__$1;
(statearr_17882_19228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (11))){
var inst_17833 = (state_17868[(10)]);
var inst_17857 = (state_17868[(2)]);
var tmp17880 = inst_17833;
var inst_17833__$1 = tmp17880;
var state_17868__$1 = (function (){var statearr_17883 = state_17868;
(statearr_17883[(11)] = inst_17857);

(statearr_17883[(10)] = inst_17833__$1);

return statearr_17883;
})();
var statearr_17884_19229 = state_17868__$1;
(statearr_17884_19229[(2)] = null);

(statearr_17884_19229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (9))){
var inst_17848 = (state_17868[(8)]);
var state_17868__$1 = state_17868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17868__$1,(11),out,inst_17848);
} else {
if((state_val_17869 === (5))){
var inst_17862 = cljs.core.async.close_BANG_(out);
var state_17868__$1 = state_17868;
var statearr_17885_19230 = state_17868__$1;
(statearr_17885_19230[(2)] = inst_17862);

(statearr_17885_19230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (10))){
var inst_17860 = (state_17868[(2)]);
var state_17868__$1 = state_17868;
var statearr_17886_19231 = state_17868__$1;
(statearr_17886_19231[(2)] = inst_17860);

(statearr_17886_19231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (8))){
var inst_17847 = (state_17868[(7)]);
var inst_17849 = (state_17868[(9)]);
var inst_17848 = (state_17868[(8)]);
var inst_17833 = (state_17868[(10)]);
var inst_17852 = (function (){var cs = inst_17833;
var vec__17838 = inst_17847;
var v = inst_17848;
var c = inst_17849;
return ((function (cs,vec__17838,v,c,inst_17847,inst_17849,inst_17848,inst_17833,state_val_17869,c__15982__auto___19222,out){
return (function (p1__17825_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17825_SHARP_);
});
;})(cs,vec__17838,v,c,inst_17847,inst_17849,inst_17848,inst_17833,state_val_17869,c__15982__auto___19222,out))
})();
var inst_17853 = cljs.core.filterv(inst_17852,inst_17833);
var inst_17833__$1 = inst_17853;
var state_17868__$1 = (function (){var statearr_17887 = state_17868;
(statearr_17887[(10)] = inst_17833__$1);

return statearr_17887;
})();
var statearr_17888_19232 = state_17868__$1;
(statearr_17888_19232[(2)] = null);

(statearr_17888_19232[(1)] = (2));


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
});})(c__15982__auto___19222,out))
;
return ((function (switch__15760__auto__,c__15982__auto___19222,out){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_17889 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17889[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_17889[(1)] = (1));

return statearr_17889;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_17868){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_17868);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e17890){if((e17890 instanceof Object)){
var ex__15764__auto__ = e17890;
var statearr_17891_19233 = state_17868;
(statearr_17891_19233[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19234 = state_17868;
state_17868 = G__19234;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_17868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_17868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19222,out))
})();
var state__15984__auto__ = (function (){var statearr_17892 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_17892[(6)] = c__15982__auto___19222);

return statearr_17892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19222,out))
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
var G__17897 = arguments.length;
switch (G__17897) {
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
var c__15982__auto___19238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19238,out){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19238,out){
return (function (state_17921){
var state_val_17922 = (state_17921[(1)]);
if((state_val_17922 === (7))){
var inst_17903 = (state_17921[(7)]);
var inst_17903__$1 = (state_17921[(2)]);
var inst_17904 = (inst_17903__$1 == null);
var inst_17905 = cljs.core.not(inst_17904);
var state_17921__$1 = (function (){var statearr_17923 = state_17921;
(statearr_17923[(7)] = inst_17903__$1);

return statearr_17923;
})();
if(inst_17905){
var statearr_17924_19239 = state_17921__$1;
(statearr_17924_19239[(1)] = (8));

} else {
var statearr_17925_19240 = state_17921__$1;
(statearr_17925_19240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (1))){
var inst_17898 = (0);
var state_17921__$1 = (function (){var statearr_17926 = state_17921;
(statearr_17926[(8)] = inst_17898);

return statearr_17926;
})();
var statearr_17927_19241 = state_17921__$1;
(statearr_17927_19241[(2)] = null);

(statearr_17927_19241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (4))){
var state_17921__$1 = state_17921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17921__$1,(7),ch);
} else {
if((state_val_17922 === (6))){
var inst_17916 = (state_17921[(2)]);
var state_17921__$1 = state_17921;
var statearr_17928_19242 = state_17921__$1;
(statearr_17928_19242[(2)] = inst_17916);

(statearr_17928_19242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (3))){
var inst_17918 = (state_17921[(2)]);
var inst_17919 = cljs.core.async.close_BANG_(out);
var state_17921__$1 = (function (){var statearr_17929 = state_17921;
(statearr_17929[(9)] = inst_17918);

return statearr_17929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17921__$1,inst_17919);
} else {
if((state_val_17922 === (2))){
var inst_17898 = (state_17921[(8)]);
var inst_17900 = (inst_17898 < n);
var state_17921__$1 = state_17921;
if(cljs.core.truth_(inst_17900)){
var statearr_17930_19243 = state_17921__$1;
(statearr_17930_19243[(1)] = (4));

} else {
var statearr_17931_19244 = state_17921__$1;
(statearr_17931_19244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (11))){
var inst_17898 = (state_17921[(8)]);
var inst_17908 = (state_17921[(2)]);
var inst_17909 = (inst_17898 + (1));
var inst_17898__$1 = inst_17909;
var state_17921__$1 = (function (){var statearr_17932 = state_17921;
(statearr_17932[(10)] = inst_17908);

(statearr_17932[(8)] = inst_17898__$1);

return statearr_17932;
})();
var statearr_17933_19245 = state_17921__$1;
(statearr_17933_19245[(2)] = null);

(statearr_17933_19245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (9))){
var state_17921__$1 = state_17921;
var statearr_17934_19247 = state_17921__$1;
(statearr_17934_19247[(2)] = null);

(statearr_17934_19247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (5))){
var state_17921__$1 = state_17921;
var statearr_17935_19248 = state_17921__$1;
(statearr_17935_19248[(2)] = null);

(statearr_17935_19248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (10))){
var inst_17913 = (state_17921[(2)]);
var state_17921__$1 = state_17921;
var statearr_17936_19250 = state_17921__$1;
(statearr_17936_19250[(2)] = inst_17913);

(statearr_17936_19250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (8))){
var inst_17903 = (state_17921[(7)]);
var state_17921__$1 = state_17921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17921__$1,(11),out,inst_17903);
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
});})(c__15982__auto___19238,out))
;
return ((function (switch__15760__auto__,c__15982__auto___19238,out){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_17937 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17937[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_17937[(1)] = (1));

return statearr_17937;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_17921){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_17921);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e17938){if((e17938 instanceof Object)){
var ex__15764__auto__ = e17938;
var statearr_17939_19252 = state_17921;
(statearr_17939_19252[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17938;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19253 = state_17921;
state_17921 = G__19253;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_17921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_17921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19238,out))
})();
var state__15984__auto__ = (function (){var statearr_17940 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_17940[(6)] = c__15982__auto___19238);

return statearr_17940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19238,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17951 = (function (f,ch,meta17952){
this.f = f;
this.ch = ch;
this.meta17952 = meta17952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17953,meta17952__$1){
var self__ = this;
var _17953__$1 = this;
return (new cljs.core.async.t_cljs$core$async17951(self__.f,self__.ch,meta17952__$1));
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17953){
var self__ = this;
var _17953__$1 = this;
return self__.meta17952;
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17954 = (function (f,ch,meta17952,_,fn1,meta17955){
this.f = f;
this.ch = ch;
this.meta17952 = meta17952;
this._ = _;
this.fn1 = fn1;
this.meta17955 = meta17955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17956,meta17955__$1){
var self__ = this;
var _17956__$1 = this;
return (new cljs.core.async.t_cljs$core$async17954(self__.f,self__.ch,self__.meta17952,self__._,self__.fn1,meta17955__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17956){
var self__ = this;
var _17956__$1 = this;
return self__.meta17955;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17954.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17944_SHARP_){
var G__17957 = (((p1__17944_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17944_SHARP_) : self__.f.call(null,p1__17944_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17957) : f1.call(null,G__17957));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17954.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17952","meta17952",-904850835,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17951","cljs.core.async/t_cljs$core$async17951",647994116,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17955","meta17955",1380274907,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17954";

cljs.core.async.t_cljs$core$async17954.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17954");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17954.
 */
cljs.core.async.__GT_t_cljs$core$async17954 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17954(f__$1,ch__$1,meta17952__$1,___$2,fn1__$1,meta17955){
return (new cljs.core.async.t_cljs$core$async17954(f__$1,ch__$1,meta17952__$1,___$2,fn1__$1,meta17955));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17954(self__.f,self__.ch,self__.meta17952,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17958 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17958) : self__.f.call(null,G__17958));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17952","meta17952",-904850835,null)], null);
});

cljs.core.async.t_cljs$core$async17951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17951";

cljs.core.async.t_cljs$core$async17951.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17951");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17951.
 */
cljs.core.async.__GT_t_cljs$core$async17951 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17951(f__$1,ch__$1,meta17952){
return (new cljs.core.async.t_cljs$core$async17951(f__$1,ch__$1,meta17952));
});

}

return (new cljs.core.async.t_cljs$core$async17951(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17965 = (function (f,ch,meta17966){
this.f = f;
this.ch = ch;
this.meta17966 = meta17966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17967,meta17966__$1){
var self__ = this;
var _17967__$1 = this;
return (new cljs.core.async.t_cljs$core$async17965(self__.f,self__.ch,meta17966__$1));
});

cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17967){
var self__ = this;
var _17967__$1 = this;
return self__.meta17966;
});

cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17966","meta17966",-1756319665,null)], null);
});

cljs.core.async.t_cljs$core$async17965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17965";

cljs.core.async.t_cljs$core$async17965.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17965");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17965.
 */
cljs.core.async.__GT_t_cljs$core$async17965 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17965(f__$1,ch__$1,meta17966){
return (new cljs.core.async.t_cljs$core$async17965(f__$1,ch__$1,meta17966));
});

}

return (new cljs.core.async.t_cljs$core$async17965(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17968 = (function (p,ch,meta17969){
this.p = p;
this.ch = ch;
this.meta17969 = meta17969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17970,meta17969__$1){
var self__ = this;
var _17970__$1 = this;
return (new cljs.core.async.t_cljs$core$async17968(self__.p,self__.ch,meta17969__$1));
});

cljs.core.async.t_cljs$core$async17968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17970){
var self__ = this;
var _17970__$1 = this;
return self__.meta17969;
});

cljs.core.async.t_cljs$core$async17968.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17968.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17968.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17968.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17969","meta17969",761072236,null)], null);
});

cljs.core.async.t_cljs$core$async17968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17968";

cljs.core.async.t_cljs$core$async17968.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17968");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17968.
 */
cljs.core.async.__GT_t_cljs$core$async17968 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17968(p__$1,ch__$1,meta17969){
return (new cljs.core.async.t_cljs$core$async17968(p__$1,ch__$1,meta17969));
});

}

return (new cljs.core.async.t_cljs$core$async17968(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17972 = arguments.length;
switch (G__17972) {
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
var c__15982__auto___19279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19279,out){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19279,out){
return (function (state_17993){
var state_val_17994 = (state_17993[(1)]);
if((state_val_17994 === (7))){
var inst_17989 = (state_17993[(2)]);
var state_17993__$1 = state_17993;
var statearr_17998_19280 = state_17993__$1;
(statearr_17998_19280[(2)] = inst_17989);

(statearr_17998_19280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (1))){
var state_17993__$1 = state_17993;
var statearr_17999_19281 = state_17993__$1;
(statearr_17999_19281[(2)] = null);

(statearr_17999_19281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (4))){
var inst_17975 = (state_17993[(7)]);
var inst_17975__$1 = (state_17993[(2)]);
var inst_17976 = (inst_17975__$1 == null);
var state_17993__$1 = (function (){var statearr_18003 = state_17993;
(statearr_18003[(7)] = inst_17975__$1);

return statearr_18003;
})();
if(cljs.core.truth_(inst_17976)){
var statearr_18005_19305 = state_17993__$1;
(statearr_18005_19305[(1)] = (5));

} else {
var statearr_18006_19306 = state_17993__$1;
(statearr_18006_19306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (6))){
var inst_17975 = (state_17993[(7)]);
var inst_17980 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17975) : p.call(null,inst_17975));
var state_17993__$1 = state_17993;
if(cljs.core.truth_(inst_17980)){
var statearr_18008_19307 = state_17993__$1;
(statearr_18008_19307[(1)] = (8));

} else {
var statearr_18010_19311 = state_17993__$1;
(statearr_18010_19311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (3))){
var inst_17991 = (state_17993[(2)]);
var state_17993__$1 = state_17993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17993__$1,inst_17991);
} else {
if((state_val_17994 === (2))){
var state_17993__$1 = state_17993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17993__$1,(4),ch);
} else {
if((state_val_17994 === (11))){
var inst_17983 = (state_17993[(2)]);
var state_17993__$1 = state_17993;
var statearr_18012_19324 = state_17993__$1;
(statearr_18012_19324[(2)] = inst_17983);

(statearr_18012_19324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (9))){
var state_17993__$1 = state_17993;
var statearr_18013_19325 = state_17993__$1;
(statearr_18013_19325[(2)] = null);

(statearr_18013_19325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (5))){
var inst_17978 = cljs.core.async.close_BANG_(out);
var state_17993__$1 = state_17993;
var statearr_18014_19329 = state_17993__$1;
(statearr_18014_19329[(2)] = inst_17978);

(statearr_18014_19329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (10))){
var inst_17986 = (state_17993[(2)]);
var state_17993__$1 = (function (){var statearr_18015 = state_17993;
(statearr_18015[(8)] = inst_17986);

return statearr_18015;
})();
var statearr_18016_19336 = state_17993__$1;
(statearr_18016_19336[(2)] = null);

(statearr_18016_19336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (8))){
var inst_17975 = (state_17993[(7)]);
var state_17993__$1 = state_17993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17993__$1,(11),out,inst_17975);
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
});})(c__15982__auto___19279,out))
;
return ((function (switch__15760__auto__,c__15982__auto___19279,out){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_18017 = [null,null,null,null,null,null,null,null,null];
(statearr_18017[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_18017[(1)] = (1));

return statearr_18017;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_17993){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_17993);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e18018){if((e18018 instanceof Object)){
var ex__15764__auto__ = e18018;
var statearr_18019_19338 = state_17993;
(statearr_18019_19338[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19339 = state_17993;
state_17993 = G__19339;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_17993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_17993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19279,out))
})();
var state__15984__auto__ = (function (){var statearr_18020 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_18020[(6)] = c__15982__auto___19279);

return statearr_18020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19279,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18022 = arguments.length;
switch (G__18022) {
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
var c__15982__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto__){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto__){
return (function (state_18084){
var state_val_18085 = (state_18084[(1)]);
if((state_val_18085 === (7))){
var inst_18080 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18086_19346 = state_18084__$1;
(statearr_18086_19346[(2)] = inst_18080);

(statearr_18086_19346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (20))){
var inst_18050 = (state_18084[(7)]);
var inst_18061 = (state_18084[(2)]);
var inst_18062 = cljs.core.next(inst_18050);
var inst_18036 = inst_18062;
var inst_18037 = null;
var inst_18038 = (0);
var inst_18039 = (0);
var state_18084__$1 = (function (){var statearr_18087 = state_18084;
(statearr_18087[(8)] = inst_18037);

(statearr_18087[(9)] = inst_18039);

(statearr_18087[(10)] = inst_18061);

(statearr_18087[(11)] = inst_18036);

(statearr_18087[(12)] = inst_18038);

return statearr_18087;
})();
var statearr_18088_19347 = state_18084__$1;
(statearr_18088_19347[(2)] = null);

(statearr_18088_19347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (1))){
var state_18084__$1 = state_18084;
var statearr_18089_19348 = state_18084__$1;
(statearr_18089_19348[(2)] = null);

(statearr_18089_19348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (4))){
var inst_18025 = (state_18084[(13)]);
var inst_18025__$1 = (state_18084[(2)]);
var inst_18026 = (inst_18025__$1 == null);
var state_18084__$1 = (function (){var statearr_18090 = state_18084;
(statearr_18090[(13)] = inst_18025__$1);

return statearr_18090;
})();
if(cljs.core.truth_(inst_18026)){
var statearr_18091_19349 = state_18084__$1;
(statearr_18091_19349[(1)] = (5));

} else {
var statearr_18092_19350 = state_18084__$1;
(statearr_18092_19350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (15))){
var state_18084__$1 = state_18084;
var statearr_18096_19351 = state_18084__$1;
(statearr_18096_19351[(2)] = null);

(statearr_18096_19351[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (21))){
var state_18084__$1 = state_18084;
var statearr_18097_19352 = state_18084__$1;
(statearr_18097_19352[(2)] = null);

(statearr_18097_19352[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (13))){
var inst_18037 = (state_18084[(8)]);
var inst_18039 = (state_18084[(9)]);
var inst_18036 = (state_18084[(11)]);
var inst_18038 = (state_18084[(12)]);
var inst_18046 = (state_18084[(2)]);
var inst_18047 = (inst_18039 + (1));
var tmp18093 = inst_18037;
var tmp18094 = inst_18036;
var tmp18095 = inst_18038;
var inst_18036__$1 = tmp18094;
var inst_18037__$1 = tmp18093;
var inst_18038__$1 = tmp18095;
var inst_18039__$1 = inst_18047;
var state_18084__$1 = (function (){var statearr_18098 = state_18084;
(statearr_18098[(8)] = inst_18037__$1);

(statearr_18098[(9)] = inst_18039__$1);

(statearr_18098[(14)] = inst_18046);

(statearr_18098[(11)] = inst_18036__$1);

(statearr_18098[(12)] = inst_18038__$1);

return statearr_18098;
})();
var statearr_18099_19354 = state_18084__$1;
(statearr_18099_19354[(2)] = null);

(statearr_18099_19354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (22))){
var state_18084__$1 = state_18084;
var statearr_18100_19355 = state_18084__$1;
(statearr_18100_19355[(2)] = null);

(statearr_18100_19355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (6))){
var inst_18025 = (state_18084[(13)]);
var inst_18034 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18025) : f.call(null,inst_18025));
var inst_18035 = cljs.core.seq(inst_18034);
var inst_18036 = inst_18035;
var inst_18037 = null;
var inst_18038 = (0);
var inst_18039 = (0);
var state_18084__$1 = (function (){var statearr_18101 = state_18084;
(statearr_18101[(8)] = inst_18037);

(statearr_18101[(9)] = inst_18039);

(statearr_18101[(11)] = inst_18036);

(statearr_18101[(12)] = inst_18038);

return statearr_18101;
})();
var statearr_18102_19356 = state_18084__$1;
(statearr_18102_19356[(2)] = null);

(statearr_18102_19356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (17))){
var inst_18050 = (state_18084[(7)]);
var inst_18054 = cljs.core.chunk_first(inst_18050);
var inst_18055 = cljs.core.chunk_rest(inst_18050);
var inst_18056 = cljs.core.count(inst_18054);
var inst_18036 = inst_18055;
var inst_18037 = inst_18054;
var inst_18038 = inst_18056;
var inst_18039 = (0);
var state_18084__$1 = (function (){var statearr_18103 = state_18084;
(statearr_18103[(8)] = inst_18037);

(statearr_18103[(9)] = inst_18039);

(statearr_18103[(11)] = inst_18036);

(statearr_18103[(12)] = inst_18038);

return statearr_18103;
})();
var statearr_18104_19357 = state_18084__$1;
(statearr_18104_19357[(2)] = null);

(statearr_18104_19357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (3))){
var inst_18082 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18084__$1,inst_18082);
} else {
if((state_val_18085 === (12))){
var inst_18070 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18105_19358 = state_18084__$1;
(statearr_18105_19358[(2)] = inst_18070);

(statearr_18105_19358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (2))){
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18084__$1,(4),in$);
} else {
if((state_val_18085 === (23))){
var inst_18078 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18106_19363 = state_18084__$1;
(statearr_18106_19363[(2)] = inst_18078);

(statearr_18106_19363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (19))){
var inst_18065 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18107_19366 = state_18084__$1;
(statearr_18107_19366[(2)] = inst_18065);

(statearr_18107_19366[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (11))){
var inst_18050 = (state_18084[(7)]);
var inst_18036 = (state_18084[(11)]);
var inst_18050__$1 = cljs.core.seq(inst_18036);
var state_18084__$1 = (function (){var statearr_18108 = state_18084;
(statearr_18108[(7)] = inst_18050__$1);

return statearr_18108;
})();
if(inst_18050__$1){
var statearr_18109_19376 = state_18084__$1;
(statearr_18109_19376[(1)] = (14));

} else {
var statearr_18110_19377 = state_18084__$1;
(statearr_18110_19377[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (9))){
var inst_18072 = (state_18084[(2)]);
var inst_18073 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18084__$1 = (function (){var statearr_18111 = state_18084;
(statearr_18111[(15)] = inst_18072);

return statearr_18111;
})();
if(cljs.core.truth_(inst_18073)){
var statearr_18112_19392 = state_18084__$1;
(statearr_18112_19392[(1)] = (21));

} else {
var statearr_18113_19393 = state_18084__$1;
(statearr_18113_19393[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (5))){
var inst_18028 = cljs.core.async.close_BANG_(out);
var state_18084__$1 = state_18084;
var statearr_18114_19399 = state_18084__$1;
(statearr_18114_19399[(2)] = inst_18028);

(statearr_18114_19399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (14))){
var inst_18050 = (state_18084[(7)]);
var inst_18052 = cljs.core.chunked_seq_QMARK_(inst_18050);
var state_18084__$1 = state_18084;
if(inst_18052){
var statearr_18115_19408 = state_18084__$1;
(statearr_18115_19408[(1)] = (17));

} else {
var statearr_18116_19409 = state_18084__$1;
(statearr_18116_19409[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (16))){
var inst_18068 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18117_19413 = state_18084__$1;
(statearr_18117_19413[(2)] = inst_18068);

(statearr_18117_19413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (10))){
var inst_18037 = (state_18084[(8)]);
var inst_18039 = (state_18084[(9)]);
var inst_18044 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18037,inst_18039);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18084__$1,(13),out,inst_18044);
} else {
if((state_val_18085 === (18))){
var inst_18050 = (state_18084[(7)]);
var inst_18059 = cljs.core.first(inst_18050);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18084__$1,(20),out,inst_18059);
} else {
if((state_val_18085 === (8))){
var inst_18039 = (state_18084[(9)]);
var inst_18038 = (state_18084[(12)]);
var inst_18041 = (inst_18039 < inst_18038);
var inst_18042 = inst_18041;
var state_18084__$1 = state_18084;
if(cljs.core.truth_(inst_18042)){
var statearr_18118_19433 = state_18084__$1;
(statearr_18118_19433[(1)] = (10));

} else {
var statearr_18119_19435 = state_18084__$1;
(statearr_18119_19435[(1)] = (11));

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
});})(c__15982__auto__))
;
return ((function (switch__15760__auto__,c__15982__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15761__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15761__auto____0 = (function (){
var statearr_18120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18120[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15761__auto__);

(statearr_18120[(1)] = (1));

return statearr_18120;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15761__auto____1 = (function (state_18084){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_18084);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e18121){if((e18121 instanceof Object)){
var ex__15764__auto__ = e18121;
var statearr_18122_19454 = state_18084;
(statearr_18122_19454[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19459 = state_18084;
state_18084 = G__19459;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15761__auto__ = function(state_18084){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15761__auto____1.call(this,state_18084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15761__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15761__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto__))
})();
var state__15984__auto__ = (function (){var statearr_18123 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_18123[(6)] = c__15982__auto__);

return statearr_18123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto__))
);

return c__15982__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18125 = arguments.length;
switch (G__18125) {
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
var G__18128 = arguments.length;
switch (G__18128) {
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
var G__18130 = arguments.length;
switch (G__18130) {
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
var c__15982__auto___19479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19479,out){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19479,out){
return (function (state_18154){
var state_val_18155 = (state_18154[(1)]);
if((state_val_18155 === (7))){
var inst_18149 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18156_19481 = state_18154__$1;
(statearr_18156_19481[(2)] = inst_18149);

(statearr_18156_19481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (1))){
var inst_18131 = null;
var state_18154__$1 = (function (){var statearr_18157 = state_18154;
(statearr_18157[(7)] = inst_18131);

return statearr_18157;
})();
var statearr_18158_19482 = state_18154__$1;
(statearr_18158_19482[(2)] = null);

(statearr_18158_19482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (4))){
var inst_18134 = (state_18154[(8)]);
var inst_18134__$1 = (state_18154[(2)]);
var inst_18135 = (inst_18134__$1 == null);
var inst_18136 = cljs.core.not(inst_18135);
var state_18154__$1 = (function (){var statearr_18159 = state_18154;
(statearr_18159[(8)] = inst_18134__$1);

return statearr_18159;
})();
if(inst_18136){
var statearr_18160_19483 = state_18154__$1;
(statearr_18160_19483[(1)] = (5));

} else {
var statearr_18161_19484 = state_18154__$1;
(statearr_18161_19484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (6))){
var state_18154__$1 = state_18154;
var statearr_18162_19486 = state_18154__$1;
(statearr_18162_19486[(2)] = null);

(statearr_18162_19486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (3))){
var inst_18151 = (state_18154[(2)]);
var inst_18152 = cljs.core.async.close_BANG_(out);
var state_18154__$1 = (function (){var statearr_18163 = state_18154;
(statearr_18163[(9)] = inst_18151);

return statearr_18163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18154__$1,inst_18152);
} else {
if((state_val_18155 === (2))){
var state_18154__$1 = state_18154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18154__$1,(4),ch);
} else {
if((state_val_18155 === (11))){
var inst_18134 = (state_18154[(8)]);
var inst_18143 = (state_18154[(2)]);
var inst_18131 = inst_18134;
var state_18154__$1 = (function (){var statearr_18164 = state_18154;
(statearr_18164[(7)] = inst_18131);

(statearr_18164[(10)] = inst_18143);

return statearr_18164;
})();
var statearr_18165_19487 = state_18154__$1;
(statearr_18165_19487[(2)] = null);

(statearr_18165_19487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (9))){
var inst_18134 = (state_18154[(8)]);
var state_18154__$1 = state_18154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18154__$1,(11),out,inst_18134);
} else {
if((state_val_18155 === (5))){
var inst_18131 = (state_18154[(7)]);
var inst_18134 = (state_18154[(8)]);
var inst_18138 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18134,inst_18131);
var state_18154__$1 = state_18154;
if(inst_18138){
var statearr_18167_19490 = state_18154__$1;
(statearr_18167_19490[(1)] = (8));

} else {
var statearr_18168_19491 = state_18154__$1;
(statearr_18168_19491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (10))){
var inst_18146 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18169_19493 = state_18154__$1;
(statearr_18169_19493[(2)] = inst_18146);

(statearr_18169_19493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (8))){
var inst_18131 = (state_18154[(7)]);
var tmp18166 = inst_18131;
var inst_18131__$1 = tmp18166;
var state_18154__$1 = (function (){var statearr_18170 = state_18154;
(statearr_18170[(7)] = inst_18131__$1);

return statearr_18170;
})();
var statearr_18171_19497 = state_18154__$1;
(statearr_18171_19497[(2)] = null);

(statearr_18171_19497[(1)] = (2));


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
});})(c__15982__auto___19479,out))
;
return ((function (switch__15760__auto__,c__15982__auto___19479,out){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_18172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18172[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_18172[(1)] = (1));

return statearr_18172;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_18154){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_18154);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e18173){if((e18173 instanceof Object)){
var ex__15764__auto__ = e18173;
var statearr_18174_19504 = state_18154;
(statearr_18174_19504[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19511 = state_18154;
state_18154 = G__19511;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_18154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_18154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19479,out))
})();
var state__15984__auto__ = (function (){var statearr_18175 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_18175[(6)] = c__15982__auto___19479);

return statearr_18175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19479,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18177 = arguments.length;
switch (G__18177) {
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
var c__15982__auto___19537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19537,out){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19537,out){
return (function (state_18217){
var state_val_18218 = (state_18217[(1)]);
if((state_val_18218 === (7))){
var inst_18213 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
var statearr_18219_19544 = state_18217__$1;
(statearr_18219_19544[(2)] = inst_18213);

(statearr_18219_19544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (1))){
var inst_18180 = (new Array(n));
var inst_18181 = inst_18180;
var inst_18182 = (0);
var state_18217__$1 = (function (){var statearr_18220 = state_18217;
(statearr_18220[(7)] = inst_18182);

(statearr_18220[(8)] = inst_18181);

return statearr_18220;
})();
var statearr_18221_19553 = state_18217__$1;
(statearr_18221_19553[(2)] = null);

(statearr_18221_19553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (4))){
var inst_18185 = (state_18217[(9)]);
var inst_18185__$1 = (state_18217[(2)]);
var inst_18186 = (inst_18185__$1 == null);
var inst_18187 = cljs.core.not(inst_18186);
var state_18217__$1 = (function (){var statearr_18222 = state_18217;
(statearr_18222[(9)] = inst_18185__$1);

return statearr_18222;
})();
if(inst_18187){
var statearr_18223_19561 = state_18217__$1;
(statearr_18223_19561[(1)] = (5));

} else {
var statearr_18224_19562 = state_18217__$1;
(statearr_18224_19562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (15))){
var inst_18207 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
var statearr_18225_19563 = state_18217__$1;
(statearr_18225_19563[(2)] = inst_18207);

(statearr_18225_19563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (13))){
var state_18217__$1 = state_18217;
var statearr_18230_19564 = state_18217__$1;
(statearr_18230_19564[(2)] = null);

(statearr_18230_19564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (6))){
var inst_18182 = (state_18217[(7)]);
var inst_18203 = (inst_18182 > (0));
var state_18217__$1 = state_18217;
if(cljs.core.truth_(inst_18203)){
var statearr_18233_19565 = state_18217__$1;
(statearr_18233_19565[(1)] = (12));

} else {
var statearr_18234_19567 = state_18217__$1;
(statearr_18234_19567[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (3))){
var inst_18215 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18217__$1,inst_18215);
} else {
if((state_val_18218 === (12))){
var inst_18181 = (state_18217[(8)]);
var inst_18205 = cljs.core.vec(inst_18181);
var state_18217__$1 = state_18217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18217__$1,(15),out,inst_18205);
} else {
if((state_val_18218 === (2))){
var state_18217__$1 = state_18217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18217__$1,(4),ch);
} else {
if((state_val_18218 === (11))){
var inst_18197 = (state_18217[(2)]);
var inst_18198 = (new Array(n));
var inst_18181 = inst_18198;
var inst_18182 = (0);
var state_18217__$1 = (function (){var statearr_18243 = state_18217;
(statearr_18243[(10)] = inst_18197);

(statearr_18243[(7)] = inst_18182);

(statearr_18243[(8)] = inst_18181);

return statearr_18243;
})();
var statearr_18244_19572 = state_18217__$1;
(statearr_18244_19572[(2)] = null);

(statearr_18244_19572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (9))){
var inst_18181 = (state_18217[(8)]);
var inst_18195 = cljs.core.vec(inst_18181);
var state_18217__$1 = state_18217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18217__$1,(11),out,inst_18195);
} else {
if((state_val_18218 === (5))){
var inst_18182 = (state_18217[(7)]);
var inst_18190 = (state_18217[(11)]);
var inst_18185 = (state_18217[(9)]);
var inst_18181 = (state_18217[(8)]);
var inst_18189 = (inst_18181[inst_18182] = inst_18185);
var inst_18190__$1 = (inst_18182 + (1));
var inst_18191 = (inst_18190__$1 < n);
var state_18217__$1 = (function (){var statearr_18247 = state_18217;
(statearr_18247[(12)] = inst_18189);

(statearr_18247[(11)] = inst_18190__$1);

return statearr_18247;
})();
if(cljs.core.truth_(inst_18191)){
var statearr_18249_19573 = state_18217__$1;
(statearr_18249_19573[(1)] = (8));

} else {
var statearr_18251_19574 = state_18217__$1;
(statearr_18251_19574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (14))){
var inst_18210 = (state_18217[(2)]);
var inst_18211 = cljs.core.async.close_BANG_(out);
var state_18217__$1 = (function (){var statearr_18254 = state_18217;
(statearr_18254[(13)] = inst_18210);

return statearr_18254;
})();
var statearr_18255_19575 = state_18217__$1;
(statearr_18255_19575[(2)] = inst_18211);

(statearr_18255_19575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (10))){
var inst_18201 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
var statearr_18256_19580 = state_18217__$1;
(statearr_18256_19580[(2)] = inst_18201);

(statearr_18256_19580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (8))){
var inst_18190 = (state_18217[(11)]);
var inst_18181 = (state_18217[(8)]);
var tmp18253 = inst_18181;
var inst_18181__$1 = tmp18253;
var inst_18182 = inst_18190;
var state_18217__$1 = (function (){var statearr_18257 = state_18217;
(statearr_18257[(7)] = inst_18182);

(statearr_18257[(8)] = inst_18181__$1);

return statearr_18257;
})();
var statearr_18258_19585 = state_18217__$1;
(statearr_18258_19585[(2)] = null);

(statearr_18258_19585[(1)] = (2));


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
});})(c__15982__auto___19537,out))
;
return ((function (switch__15760__auto__,c__15982__auto___19537,out){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_18263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18263[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_18263[(1)] = (1));

return statearr_18263;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_18217){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_18217);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e18266){if((e18266 instanceof Object)){
var ex__15764__auto__ = e18266;
var statearr_18267_19590 = state_18217;
(statearr_18267_19590[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18266;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19592 = state_18217;
state_18217 = G__19592;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_18217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_18217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19537,out))
})();
var state__15984__auto__ = (function (){var statearr_18272 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_18272[(6)] = c__15982__auto___19537);

return statearr_18272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19537,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18277 = arguments.length;
switch (G__18277) {
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
var c__15982__auto___19594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15982__auto___19594,out){
return (function (){
var f__15983__auto__ = (function (){var switch__15760__auto__ = ((function (c__15982__auto___19594,out){
return (function (state_18325){
var state_val_18326 = (state_18325[(1)]);
if((state_val_18326 === (7))){
var inst_18321 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18330_19595 = state_18325__$1;
(statearr_18330_19595[(2)] = inst_18321);

(statearr_18330_19595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (1))){
var inst_18280 = [];
var inst_18281 = inst_18280;
var inst_18282 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18325__$1 = (function (){var statearr_18331 = state_18325;
(statearr_18331[(7)] = inst_18281);

(statearr_18331[(8)] = inst_18282);

return statearr_18331;
})();
var statearr_18332_19596 = state_18325__$1;
(statearr_18332_19596[(2)] = null);

(statearr_18332_19596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (4))){
var inst_18285 = (state_18325[(9)]);
var inst_18285__$1 = (state_18325[(2)]);
var inst_18286 = (inst_18285__$1 == null);
var inst_18287 = cljs.core.not(inst_18286);
var state_18325__$1 = (function (){var statearr_18333 = state_18325;
(statearr_18333[(9)] = inst_18285__$1);

return statearr_18333;
})();
if(inst_18287){
var statearr_18334_19597 = state_18325__$1;
(statearr_18334_19597[(1)] = (5));

} else {
var statearr_18335_19598 = state_18325__$1;
(statearr_18335_19598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (15))){
var inst_18315 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18336_19599 = state_18325__$1;
(statearr_18336_19599[(2)] = inst_18315);

(statearr_18336_19599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (13))){
var state_18325__$1 = state_18325;
var statearr_18337_19600 = state_18325__$1;
(statearr_18337_19600[(2)] = null);

(statearr_18337_19600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (6))){
var inst_18281 = (state_18325[(7)]);
var inst_18310 = inst_18281.length;
var inst_18311 = (inst_18310 > (0));
var state_18325__$1 = state_18325;
if(cljs.core.truth_(inst_18311)){
var statearr_18338_19601 = state_18325__$1;
(statearr_18338_19601[(1)] = (12));

} else {
var statearr_18339_19602 = state_18325__$1;
(statearr_18339_19602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (3))){
var inst_18323 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18325__$1,inst_18323);
} else {
if((state_val_18326 === (12))){
var inst_18281 = (state_18325[(7)]);
var inst_18313 = cljs.core.vec(inst_18281);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18325__$1,(15),out,inst_18313);
} else {
if((state_val_18326 === (2))){
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18325__$1,(4),ch);
} else {
if((state_val_18326 === (11))){
var inst_18285 = (state_18325[(9)]);
var inst_18293 = (state_18325[(10)]);
var inst_18303 = (state_18325[(2)]);
var inst_18304 = [];
var inst_18305 = inst_18304.push(inst_18285);
var inst_18281 = inst_18304;
var inst_18282 = inst_18293;
var state_18325__$1 = (function (){var statearr_18346 = state_18325;
(statearr_18346[(7)] = inst_18281);

(statearr_18346[(11)] = inst_18305);

(statearr_18346[(8)] = inst_18282);

(statearr_18346[(12)] = inst_18303);

return statearr_18346;
})();
var statearr_18348_19605 = state_18325__$1;
(statearr_18348_19605[(2)] = null);

(statearr_18348_19605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (9))){
var inst_18281 = (state_18325[(7)]);
var inst_18301 = cljs.core.vec(inst_18281);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18325__$1,(11),out,inst_18301);
} else {
if((state_val_18326 === (5))){
var inst_18285 = (state_18325[(9)]);
var inst_18293 = (state_18325[(10)]);
var inst_18282 = (state_18325[(8)]);
var inst_18293__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18285) : f.call(null,inst_18285));
var inst_18294 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18293__$1,inst_18282);
var inst_18295 = cljs.core.keyword_identical_QMARK_(inst_18282,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18296 = ((inst_18294) || (inst_18295));
var state_18325__$1 = (function (){var statearr_18353 = state_18325;
(statearr_18353[(10)] = inst_18293__$1);

return statearr_18353;
})();
if(cljs.core.truth_(inst_18296)){
var statearr_18355_19607 = state_18325__$1;
(statearr_18355_19607[(1)] = (8));

} else {
var statearr_18357_19608 = state_18325__$1;
(statearr_18357_19608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (14))){
var inst_18318 = (state_18325[(2)]);
var inst_18319 = cljs.core.async.close_BANG_(out);
var state_18325__$1 = (function (){var statearr_18363 = state_18325;
(statearr_18363[(13)] = inst_18318);

return statearr_18363;
})();
var statearr_18364_19609 = state_18325__$1;
(statearr_18364_19609[(2)] = inst_18319);

(statearr_18364_19609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (10))){
var inst_18308 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18369_19610 = state_18325__$1;
(statearr_18369_19610[(2)] = inst_18308);

(statearr_18369_19610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (8))){
var inst_18281 = (state_18325[(7)]);
var inst_18285 = (state_18325[(9)]);
var inst_18293 = (state_18325[(10)]);
var inst_18298 = inst_18281.push(inst_18285);
var tmp18359 = inst_18281;
var inst_18281__$1 = tmp18359;
var inst_18282 = inst_18293;
var state_18325__$1 = (function (){var statearr_18374 = state_18325;
(statearr_18374[(14)] = inst_18298);

(statearr_18374[(7)] = inst_18281__$1);

(statearr_18374[(8)] = inst_18282);

return statearr_18374;
})();
var statearr_18376_19611 = state_18325__$1;
(statearr_18376_19611[(2)] = null);

(statearr_18376_19611[(1)] = (2));


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
});})(c__15982__auto___19594,out))
;
return ((function (switch__15760__auto__,c__15982__auto___19594,out){
return (function() {
var cljs$core$async$state_machine__15761__auto__ = null;
var cljs$core$async$state_machine__15761__auto____0 = (function (){
var statearr_18378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18378[(0)] = cljs$core$async$state_machine__15761__auto__);

(statearr_18378[(1)] = (1));

return statearr_18378;
});
var cljs$core$async$state_machine__15761__auto____1 = (function (state_18325){
while(true){
var ret_value__15762__auto__ = (function (){try{while(true){
var result__15763__auto__ = switch__15760__auto__(state_18325);
if(cljs.core.keyword_identical_QMARK_(result__15763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15763__auto__;
}
break;
}
}catch (e18381){if((e18381 instanceof Object)){
var ex__15764__auto__ = e18381;
var statearr_18382_19613 = state_18325;
(statearr_18382_19613[(5)] = ex__15764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19614 = state_18325;
state_18325 = G__19614;
continue;
} else {
return ret_value__15762__auto__;
}
break;
}
});
cljs$core$async$state_machine__15761__auto__ = function(state_18325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15761__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15761__auto____1.call(this,state_18325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15761__auto____0;
cljs$core$async$state_machine__15761__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15761__auto____1;
return cljs$core$async$state_machine__15761__auto__;
})()
;})(switch__15760__auto__,c__15982__auto___19594,out))
})();
var state__15984__auto__ = (function (){var statearr_18384 = (f__15983__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15983__auto__.cljs$core$IFn$_invoke$arity$0() : f__15983__auto__.call(null));
(statearr_18384[(6)] = c__15982__auto___19594);

return statearr_18384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15984__auto__);
});})(c__15982__auto___19594,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
