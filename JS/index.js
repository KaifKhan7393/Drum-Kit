//Find how many buttons are in the html file with class name drum
var buttonLen = document.querySelectorAll(".drum").length;

//This loop add click event on all the buttons
for (var i = 0; i < buttonLen; i++) {

    //selects all the elements which has class name drum and apply click event on this 
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;//returns the text which is present inside the button tag

        makeSound(buttonInnerHTML);//here we pass the buttonInnerHTML as parameter in function name makesound which is used to play the sound, when we click the button

        buttonAnimation(buttonInnerHTML); ///here we pass the buttonInnerHTML as parameter in function name buttonAnimation which is used to applay the animation effect on button, when we click the button
    });

}

//This block of code is used to detect which key is pressed on keyboard
document.addEventListener("keypress", function (event) {

    makeSound(event.key);//event.key returns the key of button which is pressed on keyboard

    buttonAnimation(event.key);
});


//This function takes the key and play the sound according to that key
function makeSound(key) {

    switch (key) {

        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log("Add the valid path of sound");

    }

}


//Adding animation when button is clicked or that key is pressed on the keyboard
function buttonAnimation(currentKey) {

    //selects the class of the button
    var activeButton = document.querySelector("." + currentKey);

    //adding new class on the button which is pressed or clicked
    activeButton.classList.add("pressed");

    //Remove the class after .1s 
    setTimeout(function () {activeButton.classList.remove("pressed");}, 100)//here anynomous funtion is first parameter and 100 is anoterh parameter
}