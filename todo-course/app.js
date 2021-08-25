// Selectores

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners

todoButton.addEventListener('click', addTodo);

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