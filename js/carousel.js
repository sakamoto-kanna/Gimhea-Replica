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
  setInterval(tourNext, 5000);
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

const tourWapperSize = 960;
let tourIdx = 0;
const tourCountIdx = 3;

function tourCarousel(step) {
  const tour = document.getElementById("tour-carousel");
  tour.style.transform = `translate3d(-${tourWapperSize * step}px,0,0)`;
}

function tourPrev() {
  if (tourIdx - 1 === -1) {
    tourIdx = tourCountIdx;
  }
  tourIdx--;
  tourCarousel(tourIdx);
}
function tourNext() {
  if (tourIdx + 1 === tourCountIdx) {
    tourIdx = -1;
  }
  tourIdx++;
  tourCarousel(tourIdx);
}
