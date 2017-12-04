var HoneyMakerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};


HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
	honeyPot ++;
}
HoneyMakerBee.prototype.giveHoney = function() {
	honeyPot --;
}