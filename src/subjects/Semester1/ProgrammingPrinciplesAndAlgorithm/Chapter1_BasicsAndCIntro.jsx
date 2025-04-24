'use client';
import React from 'react';

const Chapter1_BasicsAndCIntro = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 1: Basics and C Introduction</h2>

      {/* Introduction to Programming */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Programming</h3>
        <p className="mb-4">
          <strong>Q1: What is a program?</strong>
          <br />
          A1: A program is a set of instructions that tells a computer how to perform a specific task.
        </p>

        <p className="mb-4">
          <strong>Q2: What is programming?</strong>
          <br />
          A2: Programming is the process of writing or coding instructions for a computer to execute.
        </p>

        <p className="mb-4">
          <strong>Q3: What is a programming language?</strong>
          <br />
          A3: A programming language is a formal language used to communicate instructions to a computer.
        </p>
      </section>

      {/* Introduction to C Language */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to C Language</h3>
        <p className="mb-4">
          <strong>Q4: What is the C programming language?</strong>
          <br />
          A4: C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion.
        </p>

        <p className="mb-4">
          <strong>Q5: What are the basic features of the C language?</strong>
          <br />
          A5: Basic features include functions, variables, data types, control structures, and operators.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>What is the role of a compiler in the programming process?</li>
          <li>Explain the difference between procedural and object-oriented programming.</li>
          <li>What are the key advantages of using the C programming language?</li>
          <li>Describe the purpose and function of variables in programming.</li>
          <li>How do control structures influence the flow of a program?</li>
          <li>What are the common data types used in C, and how do they differ?</li>
          <li>Explain the steps involved in writing, compiling, and executing a C program.</li>
          <li>What are the key differences between source code and executable code?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter1_BasicsAndCIntro;
