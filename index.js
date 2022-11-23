function receivesAFunction(x){
  x();
}


function returnsANamedFunction(){
    let cash = () => console.log("migos");
    return cash;
}

function returnsAnAnonymousFunction(){
    return (() => console.log("TakeOff"))
}