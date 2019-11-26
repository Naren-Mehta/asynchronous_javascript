function getRandomDogApi() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(value => console.log(value.message));
}

console.log('Method 1: ',getRandomDogApi());

//============================================================

async function getRandomDogApi1() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let value = await response.json();
    console.log(value.message);
}

console.log('Method 2: ',getRandomDogApi());

//============================================================




