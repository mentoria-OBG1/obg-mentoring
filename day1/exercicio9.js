const increaseNum = function (){
    let num = 0;
    setInterval(() => {
        console.log(num);
        num += 1;
    },1200);
}

increaseNum();