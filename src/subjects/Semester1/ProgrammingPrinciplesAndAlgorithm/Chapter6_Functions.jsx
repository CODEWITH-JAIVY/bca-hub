import React from 'react';

const Chapter6_Functions = () => {
  return (
    <div>
      <h2>Chapter 6: Functions</h2>
      <p>
        <strong>Q1: What is a function in C?</strong>
        <br />
        A1: A function is a self-contained block of code that performs a specific task.
      </p>
      <p>
        <strong>Q2: What are the advantages of using functions?</strong>
        <br />
        A2: Advantages include code reusability, modularity, and easier debugging.
      </p>
      <p>
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
      <p>
        <strong>Q4: What is a function prototype?</strong>
        <br />
        A4: A function prototype declares the function's name, return type, and parameters, allowing the compiler to check for correct usage before the function is defined.
      </p>
      <p>
        <strong>Q5: What are function parameters?</strong>
        <br />
        A5: Function parameters are values passed to a function when it is called, allowing the function to operate on different data.
      </p>
      <p>
        <strong>Q6: What are local and global variables?</strong>
        <br />
        A6: Local variables are declared inside a function and are only accessible within that function, while global variables are declared outside any function and are accessible throughout the program.
      </p>
      <p>
        <strong>Q7: What is recursion?</strong>
        <br />
        A7: Recursion is the process of a function calling itself, used to solve problems that can be broken down into smaller, self-similar subproblems.
      </p>
    </div>
  );
};

export default Chapter6_Functions;
