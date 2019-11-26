

function getSpecificNumber(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(42),2000);
    });
}

var x= getSpecificNumber();
console.log(x);
//after 2 seconds, print again
console.log(x);


//==============================================================================================

async function f(){
    const specificNumber = await getSpecificNumber();
    console.log('f function: ',specificNumber);
}

f();

//==============================================================================================

function f1(){
    getSpecificNumber()
    .then(specificNumber => console.log('f1 function: ',specificNumber));
}

f1();

//==============================================================================================


