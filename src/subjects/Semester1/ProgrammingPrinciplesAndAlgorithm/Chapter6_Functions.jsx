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
          A1: A function is a self-contained block of code that performs a specific task. It's like a mini-program within your larger program.
        </p>

        <p className="mb-4">
          <strong>Q2: What are the advantages of using functions?</strong>
          <br />
          A2: Advantages include code reusability, modularity, and easier debugging. Functions make your code more organized and easier to understand.
        </p>
      </section>

      {/* Defining a Function */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Defining a Function</h3>
        <p className="mb-4">
          <strong>Q3: How do you define a function in C?</strong>
          <br />
          A3: You define a function using the following structure:
          <pre>
            <code>
              {`return_type function_name(parameter_list) {\n` +
               `  // Code to be executed\n` +
               `  return value;\n` +
               `}`}
            </code>
          </pre>
          Where <code>return_type</code> is the type of data the function returns, <code>function_name</code> is the name you give to the function, and <code>parameter_list</code> is a list of input values the function accepts.
        </p>

        <p className="mb-4">
          <strong>Q4: What is a function prototype?</strong>
          <br />
          A4: A function prototype declares the function's name, return type, and parameters, allowing the compiler to check for correct usage before the function is defined. It's like a contract that tells the compiler what to expect.
          <pre>
            <code>
              {`return_type function_name(parameter_list);`}
            </code>
          </pre>
        </p>
      </section>

      {/* Parameters and Variables */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Parameters and Variables</h3>
        <p className="mb-4">
          <strong>Q5: What are function parameters?</strong>
          <br />
          A5: Function parameters are values passed to a function when it is called, allowing the function to operate on different data. They are like inputs to the function.
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
          <li>
            <strong>Explain the importance of functions in structured programming.</strong>
            <br/>
            <em>Functions promote modularity, reusability, and easier debugging, making code more organized and maintainable.</em>
          </li>
          <li>
            <strong>How do you declare and define a function in C?</strong>
            <br/>
            <em>Declaration: <code>return_type function_name(parameter_list);</code> Definition: <code>return_type function_name(parameter_list) { /* code */ }</code></em>
          </li>
          <li>
            <strong>What is the role of function parameters, and how are they passed?</strong>
            <br/>
            <em>Function parameters are used to pass data to a function. They can be passed by value (a copy of the data) or by reference (the memory address of the data).</em>
          </li>
          <li>
            <strong>Describe the differences between local and global variables.</strong>
            <br/>
            <em>Local variables are declared inside a function and have scope limited to that function. Global variables are declared outside any function and can be accessed from anywhere in the program.</em>
          </li>
          <li>
            <strong>Create a recursive function to calculate the factorial of a number.</strong>
            <br/>
            <code>
              {`#include <stdio.h>\n` +
               `int factorial(int n) {\n` +
               `  if (n == 0)\n` +
               `   return 1;\n` +
               `  else\n` +
               `   return n * factorial(n - 1);\n` +
               `}\n` +
               `int main() {\n` +
               `  int num = 5;\n` +
               `  printf("Factorial of %d is %d\\n", num, factorial(num));\n` +
               `  return 0;\n` +
               `}`}
            </code>
          </li>
          <li>
            <strong>What are the advantages and disadvantages of using recursion?</strong>
            <br/>
            <em>Advantages include elegant solutions to problems that can be broken down into smaller, self-similar subproblems. Disadvantages include potential for stack overflow and increased memory usage.</em>
          </li>
          <li>
            <strong>How can you pass arrays and strings as parameters to functions?</strong>
            <br/>
            <em>Arrays and strings are passed to functions by passing a pointer to the first element.</em>
          </li>
          <li>
            <strong>What is the purpose of a function prototype, and where should it be placed in the code?</strong>
            <br/>
            <em>A function prototype tells the compiler about the function's return type, name, and parameters, allowing the compiler to check for correct usage. It should be placed before the function is called.</em>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter6_Functions;
