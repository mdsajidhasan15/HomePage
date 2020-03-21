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

document.getElementById("#formGroupExampleInput").addEventListener("click", function() {
    document.getElementById("add-button").innerHTML = inputId('TD[0]');
});
}

// Add Todo
function addTodo(e) {
    if (todoInput.value) {
        storeTodoInLocalStorage(todoInput.value);
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