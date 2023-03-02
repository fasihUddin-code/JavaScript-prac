console.log("CallBack functions");

//Pretend that this response is coming from the server
const students = [
    {name : 'Fasih' , subject : 'Physics'},
    {name : 'Nasir' , subject : 'Chemistry'}
];

function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log('Student has been enrolled');
        callback();
    }, 8000);

}

function getStudents(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str += `<li>${student.name} </li>`;

        });
        document.getElementById('student').innerHTML = str;
        console.log('Student have been fetched');

    }, 3000);

}

let newStudent = {name:'Junaid', subject:'Machine learning'};

// console.log(newStudent);
enrollStudent(newStudent , getStudents);
//getStudents();