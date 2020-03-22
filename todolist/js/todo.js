// Define UI Vars
//const addButton = document.querySelector('#add-button');
// const todoList = document.querySelector('.celllection');
// const clearBtn = document.querySelector('.clear-todos');
// const filter = document.querySelector('#filter');
// var todoInput = document.querySelector('#add-button');
// var inputId = document.querySelector('.addInputId');
// var inputName = document.querySelector('.addInputName');
// var inputPriority = document.querySelector('.addInputPriority');
//const todoTable = document.querySelector('.table');


// var todoInput = document.getElementById('add-button');
// var inputId = document.getElementById('input-id');
// var inputName = document.getElementById('input-name');
// var inputPriority = document.getElementById('input-priority');

// Load all event listeners
// function loadEventListeners() {
//     renderList();
//     todoInput.addEventListener('click', addTodo);
// todoList.addEventListener('click', editTodo);
// todoList.addEventListener('click', removeTodo);
// clearBtn.addEventListener('click', clearTodos);
// filter.addEventListener('keyup', filterTodos);
// }


// function renderList() {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

// todos.forEach(function(todo, index) {
//     const td = document.getElementsByClassName('.addInputId');
//     td.className = '.celllection-item';

// });

//todoList.innerHTML = '';

// todos.forEach(function(todo, index) {
//     const li = document.createElement('li');
//     li.className = 'celllection-item';
//     li.appendChild(document.createTextNode(todo));
//     const link = document.createElement('a');

//     link.className = 'edit-item  secomdary-content';
//     link.innerHTML = `<i id='${index}' class="fa fa-edit"></i>`;

//     link.className = 'delete-item secondary-content';
//     link.innerHTML = `<i id='${index}' class="fa fa-remove"></i>`;
//     li.appendChild(link);
//     todoList.appendChild(li);
// });
// }

//Add Todo List

// document.getElementById("#formGroupExampleInput").addEventListener("click", function() {
//     document.getElementById("add-button").innerHTML = inputId('TD[0]');
// });

// function addTodoListItem() {
//     var id = document.getElementById("input-id").value;
//     document.getElementById("id").innerHTML = id;

//     var name = document.getElementById("input-name").value;
//     document.getElementById("name").innerHTML = name;

//     var priority = document.getElementById("input-priority").value;
//     document.getElementById("prority").innerHTML = priority;
// }

// function addTodoListItem() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);

//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);

// console.log(cell1);
// console.log(cell2);
// console.log(cell3);

// const value1 = cell1.innerHTML = inputId.value;
// const value2 = cell2.innerHTML = inputName.value;
// const value3 = cell3.innerHTML = inputPriority.value;

// alert(value1);



// localStorage.setItem(value1, value2, value3);
// localStorage.setItem(value2);
// localStorage.setItem(value3);


// }

// function addTodo() {
//     if (todoInput.value) {
//         storeTodoInLocalStorage(todoInput.value);
//     }
// }
// Add Todo
// function addTodo(e) {
//     if (todoInput.value) {
//         // Store in LS
//         storeTodoInLocalStorage(todoInput.value);
//         renderList();
//         todoInput.value = '';
//         document.getElementById('titleErr').innerHTML = "";
//         e.preventDefault();
//     } else {
//         document.getElementById('titleErr').innerHTML = "*Please give valid input."
//     }
// }
// Store Todo
// function storeTodoInLocalStorage(todo) {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// // Remove Todo
// function removeTodo(e) {
//     if (e.target.parentElement.classList.contains('delete-item')) {
//         if (confirm('Are You Sure?')) {
//             removeTodoFromLocalStorage(e.toElement.id);
//         }
//     }
// }

// function editTodo(e) {
//     e.target.parentElement.classList.contains('edit-item')

//     var name = this.parentElement.getAttribute("id")
//     document.getElementById("name-input").value = name;
// }

// function uppriorityName() {
//     var new_name = document.getElementById("name-input").value
//         // How do I uppriority the global variable "names"?

// }


// // Remove from LS
// function removeTodoFromLocalStorage(index) {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.splice(index, 1);
//     localStorage.setItem('todos', JSON.stringify(todos));
//     renderList();
// }

// // Clear Todos
// function clearTodos() {
//     //todoList.innerHTML = '';

//     // Faster
//     while (todoList.firstChild) {
//         todoList.removeChild(todoList.firstChild);
//     }


//     // Clear from LS
//     clearTodosFromLocalStorage();
// }

// // Clear Todos from LS
// function clearTodosFromLocalStorage() {
//     localStorage.clear();
// }

// // Filter Todos
// function filterTodos(e) {
//     const text = e.target.value.toLowerCase();

//     document.querySelectorAll('.celllection-item').forEach(function(todo) {
//         const item = todo.firstChild.textContent;
//         if (item.toLowerCase().indexOf(text) != -1) {
//             todo.style.display = 'block';
//         } else {
//             todo.style.display = 'none';
//         }
//     });
// }

// function init() {
//     // Load all event listeners
//     loadEventListeners();
// }

// init();

var arr = new Array();

function addData() {
    getData();
    arr.push({
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        priority: document.getElementById("priority").value
    });

    localStorage.setItem("localData", JSON.stringify([...arr]));
    showData();
}

function getData() {
    var str = localStorage.getItem("localData");
    if (str != null) {
        arr = [...JSON.parse(str)];
    }
}

function deleteData() {
    localStorage.clear();
}

function showData() {
    getData()
    var table = document.getElementById("myTable");
    var x = table.rows.length;
    while (--x) {
        table.deleteRow(x);
    }

    for (i = 0; i < arr.length; i++) {
        var row = table.insertRow();

        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();

        cell1.innerHTML = arr[i].id;
        cell2.innerHTML = arr[i].name;
        cell3.innerHTML = arr[i].priority;
    }

}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function filterFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var id = document.getElementById("id_row" + no);
    var name = document.getElementById("name_row" + no);
    var priority = document.getElementById("priority_row" + no);

    var id_data = id.innerHTML;
    var name_data = name.innerHTML;
    var priority_data = priority.innerHTML;

    id.innerHTML = "<input type='text' id='id" + no + "' value='" + id_data + "'>";
    name.innerHTML = "<input type='text' id='name" + no + "' value='" + name_data + "'>";
    priority.innerHTML = "<input type='text' id='priority" + no + "' value='" + priority_data + "'>";
}

function save_row(no) {
    var id_val = document.getElementById("id" + no).value;
    var name_val = document.getElementById("name" + no).value;
    var priority_val = document.getElementById("priority" + no).value;

    document.getElementById("id" + no).innerHTML = id_val;
    document.getElementById("name" + no).innerHTML = name_val;
    document.getElementById("priority" + no).innerHTML = priority_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}