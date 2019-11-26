

function getSpecificNumber(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(42),2000);
    });
}

(async function (){
    const number= await getSpecificNumber();
    console.log(number);
})();