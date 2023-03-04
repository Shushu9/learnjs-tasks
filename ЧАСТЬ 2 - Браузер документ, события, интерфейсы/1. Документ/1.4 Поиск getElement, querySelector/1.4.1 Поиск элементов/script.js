// Поиск элементов
// важность: 4
// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.



let ageTable = document.getElementById('age-table');
let labels = ageTable.querySelectorAll('label');
let firstTd = ageTable.querySelector('td');
let searchForm = document.getElementsByName('search')[0];
let firstInput = searchForm.querySelector('input');
let lastInput = searchForm.querySelectorAll('input');
lastInput = lastInput[1]


console.log(ageTable)
console.log(labels)
console.log(firstTd)
console.log(searchForm)
console.log(firstInput)
console.log(lastInput)
// console.log(ageTable)



