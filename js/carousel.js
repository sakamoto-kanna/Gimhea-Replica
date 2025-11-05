const warpperImage = 1920;
let mainIdx = 0;
let mainCountIdx = 3;
function carousel(step) {
  const main = document.getElementById("carousel-warpper");
  main.style.transform = `translate3d(-${warpperImage * step}px,0,0)`;
}
function mainPrev() {
  if (mainIdx - 1 === -1) {
    mainIdx = mainCountIdx;
  }
  mainIdx--;
  carousel(mainIdx);
}
function mainNext() {
  if (mainIdx + 1 === mainCountIdx) {
    mainIdx = -1;
  }
  mainIdx++;
  carousel(mainIdx);
}
