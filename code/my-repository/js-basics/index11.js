//k3n5c0de
// Reference  Type Arrays.


const myArray = ["This", "is", "an", "array", "of", "strings."];
myArray.length;


console.log(myArray);

// Using the array on the Example above
const winningNumber = [32, 9, 14, 33, 48, 5];

function logWinningNumbers(numbers) {
    console.log("Winning numbers:", numbers);
}


logWinningNumbers(winningNumber);
// LOG: Winning numbers: [32, 9, 14, 33, 48, 5]
// => undefined

logWinningNumbers(winningNumber[0])
logWinningNumbers(winningNumber[3])