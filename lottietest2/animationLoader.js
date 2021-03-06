// Declare the variable storing the animation container connected to the bodymovin .JSON file
var animation = document.getElementById('animationContainer');

// Declare the variable linked to the button for interaction
var buttonSelector = document.getElementById('continueButton');

// Lottie code to load in animation and settings
let animationPlay = bodymovin.loadAnimation({
    container: animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "buttonPress.json"
});

var cursorTrailContainer = document.getElementById('cursorTrail');

let cursorTrail = bodymovin.loadAnimation({
    container: cursorTrailContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "cursorTrail.json"
});

// Adds listener so when button is clicked the animation plays
buttonSelector.addEventListener('click', function() {
    animationPlay.play();
      
});

// Generates random int, to be used in rotating the animation container to add some variance to the design
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// adds a listener to wait for the completion of the animation cycle
animationPlay.addEventListener('complete', function() {

    // resets animation frame to 0 for replay on next click
    animationPlay.goToAndStop(0,1);

    // uses earlier established getRandomInt function to generate a value between 0 and 360
    var genRotation = getRandomInt(360);
    console.log(genRotation);

    // Converts the needed style text and random rotation value to a string for assignment to the animation container
    let rotationCode = "rotate("+genRotation+"deg)";

    // Applies rotation
    animation.style.transform = rotationCode;

    // Deprecated, helps to see rotation for testing purposes
    /* document.getElementById('animationContainer').style.backgroundColor = "red"; */

});

let trail = document.getElementById('cursorTrail');
const onMouseMove = (e) =>{
    trail.style.left = e.pageX - 40 + 'px';
    trail.style.top = e.pageY - 40 + 'px';
}
document.addEventListener('mousemove', onMouseMove);

let overlay = document.getElementById('backgroundOverlay');
const onMouseMove2 = (e) =>{
    overlay.style.left = e.pageX - 150 + 'px';
    overlay.style.top = e.pageY - 150 + 'px';
}
document.addEventListener('mousemove', onMouseMove2);