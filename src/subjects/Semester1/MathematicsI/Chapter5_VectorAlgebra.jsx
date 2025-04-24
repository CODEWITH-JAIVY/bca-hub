'use client';
import React from 'react';

const Chapter5_VectorAlgebra = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 5: Vector Algebra</h2>

      {/* Introduction to Vectors */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Vectors</h3>
        <p className="mb-4">
          <strong>Q1: What is a vector?</strong>
          <br />
          A1: A vector is a quantity that has both magnitude (size) and direction. It is typically represented by an arrow whose length is proportional to the vector's magnitude and whose direction indicates the vector's direction.
        </p>

        <p className="mb-4">
          <strong>Q2: How do you represent a vector in 2D and 3D space?</strong>
          <br />
          A2: In 2D space, a vector can be represented as `(x, y)`, where x and y are the components along the x-axis and y-axis, respectively. In 3D space, a vector is represented as `(x, y, z)`, with z being the component along the z-axis.
        </p>

        <p className="mb-4">
          <strong>Q3: What are unit vectors?</strong>
          <br />
          A3: Unit vectors are vectors with a magnitude of 1, used to specify direction. The standard unit vectors in 3D space are `i = (1, 0, 0)`, `j = (0, 1, 0)`, and `k = (0, 0, 1)`. Any vector can be represented as a linear combination of these unit vectors.
        </p>
      </section>

      {/* Vector Operations */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Vector Operations</h3>
        <p className="mb-4">
          <strong>Q4: How do you perform vector addition and subtraction?</strong>
          <br />
          A4: Vector addition and subtraction are performed component-wise. If `a = (x1, y1, z1)` and `b = (x2, y2, z2)`, then `a + b = (x1 + x2, y1 + y2, z1 + z2)` and `a - b = (x1 - x2, y1 - y2, z1 - z2)`.
          <br />
          <em>Example 1:</em> If `a = (1, 2, 3)` and `b = (4, 5, 6)`, find `a + b` and `a - b`.
          <br />
          <em>Solution:</em> `a + b = (5, 7, 9)` and `a - b = (-3, -3, -3)`
        </p>

        <p className="mb-4">
          <strong>Q5: What is the dot product of two vectors?</strong>
          <br />
          A5: The dot product (also known as the scalar product) of two vectors `a = (x1, y1, z1)` and `b = (x2, y2, z2)` is a scalar value given by `a · b = x1*x2 + y1*y2 + z1*z2`. It is also equal to `|a||b|cosθ`, where θ is the angle between the vectors.
          <br />
          <em>Example 2:</em> Find the dot product of `a = (1, 2, 3)` and `b = (4, 5, 6)`.
          <br />
          <em>Solution:</em> `a · b = (1*4) + (2*5) + (3*6) = 4 + 10 + 18 = 32`
        </p>

        <p className="mb-4">
          <strong>Q6: What is the cross product of two vectors?</strong>
          <br />
          A6: The cross product (also known as the vector product) of two vectors `a = (x1, y1, z1)` and `b = (x2, y2, z2)` is a vector perpendicular to both `a` and `b`, with magnitude `|a||b|sinθ`. The cross product is given by:
          <br />
          `a x b = (y1*z2 - z1*y2, z1*x2 - x1*z2, x1*y2 - y1*x2)`
          <br />
          <em>Example 3:</em> Find the cross product of `a = (1, 2, 3)` and `b = (4, 5, 6)`.
          <br />
          <em>Solution:</em> `a x b = ((2*6 - 3*5), (3*4 - 1*6), (1*5 - 2*4)) = (-3, 6, -3)`
        </p>
      </section>

      {/* Double and Triple Products */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Double and Triple Products</h3>
        <p className="mb-4">
          <strong>Q7: What is the scalar triple product?</strong>
          <br />
          A7: The scalar triple product of three vectors `a`, `b`, and `c` is defined as `a · (b x c)`, which gives the volume of the parallelepiped formed by the three vectors.
          <br />
          <em>Formula:</em> `a · (b x c) = x1(y2z3 - z2y3) - y1(x2z3 - z2x3) + z1(x2y3 - y2x3)` where `a = (x1, y1, z1)`, `b = (x2, y2, z2)`, and `c = (x3, y3, z3)`.
        </p>

        <p className="mb-4">
          <strong>Q8: What is the vector triple product?</strong>
          <br />
          A8: The vector triple product of three vectors `a`, `b`, and `c` is defined as `a x (b x c)`. It can be expanded using the formula `a x (b x c) = b(a · c) - c(a · b)`.
        </p>
      </section>

      {/* Physical Interpretation */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Physical Interpretation</h3>
        <p className="mb-4">
          <strong>Q9: What is the physical interpretation of the scalar triple product?</strong>
          <br />
          A9: The scalar triple product `a · (b x c)` represents the volume of the parallelepiped formed by the vectors `a`, `b`, and `c`.
        </p>

        <p className="mb-4">
          <strong>Q10: What is the physical interpretation of the vector triple product?</strong>
          <br />
          A10: The vector triple product represents a vector lying in the plane defined by `b` and `c`, and it is perpendicular to `a`.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define a vector and explain its components.</li>
          <li>Explain how to perform addition and subtraction of vectors with examples.</li>
          <li>What is the difference between the dot product and cross product? Explain with formulas and examples.</li>
          <li>Calculate the dot product and cross product of two given vectors.</li>
          <li>What are some real-world applications of vectors in physics and engineering?</li>
          <li>Define the scalar triple product and vector triple product and provide their physical interpretations.</li>
          <li>How do you find a unit vector in the direction of a given vector? Provide an example.</li>
          <li>Explain the geometric significance of the dot product and cross product.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter5_VectorAlgebra;
