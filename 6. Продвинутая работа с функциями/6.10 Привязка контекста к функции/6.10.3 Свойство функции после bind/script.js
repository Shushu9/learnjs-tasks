// Свойство функции после bind
// важность: 5
// В свойство функции записано значение.Изменится ли оно после применения bind ? Обоснуйте ответ.

// function sayHi() {
//     alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//     name: "Вася"
// });

// alert(bound.test); // что выведет? почему?



function sayHi() {
    console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log(bound.test); // что выведет?  --  undefined почему? -- у объекта bound нет свойства test