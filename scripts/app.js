const ratioWidth = document.querySelector("#ratio-width");
const ratioHeight = document.querySelector("#ratio-height");
const pixelsWidth = document.querySelector("#pixels-width");
const pixelsHeight = document.querySelector("#pixels-height");

function presetFunc(event) {
  console.log(event.target.value);
  if (event.target.value === "hdvideo") {
    ratioWidth.value = 16;
    ratioHeight.value = 9;
    calculateHeight()
  } else if (event.target.value === "standardmonitor") {
    ratioWidth.value = 4;
    ratioHeight.value = 3;
    calculateHeight()
  } else if (event.target.value === "classicfilm") {
    ratioWidth.value = 3;
    ratioHeight.value = 2;
    calculateHeight()
  } else if (event.target.value === "cinemascope") {
    ratioWidth.value = 21;
    ratioHeight.value = 9;
    calculateHeight()
  }
}

let calculateWidth = () => {
  let aspectRatio = ratioWidth.value / ratioHeight.value;
  pixelsWidth.value = parseFloat((pixelsHeight.value * aspectRatio).toFixed(2));
};

let calculateHeight = () => {
  let aspectRatio = ratioWidth.value / ratioHeight.value;
  pixelsHeight.value = parseFloat((pixelsWidth.value / aspectRatio).toFixed(2));
};

pixelsHeight.addEventListener("input", calculateWidth);
pixelsWidth.addEventListener("input", calculateHeight);

ratioHeight.addEventListener("input", calculateHeight);
ratioWidth.addEventListener("input", calculateHeight);
