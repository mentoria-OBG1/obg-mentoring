const list = ["eu sou", 1 ,"lista"];
const string = "Eu sou uma string";
const integer = 1;
const boolean = false;
let funcao = function(x, y){
    var total = x + y;
    return total;
};


console.log(`Essa variável é do tipo: ${typeof(list)}`);
console.log(`Essa variável é do tipo: ${typeof(string)}`);
console.log(`Essa variável é do tipo: ${typeof(integer)}`);
console.log(`Essa variável é do tipo: ${typeof(boolean)}`);
console.log(`Essa variável é do tipo: ${typeof(funcao)}`);