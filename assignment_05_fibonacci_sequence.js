// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
// ... (comments unchanged) ...

const readlineSync = require("readline-sync");

/**
 * Generates and prints the first N terms of the Fibonacci sequence.
 * @param {number} n - Number of terms to generate.
 */
function printFibonacciTerms(n) {
  const sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  console.log(`Fibonacci sequence: ${sequence.join(" ")}`);
}

/**
 * Determines whether a given number belongs to the Fibonacci sequence.
 * @param {number} num - The number to check.
 * @returns {boolean} true if num is a Fibonacci number, false otherwise.
 */
function isFibonacci(num) {
  if (num < 0) {
    return false;
  }

  let a = 0;
  let b = 1;

  // Generate Fibonacci numbers up to (and possibly past) num
  while (a < num) {
    const next = a + b;
    a = b;
    b = next;
  }

  // After the loop, a is the first generated term >= num
  return a === num;
}

function main() {
  // ---------------------------------------------------------------------
  // PART A — Print the First N Terms
  // ---------------------------------------------------------------------
  const n = readlineSync.questionInt("How many terms? ");

  if (n <= 0) {
    console.log("Error: N must be a positive integer.");
  } else {
    printFibonacciTerms(n);
  }

  // ---------------------------------------------------------------------
  // PART B — Check if a Number Belongs to the Sequence
  // ---------------------------------------------------------------------
  const num = readlineSync.questionInt("Enter a number to check: ");

  if (isFibonacci(num)) {
    console.log(`${num} is a Fibonacci number.`);
  } else {
    console.log(`${num} is NOT a Fibonacci number.`);
  }
}

main();