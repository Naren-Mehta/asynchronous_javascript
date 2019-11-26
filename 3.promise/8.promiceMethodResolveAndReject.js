function logToConsole(somePromise){
    somePromise.then(value => console.log(value));
}

const somePromise= new Promise((resolve,reject) => resolve('hello'));

logToConsole(somePromise);

const value='string';
const promisifiedValue= Promise.resolve(value);
logToConsole(promisifiedValue);

const rejectedPromise= Promise.reject(value);
logToConsole(rejectedPromise);

