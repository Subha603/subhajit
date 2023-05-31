/*write a javascript program to check a number given by user is prime or not */


// Function to check if a number is prime
function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }

    // Iterate from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any other number, it is not prime
        if (number % i === 0) {
            return false;
        }
    }

    // If the number is not divisible by any other number, it is prime
    return true;
}

// Get the number from the user


const abc=isPrime(100);
console.log(abc);
