// function SubstringTest(str1)
// {
//   let arr = []
// for( let i = 0; i < str1.length -1; i++) {
//   arr.push(str1[i] + str1[i +1])
  
// }
//     return arr
// }
// SubstringTest('jsjxll')

function SubstringTest(str1,str2)
{
    let count = 0
  let arr = []
for( let i = 0; i < str1.length -1; i++) {
  arr.push(str1[i] + str1[i +1])
  }
    for (let j = 0; j < arr.length; j++) {
        if(str2.includes(arr[j])){
     count ++   
    } 
    }
return count !==0? true: false
}
SubstringTest('jsjxll','lalksjx')