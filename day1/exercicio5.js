class Pessoa{
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    greetings(){
        console.log(`Olá, ${this.name}`)
    }

    addYear(amount){
        return this.age += amount
    }

    removeYear(amount){
        return this.age -= amount;
    }

    whichAge(){
        if(this.age > 60){
            console.log("Terceira Idade");
        }else if(this.age > 30 && this.age < 60){
            console.log("Segunda Idade");
        }else
            console.log("Primeira Idade");
    }
}


const mySelf = new Pessoa("Pedro", "Maia", 29)
console.log(mySelf);
mySelf.greetings();
mySelf.whichAge();
mySelf.addYear(20);
console.log(mySelf);
mySelf.whichAge();
mySelf.addYear(20);
console.log(mySelf);
mySelf.whichAge();
mySelf.removeYear(40);
console.log(mySelf);