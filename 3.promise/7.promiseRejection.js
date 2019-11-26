
function calculateSqure(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of tye number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
};

calculateSqure(1).then(value => {
    console.log('Success: ' + value);
    return calculateSqure(2);
}, reason => {
    console.log('Error1: ' + reason);
}).then(value2 => {

    return new Promise((resolve, reject) =>{
        return reject(new Error('Something went wrong.'));
    })
    console.log('Success2: ' + value2);
    // return calculateSqure(3);
}).then(value3 => {
    console.log('Success3: ' + value3);
}).catch(reason =>{
    console.log('Error happened '+reason);
});




