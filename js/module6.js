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
const changeEven=(numbers, value)=> {
    // Пиши код ниже этой строки
  const newArray=[];
  numbers.forEach(element=>{
    if(element%2===0){
        element = element + value;
    
      }newArray.push(element)
  });
    return newArray;
    // Пиши код выше этой строки
}
  console.log(changeEven([17, 24, 68, 31, 42], 100))