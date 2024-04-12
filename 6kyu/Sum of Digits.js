// function digitalRoot(n) {
//     // ...
//     let res = 0
//     let sumFunc = (num) => num.toString().split('').reduce(
//         (accumulator, currentValue) => res = accumulator + Number(currentValue),
//         0,
//     )
//     sumFunc(n)
//     do{
//         sumFunc(res)
//
//     } while(res >= 10)
//        return res
// }

// console.log(digitalRoot(456)) // 6

//----------------------------------------

//
// function _digital_root(n) {
//   if (n < 10) return n;
//
//   return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// }
//
// console.log(digital_root(4536)) // 6

// function digital_root(n) {
//   let num=  n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0)
//     if (n < 10) return n;
//     return digital_root(num);
// }
//
// console.log(digital_root(4536)) // 6