//---------Факториал ---------------------

// const factorial = (n) =>{
//     let x = 1
//     let  mult = n
//     while ((n - x ) !== 1){
//         console.log('x :' + x)
//         console.log('mult:' + mult)
//         mult *= n-x
//         x += 1
//     }
// return mult
// }
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
//
// console.log(factorial(5))

// ----------------------------- Фибоначчм --------------------------

// function fib(n) {
//     // Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
//     let res = 0 // 1 1
//     let x = []  // 0 1 2
//     while(n > x.length){
//         if(x.length === 0){
//             res += 1
//             x.push(1)
//         } else
//         if(x.length === 1){
//             res += 1
//             x.push(1)
//         }
//      else {
//             let length = x.length;
//             res = x[length - 1] + x[length - 2];
//             x.push(res)}
//     }
//     return res
//     /* ваш код */ }
//
// function fib1(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
//
// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

//---------------------- Вычислить сумму чисел до данного -------------

//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//
// Например:

//sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

//
// function sumToByCycle(n) {
//     console.time('Cycle'); // Начало отсчета времени
//
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum += i
//     }
//     console.timeEnd('Cycle'); // Начало отсчета времени
//     return sum
// }
//
// function sumToByRecurse(n) {
//     let res = n > 1 ? n + sumToByRecurse(n - 1) : n
//     return res
// }
//
//
// // Решение по формуле: sumTo(n) = n*(n+1)/2:
// function sumToByForm(n) {
//     console.time('Form'); // Начало отсчета времени
//
//     let res = n * (n + 1) / 2
//     console.timeEnd('Form'); // Начало отсчета времени
//
//     return res
// }
//
//
// // Тестируем функцию и отображаем время выполнения
//
// console.log(sumToByCycle(10))
// console.log(sumToByRecurse(10))
// console.log(sumToByForm(10))


// -----------------------  Call, apply, bind ----------------------

// bind (не выполняет функцию, возвращает другую функцию с навсегда заданным контекстом):

// function foo() {
//     console.log(this.name);
// }
//
// let a = { name: 'Dima' };
// let b = { name: 'Viktor' };
//
// const bindedFooA = foo.bind(a);
// const bindedFooB = foo.bind(b);
//
// console.log(bindedFooA()); // 'Dima'
// console.log(bindedFooB()); // 'Viktor'

// bind* более сложный пример с параметрами:

//     function foo(age, city) {
//         console.log(`${this.name}, ${age}, ${city}`);
//     }
//
// let a = { name: 'Dima' };
// let b = { name: 'Viktor' };
//
// const bindedFooA = foo.bind(a, 30); // a => bind {}
// const bindedFooB = foo.bind(b, 18);
//
// bindedFooA('Tbilisi'); // Dima, 30, Tbilisi
// bindedFooB('Minsk'); // 'Viktor, 18, Minsk
//
// // apply\call (сразу выполняют функцию, разница двух функций в том,
// // как передавать параметры...    apply - array, call - comma (запятая))
//
// function _foo(age, city) {
//     console.log(`this.name, ${age}, ${city}`)
// }
//
//
// let sca = { name: 'Dima' }
// let scb = { name: 'Viktor' }
//
//
// _foo.apply(sca, [31, 'Tbilisi'])
// _foo.call(scb, 18, 'Minsk')
//

// -------------------  map, filter, reduce -----------------------

// map
//
//
// map возвращает НОВЫЙ массив.
// map нужен, чтобы из массива, в котором содержаться элементы в оригинальном виде, получить массив той же длины,
// который сожержит "новые" элементы, полученные на основе элементов старого массива:

// ['1', '2', '3'].map((el) => +el) // массив строк преобразовываем в массив чисел

// let arr = [18, 20, 12].map((age) => {
//     if (age >= 18) {
//         return { age: age, adult: true };
//     } else {
//         return { age: age, adult: false };
//     }
// });
//
// console.log(arr);
// из массива чисел получаем массив объектов, с полями:
// age и adult (взрослый): true\false в зависимости от того, возраст >= 18 или нет

// -------------------filter --------------------

// filter возвращает НОВЫЙ массив.
// filter нужен, чтобы получить новый отфильтрованный массив, в котором будет меньше элементов,
// чем в исходном, потому что мы фильтруем исходный, убираем ненужное:

// ['Minsk', 'Moscow', '', '', 'London', ''].filter( (el) => el !== '');
// пропускам в результирующий массив не пустые строки

// let arr = [{age: 18, sex: 'f', name: 'Sveta'}, {age: 17, sex: 'f', name: 'Sashka'}, {age: 19, sex: 'm', name: 'Andrew'}]
//     let newArr = arr.filter( (person) => {
//     return person.age >= 18 && person.sex === 'f';
// })
// console.log(newArr)
// пропускаем на вечеринку только тех, кто девочка и кому 18+}


// ---------------- reducer ------------------------

// reducer пробегается по всему массиву и на выход выдаёт какое-то одно обобщённое значение.
// Это может быть как новый массив, так и простое значение примитив или объект:
//
//    let res =  ['Minsk', 'Moscow', '', '', 'London', '']
//     .reduce((acc, el) => {
//         if (el !== '') acc++
//         return acc
//     }, 0) // подсчитываем, сколько у нас в массиве не пустых строк
//
// console.log('res :'+ res)
//
//     let res2 = [
//     { age: 18, sex: 'f', name: 'Sveta' },
//         { age: 17, sex: 'f', name: 'Sashka' },
//         { age: 19, sex: 'm', name: 'Andrew' }
//     ].reduce((acc, person) => {
//     if (person.age >= 18 && person.sex === 'f') {
//         acc.push(person)
//     }
//     return acc
// }, [])
// // на выходе получаем новый массив, состоящий из людей, кто девочка и кому 18+ (но лучше эту задачу решать с помощью filter,
// // но и так можно)
//
// console.log('res2________ :'+ res2[0].name)
//
//    let res3 =  [1, 4, 6, 66, -12].reduce((acc, number) => {
//     acc += number
//     return acc
// }, 0)
// console.log('res3________ :'+ res3)

// подсчёт суммы всех чисел в массиве


// --------------------Замыкание: counter-------------------


// function makeCounter() {
//     var currentCount = 1
//     return function () {
//         // (**)
//         return currentCount++
//     }
// }
//
//
// var counter = makeCounter() // (*)


// каждый вызов увеличивает счётчик и возвращает результат
// alert(counter()) // 1
// alert(counter()) // 2
// alert(counter()) // 3
// console.log(counter())
// console.log(counter())
// console.log(counter())
//
// // создать другой счётчик, он будет независим от первого
// var counter2 = makeCounter()
// console.log('c2_____  ' + counter2())

// alert(counter2()) // 1


// --------------- Наследование, пример на class\extends --------

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     walk() {
//         console.log('I walk: ' + this.name)
//     }
//     eat() {
//         console.log('I can eat')
//     }
// }
//
//
// class Rabbit extends Animal {
//     walk() {
//         super.walk()
//         console.log('...and jump!')
//     }
// }
//
//
// var rabbit = new Rabbit('Bunny')
// console.log(rabbit.walk())
// console.log(rabbit.eat())


//  ------------------------  Промисификация, setInterval, setTimeout --------------------------
//
// doItAfter(2).then(() => console.log())
//
//
// function doItAfter(seconds) {
//     let promise = new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve()
//         }, seconds * 1000)
//     })
//     return promise
// }

//
// function createIncrement  (){
//     let count = 0
//     function increment(){
//         return count++
//     }
//     let message = `count = ${count}`
//     function log(){
//     console.log(message)
//     }
//     return[increment,log]
// }
//
// let [increment,log] = createIncrement()
//
// console.log(increment)
// // console.log(increment())
// // console.log(increment())
// console.log(log())

// function reverseString(str) {
//     const regex = /[^a-zA-Z0-9\s]/g
//     let newStr =  str.replace(regex,'').split("").reverse().join("")
//     return newStr.toLowerCase() === str.toLowerCase().replace(regex,'');
// }
// // function reverseString(str) {
// //     // let strCopy = str.split('')
// //     let strCopySplitted =  str.toLowerCase().split("") // []
// //     const newStrMiddleIndex = Math.floor(strCopySplitted.length / 2) // middle
// //     for (let i = 0; i < newStrMiddleIndex; i++){
// //         if(strCopySplitted[i] !== strCopySplitted[strCopySplitted.length -1-i]) return false
// //     }
// //     return true
// // }
// //
// console.log(reverseString("34543"));
// console.log(reverseString("345431"));
// console.log(reverseString("Foorkkroof"));
// console.log(reverseString("Foork k_r?oof"));

// const str = 'Hello, 123!';
// const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '');
// console.log(cleanStr); // Выведет: "Hello123"
//
//
// function removeDupes(str) {
//  let stringArr = str.split('');
//  return stringArr.reduce((arr, el) => {
//   if (!arr.includes(el)) {
//    arr.push(el);
//   }
//   return arr;
//  }, []).join('');
// }
//
// // function removeDupes2  (str) {
// //     let newSt = new Set(str)
// //   return [...newSt].join('')
// // }
//
// console.log(removeDupes('asdasd'))
// console.log(removeDupes(''))
// console.log(removeDupes('sdxSDX'))
// console.log(removeDupes('asd111111asd'))

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'numberOfItems' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndices
 *  3. INTEGER_ARRAY endIndices
 */

//  let checkEnd = (s) =>{
//   while(s[s.length -1] === 'b'){
//    s = s.slice(0,s.length -1)
//   }
//   return s
//  }
// let str = 'aabbb'
// console.log(checkEnd(str))
//
// function numberOfItems(s, startIndices, endIndices) {
//     // Write your code here
//     let arr = []
//     let checkStart = (s) => {
//         while (s[0] === '*') {
//             s = s.substring(1)
//         }
//         return s
//     }
//     let checkEnd = (s) => {
//         while (s[s.length - 1] === '*') {
//             s = s.slice(0, s.length - 1)
//         }
//         return s
//     }
//     let newStr
//     for (let i = 0; i < startIndices.length; i++) {
//         newStr = s.substring(startIndices[i] - 1, endIndices[i]) // [1,5] [1,4]
//         newStr = checkStart(newStr)
//         newStr = checkEnd(newStr)
//         newStr = newStr.replaceAll('|', '')
//         console.log('for________:' + newStr)
//         arr.push(newStr.length)
//     }
//
//     console.log('replace________:' + newStr)
//     return arr
//
// }
//
// console.log(numberOfItems('*|**|*|', [1, 2], [7, 5]))
//
//  function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//   const s = readLine();
//
//   const startIndicesCount = parseInt(readLine().trim(), 10);
//
//   let startIndices = [];
//
//   for (let i = 0; i < startIndicesCount; i++) {
//    const startIndicesItem = parseInt(readLine().trim(), 10);
//    startIndices.push(startIndicesItem);
//   }
//
//   const endIndicesCount = parseInt(readLine().trim(), 10);
//
//   let endIndices = [];
//
//   for (let i = 0; i < endIndicesCount; i++) {
//    const endIndicesItem = parseInt(readLine().trim(), 10);
//    endIndices.push(endIndicesItem);
//   }
//
//   const result = numberOfItems(s, startIndices, endIndices);
//
//   ws.write(result.join('\n') + '\n');
//
//   ws.end();
//  }

//-----------------------------------
//Your Amazonian team is responsible for maintaining a monetary transaction service.
// The transactions are tracked in a log file.
//A log file is provided as a string array where each entry represents a transaction to service.
// Each transaction consists of:
//sender_user_id
//:  Unique identifier for the user that initiated the transaction.  It consists of only digits with at most 9 digits.
//recipient_user_id:  Unique identifier for the user that is receiving the transaction.
// It consists of only digits with at most 9 digits.
//amount_of_transaction
//:  The amount of the transaction.  It consists of only digits with at most 9 digits.
//exs:
// logs = ["88 99 200", "88 99 300", "99 32 100", " 12 12 15"]
// threshold = 2
//The transactions count for each user, regardless of role are:
//ID     Transactions
// --     ------------
// 99     3
// 88     2
// 12     1
// 32     1
// There are two users with at least


// function processLogs(logs, threshold) {
//  // Write your code here
//
// }
// function main() {
//  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//  const logsCount = parseInt(readLine().trim(), 10);
//
//  let logs = [];
//
//  for (let i = 0; i < logsCount; i++) {
//   const logsItem = readLine();
//   logs.push(logsItem);
//  }
//
//  const threshold = parseInt(readLine().trim(), 10);
//
//  const result = processLogs(logs, threshold);
//
//  ws.write(result.join('\n') + '\n');
//
//  ws.end();
// }


