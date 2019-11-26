async function f() {
    const response = await fetch('https://some-host.com/wrong-url');
}

console.log(f());


//=====================================================================
// Add try catch

async function f1() {
    try {
        const response = await fetch('https://some-host.com/wrong-url');
    } catch (e) {
        console.log('Some error ' + e);
    }
}

console.log(f1());
//=====================================================================

// another way to handle
async function f2() {
    const response = await fetch('https://some-host.com/wrong-url');
}


f2().catch(e=> alert('Custom error: ' +e))


