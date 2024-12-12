// Question no.1: Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments. //
// Answer to the question no. 1 //

function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(679, 609));


// Question no. 2: Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not. //
// Answer to the question no. 2 //

function isOdd(number) {
    return number % 2 !== 0
}
console.log(isOdd(13));

// Question no. 3: Write a function named findMin that takes an array of numbers and returns the smallest number from the array. //
// Answer to the question no. 3 //

function findMin(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }
    return Math.min(...numbers);
}
console.log(findMin([100, 25, 79, 18]));

// Question no. 4: Write a function named filterEvenNumbers that takes an array of numbers and returns the smallest number from the array. //
// Answer to the question no. 4 //

function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

const numbers = [5, 2, 6, 10, 26, 13];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

// Question no. 5: Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order. //
// Answer to the question no. 5 //

function sortArrayDescending(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array.");
    }
    // Create a copy of the array to avoid mutating the original array
    const sortedArray = [...arr];

    // Use the sort method with a compare function for descending order
    sortedArray.sort((a, b) => b - a);

    return sortedArray;
}

const number = [52, 18, 29, 47, 75, 27, 92, 10];
const sortedNumbers = sortArrayDescending(number);

console.log(sortedNumbers);

// Question no. 6: Write a function named lowercaseFirstLetter that takes string and returns the same string with the first letter lowercased.
// Answer to the question no. 6 //

function lowercaseFirstLetter(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Assignment"));

// Question no. 7: Write a function named findAverage that takes an array of numbers and returns the average of all elements. //
// Answer to the question no. 7 //

function findAverage(num) {
    if (num.length === 0) {
        return 0;
    }
    const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum / num.length;
}

const num = [32, 64, 44, 53];
const average = findAverage(num);
console.log(average);

// Question no. 8: Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not. //
// Answer to the question no. 8 //

function isLeapYear(year) {
    if (typeof year !== 'number' || !Number.isInteger(year)) {
        throw new Error("Input must be an integer.");
    }

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}


console.log(isLeapYear(2020));



