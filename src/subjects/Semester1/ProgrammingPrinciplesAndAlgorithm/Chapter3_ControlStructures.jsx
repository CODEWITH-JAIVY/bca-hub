'use client';
import React from 'react';

const Chapter3_ControlStructures = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 3: Control Structures</h2>

      {/* Introduction to Control Structures */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Control Structures</h3>
        <p className="mb-4">
          <strong>Q1: What are control structures?</strong>
          <br />
          A1: Control structures are programming constructs that allow the control flow of a program to be altered based on certain conditions.
        </p>

        <p className="mb-4">
          <strong>Q2: What are the types of control structures in C?</strong>
          <br />
          A2: Types include sequential, selection (if, if-else, switch), and iteration (for, while, do-while) control structures.
        </p>
      </section>

      {/* Selection Control Structures */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Selection Control Structures</h3>
        <p className="mb-4">
          <strong>Q3: Explain the if statement.</strong>
          <br />
          A3: The if statement executes a block of code if a specified condition is true.
        </p>

        <p className="mb-4">
          <strong>Q4: Explain the if-else statement.</strong>
          <br />
          A4: The if-else statement executes one block of code if a condition is true and another block of code if the condition is false.
        </p>

        <p className="mb-4">
          <strong>Q5: Explain the switch statement.</strong>
          <br />
          A5: The switch statement selects one of several code blocks to execute based on the value of a variable.
        </p>
      </section>

      {/* Iteration Control Structures */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Iteration Control Structures</h3>
        <p className="mb-4">
          <strong>Q6: Explain the for loop.</strong>
          <br />
          A6: The for loop is used to repeat a block of code a specific number of times.
        </p>

        <p className="mb-4">
          <strong>Q7: Explain the while loop.</strong>
          <br />
          A7: The while loop repeats a block of code as long as a specified condition is true.
        </p>

        <p className="mb-4">
          <strong>Q8: Explain the do-while loop.</strong>
          <br />
          A8: The do-while loop repeats a block of code at least once, and then continues to repeat as long as a specified condition is true.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Describe the syntax and usage of the if statement in C.</li>
          <li>How does the if-else statement differ from the if statement? Provide examples.</li>
          <li>Explain the purpose of the switch statement and when it is most useful.</li>
          <li>What are the components of a for loop, and how do they control the loop's execution?</li>
          <li>How does the while loop work, and what are its common use cases?</li>
          <li>Describe the key differences between the while and do-while loops.</li>
          <li>Create a program that uses nested control structures (e.g., if inside a for loop).</li>
          <li>Discuss the importance of control structures in programming.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter3_ControlStructures;
