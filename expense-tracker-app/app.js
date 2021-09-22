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

    // get tab from id
    const tableRef = document.getElementById('exp-table');
    
    const newExp = tableRef.insertRow(1);

    let newNameCell = newExp.insertCell(0);
    const nameCell = nameInput.value;
    let newTextName1 = document.createTextNode(nameCell);
    newNameCell.appendChild(newTextName1);

    let newDateCell = newExp.insertCell(1);
    const dateCell = dateInput.value;
    let newTextName2 = document.createTextNode(dateCell);
    newDateCell.appendChild(newTextName2);
    
    let newNumCell = newExp.insertCell(2);
    const numCell = numInput.value;
    let newTextName3 = document.createTextNode(numCell);
    newNumCell.appendChild(newTextName3);

    // Limpiar los inputsss
    document.getElementById('in1').value = "";
    document.getElementById('in2').value = "";
    document.getElementById('in3').value = "";

    
}