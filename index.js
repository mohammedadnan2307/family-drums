for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.textContent);
    });
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
});
function makeAnimation(key) {
    document.querySelector("." + key).classList.toggle("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.toggle("pressed");
    }, 100);
}
function makeSound(key) {
    makeAnimation(key);
    switch (key) {
        case "w": var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a": var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s": var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d": var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j": var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k": var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l": var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}