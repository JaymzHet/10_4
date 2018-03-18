function Phone(brand, price, color, memory, size, weight, camera) {
	this.brand 	= brand;
	this.price 	= price;
	this.color 	= color;
	this.memory = memory;
	this.size	= size;
	this.weight	= weight;
	this.camera	= camera;	
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', memory is ' + this.memory + ', size is ' + this.size + ', weight is  ' +  this.weight + ', camera is ' + this.camera + ' and the price is ' + this.price + '.');
}

var GalaxyS6 	= new Phone('Samsung', 1500, 'black', '3GB', 4.5, '200g', '23px');
var iPhone6S 	= new Phone('Apple', 2500, 'silver', '6GB', 4.7, '180g', '25px');
var OnePlus 	= new Phone('OnePlus', 1300, 'blue', '2GB', 4.3, '182', '13px');

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlus.printInfo();