// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//     P.S.Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ / значение.


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let salaries2 = {
};


function topSalary(obj) {
    let arr = Object.entries(obj);
    let maxSallary = 0;
    let richName = '';

    if (arr.length === 0) return null;

    for (let [name, salary] of arr) {

        if (maxSallary < salary) {
            maxSallary = salary;
            richName = name;
        }
    }

    return richName;

}

console.log(topSalary(salaries));
console.log(topSalary(salaries2));