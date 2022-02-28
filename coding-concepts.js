// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
console.log(cohort.split(""))

// a) Your answer:

// -The output is "A", "l", "p", "h", "a", " ", "2", "0", "2", "2"

// b) Verify and explain:
// -  The output did in fact turned out as I predicted initially, because this Accessor built-in method for this array is .split("") which entails that the strings will be changed into an array. The reason why the output was splitted by each character including the space is due to the fact that there is no space in the quotation marks inside the parenthesis following the Accessor method .split("")


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
  // }
  // console.log(greeter("LEARN Student"))

  // a) Your answer:
  // - The output is "Hello, LEARN Student!"

  // b) Verify and explain:
  // - The output turned out to be "undefined" because the given output command console.log cannot call on anything because there are no returns to pull from.


  // --------------------3) What will this log?

  // var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
  // console.log(multBy2)

  // a) Your answer:
  //  -The output is [ 8, 10, 12, 14, 16 ]
  // b) Verify and explain:
  // -Indeed thhe ouptut is [ 8, 10, 12, 14, 16 ] because the given variable contains an array arguement entailing that we are dealing with a Higher-Order Function. The given variable's array is followed by the function .map() and this particular function will interact repeating through the array producing a new outcome with the same amount of length as the variable. The paranthesis indicates that the array variable will be multiplied by two.


  // --------------------4) What will this log?

  // var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
  // console.log(onlyOdds)

  // a) Your answer:
  // - The output is [ 11, 13, 15 ]
  // b) Verify and explain:
  // - The output came out as initially suspected [ 11, 13, 15 ] because the given array is being followed by the function .filter, which means it's a Higher-Order Function. The function .filter will keep interacting to the array until the desired condition is executed, that's when the folowing commaands in the parenthesis comes to play giving the parameter that will dictate what the function .filter will execute with the array interaction to then meet the said condition modulo 2 not loosely equal to zero to obtain the odd numbers in the array as an output after console.log'ging the variable name onlyOdds.

  // --------------------5) What will this log?

  // var myCodingSkills = {
  //   languages: ["JavaScript", "Ruby"],
  //   frameworks: ["React", "Ruby on Rails"],
  //   databases: "PostgreSQL",
  //   versionControl: "GitHub"
  // }
  // console.log(myCodingSkills.languages[0])

  // a) Your answer:
  // - The output is JavaScript

  // b) Verify and explain:
  // - Turns out that JavaScript is in fact the output, because the given code variables contains a list of informations with keys and values also know as an Object(s). The values on the objects contain strings in an array individually, specifically noting that the first key languages (which is what's being asked in the output), have two strings inside an array and as a rule of thumb you always have to count the first string in an array starting from 0 like in our case is 0=JavaScript, and 2=Ruby. The given command output is using a process called object destructuring, which permits us to zone into a specific value inside a value and in our case inside the parenthesis it calls out the main variable myCodingSkills. then it asks for a specific key in the list which is languages and finally the bracket with 0 signifies the first string JavaScript counted as 0 in the array.


  // --------------------STRETCH: What will this log?

  // class Learn {
  //   constructor(name) {
  //     this.student = name,
  //       this.cohort = "Alpha",
  //       this.year = 2022
  //   }
  // }
  // var learnStudent = new Learn("George")
  // console.log(learnStudent)

// a) Your answer:
// - The output is " George Alpha 2022 "

// b) Verify and explain:
// - The output that came out into the terminal is slightly different but also very much the same in context to what I initially predicted and the output is { student: 'George', cohort: 'Alpha', year: 2022 }. The biggest difference is that the output also listed the object's variable name becuause I didn't took in account that there is a "this" function prior the keys (insert Inception reference), which will also list the keys along with the values in the output in curly braces after injecting the new parameter George into the initial variable statement replacing the variable in the constructor keeping in mind that the constructor can only be one. Therefore the new variable learnStudent will only inject to the constructor name in parenthesis and that will refer to the key student's value, which will ultimately changed into George.
