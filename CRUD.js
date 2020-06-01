let dataLength;
let objJS;
let itemList = document.getElementsByClassName("item");
function displayJS(currentPage) {
  retrieveData(currentPage);
}
function tableData(rowData) {
  let tableElement = document.getElementById("table1");
  let child;
  let childItem;
  child = document.createElement("tr");
  for (d in rowData) {
    childItem = document.createElement("td");
    childItem.innerText = rowData[d];
    child.appendChild(childItem);
  }
  tableElement.appendChild(child);
}

function tableDataClear() {
  let tableElement = document.getElementById("table1");
  let tagList = tableElement.getElementsByTagName("tr");
  const tagLength = tagList.length;
  for (let i = 1; i < tagLength; i++) {
    tableElement.removeChild(tagList[1]);
  }
  tagList = document.getElementsByTagName("tr");
}
function retrieveData(currentPage) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    // If the request is finished and the status is ok
    if (this.readyState == 4 && this.status == 200) {
      objJS = JSON.parse(this.responseText);
      dataLength = objJS.length;
      currentPage = parseInt(currentPage, 10);
      if (currentPage !== 1) {
        j = currentPage * 6 - 6;
      } else {
        j = 0;
      }
      for (let i = 0; i < itemList.length; i++) {
        if (j < dataLength) {
          itemList[
            i
          ].innerText = `Title: ${objJS[j].title} Author: ${objJS[j].name} Book ID: ${objJS[j]._bookid}`;
          tableData(objJS[j]);
        } else {
          itemList[i].innerText = "";
        }
        j++;
      }
    }
  };
  xmlhttp.open("GET", "data.json", true);
  xmlhttp.send();
}
