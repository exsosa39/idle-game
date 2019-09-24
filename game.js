var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('click here for wood', btnPress);   // Create a button element
var hidden = new Button('wood');
hidden.hide();
var scr = new Text(score);                     // Create a title element

 setInterval(btnPress, 100000);  // Set up a loop

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
  var button = new Button('wood')
}
var score = 0; // Create a variable to store the score in
setInterval(createButton, 1000); // Run the "createButton" function once every 1000 milliseconds (once every second)

function createButton() {
  let button = new Button('wood');
}
var score = 0; // Create a variable to store the score in
var button = new Button('click here for wood', btnPress);         // Create a button element
var scr = new Text(score);                     // Create a text element

var rowSection = new Section('row'); // Create the row to store the columns in
var column1 = new Section('col');    // Create the first column
var column2 = new Section('col');    // Create the second column

column1.add(text1);
column2.add(text2);
