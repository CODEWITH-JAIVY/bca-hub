import React from 'react';

const Chapter1_NumericalMethodsAndRootFinding = () => {
    return (
        <div>
            <h2>Chapter 1: Numerical Methods and Root Finding</h2>
            <p>
                <strong>Q1: What are numerical methods?</strong>
                <br />
                A1: Numerical methods are techniques used to approximate solutions to mathematical problems that cannot be solved analytically.
            </p>
            <p>
                <strong>Q2: What is root finding?</strong>
                <br />
                A2: Root finding is the process of finding the values at which a function is equal to zero.
            </p>
            <p>
                <strong>Q3: What are the methods for finding roots of equations?</strong>
                <br />
                A3: Methods include the bisection method, the Newton-Raphson method, and the secant method.
            </p>
            <p>
                <strong>Q4: Explain the bisection method.</strong>
                <br />
                A4: The bisection method repeatedly divides an interval in half and selects the subinterval that contains the root.
            </p>
            <p>
                <strong>Q5: Explain the Newton-Raphson method.</strong>
                <br />
                A5: The Newton-Raphson method uses the derivative of the function to iteratively refine the approximation of the root.
            </p>
        </div>
    );
};

export default Chapter1_NumericalMethodsAndRootFinding;
