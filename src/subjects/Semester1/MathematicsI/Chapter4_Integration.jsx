'use client';
import React from 'react';

const Chapter4_Integration = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 4: Integration</h2>

      {/* Introduction to Integration */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Integration</h3>
        <p className="mb-4">
          <strong>Q1: What is integration?</strong>
          <br />
          A1: Integration is the reverse process of differentiation, used to find the area under a curve.
        </p>

        <p className="mb-4">
          <strong>Q2: What is an indefinite integral?</strong>
          <br />
          A2: An indefinite integral is a function whose derivative is the given function, represented as ∫f(x) dx = F(x) + C.
        </p>

        <p className="mb-4">
          <strong>Q3: What is a definite integral?</strong>
          <br />
          A3: A definite integral is the integral of a function over a specific interval, represented as ∫ab f(x) dx.
        </p>
      </section>

      {/* Basic Rules of Integration */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Basic Rules of Integration</h3>
        <p className="mb-4">
          <strong>Q4: What are the basic rules of integration?</strong>
          <br />
          A4: Basic rules include the power rule, constant multiple rule, sum/difference rule, and substitution rule.
        </p>

        <p className="mb-4">
          <strong>Q5: What is the power rule for integration?</strong>
          <br />
          A5: The power rule states that ∫x^n dx = (x^(n+1))/(n+1) + C.
        </p>

        <p className="mb-4">
          <strong>Q6: What is the substitution rule?</strong>
          <br />
          A6: The substitution rule involves substituting a function within an integral to simplify it, often used with the chain rule in reverse.
        </p>
      </section>

      {/* Applications of Integration */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Applications of Integration</h3>
        <p className="mb-4">
          <strong>Q7: What are the applications of integration?</strong>
          <br />
          A7: Applications include finding areas, volumes, and average values of functions.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define integration and explain its relationship to differentiation.</li>
          <li>Calculate the indefinite integral of a given function using the power rule.</li>
          <li>Evaluate a definite integral over a specified interval.</li>
          <li>Use the substitution rule to simplify and solve integrals.</li>
          <li>Explain how integration is used to find the area under a curve.</li>
          <li>What are the common techniques of definite integral?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter4_Integration;
