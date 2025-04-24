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
          <li>
             <strong>Write a C program to calculate the sum of digits of a given number.</strong>
               <br/>
               <code>
               {`#include <stdio.h>\n` +
                `int main() {\n` +
                ` int num, sum = 0, m;\n` +
                ` printf("Enter a number: ");\n` +
                ` scanf("%d", &num);\n` +
                ` while (num > 0) {\n` +
                `  m = num % 10;\n` +
                `  sum = sum + m;\n` +
                `  num = num / 10;\n` +
                ` }\n` +
                ` printf("Sum of digits = %d\\n", sum);\n` +
                ` return 0;\n` +
                `}`}
               </code>
          </li>
          <li>
            <strong>Create a C program to find the factorial of a given number.</strong>
               <br/>
               <code>
               {`#include <stdio.h>\n` +
                `int main() {\n` +
                ` int n, i;\n` +
                ` unsigned long long fact = 1;\n` +
                ` printf("Enter an integer: ");\n` +
                ` scanf("%d", &n);\n` +
                ` if (n < 0) {\n` +
                `  printf("Error: Factorial does not exist for negative numbers.\\n");\n` +
                ` } else {\n` +
                `  for (i = 1; i <= n; ++i) {\n` +
                `   fact *= i;\n` +
                `  }\n` +
                `  printf("Factorial of %d = %llu\\n", n, fact);\n` +
                ` }\n` +
                ` return 0;\n` +
                `}`}
               </code>
          </li>
          <li>
            <strong>Write a C program to determine if a given number is prime or not.</strong>
               <br/>
               <code>
               {`#include <stdio.h>\n` +
                `int main() {\n` +
                ` int n, i, flag = 0;\n` +
                ` printf("Enter a positive integer: ");\n` +
                ` scanf("%d", &n);\n` +
                ` for (i = 2; i <= n / 2; ++i) {\n` +
                `  if (n % i == 0) {\n` +
                `   flag = 1;\n` +
                `   break;\n` +
                `  }\n` +
                ` }\n` +
                ` if (n == 1) {\n` +
                `  printf("1 is neither prime nor composite.\\n");\n` +
                ` } else {\n` +
                `  if (flag == 0) {\n` +
                `   printf("%d is a prime number.\\n", n);\n` +
                `  } else {\n` +
                `   printf("%d is not a prime number.\\n", n);\n` +
                `  }\n` +
                ` }\n` +
                ` return 0;\n` +
                `}`}
               </code>
          </li>
          <li>
            <strong>Write a C program to swap two numbers without using a temporary variable.</strong>
               <br/>
               <code>
               {`#include <stdio.h>\n` +
                `int main() {\n` +
                ` int a, b;\n` +
                ` printf("Enter two numbers: ");\n` +
                ` scanf("%d %d", &a, &b);\n` +
                ` a = a + b;\n` +
                ` b = a - b;\n` +
                ` a = a - b;\n` +
                ` printf("After swapping, a = %d, b = %d\\n", a, b);\n` +
                ` return 0;\n` +
                `}`}
               </code>
          </li>
          <li>
            <strong>Create a C program to convert Celsius to Fahrenheit and vice versa.</strong>
               <br/>
               <code>
               {`#include <stdio.h>\n` +
                `int main() {\n` +
                ` float celsius, fahrenheit;\n` +
                ` printf("Enter temperature in Celsius: ");\n` +
                ` scanf("%f", &celsius);\n` +
                ` fahrenheit = (celsius * 9 / 5) + 32;\n` +
                ` printf("%.2f Celsius = %.2f Fahrenheit\\n", celsius, fahrenheit);\n` +
                ` printf("Enter temperature in Fahrenheit: ");\n` +
                ` scanf("%f", &fahrenheit);\n` +
                ` celsius = (fahrenheit - 32) * 5 / 9;\n` +
                ` printf("%.2f Fahrenheit = %.2f Celsius\\n", fahrenheit, celsius);\n` +
                ` return 0;\n` +
                `}`}
               </code>
          </li>
          <li>
            <strong>Write a C program to calculate simple interest.</strong>
               <br/>
               <code>
               {`#include <stdio.h>\n` +
                `int main() {\n` +
                ` float principal, rate, time, interest;\n` +
                ` printf("Enter principal, rate, and time: ");\n` +
                ` scanf("%f %f %f", &principal, &rate, &time);\n` +
                ` interest = (principal * rate * time) / 100;\n` +
                ` printf("Simple Interest = %.2f\\n", interest);\n` +
                ` return 0;\n` +
                `}`}
               </code>
          </li>
          <li>
            <strong>Create a C program to find the area of a circle.</strong>
               <br/>
               <code>
               {`#include <stdio.h>\n` +
                `#define PI 3.14159\n` +
                `int main() {\n` +
                ` float radius, area;\n` +
                ` printf("Enter radius of circle: ");\n` +
                ` scanf("%f", &radius);\n` +
                ` area = PI * radius * radius;\n` +
                ` printf("Area = %.2f\\n", area);\n` +
                ` return 0;\n` +
                `}`}
               </code>
          </li>
          <li>
            <strong>Write a C program to check if a number is even or odd.</strong>
               <br/>
               <code>
               {`#include <stdio.h>\n` +
                `int main() {\n` +
                ` int num;\n` +
                ` printf("Enter an integer: ");\n` +
                ` scanf("%d", &num);\n` +
                ` if (num % 2 == 0) {\n` +
                `  printf("%d is even.\\n", num);\n` +
                ` } else {\n` +
                `  printf("%d is odd.\\n", num);\n` +
                ` }\n` +
                ` return 0;\n` +
                `}`}
               </code>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter5_SimpleArithmeticProblems;
