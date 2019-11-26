

function calculateSqure(number, callback) {
    setTimeout(function () {

        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 2000);
}

const print = function (error, value) {

    if (error !== null) {
        console.log('=================Caught error:========== ' + String(error));
        return;
    }
    console.log("Squre is " + value);
}

calculateSqure('hello', print);


// try{
//     calculateSqure('hello', print);
// }catch(error){
//     console.log('=================Caught error:========== ' + String(error));
// }
