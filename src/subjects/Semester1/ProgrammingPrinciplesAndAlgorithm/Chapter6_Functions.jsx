'use client';
import React from 'react';

const Chapter6_Functions = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 6: Functions</h2>

      {/* Introduction to Functions */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Functions</h3>
        <p className="mb-4">
          <strong>Q1: What is a function in C?</strong>
          <br />
          A1: A function is a self-contained block of code that performs a specific task.
        </p>

        <p className="mb-4">
          <strong>Q2: What are the advantages of using functions?</strong>
          <br />
          A2: Advantages include code reusability, modularity, and easier debugging.
        </p>
      </section>

      {/* Defining a Function */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Defining a Function</h3>
        <p className="mb-4">
          <strong>Q3: How do you define a function in C?</strong>
          <br />
          A3:
          <code>
            return_type function_name(parameter_list) {<br />
            &nbsp;&nbsp;// code to be executed<br />
            &nbsp;&nbsp;return value;<br />
            }
          </code>
        </p>

        <p className="mb-4">
          <strong>Q4: What is a function prototype?</strong>
          <br />
          A4: A function prototype declares the function's name, return type, and parameters, allowing the compiler to check for correct usage before the function is defined.
        </p>
      </section>

      {/* Parameters and Variables */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Parameters and Variables</h3>
        <p className="mb-4">
          <strong>Q5: What are function parameters?</strong>
          <br />
          A5: Function parameters are values passed to a function when it is called, allowing the function to operate on different data.
        </p>

        <p className="mb-4">
          <strong>Q6: What are local and global variables?</strong>
          <br />
          A6: Local variables are declared inside a function and are only accessible within that function, while global variables are declared outside any function and are accessible throughout the program.
        </p>
      </section>

      {/* Recursion */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Recursion</h3>
        <p className="mb-4">
          <strong>Q7: What is recursion?</strong>
          <br />
          A7: Recursion is the process of a function calling itself, used to solve problems that can be broken down into smaller, self-similar subproblems.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Explain the importance of functions in structured programming.</li>
          <li>How do you declare and define a function in C?</li>
          <li>What is the role of function parameters, and how are they passed?</li>
          <li>Describe the differences between local and global variables.</li>
          <li>Create a recursive function to calculate the factorial of a number.</li>
          <li>What are the advantages and disadvantages of using recursion?</li>
          <li>How can you pass arrays and strings as parameters to functions?</li>
          <li>What is the purpose of a function prototype, and where should it be placed in the code?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter6_Functions;
