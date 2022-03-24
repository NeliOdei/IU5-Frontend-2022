/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
let str = arr.join(',');
str=str.replace(/,/g , " ");
var arr1 = str.split(' ');
for (let i=0; i<arr1.length; i++){
    if ((parseFloat(arr1[i])==parseFloat(arr1[i]))){ /* NaN не может быть равен NaN*/
    arr1[i] = +arr1[i];
    }
}
arr1 = arr1.filter(Boolean)
 return arr1;
}

module.exports = get1DArray;
