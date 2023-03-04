// Вывод односвязного списка
// важность: 5
// Допустим, у нас есть односвязный список(как описано в главе Рекурсия и стек):

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без ?


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};



// решение через рекурсию отрабатывает за 0,088 сек
// function printList(obj) {

//     console.log(obj.value);
//     if (obj.next) {
//         printList(obj.next);
//     }
// }


//решение церез цикл отрабатывает тоже за 0,088 сек. Цикл лучше из-за отсутствия вложенных вызовов функции
function printList(obj) {

    while (obj) {
        console.log(obj.value);
        obj = obj.next;
    }
}


printList(list)

