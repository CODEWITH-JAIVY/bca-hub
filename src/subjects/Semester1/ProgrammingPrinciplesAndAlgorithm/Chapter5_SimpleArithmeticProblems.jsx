'use client';
import React from 'react';

const Chapter5_SimpleArithmeticProblems = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 5: Simple Arithmetic Problems</h2>

      {/* Adding Two Numbers */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Adding Two Numbers</h3>
        <p className="mb-4">
          <strong>Q1: How do you write a C program to add two numbers?</strong>
          <br />
          A1:
          <pre>
            <code>
              {`#include <stdio.h>\n` +
               `int main() {\n` +
               `  int a, b, sum;\n` +
               `  printf("Enter two numbers: ");\n` +
               `  scanf("%d %d", &a, &b);\n` +
               `  sum = a + b;\n` +
               `  printf("Sum = %d", sum);\n` +
               `  return 0;\n` +
               `}`}
            </code>
          </pre>
        </p>
      </section>

      {/* Finding the Average of Three Numbers */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Finding the Average of Three Numbers</h3>
        <p className="mb-4">
          <strong>Q2: How do you write a C program to find the average of three numbers?</strong>
          <br />
          A2:
          <pre>
            <code>
              {`#include <stdio.h>\n` +
               `int main() {\n` +
               `  float a, b, c, average;\n` +
               `  printf("Enter three numbers: ");\n` +
               `  scanf("%f %f %f", &a, &b, &c);\n` +
               `  average = (a + b + c) / 3;\n` +
               `  printf("Average = %.2f", average);\n` +
               `  return 0;\n` +
               `}`}
            </code>
          </pre>
        </p>
      </section>

      {/* Calculating the Area of a Rectangle */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Calculating the Area of a Rectangle</h3>
        <p className="mb-4">
          <strong>Q3: How do you write a C program to calculate the area of a rectangle?</strong>
          <br />
          A3:
          <pre>
            <code>
              {`#include <stdio.h>\n` +
               `int main() {\n` +
               `  float length, width, area;\n` +
               `  printf("Enter length and width: ");\n` +
               `  scanf("%f %f", &length, &width);\n` +
               `  area = length * width;\n` +
               `  printf("Area = %.2f", area);\n` +
               `  return 0;\n` +
               `}`}
            </code>
          </pre>
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Write a C program to calculate the sum of digits of a given number.</li>
          <li>Create a C program to find the factorial of a given number.</li>
          <li>Write a C program to determine if a given number is prime or not.</li>
          <li>Write a C program to swap two numbers without using a temporary variable.</li>
          <li>Create a C program to convert Celsius to Fahrenheit and vice versa.</li>
          <li>Write a C program to calculate simple interest.</li>
          <li>Create a C program to find the area of a circle.</li>
          <li>Write a C program to check if a number is even or odd.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter5_SimpleArithmeticProblems;
