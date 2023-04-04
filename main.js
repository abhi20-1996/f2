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
    formData["email"] = document.getElementById("email").value;
    formData["age"] = document.getElementById("age").value;
    formData["gpa"] = document.getElementById("gpa").value;
    formData["degree"] = document.getElementById("degree").value;
    return formData;
}
var Id =1;
//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML =Id;
        Id++;

    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.age;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.gpa;
        cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.degree;
        cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <i onClick="onEdit(this)" class='fa fa-edit'></i> <i onClick="onDelete(this)" class="fa fa-trash-o" style="font-size:24px"></i>`;
   
}


//Edit the data
function onEdit(td) {
    document.getElementById("btn").innerHTML="Edit Student";
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("gpa").value = selectedRow.cells[4].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.gpa;
    selectedRow.cells[5].innerHTML = formData.degree;
    reset();
}
function reset(){
    document.getElementById("btn").innerHTML="Add Student";
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("age").value = '';
    document.getElementById("gpa").value = '';
    document.getElementById("degree").value = '';
    selectedRow = null;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        
    }
}

