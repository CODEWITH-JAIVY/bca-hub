import React from 'react';

const Chapter1_ArraysAndMatrices = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 1: Arrays and Matrices</h2>

            <h3 className="text-xl font-semibold">1. What is an Array?</h3>
            <p>
                An array is a linear data structure that stores elements of the same data type in contiguous memory locations. Each element is accessed using its index, starting from 0.
            </p>

            <div className="bg-gray-100 p-3 rounded">
                <pre><code>int arr[5] = {'{1, 2, 3, 4, 5} '};</code></pre>
                <p>Memory Layout Example:</p>
                <pre className="whitespace-pre-wrap">
Index:   0   1   2   3   4
Value:   1   2   3   4   5
                </pre>
            </div>

            <h3 className="text-xl font-semibold">2. Characteristics of Arrays</h3>
            <ul className="list-disc list-inside">
                <li>Fixed size</li>
                <li>Same data type</li>
                <li>Stored in contiguous memory</li>
                <li>Random access using index</li>
            </ul>

            <h3 className="text-xl font-semibold">3. What is a Matrix?</h3>
            <p>
                A matrix is a two-dimensional array organized in rows and columns. It can be visualized like a table.
            </p>

            <div className="bg-gray-100 p-3 rounded">
                <pre><code>int matrix[2][3] = {'{ {1, 2, 3}, {4, 5, 6} }  '};</code></pre>
                <p>Matrix Layout:</p>
                <pre className="whitespace-pre-wrap">
Row\Col:   0   1   2
       0   1   2   3
       1   4   5   6
                </pre>
            </div>

            <h3 className="text-xl font-semibold">4. Representation of Arrays</h3>
            <p>
                Arrays can be one-dimensional (1D), two-dimensional (2D), or multidimensional. In memory, they are stored in a row-major or column-major order.
            </p>

            <h3 className="text-xl font-semibold">5. Special Types of Matrices</h3>
            <ul className="list-disc list-inside">
                <li><strong>Lower Triangular Matrix:</strong> All elements above the main diagonal are zero.</li>
                <li><strong>Upper Triangular Matrix:</strong> All elements below the main diagonal are zero.</li>
                <li><strong>Tridiagonal Matrix:</strong> Non-zero elements are only on the main diagonal and the diagonals just above and below it.</li>
            </ul>

            <h3 className="text-xl font-semibold">6. Vector Representation of Special Matrices</h3>
            <p>
                To save memory, special matrices like triangular and tridiagonal matrices are stored in vectors by storing only the non-zero elements.
            </p>

            <h3 className="text-xl font-semibold">7. Important Questions</h3>
            <ul className="list-decimal list-inside">
                <li>Define array and explain its characteristics.</li>
                <li>Explain how arrays are represented in memory.</li>
                <li>What is a matrix? How is it implemented using arrays?</li>
                <li>Describe the row-major and column-major order for storing matrices.</li>
                <li>What are sparse matrices? Explain their vector representation.</li>
                <li>Differentiate between lower, upper, and tridiagonal matrices.</li>
                <li>Write C++ code to declare and access a 2D matrix.</li>
            </ul>
        </div>
    );
};

export default Chapter1_ArraysAndMatrices;
