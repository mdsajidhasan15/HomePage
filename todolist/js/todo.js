// Define UI Vars
const form = document.querySelector('#todo-form');
const todoList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-todos');
const filter = document.querySelector('#filter');
const todoInput = document.querySelector('#todo');
const submitBtn = document.querySelector('.btn');

// Load all event listeners
function loadEventListeners() {
    renderList();
    form.addEventListener('submit', addTodo);
    todoList.addEventListener('click', removeTodo);
    clearBtn.addEventListener('click', clearTodos);
    submitBtn.addEventListener('click', alertMassage);

    // filter.addEventListener('keyup', filterTodos);
}

function renderList() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todoList.innerHTML = '';

    todos.forEach(function(todo, index) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(todo));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = `<i id='${index}' class="fa fa-remove"></i>`;
        li.appendChild(link);
        todoList.appendChild(li);
    });
}

// Add Todo
function addTodo(e) {
    if (todoInput.value) {
        // Store in LS
        storeTodoInLocalStorage(todoInput.value);
        renderList();
        todoInput.value = '';
        e.preventDefault();
    } else {

        //alertMassage();

        //alert-danger
        //alert("Failed");


        function validation() {
            if (document.myform.username.value == "") {
                document.getElementsByClassName('alert-danger').innerHTML = "*Please enter a todo";
            }
        }
    }

    // Store Todo
    function storeTodoInLocalStorage(todo) {
        let todos;
        if (localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // Remove Todo
    function removeTodo(e) {
        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are You Sure?')) {
                removeTodoFromLocalStorage(e.toElement.id);
            }
        }
    }

    // Remove from LS
    function removeTodoFromLocalStorage(index) {
        let todos;
        if (localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderList();
    }

    // Clear Todos
    function clearTodos() {
        //todoList.innerHTML = '';

        // Faster
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }

        // https://jsperf.com/innerhtml-vs-removechild

        // Clear from LS
        clearTodosFromLocalStorage();
    }

    // Clear Todos from LS
    function clearTodosFromLocalStorage() {
        localStorage.clear();
    }

    // Filter Todos
    function filterTodos(e) {
        const text = e.target.value.toLowerCase();

        document.querySelectorAll('.collection-item').forEach(function(todo) {
            const item = todo.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                todo.style.display = 'block';
            } else {
                todo.style.display = 'none';
            }
        });
    }

    function checkempty(form) {
        if (form.name.value) {

            alert("Name cannot be empty\n");
            return false;
        } else {
            alert("Your response has been recorded\n");
            return true;
        }
    }


    function init() {
        // Load all event listeners
        loadEventListeners();
    }

    init();

    function alertMassage() {


        if (submitBtn == null) {
            document.getElementsByClassName("alert-danger").innerHTML = "Please filup your todo!";
        } else {
            document.getElementsByClassName("alert-danger").innerHTML = "Todo added";
        }

    }