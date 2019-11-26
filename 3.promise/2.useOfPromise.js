
const myPromise = new Promise(function(resolve, reject){
    resolve('Hello WOrld');
}); 

console.log(myPromise);

myPromise.then(function (value){
    console.log('On fulfilled method ',value);
});

console.log("After the onFulfilled method!");