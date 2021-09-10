const myName = "Pedro";
const instructorName = "Bruno Germano";
const integer = 1;
const integerString = "1";

//If wanted to declare the result of comparison in a variable
const x = myName === instructorName;
const y = integer === integerString;
console.log("O resultado da comparação é: " + x );
console.log("O resultado da comparação é: " + y);

//If don't want to have the result of the comparison declared in a variable
console.log(`O resultado da comparação é ${myName === instructorName}`);
console.log(`O resultado da compração é: ${integer === integerString}`);
