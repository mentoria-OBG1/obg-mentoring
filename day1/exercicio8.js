
const returnArray = async() =>{
    //two types of array just for test
    const array1 = [1,2,3,4,5];
    const array2 =["abelha", "casa", "computador", "geladeira"];
    array2.forEach((element)=>{
        setTimeout(()=>{
            console.log(element);
        }, 2000);
    })    
}

returnArray();

function returnPromise12ms (){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("done!")}, 1200);
    })
}

returnPromise12ms().then(console.log);



    
// Code below is refactored with promise above

// function waitTo(ms, callback){
//     setTimeout(() => callback("done!"), ms);
// }

// waitTo(1200, (result) =>{
//     console.log(result);
// })