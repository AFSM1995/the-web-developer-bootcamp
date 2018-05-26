//function getRandomArbitrary(1, 10) {
//    return Math.random() * (10 - 1) + 1;
//    alert 
//    console.log(Math.random());
//}

// set secretNum
var secretNum = 6;
var finish = false;

    // ask user for guess
    var Number(guess) = prompt("Im thinking of a number between 1 and 10 what is it?");

    while (finish === false) {
    // check if correct
        if (guess > secretNum) {
            var Number(guess) = prompt("You are to high, try agien");
        }

        else if (guess < secretNum) {
            var Number(guess) = prompt("You are to low, try agien");
        }

        else {
            window.alert("That is correct!!");
            var finish = true;
    }
}