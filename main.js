let lengthRectangle = 10
let widthRectangle = 10
let area = lengthRectangle * widthRectangle
console.log(`The area of the rectangle is: ${area}`);
let temp = 20
let far = temp * 33.800
console.log(`${temp}°C is ${far}°F`);
let cel = far / 33.800
console.log(`${far}°F is ${cel}°C.`);
let hour = 2
let sec = hour / 3600
console.log(`${hour} hours = ${sec} Seconds`);

/*
 * REQUIREMENTS
 * 1. Your code should have two variables -  `thingOne` and `thingTwo`
 * 2. Your code should only have one `console.log` statement
 * 3. Your code should print out the values of `thingOne` and `thingTwo` using concatenation
 * 4. Your code should contain semicolons at the end of each line
 */

let thingOne = "Welcome", thingTwo = "Back";
console.log(`${thingOne, thingTwo}`);


/*
 * REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */
let bill = 10.25 + 3.99 + 7.15
let tip = bill * 0.15
let total = bill + tip
console.log(`the total is ${total}`);

/*
 * REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */

let adjective1 = "The Intro to JavaScript course is amazing", adjective2 = "James and Julia are so fun.", adjective3 = "I cannot wait to work through the rest of this entertaining content!"
let madLib = adjective1 + adjective2 + adjective3
console.log(madLib);

/*
 * REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */

/*
* Example:
* - Assuming, firstName would have been assigned to "Julia",
*   interest to "cats", and hobby to "play video games" to produce the following message:
* 
*   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
*
* - Be sure to include spaces and periods where necessary!
*/
let firstName = "sulaiman", interest = "JavaScript", hobby = "Games"

let awesomeMessage =