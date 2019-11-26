
function calculateSqure(number){
    const promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            if(typeof number !== 'number'){
                return reject(new Error ('Argument of tye number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
};

calculateSqure('hello').then(value=>{
    console.log('Success: '+value);
}, reason => {
    console.log('Error: '+ reason);
})




