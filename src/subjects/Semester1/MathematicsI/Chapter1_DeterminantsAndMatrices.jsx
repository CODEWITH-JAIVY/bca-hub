import React from 'react';

const Chapter1_DeterminantsAndMatrices = () => {
  return (
    <div>
      <h2>Chapter 1: Determinants and Matrices</h2>
      <p>
        <strong>Q1: What is a matrix?</strong>
        <br />
        A1: A matrix is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns.
      </p>
      <p>
        <strong>Q2: What are the different types of matrices?</strong>
        <br />
        A2: Types of matrices include square matrix, row matrix, column matrix, diagonal matrix, identity matrix, and null matrix.
      </p>
      <p>
        <strong>Q3: How do you perform matrix addition and subtraction?</strong>
        <br />
        A3: Matrix addition and subtraction are performed element-wise, but only if the matrices have the same dimensions.
      </p>
      <p>
        <strong>Q4: How do you perform matrix multiplication?</strong>
        <br />
        A4: Matrix multiplication involves multiplying rows of the first matrix by columns of the second matrix, with the number of columns in the first matrix equal to the number of rows in the second matrix.
      </p>
      <p>
        <strong>Q5: What is a determinant?</strong>
        <br />
        A5: A determinant is a scalar value that can be computed from the elements of a square matrix and encodes certain properties of the linear transformation described by the matrix.
      </p>
      <p>
        <strong>Q6: How do you calculate the determinant of a 2x2 matrix?</strong>
        <br />
        A6: For a matrix [[a, b], [c, d]], the determinant is calculated as ad - bc.
      </p>
      <p>
        <strong>Q7: How do you calculate the determinant of a 3x3 matrix?</strong>
        <br />
        A7: Use the cofactor expansion method along any row or column.
      </p>
    </div>
  );
};

export default Chapter1_DeterminantsAndMatrices;
