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
          A1: A program is a set of instructions that tells a computer how to perform a specific task. Think of it like a recipe: each step in the recipe is an instruction for the computer.
        </p>

        <p className="mb-4">
          <strong>Q2: What is programming?</strong>
          <br />
          A2: Programming is the process of writing or coding instructions for a computer to execute. It's like writing that recipe, translating your ideas into a language the computer understands.
        </p>

        <p className="mb-4">
          <strong>Q3: What is a programming language?</strong>
          <br />
          A3: A programming language is a formal language used to communicate instructions to a computer. It provides a way for programmers to express their ideas in a structured and understandable format.
        </p>

        <p className="mb-4">
          <strong>Q4: What are the different levels of programming languages?</strong>
          <br />
          A4: There are generally three levels:
            <ul className="list-disc ml-6">
              <li><strong>Machine Language:</strong> The lowest-level language, consisting of binary code (0s and 1s) that the computer can directly execute.</li>
              <li><strong>Assembly Language:</strong> A low-level language that uses mnemonics to represent machine code instructions.</li>
              <li><strong>High-Level Language:</strong> A language that is more abstract and uses human-readable syntax, such as C, Java, or Python.</li>
            </ul>
        </p>
      </section>

      {/* Introduction to C Language */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to C Language</h3>
        <p className="mb-4">
          <strong>Q5: What is the C programming language?</strong>
          <br />
          A5: C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion. It's known for its efficiency and control over hardware.
        </p>

        <p className="mb-4">
          <strong>Q6: What are the basic features of the C language?</strong>
          <br />
          A6: Basic features include functions, variables, data types, control structures, and operators. These are the building blocks you use to create programs.
           <ul className="list-disc ml-6">
            <li><strong>Functions:</strong> Reusable blocks of code.</li>
            <li><strong>Variables:</strong> Named storage locations that hold data.</li>
            <li><strong>Data Types:</strong> Specifies the type of data a variable can store (e.g., integer, float, character).</li>
            <li><strong>Control Structures:</strong> Statements that control the flow of execution (e.g., if, else, for, while).</li>
            <li><strong>Operators:</strong> Symbols that perform operations on data (e.g., +, -, *, /).</li>
          </ul>
        </p>

        <p className="mb-4">
          <strong>Q7: What is the history of the C language?</strong>
          <br />
          A7: C was developed in the early 1970s by Dennis Ritchie at Bell Labs. It was initially used to re-implement the Unix operating system.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            <strong>What is the role of a compiler in the programming process?</strong>
            <br/>
            <em>The compiler translates human-readable source code into machine code that the computer can understand and execute. It checks for syntax errors and ensures the code follows the language rules.</em>
          </li>
          <li>
            <strong>Explain the difference between procedural and object-oriented programming.</strong>
            <br/>
            <em>Procedural programming focuses on writing a sequence of instructions to perform a task. Object-oriented programming, on the other hand, focuses on creating "objects" that contain both data and functions, promoting code reusability and modularity.</em>
          </li>
          <li>
            <strong>What are the key advantages of using the C programming language?</strong>
            <br/>
            <em>C is known for its efficiency, portability, and control over hardware. It's widely used in system programming, embedded systems, and performance-critical applications.</em>
          </li>
          <li>
            <strong>Describe the purpose and function of variables in programming.</strong>
            <br/>
            <em>Variables are named storage locations in the computer's memory that hold data values. They allow you to store, retrieve, and manipulate data within a program.</em>
          </li>
          <li>
            <strong>How do control structures influence the flow of a program?</strong>
            <br/>
            <em>Control structures (like if statements and loops) allow you to control the order in which instructions are executed, making decisions and repeating code blocks as needed.</em>
          </li>
          <li>
            <strong>What are the common data types used in C, and how do they differ?</strong>
            <br/>
            <em>Common data types include int (integers), float (floating-point numbers), char (characters), and double (double-precision floating-point numbers). They differ in the type of data they can store and the amount of memory they require.</em>
          </li>
          <li>
            <strong>Explain the steps involved in writing, compiling, and executing a C program.</strong>
            <br/>
            <em>First, you write the source code in a text editor. Then, you compile the code using a C compiler, which translates it into object code. Next, the linker combines the object code with necessary libraries to create an executable file. Finally, you run the executable file to execute the program.</em>
          </li>
          <li>
            <strong>What are the key differences between source code and executable code?</strong>
            <br/>
            <em>Source code is the human-readable code written by the programmer. Executable code is the machine-readable code that the computer can directly execute.</em>
          </li>
           <li>
            <strong>what are the advantages of high level languages ?</strong>
            <br/>
            <em>high level languages are easer to read and understand  and  take less time to write 
</em>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter1_BasicsAndCIntro;
