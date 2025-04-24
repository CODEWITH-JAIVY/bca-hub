'use client';
import React from 'react';

const Chapter1_DeterminantsAndMatrices = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 1: Determinants and Matrices</h2>

      {/* Introduction to Determinants */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Determinants</h3>
        <p className="mb-4">
          <strong>Q1: What is a determinant?</strong>
          <br />
          A1: A determinant is a scalar value that can be computed from the elements of a square matrix. It provides useful information about the matrix, such as whether the matrix is invertible.
        </p>

        <p className="mb-4">
          <strong>Q2: How is a determinant calculated for a 2x2 matrix?</strong>
          <br />
          A2: For a 2x2 matrix  `[[a, b], [c, d]]`, the determinant is calculated as `ad - bc`.
          <br />
          <em>Example:</em> Calculate the determinant of `[[2, 3], [1, 4]]`.
          <br />
          <em>Solution:</em> (2 * 4) - (3 * 1) = 8 - 3 = 5.
        </p>

        <p className="mb-4">
          <strong>Q3: What are minors and cofactors?</strong>
          <br />
          A3: A minor is the determinant of the submatrix formed by deleting a row and column from the original matrix. A cofactor is a minor with a sign (+ or -) determined by its position.
        </p>

        <p className="mb-4">
          <strong>Q4: How are minors and cofactors used to calculate larger determinants?</strong>
          <br />
          A4: The determinant of a matrix can be calculated by expanding along any row or column using cofactors.
          <br />
          <em>Example:</em> Find the determinant of a 3x3 matrix using cofactor expansion.
        </p>
      </section>

      {/* Properties of Determinants */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Properties of Determinants</h3>
        <p className="mb-4">
          <strong>Q5: What are some important properties of determinants?</strong>
          <br />
          A5:
          <ul>
            <li>If a matrix has a row or column of zeros, its determinant is zero.</li>
            <li>If two rows or columns are interchanged, the sign of the determinant changes.</li>
            <li>If a multiple of one row (or column) is added to another row (or column), the determinant remains unchanged.</li>
            <li>The determinant of a matrix is equal to the determinant of its transpose.</li>
            <li>The determinant of the product of two matrices is the product of their determinants: `det(AB) = det(A) * det(B)`.</li>
          </ul>
        </p>
      </section>

      {/* Introduction to Matrices */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Matrices</h3>
        <p className="mb-4">
          <strong>Q6: What is a matrix?</strong>
          <br />
          A6: A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns.
        </p>

        <p className="mb-4">
          <strong>Q7: What are different types of matrices?</strong>
          <br />
          A7:
          <ul>
            <li>Square Matrix: Number of rows equals the number of columns.</li>
            <li>Row Matrix: Only one row.</li>
            <li>Column Matrix: Only one column.</li>
            <li>Diagonal Matrix: Non-diagonal elements are zero.</li>
            <li>Identity Matrix: A diagonal matrix with all diagonal elements equal to 1.</li>
            <li>Null Matrix: All elements are zero.</li>
          </ul>
        </p>
      </section>

      {/* Matrix Operations */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Matrix Operations</h3>
        <p className="mb-4">
          <strong>Q8: How do you add or subtract matrices?</strong>
          <br />
          A8: Matrices can be added or subtracted element-wise, but only if they have the same dimensions.
          <br />
          <em>Example:</em>
          `A = [[1, 2], [3, 4]]`, `B = [[5, 6], [7, 8]]`
          `A + B = [[6, 8], [10, 12]]`
        </p>

        <p className="mb-4">
          <strong>Q9: How do you multiply a matrix by a scalar?</strong>
          <br />
          A9: Multiply each element of the matrix by the scalar.
          <br />
          <em>Example:</em>
          `A = [[1, 2], [3, 4]]`, scalar = 2
          `2 * A = [[2, 4], [6, 8]]`
        </p>

        <p className="mb-4">
          <strong>Q10: How do you multiply two matrices?</strong>
          <br />
          A10: Matrix multiplication involves multiplying rows of the first matrix by columns of the second matrix. For the product to be defined, the number of columns in the first matrix must equal the number of rows in the second matrix.
          <br />
          <em>Example:</em> Explain with a clear step-by-step calculation.
        </p>
      </section>

      {/* Adjoint and Inverse */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Adjoint and Inverse</h3>
        <p className="mb-4">
          <strong>Q11: What is the adjoint of a matrix?</strong>
          <br />
          A11: The adjoint of a matrix is the transpose of its cofactor matrix.
        </p>

        <p className="mb-4">
          <strong>Q12: What is the inverse of a matrix?</strong>
          <br />
          A12: The inverse of a matrix A is a matrix B such that `AB = BA = I`, where I is the identity matrix. The inverse exists only if the determinant of A is non-zero. The formula to find the inverse is `A⁻¹ = adj(A) / det(A)`.
          <br />
          <em>Example:</em> Find the inverse of a 2x2 matrix.
        </p>
      </section>

      {/* Cramers Rule */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Cramer's Rule</h3>
        <p className="mb-4">
          <strong>Q13: What is Cramer's Rule?</strong>
          <br />
          A13: Cramer's rule is a method for solving systems of linear equations using determinants.
          <br />
          <em>Example:</em> Solve a system of two linear equations using Cramer's Rule.
        </p>
      </section>

      {/* Rank of Matrix */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Rank of a Matrix</h3>
        <p className="mb-4">
          <strong>Q14: What is the rank of a matrix?</strong>
          <br />
          A14: The rank of a matrix is the maximum number of linearly independent rows (or columns) in the matrix.
        </p>

        <p className="mb-4">
          <strong>Q15: How do you find the rank of a matrix?</strong>
          <br />
          A15: The rank can be found by reducing the matrix to row-echelon form and counting the number of non-zero rows.
          <br />
          <em>Example:</em> Find the rank of a 3x3 matrix.
        </p>
      </section>

      {/* Dependence of Vectors */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Dependence of Vectors</h3>
        <p className="mb-4">
          <strong>Q16: What does it mean for vectors to be linearly dependent?</strong>
          <br />
          A16: Vectors are linearly dependent if one of the vectors can be written as a linear combination of the others.
        </p>

        <p className="mb-4">
          <strong>Q17: How can you check for linear dependence?</strong>
          <br />
          A17: You can check by setting up a linear combination equal to the zero vector and solving for the coefficients. If there is a non-trivial solution, the vectors are linearly dependent.
          <br />
          <em>Example:</em> Check if a set of 3D vectors is linearly dependent.
        </p>
      </section>

      {/* Eigen Vectors of a Matrix */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Eigenvectors and Eigenvalues</h3>
        <p className="mb-4">
          <strong>Q18: What are eigenvectors and eigenvalues?</strong>
          <br />
          A18: Eigenvectors are non-zero vectors that, when a linear transformation is applied, change by only a scalar factor. The corresponding scalar is called the eigenvalue.
        </p>

        <p className="mb-4">
          <strong>Q19: How do you find eigenvalues and eigenvectors?</strong>
          <br />
          A19: First, solve the characteristic equation `det(A - λI) = 0` for λ (eigenvalues). Then, for each eigenvalue, solve the system `(A - λI)v = 0` to find the eigenvector v.
          <br />
          <em>Example:</em> Find the eigenvalues and eigenvectors of a 2x2 matrix.
        </p>
      </section>

      {/* Cayley-Hamilton Theorem */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Cayley-Hamilton Theorem</h3>
        <p className="mb-4">
          <strong>Q20: What is the Cayley-Hamilton Theorem?</strong>
          <br />
          A20: The Cayley-Hamilton Theorem states that every square matrix satisfies its own characteristic equation.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define a determinant and explain its properties with examples.</li>
          <li>Explain how to find the adjoint and inverse of a matrix.</li>
          <li>Solve a system of linear equations using Cramer's Rule.</li>
          <li>Determine the rank of a matrix and check for linear dependence of vectors.</li>
          <li>Find the eigenvalues and eigenvectors of a matrix.</li>
          <li>State the Cayley-Hamilton Theorem and explain its significance.</li>
          <li>Perform matrix addition, subtraction, and multiplication. Provide examples.</li>
          <li>Explain the importance of matrices and determinants in various fields.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter1_DeterminantsAndMatrices;
