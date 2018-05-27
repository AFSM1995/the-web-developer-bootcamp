//// ask user "Are we there yet?"
//var arrive = prompt("Are we there yet?");
//
//// keep asking untill they enter "yes" or "yeah"
//while (arrive !== "yes" && arrive !== "yeah") {
//    var arrive = prompt("Are we there yet?");
//}
//
//// alert when we made it
//window.alert("Yey, we finally made it!");


// Version 2
// ask user "Are we there yet?"
var arrive = prompt("Are we there yet?");

// keep asking untill they enter "yes" or "yeah"
while (arrive.indexOf("yes") === -1) {
    var arrive = prompt("Are we there yet?");
}

// alert when we made it
window.alert("Yey, we finally made it!");