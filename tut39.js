//Promises

function func1(){
    return new Promise(function (resolve,reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log('Function : Your promise has been resolved');
                resolve()
            }
            else{
                console.log('Function : Your promise has not been resolved')
                reject('Sorry not fullfilled');
            }
        }, 2000);

    });

}

func1().then(function(){
    console.log(' Fasih : Thanks for resolving');
}).catch(function(error){
    console.log(' Fasih : Very bad bro! ' + error);
})