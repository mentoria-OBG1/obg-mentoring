function x(){
    //console.log(arguments)
    let totalAge = 0;
    let currentAge = 0;
    const a = Object.values(arguments);
    a.forEach((element)=>{
        //access the element.age if != to 0 and after the parce
        //what is going on with the ""
    try{
        if((typeof(element)) == "string"){
            let x = JSON.parse(element);
            //Why it output {object Object}
            //console.log(`O objeto JSON é: ${x}`);
            console.log(x);
            if(x.age){
                currentAge = parseInt(x.age)
                totalAge += currentAge;
        }}    
        }catch(error){
            //nothing happens whith the error
            //but we can treat it here
        }
    })
    console.log(`O somatório total das idades nas entradas é de: ${totalAge}`);
}

x(15,'{"name":"John"}', "", '{"age":"30"}' , '{"age":"45"}');