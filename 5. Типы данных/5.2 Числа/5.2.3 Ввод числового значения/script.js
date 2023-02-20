// Ввод числового значения
// важность: 5
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.


function readNumber() {
    let result;

    do {
        result = +prompt('Введите число', 0);
    } while (!isFinite(result));

    if (result === null || result === '') return null;


    return result;
}


alert(readNumber());