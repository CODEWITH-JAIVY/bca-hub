import React from 'react';

const Chapter1_Arrays = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 1: Arrays</h2>
            <p className="mb-4">
                <strong>Q1: What is an array in C?</strong>
                <br />
                A1: An array is a collection of elements of the same data type, stored in contiguous memory locations.
            </p>
            <p className="mb-4">
                <strong>Q2: How do you declare an array in C?</strong>
                <br />
                A2: You declare an array by specifying the data type, array name, and the number of elements in square brackets.
                <br />
                <code>
                    int numbers[5]; {/* Declares an integer array named 'numbers' with 5 elements */}
                </code>
            </p>
            <p className="mb-4">
                <strong>Q3: How do you initialize an array in C?</strong>
                <br />
                A3: You can initialize an array during declaration or after declaration using a loop.
                <br />
                <code>
                    int numbers[5] = {1, 2, 3, 4, 5}; {/* Initialization during declaration */}
                </code>
            </p>
            <p className="mb-4">
                <strong>Q4: How do you access elements of an array?</strong>
                <br />
                A4: Array elements are accessed using their index, which starts from 0.
                <br />
                <code>
                    int firstNumber = numbers[0]; {/* Accesses the first element of the array */}
                </code>
            </p>
            <p className="mb-4">
                <strong>Q5: What are the different types of arrays?</strong>
                <br />
                A5: Types include one-dimensional arrays, two-dimensional arrays (matrices), and multi-dimensional arrays.
            </p>
            <p className="mb-4">
                <strong>Q6: What is a two-dimensional array?</strong>
                <br />
                A6: A two-dimensional array is an array of arrays, often used to represent tables or matrices.
            </p>
            <p className="mb-4">
                <strong>Q7: How do you declare and initialize a two-dimensional array?</strong>
                <br />
                A7:
                <code>
                    int matrix[3][3] = {
                        {1, 2, 3},
                        {4, 5, 6},
                        {7, 8, 9}
                    };
                </code>
            </p>
        </div>
    );
};

export default Chapter1_Arrays;
