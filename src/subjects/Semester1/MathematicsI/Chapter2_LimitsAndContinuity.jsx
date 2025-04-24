'use client';
import React from 'react';

const Chapter2_LimitsAndContinuity = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 2: Limits and Continuity</h2>

      {/* Introduction to Limits */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Limits</h3>
        <p className="mb-4">
          <strong>Q1: What is a limit?</strong>
          <br />
          A1: A limit is the value that a function "approaches" as the input (or argument) approaches some value. Limits are essential for understanding calculus.
        </p>

        <p className="mb-4">
          <strong>Q2: How do you evaluate limits?</strong>
          <br />
          A2: Limits can be evaluated using several techniques:
          <ul>
            <li><strong>Direct Substitution:</strong> If the function is continuous at the point, simply substitute the value.</li>
            <li><strong>Factoring:</strong> Factor the expression and cancel common terms.</li>
            <li><strong>Rationalizing:</strong> Rationalize the numerator or denominator.</li>
            <li><strong>L'Hôpital's Rule:</strong> Apply when the limit is in an indeterminate form (0/0 or ∞/∞).</li>
          </ul>
          <em>Example 1:</em> Find the limit of `f(x) = x^2 + 3x - 2` as `x` approaches 2.
          <br />
          <em>Solution:</em>  `lim x→2 (x^2 + 3x - 2) = (2^2 + 3*2 - 2) = 4 + 6 - 2 = 8`
        </p>
      </section>

      {/* Properties of Limits */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Properties of Limits</h3>
        <p className="mb-4">
          <strong>Q3: What are some important properties of limits?</strong>
          <br />
          A3:
          <ul>
            <li>`lim x→c [f(x) + g(x)] = lim x→c f(x) + lim x→c g(x)`</li>
            <li>`lim x→c [f(x) - g(x)] = lim x→c f(x) - lim x→c g(x)`</li>
            <li>`lim x→c [k * f(x)] = k * lim x→c f(x)`</li>
            <li>`lim x→c [f(x) * g(x)] = lim x→c f(x) * lim x→c g(x)`</li>
            <li>`lim x→c [f(x) / g(x)] = lim x→c f(x) / lim x→c g(x)`,  if `lim x→c g(x) ≠ 0`</li>
          </ul>
        </p>
      </section>

      {/* Computation of Limits */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Computation of Limits</h3>
        <p className="mb-4">
          <strong>Q4: How do you compute limits of various types of functions?</strong>
          <br />
          A4:
          <ul>
            <li><strong>Polynomial Functions:</strong>  Direct substitution.</li>
            <li><strong>Rational Functions:</strong>  Simplify by factoring or rationalizing.</li>
            <li><strong>Trigonometric Functions:</strong>  Use trigonometric identities or special limits (e.g., `lim x→0 sin(x)/x = 1`).</li>
            <li><strong>Exponential and Logarithmic Functions:</strong>  Apply standard limit rules and properties.</li>
          </ul>
          <em>Example 2:</em>  Find `lim x→0 sin(5x)/x`.
          <br />
          <em>Solution:</em> `lim x→0 sin(5x)/x = lim x→0 5 * sin(5x)/(5x) = 5 * lim x→0 sin(5x)/(5x) = 5 * 1 = 5`
        </p>
      </section>

      {/* Introduction to Continuity */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Continuity</h3>
        <p className="mb-4">
          <strong>Q5: What is continuity?</strong>
          <br />
          A5: A function `f(x)` is continuous at a point `x = c` if the following conditions are met:
          <ol>
            <li>`f(c)` is defined.</li>
            <li>`lim x→c f(x)` exists.</li>
            <li>`lim x→c f(x) = f(c)`</li>
          </ol>
        </p>
      </section>

      {/* Types of Discontinuities */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Types of Discontinuities</h3>
        <p className="mb-4">
          <strong>Q6: What are the different types of discontinuities?</strong>
          <br />
          A6:
          <ul>
            <li><strong>Removable Discontinuity:</strong>  The limit exists, but it's not equal to the function's value at that point. This can be "removed" by redefining the function at that point.</li>
            <li><strong>Jump Discontinuity:</strong>  The limit from the left and the limit from the right exist but are not equal.</li>
            <li><strong>Infinite Discontinuity:</strong>  The function approaches infinity at a certain point.</li>
          </ul>
          <em>Example 3:</em> Discuss examples for each type of discontinuity.
        </p>
      </section>

      {/* Continuity Over an Interval */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Continuity Over an Interval</h3>
        <p className="mb-4">
          <strong>Q7: What does it mean for a function to be continuous over an interval?</strong>
          <br />
          A7: A function is continuous over an interval if it is continuous at every point in that interval.
        </p>
      </section>

      {/* Intermediate Value Theorem */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Intermediate Value Theorem (IVT)</h3>
        <p className="mb-4">
          <strong>Q8: What is the Intermediate Value Theorem?</strong>
          <br />
          A8: The Intermediate Value Theorem (IVT) states that if a function f is continuous on the closed interval [a, b] and k is any number between f(a) and f(b), then there exists at least one number c in the interval (a, b) such that f(c) = k.
          <br />
          <em>Example 4:</em> Show that there exists a root for the equation `f(x) = x^3 - 5x + 3` in the interval [1, 2].
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define the concept of a limit and its importance in calculus.</li>
          <li>Explain different techniques for evaluating limits with examples.</li>
          <li>Describe the conditions for a function to be continuous at a point and over an interval.</li>
          <li>Differentiate between the types of discontinuities with illustrative examples.</li>
          <li>State the Intermediate Value Theorem and show how it can be used to find roots of an equation.</li>
          <li>Find the limit of trigonometric functions using standard trigonometric identities.</li>
          <li>What are the applications of limits and continuity in real-world scenarios?</li>
          <li>How can you determine if a piecewise function is continuous?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter2_LimitsAndContinuity;
