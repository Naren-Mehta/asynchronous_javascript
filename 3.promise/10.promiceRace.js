function askJohn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yep, I got one extra pen.'), 3000);
    });
}

function askAlian() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Sorry man, got only one.'), 1000);
    });
}

function askSusy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sure, I have pen for you'), 2000);
    });
}

var askAtTheShop = () =>{
    return Promise.resolve('We always have a pan :)');
}

Promise.race([askJohn(), askAlian(), askSusy(), askAtTheShop()])
    .then(value => {
        console.log(value);
    }).catch(error =>{
        console.log('Rejected: '+error);
    })