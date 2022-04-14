/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add)
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

<<<<<<< HEAD
 function memoize(func) {
    result = NaN;
    n1 = NaN;
    cache = false;
return function(n) {
    if (n == n1) {
       cache = true;
        return { cache:  cache, result: result }
    }
    else {
        cache = false;
        n1 = n;
        result = func(n);
        return { cache: cache, result: result }
    }
}

}
=======
function memoize(func) {
    //code here
}

>>>>>>> d28ce69b730b5df28be6bcceec5b89049029a70f
module.exports = memoize;
