//OriDomi plugin http://oridomi.com/
var folded = new OriDomi(document.getElementsByClassName('map')[0]);
var folded = new OriDomi('.map', {
  vPanels:         [30,17,17,17,18],     // number of panels when folding left or right (vertically oriented)
  shadingIntesity: .9,    // lessen the shading effect
  perspective:     600,   // smaller values exaggerate 3D distortion
  shading:         'hard' // change the shading type
});

folded.reveal(50);

