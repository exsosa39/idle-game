var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop
setInterval(makebtn, 1000); // Run the "createButton" function once every 1000 milliseconds (once every second)


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}

function makebtn() {
  var button = new Button('iPhone 11')
}
var score = 0; // Create a variable to store the score in
setInterval(createButton, 1000); // Run the "createButton" function once every 1000 milliseconds (once every second)

function createButton() {
  let button = new Button('Iphone11');
}
var score = 0; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);         // Create a button element
var scr = new Text(score);                     // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
