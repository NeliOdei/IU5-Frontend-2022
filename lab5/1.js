/**
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */
<<<<<<< HEAD
 Array.prototype.myMap = function(f) {
    return this.reduce(function(previousValue, currentValue) {
        previousValue.push(f(currentValue));
        return previousValue;
    }, []);
}
=======
>>>>>>> d28ce69b730b5df28be6bcceec5b89049029a70f
