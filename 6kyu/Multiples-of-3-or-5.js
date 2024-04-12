// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

//-----------------------------------------

// function solution(number){
//     let arr = []
//     for(let i = 0; i < number; i++){
//       if ((i%3===0)&&(i%5===0)){
//         arr.push(i)
//       } else if(i%3===0){
//         arr.push(i)
//       } else if(i%5===0){
//         arr.push(i)
//       }
//       }
//   let res = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
//   },0);
//     return res
//   }

function solution(number){
    let arr = []
    if(number===0) return 0
    for(let i = 1; i < number; i++){
        arr.push(i)
    }
    let newArr =  arr.filter(el=> (el  % 3 === 0) ||  (el  % 5 === 0) )
    return newArr.reduce((s,curr)=>{
        return s + curr
    },0)
}

console.log(solution(0))
    