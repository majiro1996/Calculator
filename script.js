//
function add(a,b){
    let result=a+b;
    return{result}
}
function subtract(a,b){
    let result=a-b;
    return{result}
}
function multiply(a,b){
    let result=a*b;
    return{result}
}
function divide(a,b){
    let result=a/b;
    return {result}
}
//
function operate(a,operator,b){
    if (operator==="+"){add(a,b)}
    else if (operator==="-"){subtract(a,b)}
    else if (operator==="*"){multiply(a,b)}
    else if (operator==="/"){divide(a,b)}
}