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

// Пример использования
let arr = [1, 2, 3, 4, 5];
console.log(arr.square());  // Вывод: [1, 4, 9, 16, 25]
console.log(arr.cube());    // Вывод: [1, 8, 27, 64, 125]
console.log(arr.average()); // Вывод: 3
console.log(arr.sum());     // Вывод: 15
console.log(arr.even());    // Вывод: [2, 4]
console.log(arr.odd());     // Вывод: [1, 3, 5]

let arr = new CustomArray(1, 2, 3, 4, 5);
console.log(arr.square()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr.cube()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr.average()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr.sum()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr.even()); // Вывод: [1, 4, 9, 16, 25]
console.log(arr.odd()); // Вывод: [1, 4, 9, 16, 25]