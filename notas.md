[crashcourse](https://www.youtube.com/watch?v=hdI2bqOjy3c)

Es un lenguage de Alto Nivel, multiparadigma, dinámico con tipos y operadores. Se puede correr en frontend y backend(Node .js)

Se puede hacer codigo que corre en el lado del cliente (en el browser y no en el servidor)

Existen frameworks como React y Electron.

```js
alert("pruebitaaa");    //popup en el browser

console.log("--------Salida en la consola");    //La consola es lo mejot para debugging
console.error("Esto es un error");
console.warn("Esto es un warning");
```

## Variables
Se pueden hacer con 
> var, let, const

var define variables Globales!!
Con let se pueden reasignar variables.

> Solo usar const a menos que este segura de que lo voy a **reasignar**!!!

## Tipos de Datos
-   [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
-   [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type)
-   [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
-   [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects)
-   [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type) (new in ES2015)

```js
const name = 'Gabi';

const age = 20;

const rating = 4.5;

const isCool = true;

const x = null;

const y = undefined;

let z;	//Se define una variable sin asignarla solo con let.

console.log(`Mi nombre es ${nombre} y tengo ${age}`);

```

### Strings

```js
const s = 'Holaa!';

console.log(s.substring(0,4).toUpperCase());

// str to array

console.log(s.split(''));
>>> Array(6) [ "H", "o", "l", "a", "a", "!" ]

console.log(s.split(','));
>>> Array [ "Ho", "aa!" ]
```

### Arreglos

```js
const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const frutas = ['pera', 'platano', 'kiwi', true];

frutas[3] = 'uva';

frutas.push('mango');

frutas.unshift('Frutilla')

console.log(frutas.indexOf('uva'));

frutas.pop();

console.log(frutas);

console.log(Array.isArray(frutas));
```

Array(5) [ 1, 2, 3, 4, 5 ]
4 
Array(5) [ "Frutilla", "pera", "platano", "kiwi", "uva" ]
true

### Objetos

```js
// object litterals

const persona = {
    f_name: 'Gabi',
    apellido: 'Acuña',
    edad: 20,
    hobbies: ['Dibujar', 'Programar'],
    direccion: {
        calle: 'Regina Pacis',
        ciudad: 'Santiago',
        region: 'RM'
    }
}

console.log(persona);
console.log(persona.f_name, persona.apellido);
console.log(persona.hobbies[1]);
console.log(persona.direccion.ciudad);


persona.email = 'gabiacuna@gmail.com' //Agregar un campo al objeto :3
```


Gabi Acuña
Programar
Santiago

* Arreglo de objetos:

```js
const todos = [
    {
        id: 1,
        text: 'Sacar la basura',
        completado: false
    },
    {
        id: 2,
        text: 'Pasear a la princesa',
        completado: false
    },
    {
        id: 3,
        text: 'Organizar cosas U',
        completado: false
    },
]

console.log(todos[1].text);
```

json es un formato de texto

```js
const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

>>>[{"id":1,"text":"Sacar la basura","completado":false},{"id":2,"text":"Pasear a la princesa","completado":false},{"id":3,"text":"Organizar cosas U","completado":false}]
```

Para crear el constructor de un objeto:

```js
function Person(fn, ln, dob) {
    this.first_name = fn;
    this.last_name = ln;
    this,dob = dob;
}
const p1 = new Person('Tom', 'Morales', '9-3-2001');
const p2 = new Person('Gabi', 'Acuña', '4-4-2001');

console.log(p1, p2);
```
---

#### Date

```js
function Person(fn, ln, dob) {
    this.first_name = fn;
    this.last_name = ln;
    this.dob = new Date(dob);
}
const p1 = new Person('Tom', 'Morales', '1995-12-17T00:00');
const p2 = new Person('Gabi', 'Acuña', '2001-04-04T00:00');

console.log(p2.dob);
```

* [Everything You Need to Know About Date in JavaScript - CSS ](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/)

----

Metodos:
Se agregan como si fueran un parametro más :3

```js
this.get_full_name = function () {
        return `${this.first_name} ${this.last_name}`;
    }
console.log(p2.get_full_name());
```


## Iteradores
Usando el array todos creado recien....

```js
for (let i = 0; i < todos.length; i++) {
    console.log(`for: ${todos[i].text}`);    
}

let i = 0;

while (i<10) {
    console.log(`while: ${i}`);
    i++;
}

for(let todo of todos){
    console.log(todo);
}

todos.forEach(function(todo){
    console.log(todo.text);
})
```

iteraciones especificas sobre un arreglo de objetos:

```js
const todo_text = todos.map(function(todo){
    return todo.text;
});

console.log(todo_text);

const todo_done = todos.filter(function(todo) {
    return todo.completado == true;
}).map(function(todo){
    return todo.id;
})

console.log(todo_done);
```

en todo_done, se itera y revisa que completado sea true si esto es así, se hace un map para solo agregar el id al arreglo. Si no se agrega el map, se creara un arreglo con los objetos correspondientes.

## Condicionales

```js
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}

```

>  [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

```js
const x = '20';

if (x === 20) {
    console.log('x es 20');
} else if (typeof x == 'number' && x%2 === 0) {
    console.log('x es un numero par');
} else{
    console.log(`x es ${x} (${typeof x})`);
}
```

* operador ternario:
```js
const color = x > 10? 'red' : 'blue';
```

```js
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```
```js
switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
        
    default:
        console.log('No se de que color es ¬¬');
        break;
}
```

## Funciones
```js
function add_nums(n1 = 0, n2 = 0) {
    return n1 + n2;
}

console.log(add_nums(5));
```

* Arrow function ->

v1:
```js
const add_nums = (n1 = 0, n2 = 0) => {
    return n1 + n2;
}

console.log(add_nums(5));
```

v2:
```js
const add_nums = (n1 = 0, n2 = 0) => n1 + n2;

console.log(add_nums(5));
```

## Clases

Igual a lo mostrado en objetos, pero mas bonito (y viene en nuevas versiones de JS)

```js
class Person{
    constructor(first_name, last_name, dob){
        this.first_name = first_name;
        this.last_name = last_name;
        this.dob = new Date(dob);
    }

    get_birth_year() {
        return this.dob.getFullYear();
    }

    get_full_name() {
        return `${this.first_name} ${this.last_name}`;
    }
}
```


links:

https://mycolor.space/?hex=%238CE6EC&sub=1

https://imagecolorpicker.com/

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

https://www.youtube.com/watch?v=Ttf3CEsEwMQ 
-> 30:49

https://fontawesome.com/v5.15/icons/angrycreative?style=brands
