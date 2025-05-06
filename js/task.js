
// swapping two numbers//

// Ask the user for two numbers
// let a = parseInt(prompt("Enter the first number:"));
// let b = parseInt(prompt("Enter the second number:"));

// // Use an if condition to swap the numbers only if they're not equal
// if (a !== b) {
//     a = a + b;  // a becomes the sum of a and b
//     b = a - b;  // b becomes the original value of a
//     a = a - b;  // a becomes the original value of b
// }

// // Show the swapped values using alert
// alert("After swapping:\nFirst number: " + a + "\nSecond number: " + b);






// odd or even
// let value = prompt("Enter a number:");


// value = Number(value);


// if (isNaN(value)) {
//   alert("That's not a valid number.");
// } else {
//   // Use if condition to check even or odd
//   if (value % 2 === 0) {
//     alert("The number is even.");
//   } else {
//     alert("The number is odd.");
//   }
// }

// three numbers find maximum


// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let num3 = Number(prompt("Enter the third number:"));


// let max;

// if (num1 >= num2 && num1 >= num3) {
//   max = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   max = num2;
// } else {
//   max = num3;
// }


// alert("The maximum number is: " + max);






// given number positive or negative
// Prompt the user to enter a number
// let num = prompt("Enter a number:");
// num = Number(num);

// // Check if the input is a valid number
// if (isNaN(num)) {
//   alert("That's not a valid number.");
// } else {
//   // Use if condition to check if number is positive or negative
//   if (num > 0) {
//     alert("The number is positive.");
//   } else if (num < 0) {
//     alert("The number is negative.");
//   } else {
//     alert("The number is zero.");
//   }
// }


// divide by 5and 11
// Prompt the user to enter a number
// let num = prompt("Enter a number:");
// num = Number(num);

// // Check if the input is a valid number
// if (isNaN(num)) {
//   alert("That's not a valid number.");
// } else {
//   // Check if the number is divisible by both 5 and 11
//   if (num % 5 === 0 && num % 11 === 0) {
//     alert("The number is divisible by both 5 and 11.");
//   } else {
//     alert("The number is NOT divisible by both 5 and 11.");
//   }
// }

// leapyear or not
// Prompt the user to enter a year
// let year = prompt("Enter a year:");
// year = Number(year);

// // Check if the input is a valid number
// if (isNaN(year)) {
//   alert("That's not a valid year.");
// } else {
//   // Check if the year is a leap year using if conditions
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     alert(year + " is a leap year.");
//   } else {
//     alert(year + " is not a leap year.");
//   }
// }


// sting or Number
// Prompt the user to enter something
// let input = prompt("Enter some data:");

// // Check if the input is a number
// if (!isNaN(input) && input.trim() !== "") {
//   alert("You entered a number.");
// } else {
//   alert("You entered a string.");
// }

// char or vovels
// Prompt the user to enter a single character
// let input = prompt("Enter a single character:");

// // Convert to lowercase for easy comparison
// let char = input.toLowerCase();

// // Check if it's a single character
// if (char.length === 1 && isNaN(char)) {
//   // Check if it's a vowel
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     alert("The character is a vowel.");
//   } else {
//     alert("The character is a consonant.");
//   }
// } else {
//   alert("Please enter a single alphabet character.");
// }

//number or string or spl charactr

// Prompt the user to enter something
// let input = prompt("Enter a character or value:");

// // Check if the input is a number
// if (!isNaN(input) && input.trim() !== "") {
//   alert("You entered a number.");
// }
// // Check if the input is a single alphabetic character
// else if (/^[a-zA-Z]+$/.test(input)) {
//   alert("You entered a string (alphabetic characters).");
// }
// // Otherwise, it's likely a special character or mixed input
// else {
//   alert("You entered a special character or mixed input.");
// }


// let score = prompt("Enter your score (0 - 100):");
// score = Number(score);

// let grade;

// switch (true) {
//     case (score >= 90 && score <= 100):
//         grade = "A";
//         break;
//     case (score >= 80 && score < 90):
//         grade = "B";
//         break;
//     case (score >= 70 && score < 80):
//         grade = "C";
//         break;
//     case (score >= 60 && score < 70):
//         grade = "D";
//         break;
//     case (score >= 0 && score < 60):
//         grade = "F";
//         break;
//     default:
//         grade = "Invalid score. Please enter a number between 0 and 100.";
// }

// alert("Your grade is: " + grade);