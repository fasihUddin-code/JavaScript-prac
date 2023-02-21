//flour constructor

function Flour(egg,backingSoda,sugar){
    this.egg = egg;
    this.backingSoda = backingSoda;
    this.sugar = sugar;
}


//Create prototype in Flour constructor
//Slogan
Flour.prototype.slogan = function(){
    return 'This cake is the best';
};

//Create an object from this constructor now
let make = new Flour(4,400,5);
//console.log(make);
//console.log(make.slogan());

//Cake 
function Cake( egg , backingSoda , sugar , milk , oven){
    Flour.call(this,egg,backingSoda,sugar);
    this.milk = milk;
    this.oven = oven;
}


//Inherit the prototype
Cake.prototype = Object.create(Flour.prototype);

//Manually set the constructor
Cake.prototype.constructor = Cake;

let cakeObj = new Cake(4,400,4,5,26);
console.log(cakeObj);
console.log(cakeObj.slogan());