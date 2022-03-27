/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    let arrFrom = arr.map(item => item.from);
    let arrTo = arr.map(item => item.to);
    let arr2=[];
    let x=0;
    for (let i=0; i<arrFrom.length; i++){
        if (!arrTo.includes(arrFrom[i])) {
            arr2.push(arr[i]);
            x=arrTo[i];
        }
    }
for (let i=0; i<arrFrom.length; i++){
    for (let i=0; i<arrFrom.length; i++){
        if (x==arrFrom[i]) {
            arr2.push(arr[i]);
            x=arrTo[i];
            }
    }
}
return arr2;
}

module.exports = makeRoute;
