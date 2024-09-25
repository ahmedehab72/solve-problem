// // Filtering an Array

// function filterEvenNumber(arr) {
//   return arr.filter((number) => number % 2 === 0);
// }

// let arrOfNumber=[1,35,56,7,2,88,5,94,4];
// console.log(filterEvenNumber(arrOfNumber));

// //Find the Largest Number

// function largestNumber(arr) {
//   return Math.max(...arr)
// }
// let arrOfNumber=[1,35,56,7,2,88,5,94,4];
// console.log(largestNumber(arrOfNumber));

//Reverse a String

// function reverseString(Stringinput) {
//   let revString = "";

//   for (let i = Stringinput.length - 1; i >= 0; i--) {
//     revString += Stringinput[i];
//   }
//   return revString;
// }
// let input = prompt("enter the String to reverse it");
// console.log(reverseString(input));


///////////another solution
// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   // Example usage:
//   const input = prompt('enter String to reverse')
//   const reversed = reverseString(input);
//   console.log(reversed); 




//Remove Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Example usage:
  const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6,33,33];
  console.log(removeDuplicates(numbers));
