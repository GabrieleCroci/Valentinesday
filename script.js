document.getElementById("yesButton").addEventListener("click", showAlert);

function showAlert() {
    alert("I love you! See you soon <3");
}

var yesButton = document.getElementById("yesButton");
var no = document.getElementById("no");
var valentineImage = document.getElementById("valentineImage");

var noTexts = ["Are you sure?", "Please give me a chance pookie", "Pookie please", "Don't do this to me :(", "You're breaking my heart", "I'm gonna cry"];
var imageSources = ["https://media.tenor.com/BP70qe8X0J8AAAAe/crycat-crying-cat.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9e71v7IfFLLS_1CfY2it3an-6XH1uROjTfU5c88AwRL8aRkqAYDmoFrm9gpbUqwNameo&usqp=CAU", "https://i.pinimg.com/736x/cb/d8/3b/cbd83b534a315e809a9da2b8cd3ac3bf.jpg"];

no.addEventListener("click", change);

function change() {
    var randomIndex = Math.floor(Math.random() * noTexts.length);
    var randomText = noTexts[randomIndex];
    no.innerText = randomText;

    var i = Math.floor(Math.random() * 1000) + 1;
    var j = Math.floor(Math.random() * 700) + 1;
    no.style.left = i + "px";
    no.style.top = j + "px";

    var currentWidth = yesButton.offsetWidth;
    var currentHeight = yesButton.offsetHeight
    yesButton.style.width = currentWidth + 30 + "px";
    yesButton.style.height = currentHeight + 10 + "px";

    var randomImageIndex = Math.floor(Math.random() * imageSources.length);
    valentineImage.src = imageSources[randomImageIndex];
}