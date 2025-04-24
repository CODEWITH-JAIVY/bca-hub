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
          An algorithm is a step-by-step procedure or set of rules for solving a specific problem. It provides a clear and concise method for achieving a desired outcome.
        </p>

        <p className="mb-4">
          <strong>Q1: What are the characteristics of a good algorithm?</strong>
          <br />
          A1: A good algorithm should be:
          <ul className="list-disc ml-6">
            <li><strong>Clear and Unambiguous:</strong> Each step should be clearly defined and easy to understand.</li>
            <li><strong>Precise:</strong> Instructions should be exact and leave no room for interpretation.</li>
            <li><strong>Finite:</strong> The algorithm must terminate after a finite number of steps.</li>
            <li><strong>Effective:</strong> The algorithm should be able to solve the problem correctly.</li>
            <li><strong>Input and Output:</strong> It should have well-defined input and output.</li>
          </ul>
        </p>

        <p className="mb-4">
          <strong>Q2: What are the advantages and disadvantages of using algorithms?</strong>
          <br />
          A2:
          <ul className="list-disc ml-6">
            <li><strong>Advantages:</strong>
              <ul>
                <li>Provides a clear roadmap for solving a problem.</li>
                <li>Facilitates code development and debugging.</li>
                <li>Helps in understanding the problem and solution.</li>
              </ul>
            </li>
            <li><strong>Disadvantages:</strong>
              <ul>
                <li>Designing complex algorithms can be time-consuming.</li>
                <li>May not be suitable for all types of problems.</li>
                <li>Can be difficult to express non-sequential tasks.</li>
              </ul>
            </li>
          </ul>
        </p>

        <p className="mb-4">
          <strong>Q3: Provide an example of an algorithm.</strong>
          <br />
          A3: Algorithm to find the sum of two numbers:
          <ol className="list-decimal ml-6">
            <li>Start</li>
            <li>Input the first number, A</li>
            <li>Input the second number, B</li>
            <li>Calculate the sum, SUM = A + B</li>
            <li>Display SUM</li>
            <li>End</li>
          </ol>
        </p>
      </section>

      {/* Introduction to Flowchart */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Flowchart</h3>
        <p className="mb-4">
          A flowchart is a diagrammatic representation of an algorithm, using symbols to represent different operations and steps. It provides a visual way to understand the flow of the algorithm.
        </p>

        <p className="mb-4">
          <strong>Q4: What are the basic symbols used in a flowchart?</strong>
          <br />
          A4: Common symbols include:
          <ul className="list-disc ml-6">
            <li><strong>Terminal:</strong> Represents the start and end points of the algorithm.</li>
            <li><strong>Process:</strong> Represents a specific operation or action.</li>
            <li><strong>Decision:</strong> Represents a decision point with multiple possible paths.</li>
            <li><strong>Input/Output:</strong> Represents the input or output of data.</li>
            <li><strong>Connector:</strong> Represents a jump in the flow of the algorithm.</li>
          </ul>
          <img src="https://picsum.photos/400/200" alt="Flowchart Symbols" className="my-4 rounded-lg shadow-md"/>
        </p>

        <p className="mb-4">
          <strong>Q5: What are the advantages and disadvantages of using flowcharts?</strong>
          <br />
          A5:
          <ul className="list-disc ml-6">
            <li><strong>Advantages:</strong>
              <ul>
                <li>Provides a visual representation of the algorithm.</li>
                <li>Makes the logic clear and easy to understand.</li>
                <li>Facilitates communication and collaboration.</li>
              </ul>
            </li>
            <li><strong>Disadvantages:</strong>
              <ul>
                <li>Can be time-consuming to create for complex algorithms.</li>
                <li>May become complex and difficult to follow for large algorithms.</li>
                <li>Difficult to modify once created.</li>
              </ul>
            </li>
          </ul>
        </p>
      </section>

      {/* Practical Application */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
        <p className="mb-4">
          <strong>Q6: How do you create an algorithm for a simple problem?</strong>
          <br />
          A6: To create an algorithm for a simple problem:
          <ol className="list-decimal ml-6">
            <li>Identify the problem and understand its requirements.</li>
            <li>Define the input and output.</li>
            <li>Outline the steps required to solve the problem.</li>
            <li>Write the algorithm in a clear and concise manner.</li>
            <li>Test the algorithm with different inputs.</li>
          </ol>
        </p>

        <p className="mb-4">
          <strong>Q7: How does a flowchart help in problem-solving?</strong>
          <br />
          A7: A flowchart provides a visual representation of the problem-solving process, making it easier to:
          <ul className="list-disc ml-6">
            <li>Understand the flow of logic.</li>
            <li>Identify potential errors or inefficiencies.</li>
            <li>Communicate the solution to others.</li>
            <li>Debug the algorithm.</li>
          </ul>
        </p>

        <p className="mb-4">
          <strong>Q8: Provide an example of a flowchart for the algorithm to find the sum of two numbers.</strong>
          <br />
          A8:  Flowchart for finding the sum of two numbers:
          <img src="https://picsum.photos/400/200" alt="Flowchart Example" className="my-4 rounded-lg shadow-md"/>
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Write an algorithm to find the largest number in a list. Provide a detailed explanation for each step.</li>
          <li>Draw a flowchart for the algorithm to calculate the factorial of a number. Explain the symbols used and the flow of the algorithm.</li>
          <li>Describe the purpose and function of each symbol used in a flowchart with examples.</li>
          <li>Explain the differences between an algorithm and a flowchart, highlighting their advantages and disadvantages.</li>
          <li>Create an algorithm to sort a list of numbers in ascending order using the bubble sort technique.</li>
          <li>Draw a flowchart for the algorithm to determine if a number is prime. Show all possible paths and decision points.</li>
          <li>Why is it important for an algorithm to be finite and effective? Discuss with real-world examples.</li>
          <li>How can flowcharts help in debugging complex algorithms? Provide a scenario and demonstrate the debugging process.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter2_AlgorithmAndFlowchart;
