// Cons 2. Callback hell


function calculateSqure(number, callback) {
    setTimeout(function () {

        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(result);
    }, 2000);
}


calculateSqure(1, function (value) {
    console.log("Squre is " + value);
    calculateSqure(2, function (value) {
        console.log("Squre is " + value);
        calculateSqure(3, function (value) {
            console.log("Squre is " + value);
            calculateSqure(4, function (value) {
                console.log("Squre is " + value);
            });
        });
    });
});


