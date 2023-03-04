// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.




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



// решение через рекурсию // переставил console.log и все идеально работает
// function printReverseList(obj) {
//     if (obj.next) {
//         printList(obj.next);
//     }

//     console.log(obj.value);
// }


function printReverseList(obj) {
    let arr = [];
    let curr = obj;

    while (curr) {
        arr.push(curr.value);
        curr = curr.next;
    }

    arr.reverse();
    for (let item of arr) {
        console.log(item);
    }
}

printReverseList(list) // 