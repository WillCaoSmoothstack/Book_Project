let current = "s0";
let currentPage = 1;
let btnList = document.getElementsByClassName("btn");
const pageMin = 1;
const pageMax = 15;
const itemsPerPage = 6;
function clickActive(id) {
  tableDataClear();
  const element = document.getElementById(id);
  currentPage = element.innerText;
  current = id;
  console.log("currnet page: " + currentPage);
  makeActive(id);
}
function makeActive(id) {
  tableDataClear();
  for (let i = 0; i < btnList.length; i++) {
    btnList[i].className = "btn";
  }
  const element = document.getElementById(id);
  element.className = "btn active";
}
function movePage(id) {
  const element = document.getElementById(current);
  let res = element.innerText;
  if (id === "next" && currentPage <= pageMax) {
    res = parseInt(res, 10);
    if (res !== pageMax) {
      currentPage = res + 1;
      retrieveData(currentPage);
      if (current !== "s4") {
        res = current.replace(/s/g, "");
        res = parseInt(res, 10);
        res = "s" + (res + 1);
        current = res;
        makeActive(current);
      } else {
        for (let i = 0; i < btnList.length; i++) {
          btnList[i].innerText = currentPage + i - (btnList.length - 1);
        }
      }
    }
    console.log("currnet page: " + currentPage);
  } else if (id === "back" && currentPage >= pageMin) {
    res = parseInt(res, 10);
    if (res !== pageMin) {
      currentPage = res - 1;
      retrieveData(currentPage);
      if (current !== "s0") {
        res = current.replace(/s/g, "");
        res = parseInt(res, 10);
        res = "s" + (res - 1);
        current = res;
        makeActive(current);
      } else {
        for (let i = 0; i < btnList.length; i++) {
          btnList[i].innerText = currentPage + i;
        }
      }
    }
    console.log("currnet page: " + currentPage);
  } else {
    element.innerText = "out";
  }
}
