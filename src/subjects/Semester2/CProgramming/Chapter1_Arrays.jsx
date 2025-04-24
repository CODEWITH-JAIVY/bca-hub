import React from 'react';

// Chapter1_Arrays component: Comprehensive explanation of arrays in C programming, covering definitions, types, operations, and practical examples.
const Chapter1_Arrays = () => {

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 1: Arrays in C</h2>

      {/* Introduction to Arrays */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Arrays</h3>
        <p className="mb-4">
          An array is a contiguous block of memory used to store a
          collection of elements of the same data type. Each element in the
          array can be accessed using its index, starting from 0.
        </p>

        <p className="mb-4">
          <strong>Q1: What are the characteristics of an array?</strong>
          <br />
          A1: Key characteristics include:
          <ul className="list-disc ml-6">
            <li>Contiguous Block of Memory</li>
            <li>Same Data Type</li>
            <li>Index-Based Access</li>
            <li>Starting from 0</li>
          </ul>
        </p>
      </section>

      {/* Advantages and Disadvantages */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Advantages and Disadvantages of Arrays
        </h3>
        <div className="mb-2">
          <h4 className="text-lg font-semibold mb-1">Advantages</h4>
          <ul className="list-disc list-inside">
            <li>Efficient access to elements using indices.</li>
            <li>Simple and easy-to-use data structure.</li>
            <li>Contiguous memory allocation improves performance.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Disadvantages</h4>
          <ul className="list-disc list-inside">
            <li>Fixed size; cannot be changed after declaration.</li>
            <li>Inserting or deleting elements can be inefficient.</li>
            <li>Wasted memory if the array is not fully utilized.</li>
          </ul>
        </div>
      </section>

      {/* Declaration and Initialization */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Declaration and Initialization
        </h3>
        <div className="mb-2">
          <h4 className="text-lg font-semibold mb-1">Declaration</h4>
          <p className="mb-1">
            Arrays are declared using the syntax: <code>dataType arrayName[arraySize];</code>
          </p>
          <pre>
            <code>int numbers[5]; // Declares an integer array named 'numbers' with a size of 5</code>
          </pre>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Initialization</h4>
          <p className="mb-1">
            Arrays can be initialized during declaration or later using a loop.
          </p>
          <pre>
            <code>
              {`int numbers[5] = {1, 2, 3, 4, 5}; // Initializes the array during declaration`}
            </code>
          </pre>
          <pre>
            <code>
              {`int ages[3];
ages[0] = 25;
ages[1] = 30;
ages[2] = 22; // Initializes elements individually`}
            </code>
          </pre>
        </div>
      </section>

      {/* Types of Arrays */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Types of Arrays</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>One-Dimensional Arrays:</strong> A single row of elements.
          </li>
          <li>
            <strong>Multidimensional Arrays:</strong> Arrays with more than one
            dimension (e.g., two-dimensional, three-dimensional).
          </li>
        </ul>
      </section>

      {/* Accessing Array Elements */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Accessing Array Elements</h3>
        <p className="mb-4">
          Elements in an array are accessed using their indices, with the first
          element at index 0.
        </p>
        <pre>
          <code>{`int first = numbers[0]; // Accesses the first element of 'numbers'
int third = numbers[2]; // Accesses the third element`}</code>
        </pre>
      </section>

      {/* Multidimensional Arrays */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Multidimensional Arrays</h3>
        <p className="mb-2">
          Arrays can have multiple dimensions, with the most common being
          two-dimensional arrays (matrices).
        </p>
        <h4 className="text-lg font-semibold mb-1">Declaration</h4>
        <pre>
          <code>
           {`int matrix[3][3]; // Declares a 3x3 integer matrix`}
          </code>
        </pre>
        <h4 className="text-lg font-semibold mb-1">Initialization</h4>
        <pre>
          <code>
           {`int matrix[3][3] = {
                        {1, 2, 3},
                        {4, 5, 6},
                        {7, 8, 9}
                    };`}
          </code>
        </pre>
         <h4 className="text-lg font-semibold mb-1">Accessing and Displaying 2D Array</h4>
         <pre>
          <code>
           {`#include <stdio.h>

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    // Accessing and displaying the elements of the 2D array
    printf("Elements in the 2D array:\\n");
    for (int i = 0; i < 3; i++) { // Outer loop for rows
        for (int j = 0; j < 3; j++) { // Inner loop for columns
            printf("%d ", matrix[i][j]); // Print each element
        }
        printf("\\n"); // Newline after each row
    }

    return 0;
}`}
          </code>
        </pre>
      </section>

       {/* Passing Arrays to Functions */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Passing Arrays to Functions</h3>
        <p className="mb-2">
          Arrays can be passed to functions in C. When you pass an array to a function, you're actually passing a pointer to the first element of the array.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    printArray(numbers, 5); // Pass the array and its size
    return 0;
}`}
          </code>
        </pre>
        <p className="mt-2">
          In this example, <b>printArray</b> takes an integer array <b>arr</b> and its size <b>size</b> as parameters. It then prints each element of the array.
        </p>
      </section>
       {/* Common Array Operations */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Common Array Operations</h3>
        <ul className="list-disc list-inside">
          <li>Sorting</li>
          <li>Searching</li>
          <li>Reversing</li>
          <li>Merging</li>
          <li>Copying</li>
          <li>Inserting</li>
          <li>Deleting</li>
        </ul>
      </section>
      {/* Applications and Examples */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Applications and Examples
        </h3>
        <p className="mb-2">
          Arrays are used in various algorithms and applications. Here are a few
          examples:
        </p>
        <ul className="list-disc list-inside">
          <li>Sorting algorithms (Bubble Sort, Insertion Sort).</li>
          <li>Searching algorithms (Linear Search, Binary Search).</li>
          <li>
            Storing data in tables and matrices (e.g., in image processing,
            game boards).
          </li>
          <li>Implementing other data structures (e.g., stacks, queues).</li>
        </ul>
      </section>
    </div>
  );
};

export default Chapter1_Arrays;
