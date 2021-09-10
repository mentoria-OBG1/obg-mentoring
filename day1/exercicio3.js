let array = [30,5, 5, 18, 43, 16, 21, 16,24,4,38,3,18,19,18,42,6,35,38,43];

//ordering the evens first and odds seconds
//this will store the arrays filter in a new let 
//and will consume more resources

let evens = array.filter(num => num % 2 == 0);
let odds = array.filter(num => num % 2 == 1);
let arrayEvensOdds = evens.concat(odds);

let arrayEvensOdds2 = array.sort().sort((a,b) =>{
    return a===b ? 0: (a%2 ? 1 : -1);
})

//Why does the order change?
//The order changes because of the logic
console.log(`O array com pares primeiro e depois ímpares: ${arrayEvensOdds}`);
console.log(`O array com pares primeiro e depois ímpares: ${arrayEvensOdds2}`);

//now ordering from the lower to the higher
let orderedArray = arrayEvensOdds.sort((num1, num2) =>{
    if(num1 === num2) return 0;
    if(num1 > num2) return 1;
    if (num1 < num2) return -1;
})

let orderedArray2 = array.sort((a,b)=>{
    return a===b ?0: (a>b ?1 : -1);
}
)

console.log(orderedArray);
console.log(orderedArray2);

//Try order mix booth orders now
//First evens from lower to higher
//Second odds from lower to higher



//STRING TRIES
//Lengh and alphabetical order in a string arrays, let's try

let stringArray = ["bola", "panela", "aparador", "mesa", "cadeira", "fogão", "zero", "windows"];

//length order

let lengthOrderedArray = stringArray.sort((str1, str2)=>{
    if (str1.length === str2.length) return 0;
    if (str1.length > str2.length) return 1;
    if (str1.length < str2.length) return -1;
})

console.log(lengthOrderedArray);

//alphabetical order

let alphabeticalOrderedArray = lengthOrderedArray.sort();

console.log(alphabeticalOrderedArray);
