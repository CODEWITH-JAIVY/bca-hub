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
          A1: Integration is the reverse process of differentiation. It is used to find the area under a curve and has numerous applications in mathematics, science, and engineering.
        </p>

        <p className="mb-4">
          <strong>Q2: What is an indefinite integral?</strong>
          <br />
          A2: An indefinite integral is a function whose derivative is the given function. It is represented as `∫f(x) dx = F(x) + C`, where `F(x)` is the antiderivative and `C` is the constant of integration.
          <br />
          <em>Example:</em> Find the indefinite integral of `f(x) = x^2`.
          <br />
          <em>Solution:</em> `∫x^2 dx = (x^3)/3 + C`
        </p>

        <p className="mb-4">
          <strong>Q3: What is a definite integral?</strong>
          <br />
          A3: A definite integral is the integral of a function over a specific interval [a, b]. It is represented as `∫ab f(x) dx` and gives the net signed area under the curve of `f(x)` from `x = a` to `x = b`.
        </p>
      </section>

      {/* Fundamental Theorem of Calculus */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Fundamental Theorem of Calculus</h3>
        <p className="mb-4">
          <strong>Q4: What is the Fundamental Theorem of Calculus?</strong>
          <br />
          A4: The Fundamental Theorem of Calculus (FTC) has two parts:
          <ul>
            <li>Part 1: If `f` is continuous on `[a, x]`, then the function `F(x) = ∫ax f(t) dt` is continuous on `[a, x]` and differentiable on `(a, x)`, and `F'(x) = f(x)`.</li>
            <li>Part 2: If `F` is an antiderivative of `f` on `[a, b]`, then `∫ab f(x) dx = F(b) - F(a)`.</li>
          </ul>
        </p>
      </section>

      {/* Methods of Integration */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Methods of Integration</h3>
        <p className="mb-4">
          <strong>Q5: What are common methods of integration?</strong>
          <br />
          A5: Common methods include:
          <ul>
            <li><strong>Substitution:</strong> Used when the integral contains a composite function.</li>
            <li><strong>Integration by Parts:</strong> Used to integrate the product of two functions.</li>
            <li><strong>Partial Fractions:</strong> Used to integrate rational functions.</li>
          </ul>
        </p>

        <p className="mb-4">
          <strong>Q6: Explain integration by substitution.</strong>
          <br />
          A6: Integration by substitution involves substituting a function within an integral to simplify it.
          <br />
          <em>Example:</em> Evaluate ∫(2x * cos(x^2)) dx.
        </p>

        <p className="mb-4">
          <strong>Q7: Explain integration by parts.</strong>
          <br />
          A7: Integration by parts uses the formula ∫u dv = uv - ∫v du, where u and v are functions of x.
          <br />
          <em>Example:</em> Evaluate ∫x * sin(x) dx.
        </p>

        <p className="mb-4">
          <strong>Q8: Explain integration by partial fractions.</strong>
          <br />
          A8: Integration by partial fractions involves decomposing a rational function into simpler fractions that can be easily integrated.
          <br />
          <em>Example:</em> Evaluate ∫(1 / (x^2 - 1)) dx.
        </p>
      </section>

      {/* Reduction Formulae for Trigonometric Functions */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Reduction Formulae for Trigonometric Functions</h3>
        <p className="mb-4">
          <strong>Q9: What are reduction formulae?</strong>
          <br />
          A9: Reduction formulae are used to simplify integrals of trigonometric functions by expressing them in terms of integrals of lower powers.
        </p>
      </section>

      {/* Gamma and Beta Functions */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Gamma and Beta Functions</h3>
        <p className="mb-4">
          <strong>Q10: What is the Gamma function?</strong>
          <br />
          A10: The Gamma function, denoted as Γ(z), is a generalization of the factorial function to complex numbers.
        </p>

        <p className="mb-4">
          <strong>Q11: What is the Beta function?</strong>
          <br />
          A11: The Beta function, denoted as B(x, y), is a special function defined in terms of Gamma functions as `B(x, y) = Γ(x) * Γ(y) / Γ(x + y)`.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define integration and explain its relationship to differentiation.</li>
          <li>State the Fundamental Theorem of Calculus and describe its two parts with examples.</li>
          <li>What are the different methods of integration? Provide examples for each.</li>
          <li>Explain integration by substitution and integration by parts with detailed solutions.</li>
          <li>What are reduction formulae and how are they used in integration?</li>
          <li>Define the Gamma and Beta functions and describe their properties.</li>
          <li>How do you evaluate definite integrals using the Fundamental Theorem of Calculus?</li>
          <li>What are the real-world applications of integration?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter4_Integration;
