var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["appno"] = document.getElementById("appno").value;
    formData["paidamount"] = document.getElementById("paidamount").value;
    formData["paiddate"] = document.getElementById("paiddate").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.appno;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.paidamount;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.paiddate;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> `;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    
    document.getElementById("appno").value = selectedRow.cells[1].innerHTML;
   
}
function updateRecord(formData) {
   
    selectedRow.cells[1].innerHTML = formData.appno;
    
}

//Reset the data
