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
          <code>
            #include &lt;stdio.h&gt;<br />
            int main() {<br />
            &nbsp;&nbsp;int a, b, sum;<br />
            &nbsp;&nbsp;printf("Enter two numbers: ");<br />
            &nbsp;&nbsp;scanf("%d %d", &amp;a, &amp;b);<br />
            &nbsp;&nbsp;sum = a + b;<br />
            &nbsp;&nbsp;printf("Sum = %d", sum);<br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </section>

      {/* Finding the Average of Three Numbers */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Finding the Average of Three Numbers</h3>
        <p className="mb-4">
          <strong>Q2: How do you write a C program to find the average of three numbers?</strong>
          <br />
          A2:
          <code>
            #include &lt;stdio.h&gt;<br />
            int main() {<br />
            &nbsp;&nbsp;float a, b, c, average;<br />
            &nbsp;&nbsp;printf("Enter three numbers: ");<br />
            &nbsp;&nbsp;scanf("%f %f %f", &amp;a, &amp;b, &amp;c);<br />
            &nbsp;&nbsp;average = (a + b + c) / 3;<br />
            &nbsp;&nbsp;printf("Average = %.2f", average);<br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </section>

      {/* Calculating the Area of a Rectangle */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Calculating the Area of a Rectangle</h3>
        <p className="mb-4">
          <strong>Q3: How do you write a C program to calculate the area of a rectangle?</strong>
          <br />
          A3:
          <code>
            #include &lt;stdio.h&gt;<br />
            int main() {<br />
            &nbsp;&nbsp;float length, width, area;<br />
            &nbsp;&nbsp;printf("Enter length and width: ");<br />
            &nbsp;&nbsp;scanf("%f %f", &amp;length, &amp;width);<br />
            &nbsp;&nbsp;area = length * width;<br />
            &nbsp;&nbsp;printf("Area = %.2f", area);<br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
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
