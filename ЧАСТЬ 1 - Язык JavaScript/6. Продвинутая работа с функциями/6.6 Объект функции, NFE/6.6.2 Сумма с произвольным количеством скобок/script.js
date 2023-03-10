// Сумма с произвольным количеством скобок
// важность: 2
// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.


function sum(i) {

    let currSumm = i;

    function func(a) {
        currSumm += a;
        return func;
    }

    func.toString = function () {
        return currSumm;
    };

    return func;
}

console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6)
console.log(sum(6)(-1)(-2)(-3) == 0)
console.log(sum(0)(1)(2)(3)(4)(5) == 15)