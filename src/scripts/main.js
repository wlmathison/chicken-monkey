// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }


for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("Chicken Monkey")
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken")
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey")
    } else {
        console.log(currentNumber)
    }
};