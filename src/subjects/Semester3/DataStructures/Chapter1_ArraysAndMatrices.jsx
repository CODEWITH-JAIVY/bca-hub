import React from 'react';

const Chapter1_ArraysAndMatrices = () => {
    return (
        <div>
            <h2>Chapter 1: Arrays and Matrices</h2>
            <p>
                <strong>Q1: What is an array?</strong>
                <br />
                A1: An array is a collection of elements of the same data type, stored in contiguous memory locations.
            </p>
            <p>
                <strong>Q2: What is a matrix?</strong>
                <br />
                A2: A matrix is a two-dimensional array, consisting of rows and columns.
            </p>
            <p>
                <strong>Q3: How do you declare an array in C++?</strong>
                <br />
                A3: 
                <code>
                  int arr[5]; // Declares an integer array of size 5<br/>
                  double values[10]; // Declares a double array of size 10
                </code>
            </p>
            <p>
                <strong>Q4: How do you declare a matrix in C++?</strong>
                <br />
                A4: 
                <code>
                  int matrix[3][3]; // Declares a 3x3 integer matrix<br/>
                  float data[4][5]; // Declares a 4x5 floating-point matrix
                </code>
            </p>
            <p>
                <strong>Q5: How do you access elements in an array?</strong>
                <br />
                A5: Array elements are accessed using their index, starting from 0. For example, <code>arr[0]</code> is the first element.
            </p>
            <p>
                <strong>Q6: How do you access elements in a matrix?</strong>
                <br />
                A6: Matrix elements are accessed using row and column indices. For example, <code>matrix[0][0]</code> is the element at the first row and first column.
            </p>
            <p>
                <strong>Q7: What are the advantages of using arrays and matrices?</strong>
                <br />
                A7: Arrays and matrices provide efficient storage and access to large amounts of data of the same type, simplifying data manipulation and algorithms.
            </p>
        </div>
    );
};

export default Chapter1_ArraysAndMatrices;
