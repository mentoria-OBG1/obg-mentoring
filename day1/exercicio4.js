//Function to convert Cº to Fahrenheit
const convertToFahrenheit = (temp) => ((temp*9/5) +32);

console.log(`A temperatura em fahrenheit é de: ${convertToFahrenheit(30)}F.`)


//Function to count words in a text
function countWords(text){
    textArray = text.split(' ');
    console.log(`O texto tem ${textArray.length} palavras.`)
}

countWords("adjf ajfapdifjai dfoida fia foidhf adifho aidfhoia dfoaid fhoiad foa");


//how to deal with the input of the user
//prompt keeps giving me prompt is not defined