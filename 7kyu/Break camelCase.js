



// function solution(string) {
    // for(let i = 0; i < string.length; i++){
    //     console.log(string[i].match(/[A-Z]/g))
    //     if(string[i].match(/[A-Z]/g)) {
    //         string.replace(`${string[i]}`, ` ${string[i]}`) 
    //     }
//     for(let i = 0; i < string.length; i++){
//         let letter = string[i].match(/[A-Z]/g)
//         console.log(letter);
//             string.replace(`${letter}`, ` ${letter}`) 
//         }
// return string
//     }
// solution("camelCasingTest")

function solution(string) {
  let letter = string.split('').map(l => l.match(/[A-Z]/g)?l.replace(`${l}`, ` ${l}`): l).join('')
 return letter
    }
solution("camelCasingTest")

