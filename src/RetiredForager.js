var RetiredForagerBee = function() {
	ForagerBee.call(this);
	this.age = 40;
	this.job = 'gamble';
	this.canFly = false;
	this.color = grey;

};

RetiredForagerBee.prototype = Object.create(Bee.prototype);
RetiredForagerBee.constructor = RetiredForagerBee;

ForagerBee.prototype.forage = function (treasure) {
	return 'I am too old, let me play cards instead';
};
ForagerBee.prototype.gamble = function (treasure) {
	this.treasureChest.push(treasure); 
};