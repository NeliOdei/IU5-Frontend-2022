/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let arr1=[];
    let arr2=[];
    let arr3=arr;
    let arr4=[];
    for (let i = 0; i < arr.length; i++){
        tempWord = arr[i].toLowerCase().split('').sort().join('');
        if (arr2.includes(tempWord)==false){
            arr2.push(tempWord);
            arr1.push(arr[i]);
            for (let j = i+1; j < arr.length; j++){
                if(arr[j].toLowerCase().split('').sort().join('')==tempWord){
                    arr1.push(arr[j]);
                    arr2.push(arr[j]);
                }
            }
            arr4.push(arr1)
            arr1 = [];
        }

    }
    return(arr4)
}

module.exports = getAnagramms;
