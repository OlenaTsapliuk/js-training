// Пример1
// Напишите две функции:
// letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя и логирующий в консоль строку "Привет" + name

// function letMeSeeYourName(callback) {
//     const name = prompt(`Введите имя пользователя`);
   
//     callback(name);
// }
// function greet(name) {
//     console.log(`Привет ${name}`)
// }
// console.log(letMeSeeYourName(greet))



const result = [];

for (var i = 0; i < 5; i++) {
  result[i] = function (i) {
    console.log(i);
  }.bind(this,i)
}

result[0](); // 5, ожидаем 0
result[1](); // 5, ожидаем 1
result[2](); // 5, ожидаем 2
result[3](); // 5, ожидаем 3
result[4](); // 5, ожидаем 4



// const result = [];

// for (let i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i);
//   }
// }

// result[0](); // 5, ожидаем 0
// result[1](); // 5, ожидаем 1
// result[2](); // 5, ожидаем 2
// result[3](); // 5, ожидаем 3
// result[4](); // 5, ожидаем 4