// #21-30
// function isNumberInRange(start, end, number) {
//   const isInRange =(start<=number&&number<=end) ; // дополни эту строку

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 5));

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType==='pro'||subType==='vip'; // дополни эту строку

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('pro'));

// #24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Пиши код ниже этой строки
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     }
//     else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     }
//     else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT;
        
//     }

//   // Пиши код выше этой строки
//   return discount;
// }
// console.log(getDiscount(7000));

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// message=ordered > available?'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';
  

//   // Пиши код выше этой строки
//   return message;
// }
// console.log(checkStorage(100, 50));

// 27

// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case 'starter': // Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case 'professional': // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case 'organization': // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }
// console.log(getSubscriptionPrice('professional'));

// 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   switch (password) {
//     case null:
//       message ='Отменено пользователем!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Добро пожаловать!';
//       break;
 
//     default:
//       message = 'Доступ запрещен, неверный пароль!';
  
//   }
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));

// #29
// вариант1
// function getShippingCost(country) {
//   let message;
//    let priceDelivery;
//   // Пиши код ниже этой строки
// switch (country){
//   case 'Китай':
//     priceDelivery = 100;
//     message = `Доставка в ${country} будет стоить ${priceDelivery} кредитов`;
//      break;
//   case 'Чили':
//     priceDelivery = 250;
//     message = `Доставка в ${country} будет стоить ${priceDelivery} кредитов`;
//     break;
//   case 'Австралия':
//     priceDelivery = 170;
//     message = `Доставка в ${country} будет стоить ${priceDelivery} кредитов`;
//     break;
//   case 'Ямайка':
//     priceDelivery = 120;
//     message = `Доставка в ${country} будет стоить ${priceDelivery} кредитов`;
//     break;

//   default:
//     message = `Извините, в вашу страну доставки нет`;
// }
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(getShippingCost('Ямайка'));
//  вариант2
// switch (country){
//   case 'Китай':
//     message = `Доставка в ${country} будет стоить 100 кредитов`;
//     break;
//   case 'Чили':
//     message = `Доставка в ${country} будет стоить 250 кредитов`;
//      break;
//   case 'Австралия':
//     message = `Доставка в ${country} будет стоить 170 кредитов`;
//      break;
//   case 'Ямайка':
//     message = `Доставка в ${country} будет стоить 120 кредитов`;
//     break;

//   default:
//     message = `Извините, в вашу страну доставки нет`;
// }
// 30
// function getNameLength(name) {
//   const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

//   return message;
// }
// console.log(getNameLength('Poly'));
// 31
// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;

// const firstElement = courseTopic[0];

// const lastElement = courseTopic[courseTopic.length-1];

// console.log(courseTopicLength);

// Пиши код выше этой строки

// 32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);// Дополни эту строку

//   return substring;
// }
//  console.log(getSubstring('Привет мир', 6));

// #33
// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
//   if (message.length < maxLength) {
//     result = message;
//   } else result = message.slice(0, maxLength) + '...';
// // Пиши код выше этой строки
//   return result;
// }
// console.log(formatMessage('Vestibulum facilisis purus nec', 25));

// #35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Дополни эту строку
//   return result;
// }
// console.log(checkForName('Егор Колбасов', 'Егор'));
// 36
function checkForSpam(message) {
  let result;
  const normalizedMessage = message.toLowerCase();
  // Пиши код ниже этой строки
  result = normalizedMessage.includes('spam') ||normalizedMessage.includes('sale');

  // Пиши код выше этой строки
  return result;
}
console.log(checkForSpam('[SPAM] How to earn fast money?'));