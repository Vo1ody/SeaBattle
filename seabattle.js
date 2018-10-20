(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"seabattle_atlas_", frames: [[2543,2402,645,645],[1631,1961,300,300],[1261,1961,368,322],[2543,3049,420,597],[1261,1239,911,720],[0,2541,911,720],[0,0,2400,1237],[1261,2402,1280,800],[2402,0,725,2400],[0,1239,1259,1300]]}
];


// symbols:



(lib.aim = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.explosion = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fire = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mountain_1 = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mountain_2 = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.shipr = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sky = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.torpedo = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.waves = function() {
	this.spriteSheet = ss["seabattle_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.StartBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("START", "12px 'Bauhaus 93'", "#4F1719");
	this.text.textAlign = "center";
	this.text.lineHeight = 0;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(152,127);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:147.5,font:"40px 'Bauhaus 93'",lineHeight:47.3,lineWidth:121},0).wait(3));

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Mount_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mountain_2();
	this.instance.parent = this;
	this.instance.setTransform(-76,-77,0.165,0.208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mount_2, new cjs.Rectangle(-76,-77,150,150), null);


(lib.Mount_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mountain_1();
	this.instance.parent = this;
	this.instance.setTransform(-76,-76,0.165,0.208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mount_1, new cjs.Rectangle(-76,-76,150,150), null);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.waves();
	this.instance.parent = this;
	this.instance.setTransform(0,350,0.794,0.192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.sky();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.781,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,0,1000,600), null);


(lib.Aim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aim();
	this.instance.parent = this;
	this.instance.setTransform(-125,-125,0.388,0.388);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Aim, new cjs.Rectangle(-125,-125,250,250), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("GAME OVER", "75px 'Bauhaus 93'", "#4F1719");
	this.text.textAlign = "center";
	this.text.lineHeight = 87;
	this.text.lineWidth = 555;
	this.text.parent = this;
	this.text.setTransform(0,-42.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.5,-44.4,559,88.9);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("GET\nREADY", "75px 'Bauhaus 93'", "#4F1719");
	this.text.textAlign = "center";
	this.text.lineHeight = 87;
	this.text.lineWidth = 407;
	this.text.parent = this;
	this.text.setTransform(0,-85.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.5,-87.8,411,175.7);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.torpedo();
	this.instance.parent = this;
	this.instance.setTransform(-7.5,-20,0.021,0.017);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-20,15,40);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shipr();
	this.instance.parent = this;
	this.instance.setTransform(-35,-25,0.029,0.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-25,70,50);


(lib.Torpedo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{targeting:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		//this.stop();
		game.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Слой 1
	this.instance = new lib.torpedo();
	this.instance.parent = this;
	this.instance.setTransform(-7,0,0.021,0.017);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},7).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regY:-2,scaleY:0.03,y:0},7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,0,15,40);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		startGame();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(1));

	// Слой 3
	this.startBtn = new lib.StartBtn();
	this.startBtn.parent = this;
	this.startBtn.setTransform(700.1,150,0.033,0.033,0,0,0,1.5,-1.5);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.startBtn).to({regX:0,regY:0,scaleX:1,scaleY:1,x:600,y:25},4).to({regX:15.1,scaleX:0,scaleY:0,x:700.1,y:150},4).wait(1));

	// Слой 2
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(250,150,0.024,0.057,0,0,0,-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1,scaleY:1},4).to({regY:-8.8,scaleX:0,scaleY:0.01},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-100,1,1,0,0,0,0,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,600);


(lib.Ship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,idle2:20,explosion:40});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_39 = function() {
		this.gotoAndPlay("idle2");
	}
	this.frame_53 = function() {
		this.stop();
		game.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(14).call(this.frame_53).wait(1));

	// Слой 4
	this.instance = new lib.fire();
	this.instance.parent = this;
	this.instance.setTransform(12,-15,0.036,0.025);
	this.instance._off = true;

	this.instance_1 = new lib.explosion();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51,-66,0.272,0.311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},43).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).wait(1).to({scaleX:0.04,scaleY:0.03,y:-17},0).wait(1).to({scaleX:0.05,scaleY:0.03,y:-19},0).wait(1).to({scaleX:0.06,scaleY:0.04,x:8,y:-26},0).wait(1).to({scaleX:0.06,scaleY:0.05},0).wait(1).to({scaleX:0.07,scaleY:0.05,x:6,y:-30},0).wait(1).to({scaleX:0.08,scaleY:0.06,y:-34},0).wait(1).to({scaleX:0.09,scaleY:0.06,x:4},0).wait(1).to({scaleX:0.1,scaleY:0.07,y:-40},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.71,x:5},5,cjs.Ease.get(1)).to({scaleX:0.86},9).to({scaleX:1},5,cjs.Ease.get(-1)).wait(1).to({skewY:180},0).to({scaleX:0.71},5,cjs.Ease.get(1)).to({scaleX:0.86},9).to({scaleX:1},5,cjs.Ease.get(-1)).wait(1).to({skewY:0},0).to({startPosition:0},9).to({scaleX:0.01,scaleY:0.02},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-25,70,50);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		endGame();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// Слой 1
	this.instance = new lib.Анимация4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.036,1,0,0,0,-1.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1},39).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-44.4,20,88.9);


// stage content:
(lib.seabattle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gameover
	this.instance = new lib.GameOver();
	this.instance.parent = this;
	this.instance.setTransform(521.5,122.6,1,1,0,0,0,-5.4,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// aim
	this.instance_1 = new lib.Aim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(525,334,1,1,0,0,0,0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// torpedo
	this.instance_2 = new lib.Torpedo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(502.5,516,1,1,0,0,0,2.5,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ship
	this.instance_3 = new lib.Ship();
	this.instance_3.parent = this;
	this.instance_3.setTransform(184,290,1,1,0,0,0,5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// mountS
	this.instance_4 = new lib.Mount_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(74,303,1,1,0,0,0,-1,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// mountF
	this.instance_5 = new lib.Mount_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(924,304,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// background
	this.instance_6 = new lib.Background();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-100,1,1,0,0,0,0,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// start screen
	this.instance_7 = new lib.Title();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-7,11.1,1,1,0,0,0,-7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(499,300,1001,600);
// library properties:
lib.properties = {
	width: 1000,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/seabattle_atlas_.png?1487499135956", id:"seabattle_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;