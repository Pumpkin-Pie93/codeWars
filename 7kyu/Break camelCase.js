



function solution(string) {
  let letter = string.split('').map(l => l.match(/[A-Z]/g)?l.replace(`${l}`, ` ${l}`): l).join('')
 return letter
    }
solution("camelCasingTest")

