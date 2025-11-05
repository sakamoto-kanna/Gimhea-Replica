const warpperImage = 1920;

function carousel(step) {
  const main = document.getElementById("main-warpper");
  main.style.transform = `translate3d(-${warpperWidth * step}px,0,0)`;
}
