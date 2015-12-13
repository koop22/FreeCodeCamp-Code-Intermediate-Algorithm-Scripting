/*Bonfire: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the original arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()*/

function diff(arr1, arr2) {
    function arrCompare(item) {
        return !(arr1.indexOf(item) !== -1 && arr2.indexOf(item) !== -1);
    }
    var newArr = [];
    newArr = arr1.concat(arr2);
    return newArr.filter(arrCompare);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);