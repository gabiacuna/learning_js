// Selectores

const expInput = document.querySelector('.input-button');
const nameInput = document.querySelector('.name-input');
const dateInput = document.querySelector('.date-input');
const numInput = document.querySelector('.num-input');
// Event Listeners

expInput.addEventListener('click', addExpence);
// Funciones

function addExpence(event) {
    event.preventDefault();

    // exp div
    const expDiv = document.createElement('div');
    expDiv.classList.add('exp');

    // create tab element
    const tableRef = document.getElementById('exp-table');
    
    const newExp = tableRef.insertRow(0);
    
    newExp.innerText = nameInput.value;
    
    // Agregar la fila a la tabla
    addRow('my-table');
}