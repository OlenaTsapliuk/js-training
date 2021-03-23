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

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
message=ordered > available?'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';
  

  // Пиши код выше этой строки
  return message;
}
console.log(checkStorage(100, 50));