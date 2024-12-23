        // calculator

var val1 = +prompt("val1: ");
var val2 = +prompt("val2: ");
var operator = prompt("+,-,*,/")

if(operator == "+" ){
    console.log("Add:", val1 + val2);
}
else if(operator == "-"){
    console.log("sub", val1 - val2);
}
else if(operator == "*"){
    console.log("Mul", val1 * val2);
}
else if(operator == "/"){
    console.log("Div", val1 / val2);
}
else{
    console.log("Invalid Number");
}