import React from 'react';

const Chapter3_Differentiation = () => {
  return (
    <div>
      <h2>Chapter 3: Differentiation</h2>
      <p>
        <strong>Q1: What is a derivative?</strong>
        <br />
        A1: The derivative of a function measures the rate of change of the function with respect to its input variable.
      </p>
      <p>
        <strong>Q2: How do you find the derivative of a function?</strong>
        <br />
        A2: Derivatives can be found using rules like the power rule, product rule, quotient rule, and chain rule.
      </p>
      <p>
        <strong>Q3: What is the power rule?</strong>
        <br />
        A3: The power rule states that if f(x) = x^n, then f'(x) = nx^(n-1).
      </p>
      <p>
        <strong>Q4: What is the product rule?</strong>
        <br />
        A4: The product rule states that if h(x) = f(x)g(x), then h'(x) = f'(x)g(x) + f(x)g'(x).
      </p>
      <p>
        <strong>Q5: What is the quotient rule?</strong>
        <br />
        A5: The quotient rule states that if h(x) = f(x)/g(x), then h'(x) = (f'(x)g(x) - f(x)g'(x))/(g(x))^2.
      </p>
      <p>
        <strong>Q6: What is the chain rule?</strong>
        <br />
        A6: The chain rule states that if h(x) = f(g(x)), then h'(x) = f'(g(x))g'(x).
      </p>
      <p>
        <strong>Q7: What are applications of derivatives?</strong>
        <br />
        A7: Applications include finding the slope of a curve, optimization problems, and related rates.
      </p>
    </div>
  );
};

export default Chapter3_Differentiation;
