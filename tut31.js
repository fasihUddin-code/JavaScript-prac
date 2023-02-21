console.log("This is Tutorial # 31")

//create class with constructor
class Employee{
    constructor(givenName , givenExperience , givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} , this company is the best`;
    }

    joiningYear(){
            return 2020 - this.experience;
    }

    //create Static function inside a class
    static func( a , b){
        return a + b;
    }

}

let empObj = new Employee('zubair' , 4 , 'Accounts');
//console.log(empObj);
//console.log(empObj.joiningYear());
//empObj.slogan();
//console.log(Employee.func(2,3));

class Programmer extends Employee{
    constructor(givenName , givenExperience , givenDivision , language , github){
        super(givenName , givenExperience , givenDivision);
        this.language = language; 
        this.github = github;
    }

    favouriteLanguage(){
        if(this.language == 'Phython'){
            return 'Phython';
        }
        else{
            return 'JavaScript';
        }

    }

    static Multiply( a , b ){
        return a * b;
    }
}
programmerOBj = new Programmer('Zaka', 6 , 'Making' , 'React' , 'Zaka004' )
console.log(programmerOBj);
console.log(programmerOBj.favouriteLanguage());
console.log(Programmer.Multiply(2 , 5 ));

