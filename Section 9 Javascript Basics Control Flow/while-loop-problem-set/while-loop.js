console.log("loop 1: print all numbers between -10 and 19")
var initialNum = -10;

while (initialNum <= 19) {
    console.log(initialNum);
    initialNum++;
}


console.log("loop 2: print all even numbers between 10 and 40")
var initalNum2 = 10;

while (initalNum2 <= 40) {
    console.log(initalNum2);
    initalNum2+=2;
}


console.log("loop 3: print all odd numbers between 300 and 333")
var initalNum3 = 300;

while (initalNum3 <= 333) {
    if ((initalNum3 % 2) != 0) {
        console.log(initalNum3);
        initalNum3++;
    }
    initalNum3++;
}


console.log("loop 4: print all numbers divisible by 5 and 3 between 5 and 50")
var initalNum3 = 5;

while (initalNum3 <= 49) {
    if (((initalNum3 % 5) === 0) && ((initalNum3 % 3) === 0)) {
        console.log(initalNum3);
        initalNum3++;
    }
    initalNum3++;
}