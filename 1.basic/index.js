console.log("Asynch js");

const second = () => {

    setTimeout(function(){
        console.log("===async second====");
    },2000);

}

const first = () => {
    console.log("first start");
    second();
    console.log("First end");
}

first();