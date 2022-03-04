// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Write a test for a function that logs "eat food" if you are hungry and "keep working" if you are not hungry

// describe("areYouHungry", () => {
//     it("returns eat food or keep working based on input", () => {
//       expect(areYouHungry("yes")).toEqual("eat food")
//       expect(areYouHungry("no")).toEqual("keep working")
//     })
//   })

// --------------------INSTRUCTOR EXAMPLE:

// --------------------1) Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// Write a test for a function that logs "eat food" if you are hungry and "keep working" if you are not hungry

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

describe("divThree", () => {
    it("take a number as an argument and decides if the number is evenly divisble by three or not", () => {
        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"        
        expect(divThree(num1)).toEqual("15 is divisible by three")
        expect(divThree(num2)).toEqual("0 is divisible by three")
        expect(divThree(num3)).toEqual("-7 is not divisible by three")
    })
})

// Good Fail


// b) Create the function that makes the test pass.

// Pseudocode:
//  Create a function that takes in a number
//  Name the function divThree
//  Name placehoder num to access all the given inputs values
//  Use if statement to see if num values is divisible by 3
//  Use another if statement to see if num values is not divisible by 3
//  Therefore we get invidual string with a number saying if it is or it is not divisible by 3

const divThree = (num) => {
    if (num % 3 === 0) {
        return `${num} is divisible by three`
    }
    else if (num % 3 !== 0) {
        return `${num} is not divisible by three`
    }
}

// Good Pass


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("bigWords", () => {
    it("take in an array of words and returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
        expect(bigWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(bigWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// Good Fail


// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function that takes in a strings of words in an array
// Name placeholder randomNouns to interact with given input's strings
// Name the function bigWords
// Return the .map() function with new placeholder named radomNouns to make array accessible to go through given inputs strings to a new value
// Return the newly named value to acess the new function with .map()that can now deal with an array then i found .charAt() function which takes in a string then inputs an index and i put 0 in parenthesis to give us only the first character then following that to make the input in unison i added .toUpperCase function to make the input character first letter in uppercase. Lastly i found the function .substr() which can output a portion of the string following the value and i specified 1 in parenthesis to give us all the characters in the strings except the first character.
//Therefore giving us an array of words and returns an array with all the words with their first character capitalized like expected outputs

const bigWords = (randomNouns) => {
    return randomNouns.map(value => {
        return value.charAt(0).toUpperCase() + value.substr(1)
    })
}

// Good Pass


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

describe("theIndex", () => {
    it("take in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(theIndex(vowelTester1)).toEqual(1)
        expect(theIndex(vowelTester2)).toEqual(0)
        expect(theIndex(vowelTester3)).toEqual(2)
    })
})

//Good Fail


// b) Create the function that makes the test pass.

// Pseudocode
// Create a function that takes in a string
// Name the function theIndex with a placeholder for given input values
// Create a value to tell the computer what vowels are in an array
// Create a for loop to access given input values characters one by one
// Create another for loop to access vowels input values one by one
// Create an If statement to compare both given inputs & vowels inputs
// Return i to return index of the first vowel
// Therefore giving us a function that takes in a string and logs the index of the first vowel.

const theIndex = (value) => {
    const vowels = ["a", "e", "i", "o", "u"]
    for (var i = 0; i < value.length; i++) {
        const letter = value[i];
        for (var v = 0; v < vowels.length; v++) {
            const vowel = vowels[v];
            if (letter === vowel) {
                return i
            }
        }
    }
}

// Good Pass