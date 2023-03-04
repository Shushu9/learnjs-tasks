"use strict";
// Функция в if
// Посмотрите на код. Какой будет результат у вызова на последней строке?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();


// без use strit функция отработает без ошибок и выведет Hello, John. 
//Но с "use strict" будет ошибка функции sayHi не существует за пределами if


let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi();