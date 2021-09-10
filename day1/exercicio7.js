function concatName(item){
    return [item.firstName, item.lastName].join(" ");
}

function getFullName(array){
    let newArray = array.map(concatName);
    console.log(`Os nomes completos são: ${newArray}`);
}


getFullName([
    {firstName: "Pedro",lastName: "Maia"},
    {firstName: "Bruno",lastName: "Germano"},
    {firstName: "Linus",lastName: "Torvalds"}
]);
