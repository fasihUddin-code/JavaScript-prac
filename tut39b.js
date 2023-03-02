//Pretend that this response is coming from the server
const students = [
    {name : 'Fasih' , subject : 'Physics'},
    {name : 'Nasir' , subject : 'Chemistry'}
];

function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log('Student has been enrolled');
        const error = false
        if(!error){
            resolve();
        }
        else{
            reject();
        }

        }, 1000);
        
    })

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
enrollStudent(newStudent).then(
getStudents).catch(function(){console.log('some error occured');});

//Key points
//function inside then() is ran as - resolve()
//function inside catch() is ran as - reject()
