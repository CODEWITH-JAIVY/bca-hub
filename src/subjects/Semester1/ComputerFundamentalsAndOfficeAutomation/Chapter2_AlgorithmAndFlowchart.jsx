'use client';
import React from 'react';

const Chapter2_AlgorithmAndFlowchart = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 2: Algorithm and Flowchart</h2>

      {/* Introduction to Algorithm */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Algorithm</h3>
        <p className="mb-4">
          An algorithm is a step-by-step procedure or set of rules for solving a specific problem.
        </p>

        <p className="mb-4">
          <strong>Q1: What are the characteristics of a good algorithm?</strong>
          <br />
          A1: A good algorithm should be clear, precise, finite, effective, and have a well-defined input and output.
        </p>
      </section>

      {/* Introduction to Flowchart */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Flowchart</h3>
        <p className="mb-4">
          A flowchart is a diagrammatic representation of an algorithm, using symbols to represent different operations and steps.
        </p>

        <p className="mb-4">
          <strong>Q2: What are the basic symbols used in a flowchart?</strong>
          <br />
          A2: Common symbols include terminal (start/end), process, decision, input/output, and connector.
        </p>
      </section>

      {/* Practical Application */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
        <p className="mb-4">
          <strong>Q3: How do you create an algorithm for a simple problem?</strong>
          <br />
          A3: Identify the problem, define the input and output, outline the steps required to solve the problem, and test the algorithm with different inputs.
        </p>

        <p className="mb-4">
          <strong>Q4: How does a flowchart help in problem-solving?</strong>
          <br />
          A4: A flowchart provides a visual representation of the problem-solving process, making it easier to understand and debug the algorithm.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Write an algorithm to find the largest number in a list.</li>
          <li>Draw a flowchart for the algorithm to calculate the factorial of a number.</li>
          <li>Describe the purpose and function of each symbol used in a flowchart.</li>
          <li>Explain the differences between an algorithm and a flowchart.</li>
          <li>Create an algorithm to sort a list of numbers in ascending order.</li>
          <li>Draw a flowchart for the algorithm to determine if a number is prime.</li>
          <li>Why is it important for an algorithm to be finite and effective?</li>
          <li>How can flowcharts help in debugging complex algorithms?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter2_AlgorithmAndFlowchart;
