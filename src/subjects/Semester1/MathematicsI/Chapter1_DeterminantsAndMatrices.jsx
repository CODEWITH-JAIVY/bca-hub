'use client';
import React from 'react';

const Chapter1_DeterminantsAndMatrices = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 1: Determinants and Matrices</h2>

      {/* Introduction to Matrices */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Matrices</h3>
        <p className="mb-4">
          A matrix is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns.
        </p>

        <p className="mb-4">
          <strong>Q1: What are the different types of matrices?</strong>
          <br />
          A1: Types of matrices include square matrix, row matrix, column matrix, diagonal matrix, identity matrix, and null matrix.
        </p>
      </section>

      {/* Matrix Operations */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Matrix Operations</h3>
        <p className="mb-4">
          <strong>Q2: How do you perform matrix addition and subtraction?</strong>
          <br />
          A2: Matrix addition and subtraction are performed element-wise, but only if the matrices have the same dimensions.
        </p>

        <p className="mb-4">
          <strong>Q3: How do you perform matrix multiplication?</strong>
          <br />
          A3: Matrix multiplication involves multiplying rows of the first matrix by columns of the second matrix, with the number of columns in the first matrix equal to the number of rows in the second matrix.
        </p>
      </section>

      {/* Introduction to Determinants */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Determinants</h3>
        <p className="mb-4">
          <strong>Q4: What is a determinant?</strong>
          <br />
          A4: A determinant is a scalar value that can be computed from the elements of a square matrix and encodes certain properties of the linear transformation described by the matrix.
        </p>
      </section>

      {/* Calculating Determinants */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Calculating Determinants</h3>
        <p className="mb-4">
          <strong>Q5: How do you calculate the determinant of a 2x2 matrix?</strong>
          <br />
          A5: For a matrix [[a, b], [c, d]], the determinant is calculated as ad - bc.
        </p>

        <p className="mb-4">
          <strong>Q6: How do you calculate the determinant of a 3x3 matrix?</strong>
          <br />
          A6: Use the cofactor expansion method along any row or column.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Explain the differences between a square matrix and a row matrix.</li>
          <li>Describe how to add and subtract two matrices with examples.</li>
          <li>Calculate the product of two given matrices.</li>
          <li>Define a determinant and explain its significance.</li>
          <li>Compute the determinant of a 2x2 matrix.</li>
          <li>Compute the determinant of a 3x3 matrix using cofactor expansion.</li>
          <li>What are the properties of determinants?</li>
          <li>What are some applications of matrices and determinants in computer science?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter1_DeterminantsAndMatrices;
