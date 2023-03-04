// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {

    this.read = function () {
        this.firstArg = +prompt('Введите первый аргумент', 0);
        this.secondArg = +prompt('Введите второй аргумент', 0);
    };

    this.sum = function () {
        return this.firstArg + this.secondArg;
    };

    this.mul = function () {
        return this.firstArg * this.secondArg;
    }

};



let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());