function digitalRoot(n) {
    // ...
    let res = 0
    let sumFunc = (num) => num.toString().split('').reduce(
        (accumulator, currentValue) => res = accumulator + Number(currentValue),
        0,
    )
    sumFunc(n)
    do{
        sumFunc(res)

    } while(res >= 10)
       return res
}

console.log(digitalRoot(456)) // 6
