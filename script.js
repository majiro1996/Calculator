//variables
let outputText="";
let firstN
let secondN
let operator="+";
let display=document.querySelector("#output");
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
    console.log(secondN);
    console.log(firstN);
    console.log(operator);
    operate(firstN,operator,secondN);
    console.log(outputText);
    display.textContent=outputText;
    secondN=0; 
})

let keys=document.querySelectorAll(".number");
keys.forEach(key=>key.addEventListener("click",()=>{
    outputText+=key.textContent;
    display.textContent=outputText;
}))

let opKey=document.querySelectorAll(".operator");
opKey.forEach(op=>op.addEventListener("click",()=>{
    firstN=Number(outputText);
    operator=op.id;
    outputText="";
}))