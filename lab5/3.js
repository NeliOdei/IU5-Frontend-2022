/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b2})() -> 3
 */

<<<<<<< HEAD
 function customBind(f, context) {
    return (...args) => f.apply(context, args);
  }

=======
function customBind(f, context) {
    //code here
}
>>>>>>> d28ce69b730b5df28be6bcceec5b89049029a70f

module.exports = customBind;
