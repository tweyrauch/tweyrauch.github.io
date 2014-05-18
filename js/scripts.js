var folded = new OriDomi(document.getElementsByClassName('map')[0]);
var folded = new OriDomi('.map', {
  vPanels:         5,     // number of panels when folding left or right (vertically oriented)
  speed:           1200,  // folding duration in ms
  ripple:          2,     // backwards ripple effect when animating
  shadingIntesity: .5,    // lessen the shading effect
  perspective:     800,   // smaller values exaggerate 3D distortion
  shading:         'soft' // change the shading type
});

folded.reveal(30);

