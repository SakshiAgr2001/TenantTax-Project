var row = null;

function Submit() {
  var dataEntered = retrieveData();
 
  var readData = readingDataFromLocalStorage(dataEntered);
  if (dataEntered == false) {
    msg.innerHTML = "Please Enter Data!";
  }


  else {
    if (row == null) {
      insert(readData);
      msg.innerHTML = "Data inserted!";

    }
    else {
      update();
      msg.innerHTML = "Data Updated!";
    }
  }
  document.getElementById("form").reset();
}

//Retrieve the data
function retrieveData() {

  var name = document.getElementById("name").value;
  var appno = document.getElementById("appno").value;
  var paidamount = document.getElementById("paidamount").value;
  var paiddate = document.getElementById("paiddate").value;
  var arr = [name, appno, paidamount, paiddate];
  if (arr.includes("")) {
    return false;
  }
  else {
    return arr;

  }  

  }

function readingDataFromLocalStorage(dataEntered) {
  var nameStorage = localStorage.setItem("Name", dataEntered[0]);
  var appnoStorage = localStorage.setItem("appno", dataEntered[1]);
  var paidStorage = localStorage.setItem("paidamount", dataEntered[2]);
  var paiddateStorage = localStorage.setItem("paiddate", dataEntered[3]);



  var n1 = localStorage.getItem("Name", nameStorage);
  var a1 = localStorage.getItem("appno", appnoStorage);
  var p1 = localStorage.getItem("paidamount", paidStorage);
  var pd1 = localStorage.getItem("paiddate", paiddateStorage);

  var arr = [n1, a1, p1, pd1];
    return arr;

  
}
function insert(readData) {
  var row = table.insertRow();
  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = readData[3];
  row.insertCell(4).innerHTML = `<button onclick = edit(this)>Edit</button> <button onclick = remove(this)>Delete</button>`;

}

function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("appno").value = row.cells[1].innerHTML;
  document.getElementById("paidamount").value = row.cells[2].innerHTML;
  document.getElementById("paiddate").value = row.cells[3].innerHTML;

}

function update() {


  row.cells[1].innerHTML = document.getElementById("appno").value;
  row = null;
}

function remove(td) {
  var ans = confirm("are you sure you want to delete this record?");
  if (ans == true) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);

  }
  

}




