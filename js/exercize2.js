// 10-20
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Пиши код ниже этой строки
//   const totalPrice = orderedQuantity*pricePerItem;
   
//   // Пиши код выше этой строки
//   return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));
 
// #12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Пиши код ниже этой строки
//   let totalPrice=orderedQuantity*pricePerDroid+deliveryFee;
//   const message=`Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//   // Пиши код выше этой строки
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// #13
// function isAdult(age) {
//   // Пиши код ниже этой строки
//   const passed =age>=18;

//   // Пиши код выше этой строки
//   return passed;
// }
// console.log(isAdult(20));

// #
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
//   const isMatch = (password===SAVED_PASSWORD);

//   // Пиши код выше этой строки
//   return isMatch;
// }
// console.log(isValidPassword('jqueryismyjam'));

// #16
// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if (ordered>available) {
//     message = 'На складе недостаточно товаров!';
   
//     }
// else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//     }
    
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(checkStorage(100, 50));

// #18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//         message = 'Недостаточно средств на счету!';
//     }
//     else {
//         balance = customerCredits - totalPrice;
//         message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${balance} кредитов'`;
//     }
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(makeTransaction(5000, 10, 8000));


// #19
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password===null) { // Дополни эту строку
    message =  'Отменено пользователем!';
  } else if (password===ADMIN_PASSWORD) { // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}
console.log(checkPassword('jqueryismyjam'));