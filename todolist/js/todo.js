// Define UI Vars
const form = document.querySelector('#todo-form');
const todoList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-todos');
const filter = document.querySelector('#filter');
const todoInput = document.querySelector('#todo');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {

    document.addEventListener('DOMContentLoaded', getTodos);

    form.addEventListener('submit', addTodo);

    todoList.addEventListener('click', removeTodo);

    clearBtn.addEventListener('click', clearTodos);

    filter.addEventListener('keyup', filterTodos);
}

// Get Todos from LS
function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo) {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(todo));
        // Create new link element
        const link = document.createElement('a');

        link.className = 'delete-item secondary-content';

        link.innerHTML = '<i class="fa fa-remove"></i>';


        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        todoList.appendChild(li);
    });
}

// Add Todo
function addTodo(e) {
    if (todoInput.value) {

        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(todoInput.value));
        // Create new link element
        const link = document.createElement('a');


        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        todoList.appendChild(li);

        // Store in LS
        storeTodoInLocalStorage(todoInput.value);

        // Clear input
        todoInput.value = '';

        e.preventDefault();
    } else {
        alert("Failed");
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
            e.target.parentElement.parentElement.remove();

            // Remove from LS
            removeTodoFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove from LS
function removeTodoFromLocalStorage(todoItem) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo, index) {
        if (todoItem.textContent === todo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem('todos', JSON.stringify(todos));
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