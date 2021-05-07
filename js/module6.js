// 3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(function (arg) {
//         if (secondArray.includes(arg)) {
//             commonElements.push(arg);
//         } return commonElements;
//     });
 
    
//         // Пиши код выше этой строки
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// 7
// Пиши код ниже этой строки
// const filterArray=(numbers, value) =>{
//     const filteredNumbers = [];
  
//     numbers.forEach((number)=> {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// 9
// const changeEven=(numbers, value)=> {
//     // Пиши код ниже этой строки
//   const newArray=[];
//   numbers.forEach(element=>{
//     if(element%2===0){
//         element = element + value;
    
//       }newArray.push(element)
//   });
//     return newArray;
//     // Пиши код выше этой строки
// }
//   console.log(changeEven([17, 24, 68, 31, 42], 100))

13
// const getUserNames = users => {
//   users.map((user)=>user.name);  

// };
//   console.log()

// 20
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user=>user.friends.includes(friendName)); 
// };

// 21

//  const getFriends = (users) => { 
//  const all=users.flatMap(user => user.friends);
//  const allFriends = all.filter((user, index, array) => array.indexOf(user) === index);
//     return allFriends;
// }
  // 26
//   const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(value=>value%2===0);
// const eachElementInFirstIsOdd = firstArray.every(value=>value%2!==0);

// const eachElementInSecondIsEven = secondArray.every(value=>value%2===0);
// const eachElementInSecondIsOdd = secondArray.every(value=>value%2!==0);

// const eachElementInThirdIsEven = thirdArray.every(value=>value%2===0);
// const eachElementInThirdIsOdd = thirdArray.every(value=>value%2!==0);

// 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc,{playtime,gamesPlayed})=>{
// return acc+playtime/gamesPlayed},0);
// const averageTime=totalAveragePlaytimePerGame/players.gamesPlayed;

// console.log(totalAveragePlaytimePerGame);

// 32
// const calculateTotalBalance = users => {
//   return users.reduce((total,user)=>{
//     return total+user.balance
//   },0); 
// };

// 33
const users=[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
// const getTotalFriendCount = users => {
//   return users.reduce((acc,user)=>acc+user.friends.length,0); 
// };

// 35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=>a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);

// 36
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));
// 37
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки
// const sortedByAuthorName =
// [...books].sort((firstAuthor,secondAuthor)=>
// firstAuthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort((firstAuthor,secondAuthor)=>
// secondAuthor.author.localeCompare(firstAuthor.author));

// const sortedByAscendingRating = [...books].sort((firstRating,secondRating)=>
// firstRating.rating-secondRating.rating);

// const sortedByDescentingRating = [...books].sort((firstRating,secondRating)=>
//   secondRating.rating - firstRating.rating);

  // 38
//   const sortByAscendingBalance = users => {
//   return [...users].sort((a,b)=>a.balance-b.balance);
// };

// 39
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a,b)=>b.friends.length-a.friends.length); 
// };

// 40
// const sortByName = users => {
//   return [...users].sort((a,b)=>a.name.localeCompare(b.name)); 
// };

// 41
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author);
// console.log(names)

// 42
// const names = [...users]
//   .sort((a, b) => a.friends.length - b.friends.length)
// .map(user => user.name);

// 43
// const getSortedFriends = users => {

//   return [...users].flatMap(user => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b)); 
  
// };
// console.log(getSortedFriends(users))

// 44

const getTotalBalanceByGender = (users, gender) => {
     return users.filter(user => user.gender === gender)
  .reduce((total,user)=>{
    return total+user.balance
   }, 0);
};
 