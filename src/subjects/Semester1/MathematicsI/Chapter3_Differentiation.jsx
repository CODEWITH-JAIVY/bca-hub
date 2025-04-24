'use client';
import React from 'react';

const Chapter3_Differentiation = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 3: Differentiation</h2>

      {/* Introduction to Derivatives */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Derivatives</h3>
        <p className="mb-4">
          <strong>Q1: What is a derivative?</strong>
          <br />
          A1: The derivative of a function measures the rate of change of the function with respect to its input variable.
        </p>

        <p className="mb-4">
          <strong>Q2: How do you find the derivative of a function?</strong>
          <br />
          A2: Derivatives can be found using rules like the power rule, product rule, quotient rule, and chain rule.
        </p>
      </section>

      {/* Basic Rules of Differentiation */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Basic Rules of Differentiation</h3>
        <p className="mb-4">
          <strong>Q3: What is the power rule?</strong>
          <br />
          A3: The power rule states that if f(x) = x^n, then f'(x) = nx^(n-1).
        </p>

        <p className="mb-4">
          <strong>Q4: What is the product rule?</strong>
          <br />
          A4: The product rule states that if h(x) = f(x)g(x), then h'(x) = f'(x)g(x) + f(x)g'(x).
        </p>

        <p className="mb-4">
          <strong>Q5: What is the quotient rule?</strong>
          <br />
          A5: The quotient rule states that if h(x) = f(x)/g(x), then h'(x) = (f'(x)g(x) - f(x)g'(x))/(g(x))^2.
        </p>

        <p className="mb-4">
          <strong>Q6: What is the chain rule?</strong>
          <br />
          A6: The chain rule states that if h(x) = f(g(x)), then h'(x) = f'(g(x))g'(x).
        </p>
      </section>

      {/* Applications of Derivatives */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Applications of Derivatives</h3>
        <p className="mb-4">
          <strong>Q7: What are applications of derivatives?</strong>
          <br />
          A7: Applications include finding the slope of a curve, optimization problems, and related rates.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define the derivative of a function and explain its significance.</li>
          <li>Apply the power rule to find the derivative of a given function.</li>
          <li>Use the product rule to differentiate a function that is a product of two other functions.</li>
          <li>Apply the quotient rule to find the derivative of a function that is a quotient of two functions.</li>
          <li>Use the chain rule to differentiate a composite function.</li>
          <li>Find the slope of a curve at a specific point using derivatives.</li>
          <li>Solve optimization problems using differentiation techniques.</li>
          <li>Explain how derivatives are used to solve related rates problems.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter3_Differentiation;
