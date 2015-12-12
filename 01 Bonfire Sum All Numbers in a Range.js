/*Bonfire: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()*/

function sumAll(arr) {
    var elem1 = Math.min.apply(null, arr),
        elem2 = Math.max.apply(null, arr),
        newArr = [];
    for (i = elem1; i <= elem2; i++) {
        newArr[i] = i;
    }
    var result = newArr.reduce(function (sum, current) {
        return sum + current;
    });
    return result;
}

console.log(sumAll([1, 4]));