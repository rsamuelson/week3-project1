/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.

console.log("Question 1")
var divideByTwo = function(number) {
var halved = number/2;
console.log(halved)
}
divideByTwo(6);

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

console.log("Question 2")
var greeting = function(name1, name2) {
  console.log("Hello, "+name1+"! Hey there, "+name2+"!");
};
greeting("Rebecca", "Donny");

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.

console.log("Question 3")
var total = function(price) {
  return price * 6;
};
var price = 2.99
console.log(total(price));

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

      console.log("Question 4")

      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
var team1 = [];
var team2 = [];

var captain = function(teammates) {
  for(i=0;i<teammates.length;i++) {
    if(i%2 === 0){
      team1.push(teammates[i]);
    }
    else {
      team2.push(teammates[i]);
    }
  }
  console.log(team1, team2);
}
captain(teammates);

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

console.log("Question 5")

var quarter = function(number) {
  return number / 4;
};
if(quarter %2 === 0) {
  console.log("Even");
}
else if(quarter %1 !== 0){
  console.log("Float");
}
else {
  console.log("Odd");
}
quarter(13);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

console.log("Question 6")
var area = function(length, width) {
  return length * width;
};
var perimeter = function(length, width) {
  return (length * 2) + (width * 2);
};
console.log("Area: "+area(3, 2));
console.log("Perimeter: "+perimeter(3, 2));

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

console.log("Question 7")
var sleepings = function(hours) {
  if(hours > 8){
    console.log("Congrats, you sleep enough!");
  }
  else {
    console.log("Get some more rest.");
  }
};
sleepings(9);

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
//    Note: Strings can be treated as arrays too.

console.log("Question 8")
var userNum = prompt("Enter a six digit number");

var reverseNum = function(userNum) {
  var convert = userNum.toString().split("").reverse().join("");
  console.log(convert);
}

reverseNum(userNum);

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.

console.log("Question 9")
var looseChange = function(quarters, dimes, nickels, pennies) {
  var quarterSum = quarters * .25;
  var dimeSum = dimes * .1;
  var nickelSum = nickels * .05;
  var pennySum = pennies * .01;
  return "$" + parseFloat(quarterSum + dimeSum + nickelSum + pennySum).toFixed(2) + "";
}
looseChange(4, 3, 7, 2);

// 10. Develop a function that determines a person's age by prompting them for their birth year.

console.log("Question 10")
var birthyear = prompt("What year were you born?");

var determineAge = function(birthyear) {
  var age = 2016 - birthyear;
  return "You are approximately "+ age +" years old";
}
console.log(determineAge(birthyear));

// ADVANCED TRACK
// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

console.log("Question 11")



// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

       console.log("Question #")

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.

console.log("Question #")

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

console.log("Question #")

// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.

console.log("Question #")
