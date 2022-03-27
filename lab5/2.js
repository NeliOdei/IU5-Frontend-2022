/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
    function curry(func) {
        return function f1(...args) {
          if (args.length >= func.length) {
            return func(...args)
          } else {
            return function f2(...moreArgs) {
                newArgs = args.concat(moreArgs)
                return f1(...newArgs)
              }
          }
        }
}

module.exports = curry;
