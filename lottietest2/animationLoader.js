/* var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottieBox'), // Required
    path: 'animation.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "animation Test", // Name for future reference. Optional.
  })

var mouseOverEvent = document.getElementById('lottieBox');

mouseOverEvent.addEventListener("mouseover", function(){

    container.anim.pause()

}, false); */

let animation = document.getElementById('animationContainer');

let buttonSelector = document.getElementById('continueButton');

let animationPlay = bodymovin.loadAnimation({
    container: animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "buttonPress.json"
});

buttonSelector.addEventListener('click', function() {
    animationPlay.play();
      
});

animationPlay.addEventListener('complete', function() {

    animationPlay.goToAndStop(0,1);

});