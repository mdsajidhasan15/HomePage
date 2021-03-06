// Define UI Vars
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-todos');
const filter = document.querySelector('#filter');
const todoInput = document.querySelector('#todo');

// Load all event listeners
function loadEventListeners() {
    renderList();
    addButton.addEventListener('click', addTodo);
    todoList.addEventListener('click', removeTodo);
    clearBtn.addEventListener('click', clearTodos);
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
        document.getElementById('titleErr').innerHTML = "";
        e.preventDefault();
    } else {
        document.getElementById('titleErr').innerHTML = "*Please give valid input."
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

function init() {
    // Load all event listeners
    loadEventListeners();
}

init();