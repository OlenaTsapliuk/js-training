// Пример1
// Напишите две функции:
// letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя и логирующий в консоль строку "Привет" + name

function letMeSeeYourName(callback) {
    const name = prompt(`Введите имя пользователя`);
   
    callback(name);
}
function greet(name) {
    console.log(`Привет ${name}`)
}
console.log(letMeSeeYourName(greet))