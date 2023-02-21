const myGreet = function (name,thank="Thanks A Lot" ) {
    let msg = ` Happy Birthday ${name} , ${thank} `;
    return msg;
};

let Name = " Fasih uddin " ;
let val = myGreet(Name);
//console.log(val);

let myObj = {
    name: "Zaka",
    game : function(){
        return "GTA";
    }
};

//console.log(myObj.game());

let courseArr = ["WMD" , "IOT" , "BCC" , "AI"];

courseArr.forEach(function(element , index , array){
    console.log(element,index);

});