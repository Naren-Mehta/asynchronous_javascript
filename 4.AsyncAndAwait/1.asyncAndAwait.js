

async function f(){
    return 'Hello WOrld'
}

console.log(f());

//===============================================

async function f1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(true),10000);
    });
}

var v1= f1();


//===============================================


async function f2(){
   return Promise.reject(404);
}

console.log(f2());

//===============================================



