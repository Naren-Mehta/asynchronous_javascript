// Callback is any function this is passed as an argument to another function,
// and then invoked from within that function.


// Callback with Set timeout - Asynchronous function

// function f(callback){
//     setTimeout(()=>callback(), 0);
// }

// f(() => console.log('This is a Callback!'));


// console.log('Hello WOrld!');



// Callback as normal call - Synchronous function

function f(callback){
    callback();
}

f(() => console.log('This is a Callback!'));


console.log('Hello WOrld!');