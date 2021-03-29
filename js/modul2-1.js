// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
 

//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   }
//   return 'Доступ запрещен, неверный пароль!';
// }

// console.log(checkPassword('jqueryismyjam'));

// 3
// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   } 
//   if (ordered > available) {
//    return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } 
//   return 'Заказ оформлен, с вами свяжется менеджер';
//   }

// console.log(checkStorage(100, 50));
//   5
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement=fruits[0];
// const secondElement=fruits[1];
// const lastElement =fruits[fruits.length-1];
// console.log(lastElement);

// 8
// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const lastElementIndex=fruits.length-1;
// const lastElement=fruits[lastElementIndex];
//  console.log(lastElementIndex);

// 9
// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
    
// return [array[0], array[array.length-1]];


//     // Пиши код выше этой строки
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// 10
// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
  
//   words=message.split(delimeter);
  
//   // Пиши код выше этой строки
//   return words;
// }
// console.log(splitMessage('лучшее_за_неделю', '_'));

// 11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки

//     const totalPrice = message.split(' ').length*pricePerWord;
//     // const lettersInNamber = letters.length;
  
//     // const total = lettersInNamber * pricePerWord;
  
//   return totalPrice;
//   // Пиши код выше этой строки
// }
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));

// 12
// function slugify(title) {
//   // Пиши код ниже этой строки
 
//     const slug = title.toLowerCase().split(' ').join('-');
//     return slug;
//   // Пиши код выше этой строки
// }
// console.log(slugify('Маcсивы для новичков'));

// 13
const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0, 1);
const nonExtremeEls = fruits.slice(1, 3);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);