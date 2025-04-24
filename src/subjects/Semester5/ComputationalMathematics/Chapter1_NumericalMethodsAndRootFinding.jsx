import React from 'react';

const Chapter1_NumericalMethodsAndRootFinding = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Numerical Methods and Root Finding</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chapter 1: Numerical Methods and Root Finding</h2>
        
        <div className="space-y-6">
          {/* Question 1 */}
          <div>
            <strong className="text-lg text-blue-600">Q1: What are numerical methods?</strong>
            <p className="text-gray-700 mt-2">
              A1: Numerical methods are techniques used to approximate solutions to mathematical problems that cannot be solved analytically. These methods are often employed in engineering, physics, and computational sciences.
            </p>
          </div>

          {/* Question 2 */}
          <div>
            <strong className="text-lg text-blue-600">Q2: What is root finding?</strong>
            <p className="text-gray-700 mt-2">
              A2: Root finding is the process of finding the values at which a function is equal to zero. These values are known as the "roots" of the function.
            </p>
          </div>

          {/* Question 3 */}
          <div>
            <strong className="text-lg text-blue-600">Q3: What are the methods for finding roots of equations?</strong>
            <p className="text-gray-700 mt-2">
              A3: Common methods include:
              <ul className="list-disc pl-5 mt-2">
                <li><strong>Bisection Method:</strong> A simple and reliable method that narrows down an interval containing the root.</li>
                <li><strong>Newton-Raphson Method:</strong> A faster method that uses derivatives to approximate the root iteratively.</li>
                <li><strong>Secant Method:</strong> Similar to Newton-Raphson but does not require the derivative of the function.</li>
              </ul>
            </p>
          </div>

          {/* Question 4 */}
          <div>
            <strong className="text-lg text-blue-600">Q4: Explain the bisection method.</strong>
            <p className="text-gray-700 mt-2">
              A4: The bisection method is a root-finding method that repeatedly divides an interval in half and selects the subinterval that contains the root. The method is guaranteed to converge if the function is continuous and has opposite signs at the endpoints of the interval.
            </p>
          </div>

          {/* Question 5 */}
          <div>
            <strong className="text-lg text-blue-600">Q5: Explain the Newton-Raphson method.</strong>
            <p className="text-gray-700 mt-2">
              A5: The Newton-Raphson method is an iterative technique used to approximate the roots of a real-valued function. Starting with an initial guess, the method refines the approximation by using the function and its derivative to calculate the next guess. It typically converges faster than other methods if the initial guess is close to the root.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4">
        <p className="text-gray-600">© 2025 Numerical Methods Educational Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Chapter1_NumericalMethodsAndRootFinding;
