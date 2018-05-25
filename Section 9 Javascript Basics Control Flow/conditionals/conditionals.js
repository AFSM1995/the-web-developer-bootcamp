var age = Number(prompt("What is your age?"));
// while checks that input is a number
while(isNaN(age)) {
// the isNaN() function determines whether a value is NaN or not.
    window.alert("Type that in as a number, not a word");
    age = Number(prompt("What is your age?"));
}

if(age < 0) {
    window.alert("Error negitive age");
}

if(age === 21) {
    window.alert("happy 21st birthday!!");
}

else if((age % 2) !== 0) {
    window.alert("your age is odd!");
}

if(age % Math.sqrt(age) === 0) {
// the Math.sqrt() function returns the square root of a number
    window.alert("perfect square!")
}