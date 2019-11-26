
function printNumber1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Print no 1 is done');
            resolve(1);
        }, 1000);
    });
}

function printNumber2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Print no 2 is done');
            resolve(2);
        }, 1000);
    });
}

async function oneByOne() {
    const number1 = await printNumber1();
    const number2 = await printNumber2();
    console.log(number1, number2);
}

// oneByOne();

//====================================
//inParallel


async function inParallel() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    const number1 = await promise1;
    const number2 = await promise2;

    console.log(number1, number2);
}

// inParallel();

//====================================
//inParallel - with destructor


async function inParallel1() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    const [number1, number2]= [await promise1,await promise2]

    console.log(number1, number2);
}

// inParallel1();

//====================================

async function inParallel2() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    console.log(await promise1,await promise2);
}

inParallel2();










