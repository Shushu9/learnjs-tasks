// Работа с прототипами
// важность: 5
// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода ?

//     let animal = {
//         jumps: null
//     };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };

// alert(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// alert(rabbit.jumps); // ? (2)

// delete animal.jumps;

// alert(rabbit.jumps); // ? (3)
// Должно быть 3 ответа.



// Какие значения показываются в процессе выполнения кода ?

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // ? (1)  true

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2)  null

delete animal.jumps;

console.log(rabbit.jumps); // ? (3)  undefined
// Должно быть 3 ответа.