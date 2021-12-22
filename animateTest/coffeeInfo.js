(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"coffeeInfo_atlas_1", frames: [[1002,0,505,510],[1509,0,425,487],[963,1246,437,250],[1002,858,304,76],[963,1498,453,209],[1308,897,276,76],[1402,1246,434,250],[1586,897,254,76],[1509,489,506,406],[0,0,1000,1000],[1002,512,319,344],[0,1246,319,344],[321,1246,319,344],[642,1246,319,344],[1418,1498,242,70],[0,1002,1896,242]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_19 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2072,1600);


(lib.CachedBmp_1 = function() {
	this.initialize(ss["coffeeInfo_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Plunger = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#252525","#53545D","#252525"],[0,0.616,1],-10.4,-0.2,64.6,-0.2).s().p("AolO3IAAhlIIIAAIAA5eIoSAAIAAhVQAAgjAZgZQAZgZAjAAIGfAAICLAAIGLAAQAjAAAZAZQAZAZAAAjIAABVIn+AAIAAZeIH0AAIAABlg");
	this.shape.setTransform(0,15.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#381606","#151822"],[0.733,1],0,0,0,0,0,21.2).s().p("AhFCdQgagMgVgVQgwgwAAhFQAAhDAwgxQAwgvBEgBQBFABAvAvQAxAxAABDQAABFgxAwQgVAVgZAMg");
	this.shape_1.setTransform(1,-95.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-110.8,112,221.7);


(lib.Cup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(-113.3,-142.45,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.3,-142.4,252.5,255);


(lib.Bean = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#290000","#541F08","#7B3900","#5E2800"],[0,0.165,0.675,1],0.8,11.8,35.8,11.8).s().p("AjpEwQhgh+AAiyQAAixBgh+QBhh+CIAAQCJAABgB+QBhB+AACxQAACyhhB+QhgB+iJAAQiIAAhhh+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-43,66,86);


(lib.Content_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(13.9,56.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(49,10.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,203);


(lib.Content_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(9.7,61.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_13();
	this.instance_1.setTransform(55.05,10.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,203);


(lib.Content_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(16.5,56.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(61.4,10.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,203);


(lib.Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-518,-400,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-518,-400,1036,800), null);


(lib.Info_Preparation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15));

	// Layer_1
	this.instance = new lib.Content_2("synched",0);
	this.instance.setTransform(125,100,1,1,0,0,0,125,100);
	this.instance.alpha = 0.0508;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0.0508},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,203);


(lib.Info_Cultivation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15));

	// Layer_1
	this.instance = new lib.Content_1("synched",0);
	this.instance.setTransform(125,100,1,1,0,0,0,125,100);
	this.instance.alpha = 0.0508;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0.0508},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,203);


(lib.Info_Consumption = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15));

	// Layer_1
	this.instance = new lib.Content_3("synched",0);
	this.instance.setTransform(125,100,1,1,0,0,0,125,100);
	this.instance.alpha = 0.0508;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0.0508},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,253,203);


(lib.Beans09 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bean("synched",0);
	this.instance.setTransform(8.8,-16.65,0.4479,0.4473,41.5044,0,0,0.5,0.5);

	this.instance_1 = new lib.Bean("synched",0);
	this.instance_1.setTransform(14.75,20.25,0.4479,0.4473,41.5056,0,0,0.6,0.5);
	var instance_1Filter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-35,-45,70,90);

	this.instance_2 = new lib.Bean("synched",0);
	this.instance_2.setTransform(-41.25,18.9,0.4479,0.4473,101.5004,0,0,0.8,0.1);

	this.instance_3 = new lib.Bean("synched",0);
	this.instance_3.setTransform(-14.25,24.3,0.4478,0.4474,-161.4903,0,0,0.3,-0.2);

	this.instance_4 = new lib.Bean("synched",0);
	this.instance_4.setTransform(36.15,24.8,0.4478,0.4473,126.4556,0,0,0.7,0.1);

	this.instance_5 = new lib.Bean("synched",0);
	this.instance_5.setTransform(-23.8,1.8,0.4479,0.4473,41.5044,0,0,0.5,0.4);
	var instance_5Filter_2 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_2];
	this.instance_5.cache(-35,-45,70,90);

	this.instance_6 = new lib.Bean("synched",0);
	this.instance_6.setTransform(5.65,-0.75,0.4479,0.4474,71.5057,0,0,0.6,0.3);

	this.instance_7 = new lib.Bean("synched",0);
	this.instance_7.setTransform(35.35,-0.9,0.4697,0.4691,-33.4942,0,0,0.4,0.4);

	this.instance_8 = new lib.Bean("synched",0);
	this.instance_8.setTransform(37.45,-23.7,0.4696,0.4692,123.5107,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-40.9,116.7,84);


(lib.Beans08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bean("synched",0);
	this.instance.setTransform(2.9,41.95,0.4479,0.4473,101.5004,0,0,0.6,0.1);

	this.instance_1 = new lib.Bean("synched",0);
	this.instance_1.setTransform(-45.15,-10.65,0.4479,0.4474,71.5057,0,0,0.7,0.2);

	this.instance_2 = new lib.Bean("synched",0);
	this.instance_2.setTransform(2.8,16.05,0.4479,0.4474,176.5056,0,0,0.5,0.2);
	var instance_2Filter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-35,-45,70,90);

	this.instance_3 = new lib.Bean("synched",0);
	this.instance_3.setTransform(-27.05,-27.35,0.4479,0.4473,101.5004,0,0,0.6,0.1);

	this.instance_4 = new lib.Bean("synched",0);
	this.instance_4.setTransform(18.4,-35.15,0.4697,0.4691,51.4589,0,0,0.5,0.1);
	var instance_4Filter_2 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_2];
	this.instance_4.cache(-35,-45,70,90);

	this.instance_5 = new lib.Bean("synched",0);
	this.instance_5.setTransform(45.55,-30.8,0.4697,0.4691,26.5009,0,0,0.7,0.1);

	this.instance_6 = new lib.Bean("synched",0);
	this.instance_6.setTransform(-24.35,9.35,0.4696,0.4692,123.5107,0,0,0.4,0.1);

	this.instance_7 = new lib.Bean("synched",0);
	this.instance_7.setTransform(1.35,1.8,0.4697,0.4691,51.4589,0,0,0.6,0.1);

	this.instance_8 = new lib.Bean("synched",0);
	this.instance_8.setTransform(2.6,-28.4,0.4697,0.4691,101.5044,0,0,0.5,0.4);

	this.instance_9 = new lib.Bean("synched",0);
	this.instance_9.setTransform(17.65,20.5,0.4697,0.4692,-3.4943,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-52.8,125.9,109.5);


(lib.Beans07 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bean("synched",0);
	this.instance.setTransform(-8.1,8.3,0.4478,0.4473,126.4556,0,0,0.6,0.1);

	this.instance_1 = new lib.Bean("synched",0);
	this.instance_1.setTransform(-26.65,-23.75,0.4479,0.4474,71.5057,0,0,0.5,0.3);

	this.instance_2 = new lib.Bean("synched",0);
	this.instance_2.setTransform(-9.55,-14.8,0.4478,0.4473,126.4556,0,0,0.5,0.1);

	this.instance_3 = new lib.Bean("synched",0);
	this.instance_3.setTransform(15.1,-18.2,0.4479,0.4474,176.5056,0,0,0.6,0.2);

	this.instance_4 = new lib.Bean("synched",0);
	this.instance_4.setTransform(9.4,25.3,0.4479,0.4473,41.5044,0,0,0.4,0.2);
	var instance_4Filter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_1];
	this.instance_4.cache(-35,-45,70,90);

	this.instance_5 = new lib.Bean("synched",0);
	this.instance_5.setTransform(12.55,-39.6,0.4479,0.4473,101.5004,0,0,0.6,0);

	this.instance_6 = new lib.Bean("synched",0);
	this.instance_6.setTransform(39.95,-39.35,0.4696,0.4692,123.5107,0,0,0.2,0.1);

	this.instance_7 = new lib.Bean("synched",0);
	this.instance_7.setTransform(13.35,-62.35,0.4697,0.4691,101.5044,0,0,0.5,0.1);

	this.instance_8 = new lib.Bean("synched",0);
	this.instance_8.setTransform(-19.4,-41.05,0.4697,0.4692,-33.4957,0,0,0.5,0.3);
	var instance_8Filter_2 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_8.filters = [instance_8Filter_2];
	this.instance_8.cache(-35,-45,70,90);

	this.instance_9 = new lib.Bean("synched",0);
	this.instance_9.setTransform(-41.15,38.8,0.4697,0.4692,-33.4957,0,0,0.4,0.2);
	var instance_9Filter_3 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_9.filters = [instance_9Filter_3];
	this.instance_9.cache(-35,-45,70,90);

	this.instance_10 = new lib.Bean("synched",0);
	this.instance_10.setTransform(-24.25,56.45,0.4697,0.4691,-33.4942,0,0,0.4,0.4);

	this.instance_11 = new lib.Bean("synched",0);
	this.instance_11.setTransform(-22.15,33.6,0.4696,0.4692,123.5107,0,0,0.2,0.1);

	this.instance_12 = new lib.Bean("synched",0);
	this.instance_12.setTransform(3.5,26.15,0.4697,0.4691,51.4589,0,0,0.5,0.1);
	var instance_12Filter_4 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_12.filters = [instance_12Filter_4];
	this.instance_12.cache(-35,-45,70,90);

	this.instance_13 = new lib.Bean("synched",0);
	this.instance_13.setTransform(6.75,0.3,0.4697,0.4691,101.5044,0,0,0.5,0.1);

	this.instance_14 = new lib.Bean("synched",0);
	this.instance_14.setTransform(-35.95,7.9,0.4697,0.4691,26.5009,0,0,0.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_8Filter_2).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_9Filter_3).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_12Filter_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-78.3,117.4,153.6);


(lib.Beans06 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bean("synched",0);
	this.instance.setTransform(-27.05,30.85,0.4697,0.4691,26.5009,0,0,0.6,0.2);

	this.instance_1 = new lib.Bean("synched",0);
	this.instance_1.setTransform(-39.45,10.1,0.4479,0.4473,41.5056,0,0,0.5,0.5);

	this.instance_2 = new lib.Bean("synched",0);
	this.instance_2.setTransform(9.75,3.7,0.4479,0.4473,101.5004,0,0,0.6,0.1);

	this.instance_3 = new lib.Bean("synched",0);
	this.instance_3.setTransform(22.25,-35.25,0.4479,0.4474,71.5057,0,0,0.5,0.4);

	this.instance_4 = new lib.Bean("synched",0);
	this.instance_4.setTransform(-32.45,-9.35,0.4478,0.4474,-161.4903,0,0,0.4,0);

	this.instance_5 = new lib.Bean("synched",0);
	this.instance_5.setTransform(40.2,-18.7,0.4697,0.4691,101.5044,0,0,0.4,0.2);
	var instance_5Filter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_1];
	this.instance_5.cache(-35,-45,70,90);

	this.instance_6 = new lib.Bean("synched",0);
	this.instance_6.setTransform(-2.5,-11,0.4697,0.4691,26.5009,0,0,0.6,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-50.8,116.6,100.9);


(lib.Beans05 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bean("synched",0);
	this.instance.setTransform(21.55,-8,0.4697,0.4691,-33.4942,0,0,0.4,0.2);
	var instanceFilter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-35,-45,70,90);

	this.instance_1 = new lib.Bean("synched",0);
	this.instance_1.setTransform(-21.65,19.35,0.4479,0.4473,41.5044,0,0,0.3,0.4);
	var instance_1Filter_2 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-35,-45,70,90);

	this.instance_2 = new lib.Bean("synched",0);
	this.instance_2.setTransform(-0.8,-18.85,0.4479,0.4473,41.5056,0,0,0.4,0.4);

	this.instance_3 = new lib.Bean("synched",0);
	this.instance_3.setTransform(6.9,8.55,0.4479,0.4473,41.5056,0,0,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-36.5,76.9,73.1);


(lib.Beans04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bean("synched",0);
	this.instance.setTransform(0.15,-10.45,0.4479,0.4474,71.5057,0,0,0.6,0.4);

	this.instance_1 = new lib.Bean("synched",0);
	this.instance_1.setTransform(17.05,24.3,0.4479,0.4473,41.5044,0,0,0.5,0.6);

	this.instance_2 = new lib.Bean("synched",0);
	this.instance_2.setTransform(1.8,7.75,0.4479,0.4473,41.5056,0,0,0.5,0.5);
	var instance_2Filter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-35,-45,70,90);

	this.instance_3 = new lib.Bean("synched",0);
	this.instance_3.setTransform(-25.3,-22.75,0.4697,0.4691,-33.4942,0,0,0.4,0.2);

	this.instance_4 = new lib.Bean("synched",0);
	this.instance_4.setTransform(33,0.85,0.4697,0.4692,-3.4943,0,0,0.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-41.6,90.9,83.1);


(lib.Beans03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bean("synched",0);
	this.instance.setTransform(-1.2,-32.6,0.4697,0.4691,26.5009,0,0,0.5,0.1);

	this.instance_1 = new lib.Bean("synched",0);
	this.instance_1.setTransform(-14.6,-12.6,0.4479,0.4473,101.5004,0,0,0.7,0.2);

	this.instance_2 = new lib.Bean("synched",0);
	this.instance_2.setTransform(33.6,0.45,0.4697,0.4692,-33.4957,0,0,0.3,0.3);
	var instance_2Filter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-35,-45,70,90);

	this.instance_3 = new lib.Bean("synched",0);
	this.instance_3.setTransform(-43.75,-12,0.4478,0.4474,-161.4903,0,0,0.3,-0.1);

	this.instance_4 = new lib.Bean("synched",0);
	this.instance_4.setTransform(-30.45,9.85,0.4478,0.4473,126.4556,0,0,0.7,-0.1);
	var instance_4Filter_2 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_2];
	this.instance_4.cache(-35,-45,70,90);

	this.instance_5 = new lib.Bean("synched",0);
	this.instance_5.setTransform(-5.85,6.35,0.4479,0.4474,176.5056,0,0,0.5,0.1);
	var instance_5Filter_3 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_3];
	this.instance_5.cache(-35,-45,70,90);

	this.instance_6 = new lib.Bean("synched",0);
	this.instance_6.setTransform(12.75,-23.9,0.4478,0.4474,-161.4903,0,0,0.4,0);

	this.instance_7 = new lib.Bean("synched",0);
	this.instance_7.setTransform(40,22.3,0.4479,0.4473,41.5044,0,0,0.6,0.2);

	this.instance_8 = new lib.Bean("synched",0);
	this.instance_8.setTransform(10.2,32.45,0.4697,0.4692,-33.4957,0,0,0.1,0.4);
	var instance_8Filter_4 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_8.filters = [instance_8Filter_4];
	this.instance_8.cache(-35,-45,70,90);

	this.instance_9 = new lib.Bean("synched",0);
	this.instance_9.setTransform(14.2,-0.55,0.4697,0.4691,26.5009,0,0,0.6,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_2).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_3).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_8Filter_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-52.1,115.69999999999999,103.4);


(lib.Beans02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bean("synched",0);
	this.instance.setTransform(-9.7,-5.55,0.4697,0.4692,-33.4957,0,0,0.5,0.3);
	var instanceFilter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-35,-45,70,90);

	this.instance_1 = new lib.Bean("synched",0);
	this.instance_1.setTransform(1.2,36.9,0.4479,0.4473,101.5004,0,0,0.6,0.1);

	this.instance_2 = new lib.Bean("synched",0);
	this.instance_2.setTransform(31.05,-12.7,0.4479,0.4474,176.5056,0,0,0.3,0.2);

	this.instance_3 = new lib.Bean("synched",0);
	this.instance_3.setTransform(-3.7,-41.05,0.4697,0.4691,-33.4942,0,0,0.6,0.2);
	var instance_3Filter_2 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-35,-45,70,90);

	this.instance_4 = new lib.Bean("synched",0);
	this.instance_4.setTransform(20.25,-37.3,0.4697,0.4692,-3.4943,0,0,0.4,0.2);

	this.instance_5 = new lib.Bean("synched",0);
	this.instance_5.setTransform(0.35,24.6,0.4697,0.4691,-33.4942,0,0,0.6,0.4);
	var instance_5Filter_3 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_3];
	this.instance_5.cache(-35,-45,70,90);

	this.instance_6 = new lib.Bean("synched",0);
	this.instance_6.setTransform(-34.3,36.55,0.4697,0.4691,26.5009,0,0,0.6,0.1);

	this.instance_7 = new lib.Bean("synched",0);
	this.instance_7.setTransform(27.45,42.4,0.4696,0.4692,123.5107,0,0,0.4,0);

	this.instance_8 = new lib.Bean("synched",0);
	this.instance_8.setTransform(32.25,16.4,0.4697,0.4691,51.4589,0,0,0.6,-0.1);

	this.instance_9 = new lib.Bean("synched",0);
	this.instance_9.setTransform(-21.75,20.4,0.4697,0.4692,-3.4943,0,0,0.5,0.1);

	this.instance_10 = new lib.Bean("synched",0);
	this.instance_10.setTransform(7.65,-6.55,0.4697,0.4692,-33.4957,0,0,0.4,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,-59.9,101.7,119.3);


(lib.Beans01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bean("synched",0);
	this.instance.setTransform(-34.6,-29.95,0.4479,0.4474,71.5057,0,0,0.6,0.3);

	this.instance_1 = new lib.Bean("synched",0);
	this.instance_1.setTransform(3.45,-36.65,0.4478,0.4474,-161.4903,0,0,0.2,-0.2);

	this.instance_2 = new lib.Bean("synched",0);
	this.instance_2.setTransform(16.8,-14.8,0.4478,0.4473,126.4556,0,0,0.8,-0.1);
	var instance_2Filter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-35,-45,70,90);

	this.instance_3 = new lib.Bean("synched",0);
	this.instance_3.setTransform(41.4,-18.35,0.4479,0.4474,176.5056,0,0,0.5,0.1);

	this.instance_4 = new lib.Bean("synched",0);
	this.instance_4.setTransform(-8.15,39.95,0.4479,0.4474,71.5057,0,0,0.8,0.2);

	this.instance_5 = new lib.Bean("synched",0);
	this.instance_5.setTransform(12.45,12.8,0.4478,0.4473,126.4556,0,0,0.7,0.1);
	var instance_5Filter_2 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_2];
	this.instance_5.cache(-35,-45,70,90);

	this.instance_6 = new lib.Bean("synched",0);
	this.instance_6.setTransform(-14,-9.85,0.4697,0.4691,51.4589,0,0,0.7,0.2);
	var instance_6Filter_3 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_3];
	this.instance_6.cache(-35,-45,70,90);

	this.instance_7 = new lib.Bean("synched",0);
	this.instance_7.setTransform(-10.8,-35.7,0.4697,0.4691,101.5044,0,0,0.6,0.1);
	var instance_7Filter_4 = new cjs.ColorFilter(0.69,0.69,0.69,1,0,0,0,0);
	this.instance_7.filters = [instance_7Filter_4];
	this.instance_7.cache(-35,-45,70,90);

	this.instance_8 = new lib.Bean("synched",0);
	this.instance_8.setTransform(2.3,8.85,0.4697,0.4692,-3.4943,0,0,0.5,0.2);

	this.instance_9 = new lib.Bean("synched",0);
	this.instance_9.setTransform(31.75,-18.1,0.4697,0.4692,-33.4957,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_2).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_3).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_7Filter_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.4,-55.6,109.8,110.6);


(lib.FrenchPress = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {rest:0,hold:54};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_54 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(56));

	// Press_idn
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-87.3,-103.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// Water
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,0,0,0.949)").s().p("Ao5EZIAAowIRzAAIAAIwg");
	this.shape.setTransform(-1.1793,27.0254,0.9649,2.7455);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,0,0,0.949)").s().p("AolL9IAA35IRLAAIAAX5g");
	this.shape_1.setTransform(-1.2,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,0,0,0.949)").s().p("AolL4IAA3vIRLAAIAAXvg");
	this.shape_2.setTransform(-1.2,25.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,0,0,0.949)").s().p("AolLyIAA3jIRLAAIAAXjg");
	this.shape_3.setTransform(-1.2,25.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,0,0,0.949)").s().p("AolLtIAA3ZIRLAAIAAXZg");
	this.shape_4.setTransform(-1.2,24.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,0,0,0.949)").s().p("AolLnIAA3OIRLAAIAAXOg");
	this.shape_5.setTransform(-1.2,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,0,0,0.949)").s().p("AolLiIAA3DIRLAAIAAXDg");
	this.shape_6.setTransform(-1.2,23.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,0,0,0.949)").s().p("AolLdIAA25IRLAAIAAW5g");
	this.shape_7.setTransform(-1.2,23.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,0,0,0.949)").s().p("AolLXIAA2tIRLAAIAAWtg");
	this.shape_8.setTransform(-1.2,22.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,0,0,0.949)").s().p("AolLSIAA2jIRLAAIAAWjg");
	this.shape_9.setTransform(-1.2,22.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,0,0,0.949)").s().p("AolLNIAA2ZIRLAAIAAWZg");
	this.shape_10.setTransform(-1.2,21.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,0,0,0.949)").s().p("AolLIIAA2OIRLAAIAAWOg");
	this.shape_11.setTransform(-1.2,21.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,0,0,0.949)").s().p("AolLCIAA2DIRLAAIAAWDg");
	this.shape_12.setTransform(-1.2,20.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,0,0,0.949)").s().p("AolK9IAA15IRLAAIAAV5g");
	this.shape_13.setTransform(-1.2,20.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,0,0,0.949)").s().p("AolK4IAA1vIRLAAIAAVvg");
	this.shape_14.setTransform(-1.2,19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,0,0,0.949)").s().p("AolKyIAA1jIRLAAIAAVjg");
	this.shape_15.setTransform(-1.2,19.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,0,0,0.949)").s().p("AolKtIAA1YIRLAAIAAVYg");
	this.shape_16.setTransform(-1.2,18.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,0,0,0.949)").s().p("AolKnIAA1NIRLAAIAAVNg");
	this.shape_17.setTransform(-1.2,18.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},27).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},27).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27).to({_off:true},1).wait(17).to({_off:false,regX:-0.1,regY:-28.1,scaleY:2.403,x:-1.25,y:-49.95},0).wait(19).to({_off:true},1).wait(17).to({_off:false,regX:0,regY:0,scaleY:2.7455,x:-1.1793,y:27.0254},0).wait(28));

	// Plunger
	this.instance_1 = new lib.Plunger("synched",0);
	this.instance_1.setTransform(-1,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-142.9795},0).wait(1).to({y:-142.9159},0).wait(1).to({y:-142.8059},0).wait(1).to({y:-142.6457},0).wait(1).to({y:-142.4309},0).wait(1).to({y:-142.1568},0).wait(1).to({y:-141.8176},0).wait(1).to({y:-141.4069},0).wait(1).to({y:-140.917},0).wait(1).to({y:-140.3391},0).wait(1).to({y:-139.6625},0).wait(1).to({y:-138.8746},0).wait(1).to({y:-137.9598},0).wait(1).to({y:-136.899},0).wait(1).to({y:-135.6682},0).wait(1).to({y:-134.2369},0).wait(1).to({y:-132.565},0).wait(1).to({y:-130.5988},0).wait(1).to({y:-128.264},0).wait(1).to({y:-125.4543},0).wait(1).to({y:-122.0103},0).wait(1).to({y:-117.6835},0).wait(1).to({y:-112.0755},0).wait(1).to({y:-104.5971},0).wait(1).to({y:-94.8798},0).wait(1).to({y:-84.3759},0).wait(1).to({y:-75.559},0).wait(1).to({y:-68.8653},0).wait(1).to({y:-63.7308},0).wait(1).to({y:-59.665},0).wait(1).to({y:-56.3534},0).wait(1).to({y:-53.5971},0).wait(1).to({y:-51.2657},0).wait(1).to({y:-49.2694},0).wait(1).to({y:-47.5447},0).wait(1).to({y:-46.0446},0).wait(1).to({y:-44.7337},0).wait(1).to({y:-43.5844},0).wait(1).to({y:-42.575},0).wait(1).to({y:-41.6879},0).wait(1).to({y:-40.9089},0).wait(1).to({y:-40.2261},0).wait(1).to({y:-39.6294},0).wait(1).to({y:-39.1107},0).wait(1).to({y:-38.6625},0).wait(1).to({y:-38.2787},0).wait(1).to({y:-37.954},0).wait(1).to({y:-37.6837},0).wait(1).to({y:-37.4635},0).wait(1).to({y:-37.2898},0).wait(1).to({y:-37.1594},0).wait(1).to({y:-37.0693},0).wait(1).to({y:-37.017},0).wait(1).to({y:-37},0).wait(1).to({startPosition:0},0).to({y:-143},54).wait(1));

	// Grounds
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#230F00").s().p("Ao5FGIAAowQI1i3I+C3IAAIwg");
	this.shape_18.setTransform(-1.25,103.9,0.9649,0.521,0,0,0,-0.1,32.5);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(27).to({_off:false},0).to({_off:true},56).wait(27));

	// Table
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5E1F00").s().p("AuUAJI4vgIIAAgBIYvgIIOUgBIOVABIYvAIIAAABI4vAIIuVABIuUgBg");
	this.shape_19.setTransform(0,126.8894,0.5953,0.8337);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#993803","#BA7C09"],[0.176,1],0,-63.2,0,0,-63.2,110.4).s().p("EgnDAJeIAAy7IYvAIIOUABIOVgBIYvgIIAAS7g");
	this.shape_20.setTransform(0,177.4974,0.5953,0.8337);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BA7C09").s().p("A7nboQrcrcAAwMQAAwLLcrcQLcrcQLAAQQMAALcLcQLcLcAAQLQAAQMrcLcQrcLcwMAAQwLAArcrcg");
	this.shape_21.setTransform(0.025,38.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(110));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-253.8,500.1,541.9000000000001);


(lib.CoffeeDrinker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"rest":0,"hold":31};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_31 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(31));

	// Mug
	this.instance = new lib.Cup("single",3);
	this.instance.setTransform(5.05,177,0.6247,0.6247,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62));

	// Table
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E1F00").s().p("AnRATQjoAAjbgBQnKgDlXgDIsOgLIAAgBIMOgLQFXgDHKgDQDbgBDoAAIOjAAQDoAADbABQHKADFXADIMOALIAAABIsOALQlXADnKADQjbABjoAAg");
	this.shape.setTransform(0,178.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#993803","#BA7C09"],[0.176,1],0,-63.2,0,0,-63.2,110.4).s().p("EgnDAJeIAAy7IMOAKQFXAEHKACQDbACDoAAIOjAAQDoAADbgCQHKgCFXgEIMOgKIAAS7g");
	this.shape_1.setTransform(0,239.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(62));

	// Black
	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-61.6,-109.45,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({_off:true},18).wait(22));

	// Eyes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AEnBwIgDgBIgggJIgBAAIgBgBIh7gmIgDgBIgQgFIgEAAIgQgFIgEAAIgRgEIgDgBIgDgBIgEgBIgkgGIgCAAIgBAAIgOgBIgBgBIgCAAIgDAAIgDAAIgDgBIgGAAQgbgBgYACIgNABQgHAAgGACIgDAAIgDABIgDAAIgCAAIgBABIgNACIgCAAIgBABIggAIIgDAAIg0ASIgEACIgZAJIgUAIIgoAQIgBABIgEABIgDACIgSAHIgCgCIAIgbIAMgcIABgCIABgCIAFgJIAYgmIACgDIAZgbIADgDIAFgGIANgLIADgCIADgDIALgIIAmgZIAYgLIAtgQIALgCQApgJAoACIALABIAFAAIAkAGIAFABIAKACIAhALIAvAVIA2AlIACABIAwAtIAmAzIAQAdIABACIABACIABADIAIASIgCACg");
	this.shape_2.setTransform(-46.5003,-73.1759,0.8098,0.808,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AEnBwIgDgBIgggJIgBAAIgBgBIh7gmIgDgBIgQgFIgEAAIgQgFIgEAAIgRgEIgDgBIgDgBIgEgBIgkgGIgCAAIgBAAIgOgBIgBgBIgCAAIgDAAIgDAAIgDgBIgGAAQgbgBgYACIgNABQgHAAgGACIgDAAIgDABIgDAAIgCAAIgBABIgNACIgCAAIgBABIggAIIgDAAIg0ASIgEACIgZAJIgUAIIgoAQIgBABIgEABIgDACIgSAHIgCgCIAIgbIAMgcIABgCIABgCIAFgJIAYgmIACgDIAZgbIADgDIAFgGIANgLIADgCIADgDIALgIIAmgZIAYgLIAtgQIALgCQApgJAoACIALABIAFAAIAkAGIAFABIAKACIAhALIAvAVIA2AlIACABIAwAtIAmAzIAQAdIABACIABACIABADIAIASIgCACg");
	this.shape_3.setTransform(42.5003,-73.1759,0.8098,0.808);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AKqBoIgCAAIgCgBIgCAAIgZgEIgCAAIgLgCIgEgBIiOgbIgDAAIgDgBIgBAAIgBAAIgCgBIgKgBIgDAAIgDAAIgOgCIgEAAIgDAAIgHAAIgCgBIgJAAIgDAAIgWAAIgGAAIgCAAIgBABIgBAAIgJAAIgFAAIgDABIgBAAIgDAAIgDAAIgEABIgBAAIgCAAIgCABIgCAAIgWAEIgFAAIgBABIgBAAIgNACIgEACIgQADIgEABIgHACIgCABIgkAJIgFABIgBABIgBAAIgBAAIgSAFIgGACIgCAAIgBAAIgVAFIgBgCIADgUIAAgCIAJgcIAAgBIADgGIABgFIAPgdIADgFIABgCIACgDIAUgYIAUgUIAFgFIADgDIAggWIADgBIAJgFIADgCIAGgDIACAAIAEgCIAZgJIAAgBIABAAIAZgGIAEAAIAJgCIACAAIAHgBIACAAIADgBIAdgBIACABIAXABIAmAIIAZAIIACAAIAgAPIAxAiIAGAEIABABIABACIAaAaIASAWIAWAoIAOAoIACAHIgCACgAjRBlIgCAAIgBAAIgGgCIgSgFIgBAAIgBAAIgDgBIgEgBIgVgGIgFgBIgKgCIgBgBIgIgCIgFgBIgOgDIgFgCIgMgCIgBAAIgCgBIgFAAIgTgEIgCAAIgDAAIgDgBIgBAAIgBAAIgFgBIgCAAIgCAAIgCAAIgDgBIgEAAIgKAAIgBAAIgCgBIgCAAIgEAAIgXAAIgCAAIgJAAIgDABIgHAAIgCAAIgUACIgCAAIgCAAIgKABIgDABIgBAAIgCAAIgCABIgCAAIieAeIgCAAIgaAEIgBAAIgBABIgDAAIgRACIgCgCIAQgvIAXgoIAaggIARgQIABgCIACgBIAEgEIAzgiIAfgPIACAAIAEgCIAqgLIAogEIACgBIAeABIACABIACAAIAHABIACAAIAJACIAFAAIAXAGIABAAIACABIAcALIACAAIAGADIADACIAJAFIACABIAhAWIACADIAHAFIATAUIAUAYIABADIADACIADAFIAOAdIACAFIACAGIAAABIAJAcIAAACIADAUIgCACg");
	this.shape_4.setTransform(-2,-74.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AKqBrIgEAAIgDgBIgZgCIgBAAIgBgBIgCAAIgNgDIgFAAIhJgNIgBAAIgCAAIgqgIIgCAAIgNgCIgCAAIgDAAIgDAAIgCgBIgCAAIAAAAIgDAAIgJgCIgDAAIgDgBIgPgBIgBAAIgCAAIgHAAIgCgBIgLAAIgDAAIgbAAIgCAAIgLAAIgCABIgDAAIgCAAIgCAAIgCABIgDAAIgEAAIgDAAIgCABIgDAAIgRADIgCAAIgHABIgBAAIgBABIgDAAIgiAHIgBAAIgBAAIgyALIgBABIgBAAIgZAGIgBAAIgCABIgVADIgBgBIADgVIAAgBIAAgCIAGgbIADgEIABgEIAVgqIABgCIAPgVIACgCIACgDIAdgcIAhgXIABgBIAOgHIAlgPIABgBIAQgDIACgBIACAAIAbgFIADAAIACgBIAegBIACABIAOAAIAoAHIAjALIAhAPIAxAjIAFAEIACABIAkAoIAIAMIAGAJIAKASIAQAmIAAACIABAEIAEASIgCABgAjSBpIgBgBIgCAAIgZgGIgBAAIgBgBIghgHIgFgCIgMgCIAAAAIgCAAIgigHIgCAAIgCgBIgBAAIgHgBIgDAAIgRgDIgCAAIgCgBIgCAAIgGAAIgBAAIgDgBIgCAAIgDAAIgCAAIgCgBIgMAAIgCAAIgbAAIgBAAIgMAAIgCABIgHAAIgCAAIgDAAIgJABIgEAAIgDABIgDAAIgJACIgCAAIgBAAIgCAAIgDABIgCAAIgCAAIgDAAIgMACIgDAAIgqAIIgBAAIgBAAIhcAQIgCAAIgBABIgBAAIgaACIgCABIgEAAIgRABIgCgBIAEgSIABgEIAAgCIAKgZIAQgfIAGgJIAIgMIAkgoIACgBIAEgEIAsgfIAmgTIApgMIAxgGIACgBIAeABIACABIACAAIAcAFIACAAIACABIAPADIA0AXIACABIARALIANAKIADACIAOANIAOAPIACADIADACIAPAVIAWAsIABAEIACAEIAHAbIAAACIAAABIADAVIgCABg");
	this.shape_5.setTransform(-2,-74.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AKEB2IgCAAIgTgBIgKgBIg/gFIgDgBIgCAAIgGAAIgCgBIgDAAIgLgBIgBAAIgBAAIgCAAIgKgBIgDAAIgFAAIgCgBIgPgBIgCAAIgFAAIgCgBIgLAAIgCgBIgJAAIgEgBIgEAAIgCAAIgIAAIgBgBIgJAAIgEAAIgGAAIgCgBIgQAAIgIAAIgXAAIgDAAIgMAAIgCABIgMAAIgCABIgFAAIgKABIgCABIgDAAIgKABIgFABIgDAAIgCAAIgCAAIgtAGIgCABIgDAAIgbADIgCAAIgBAAIgDAAIgUACIgBgBIAAgTIAAgDIAAgFIAGgcIAAgBIALgjIALgWIAQgYIAXgaIAYgWIAegSIADgDIAHgCIACgBIAggNIABgBIAegHIAFgBIAJgCIAFAAIACAAIADgBIAOAAIAsABIATADIAOAEIAjAKIADACIAFACIAmAUIAVAPIAaAYIAVAYIAWAfIATAsIAIAcIAAABIAAADIADAWIgCABgAjUB0IgCAAIgCAAIgbgDIgCAAIgBgBIgrgFIgCgBIgDAAIgDAAIgCAAIgPgCIgDAAIgCgBIgPgBIgCgBIgMAAIgDgBIgLAAIgCAAIgYAAIgJAAIgPAAIgCABIgGAAIgEAAIgJAAIgBABIgIAAIgCAAIgEAAIgEABIgJAAIgCABIgLAAIgCABIgFAAIgCAAIgFAAIgJABIgDABIgFAAIgCAAIgKABIgDAAIgCAAIgBAAIgKABIgDAAIgDABIgEAAIgEAAIgCABIg/AFIgKABIgTABIgCAAIg3AAIgCgBIAEgZIAAgBIAHgcIAUgsIAigvIAHgIIAbgYIAdgUIAegPIAGgCIADgCIAigKIAOgEIATgDIArgBIAPAAIACABIADAAIAFAAIAJACIAFABIAfAHIAAABIACAAIAeANIACABIAGACIAEADIAdASIAeAbIAXAdIARAcIARAtIAAABIAEAcIAAAFIABADIAAATIgCABg");
	this.shape_6.setTransform(-2,-75.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AKFByIgCgBIhbgJIgDAAIgCAAIgGgBIgCAAIgCgBIgLgBIgBAAIgCAAIgNgCIgCgBIgFAAIgCAAIgKgBIgCgBIgDAAIgDAAIgEAAIgDgBIgegBIgCgBIgJAAIgBAAIgKAAIgEgBIgIAAIgBAAIgNAAIgBAAIgBAAIgJAAIgGAAIgBAAIgMAAIgCABIgPAAIgCABIgEAAIgHABIgCAAIgBAAIgFAAIgCAAIgNACIgCAAIgKABIgFABIgBAAIgCABIgCAAIgvAHIgCABIgBAAIgBAAIgbAFIgBAAIgBAAIgJAAIgFABIgJABIgBgBIAAgTIABgDIAAgEIAFgcIABgBIAAgBIABgCIALgfIAJgTIARgYIACgCIACgDIASgTIABgCIABgBIAbgWIArgZIAEgBIAEgCIASgHIABAAIABAAIACgBIAqgJIAEgBIADAAIACAAIAOgBIArACIATACIAJACIAnAMIAuAXIAlAcIACADIAGAEIABACIACABIAcAiIAFAGIABAAIABADIAHAKIAFALIAPAfIAAABIAJAfIADAWIgCABgAjGByIgEgBIgJAAIgCAAIgCAAIgagFIgBAAIgBAAIgHgCIgqgGIgDAAIgBgBIgBAAIgggEIgFAAIgBAAIgBAAIgIgBIgFAAIgCgBIgNAAIgDgBIgMAAIgBAAIgHAAIgIAAIgBAAIgBAAIgMAAIgDAAIgHAAIgFABIgJAAIgBAAIgJAAIgBABIgiACIgEAAIgDAAIgDAAIgBABIgKABIgDAAIgFAAIgCABIgOACIgBAAIgBAAIgKABIgDABIgDAAIgFABIgDAAIgCAAIhIAIIgGAAIgNABIgCABIgGAAIgFAAIgrABIgCgBIAEgWIAFgWIAEgJIAAgBIAOgfIAFgLIAHgKIACgDIAAAAIABgCIAZgeIAIgIIABgBIABgCIAGgEIACgDIAOgMIAigWIAngTIAjgKIAJgCIASgCIAUgCIAmABIACAAIACAAIAPACIAgAIIADABIABAAIAAAAIASAHIAEACIAFABIAiATIAjAcIABABIACACIARATIACADIACACIAVAhIAOAkIACAFIABACIAAABIABABIAFAcIAAAEIAAADIABATIgCABg");
	this.shape_7.setTransform(-2,-75.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AKqBnIgCAAIgCAAIgCAAIgZgEIgBAAIgBgBIhkgUIgDgBIgMgCIgEgBIgMgCIgDAAIgSgEIgDAAIgFgBIgDAAIAAAAIgCAAIgMgCIgDAAIgDgBIgPgBIgBAAIgFAAIgCgBIgIAAIgCAAIggAAIgSABIgDAAIgCAAIgDABIgCAAIgCAAIgDAAIgEABIgBAAIgCAAIgCAAIgTAEIgDAAIgHABIgBABIgCAAIgbAGIgFABIgHACIgCABIguAMIgBAAIgBAAIgZAHIgBAAIgBABIgVAEIgBgBIADgUIABgCIAAgCIAFgVIACgEIABgCIABgCIASgmIAEgHIARgWIAYgYIABgBIAJgIIAVgQIAdgQIADAAIABgBIAdgLIAAAAIABgBIASgEIACAAIAUgEIADAAIAEgBIACAAIADAAIAJgBIAEAAIAXAAIAwAHIAhAKIABABIABAAIABAAIAQAHIAjATIAMAIIAhAcIAZAbIACADIABACIAHAJIAGAKIATAhIAOAsIgCABgAjRBlIgBgBIgCAAIgYgHIgBAAIgBAAIghgJIgEgBIgKgCIgCgBIgIgCIgEgBIgbgGIgBAAIgBgBIgIgBIgCAAIgUgEIgCAAIgCAAIAAAAIgGgBIgCAAIgCAAIgCAAIgDgBIgCAAIgCAAIg0gBIgBAAIgIAAIgCABIgFAAIgBAAIgBAAIgKABIgFAAIgCABIgCAAIgNACIgCAAIgBAAIgCAAIgGABIgCAAIgSAEIgCAAIgOACIgDABIgMACIgDABIhkAUIgBABIgBAAIgaAEIgBAAIgBAAIgEAAIgQACIgCgBIANgoIAUglIAGgKIAGgJIADgCIABgDIAkglIAjgaIAQgKIAigQIABAAIADgBIAggKIAxgHIAbAAIAJABIACAAIACAAIAFABIACAAIAUAEIACAAIARAEIABABIACAAIAcALIACABIABAAIAkAVIASAOIAGAFIACABIAUAVIATAZIAYAtIAAACIABACIABAEIAHAVIAAACIADAWIgCABg");
	this.shape_8.setTransform(-2,-74.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AG4CaIgBAAIgIAAIgCgBIgDAAIgDAAIgBAAIgCgBIAAAAIgDgBIgCAAIgCAAIAAAAIgBAAIgCgBIgDAAIgBAAIgLgEIgCAAIgHgCIgBAAIgBAAIgCAAIgIgCIgLgCIgCAAIgEAAIgBgBIgCAAIgFgBIgCAAIgKgCIgDAAIgCAAIgLgBIgCAAIgDgBIgDAAIgCAAIgDAAIgDgBIgzgCIgBAAIgFAAIgJgBIgJgBIgKAAIgDgBIgbgCIgBgBIgEgbIAAgCIAAgGIgBgEIABgbIAAgBIAHgoIAEgMIACgHIAEgGIABgDIAAgBIABgBIAAgCIACgDIABgDIALgTIAVgdIAcgaIATgPIACgBIANgIIANgHIAFgCIAYgLIACAAIABAAIACgBIAQgFIACgBIADAAIAagGIAGgBIACAAIAvgCIA1AIIArAPIACABIAoAVIAZATIADADIADADIAYAXIAAABIABABIAMARIADAEIADAEIABABIAAAAIAMAXIABABIAAABIADAEIATA7IAAADIAAABIABABIADAiIgBAfIgCABIgcAHIgCAAIggAEIgCAAIgCABIg3AGIgDAAIgCAAIgnAEIgDAAIgCABIgGAAIgDAAIgCAAIgKABIgDAAIgCABIgMAAIgFABIgGAAIgEAAIgEAAIgDABIgCAAIAAAAIgCAAIgBAAIgEAAIgFAAIgCABIgGAAIgDAAgAm7CaIgCAAIgHAAIgCgBIgFAAIgEAAIgBAAIgCAAIgBAAIgCAAIgBgBIgFAAIgEAAIgHAAIgEgBIgMAAIgDgBIgBAAIgLgBIgDAAIgCAAIgHAAIgBgBIgDAAIgmgEIgDAAIg6gGIgCgBIgDAAIgfgEIgCAAIgcgHIgCgBIgBgfIABgSIACgFIABgLIAAgBIAAgBIAEgUIAQgqIABgEIABgBIAAgBIANgXIABAAIAAgBIASgZIABgBIABgBIAWgXIAEgDIADgDIAtgeIAFgDIADgCIALgFIADgBIArgPIAagFIA2gDIAQACIADAAIADAAIAFABIAbAGIADAAIADABIAPAFIADABIAAAAIACAAIAjAQIADACIAFACIAMAIIACABIAUAPIAbAaIAVAdIAMAWIACADIABACIAAABIABABIABADIACAGIACAHIAFAMIAHAoIABABIAAAlIgBACIgEAbIgCABIgbACIgBABIgKAAIgJABIgKABIgFAAIgBAAIg0ACIgCABIgDAAIgDAAIgCAAIgCABIgDAAIgLABIgDAAIgCAAIgKACIgCAAIgFABIgBAAIgBABIgFAAIgCAAIgTAEIgCAAIgBAAIgBAAIgHACIgCAAIgMAEIAAAAIgCAAIgEABIAAAAIgBAAIgBAAIgCAAIgCABIgBAAIgCABIgCAAIgCAAIgDAAIgDABIgHAAIgCAAg");
	this.shape_9.setTransform(-2,-76.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AGuDHIgBgBIgBAAIAAAAIgCgBIgBAAIgBAAIgCgBIAAgBIgCgBIAAAAIAAgBIgCgBIgBAAIgCgBIgEgDIgBgBIgBAAIgBgBIgCAAIAAgBIgCAAIgEgDIAAgBIgBAAIgCgBIgCgBIgCgBIgOgGIgCgBIgDgCIgCAAIgUgHIAAAAIgEgBIgKgDIgDgBIgDgBIgBAAIgBAAIAAAAIgDgBIgEgBIgCgBIgMgCIgCgBIgBAAIgDgBIgYgFIgNgDIgEAAIgFgBIgfgGIAAAAIgCAAIgCgBIgFgBIgbgFIgBgCIgJgfIgBgCIAAgCIAAgBIgEgnIADgwQABgGACgIIAGgTIAAgBIAAgBIABgCIAOgfIATgeIABgBIABAAIAcggIAkgbIAGgDIACgBIACgCIAlgRIACgBIABAAIAWgHIAEgBIAdgHIA9gDIAjAEIBFAWIADABIACABIAoAYIAgAaIANAQIAEADIAIALIABABIAAAAIACACIAQAbIANAeIAAAAIAAABIACAEIAEAPQADAJAAAEIAHArIAAAsIgBABIAAACIgBAFIgEAbIgCACIgeAKIgCABIgCAAIgBAAIgjALIgBAAIgCAAIgqALIAAABIgBAAIgBAAIgHABIgOAFIgCAAIgCAAIgsAMIgBAAIgFABIgDABIgDAAIgJADIgBABIgBAAIgQAEIgCABIgBAAIgBAAIgEABIgGABIgBABIgDABIgBAAIgBABIgBAAIgDAAIgEACIgBAAIgDABIgCAAIgCAAIAAABgAm0DHIgBgBIgCAAIgCAAIgCgBIgBAAIgFgCIgDAAIgBAAIgBgBIAAAAIgEgBIgCgBIgFgBIgEgBIgBAAIgBAAIgCgBIgPgEIgBAAIgBgBIgKgDIgDAAIgDgBIgFgBIgBAAIgEgCIgpgKIgBAAIgCAAIgPgFIgFgBIgCAAIgBAAIgBgBIgpgLIgBAAIgCAAIgkgLIgBAAIgBAAIgCgBIgegKIgCgCIgEgbIgBgFIAAgCIAAgBIgBgsIAGgrQABgEADgJIAEgPIABgEIABgBIAAAAIANgeIARgbIABgCIAAAAIABgBIAIgLIADgDIAOgQIAfgaIAqgYIABgBIACgBIAqgPIAcgHIAjgEIA9ADIAdAHIADABIAYAHIAAAAIACABIAkARIADACIADABIAEADIAlAbIAdAgIABAAIAAABIATAeIAOAfIAAACIABABIAAABIACAEIADAPQADAIAAAGIAEAqIgEAtIgBABIAAACIgBACIgIAfIgCACIgbAFIgEABIgDABIgBAAIgBAAIgeAGIgGABIgCAAIgPADIgXAFIgDABIgCAAIgBABIgLACIgEABIgDABIgCABIgBAAIgBAAIgBAAIgDABIgCABIgLADIgEABIgBAAIgTAHIgBAAIgFACIgCABIgNAGIgCABIgCABIgCABIAAAAIgBABIgFADIgBAAIgBABIgBAAIAAABIgCAAIgBABIgFADIgBABIAAAAIgCABIAAABIgBAAIgCABIgBABIgCABIAAAAIgBAAIgBABIgBAAIgBAAIgCABg");
	this.shape_10.setTransform(-2,-76.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AGvDYIgCAAIAAAAIgBAAIgBgBIAAAAIgBgBIgBAAIgBgBIAAgBIgBAAIgBgBIAAAAIAAgBIgCgBIAAgBIgBAAIgGgGIgBAAIgCgCIgBgBIgEgDIAAAAIgBgBIgLgHIgCgBIgDgCIgIgEIgBAAIAAAAIgCgBIgEgCIgNgFIgBgBIgBAAIAAAAIgVgIIgBAAIgEgBIgCgBIgDgBIgOgEIAAAAIgBAAIgDgBIgZgHIgPgDIgBgBIgBAAIgHgCIgfgHIgBAAIAAAAIgmgJIgBgCIgLghIAAgCIAAgBIAAgBIgBgBIgGgpIACgxIADgQIAEgVIABgBIAAgBIABgCIABgEIAMgdIATgeIABgBIAAgBIAcggIACgBIAGgGIAEgDIAJgHIACgCIACgBIAPgLIAagNIAVgLIACAAIABgBIAYgHIADgBIAfgHIA4gEIArAFIAjAIIAqARIAFADIAKAFIAbARIAdAaIACACIAZAfIABABIAAAAIACACIAPAbIABACIADAGIAJAXIABACIABACIAIAiIAEAqIAAADIgCAsIAAABIAAACIgHAkIgCACIgjANIgBAAIgKADQgEACgGACIgRAGIgCAAIgsAOIgBABIgBAAIgXAHIgBAAIgBABIguAOIgBABIgBAAIgFABIgPAGIgBAAIgBAAIgLAEIgCABIgEACIgBAAIgBAAIgEABIgBABIgDABIgCABIgBABIgCABIgBAAIgBAAIgBAAIgEACIgCABIgDABIgDABIgEAAIgBABgAmvDYIgDAAIgEgBIgDgBIgCgBIgEgCIgCAAIAAAAIgBAAIgCgBIgBgBIgBgBIgEgBIgCgBIgDgBIgBAAIgBAAIgEgCIgCgBIgLgEIgBAAIgBAAIgPgGIgGgBIAAAAIgBgBIgugOIgBgBIAAAAIgYgHIgBAAIAAgBIgtgOIgBAAIgRgGQgIgCgDgCIgJgDIgCAAIgjgNIgCgCIgHgkIAAgCIAAgBIgDgsIABgDIAEgqIAJgiIABgCIAAgCIAJgXIADgGIABgCIAPgbIABgCIABAAIAAgBIAZgfIACgCIAfgaIAagRIAKgFIAEgDIACgBIAJgEIArgPIBDgKIA5AEIA5APIABABIACAAIAVALIAbANIANALIADABIACACIAJAHIAEADIAGAGIACABIAbAgIABABIABABIAEAGIASAhIAHAQIACAEIABAEIABACIAAABIAAABIAGAVIACAQIACAxIgGApIAAABIAAABIgBABIgBACIgKAhIgCACIglAJIAAAAIAAAAIgmAJIgCAAIgCABIgOADIgZAHIgDABIAAAAIgCAAIgNAEIgCABIgEABIgDABIgBAAIgVAIIgBAAIgBAAIgBABIgMAFIgFACIgBABIgBAAIAAAAIgJAEIgBACIgCABIgMAHIgBABIgBAAIgCADIgCABIgCACIgCAAIgFAGIAAAAIgBABIgCABIgBABIAAAAIgBABIAAAAIgBABIAAABIgBAAIAAABIgBAAIgBABIAAAAIgBAAIgCAAIgBABg");
	this.shape_11.setTransform(-2,-76.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AGuDQIgBAAIAAAAIgCgBIgBAAIAAgBIgBAAIgDgCIgBgBIAAAAIgCgCIAAAAIgBAAIAAgBIgGgEIgBgBIgBgBIgBAAIgBgBIgFgDIAAgBIgBAAIgDgCIgDgBIgDgCIgQgIIgBAAIAAgBIgUgHIAAgBIgBAAIgTgGIgCAAIgBgBIAAAAIgVgGIgBAAIAAAAIgBAAIgqgKIgCgBIgBAAIglgIIgBAAIAAAAIgCAAIgCgBIghgHIgBgCIgKggIgBgCIAAgCIAAAAIAAgBIgFgoIAAgUIAFgsIAGgUIAAgBIABgDIABgDIALgbIAQgaIADgEIABgCIABgBIABgBIAbgeIACgCIAKgJIAEgDIAFgDIACgCIACgCIAYgPIAlgSIBFgRIACAAIATgCIBDAEIAiAIIApAQIAdAQIAIAGIAFADIAEADIAIAGIASARIABABIACACIAYAcIAAACIACACIACAEIAOAWIABADIAAABIALAaIABACIAAABIAAABIACAEIAEAPQADAJAAAFIAGAsIgBAsIgBACIgGAjIgCACIgfALIgCABIgCAAIgBAAIgnANIgDAAIgnAMIgBAAIAAABIAAAAIgYAGIgBAAIAAABIgBAAIgpAMIgDAAIgBABIgBAAIAAAAIgIACIgDABIgKADIgCABIgHACIgEABIgCABIgCABIgDABIgBAAIAAAAIgJADIgCABIgDABIAAAAIgCAAIgBABIgCAAIgIADIgCAAIgBABIgBAAIAAAAgAmyDQIgBAAIAAAAIgCgBIgDAAIgGgDIgDAAIgCgBIgBAAIAAAAIgDgBIgCgBIgJgDIgBAAIgBAAIgCgBIgCgBIgCgBIgEgBIgHgCIgCgBIgKgDIgCgBIgIgCIgBAAIAAAAIgCgBIgDAAIgogMIgCAAIgBgBIgBAAIgWgGIgBAAIAAgBIgBAAIgogMIgCAAIgngNIgCAAIgBAAIgCgBIgfgLIgCgCIgGgjIAAgCIgCgsIAFgsQABgFADgJIAEgPIABgEIAAgBIANgdIAAgBIACgDIAPgaIACgCIABgCIAXgcIABgCIADgBIADgEIAXgTIADgDIAqgZIA0gTIAXgFIBDgEIASACIAEAAIBEARIAlASIAYAPIACACIADACIADADIAFADIAKAJIACACIAbAeIABABIABABIABACIASAeIAEAGIAGARIACAEIABADIACADIAAABIAIAkIACAwIgFAoIAAABIgBAAIAAACIgBACIgBAFIgIAbIgCACIggAHIgDABIgBAAIAAAAIgBAAIglAIIgBAAIgBABIgqAKIgBAAIgBAAIgBAAIgVAGIgBAAIAAABIgCAAIgTAGIAAAAIgBABIgUAHIgBABIAAAAIgQAIIgEACIgCABIgCACIgBAAIgBABIgFADIAAABIgBAAIgCABIgCABIgEAEIAAABIgBAAIgBAAIgCACIgBAAIgBABIgCACIgBAAIAAABIAAAAIgCABIgBAAIgCAAg");
	this.shape_12.setTransform(-2,-76.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AGxCuIgBgBIgEAAIgEgBIgBAAIgBAAIgBgBIgBAAIgBAAIgBgBIgBAAIgBAAIgBgBIgCAAIgCgBIAAAAIAAAAIgKgEIgBAAIgBgBIgEgBIgEgCIAAAAIgDAAIgCgBIgQgFIgCgBIgEgBIgBAAIgCAAIgMgDIgFgBIgBAAIgCAAIgCgBIgKgCIgEAAIgCgBIgCAAIAAAAIAAAAIgUgDIgCAAIgBgBIgDAAIghgEIgDAAIAAgBIgCAAIgigEIAAAAIgBAAIgCAAIgFgBIgZgDIgBgCIgFgYIgBgFIAAgCIgBgBIgCgoIAGgqIAJgbIABgDIAAgBIAAgBIABgCIAOgbIABgCIATgbIAAgBIABAAIAagcIAqgdIACgBIACgCIAjgQIADgBIADAAIAPgFIAEgBIACgBIAcgGIAJgBIACAAIAMgBIAdgBIBBAKIAtAQIAmAWIAEADIAEADIAXATIARARIACAEIAFAGIABABIABAAIABACIAQAXIABACIABABIAMAZIAAABIABABIAAABIAHAQIAMA1IACApIgBACIAAAEIgCAZIgCACIgYAGIgDABIgDABIgBAAIgBAAIghAHIgBABIgCAAIgkAGIgDABIgBAAIgCABIgUADIgCAAIgBABIgqAGIgCABIgBAAIgPACIgFABIgCAAIgTADIgBAAIgBABIgEAAIgCAAIgCABIgCAAIgFABIgEAAIgGABIgCAAIgCABIgCAAIgDAAIgDABgAm4CuIgDgBIgCAAIgEAAIgBgBIgCAAIgGgBIgDAAIgGgBIgCAAIgCgBIgCAAIgEAAIgBgBIgBAAIgQgCIgCgBIgCAAIgGgBIgPgCIgCAAIgBgBIgqgGIgCgBIgBAAIgUgDIgBgBIgCAAIgDgBIgkgGIgCAAIAAgBIgigHIgBAAIgBAAIgCgBIgFgBIgXgGIgCgCIgDgZIAAgEIAAgCIACgpIAIgoIAKgdIABgBIAAgBIABgBIANgZIAAgBIABgCIAQgXIABgCIABAAIAAgBIAGgGIACgEIARgRIAXgTIAEgDIADgDIAngWIAsgQIAQgEIAogFIAnAAIALABIAEAAIAIABIAcAGIADABIACABIAQAFIADAAIADABIAeAOIAHAEIACABIAjAXIAhAiIABAAIABABIASAbIACACIAMAbIABACIABABIAAABIAKAeIAFAqIgBAoIgBABIgGAfIgCACIgZADIgDABIgCAAIgBAAIgCAAIghAEIgBAAIgCABIgDAAIghAEIgCAAIgBABIgCAAIgTADIgBAAIAAAAIgCAAIgDABIgCAAIgLACIgDABIgBAAIgBAAIgFABIgNADIgBAAIAAAAIgFABIgDABIgQAFIgCABIgBAAIgBAAIgFACIgDABIAAABIgBAAIgKAEIAAAAIgBAAIgCABIgDAAIAAABIgBAAIAAAAIgCABIgBAAIgBAAIgCABIgBAAIgBAAIgDABIgFAAIgBABg");
	this.shape_13.setTransform(-2,-76.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AKaB4IgIAAIgOAAIgCgBIgKAAIgUgBIg/gFIgDAAIgCAAIgGgBIgCAAIgCAAIgLgBIgDAAIgCgBIgSgBIgCAAIgJgBIgGAAIgCgBIgFAAIgBAAIgbgBIAAgBIgIAAIgCAAIgJAAIgCgBIgJAAIgDAAIgEAAIgBgBIguAAIgFAAIgOAAIgFABIgCAAIgCAAIgGAAIgJABIgCAAIgDABIgPABIgDAAIgCABIgCAAIgDAAIgrAFIgCABIgCAAIgcADIgGAAIgUACIgBgBIAAgbIAFgdIAAgBIALgjIAGgLIAFgLIAhgtIADgDIABgBIAvglIARgKIACAAIAigOIABgBIADAAIAEgCIAmgIIAFAAIACgBIADAAIAUgBQAEgBAFABIAZABIAgAGIArANIAAABIABAAIAgAPIADADIAEACIAYARIACABIAZAXIAiApIAAABIAAAAIANAYIAOAgIAAACIAIAeIAAACIADAXIgCABIgTABIgDAAgAqkB4IgDAAIgTgBIgCgBIADgXIAAgCIAIgeIABgCIAMggIAOgYIAAAAIABgBIAEgGIAcgjIAZgXIACgBIAZgRIAEgCIAEgDIAegPIABAAIAEgCIAngMIAcgFIAegCQAFgBAFABIAVABIADABIAFAAIAmAIIAFACIACAAIABABIAYAJIAIAEIACABIACAAIARAKIAUAOIAaAXIABABIAEADIAWAdIARAbIAEALIAMAjIAAABIAFAdIAAAbIgCABIg1gFIgCAAIgCgBIgrgFIgCAAIgDAAIgDgBIgCAAIgPgBIgCgBIgSgBIgCAAIgDAAIgEgBIhAAAIgCABIgFAAIgBAAIgKAAIgCABIgJAAIgDAAIgGAAIgCABIgZABIgDAAIgEAAIgCABIgGAAIgJABIgCAAIgSABIgDABIgCAAIgLABIgCAAIgDAAIgFABIgCAAIgDAAIhTAGIgKAAIgBABIgQAAIgIAAg");
	this.shape_14.setTransform(-2,-75.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AGyCmIgCAAIgEAAIgBgBIgDAAIgDAAIgBgBIgBAAIgBgBIgBAAIgCAAIAAgBIgBAAIgDAAIgBgBIgBAAIAAAAIgKgEIgCAAIgBAAIgBAAIgCgBIgDgBIgBgBIgBAAIgCgBIgCAAIgCAAIgVgGIgCAAIgBAAIgbgFIgGgBIgCAAIgCAAIgCgBIgBAAIgGgBIgCAAIgMgBIgCAAIgDgBIgWgCIgLgBIgEAAIgGgBIgbgDIgCAAIgCAAIgdgDIgBgCIgFgcIAAgCIgBgBIgBgmIABgBIAAgDIAFgmIAHgTIABgEIABgDIACgFIAAgBIABgBIAOgbIAPgWIADgEIABgCIABgBIAGgHIAEgDIADgEIANgNIAlgaIArgVIACAAIABAAIATgGIADgBIApgIIAngBIAWABIAmAHIAxARIAEACIAiAUIAcAWIAKAJIAGAHIALAMIAAABIABAAIARAZIABACIAAAAIAOAYIAAACIABACIABADIAGAMIAMA0IAAADIADAjIAAAEIgCAcIgCACIgdAHIgBAAIgBAAIghAHIgCAAIgnAGIgCAAIgBABIgRACIgCAAIgBABIgDAAIgpAFIgBABIgCAAIgFAAIgDAAIgNACIgBAAIgBABIgCAAIgQACIgHAAIgBABIgCAAIgFABIgCAAIgBAAIgEAAIgEABIgDAAIgBAAIgCAAIgDABIgDAAIgDAAgAm5CmIgCAAIgDAAIgEgBIgCAAIgBAAIgEAAIgDgBIgDAAIgDAAIgCAAIgDgBIgCAAIgDgBIgFAAIgFgBIgLgBIgDAAIgBgBIgCAAIgMgCIgDAAIgFAAIgBAAIgBgBIgrgFIgBAAIgBgBIgDAAIgRgCIgCgBIgBAAIgngGIgCAAIghgHIgBAAIgBAAIgdgHIgCgCIgCgcIACgqIAOg0IAFgMIABgDIABgCIABgCIAMgYIABAAIABgCIARgZIAAAAIABgBIAMgMIAFgHIAJgJIAygjIAEgCIAIgFIBAgVIAngGIAnAAIA1AJIACABIASAGIACAAIABAAIAiAQIAjAWIAZAWIADAEIAEADIAFAHIACABIABACIADAEIAWAjIAHAOIABABIAAABIACAFIABADIACAEIAFATIAGAmIAAADIABABIgBAmIAAABIAAACIgGAcIgCACIgcADIgBAAIgDAAIgcADIgEABIgQABIgWACIgDABIgDAAIgKABIgDAAIgGABIgBAAIgBABIgDAAIgDAAIgUADIgNADIgBAAIgBAAIgVAGIgCAAIgCAAIgCABIgBAAIgBABIgDABIgCABIgCAAIgBAAIgBAAIgKAEIAAAAIgBAAIgBABIgDAAIgBAAIgBABIgBAAIgBAAIgBABIgBAAIgCABIgCAAIgCAAIgBABIgGAAIgBAAg");
	this.shape_15.setTransform(-2,-76.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AGrE3IgBAAIgBAAIgBgBIAAAAIAAAAIgBAAIAAgCIgBgBIAAgCIABgBIAAgBIAAgCIABgCIABgBIAAgBIABgBIAAgBIACgCIABgBIACgEIAGgFIABgCIgCgGIAAgBIgGgLIAAgBIgHgJIgIgJIgBgCIgIgHIgEgDIgHgGIgBgBIAAAAIgTgOIgCAAIgCgCIgBAAIgBgBIgRgKIgGgDIgCgBIgBAAIAAgBIgBAAIgEgDIgxgXIgBAAIgBAAIAAgBIgpgRIgEgBIgCgCIgBAAIAAgBIgBAAIgBAAIgEgCIgrgRIgBgBIgWgvIAAAAIgBgBIgPg0IgBgBIAAgBIAAgDIgDgUIgEgmIAAgKIAEgkIAAgBIAAgCIABgFIABgCIABgGIAIgbIAAAAIABgCIATgqIABgBIAAgBIAXgeIAIgKIACgDIAwgpIAzgcIACAAIABgBIAcgJIAEgCIAlgJIAIgBIADAAIAEAAIATgDIBNADIAkAJIAAAAIABAAIAyATIAGADIADABIABABIACABIACACIAEABIAoAcIAjAkIAaAnIABACIACADIANAdIABAFIABACIAAABIABABIAJAlIAAACIAAABIAFAiIgEBFIAAABIAAACIgLA0IAAABIAAABIAAAAIgRAxIgCABIgrAYIgBABIgBAAIAAAAIgBABIguAYIAAABIgBAAIgBAAIgCABIgDABIgsAYIgDACIgBABIgBAAIgBAAIgcAQIAAABIgZAPIgBAAIgBABIgBABIgDABIgTANIgBABIgUAOIgBABIgBABIgCABIgJAJIAAACIAAABIAAADIABACIgBAHIAAABIgBAEIAAABIAAAAIgBACIgBABIgBABIAAABIgBAAIAAAAIAAABIgBAAIAAAAIgCACIAAAAIAAAAIgBABIgBAAIgBAAgAmqE3IAAAAIgCAAIgBgBIgBAAIAAAAIgBgCIgBAAIAAAAIgBgBIAAAAIAAAAIAAgBIgBgBIAAgBIgBgCIAAAAIgBgBIgBgEIAAgBIgBgHIABgCIAAgDIAAgBIAAgCIgJgJIgCgBIgBgBIgBgBIgUgOIAAgBIgUgNIgDgBIgCgBIAAgBIgBAAIgZgPIgBgBIgcgQIAAAAIgBAAIAAgBIgEgCIgwgZIgBgBIgBAAIAAAAIgBgBIgugYIAAgBIgBAAIAAAAIgCgBIgrgYIgCgBIgQgxIAAAAIgBgBIAAgBIgLg0IAAgCIgBgBIAAgCIAAgDIgChAIADgiIAAgBIABgCIAJglIAAgBIABgBIABgCIACgFIAMgdIACgDIAAgCIAagnIAjgkIAqgcIACgBIADgCIACgBIABgBIADgBIAGgDIAxgTIABAAIABAAIAjgJIBOgDIATADIAEAAIAEAAIAHABIAlAJIADACIAcAJIADABIABAAIAyAcIAGAEIApAjIAEAFIAJAKIAVAeIABABIABABIAUAqIAAACIABAAIAHAbIABAGIABACIABAFIAAACIAAABIAEAkIgBAKQAAAVgDARIgCAUIgBADIAAABIAAABIgQA0IAAABIAAAAIgXAvIgCABIgrARIgDACIgBAAIAAAAIgBABIAAAAIgEACIgtASIAAABIAAAAIgyAXIgEADIgBAAIgBABIAAAAIgBABIgIADIgRAKIgBABIAAAAIgBACIgCAAIgUAOIgBAAIgBABIgFAGIgGADIgHAHIgBACIgJAJIgFAJIgCABIgEALIAAABIgDAGIACACIAFAFIACAEIABABIACACIAAABIABABIAAABIAAABIABACIABACIAAABIAAABIAAACIAAABIgBACIAAAAIAAAAIgBAAIAAABIgBAAIAAAAg");
	this.shape_16.setTransform(-2,-76.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AGkGuIgBgBIgCAAIgGgBIgBAAIAAgBIgBAAIgEgCIgCgCIgBgBIgBgBIgBgBIgBgCIgGgLIAAgKIABgDIAAgCIABgEIAAgCIABgBIACgGIAJgRIAMgSIAJgKIACgCIAWgWIgFgHIgdgiIgDgBIgDgEIgegZIAAAAIgCgBIgFgEQgSgOgSgLIgYgOIgBgBIAAAAIg+gjIAAAAIgBgBIgCgBIgDgCIg4gcIgBgCIgWgiIgBgEIgNgVIAAgBIAAAAIgIgRIgVgxIAAgBIAAAAIgBgCIgHgdQgHgbgDgWIAAgGIgBgCIAAgCIAAgDIgBgtIABgCIAAgBIAAgDIAAgEIAIgrIAAgCIAAgBIAUg3IABAAIAAgCIAigzIACgDIA4g1IA8gjIACgBIADgBIAMgFIBEgUIABAAIABAAIAsgGIACAAIAJgBIBQAFIACAAIAAABIACAAIAFABIAhAIIACAAIABABIACAAIA4AYIAKAFIACABIACABIAzAmIApAvIAbAyIABABIAAABIAAABIAPAuIABADIAAABIAAAAIAAACIAGAsIAAADIABABIgBAzIgOBUIAAABIAAABIgBAAIgWBDIAAABIgBABIAAAAIgcA/IgCACIg2AlIgCABIgCACIg5AnIgBAAIAAAAIgBABIgCABIg+AtIgCACIgDACIgdAXIgBABIgfAdIAAAAIAHALIABACIABACIAHARIAEANIAAACIABAGIAAADIABAEIgBAKIgBAGIAAABIgBABIAAADIgIAQIgCACIgCACIgEAFIgBAAIgDACIgCACIgBACIgCABIgCABIAAABIgBAAIgDABIgCAAIgEACIgBAAIgBABIAAAAIgCAAIgFAAIgBABgAmnGuIgBgBIgEAAIgDAAIgBAAIAAgBIgBAAIgEgCIgCAAIgDgBIgBAAIAAgBIgBgBIgCgBIgDgCIgCgCIgBgCIgBAAIgGgFIgBgCIgCgCIgIgQIAAgDIAAgBIgBgBIgBgGIAAgKIAAgEIAAgDIABgGIAAgCIADgNIAIgRIABgCIABgCIAHgLIAAAAIgfgdIgCgBIgdgXIgCgCIgCgCIg9gtIgCgBIgBgBIgBAAIgBAAIg5gnIgBgCIgCgBIg3glIgCgCIgdg/IAAAAIAAgBIAAgBIgWhDIAAAAIAAgBIgBgBIgOhUIgBgzIABgBIAAgDIAGgsIAAgCIABAAIAAgBIABgDIANguIABgBIAAgBIABgBIAbgyIApgvIAwgkIAEgCIABgBIABgBIAEgCIBAgbIACAAIAAgBIACAAIAhgIIAEgBIADAAIABgBIABAAIBRgFIAJABIABAAIADAAIApAGIABAAIABAAIBEAUIAMAFIACABIACABIA8AjIAIAFIA0AzIAgAzIABACIAAAAIAVA3IAAABIABACIAHArIAAAEIABADIAAABIAAACIAAAtIgBADIAAACIAAACIgCAGQgDAWgGAbIgHAdIgBACIAAAAIgBABIgcBCIAAAAIgBABIgLAVIgCAEIgWAiIgCACIg9AfIAAABIgBAAIg9AjIgBAAIgBABIgCABIgVANQgSALgSAOIgFAEIgBABIgBAAIgjAeIgWAXIgNASIAXAWIABACIAJAKIAUAhIADAIIAAABIABACIABAEIAAACIABADIAAAKIgGALIgBACIgBABIAAABIgBABIgEACIgCACIgBAAIgBABIAAAAIgHABIgBAAIgCABg");
	this.shape_17.setTransform(-2,-76.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AGQIHIAAAAIAAAAIgBAAIgCgBIgLgFIAAAAIAAgBIgBAAIgDgDIgBgCIgDgDIgFgGIgBgBIAAgCIgCgCIgBgBIAAAAIgBgBIAAgCIgBgEIgBgHIAAgDIAAgDIAAgJIABgHIAAgCIAGgUIABgCIAEgKIAPgYIAAgBIABgBIAIgLIASgXIAeggIACgDIACgBIADgEIgEgGIgDgCIgBgCIgjgjIgDgCIAAgBIgCgBIgFgFQgUgSgVgPIgbgTIgCgBIAAAAIAAAAIgBgBIhBgqIgEgCIgBgBIgBAAIAAgBIhIgpIgBgCIgvhGIAAAAIgBgBIglhNIAAAAIAAAAIgMgkQgJgegFgbIgCgJIAAgBIgBgBIAAgEIgBgHIgDg1IABgEIAAgDIAGgvIAAgCIAAgBIAAgBIAUg+IABgCIAAgCIAng/IA3g4IACgBIBJguIBcgfIADgBIACAAIABAAIAugHIACAAIACAAIABAAIALgBIBbAGIABAAIABAAIAtALIABAAIAEACIAeAMIARAIIAfAPIA2AqIADADIACABIAAABIABAAIAQATIAcAlIAaA4IAAABIABABIALAvIABAHIABADIAAACIABACIAEAzIgDA5IgBADIAAABIgBABIAAACIgVBfIgBAEIAAABIgBABIgfBOIAAABIAAAAIgmBLIgCACIhBAxIgBABIgCABIhBAyIgBABIAAAAIAAAAIgBABIgDACIhBA2IgEAFIgCABIghAeIARAXIABABIAAABIARAeIADAIIAAAAIAAABIABABIAEANIAEAYIAAACIAAACIAAAEIAAAEIgBAJIAAACIgDAPIAAABIAAAAIgBABIAAACIgRAbIgDADIgLAIIgBABIgHAEIgDADIgEADIgCAAIAAAAIgBABIgPAEIgBABIgBAAIgDAAIgOABgAmsIJIgEAAIgBAAIgBgBIgQgEIAAgBIgBAAIgBAAIgFgDIgDgDIgGgEIgCgBIgKgIIgDgDIgNgUIgDgGIAAgBIgBgCIAAgBIAAAAIgBgBIgDgPIAAgCIgBgJIAAgEIgBgEIAAgCIABgCIABgKIAHgbIAAgBIAAgBIABAAIADgIIAQgeIACgBIAAgBIARgXIgegbIgCgCIgBgBIgBgBIgGgFIhAg2IgCgCIgBgBIgBAAIAAAAIgBgBIhCgyIgBgBIAAgBIhCgxIgCgCIglhHIgBgEIAAAAIgBgBIgehOIAAgBIAAgBIgCgEIgWhfIAAgCIAAgBIAAgBIgBgDIgCg5IADgzIAAgCIAAgCIABgDIABgHIANgvIAAgBIAAgBIAbg4IArg4IABAAIABgBIABgBIADgDIA1gqIAggPIARgIIAfgMIACgCIACAAIAtgLIABAAIACAAIBbgGIAKABIABAAIABAAIADAAIAvAHIABAAIABAAIACABIBUAbIAKAEIBCApIAHAFIACABIAUAUIAEADIADADIAbAeIAmA/IABACIABACIAUA+IAAABIABABIAAACIAFA2IgCA1IgBAHIAAAEIAAABIAAABIgCAJQgHAbgIAeIgLAkIgBAAIAAAAIglBNIgCABIAAAAIguBGIgCACIhHApIgBABIAAAAIgBABIhGAsIAAABIgBAAIAAAAIgBABIgbATQgVAPgUASIgFAFIgBABIgBABIgDACIgjAjIgCACIgCACIgEAGIAEAEIABABIACADIAYAZIAEAFIACACIACACIADAEIAOARIAHALIABABIABABIANAYIAFAKIABACIAGAUIAAACIACAHIAAAJIgBADIAAADIgBAHIgCAEIAAACIAAABIgBAAIAAABIgCACIAAACIgBABIgFAGIgDADIgBACIgDADIgBAAIAAABIgBAAIgKAFIgCABIAAAAIAAAAIgBAAIgQADg");
	this.shape_18.setTransform(-2,-76.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("AGJJJIgBgBIAAAAIgBAAIgQgHIgBgBIgCgBIgDgDIgBgBIgCgBIgJgLIgBgBIgDgEIgBgBIgBgCIgBgBIgBgCIgDgPIgCgKIABgNIAAgCIAAgCIAFgXIABgCIAEgKIAOgdIAAgBIAAAAIACgDIAZglIABgBIAGgHIAZgeIADgEIABgBIAcgdIgcgdIgBgBIgHgHQgVgUgXgTIgfgXIAAAAIgBAAIAAgBIgMgJIgXgQIgpgbIgCgBIgBgBIgCgCIhNguIgBgCIg2hNIgBAAIgthWIAAAAIAAgBIgOgmQgKgfgIggIgDgLIAAgBIAAgBIgGg9IAAgFIAEg/IAAgDIABgBIAAgBIAUhEIABgCIABgCIAnhGIA7g+IABAAIABgBIApgcIAmgXIADgBIBighIADgBIABAAIABAAIA1gIIA7gBIA2AGIACABIABAAIAwAMIBYAoIBAAzIABABIAMAOIACAEIAcAlIAEAHQAEAGADAJIATAtIABACIABAAIAAABIANA/IAAACIAAACIACBAIgGA7IAAACIgdBuIgBACIAAABIAAAAIglBXIgBACIAAAAIgsBSIgCACIhIA5IgBABIAAAAIgBABIhIA7IgBAAIAAABIAAAAIhKBBIgFAGIgCABIAAABIgCABIgJAJIAoA2IABACIAHANIAMAfIAAAAIAAABIABABIAHArIAAADIgBACIAAAFIgGAeIgCAFIAAABIAAAAIgYAjIgBABIgBABIgBABIgiAWIgBAAIgBABIAAAAIgFABIgCABIgMADIgBAAIgBABIgXABgAmxJLIgBAAIAAgBIgBAAIgOgDIgCgBIgEgBIAAAAIgBgBIgHgEIgcgSIgCgBIgBgBIgBgBIgWgjIgBAAIAAgBIgCgFIgGgeIAAgFIAAgCIAAgDIAGgrIAAgBIAAgBIABAAIADgJIARgjIAAgCIAog2IgKgJIgBgBIAAgBIgBgBIhQhHIAAAAIAAgBIgBAAIhHg7IgBgBIgBAAIgBgBIhIg5IgCgCIgshSIgBAAIgBgCIgkhXIgBAAIAAgBIAAgCIgdhuIAAgCIgHg7IAChAIABgCIAAgCIANg/IAAgBIABAAIAAgCIATgtQAEgJAEgGIAtg+IA8gwIAIgGIBVgmIAxgMIACAAIABgBIBBgGIAvABIA2AIIABAAIACAAIADABIBiAhIACABIAlAXIAqAcIABABIABAAIA7A+IAnBGIABACIABACIAUBEIAAABIAAABIAAADIAFA/IAAAFIgGA9IAAABIgBABIgCALQgIAggKAfIgOAmIAAABIgBAAIgtBWIAAAAIgCAEIg0BJIgCACIhMAuIgDACIgBABIgBABIgoAbIgYAQIgLAJIgBABIgBAAIAAAAIgEADIgbAUQgXATgWAUIgHAHIgBABIgbAdIAbAdIABABIAeAiIAEAHIABABIAaAlIABADIABAAIAAABIAIAOIAKAZIABACIAFAXIAAACIABAHIAAAIIgBAKIgFAPIgBACIAAABIgBACIgBABIgCAEIgCABIgJALIgCABIgBABIgDADIgBABIgCABIgPAHIgBAAIgBAAIAAABIgVADg");
	this.shape_19.setTransform(-2,-76.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("AGbJzIgXgEIgBAAIAAAAIgBgBIgCAAIgQgHIAAAAIgBAAIgCgDIgEgCIgOgOIgBgCIgBgBIgDgDIgBgBIAAgBIgCgFIgBgEIgEgIIgDgRIAAgMIAAgCIAAgCIAGgcIARgpIABgBIAAgBIAAAAIACgDIAYgmIACgDIABgBIBKhXIABAAIAAgBIACgCIAAAAIgPgRIgBgBIgIgIQgdgbgSgPIhzhUIgBgBIhUg1IgBgBIg6hRIAAAAIgyhbIgBgBIAAAAIgBgCIgBgDIgNgkQgJgZgMgpIgCgLIAAgBIAAgBIgBgEIgHg9IADhLIABgBIAAgBIAUhIIAAgBIABAAIAAgBIABgCIAlhFIAlgrIAEgEIAYgYIAAAAIABgBIADgBIAEgEIAkgYIAogYIADgCIBrgkIABAAIA3gIIBJAAIAtAGIACAAIACAAIAyANIBIAfIARAKIADABIBDA3IAAAAIABAAIAtA+IABADIAbA/IAAACIABABIAAABIAAAAIANBDIAAABIABABIABBFIgIA7IAAAEIAAACIgiB1IAAABIAAAAIgoBcIgBACIAAAAIgxBYIgCABIhMA+IgBABIgCABIhLBBIgBAAIAAAAIgBABIhSBMIAcAhIACADIAXAkIAAABIABABIACADIANAeIAFAPIAAABIABAAIAAABIAAABIAFAyIgDASIgHAbIgBABIAAAAIAAABIgCADIgLARIgOARIgCACIgbATIgKAFIgCABIgCABIAAAAIgBAAIgVAGIgCAAIgBAAIgFABIgKAAIgCABgAmgJzIgDgBIgKAAIgFgBIgBAAIgYgGIAAAAIgBAAIgBgBIgCgBIgJgFIgcgTIgDgCIgNgRIgLgRIgCgDIgBgBIAAAAIAAgBIgFgQIgGgdIAGgyIABgBIAAgBIAAAAIAAgBIASgtIACgDIAAgBIABgBIAXgkIACgDIACgDIAageIhThNIAAAAIAAAAIhNhBIgBgBIgBgBIhMg+IgCgBIgxhYIAAAAIAAgCIgphcIAAAAIgBgBIggh1IAAgCIgBgEIgHg7IABhFIAAgBIAAgBIAMhDIABAAIAAgBIAAgBIABgCIAag/IAwhBIAAAAIAAAAIBDg3IACgBIAFgDIBVgmIAygNIACAAIABAAIAXgDIBfgDIA4AIIACAAIBrAkIACACIAnAYIAlAYIAEAEIACABIABABIABAAIBABHIAnBFIAAACIABABIAAAAIAAABIAUBIIAAABIAAABIAFBLIgHA9IgBAEIAAABIgBABIgDALQgLApgJAZIgNAkIgCADIgBACIAAAAIAAABIgxBbIgBAAIg6BRIgCABIhTA1IgBABIhzBUQgTAPgcAbIgIAIIAAABIgQARIAAAAIABACIABABIABAAIA0A5IAXAeIABABIABADIAZAmIABADIABAAIAAABIAAABIASApIAEAcIAAACIABACIAAAMIgBACIgBAHIgFAUIgDAFIgBABIgBABIgCADIgBABIgBACIgPAOIgDACIgDADIAAAAIgBAAIgPAHIgCAAIgBABIgBAAIAAAAIgWAEg");
	this.shape_20.setTransform(-2,-76.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("AgiJ/IgEgBIgEgBIAAAAIAAAAIgBAAIgJgEIgGgEIgBAAIgBgBIgBgBIgCgCIgEgCIgEgFIgGgJIgBgDIgBgCIAAAAIgBgBIgBgEIgDgQIAAgMIAAgBIAAgBIABgFIACgHIAHgYIAMgZIAMgTIAAgBIAigrIAAgBIABAAIABgCIAFgGIAlgnIgLgOIgvguIgCgCIgGgGQgZgWgZgSIgfgVIgDgCIgBgBIAAgBIgBAAIgBAAIhVg3IgBgBIgBAAIAAgBIgDgBIgHgEIhPgtIgBgCIg4hVIgBgBIAAAAIgBgCIgvheIAAAAIAAgBIgOgrQgKghgIglIgCgMIgGhQIAJhGIAAgBIAAgBIABgEIAXhIIABgBIAAAAIAAgCIACgCIArhJIBIhKIAwggQATgMAYgNIAFgDIA1gVIA5gPIADgBIABAAIABAAIA9gIIABAAIACgBIAsgBIBEAGIAMACIACAAIACAAIADABIA0AMIACABIAAAAIA0AUIAsAXIADABIABACIAzAmIAPANIAFADIADADIAzBBIAkBKIAAAAIAAABIARBGIAAABIABABIAAADIAEBDIgEBGIAAACIgdB8IAAABIAAABIgnBiIAAAAIgvBcIgBACIhRA8IgBABIhSA/IgBABIgBAAIgFADIhPBCIgGAGIgCACIgBAAIgBABIgnAlIAUAcIABABIACADIARAfIABADIAEAGIABADIAAABIAAABIAAABIAGAQIAFAgIAAADIgFApIAAABIAAAAIAAABIgGALIgQAaIgOANIgEADIgTAKIAAABIgBAAIgHACIgBABIgLADIgBAAIAAAAIgWACg");
	this.shape_21.setTransform(-45.4678,-76.4273,0.8098,0.808,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("AgiJ/IgEgBIgEgBIAAAAIAAAAIgBAAIgJgEIgGgEIgBAAIgBgBIgBgBIgCgCIgEgCIgEgFIgGgJIgBgDIgBgCIAAAAIgBgBIgBgEIgDgQIAAgMIAAgBIAAgBIABgFIACgHIAHgYIAMgZIAMgTIAAgBIAigrIAAgBIABAAIABgCIAFgGIAlgnIgLgOIgvguIgCgCIgGgGQgZgWgZgSIgfgVIgDgCIgBgBIAAgBIgBAAIgBAAIhVg3IgBgBIgBAAIAAgBIgDgBIgHgEIhPgtIgBgCIg4hVIgBgBIAAAAIgBgCIgvheIAAAAIAAgBIgOgrQgKghgIglIgCgMIgGhQIAJhGIAAgBIAAgBIABgEIAXhIIABgBIAAAAIAAgCIACgCIArhJIBIhKIAwggQATgMAYgNIAFgDIA1gVIA5gPIADgBIABAAIABAAIA9gIIABAAIACgBIAsgBIBEAGIAMACIACAAIACAAIADABIA0AMIACABIAAAAIA0AUIAsAXIADABIABACIAzAmIAPANIAFADIADADIAzBBIAkBKIAAAAIAAABIARBGIAAABIABABIAAADIAEBDIgEBGIAAACIgdB8IAAABIAAABIgnBiIAAAAIgvBcIgBACIhRA8IgBABIhSA/IgBABIgBAAIgFADIhPBCIgGAGIgCACIgBAAIgBABIgnAlIAUAcIABABIACADIARAfIABADIAEAGIABADIAAABIAAABIAAABIAGAQIAFAgIAAADIgFApIAAABIAAAAIAAABIgGALIgQAaIgOANIgEADIgTAKIAAABIgBAAIgHACIgBABIgLADIgBAAIAAAAIgWACg");
	this.shape_22.setTransform(41.4678,-76.4273,0.8098,0.808);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(-81.7,-128.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-81.7,-128.2,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(-81.7,-128.2,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(-81.7,-128.2,0.5,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663300").s().p("AGuDZIgBgBIgBAAIAAAAIgBgBIAAAAIgBAAIgCgCIgBgBIgBgBIAAAAIgCgCIAAAAIgGgGIgBAAIgBgBIgBgBIAAAAIgBgBIgBgBIgDgCIgCgCIgBgBIgCgBIgIgFIgNgGIgBgBIAAAAIgBgBIgFgCIgDgBIgKgEIgBAAIAAgBIgUgHIgBAAIgBgBIgBAAIgXgHIAAAAIgBAAIgDgBIgkgKIgEAAIgBgBIgBAAIgHgCIgfgHIgBAAIAAAAIgCgBIgkgIIgBgCIgLghIAAgCIAAgCIgBAAIAAgBIgGgpIAAgUIACgdIADgQIAEgVIAAgBIABgBIAAgCIAMgdIABgCIABgCIAMgUIADgEIAEgIIAfgiIAKgIIAjgZIADgBIAEgDIAhgQIABgBIBBgQIAEAAIAPgCIAEAAIADgBIA4ADIAYAEIBAAWIABABIAGACIAEADIAFADIAWAOIAIAGIAaAXIACACIACABIAXAeIACABIASAgIAAABIACAEIAJAXIABACIAAABIABABIAIAiIAEAqIgCAvIAAABIAAACIgHAkIgCACIgiANIgBAAIgBAAIAAABIgKACQgEACgGACIgTAHIgCAAIgqAOIgBAAIgBAAIgXAHIgBABIgBAAIguAPIgBAAIgBAAIgFACIgCAAIgPAGIgCAAIgJADIgEACIgCABIgBAAIgBAAIgFACIgCABIgBABIgCAAIgBABIgCABIgBAAIAAAAIgBAAIgBABIgCAAIgHADIgDABIgBAAIAAABgAmyDZIAAgBIAAAAIgEgBIgGgDIgDAAIgCgBIAAAAIgBAAIAAAAIgCgBIgBgBIgBAAIgCgBIgCgBIgFgCIgBAAIgBAAIgCgBIgEgCIgIgDIgDAAIgCgBIgNgFIgCAAIgFgCIgBAAIgBAAIgmgNIgHgCIgBAAIgBAAIAAgBIgYgHIgBAAIAAAAIgEgCIgogMIgBAAIgSgHQgIgCgDgCIgJgCIgBgBIgBAAIgjgNIgCgCIgHgkIAAgCIAAgBIgDgvIAFgqIAJgiIAAgBIAAgBIABgCIAJgXIACgEIAAgBIASggIABgBIAYgeIABgBIACgCIAfgaIAagRIAFgDIAFgDIAEgCIACgBIAvgSIARgEIAxgHIAfAAIAEABIACAAIAQACIADAAIAHABIA6APIACABIAmATIACABIACABIArAgIAeAiIAFAIIADAEIAMAUIABACIABACIALAdIABACIAAABIAAABIAGAVIACAQIACAdIAAAUIgGApIAAABIAAAAIAAACIgMAjIgCACIgkAIIgBABIAAAAIAAAAIgmAJIgCAAIgCABIgIABIgiAKIgBAAIgBAAIgWAHIAAAAIgBABIgBAAIgVAHIgBABIgBAAIgKAEIgCABIgFACIgBABIgBAAIAAABIgMAGIgJAFIgCABIgCABIgBACIgCACIgCABIgBABIAAAAIgCABIgBABIgBAAIgEAGIgBAAIgCACIgBAAIgBABIAAABIgCACIAAAAIgBAAIgBABIAAAAIgBAAIgBABg");
	this.shape_23.setTransform(-2,-76.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},9).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},9).wait(1));

	// Man
	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(-250.05,-250.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-250,500,550);


(lib.Beans = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"rest":0,"hold":33};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_33 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(35));

	// Beans09
	this.instance = new lib.Beans09("synched",0);
	this.instance.setTransform(-15.9,150.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({startPosition:0},0).to({y:71.45},16,cjs.Ease.bounceIn).wait(13).to({startPosition:0},0).to({y:150.15},16,cjs.Ease.bounceOut).wait(11).to({startPosition:0},0).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	// Beans08
	this.instance_1 = new lib.Beans08("synched",0);
	this.instance_1.setTransform(-21.3,-128.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({startPosition:0},0).to({y:-83.3},21,cjs.Ease.bounceIn).wait(21).to({startPosition:0},0).to({y:-128.25},21,cjs.Ease.bounceOut).wait(2).to({startPosition:0},0).wait(1));
	this.instance_1.addEventListener("tick", AdobeAn.handleFilterCache);

	// Beans07
	this.instance_2 = new lib.Beans07("synched",0);
	this.instance_2.setTransform(88.2,-94.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({startPosition:0},0).to({x:42.75,y:-65.45},18,cjs.Ease.bounceIn).wait(13).to({startPosition:0},0).to({x:88.2,y:-94.7},18,cjs.Ease.bounceOut).wait(9).to({startPosition:0},0).wait(1));
	this.instance_2.addEventListener("tick", AdobeAn.handleFilterCache);

	// Beans06
	this.instance_3 = new lib.Beans06("synched",0);
	this.instance_3.setTransform(-134.15,-16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({startPosition:0},0).to({x:-66.7,y:-9.4},19,cjs.Ease.bounceIn).wait(3).to({startPosition:0},0).to({x:-134.15,y:-16.7},19,cjs.Ease.bounceOut).wait(13).to({startPosition:0},0).wait(1));
	this.instance_3.addEventListener("tick", AdobeAn.handleFilterCache);

	// Beans05
	this.instance_4 = new lib.Beans05("synched",0);
	this.instance_4.setTransform(-124.4,-100.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({startPosition:0},0).to({x:-85.7,y:-56.15},21,cjs.Ease.bounceIn).wait(21).to({startPosition:0},0).to({x:-124.4,y:-100.2},21,cjs.Ease.bounceOut).wait(2).to({startPosition:0},0).wait(1));
	this.instance_4.addEventListener("tick", AdobeAn.handleFilterCache);

	// Beans04
	this.instance_5 = new lib.Beans04("synched",0);
	this.instance_5.setTransform(-111.1,110.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({startPosition:0},0).to({x:-89.75,y:54.1},18,cjs.Ease.bounceIn).wait(9).to({startPosition:0},0).to({x:-111.1,y:110.15},18,cjs.Ease.bounceOut).wait(11).to({startPosition:0},0).wait(1));
	this.instance_5.addEventListener("tick", AdobeAn.handleFilterCache);

	// Beans03
	this.instance_6 = new lib.Beans03("synched",0);
	this.instance_6.setTransform(-47.45,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0},0).to({x:-25.7,y:28.3},15,cjs.Ease.bounceIn).wait(35).to({startPosition:0},0).to({x:-47.45,y:44.8},15,cjs.Ease.bounceOut).wait(1).to({startPosition:0},0).wait(1));
	this.instance_6.addEventListener("tick", AdobeAn.handleFilterCache);

	// Beans02
	this.instance_7 = new lib.Beans02("synched",0);
	this.instance_7.setTransform(153.5,-49.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({startPosition:0},0).to({x:80.55,y:-27.2},29,cjs.Ease.bounceIn).wait(5).to({startPosition:0},0).to({x:153.5,y:-49.9},29,cjs.Ease.bounceOut).wait(2).to({startPosition:0},0).wait(1));
	this.instance_7.addEventListener("tick", AdobeAn.handleFilterCache);

	// Beans01
	this.instance_8 = new lib.Beans01("synched",0);
	this.instance_8.setTransform(96.1,98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({startPosition:0},0).to({x:59.85,y:56.55},18,cjs.Ease.bounceIn).wait(15).to({startPosition:0},0).to({x:96.1,y:98.6},18,cjs.Ease.bounceOut).wait(8).to({startPosition:0},0).wait(1));
	this.instance_8.addEventListener("tick", AdobeAn.handleFilterCache);

	// Singles
	this.instance_9 = new lib.Bean("synched",0);
	this.instance_9.setTransform(0.05,-19.7,0.4479,0.4474,71.5057,0,0,0.6,0.3);

	this.instance_10 = new lib.Bean("synched",0);
	this.instance_10.setTransform(27.2,5.65,0.4479,0.4473,101.5004,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{x:27.2,y:5.65,rotation:101.5004}},{t:this.instance_9,p:{regY:0.3,scaleY:0.4474,rotation:71.5057,x:0.05,y:-19.7}}]}).to({state:[{t:this.instance_10,p:{x:24.95,y:14.55,rotation:101.5004}},{t:this.instance_9,p:{regY:0.2,scaleY:0.4473,rotation:41.5056,x:-2.1,y:-19.75}}]},11).to({state:[{t:this.instance_10,p:{x:27.2,y:11.6,rotation:86.5012}},{t:this.instance_9,p:{regY:0.3,scaleY:0.4474,rotation:71.5057,x:-0.4,y:-32.6}}]},41).to({state:[{t:this.instance_10,p:{x:27.2,y:5.65,rotation:101.5004}},{t:this.instance_9,p:{regY:0.3,scaleY:0.4474,rotation:71.5057,x:0.05,y:-19.7}}]},6).wait(10));

	// Table
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#993803","#BA7C09"],[0.176,1],0,0,0,0,0,152.3).s().p("AwjQkQm4m3AAptQAApsG4m4QG3m3JsAAQJtAAG3G3QG4G4AAJsQAAJtm4G3Qm3G4ptAAQpsAAm3m4g");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA7C09").s().p("A7nboQrcrcAAwMQAAwLLcrcQLcrcQLAAQQMAALcLcQLcLcAAQLQAAQMrcLcQrcLcwMAAQwLAArcrcg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(68));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-250,500.1,500.1);


// stage content:
(lib.coffeeInfo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		
		stage.enableMouseOver(3);
		_this.Beans.on('rollover', function(){
			if (_this.Beans.currentFrame == 0) {		
				_this.Beans.play();
				_this.Cultivation.play();
			}
		});
		
		_this.Beans.on('rollout', function(){
			if (_this.Beans.currentFrame == 33) {		
				_this.Beans.play();
				_this.Cultivation.play();
			}
		});
		
		
		_this.FrenchPress.on('rollover', function(){
			if (_this.FrenchPress.currentFrame == 0) {		
				_this.FrenchPress.play();
				_this.Preparation.play();
			}
		});
		
		_this.FrenchPress.on('rollout', function(){
			if (_this.FrenchPress.currentFrame == 54) {		
				_this.FrenchPress.play();
				_this.Preparation.play();
			}
		});
		
		
		_this.CoffeeDrinker.on('rollover', function(){
			if (_this.CoffeeDrinker.currentFrame == 0) {		
				_this.CoffeeDrinker.play();
				_this.Consumption.play();
			}
		});
		
		_this.CoffeeDrinker.on('rollout', function(){
			if (_this.CoffeeDrinker.currentFrame == 31) {		
				_this.CoffeeDrinker.play();
				_this.Consumption.play();
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Information
	this.Consumption = new lib.Info_Consumption();
	this.Consumption.name = "Consumption";
	this.Consumption.setTransform(803,320,1,1,0,0,0,125,100);

	this.Preparation = new lib.Info_Preparation();
	this.Preparation.name = "Preparation";
	this.Preparation.setTransform(519,616,1,1,0,0,0,125,100);

	this.Cultivation = new lib.Info_Cultivation();
	this.Cultivation.name = "Cultivation";
	this.Cultivation.setTransform(233,320,1,1,0,0,0,125,100);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(43.95,15.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.Cultivation},{t:this.Preparation},{t:this.Consumption}]}).wait(1));

	// Interactive
	this.FrenchPress = new lib.FrenchPress();
	this.FrenchPress.name = "FrenchPress";
	this.FrenchPress.setTransform(518.05,385.95,0.64,0.64,0,0,0,0.1,17.1);

	this.CoffeeDrinker = new lib.CoffeeDrinker();
	this.CoffeeDrinker.name = "CoffeeDrinker";
	this.CoffeeDrinker.setTransform(800,607.5,0.5,0.5,0,0,0,0,25);

	this.Beans = new lib.Beans();
	this.Beans.name = "Beans";
	this.Beans.setTransform(230.1,595.05,0.5,0.5,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Beans},{t:this.CoffeeDrinker},{t:this.FrenchPress}]}).wait(1));

	// Background
	this.instance_1 = new lib.Background();
	this.instance_1.setTransform(518,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(518,400,518,400);
// library properties:
lib.properties = {
	id: '5F7525249A821B4587BE9B86C0CC6BEE',
	width: 1036,
	height: 800,
	fps: 24,
	color: "#BA7C09",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
		{src:"images/coffeeInfo_atlas_1.png", id:"coffeeInfo_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5F7525249A821B4587BE9B86C0CC6BEE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;