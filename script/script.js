var container = document.getElementById("myTable");
var newTbody = document.createElement('tbody');
newTbody.setAttribute('id', 'table-body');

var tableHeader = ["Name", "ID", "Number"];
var tableData = [
    {
        Name: "Student 1",
        ID: "1",
        Number: 1
    },
    {
        Name: "Student 2",
        ID: "2",
        Number: 2
    },
    {
        Name: "Student 3",
        ID: "3",
        Number: 3
    }
];
var counter = 4;
function initilizeTableHeader() {
    tableHeader.forEach(elem => {
        var x = document.createElement('th');
        x.classList.add('table-header');
        var y = document.createTextNode(elem);
        x.appendChild(y);
        container.appendChild(x);
    });

    initilizeData();
}

function initilizeData() {
    tableData.forEach(elem => {
        var newTR = document.createElement('tr');
        var newName = document.createElement('td');
        var newId = document.createElement('td');
        var newNumber = document.createElement('td');
        var x = document.createTextNode(elem.Name);
        var y = document.createTextNode(elem.ID);
        var z = document.createTextNode(elem.Number);

        newName.appendChild(x);
        newId.appendChild(y);
        newNumber.appendChild(z);

        newTR.appendChild(newName);
        newTR.appendChild(newId);
        newTR.appendChild(newNumber);

        newTbody.appendChild(newTR);
    });

    container.appendChild(newTbody);
}

function myCreateFunction() {
    newTbody.innerHTML = ``;
    tableData.push({
        Name: `Student ${counter}`,
        ID: `${counter}`,
        Number: counter
    });
    initilizeData();
    counter++;
}

initilizeTableHeader();