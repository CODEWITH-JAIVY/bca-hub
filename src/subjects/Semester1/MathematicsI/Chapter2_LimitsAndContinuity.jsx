import React from 'react';

const Chapter2_LimitsAndContinuity = () => {
  return (
    <div>
      <h2>Chapter 2: Limits and Continuity</h2>
      <p>
        <strong>Q1: What is a limit?</strong>
        <br />
        A1: A limit is the value that a function approaches as the input (or argument) approaches some value.
      </p>
      <p>
        <strong>Q2: How do you evaluate limits?</strong>
        <br />
        A2: Limits can be evaluated using direct substitution, factoring, rationalizing, or L'Hôpital's Rule.
      </p>
      <p>
        <strong>Q3: What is continuity?</strong>
        <br />
        A3: A function is continuous at a point if it has a limit at that point, the limit exists, and the limit is equal to the function's value at that point.
      </p>
      <p>
        <strong>Q4: What are the conditions for a function to be continuous at a point?</strong>
        <br />
        A4: The function must be defined at the point, the limit must exist at the point, and the function value must equal the limit at the point.
      </p>
      <p>
        <strong>Q5: What are types of discontinuities?</strong>
        <br />
        A5: Types of discontinuities include removable discontinuity, jump discontinuity, and infinite discontinuity.
      </p>
      <p>
        <strong>Q6: What is the Intermediate Value Theorem?</strong>
        <br />
        A6: The Intermediate Value Theorem states that if a continuous function f takes values f(a) and f(b) at points a and b, then it also takes any value between f(a) and f(b) at some point within a and b.
      </p>
    </div>
  );
};

export default Chapter2_LimitsAndContinuity;
