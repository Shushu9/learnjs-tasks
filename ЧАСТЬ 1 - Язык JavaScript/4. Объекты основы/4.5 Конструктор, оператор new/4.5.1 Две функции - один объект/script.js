// Две функции - один объект
// важность: 2
// Возможно ли создать функции A и B, чтобы new A() == new B() ?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert(a == b); // true
// Если да – приведите пример вашего кода.

let c = {};

function A() { return c }
function B() { return c }

let a = new A();
let b = new B();

console.log(a == b); // true