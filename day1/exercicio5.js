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
            console.log("Esta pessoa está na terceira idade");
        }else if(this.age > 30 && this.age < 60){
            console.log("Esta pessoa está na segunda idade");
        }else
            console.log("Esta pessoa está na primeira idade");
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