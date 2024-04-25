function spinWords(string){
    let arr = string.split(' ')
    return arr.map((word)=> word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
}

console.log(spinWords("Hey fellow warriors"))