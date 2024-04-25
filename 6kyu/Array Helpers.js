class CustomArray extends Array {
    square() {
        return this.map(el => el * el);
    }
    cube(){
        return this.map(el => el ** 3);
    }
    average(){
        if (this.length === 0) {
            return 0;
        }
        let sum = this.reduce((acc, curr) => acc + curr, 0);
        return sum / this.length;
    }
    sum(){
        if (this.length === 0) {
            return 0;
        }
        return  this.reduce((acc, curr) => acc + curr, 0);
    }
    even(){
        return this.filter(el => el % 2 === 0);
    }
    odd(){
        return this.filter(el => el % 2 !== 0);
    }
}
//-------------------------

Object.defineProperty(Array.prototype, 'square', {
    value: function() {
        return this.map(x => x * x);
    },
    writable: true,
    configurable: true
});

Object.defineProperty(Array.prototype, 'cube', {
    value: function() {
        return this.map(x => x ** 3);
    },
    writable: true,
    configurable: true
});

Object.defineProperty(Array.prototype, 'average', {
    value: function() {
        if (this.length === 0) return NaN;
        return this.reduce((acc, curr) => acc + curr, 0) / this.length;
    },
    writable: true,
    configurable: true
});

Object.defineProperty(Array.prototype, 'sum', {
    value: function() {
        return this.reduce((acc, curr) => acc + curr, 0);
    },
    writable: true,
    configurable: true
});

Object.defineProperty(Array.prototype, 'even', {
    value: function() {
        return this.filter(x => x % 2 === 0);
    },
    writable: true,
    configurable: true
});

Object.defineProperty(Array.prototype, 'odd', {
    value: function() {
        return this.filter(x => x % 2 !== 0);
    },
    writable: true,
    configurable: true
});

// В данном коде используется метод Object.defineProperty, который позволяет определить новое свойство,
// или модифицировать существующее, на объекте.
//
// В данном случае, мы используем Object.defineProperty для добавления нового метода square к прототипу объекта Array.
// Этот метод выполняет следующие действия:
//
// Array.prototype: указывает на прототип объектов массивов. Для расширения всех массивов в JavaScript,
//   мы добавляем метод square к прототипу Array.
//
// 'square': это имя нового метода, которое мы добавляем к прототипу.
//
// { value: function() { return this.map(x => x * x); }, writable: true, configurable: true }:
// это объект, который определяет новое свойство. В данном случае:
//
//  value: это функция, которая будет выполнена, когда вызывается метод square. Функция использует метод map,
//  чтобы пройти по каждому элементу массива и вернуть новый массив, в котором каждый элемент возведен в квадрат.
//  writable: true: указывает, что свойство может быть изменено путем присвоения нового значения.
//  configurable: true: указывает, что свойство может быть удалено с помощью оператора delete.
// Таким образом, после выполнения этого кода, все массивы в JavaScript автоматически получат метод square,
// который позволяет получить новый массив, содержащий квадраты исходных элементов массива.
//
//     Аналогично, вы можете использовать Object.defineProperty для добавления других методов, таких как cube(),
//     average(), sum(), even(), odd(), к прототипу Array для расширения функциональности встроенного класса Array.

// Пример использования

let arr = [1, 2, 3, 4, 5];
console.log(arr.square());  // Вывод: [1, 4, 9, 16, 25]
console.log(arr.cube());    // Вывод: [1, 8, 27, 64, 125]
console.log(arr.average()); // Вывод: 3
console.log(arr.sum());     // Вывод: 15
console.log(arr.even());    // Вывод: [2, 4]
console.log(arr.odd());     // Вывод: [1, 3, 5]

let arr2 = new CustomArray(1, 2, 3, 4, 5);
console.log(arr2.square()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr2.cube()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr2.average()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr2.sum()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr2.even()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr2.odd()); // Вывод: [1, 4, 9, 16, 25]