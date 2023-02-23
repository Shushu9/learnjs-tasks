// Сколько секунд осталось до завтра?
// важность: 5
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.


function getSecondsToTomorrow() {
    let d = new Date();
    let secToday = (d.getHours() * 60 + d.getMinutes()) * 60 + d.getSeconds();
    let secInADay = 24 * 60 * 60;

    return secInADay - secToday;
}

console.log(getSecondsToTomorrow())

