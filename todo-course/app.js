// Selectores

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOp = document.querySelector('.filter-todo');

// Event Listeners

document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck); 
filterOp.addEventListener('click', filterTodo);

// Funciones

function addTodo(event) {
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // add todo to local storage
    saveLocalTodos(todoInput.value);

    // check button
    const compBut = document.createElement('button');
    compBut.innerHTML = '<i class="fas fa-check"></i>';
    compBut.classList.add('complete-btn');
    todoDiv.appendChild(compBut);

    // trash but
    const trashbut = document.createElement('button');
    trashbut.innerHTML = '<i class="fas fa-trash"></i>';
    trashbut.classList.add('trash-btn');
    todoDiv.appendChild(trashbut);

    // ahora lo agregamos al ul
    todoList.appendChild(todoDiv);
    //limpiar el input
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;

    // Delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    // Check todo
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';    // pk asi lo pusimos en el css
                break;
            case 'done':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'falta':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            default:
                todo.style.display = 'flex';
                break;
        }
    })
    
}

// Todo lo relacionado con guardar los todos :3 :

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;

    if (localStorage.getItem('todos') == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach( function(todo){
        //Todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        // check button
        const compBut = document.createElement('button');
        compBut.innerHTML = '<i class="fas fa-check"></i>';
        compBut.classList.add('complete-btn');
        todoDiv.appendChild(compBut);

        // trash but
        const trashbut = document.createElement('button');
        trashbut.innerHTML = '<i class="fas fa-trash"></i>';
        trashbut.classList.add('trash-btn');
        todoDiv.appendChild(trashbut);

        // ahora lo agregamos al ul
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    let todos;

    if (localStorage.getItem('todos') == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoTxt = todo.children[0].innerText;
    
    const i = todos.indexOf(todoTxt);

    todos.splice(i, 1);
    
    localStorage.setItem('todos', JSON.stringify(todos));
}