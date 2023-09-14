
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because


function squareSum(numbers){

    const initialValue = 0;
    const sum = numbers.reduce((count, numberValue) => count + Math.pow(numberValue, 2), initialValue);

    return sum;
}