
const stringArray = ['a', 'b', 'c', 'd', 'e']

const numArray = [1, 2, 3, 4, 5]

const boolArr = [true, false]

const mixedArr = ['a', true, 'c', 3, 2, false, undefined, null, [1, 2]];


// Custom Array

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length
    }

    get(index) {
        return this.data[index]
    }

    pop() {
        let lastElement = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastElement;
    }

    shift() {
        const firstElement = this.data[0];
        for(let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--
        return firstElement;
    }


    delete(index) {
        const item = this.data[index];

        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];

        this.length--

        return item;
    }
}

const myNewArray = new MyArray()
myNewArray.push('apple')
myNewArray.push('mango')
myNewArray.push('banana')

console.log(myNewArray)

console.log('get first element', myNewArray.get(0))

console.log(myNewArray)

// console.log('pop', myNewArray.pop())

// console.log('shift', myNewArray.shift())

console.log(myNewArray.delete(2))

console.log(myNewArray)


// Reverse String

function reverseString(str) {
    /*
        - Convert String to array  (split)
        - Reverse the Array  (reverse)
        - Convert array back to String.  (join)
    */
    return str.split('').reverse().join('');
}

console.log(reverseString('mahesh'));


// Palindrome :: If the reverse string is equal to the original then the word is a palindrome
const str = "abba"
console.log('is Palindrome : ',  str === reverseString(str))
console.log('is Palindrome: ', 'mahesh' === reverseString('mahesh'));


// Integer Reverse
/*
    - convert number to string
    - convert strign to array
    - reverse the array
    - convert array back to string
    - convert string back to number  
*/

const reverseNumber = (num) => {
    const numString = num.toString()
    const reverString = reverseString(numString);

    return parseInt(reverString) * Math.sign(num)
}

console.log(reverseNumber(-456))



// Sentence Capitalization
/*
    - make the string to lowercase
    - convert the string to array
    - Capitalize each word
    - Convert array back to String
*/

const sentenceCapitalization = (sentance) => {
    return sentance.toLowerCase().split(' ')
    .map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
}

console.log(sentenceCapitalization('KOTHA mahesh babu'))


// FizzBuzz
/*
    - Print Numbers from 1 to n
    - If number is divisible by 3, print Fizz
    - if number is divisible by 5, print Buzz
    - If number is divisible by 3 & 5, print FizzBuzz
    - else print the number
*/

const fizzBuzz = (number) => {
    for(let i = 1; i <= number; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if(i % 3 === 0) {
            console.log("Fizz")
        } else if(i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}


// Max Profit
/*
    Imagane you're buying and selling stocks throughout the year. Your job is to find the
    biggest profit you could make by buying and selling high only once

    Here what you're given:

    A list of stocks prices for each day  [7, 1, 5, 3, 6, 4]

    Here's what you need to find:

    The difference between the cheapest price you could have bought the stock and the most
    expencive price you could have sold it later on.
*/

const maxProfit = prices => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        minPrice = Math.min(minPrice, currentPrice);

        const potentitalProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentitalProfit);
    }

    return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];

const profit = maxProfit(prices);

console.log("max profit: ", profit)


// Array Chunk 

/*
     Write a function that takes an array and a chunk size as input The function should
     return a new array where the original array is split into chunks of the specified
     size.
*/

const chunkArray = (arr, size) => {

    const result = [];
    for(let i = 0; i < arr.length; i = i + size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk)
    }
    return result
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log(chunkArray([1, 2, 3, 4], 2))



// Two Sum
/*
    Imagine you have a list of numbers and a target numbers. your job is to find two 
    numbers in that list that add up to the target numbers. You aslo need to tell 
    which position (indexes) those two numbers are at in the list.

    Example: 
        If the list is [2, 7, 11, 15] and the target is 9, then the answer would
        be [0, 1] because 2 (at index 0) plus 7 (at index 1) equals 9.
*/

function twoSum(arr, target) {

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }

    return [];
}

// This is not better solutio we can optimze later.

console.log('tosum of [2, 7, 11, 15], target 9: ', twoSum([2, 7, 11, 15], 9));

