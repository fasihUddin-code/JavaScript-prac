console.log("This is tutorial # 30");

const proto = {
    slogan : function(){
        return `This is the best company`
    },

    changeName : function(newName){
        this.name = newName;
    }
};
//console.log(proto);

//This create empInfo Object
//const empInfo = Object.create(proto);
//console.log(empInfo);
/*
empInfo.role = 'Programmer';
empInfo.changeName('hussain');
console.log(empInfo);
empInfo.name = 'Fasih';
*/

//This also create empInfo Object
const empInfo = Object.create(proto,{
    name: {value : 'Hassan' ,writable: true},
    role: {value : 'Accountant'}

});
empInfo.changeName('owais');
//console.log(empInfo);

//Employee Constructor

function Employee(name,salary,exp){
    this.name = name ;
    this.salary = salary;
    this.exp = exp;
}

//slogan prototype
Employee.prototype.sloganEmp = function(){

    return `This compnay is the best. Regards, ${this.name}`;
};

//create an object from this constructor now
let empObj = new Employee('Nadeem',25000, 5);
//console.log(empObj);
//console.log(empObj.sloganEmp());

//Programmer

function Programmer(name,salary,exp,language){
    Employee.call(this, name, salary, exp, language);
    this.language - language;
}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor = Programmer;

let programmerObj = new Programmer('ubaid',36000,4,'Javascript');
console.log(programmerObj);