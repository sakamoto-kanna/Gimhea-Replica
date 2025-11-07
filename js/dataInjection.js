function dataInjection(className, inputClass, data) {
  const area = document.getElementById(`${className}`);
  const randArr = randomIdx(12, data.length);

  for (let i = 0; i < 12; i++) {
    const jsonData = {
      name: `${data[randArr[i]].name}`,
      image: `${data[randArr[i]].images[0]}`,
      memu: `${data[randArr[i]].menuprice}`,
      address: `${data[randArr[i]].address}`,
    };
    area.innerHTML += `<div class=${inputClass}><img src=${jsonData.image}><p>${jsonData.name}</p><br><p>${jsonData.memu}</p><br><p>${jsonData.address}</p></div>`;
    console.log(jsonData);
  }
}

function randomIdx(count, max) {
  let randArr = [];
  for (let i = 0; i < count; i++) {
    const rand = Math.floor(Math.random() * max);
    randArr[i] = rand;
    for (let j = 0; j < i; j++) {
      if (randArr[j] === rand) {
        i--;
        break;
      }
    }
  }
  //   console.log(randArr);
  return randArr;
}
