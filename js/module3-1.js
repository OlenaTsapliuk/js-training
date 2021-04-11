// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Пиши код выше этой строки


// 7
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area=60;
// apartment.rooms=3;
// apartment.location={}
//   apartment.location.country= 'Ямайка';
//   apartment.location.city= 'Кингстон';


// console.log(apartment)
  
// 10

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//   console.log(key);
//   keys.push(key);


//   console.log(apartment[key]);

//   values.push(apartment[key]);
// }

// 12

// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   for(const value in object){
//   if (object.hasOwnProperty(value)){
//     propCount+=1;
//   }
//   // Пиши код выше этой строки
//  } return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }))

// 13
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   values.push(apartment[key]);
// }

// console.log(['Просторная квартира в центре', 4, 2153])
  
// 14
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
// const keys= Object.keys(object);
//   for (const key of keys) {
//     console.log(keys);
//      propCount+=1;
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }))

// 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
// const values=Object.values(salaries);
//   for(const value of values){
//     console.log(values)
//     totalSalary += value;
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

// 17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   console.log(color.hex)
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(rgbColors)

// 18
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
 
//   for (const product of products) {
//     if (product.name===productName) {
//       return  product.price;
     
//     } 
//   }return null;

//   // Пиши код выше этой строки
// }
//   console.log(getProductPrice('Двигатель'));

// 19
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const arrayPropValues = [];
//   // const keys=Object.keys(products)
//   for (const l1 of products) {
//     if (l1[propName]) {
//      arrayPropValues.push(l1[propName]); 
//     }  
    
//   }
//   return arrayPropValues;
//   }
// console.log(getAllPropValues('price'));

// 20
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const oneProduct of products) {
//     if (oneProduct.name===productName) {
//       totalPrice = oneProduct.price* oneProduct.quantity;
//   }
// }
//   return totalPrice;

//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Дроид'));

// 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon:highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 30
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// // const text='';
//   const newTask={};
//   return {completed,category,priority,...data}
//   // Пиши код выше этой строки
// }
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }))

// 31
// function add(...args) {
 
//   let total = 0;
//   for (const arg of args){
//     total += arg;
//   } return total;
//   // Пиши код выше этой строки
// }
// console.log(add(15, 27))

// 32
// function addOverNum(value,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(value<arg){
//     total += arg;
//     }
//   }

//   return total;
//   // Пиши код выше этой строки
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))
 
// 33
// function findMatches(array1,...array2) {
//   const matches = []; // Не изменяй эту строку
  
//   for (const value of array1 ) {
//     if (array2.includes(value)) {
//       matches.push(value);
//     }
//   }
//   return matches;
// }
// variant2
//   function findMatches(...args) {
// const matches = [];
//     const m1 = args[0];

//   for (let i = 1; i <  args.length; i++) {
//     if (m1.indexOf(args[i]) > -1) {matches.push(args[i]);}
// }
// return matches;
// }

//   console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41))



// 34
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   }
//   // Пиши код выше этой строки
// };

// 35
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],

//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const bookIndex = this.books.indexOf(oldName);
//     console.log(bookIndex)
//     this.books.splice(bookIndex, 1, newName);
//     console.log(this.books);
	
//     // Пиши код выше этой строки
//   },
// };
// console.log(bookShelf.updateBook('Страж снов', 'Хроники подземелий'));


// 37
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     return this.potions;
//  },
 
//   // Пиши код выше этой строки
// };

// 38
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки

//     return this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.addPotion('Зелье силы'));

// 39
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(potionName);
//     console.log(potionIndex)
//      return this.potions.splice(potionIndex,1);
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad)

// 40
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(oldName);
//     console.log(potionIndex)
//     return this.potions.splice(potionIndex,1,newName);
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad)

// 41
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
     
      if (potion.name === newPotion.name) {
        console.log(`Зелье ${newPotion.name} уже есть в инвентаре!`);
        return
      }
    }
    
    return this.potions.push(newPotion);
  },
 
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      let potion = this.potions[i];
      if (potion.name === potionName) {
        return this.potions.splice(i, 1);
     
      }
    } return `Зелья ${potionName.name} нет в инвентаре!`;
     
  },

  updatePotionName(oldName, newName) {
    for (const value of this.potions) {
      if (value.name === oldName) {
        value.name = newName;
        
      }
    }return `Зелья ${oldName} нет в инвентаре!`;
  },
};
// console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// console.log(atTheOldToad.removePotion('Каfgменная кожа'));
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'))
// console.log(atTheOldToad.potions)
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length;i+=1) {
      
//       let potion = this.potions[i];
//       if (potion.name === oldName) {
//         potion.name = newName;
//          this.potions.splice(i, 1, newName);
//       }
//     }
//     return `Зелья ${oldName} нет в инвентаре!`;
//   },
//   // Пиши код выше этой строки
// };
