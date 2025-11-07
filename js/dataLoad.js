async function fetchDataLoad(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP오류:${response.status}`);
  }
  return await response.json();
}
async function apiLoad(reqeustURL) {
  let dataArr = [];
  const proxy = "https://nextit.or.kr:41080/";
  let origin = `${reqeustURL}?page=1`;
  const url = `${proxy}${origin}`;
  //   console.log(url);

  const ROWdata = await fetchDataLoad(url);
  for (let i = 1; i < ROWdata.page_count + 1; i++) {
    const origin = `${reqeustURL}?page=${i}`;
    const url = `${proxy}${origin}`;
    const data = await fetchDataLoad(url);

    dataArr = dataArr.concat(data.results);
  }

  // console.log(dataArr);
  let filterData = [];
  for (let i = 0; i < dataArr.length; i++) {
    if (
      dataArr[i].images.length != 0 &&
      dataArr[i].images.length != null &&
      dataArr[i].menuprice != ""
    ) {
      filterData = filterData.concat(dataArr[i]);
    }
  }

  // console.log(filterData);

  return filterData;
}
