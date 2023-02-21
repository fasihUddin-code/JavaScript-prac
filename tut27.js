console.log("This is Tutorial # 27");


//Object literal for creating objects
let car ={
    name: "Suzuki Alto",
    topSpeed: 87,
    run :function(){
        console.log("car is running");
    }
}

//console.log(car.name);
//console.log(car.topSpeed);
//console.log(car.run());

//We have already seen constructors like these:
//new Date();

//Creating a constructor for cars
function GeneralCar(givenName , givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.topSpeed } km/h than Mercedes`)
    }

}

car1 = new GeneralCar('Nissan',185);
car2 = new GeneralCar('Marutu Alto',85);
car3 = new GeneralCar('Mercedes',200);


console.log(car1, car2, car3);