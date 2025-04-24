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
          A1: A vector is a quantity that has both magnitude and direction.
        </p>

        <p className="mb-4">
          <strong>Q2: How do you represent a vector?</strong>
          <br />
          A2: Vectors can be represented in component form (e.g., (x, y, z)) or using unit vectors (i, j, k).
        </p>
      </section>

      {/* Vector Operations */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Vector Operations</h3>
        <p className="mb-4">
          <strong>Q3: How do you perform vector addition and subtraction?</strong>
          <br />
          A3: Vector addition and subtraction are performed component-wise.
        </p>

        <p className="mb-4">
          <strong>Q4: What is the dot product of two vectors?</strong>
          <br />
          A4: The dot product (scalar product) of two vectors a and b is |a||b|cosθ, where θ is the angle between the vectors.
        </p>

        <p className="mb-4">
          <strong>Q5: What is the cross product of two vectors?</strong>
          <br />
          A5: The cross product (vector product) of two vectors a and b is a vector perpendicular to both a and b, with magnitude |a||b|sinθ.
        </p>
      </section>

      {/* Applications of Vector Algebra */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Applications of Vector Algebra</h3>
        <p className="mb-4">
          <strong>Q6: What are the applications of vector algebra?</strong>
          <br />
          A6: Applications include physics, engineering, and computer graphics.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define a vector and explain its components.</li>
          <li>Perform addition and subtraction of two given vectors.</li>
          <li>Calculate the dot product of two vectors.</li>
          <li>Calculate the cross product of two vectors.</li>
          <li>What are some real-world applications of vectors in physics and engineering?</li>
          <li>Explain how vectors are used in computer graphics.</li>
          <li>What is the difference between a scalar and a vector?</li>
          <li>How do you find a unit vector in the direction of a given vector?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter5_VectorAlgebra;
