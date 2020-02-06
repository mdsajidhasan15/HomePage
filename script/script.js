function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Name";
    cell2.innerHTML = "Id";
    cell3.innerHTML = "Number";
}

function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
}