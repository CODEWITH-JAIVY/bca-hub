'use client';
import React from 'react';

const Chapter2_LimitsAndContinuity = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 2: Limits and Continuity</h2>

      {/* Introduction to Limits */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Limits</h3>
        <p className="mb-4">
          <strong>Q1: What is a limit?</strong>
          <br />
          A1: A limit is the value that a function approaches as the input (or argument) approaches some value.
        </p>

        <p className="mb-4">
          <strong>Q2: How do you evaluate limits?</strong>
          <br />
          A2: Limits can be evaluated using direct substitution, factoring, rationalizing, or L'Hôpital's Rule.
        </p>
      </section>

      {/* Introduction to Continuity */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Continuity</h3>
        <p className="mb-4">
          <strong>Q3: What is continuity?</strong>
          <br />
          A3: A function is continuous at a point if it has a limit at that point, the limit exists, and the limit is equal to the function's value at that point.
        </p>

        <p className="mb-4">
          <strong>Q4: What are the conditions for a function to be continuous at a point?</strong>
          <br />
          A4: The function must be defined at the point, the limit must exist at the point, and the function value must equal the limit at the point.
        </p>

        <p className="mb-4">
          <strong>Q5: What are types of discontinuities?</strong>
          <br />
          A5: Types of discontinuities include removable discontinuity, jump discontinuity, and infinite discontinuity.
        </p>
      </section>

      {/* Intermediate Value Theorem */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Intermediate Value Theorem</h3>
        <p className="mb-4">
          <strong>Q6: What is the Intermediate Value Theorem?</strong>
          <br />
          A6: The Intermediate Value Theorem states that if a continuous function f takes values f(a) and f(b) at points a and b, then it also takes any value between f(a) and f(b) at some point within a and b.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define the concept of a limit and its importance in calculus.</li>
          <li>Evaluate the limit of a given function using direct substitution.</li>
          <li>Explain how to find the limit of a function using factoring.</li>
          <li>Describe the conditions for a function to be continuous at a point.</li>
          <li>What are the different types of discontinuities, and how do they affect the function?</li>
          <li>State the Intermediate Value Theorem and provide an example of its application.</li>
          <li>Explain L'Hôpital's Rule and when it is applicable.</li>
          <li>How can you determine if a function is continuous over an interval?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter2_LimitsAndContinuity;
