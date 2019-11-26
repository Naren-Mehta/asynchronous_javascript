// Promise is a special JavaScript object that represents an eventual result of an asynchronous action.

// Promise contain to values : 1. Promise Status, 2. Promise Value
// Promise can be 1 of 3 states
// 1. pending (undefined) -> 2. Fulfiled (real value)
//                        -> 3. rejected (reason of failure)


const myPromise = new Promise(function(resolve, reject){
    reject('reason');

    resolve('value');
    resolve('value2');
}); 

console.log(myPromise);