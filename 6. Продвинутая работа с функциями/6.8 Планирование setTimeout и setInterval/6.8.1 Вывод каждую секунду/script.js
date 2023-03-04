// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.


function printNumbers(from, to) {

    let i = from;
    let timer = setInterval(function () {
        if (i == to) {
            clearInterval(timer);
        }

        console.log(i);
        i++
    }, 1000);

}



printNumbers(6, 9);