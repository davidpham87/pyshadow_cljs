goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__18817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto__,req){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto__,req){
return (function (state_22553){
var state_val_22554 = (state_22553[(1)]);
if((state_val_22554 === (7))){
var state_22553__$1 = state_22553;
var statearr_22556_22754 = state_22553__$1;
(statearr_22556_22754[(2)] = false);

(statearr_22556_22754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (1))){
var state_22553__$1 = state_22553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22553__$1,(2),req);
} else {
if((state_val_22554 === (4))){
var inst_22516 = (state_22553[(7)]);
var inst_22523 = (inst_22516 == null);
var inst_22524 = cljs.core.not(inst_22523);
var state_22553__$1 = state_22553;
if(inst_22524){
var statearr_22560_22755 = state_22553__$1;
(statearr_22560_22755[(1)] = (6));

} else {
var statearr_22561_22758 = state_22553__$1;
(statearr_22561_22758[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (15))){
var state_22553__$1 = state_22553;
var statearr_22562_22760 = state_22553__$1;
(statearr_22562_22760[(2)] = null);

(statearr_22562_22760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (13))){
var inst_22516 = (state_22553[(7)]);
var state_22553__$1 = state_22553;
var statearr_22563_22761 = state_22553__$1;
(statearr_22563_22761[(2)] = inst_22516);

(statearr_22563_22761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (6))){
var inst_22516 = (state_22553[(7)]);
var inst_22526 = inst_22516.cljs$lang$protocol_mask$partition0$;
var inst_22527 = (inst_22526 & (64));
var inst_22528 = inst_22516.cljs$core$ISeq$;
var inst_22529 = (cljs.core.PROTOCOL_SENTINEL === inst_22528);
var inst_22530 = ((inst_22527) || (inst_22529));
var state_22553__$1 = state_22553;
if(cljs.core.truth_(inst_22530)){
var statearr_22564_22762 = state_22553__$1;
(statearr_22564_22762[(1)] = (9));

} else {
var statearr_22566_22763 = state_22553__$1;
(statearr_22566_22763[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (17))){
var inst_22549 = (state_22553[(2)]);
var state_22553__$1 = state_22553;
var statearr_22570_22764 = state_22553__$1;
(statearr_22570_22764[(2)] = inst_22549);

(statearr_22570_22764[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (3))){
var state_22553__$1 = state_22553;
var statearr_22571_22766 = state_22553__$1;
(statearr_22571_22766[(2)] = null);

(statearr_22571_22766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (12))){
var inst_22516 = (state_22553[(7)]);
var inst_22539 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22516);
var state_22553__$1 = state_22553;
var statearr_22572_22767 = state_22553__$1;
(statearr_22572_22767[(2)] = inst_22539);

(statearr_22572_22767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (2))){
var inst_22516 = (state_22553[(7)]);
var inst_22516__$1 = (state_22553[(2)]);
var inst_22517 = (inst_22516__$1 == null);
var state_22553__$1 = (function (){var statearr_22573 = state_22553;
(statearr_22573[(7)] = inst_22516__$1);

return statearr_22573;
})();
if(cljs.core.truth_(inst_22517)){
var statearr_22574_22768 = state_22553__$1;
(statearr_22574_22768[(1)] = (3));

} else {
var statearr_22575_22769 = state_22553__$1;
(statearr_22575_22769[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (11))){
var inst_22534 = (state_22553[(2)]);
var state_22553__$1 = state_22553;
var statearr_22576_22771 = state_22553__$1;
(statearr_22576_22771[(2)] = inst_22534);

(statearr_22576_22771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (9))){
var state_22553__$1 = state_22553;
var statearr_22577_22772 = state_22553__$1;
(statearr_22577_22772[(2)] = true);

(statearr_22577_22772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (5))){
var inst_22551 = (state_22553[(2)]);
var state_22553__$1 = state_22553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22553__$1,inst_22551);
} else {
if((state_val_22554 === (14))){
var inst_22542 = (state_22553[(8)]);
var inst_22542__$1 = (state_22553[(2)]);
var inst_22543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22542__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_22544 = (inst_22543 === (0));
var state_22553__$1 = (function (){var statearr_22578 = state_22553;
(statearr_22578[(8)] = inst_22542__$1);

return statearr_22578;
})();
if(cljs.core.truth_(inst_22544)){
var statearr_22579_22774 = state_22553__$1;
(statearr_22579_22774[(1)] = (15));

} else {
var statearr_22580_22775 = state_22553__$1;
(statearr_22580_22775[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (16))){
var inst_22542 = (state_22553[(8)]);
var inst_22547 = console.warn("file open failed",inst_22542);
var state_22553__$1 = state_22553;
var statearr_22581_22776 = state_22553__$1;
(statearr_22581_22776[(2)] = inst_22547);

(statearr_22581_22776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (10))){
var state_22553__$1 = state_22553;
var statearr_22583_22777 = state_22553__$1;
(statearr_22583_22777[(2)] = false);

(statearr_22583_22777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (8))){
var inst_22537 = (state_22553[(2)]);
var state_22553__$1 = state_22553;
if(cljs.core.truth_(inst_22537)){
var statearr_22586_22778 = state_22553__$1;
(statearr_22586_22778[(1)] = (12));

} else {
var statearr_22587_22779 = state_22553__$1;
(statearr_22587_22779[(1)] = (13));

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
});})(c__18817__auto__,req))
;
return ((function (switch__18716__auto__,c__18817__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto____0 = (function (){
var statearr_22588 = [null,null,null,null,null,null,null,null,null];
(statearr_22588[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto__);

(statearr_22588[(1)] = (1));

return statearr_22588;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto____1 = (function (state_22553){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_22553);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e22589){if((e22589 instanceof Object)){
var ex__18720__auto__ = e22589;
var statearr_22591_22781 = state_22553;
(statearr_22591_22781[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22783 = state_22553;
state_22553 = G__22783;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto__ = function(state_22553){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto____1.call(this,state_22553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto__,req))
})();
var state__18819__auto__ = (function (){var statearr_22594 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_22594[(6)] = c__18817__auto__);

return statearr_22594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto__,req))
);

return c__18817__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__22596 = arguments.length;
switch (G__22596) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___22786 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___22786 == null)){
} else {
var x_22787 = temp__5461__auto___22786;
shadow.dom.remove(x_22787);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__18817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18817__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__18818__auto__ = (function (){var switch__18716__auto__ = ((function (c__18817__auto__,el,container_el,temp__5461__auto__){
return (function (state_22610){
var state_val_22611 = (state_22610[(1)]);
if((state_val_22611 === (1))){
var inst_22598 = cljs.core.async.timeout((250));
var state_22610__$1 = state_22610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22610__$1,(2),inst_22598);
} else {
if((state_val_22611 === (2))){
var inst_22600 = (state_22610[(2)]);
var inst_22601 = [el];
var inst_22602 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_22603 = [inst_22602];
var inst_22604 = cljs.core.PersistentHashMap.fromArrays(inst_22601,inst_22603);
var inst_22605 = shadow.animate.start((250),inst_22604);
var state_22610__$1 = (function (){var statearr_22622 = state_22610;
(statearr_22622[(7)] = inst_22600);

return statearr_22622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22610__$1,(3),inst_22605);
} else {
if((state_val_22611 === (3))){
var inst_22607 = (state_22610[(2)]);
var inst_22608 = shadow.dom.remove(container_el);
var state_22610__$1 = (function (){var statearr_22623 = state_22610;
(statearr_22623[(8)] = inst_22607);

return statearr_22623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22610__$1,inst_22608);
} else {
return null;
}
}
}
});})(c__18817__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__18716__auto__,c__18817__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto____0 = (function (){
var statearr_22625 = [null,null,null,null,null,null,null,null,null];
(statearr_22625[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto__);

(statearr_22625[(1)] = (1));

return statearr_22625;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto____1 = (function (state_22610){
while(true){
var ret_value__18718__auto__ = (function (){try{while(true){
var result__18719__auto__ = switch__18716__auto__(state_22610);
if(cljs.core.keyword_identical_QMARK_(result__18719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18719__auto__;
}
break;
}
}catch (e22628){if((e22628 instanceof Object)){
var ex__18720__auto__ = e22628;
var statearr_22631_22799 = state_22610;
(statearr_22631_22799[(5)] = ex__18720__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22800 = state_22610;
state_22610 = G__22800;
continue;
} else {
return ret_value__18718__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto__ = function(state_22610){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto____1.call(this,state_22610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18717__auto__;
})()
;})(switch__18716__auto__,c__18817__auto__,el,container_el,temp__5461__auto__))
})();
var state__18819__auto__ = (function (){var statearr_22632 = (f__18818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18818__auto__.cljs$core$IFn$_invoke$arity$0() : f__18818__auto__.call(null));
(statearr_22632[(6)] = c__18817__auto__);

return statearr_22632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18819__auto__);
});})(c__18817__auto__,el,container_el,temp__5461__auto__))
);

return c__18817__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4434__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__22639(s__22640){
return (new cljs.core.LazySeq(null,(function (){
var s__22640__$1 = s__22640;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22640__$1);
if(temp__5457__auto__){
var s__22640__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22640__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__22640__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__22642 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__22641 = (0);
while(true){
if((i__22641 < size__4433__auto__)){
var vec__22647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__22641);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22647,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22647,(1),null);
cljs.core.chunk_append(b__22642,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__22650 = "%4d | %s";
var G__22651 = (((1) + idx) + start_idx);
var G__22652 = text;
return goog.string.format(G__22650,G__22651,G__22652);
})()], null));

var G__22806 = (i__22641 + (1));
i__22641 = G__22806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22642),shadow$cljs$devtools$client$hud$source_line_html_$_iter__22639(cljs.core.chunk_rest(s__22640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22642),null);
}
} else {
var vec__22654 = cljs.core.first(s__22640__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22654,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22654,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__22657 = "%4d | %s";
var G__22658 = (((1) + idx) + start_idx);
var G__22659 = text;
return goog.string.format(G__22657,G__22658,G__22659);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__22639(cljs.core.rest(s__22640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__22667 = arguments.length;
switch (G__22667) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__22688){
var map__22690 = p__22688;
var map__22690__$1 = (((((!((map__22690 == null))))?(((((map__22690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22690):map__22690);
var warning = map__22690__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__22690,map__22690__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__22690,map__22690__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__22698){
var map__22700 = p__22698;
var map__22700__$1 = (((((!((map__22700 == null))))?(((((map__22700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22700):map__22700);
var warning = map__22700__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__22705 = source_excerpt;
var map__22705__$1 = (((((!((map__22705 == null))))?(((((map__22705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22705):map__22705);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22705__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22705__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22705__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22705__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4047__auto__ = column;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__22713){
var map__22715 = p__22713;
var map__22715__$1 = (((((!((map__22715 == null))))?(((((map__22715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22715):map__22715);
var msg = map__22715__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22715__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22715__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__22720 = info;
var map__22720__$1 = (((((!((map__22720 == null))))?(((((map__22720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22720):map__22720);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22720__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22720,map__22720__$1,sources,map__22715,map__22715__$1,msg,type,info){
return (function (p1__22711_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__22711_SHARP_));
});})(map__22720,map__22720__$1,sources,map__22715,map__22715__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4434__auto__ = ((function (map__22720,map__22720__$1,sources,sources_with_warnings,map__22715,map__22715__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22724(s__22725){
return (new cljs.core.LazySeq(null,((function (map__22720,map__22720__$1,sources,sources_with_warnings,map__22715,map__22715__$1,msg,type,info){
return (function (){
var s__22725__$1 = s__22725;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22725__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__22735 = cljs.core.first(xs__6012__auto__);
var map__22735__$1 = (((((!((map__22735 == null))))?(((((map__22735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22735):map__22735);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4430__auto__ = ((function (s__22725__$1,map__22735,map__22735__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__22720,map__22720__$1,sources,sources_with_warnings,map__22715,map__22715__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22724_$_iter__22726(s__22727){
return (new cljs.core.LazySeq(null,((function (s__22725__$1,map__22735,map__22735__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__22720,map__22720__$1,sources,sources_with_warnings,map__22715,map__22715__$1,msg,type,info){
return (function (){
var s__22727__$1 = s__22727;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__22727__$1);
if(temp__5457__auto____$1){
var s__22727__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22727__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__22727__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__22729 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__22728 = (0);
while(true){
if((i__22728 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__22728);
cljs.core.chunk_append(b__22729,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__22866 = (i__22728 + (1));
i__22728 = G__22866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22729),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22724_$_iter__22726(cljs.core.chunk_rest(s__22727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22729),null);
}
} else {
var warning = cljs.core.first(s__22727__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22724_$_iter__22726(cljs.core.rest(s__22727__$2)));
}
} else {
return null;
}
break;
}
});})(s__22725__$1,map__22735,map__22735__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__22720,map__22720__$1,sources,sources_with_warnings,map__22715,map__22715__$1,msg,type,info))
,null,null));
});})(s__22725__$1,map__22735,map__22735__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__22720,map__22720__$1,sources,sources_with_warnings,map__22715,map__22715__$1,msg,type,info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22724(cljs.core.rest(s__22725__$1)));
} else {
var G__22872 = cljs.core.rest(s__22725__$1);
s__22725__$1 = G__22872;
continue;
}
} else {
return null;
}
break;
}
});})(map__22720,map__22720__$1,sources,sources_with_warnings,map__22715,map__22715__$1,msg,type,info))
,null,null));
});})(map__22720,map__22720__$1,sources,sources_with_warnings,map__22715,map__22715__$1,msg,type,info))
;
return iter__4434__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__22740){
var map__22741 = p__22740;
var map__22741__$1 = (((((!((map__22741 == null))))?(((((map__22741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22741):map__22741);
var msg = map__22741__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22741__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var x = temp__5461__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
