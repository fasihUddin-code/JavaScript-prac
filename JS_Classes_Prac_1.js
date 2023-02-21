class Car{
    constructor(givenName , givenYear){
        this.name = givenName;
        this.year = givenYear;
    }
    age(x){
        return x - this.year;
    }
}

let myCar = new Car("Suzuki", 2014);
let date = new Date();
let  currentYear = date.getFullYear();
//document.getElementById('demo').innerHTML = myCar.name + " " +myCar.year;
document.getElementById('demo').innerHTML = 'My Car is ' + myCar.age(currentYear) + ' years old';