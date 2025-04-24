'use client';
import React from 'react';

const Chapter2_OperatorsAndIO = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 2: Operators and I/O</h2>

      {/* Introduction to Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Operators</h3>
        <p className="mb-4">
          <strong>Q1: What are operators in C?</strong>
          <br />
          A1: Operators are symbols that perform specific operations on operands (variables and values).
        </p>

        <p className="mb-4">
          <strong>Q2: What are different types of operators in C?</strong>
          <br />
          A2: Types include arithmetic operators, relational operators, logical operators, assignment operators, and bitwise operators.
        </p>
      </section>

      {/* Arithmetic Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Arithmetic Operators</h3>
        <p className="mb-4">
          <strong>Q3: What are arithmetic operators?</strong>
          <br />
          A3: Arithmetic operators perform mathematical operations such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
        </p>
      </section>

      {/* Relational Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Relational Operators</h3>
        <p className="mb-4">
          <strong>Q4: What are relational operators?</strong>
          <br />
          A4: Relational operators compare two operands and return a Boolean value (true or false), such as equal to (==), not equal to (!=), greater than (&gt;), less than (&lt;), greater than or equal to (&gt;=), and less than or equal to (&lt;=).
        </p>
      </section>

      {/* Logical Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Logical Operators</h3>
        <p className="mb-4">
          <strong>Q5: What are logical operators?</strong>
          <br />
          A5: Logical operators combine two or more conditions and return a Boolean value, such as AND (&&), OR (||), and NOT (!).
        </p>
      </section>

      {/* Assignment Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Assignment Operators</h3>
        <p className="mb-4">
          <strong>Q6: What are assignment operators?</strong>
          <br />
          A6: Assignment operators assign a value to a variable, such as =, +=, -=, *=, and /=.
        </p>
      </section>

      {/* Input/Output Functions */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Input/Output Functions</h3>
        <p className="mb-4">
          <strong>Q7: What are input/output (I/O) functions in C?</strong>
          <br />
          A7: I/O functions allow programs to receive input from the user and display output, such as printf() for output and scanf() for input.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>What is the order of precedence of arithmetic operators in C?</li>
          <li>Explain the difference between prefix and postfix increment operators.</li>
          <li>How are relational operators used in decision-making statements?</li>
          <li>Create a program that demonstrates the use of logical operators.</li>
          <li>Describe the purpose of assignment operators and their shorthand notations.</li>
          <li>How can you use the printf() function to format output in C?</li>
          <li>Explain how the scanf() function reads input from the user.</li>
          <li>What are the common errors to avoid when using I/O functions in C?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter2_OperatorsAndIO;
