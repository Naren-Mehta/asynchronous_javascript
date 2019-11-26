function askFirstDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(8000),3000);
    });
}

function askSecondDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>reject('Not suitable car'),5000);
    });
}

function askThirdDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(10000),8000);
    });
}

Promise.all([askFirstDealer().catch(error=> error),
    askSecondDealer().catch(error=> error), 
    askThirdDealer().catch(error=> error),
    Promise.reject('Rejected for some reason')])
.then(prices => {
    console.log(prices);
}).catch(error=>{
    console.log(error);
})

Promise.all([1,'string',true])
.then(prices => {
    console.log(prices);
})


Promise.all([])
.then(prices => {
    console.log(prices);
})