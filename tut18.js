console.log("This is tutorial no#18");

//let btn = document.getElementById('btn');
//btn.addEventListener('click',func1);
//btn.addEventListener('dblclick',func2);
//btn.addEventListener('mousedown',func3);


//function func1(e){
    //console.log("Thanks you",e)
    //e.preventDefault();  

//}

//function func2(e){
    //console.log("Thanks you it's a double click",e)
    //e.preventDefault();  

//}

//function func3(e){
    //console.log("Thanks you it's a mouse down",e)
    //e.preventDefault();  

//}

// document.querySelector('.no').addEventListener('mouseenter',function(){

//     console.log('you entered no class area');
// });

// document.querySelector('.no').addEventListener('mouseleave',function(){

//     console.log('you exited no class area');
// });
// document.querySelector('.no').addEventListener('mouseleave',function(){

//     console.log('you exited no class area');
// });

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(
    ${e.offsetX},55,${e.offsetY}    
    )`;

    console.log('you triggered mouse move event');
});