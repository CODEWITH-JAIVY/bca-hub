import React from 'react';

const ComplexVariables = () => {
    return (
        <div>
            <h2>Unit I: Complex Variables</h2>

            {/* 1. Complex Number System */}
            <section>
                <h3>1. Complex Number System</h3>
                <p>
                    Welcome to the world of complex numbers! We're expanding our mathematical horizons beyond the familiar realm of real numbers.
                </p>
                <h4>Definition</h4>
                <p>
                    A <strong>complex number</strong> is a number of the form <code>z = a + bi</code>, where <code>a</code> and <code>b</code> are real numbers, and <code>i</code> is the imaginary unit.
                </p>
                <h4>Real and Imaginary Parts</h4>
                <ul>
                    <li><code>a</code> is the <strong>real part</strong> of <code>z</code>, denoted as <code>Re(z)</code>.</li>
                    <li><code>b</code> is the <strong>imaginary part</strong> of <code>z</code>, denoted as <code>Im(z)</code>.</li>
                </ul>
                <h4>The Imaginary Unit 'i'</h4>
                <p>
                    The <strong>imaginary unit</strong> <code>i</code> is defined as the square root of -1, i.e., <code>i<sup>2</sup> = -1</code>. This means <code>i = √(-1)</code>.
                </p>
                <p><strong>Example:</strong> In <code>z = 3 + 4i</code>, <code>Re(z) = 3</code> and <code>Im(z) = 4</code>.</p>
            </section>

            {/* 2. Algebra of Complex Numbers */}
            <section>
                <h3>2. Algebra of Complex Numbers</h3>
                <p>
                    Now that we've defined complex numbers, let's see how we can perform algebraic operations on them.
                </p>
                <h4>Addition</h4>
                <p>
                    If <code>z<sub>1</sub> = a + bi</code> and <code>z<sub>2</sub> = c + di</code>, then <code>z<sub>1</sub> + z<sub>2</sub> = (a + c) + (b + d)i</code>.
                </p>
                <p><strong>Example:</strong> <code>(2 + 3i) + (4 + 5i) = (2+4) + (3+5)i = 6 + 8i</code>.</p>
                <h4>Subtraction</h4>
                <p>
                <code>z<sub>1</sub> - z<sub>2</sub> = (a - c) + (b - d)i</code>.
                </p>
                 <p><strong>Example:</strong> <code>(5 + 4i) - (3 + 2i) = (5-3) + (4-2)i = 2 + 2i</code>.</p>
                <h4>Multiplication</h4>
                <p>
                    <code>z<sub>1</sub> * z<sub>2</sub> = (a + bi)(c + di) = (ac - bd) + (ad + bc)i</code>.
                </p>
                <p><strong>Example:</strong> <code>(1 + 2i) * (3 + 4i) = (1*3 - 2*4) + (1*4 + 2*3)i = -5 + 10i</code>.</p>
                <h4>Division</h4>
                <p>
                    <code>z<sub>1</sub> / z<sub>2</sub> = (z<sub>1</sub> * conjugate(z<sub>2</sub>)) / (z<sub>2</sub> * conjugate(z<sub>2</sub>))</code>. To divide complex numbers, we multiply the numerator and denominator by the conjugate of the denominator.
                </p>
                <p><strong>Example:</strong> <code>(1 + 2i) / (3 + 4i) = ((1+2i)(3-4i)) / ((3+4i)(3-4i)) = (11 + 2i) / 25 = 11/25 + 2/25 i</code>.</p>
                <h4>Complex Conjugate</h4>
                <p>
                    The <strong>complex conjugate</strong> of <code>z = a + bi</code> is denoted as <code>z̄</code> or <code>z*</code> and is defined as <code>z̄ = a - bi</code>. We simply change the sign of the imaginary part.
                </p>
                <p><strong>Example:</strong> The conjugate of <code>2 + 3i</code> is <code>2 - 3i</code>.</p>
                <h4>Modulus</h4>
                <p>
                    The <strong>modulus</strong> (or magnitude) of <code>z = a + bi</code> is denoted as <code>|z|</code> and is defined as <code>|z| = √(a<sup>2</sup> + b<sup>2</sup>)</code>. It represents the distance of <code>z</code> from the origin in the complex plane.
                </p>
                <p><strong>Example:</strong> The modulus of <code>3 + 4i</code> is <code>√(3<sup>2</sup> + 4<sup>2</sup>) = 5</code>.</p>
                <h4>Argument</h4>
                <p>
                    The <strong>argument</strong> of <code>z = a + bi</code> (where <code>z ≠ 0</code>) is denoted as <code>arg(z)</code> or <code>θ</code> and is defined as <code>θ = arctan(b/a)</code>. It represents the angle between the positive real axis and the line connecting the origin to <code>z</code> in the complex plane. The principal argument, denoted Arg(z), is the unique angle θ in the interval (-π, π].
                </p>
                <p><strong>Example:</strong> If <code>z = 1 + i</code>, then <code>θ = arctan(1/1) = π/4</code>.</p>
            </section>

            {/* 3. Polar Form */}
            <section>
                <h3>3. Polar Form</h3>
                <p>
                    Complex numbers can also be represented in polar form, which is very useful in certain contexts.
                </p>
                <h4>Polar Representation</h4>
                <p>
                    A complex number <code>z = a + bi</code> can be expressed in <strong>polar form</strong> as <code>z = r(cos(θ) + i sin(θ))</code>, where:
                </p>
                <ul>
                    <li><code>r</code> is the modulus of <code>z</code> (<code>r = |z|</code>).</li>
                    <li><code>θ</code> is the argument of <code>z</code> (<code>θ = arg(z)</code>).</li>
                </ul>
                <h4>Conversion</h4>
                <ul>
                    <li><strong>Rectangular to Polar:</strong> If <code>z = a + bi</code>, then <code>r = √(a<sup>2</sup> + b<sup>2</sup>)</code> and <code>θ = arctan(b/a)</code> (adjusting <code>θ</code> based on the quadrant).</li>
                    <li><strong>Polar to Rectangular:</strong> If <code>z = r(cos(θ) + i sin(θ))</code>, then <code>a = r cos(θ)</code> and <code>b = r sin(θ)</code>.</li>
                </ul>
                 <p><strong>Example:</strong> Convert <code>z = 1 + i</code> to polar form.</p>
                <ul>
                  <li>Find the modulus: <code>r = √(1<sup>2</sup> + 1<sup>2</sup>) = √2</code>.</li>
                  <li>Find the argument: <code>θ = arctan(1/1) = π/4</code>.</li>
                 <li>Write in polar form: <code>z = √2 (cos(π/4) + i sin(π/4))</code>.</li>
                </ul>
            </section>

            {/* 4. Powers and Roots */}
            <section>
                <h3>4. Powers and Roots</h3>
                <p>
                    De Moivre's theorem is a cornerstone for handling powers and roots of complex numbers.
                </p>
                <h4>De Moivre's Theorem for Powers</h4>
                <p>
                    If <code>z = r(cos(θ) + i sin(θ))</code>, then <code>z<sup>n</sup> = r<sup>n</sup>(cos(nθ) + i sin(nθ))</code> for any integer <code>n</code>.
                </p>
                  <p><strong>Example:</strong> Let's find <code>(1 + i)<sup>4</sup></code>.</p>
                <ul>
                  <li>Convert to polar form: <code>1 + i = √2 (cos(π/4) + i sin(π/4))</code>.</li>
                  <li>Apply De Moivre's Theorem: <code>(1 + i)<sup>4</sup> = (√2)<sup>4</sup> (cos(4*π/4) + i sin(4*π/4)) = 4 (cos(π) + i sin(π)) = 4(-1 + 0i) = -4</code>.</li>
                </ul>
                <h4>De Moivre's Theorem for Roots</h4>
                <p>
                    The <code>n</code>th roots of <code>z = r(cos(θ) + i sin(θ))</code> are given by <code>w<sub>k</sub> = r<sup>1/n</sup>(cos((θ + 2πk)/n) + i sin((θ + 2πk)/n))</code>, where <code>k = 0, 1, 2, ..., n-1</code>.
                </p>
                 <p><strong>Example:</strong> Let's find the cube roots of <code>z = -1</code>.</p>
                <ul>
                  <li>Convert to polar form: <code>-1 = 1 (cos(π) + i sin(π))</code>.</li>
                  <li>Apply De Moivre's Theorem for roots: <code>w<sub>k</sub> = 1<sup>1/3</sup> (cos((π + 2πk)/3) + i sin((π + 2πk)/3))</code> for <code>k = 0, 1, 2</code>.</li>
                 <li> <code>w<sub>0</sub> = cos(π/3) + i sin(π/3) = 1/2 + √3/2 i</code>.</li>
                 <li> <code>w<sub>1</sub> = cos(π) + i sin(π) = -1</code>.</li>
                 <li> <code>w<sub>2</sub> = cos(5π/3) + i sin(5π/3) = 1/2 - √3/2 i</code>.</li>
                 <li>Thus, the cube roots of -1 are <code>1/2 + √3/2 i</code>, <code>-1</code>, and <code>1/2 - √3/2 i</code>.</li>
                </ul>
            </section>

            {/* 5. Functions of Complex Variables */}
            <section>
                <h3>5. Functions of Complex Variables</h3>
                <p>
                    We can extend the concept of functions to complex numbers.
                </p>
                <h4>Definition</h4>
                <p>
                    A <strong>function of a complex variable</strong> is a mapping that assigns a unique complex number <code>w</code> to each complex number <code>z</code> in a given domain. We write <code>w = f(z)</code>.
                </p>
                 <h4>Representation</h4>
                 <p>If <code>z = x + iy</code>, then <code>w = f(z) = u(x,y) + i v(x,y)</code> where <code>u</code> and <code>v</code> are real valued function of the real variables <code>x</code> and <code>y</code>.</p>
                <h4>Examples</h4>
                <ul>
                    <li><code>f(z) = z<sup>2</sup></code></li>
                    <li><code>f(z) = e<sup>z</sup></code></li>
                    <li><code>f(z) = sin(z)</code></li>
                    <li><code>f(z) = z + 2i</code></li>
                </ul>
            </section>

            {/* 6. Elementary Functions */}
            <section>
                <h3>6. Elementary Functions</h3>
                <p>
                    Let's explore some common functions in the complex plane.
                </p>
                <h4>Exponential Function</h4>
                <p>
                    <code>e<sup>z</sup> = e<sup>x+iy</sup> = e<sup>x</sup>(cos(y) + i sin(y))</code>.
                </p>
                 <p><strong>Example:</strong> <code>e<sup>1+iπ</sup> = e<sup>1</sup>(cos(π) + i sin(π)) = e (-1 + 0i) = -e</code>.</p>
                <h4>Trigonometric Functions</h4>
                <ul>
                    <li><code>sin(z) = (e<sup>iz</sup> - e<sup>-iz</sup>) / (2i)</code></li>
                    <li><code>cos(z) = (e<sup>iz</sup> + e<sup>-iz</sup>) / 2</code></li>
                    <li><code>tan(z) = sin(z) / cos(z)</code></li>
                </ul>
                 <p><strong>Example:</strong> <code>cos(i) = (e<sup>i*i</sup> + e<sup>-i*i</sup>) / 2 = (e<sup>-1</sup> + e) / 2 = cosh(1)</code>.</p>
                <h4>Hyperbolic Functions</h4>
                <ul>
                    <li><code>sinh(z) = (e<sup>z</sup> - e<sup>-z</sup>) / 2</code></li>
                    <li><code>cosh(z) = (e<sup>z</sup> + e<sup>-z</sup>) / 2</code></li>
                    <li><code>tanh(z) = sinh(z) / cosh(z)</code></li>
                </ul>
                <p><strong>Example:</strong> <code>cosh(iπ) = (e<sup>iπ</sup> + e<sup>-iπ</sup>) / 2 = (-1 + -1) / 2 = -1</code>.</p>
            </section>

            {/* 7. Inverse Trigonometric Functions */}
            <section>
                <h3>7. Inverse Trigonometric Functions</h3>
                <p>
                    Just like with real numbers, we can define inverse trigonometric functions for complex numbers.
                </p>
                <h4>Definition</h4>
                <p>
                    If <code>w = sin(z)</code>, then <code>z = arcsin(w)</code> is the inverse sine function. Similar definitions apply to other inverse trigonometric functions.
                </p>
                <h4>Properties</h4>
                 <ul>
                 <li> <code>arcsin(z) = -i ln(iz + √(1-z<sup>2</sup>))</code></li>
                <li> <code>arccos(z) = -i ln(z + i√(1-z<sup>2</sup>))</code></li>
                 <li> <code>arctan(z) = i/2 ln((i-z)/(i+z))</code></li>
                 </ul>
                <p><strong>Example:</strong> If <code>w = sin(z)</code> and we want to find <code>z</code>, then we can use <code>z = arcsin(w)</code>.</p>
            </section>
        </div>
    );
};

export default ComplexVariables;