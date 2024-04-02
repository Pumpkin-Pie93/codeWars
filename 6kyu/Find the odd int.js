function findOdd(A) {
    //happy coding!
    const unicNum = Array.from(new Set(A))

    for (let i = 0; i < unicNum.length; i++) {
        let sum = A.filter(el => el === unicNum[i])
        if (A.length === 1) {
            return A[0]
        } else if (sum.length % 2 !== 0) {
            return unicNum[i]
        }
    }
}

console.log(findOdd([1,1,2]))
