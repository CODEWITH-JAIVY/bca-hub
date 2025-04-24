import React from 'react';

const Chapter4_Integration = () => {
  return (
    <div>
      <h2>Chapter 4: Integration</h2>
      <p>
        <strong>Q1: What is integration?</strong>
        <br />
        A1: Integration is the reverse process of differentiation, used to find the area under a curve.
      </p>
      <p>
        <strong>Q2: What is an indefinite integral?</strong>
        <br />
        A2: An indefinite integral is a function whose derivative is the given function, represented as ∫f(x) dx = F(x) + C.
      </p>
      <p>
        <strong>Q3: What is a definite integral?</strong>
        <br />
        A3: A definite integral is the integral of a function over a specific interval, represented as ∫ab f(x) dx.
      </p>
      <p>
        <strong>Q4: What are the basic rules of integration?</strong>
        <br />
        A4: Basic rules include the power rule, constant multiple rule, sum/difference rule, and substitution rule.
      </p>
      <p>
        <strong>Q5: What is the power rule for integration?</strong>
        <br />
        A5: The power rule states that ∫x^n dx = (x^(n+1))/(n+1) + C.
      </p>
      <p>
        <strong>Q6: What is the substitution rule?</strong>
        <br />
        A6: The substitution rule involves substituting a function within an integral to simplify it, often used with the chain rule in reverse.
      </p>
      <p>
        <strong>Q7: What are the applications of integration?</strong>
        <br />
        A7: Applications include finding areas, volumes, and average values of functions.
      </p>
    </div>
  );
};

export default Chapter4_Integration;
