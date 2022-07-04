document.write("Wassup boy from a diff file");
document.write("<h2 style='color:blue'> Writing html in java script</h2>")
var phrase = "This is a variable";
document.write(phrase);
phrase = " I changed the var";
document.write(phrase);
var age = 23;
var gpa = 3.1;
var isMale = true;
var flaws = null;
var description = undefined;
document.write(phrase.toUpperCase());
var name = window.prompt("Gimme ur name");
var message = "Hello " + name + " how are you today?";
document.write("<h1 style='color:green'>" + message+ "</h1>")
var textbox = document.getElementById("textbox");
var messages = document.getElementById("messages");
var button = document.getElementById("button");
button.addEventListener("click", function(){
    var currMessage = document.createElement("li");
    currMessage.innerHTML = textbox.value;
    messages.appendChild(currMessage);
    textbox.value = "";
})

