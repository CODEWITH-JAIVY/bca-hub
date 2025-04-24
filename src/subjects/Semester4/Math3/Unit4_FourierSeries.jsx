import React from 'react';

const Unit4_FourierSeries = () => {
    return (
        <div>
            <h2>Unit 4: Fourier Series</h2>

            <section>
                <h3>1. Periodic Functions</h3>
                <p>
                    In mathematics, a function f(x) is said to be <strong>periodic</strong> if there exists a positive number T such that for all x in the domain of f, we have:
                </p>
                <p>
                    f(x + T) = f(x)
                </p>
                <p>
                    Here, T is called the <strong>period</strong> of the function. If T is the smallest such positive number, it is called the <strong>fundamental period</strong>. Essentially, this means the function repeats its values at regular intervals.
                </p>
                <p>
                    <strong>Examples:</strong>
                </p>
                <ul>
                    <li>Sine and Cosine: sin(x) and cos(x) are periodic with a fundamental period of 2π.</li>
                    <li>Tangent: tan(x) is periodic with a fundamental period of π.</li>
                    <li>Sawtooth Wave: A function that increases linearly and then drops sharply, repeating this pattern.</li>
                    <li>Square Wave: A function that alternates between two constant values, like -1 and 1, repeating this pattern.</li>
                </ul>
                <p>
                    <strong>Graphical Illustration:</strong> Imagine a wave pattern that repeats itself after a certain interval. That's a periodic function. The distance over which the wave repeats is the period.
                </p>
            </section>

            <section>
                <h3>2. Fourier Series</h3>
                <p>
                    A <strong>Fourier series</strong> is a way to represent a periodic function as a sum of sine and cosine functions. It's like breaking down a complex wave into simpler waves.
                </p>
                <p>
                    If f(x) is a periodic function with period 2L, then its Fourier series is given by:
                </p>
                <p>
                    f(x) = a<sub>0</sub>/2 + Σ<sub>n=1</sub><sup>∞</sup> [a<sub>n</sub> cos(nπx/L) + b<sub>n</sub> sin(nπx/L)]
                </p>
                <p>
                    where the coefficients a<sub>0</sub>, a<sub>n</sub>, and b<sub>n</sub> are called <strong>Fourier coefficients</strong>.
                </p>
                <p>
                    <strong>Fourier Coefficients:</strong>
                </p>
                <ul>
                    <li>a<sub>0</sub> = (1/L) ∫<sub>-L</sub><sup>L</sup> f(x) dx</li>
                    <li>a<sub>n</sub> = (1/L) ∫<sub>-L</sub><sup>L</sup> f(x) cos(nπx/L) dx</li>
                    <li>b<sub>n</sub> = (1/L) ∫<sub>-L</sub><sup>L</sup> f(x) sin(nπx/L) dx</li>
                </ul>
                <p>
                    These integrals calculate how much of each frequency (n) is present in the function.
                </p>
                <p>
                    <strong>Representing a Function as a Fourier Series:</strong>
                </p>
                <ol>
                    <li>Determine the period (2L) of the function.</li>
                    <li>Calculate the Fourier coefficients a<sub>0</sub>, a<sub>n</sub>, and b<sub>n</sub> using the above formulas.</li>
                    <li>Substitute these coefficients into the Fourier series formula.</li>
                </ol>
                <p>
                    <strong>Example:</strong> If we have a square wave, we can calculate its Fourier coefficients and write it as an infinite sum of sine and cosine terms.
                </p>
            </section>

            <section>
                <h3>3. Fourier Series of Even and Odd Functions</h3>
                <p>
                    When a function has certain symmetries, its Fourier series can be simplified.
                </p>
                <p>
                    <strong>Even Functions:</strong>
                </p>
                <p>
                    A function f(x) is <strong>even</strong> if f(-x) = f(x). Even functions are symmetric about the y-axis.
                </p>
                <p>
                    For an even function, all the b<sub>n</sub> coefficients are zero. The Fourier series becomes a <strong>cosine series</strong>:
                </p>
                <p>
                    f(x) = a<sub>0</sub>/2 + Σ<sub>n=1</sub><sup>∞</sup> a<sub>n</sub> cos(nπx/L)
                </p>
                <p>
                    <strong>Examples:</strong> cos(x), x<sup>2</sup>, |x|.
                </p>
                <p>
                    <strong>Odd Functions:</strong>
                </p>
                <p>
                    A function f(x) is <strong>odd</strong> if f(-x) = -f(x). Odd functions are symmetric about the origin.
                </p>
                <p>
                    For an odd function, all the a<sub>n</sub> and a<sub>0</sub> coefficients are zero. The Fourier series becomes a <strong>sine series</strong>:
                </p>
                <p>
                    f(x) = Σ<sub>n=1</sub><sup>∞</sup> b<sub>n</sub> sin(nπx/L)
                </p>
                <p>
                    <strong>Examples:</strong> sin(x), x, x<sup>3</sup>.
                </p>
                <p><strong>Graphical Illustration</strong> : Draw a graph and show the difference between even and odd functions.</p>
            </section>

            <section>
                <h3>4. Half Range Series</h3>
                <p>
                    Sometimes, we're only given a function defined on a half-interval (0, L), but we want to represent it as a Fourier series. We can do this by extending the function to be either even or odd.
                </p>
                <p>
                    <strong>Sine Series:</strong>
                </p>
                <p>
                    If we want a sine series, we extend the function as an <strong>odd function</strong>. The coefficients are calculated as:
                </p>
                <p>
                   b<sub>n</sub> = (2/L) ∫<sub>0</sub><sup>L</sup> f(x) sin(nπx/L) dx
                </p>
                <p>
                  f(x) = Σ<sub>n=1</sub><sup>∞</sup> b<sub>n</sub> sin(nπx/L)
                </p>
                <p>
                    <strong>Cosine Series:</strong>
                </p>
                <p>
                    If we want a cosine series, we extend the function as an <strong>even function</strong>. The coefficients are calculated as:
                </p>
                <p>
                    a<sub>0</sub> = (2/L) ∫<sub>0</sub><sup>L</sup> f(x) dx
                </p>
                 <p>
                    a<sub>n</sub> = (2/L) ∫<sub>0</sub><sup>L</sup> f(x) cos(nπx/L) dx
                </p>
                   <p>
                    f(x) = a<sub>0</sub>/2 + Σ<sub>n=1</sub><sup>∞</sup> a<sub>n</sub> cos(nπx/L)
                </p>
                <p>
                    <strong>Extending a Function:</strong>
                </p>
                <p>
                    Given f(x) on (0, L), to extend it as an odd function, we define f(-x) = -f(x). To extend it as an even function, we define f(-x) = f(x).
                </p>
                <p>
                    <strong>Example:</strong> If we have f(x) = x on (0, π), we can extend it to (-π, π) as an even function (to get a cosine series) or as an odd function (to get a sine series).
                </p>
            </section>
        </div>
    );
};

export default Unit4_FourierSeries;