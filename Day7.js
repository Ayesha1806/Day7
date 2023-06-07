// Task 1
var num = 16;
console.log("Square root of num:", Math.sqrt(num));

// Task 2
var randomNum = Math.round(Math.random() * 10);
console.log("Random number:", randomNum);

// Task 3
var today = new Date();
console.log("Current date and time:", today);

// Task 4
console.log("Year:", today.getFullYear());
console.log("Month (numeric):", today.getMonth() + 1); // Adding 1 to adjust for zero-based index
console.log("Day of the month:", today.getDate());
console.log("Day of the week (numeric):", today.getDay());

// Task 5
today.setFullYear(2022);
today.setMonth(11); // December (zero-based index)
today.setDate(31);
console.log("Updated Year:", today.getFullYear());
console.log("Updated Month (numeric):", today.getMonth() + 1);
console.log("Updated Day of the month:", today.getDate());

// Task 6
var birthday = new Date("1990-01-01"); // Replace with your own birthday
var millisecondsDiff = today.getTime() - birthday.getTime();
console.log("Milliseconds between birthday and today:", millisecondsDiff);

// Task 7
var daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
console.log("Days between birthday and today:", daysDiff);
