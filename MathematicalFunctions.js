// function to calculate the factorial of a given number

function factorial(nume){
    for (i=nume; i>0; i--){
        for(a=i; a>0; a--){
            console.log(a);
        }
    }
}
factorial(5)

// function to check if a number is a prime number

function isPrime(num) {
    if (num < 2) {
        return false; // Prime numbers start from 2
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible, not prime
    }
    return true;
}
console.log(isPrime(1));

// function to generate fibonacci sequence up to a given number

function generateFibonacci(n) {
    if (n <= 0) return []; // Handle invalid cases
    if (n === 1) return [0]; // Base case

    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}

console.log(generateFibonacci(10));
