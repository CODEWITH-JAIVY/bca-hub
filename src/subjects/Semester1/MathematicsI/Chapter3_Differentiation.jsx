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
          A1: The derivative of a function measures the instantaneous rate of change of the function with respect to its input variable. It represents the slope of the tangent line to the function at a given point.
        </p>

        <p className="mb-4">
          <strong>Q2: How do you find the derivative of a function?</strong>
          <br />
          A2: Derivatives can be found using various rules such as the power rule, product rule, quotient rule, and chain rule.
        </p>
      </section>

      {/* Basic Rules of Differentiation */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Basic Rules of Differentiation</h3>
        <p className="mb-4">
          <strong>Q3: What is the power rule?</strong>
          <br />
          A3: The power rule states that if `f(x) = x^n`, then `f'(x) = nx^(n-1)`.
          <br />
          <em>Example 1:</em> Find the derivative of `f(x) = x^3`.
          <br />
          <em>Solution:</em> `f'(x) = 3x^(3-1) = 3x^2`
        </p>

        <p className="mb-4">
          <strong>Q4: What is the product rule?</strong>
          <br />
          A4: The product rule states that if `h(x) = f(x)g(x)`, then `h'(x) = f'(x)g(x) + f(x)g'(x)`.
          <br />
          <em>Example 2:</em> Find the derivative of `h(x) = x^2 * sin(x)`.
          <br />
          <em>Solution:</em> `h'(x) = 2x * sin(x) + x^2 * cos(x)`
        </p>

        <p className="mb-4">
          <strong>Q5: What is the quotient rule?</strong>
          <br />
          A5: The quotient rule states that if `h(x) = f(x)/g(x)`, then `h'(x) = (f'(x)g(x) - f(x)g'(x))/(g(x))^2`.
          <br />
          <em>Example 3:</em> Find the derivative of `h(x) = sin(x) / x`.
          <br />
          <em>Solution:</em> `h'(x) = (cos(x) * x - sin(x) * 1) / x^2`
        </p>

        <p className="mb-4">
          <strong>Q6: What is the chain rule?</strong>
          <br />
          A6: The chain rule states that if `h(x) = f(g(x))`, then `h'(x) = f'(g(x))g'(x)`.
          <br />
          <em>Example 4:</em> Find the derivative of `h(x) = sin(x^2)`.
          <br />
          <em>Solution:</em> `h'(x) = cos(x^2) * 2x`
        </p>
      </section>

      {/* Derivatives of Composite Functions */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Derivatives of Composite Functions</h3>
        <p className="mb-4">
          <strong>Q7: How do you differentiate composite functions?</strong>
          <br />
          A7: Use the chain rule to differentiate composite functions by breaking them down into simpler parts.
          <br />
          <em>Example 5:</em>  Find the derivative of  `f(x) = e^(sin(x))`.
          <br />
          <em>Solution:</em>  `f'(x) = e^(sin(x)) * cos(x)`
        </p>
      </section>

      {/* Logarithmic Differentiation */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Logarithmic Differentiation</h3>
        <p className="mb-4">
          <strong>Q8: What is logarithmic differentiation?</strong>
          <br />
          A8: Logarithmic differentiation is a technique used to differentiate functions that are difficult to differentiate directly, often involving products, quotients, or exponents.
          <br />
          <em>Example 6:</em>  Find the derivative of `y = x^x`.
        </p>
      </section>

      {/* Rolle’s Theorem and Mean Value Theorem */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Rolle’s Theorem and Mean Value Theorem</h3>
        <p className="mb-4">
          <strong>Q9: What is Rolle’s Theorem?</strong>
          <br />
          A9: Rolle’s Theorem states that if a function `f` is continuous on `[a, b]` and differentiable on `(a, b)`, and `f(a) = f(b)`, then there exists at least one `c` in `(a, b)` such that `f'(c) = 0`.
        </p>

        <p className="mb-4">
          <strong>Q10: What is the Mean Value Theorem?</strong>
          <br />
          A10: The Mean Value Theorem states that if a function `f` is continuous on `[a, b]` and differentiable on `(a, b)`, then there exists at least one `c` in `(a, b)` such that `f'(c) = (f(b) - f(a)) / (b - a)`.
        </p>
      </section>

      {/* Expansion of Functions (Maclaurin’s & Taylor’s) */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Expansion of Functions (Maclaurin’s & Taylor’s)</h3>
        <p className="mb-4">
          <strong>Q11: What is Maclaurin's series?</strong>
          <br />
          A11: Maclaurin's series is a Taylor series expansion of a function about 0.
        </p>

        <p className="mb-4">
          <strong>Q12: What is Taylor's series?</strong>
          <br />
          A12: Taylor's series is an expansion of a function into an infinite sum of terms, each involving the function's derivatives at a single point.
        </p>
      </section>

      {/* Indeterminate Forms and L’Hôpital's Rule */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Indeterminate Forms and L’Hôpital's Rule</h3>
        <p className="mb-4">
          <strong>Q13: What are indeterminate forms?</strong>
          <br />
          A13: Indeterminate forms are expressions that do not have a unique value, such as 0/0, ∞/∞, 0 * ∞, ∞ - ∞, 1^∞, 0^0, and ∞^0.
        </p>

        <p className="mb-4">
          <strong>Q14: What is L’Hôpital's Rule?</strong>
          <br />
          A14: L’Hôpital's Rule states that if the limit of `f(x)/g(x)` as `x` approaches `c` is in the indeterminate form 0/0 or ∞/∞, then `lim x→c f(x)/g(x) = lim x→c f'(x)/g'(x)`, provided the limit on the right exists.
        </p>
      </section>

      {/* Maxima & Minima and Curve Tracing */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Maxima &amp; Minima and Curve Tracing</h3>
        <p className="mb-4">
          <strong>Q15: How do you find maxima and minima of a function?</strong>
          <br />
          A15: Find critical points by setting the first derivative to zero and solving for x. Then, use the second derivative test to determine if each critical point is a local maximum, local minimum, or saddle point.
        </p>

        <p className="mb-4">
          <strong>Q16: What is curve tracing?</strong>
          <br />
          A16: Curve tracing involves analyzing a function's properties (e.g., symmetry, intercepts, asymptotes, intervals of increase/decrease, concavity) to sketch its graph accurately.
        </p>
      </section>

      {/* Successive Differentiation & Liebnitz Theorem */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Successive Differentiation &amp; Liebnitz Theorem</h3>
        <p className="mb-4">
          <strong>Q17: What is successive differentiation?</strong>
          <br />
          A17: Successive differentiation involves finding higher-order derivatives of a function.
        </p>

        <p className="mb-4">
          <strong>Q18: What is Leibniz's theorem?</strong>
          <br />
          A18: Leibniz's theorem provides a formula for the nth derivative of the product of two functions.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define the derivative of a function and explain its significance.</li>
          <li>Explain the power rule, product rule, quotient rule, and chain rule with examples.</li>
          <li>What are logarithmic differentiation and its applications?</li>
          <li>State and explain Rolle’s Theorem and the Mean Value Theorem.</li>
          <li>Discuss the Maclaurin’s and Taylor’s series expansions with examples.</li>
          <li>How do you handle indeterminate forms using L’Hôpital's Rule?</li>
          <li>Explain how to find maxima and minima of a function and perform curve tracing.</li>
          <li>Discuss successive differentiation and Leibniz's Theorem with examples.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter3_Differentiation;
