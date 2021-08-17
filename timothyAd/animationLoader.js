// Declare the variable storing the animation container connected to the bodymovin .JSON file
var rearCloudsAnimation = document.getElementById('rearClouds');

// Lottie code to load in animation and settings
let rearCloudsAnimationSettings = bodymovin.loadAnimation({
    container: rearCloudsAnimation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "animations/backgroundCloudsComp.json"
});

var frontCloudsAnimation = document.getElementById('frontClouds');

// Lottie code to load in animation and settings
let frontCloudsAnimationSettings = bodymovin.loadAnimation({
    container: frontCloudsAnimation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "animations/foregroundCloudComp.json"
});

var directionAnimation = document.getElementById('directions');

let directionAnimationSettings = bodymovin.loadAnimation({
    container: directionAnimation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "animations/liftTimothyComp.json"
});

var timothyAnimation = document.getElementById('timothy');

let timothyAnimationSettings = bodymovin.loadAnimation({
    container: timothyAnimation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "animations/timothyPrecomp.json"
})

// Timothy Drag Controls
dragElement(document.querySelector("#timothy"));
   function dragElement(ele) {
      var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
      // deprecated, just leaving it because im lazy
      if (document.querySelector(ele.id + "header")) {
        document.getElementById(
          ele.id + "header"
        ).onmousedown = dragMouseDown;
      }
      else {
        ele.onmousedown = dragMouseDown;
      }
      function dragMouseDown(e) {

        // reset transition property to reenable movement
        timothyAnimation.style.transition = "none";
        // start animation playing
        timothyAnimationSettings.goToAndPlay(30, true);
        // loop animation from frame 30 on completion
        timothyAnimationSettings.onComplete = function(){timothyAnimationSettings.goToAndPlay(30,true)};
        // checks for window event
        e = e || window.event;
        e.preventDefault();
        // get cursor starting point
        pos3 = e.clientX;
        pos4 = e.clientY;
        // launches function based on mouse state
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }
      function elementDrag(e) {

        // fade out "lift timothy" sign
        directionAnimation.style.opacity ="0";

         e = e || window.event;
         e.preventDefault();
         pos1 = pos3 - e.clientX;
         pos2 = pos4 - e.clientY;
         pos3 = e.clientX;
         pos4 = e.clientY;
        // set position of timothy based on movement
         ele.style.top = ele.offsetTop - pos2 + "px";
         ele.style.left = ele.offsetLeft - pos1 + "px";
      }
      function closeDragElement() {
        
        // fade in lift sign upon mouse up
        directionAnimation.style.opacity ="1";

        document.onmouseup = null;
        document.onmousemove = null;
        // reset timothy's ground position with CSS transition for smoothness
        timothyAnimation.style.transition = "all ease-in 1s";
        timothyAnimation.style.top = 308 + "px";
        // pause timothy animation at 0 frames
        timothyAnimationSettings.goToAndStop(0, true);

      }
   }