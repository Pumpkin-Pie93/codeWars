// var coffeeLimits = function(y,m,d) {
//     // Your code here
//     let m1 = m < 10 ? `0${m}`: `${m}`
//     let d1 = d < 10 ? `0${d}`: `${d}`
//     let y1 = `${y}`
//     let number = +(y1 + d1 + m1)
//     const reg = parseInt(number.toString().substring(2, 6));
//     const dec = parseInt(number.toString().substring(4, 8))
//     return [reg,dec]
//     //return [y1,m1,d1]
//     //return  number
// }
// console.log(coffeeLimits(1950,1,19))
const number = 19500119;
const result = parseInt(number.toString().substring(4, 8));

console.log(result)

const number1 = 19500119;
const result1 = parseInt(number.toString().substring(2, 6));

console.log(result1);