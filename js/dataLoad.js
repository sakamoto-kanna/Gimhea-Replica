async function fetchDataLoad(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP오류:${response.status}`);
  }
  return await response.json();
}

async function apiLoad(size, requestUrl) {
  const proxy = "https://nextit.or.kr:41080/";
  for (let i = 1; i < size; i++) {
    const origin = `${reqeustURL}?page=${i}`;
    const url = `${proxy}${origin}`;
    //console.log(url);
  }
}
