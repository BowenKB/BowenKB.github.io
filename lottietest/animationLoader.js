var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottieBox'), // Required
    path: 'animation.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "animation Test", // Name for future reference. Optional.
  })