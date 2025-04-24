import React from 'react';

const Chapter3_IntegrationAndDifferentiation = () => {
    // Component for Chapter 3: Numerical Integration and Differentiation
    return (
        <div>
            {/* Chapter Title */}
            <h2>Chapter 3: Numerical Integration and Differentiation</h2>

            {/* Introduction Section */}
            <section>
                <h3>Introduction to Numerical Integration and Differentiation</h3>
                <p>
                    In this chapter, we will explore numerical integration and differentiation, which are fundamental techniques in computational mathematics.
                    These methods allow us to approximate the values of definite integrals and derivatives when analytical solutions are difficult or impossible to obtain.
                </p>
                 <p>
                    <strong>Numerical Integration:</strong> is the process of approximating the value of a definite integral. It is used when finding the exact value of an integral is not feasible.
                </p>
                <p>
                    <strong>Numerical Differentiation:</strong> is the process of approximating the derivative of a function. It is used when it's difficult to find the analytical derivative.
                </p>
                <p>
                   <strong>Purpose:</strong> The main purpose of these methods is to compute approximate solutions to problems involving integrals and derivatives, which may be difficult to solve analytically.
                </p>
                <p>
                   <strong>Importance:</strong> Numerical integration and differentiation are crucial in many fields, including physics, engineering, finance, and computer graphics, where complex integrals and derivatives frequently appear.
                </p>
            </section>

            {/* Numerical Integration Methods Section */}
            <section>
                <h3>Numerical Integration Methods</h3>

                {/* Trapezoidal Rule */}
                <div>
                    <h4>Trapezoidal Rule</h4>
                    <p>
                        <strong>Explanation:</strong> The trapezoidal rule approximates the integral by dividing the area under the curve into trapezoids and summing their areas.
                    </p>
                    <p>
                        <strong>Formula:</strong>
                        For an interval [a, b] divided into n subintervals of width h = (b-a)/n, the trapezoidal rule is:
                        ∫<sub>a</sub><sup>b</sup> f(x) dx ≈ (h/2)[f(x<sub>0</sub>) + 2f(x<sub>1</sub>) + 2f(x<sub>2</sub>) + ... + 2f(x<sub>n-1</sub>) + f(x<sub>n</sub>)]
                    </p>
                    <p>
                        <strong>Example:</strong> Approximate ∫<sub>1</sub><sup>2</sup> x<sup>2</sup> dx using the trapezoidal rule with n=4.
                        <br/>
                        <strong>Solution:</strong>
                         h= (2-1)/4=0.25, x0=1, x1=1.25, x2=1.5, x3=1.75, x4=2
                        <br/>
                        ∫<sub>1</sub><sup>2</sup> x<sup>2</sup> dx ≈ (0.25/2)[(1) + 2(1.25<sup>2</sup>) + 2(1.5<sup>2</sup>) + 2(1.75<sup>2</sup>) + (4)]
                         ∫<sub>1</sub><sup>2</sup> x<sup>2</sup> dx ≈ 2.34375.
                    </p>
                    <p>
                        <strong>Advantages:</strong> Simple and easy to implement.
                        <br/>
                        <strong>Disadvantages:</strong> Less accurate than other methods, especially when the function is not smooth.
                    </p>
                </div>

                {/* Simpson's Rule */}
                <div>
                    <h4>Simpson's Rule</h4>
                    <p>
                        <strong>Explanation:</strong> Simpson's rule approximates the integral by dividing the area under the curve into parabolas and summing their areas.
                    </p>
                    <p>
                        <strong>Formula:</strong>
                        ∫<sub>a</sub><sup>b</sup> f(x) dx ≈ (h/3)[f(x<sub>0</sub>) + 4f(x<sub>1</sub>) + 2f(x<sub>2</sub>) + 4f(x<sub>3</sub>) + ... + 2f(x<sub>n-2</sub>) + 4f(x<sub>n-1</sub>) + f(x<sub>n</sub>)]
                       <br/>
                       note that n must be even.
                    </p>
                     <p>
                        <strong>Example:</strong> Approximate ∫<sub>1</sub><sup>2</sup> x<sup>2</sup> dx using Simpson's rule with n=4.
                        <br/>
                        <strong>Solution:</strong>
                         h= (2-1)/4=0.25, x0=1, x1=1.25, x2=1.5, x3=1.75, x4=2
                        <br/>
                        ∫<sub>1</sub><sup>2</sup> x<sup>2</sup> dx ≈ (0.25/3)[(1) + 4(1.25<sup>2</sup>) + 2(1.5<sup>2</sup>) + 4(1.75<sup>2</sup>) + (4)]
                         ∫<sub>1</sub><sup>2</sup> x<sup>2</sup> dx ≈ 2.33333.
                    </p>
                    <p>
                        <strong>Advantages:</strong> More accurate than the trapezoidal rule for many functions.
                        <br/>
                        <strong>Disadvantages:</strong> Requires an even number of intervals and can still be less accurate than more advanced methods.
                    </p>
                </div>

                {/* Gaussian Quadrature */}
                <div>
                    <h4>Gaussian Quadrature</h4>
                    <p>
                        <strong>Explanation:</strong> Gaussian quadrature is a method that chooses the nodes and weights strategically to achieve higher accuracy with fewer evaluations.
                    </p>
                    <p>
                        <strong>How Weights and Nodes are Chosen:</strong> The nodes (x<sub>i</sub>) and weights (w<sub>i</sub>) are chosen such that the method is exact for polynomials of a certain degree.
                    </p>
                     <p>
                        <strong>Example:</strong> Approximate ∫<sub>-1</sub><sup>1</sup> e<sup>-x^2</sup> dx using two-point Gaussian quadrature.
                       <br/>
                        <strong>Solution:</strong> for two-point Gaussian quadrature the points are :  x<sub>1</sub> = -1/√3, x<sub>2</sub>=1/√3 and the weights are w<sub>1</sub>=1, w<sub>2</sub>=1.
                         <br/>
                        ∫<sub>-1</sub><sup>1</sup> e<sup>-x^2</sup> dx ≈ w<sub>1</sub>f(x<sub>1</sub>) + w<sub>2</sub>f(x<sub>2</sub>)= f(-1/√3)+f(1/√3)= e<sup>-(1/√3)^2</sup>+e<sup>-(1/√3)^2</sup>≈ 1.6743
                    </p>
                    <p>
                        <strong>Advantages:</strong> High accuracy with fewer evaluations compared to other methods.
                        <br/>
                        <strong>Disadvantages:</strong> More complex to implement.
                    </p>
                </div>
            </section>

            {/* Numerical Differentiation Methods Section */}
            <section>
                <h3>Numerical Differentiation Methods</h3>

                {/* Forward Difference */}
                <div>
                    <h4>Forward Difference</h4>
                    <p>
                        <strong>Explanation:</strong> The forward difference method approximates the derivative at a point using the function value at that point and a point ahead of it.
                    </p>
                    <p>
                        <strong>Formula:</strong>
                        f'(x) ≈ [f(x + h) - f(x)] / h
                    </p>
                     <p>
                        <strong>Example:</strong> Approximate f'(1) for f(x) = x<sup>2</sup> using the forward difference method with h=0.1.
                        <br/>
                        <strong>Solution:</strong> f'(1) ≈ [f(1 + 0.1) - f(1)] / 0.1 = [(1.1)<sup>2</sup> - (1)<sup>2</sup>] / 0.1 = [1.21-1]/0.1=2.1.
                    </p>
                    <p>
                        <strong>Advantages:</strong> Simple to implement.
                        <br/>
                        <strong>Disadvantages:</strong> Less accurate than other methods, especially for larger values of h.
                    </p>
                </div>

                {/* Backward Difference */}
                <div>
                    <h4>Backward Difference</h4>
                    <p>
                        <strong>Explanation:</strong> The backward difference method approximates the derivative at a point using the function value at that point and a point behind it.
                    </p>
                    <p>
                        <strong>Formula:</strong>
                        f'(x) ≈ [f(x) - f(x - h)] / h
                    </p>
                    <p>
                        <strong>Example:</strong> Approximate f'(1) for f(x) = x<sup>2</sup> using the backward difference method with h=0.1.
                        <br/>
                        <strong>Solution:</strong> f'(1) ≈ [f(1) - f(1 - 0.1)] / 0.1 = [(1)<sup>2</sup> - (0.9)<sup>2</sup>] / 0.1 = [1-0.81]/0.1=1.9.
                    </p>
                    <p>
                        <strong>Advantages:</strong> Simple to implement.
                        <br/>
                        <strong>Disadvantages:</strong> Less accurate than other methods, especially for larger values of h.
                    </p>
                </div>

                {/* Central Difference */}
                <div>
                    <h4>Central Difference</h4>
                    <p>
                        <strong>Explanation:</strong> The central difference method approximates the derivative at a point using the function values at a point ahead of it and a point behind it.
                    </p>
                    <p>
                        <strong>Formula:</strong>
                        f'(x) ≈ [f(x + h) - f(x - h)] / (2h)
                    </p>
                    <p>
                        <strong>Example:</strong> Approximate f'(1) for f(x) = x<sup>2</sup> using the central difference method with h=0.1.
                        <br/>
                        <strong>Solution:</strong> f'(1) ≈ [f(1 + 0.1) - f(1 - 0.1)] / 0.2 = [(1.1)<sup>2</sup> - (0.9)<sup>2</sup>] / 0.2 = [1.21-0.81]/0.2=2.
                    </p>
                    <p>
                        <strong>Advantages:</strong> More accurate than forward or backward difference methods.
                        <br/>
                        <strong>Disadvantages:</strong> Requires function evaluations at two points, making it slightly more computationally expensive.
                    </p>
                </div>
            </section>
            {/* Conclusion Section */}
            <section>
                <h3>Conclusion</h3>
                <p>
                    In this chapter, we explored numerical integration and differentiation, essential tools for approximating integrals and derivatives when analytical methods are insufficient. We covered the trapezoidal rule, Simpson's rule, and Gaussian quadrature for integration, and the forward, backward, and central difference methods for differentiation. Each method has its strengths and weaknesses, and the choice of which to use often depends on the specific problem and the desired accuracy.
                </p>
                <p>
                   Keep practicing, and you'll master these techniques in no time!
                </p>
            </section>
        </div>
    );
};

export default Chapter3_IntegrationAndDifferentiation;
