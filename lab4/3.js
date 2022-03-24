/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
const spl = str.split('');
let i=0;
str="";
while (i<spl.length){
if (spl[i]!=spl[i-1]){
    str+=spl[i];
}
    let x =1;
    while (spl[i]==spl[i+1]){
        x+=1;
        i+=1;
    }
    if (x!=1){
    str+=x;
    }
i+=1;
}
return str
}

module.exports = rle;
