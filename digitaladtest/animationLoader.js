// Declare the variable storing the animation container connected to the bodymovin .JSON file
var globeAnimation = document.getElementById('globeAnimation');

// Lottie code to load in animation and settings
let globeAnimationSettings = bodymovin.loadAnimation({
    container: globeAnimation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "animations/z2.json"
});


// Declare visit text DOM element and establish interactive animation
var visitAnimation = document.getElementById('visitText');

let visitAnimationSettings = bodymovin.loadAnimation({
    container: visitAnimation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "animations/z3.json"
});

visitAnimation.addEventListener('mouseenter', function() {
    visitAnimationSettings.play();
})

visitAnimation.addEventListener('mouseleave', function() {
    visitAnimationSettings.goToAndStop(0, true);
})

// Declare text overlay graphic DOM element and animate
var textOverlayAnimation = document.getElementById('textOverlay');

let textOverlayAnimationSettings = bodymovin.loadAnimation({
    container: textOverlayAnimation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "animations/z5.json"
});

// Declare logo graphic DOM element and animate
var logoAnimation = document.getElementById('logo');

let logoAnimationSettings = bodymovin.loadAnimation({
    container: logoAnimation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "animations/z6.json"
});