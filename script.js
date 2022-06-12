//variables
let outputText="";
let firstN;
let secondN;
let operator;
let display=document.querySelector("#output");
let push=0;
//
function add(a,b){
    outputText= a+b;
}
function subtract(a,b){
    outputText= a-b;
}
function multiply(a,b){
    outputText= a*b;
}
function divide(a,b){
    outputText= a/b;
}
//
function operate(a,operator,b){
    if (operator==="add") {add(a,b);}
    else if (operator==="subtract")  {subtract(a,b)}
    else if (operator==="multiply")  {multiply(a,b)}
    else if (operator==="divide")  {divide(a,b)}
    else  {console.log("error");}
}
// operate(4,"+",4);
// console.log(outputText);
//
let equal=document.querySelector("#equal");
equal.addEventListener("click",()=>{
    secondN=Number(display.textContent);
    // console.log(secondN);
    // console.log(firstN);
    // console.log(operator);
    operate(firstN,operator,secondN);
    // console.log(outputText);
    display.textContent=outputText;
    secondN=0;
    push=0;
})

let numkeys=document.querySelectorAll(".number");
numkeys.forEach(key=>key.addEventListener("click",()=>{
    outputText+=key.textContent;
    display.textContent=outputText;
}))

let opKeys=document.querySelectorAll(".operator");
opKeys.forEach(op=>op.addEventListener("click",()=>{
    if (push===0){
        operator=op.id;
        firstN=Number(outputText);
        outputText="";
        push=1;
    }
    else if (push===1){
        secondN=Number(display.textContent);
        operate(firstN,operator,secondN);
        operator=op.id;
        display.textContent=outputText;
        firstN=outputText;
        outputText="";
    }
}))