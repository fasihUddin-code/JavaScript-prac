console.log("This is Tutorial # 28");

// Object literal : Object.prototype

let obj = {
    name: "Fasih",
    channel: "Tutor Time Academy",
    address: "Karachi"
};

function Obj(givenName){
    this.name = givenName;
}

Obj.prototype.getName =function(){
    return this.name;
}

Obj.prototype.setName =function(newName){
    this.name = newName;
}

let obj1= new Obj("Zaki");
console.log(obj1);