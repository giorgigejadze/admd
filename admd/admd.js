const prompt = require('prompt-sync')();

let theNumber = Number(prompt("What is the first number? "));

let theNumbers = Number(prompt("What is the second number? "));

//(a)ddition
let calculation = (theNumber + theNumbers);
console.log(theNumber +  " + " + theNumbers +  " = " + calculation);

//(d)eduction
let calculation1 = (theNumber - theNumbers);
console.log(theNumber +  " - " + theNumbers +  " = " + calculation1);

//(m)ultiplication
let calculation2 = (theNumber * theNumbers);
console.log(theNumber +  " * " + theNumbers +  " = " + calculation2);

//(d)ivision
let calculations3 = (theNumber / theNumbers);
console.log(theNumber +  " / " + theNumbers +  " = " + calculations3);