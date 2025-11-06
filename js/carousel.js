const warpperImage = 1920;
let mainIdx = 0;
const mainCountIdx = 3;

function mainCarousel(step) {
  const main = document.getElementById("carousel-warpper");
  main.style.transform = `translate3d(-${warpperImage * step}px,0,0)`;
}
function mainPrev() {
  if (mainIdx - 1 === -1) {
    mainIdx = mainCountIdx;
  }
  mainIdx--;
  mainCarousel(mainIdx);
}
function mainNext() {
  if (mainIdx + 1 === mainCountIdx) {
    mainIdx = -1;
  }
  mainIdx++;
  mainCarousel(mainIdx);
}

const carouselCycle = () => {
  setInterval(mainNext, 5000);
  setInterval(foodNext, 5000);
};

const foodWapperSize = 880;
let foodIdx = 0;
const foodCountIdx = 3;

function foodCarousel(step) {
  const food = document.getElementById("food-carousel");
  food.style.transform = `translate3d(-${foodWapperSize * step}px,0,0)`;
}

function foodPrev() {
  if (foodIdx - 1 === -1) {
    foodIdx = foodCountIdx;
  }
  foodIdx--;
  foodCarousel(foodIdx);
}
function foodNext() {
  if (foodIdx + 1 === foodCountIdx) {
    foodIdx = -1;
  }
  foodIdx++;
  foodCarousel(foodIdx);
}
