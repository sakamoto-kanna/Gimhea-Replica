async function fetchDataLoad(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP오류:${response.status}`);
  }
  return await response.json();
}
let dataArr = [];
async function apiLoad(reqeustURL) {
  const proxy = "https://nextit.or.kr:41080/";
  let origin = `${reqeustURL}?page=1`;
  const url = `${proxy}${origin}`;
  //   console.log(url);

  const data = await fetchDataLoad(url);
  const dataLength = data.page_count;
  for (let i = 1; i < dataLength + 1; i++) {
    const origin = `${reqeustURL}?page=${i}`;
    const url = `${proxy}${origin}`;
    const data = await fetchDataLoad(url);
    dataArr = dataArr.concat(data.results);
  }

  console.log(dataArr);
}
