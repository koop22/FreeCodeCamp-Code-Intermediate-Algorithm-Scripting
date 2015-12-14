/*Bonfire: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.splice()
Array.indexOf()
Array.join()*/

function convert(num) {
    var roman = '',
        givNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        romNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < givNum.length; i++) {
        while (num >= givNum[i]) {
            roman += romNum[i];
            num -= givNum[i];
        }
    }
    return roman;
}

convert(36);