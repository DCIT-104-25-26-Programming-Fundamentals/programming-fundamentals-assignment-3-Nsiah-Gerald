// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
// ... (comments unchanged) ...

const readlineSync = require('readline-sync');

/**
 * Reads an M x N matrix from the user, row by row.
 * @param {number} rows
 * @param {number} cols
 * @param {string} label - Label to display when prompting (e.g. "Matrix A")
 * @returns {number[][]}
 */
function readMatrix(rows, cols, label = "") {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let row;
    // Keep asking until the row has exactly `cols` numbers
    while (true) {
      const line = readlineSync.question(`Enter row ${i + 1}${label ? " of " + label : ""}: `);
      row = line.trim().split(/\s+/).map(Number);
      if (row.length === cols && row.every((n) => !isNaN(n))) {
        break;
      }
      console.log(`Please enter exactly ${cols} numbers separated by spaces.`);
    }
    matrix.push(row);
  }
  return matrix;
}

/**
 * Prints a matrix in a neat, aligned grid.
 * @param {number[][]} matrix
 */
function printMatrix(matrix) {
  // Find the widest number for column alignment
  let maxWidth = 0;
  for (const row of matrix) {
    for (const val of row) {
      maxWidth = Math.max(maxWidth, String(val).length);
    }
  }

  for (const row of matrix) {
    const line = row.map((val) => String(val).padStart(maxWidth)).join("  ");
    console.log(line);
  }
}

/**
 * Computes the transpose of a matrix (rows become columns).
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let c = 0; c < cols; c++) {
    const newRow = [];
    for (let r = 0; r < rows; r++) {
      newRow.push(matrix[r][c]);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * Adds two matrices of the same size, element-wise.
 * @param {number[][]} a
 * @param {number[][]} b
 * @returns {number[][]}
 */
function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(a[i][j] + b[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * Multiplies matrix A (M x N) by matrix B (N x P), producing an M x P matrix.
 * @param {number[][]} a
 * @param {number[][]} b
 * @returns {number[][]}
 */
function multiplyMatrices(a, b) {
  const m = a.length;      // rows of A
  const n = a[0].length;   // cols of A (== rows of B)
  const p = b[0].length;   // cols of B
  const result = [];

  for (let i = 0; i < m; i++) {
    const newRow = [];
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

function main() {
  // ---------------------------------------------------------------------
  // PART A — Transpose
  // ---------------------------------------------------------------------
  console.log("=== PART A: Transpose a Matrix ===");
  const rowsA = readlineSync.questionInt("Enter number of rows: ");
  const colsA = readlineSync.questionInt("Enter number of columns: ");
  const matrixA = readMatrix(rowsA, colsA);

  console.log("\nOriginal Matrix:");
  printMatrix(matrixA);

  console.log("\nTransposed Matrix:");
  printMatrix(transposeMatrix(matrixA));

  // ---------------------------------------------------------------------
  // PART B — Addition
  // ---------------------------------------------------------------------
  console.log("\n=== PART B: Add Two Matrices ===");
  console.log(`Both matrices must be ${rowsA} x ${colsA} (same size).`);

  console.log("\nEnter first matrix:");
  const sumA = readMatrix(rowsA, colsA, "Matrix 1");
  console.log("Enter second matrix:");
  const sumB = readMatrix(rowsA, colsA, "Matrix 2");

  console.log("\nSum:");
  printMatrix(addMatrices(sumA, sumB));

  // ---------------------------------------------------------------------
  // PART C — Multiplication
  // ---------------------------------------------------------------------
  console.log("\n=== PART C: Multiply Two Matrices ===");
  console.log("Matrix A is M x N, Matrix B must be N x P.");

  const mRows = readlineSync.questionInt("Enter rows for Matrix A (M): ");
  const nCols = readlineSync.questionInt("Enter columns for Matrix A / rows for Matrix B (N): ");
  const pCols = readlineSync.questionInt("Enter columns for Matrix B (P): ");

  console.log("\nEnter Matrix A:");
  const mulA = readMatrix(mRows, nCols, "Matrix A");
  console.log("Enter Matrix B:");
  const mulB = readMatrix(nCols, pCols, "Matrix B");

  console.log("\nProduct (A x B):");
  printMatrix(multiplyMatrices(mulA, mulB));
}

main();
