import React from 'react';

const Chapter4_DifferentialEquations = () => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Chapter 4: Differential Equations</h2>

      {/* Introduction */}
      <section>
        <h3 className="text-xl font-semibold">Introduction to Differential Equations</h3>
        <p>
          Differential equations are the language in which many laws of nature are expressed. They describe the relationships between a function and its derivatives, revealing how quantities change over time or space.
        </p>
        <p>
          <strong>What are Differential Equations?</strong> A differential equation is a mathematical equation that relates some function with one or more of its derivatives.
        </p>
        <p>
          <strong>Purpose:</strong> They are used to model a vast range of phenomena, from the motion of celestial bodies to the spread of diseases, from the flow of fluids to the growth of populations.
        </p>
        <p>
          <strong>Importance:</strong> Differential equations are essential in fields such as physics, engineering, economics, and biology, providing a way to predict future states or understand the rates of change.
        </p>
      </section>

      {/* Types of Differential Equations */}
      <section>
        <h3 className="text-xl font-semibold">Types of Differential Equations</h3>

        <div>
          <h4 className="font-semibold">Ordinary Differential Equations (ODEs)</h4>
          <p>
            <strong>Explanation:</strong> An ODE is a differential equation containing one or more functions of one independent variable and its derivatives. ODEs describe systems where quantities change concerning a single variable, often time.
          </p>
          <p>
            <strong>Order:</strong> The order of an ODE is the order of the highest derivative present in the equation.
          </p>
           <p>
            <strong>Degree:</strong> The degree of an ODE is the highest power of the highest-order derivative when the equation is expressed in a polynomial form, free of radicals and fractions in derivatives.
          </p>
          <p>
            <strong>Examples:</strong>
            <ul className="list-disc list-inside ml-4">
              <li><code>dy/dx = 2x</code> (First-order ODE)</li>
              <li><code>d²y/dx² + 4dy/dx + 4y = 0</code> (Second-order ODE)</li>
              <li><code>dy/dt = ky</code> (Exponential growth or decay)</li>
            </ul>
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Partial Differential Equations (PDEs)</h4>
          <p>
            <strong>Explanation:</strong> A PDE is a differential equation containing one or more functions of several independent variables and their partial derivatives. PDEs describe systems where quantities change concerning multiple variables, such as time and space.
          </p>
          <p>
            <strong>Examples:</strong>
            <ul className="list-disc list-inside ml-4">
              <li><code>∂u/∂t = ∂²u/∂x²</code> (Heat equation)</li>
              <li><code>∂²u/∂t² = c² ∂²u/∂x²</code> (Wave equation)</li>
              <li><code>∂u/∂x + ∂v/∂y = 0</code> (Continuity equation in fluid dynamics)</li>
            </ul>
          </p>
        </div>
      </section>

      {/* Numerical Methods for Solving ODEs */}
      <section>
        <h3 className="text-xl font-semibold">Numerical Methods for Solving ODEs</h3>

        <div>
          <h4 className="font-semibold">Euler's Method</h4>
          <p>
            <strong>Explanation:</strong> Euler's method is a first-order numerical procedure for approximating the solution to an ODE with a given initial value. It's a simple method that uses the tangent line at a point to estimate the function's value at a nearby point.
          </p>
          <p>
            <strong>Formula:</strong> Given an initial value problem <code>dy/dx = f(x, y)</code> with <code>y(x0) = y0</code>, Euler's method is:
            <br />
            <code>y<sub>i+1</sub> = y<sub>i</sub> + h * f(x<sub>i</sub>, y<sub>i</sub>)</code>
            <br />
            where <code>h</code> is the step size.
          </p>
          <p>
            <strong>Example:</strong>
            <br />
            Given <code>dy/dx = x + y</code>, <code>y(0) = 1</code>, approximate <code>y(0.2)</code> using Euler's method with <code>h = 0.1</code>.
            <br />
            <code>y1 = y0 + h * (x0 + y0) = 1 + 0.1 * (0 + 1) = 1.1</code>
            <br />
            <code>y2 = y1 + h * (x1 + y1) = 1.1 + 0.1 * (0.1 + 1.1) = 1.22</code>
          </p>
          <p>
            <strong>Advantages:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Simple to understand and implement.</li>
              <li>Computationally inexpensive.</li>
            </ul>
          </p>
          <p>
            <strong>Disadvantages:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Low accuracy, especially with larger step sizes.</li>
              <li>Error accumulates quickly over multiple steps.</li>
            </ul>
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Runge-Kutta Methods</h4>
          <p>
            <strong>Explanation:</strong> Runge-Kutta methods are a family of numerical methods for solving ODEs. They are generally more accurate than Euler's method.
          </p>
          <p>
            <strong>Orders:</strong>
            <ul className="list-disc list-inside ml-4">
              <li><strong>2nd Order:</strong> Uses two evaluations of <code>f(x, y)</code> per step.</li>
              <li><strong>4th Order:</strong> Uses four evaluations of <code>f(x, y)</code> per step and is commonly used due to its accuracy and stability.</li>
            </ul>
          </p>
          <p>
            <strong>Example (4th Order):</strong> While the full formula is complex, it involves calculating intermediate slopes to get a more accurate estimate of the function value.
             </p>
               <p>
            <strong>Advantages:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Higher accuracy compared to Euler's method.</li>
              <li>Stable for a wider range of problems.</li>
               <li>4th-order Runge-Kutta is widely used and highly accurate.</li>
            </ul>
          </p>
          <p>
            <strong>Disadvantages:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>More computationally expensive than Euler's method.</li>
              <li>The formulas can be complex, especially for higher-order methods.</li>
            </ul>
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          In this chapter, we have introduced differential equations and explored methods for their solution. Understanding both the types and the numerical methods for solving differential equations is crucial for modeling and predicting phenomena in various fields. Continue to practice these methods to improve your understanding and skills.
        </p>
      </section>
    </div>
  );
};

export default Chapter4_DifferentialEquations;
