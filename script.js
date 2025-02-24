//Audio Context
let myAudCtx = new AudioContext();
//Oscillator
let myOsc = myAudCtx.createOscillator();
myOsc.type = "sine";
//Gain
let myGain = myAudCtx.createGain();
myGain.gain.value = 0;
myOsc.start();
//set Freq and Gain
myOsc.connect(myGain);
myGain.connect(myAudCtx.destination);

//Functions
const startAudio = function () {
  myAudCtx.resume;
  myOsc.start();
};
const stopAudio = function () {
  myOsc.stop();
};
const updateFrequency = function (event) {
  myOsc.frequency.value = event.target.value;
};

const updateGain = function (event) {
  myGain.gain.value = event.target.value;
};

let theStartButton = document.getElementById("startAudio");
let theStopButton = document.getElementById("stopAudio");
theStartButton.addEventListener("click", startAudio);
theStopButton.addEventListener("click", stopAudio);
let freqSlider = document.getElementById("frequency");
let gainSlider = document.getElementById("gain");
freqSlider.addEventListener("input", updateFrequency);
gainSlider.addEventListener("input", updateGain);
