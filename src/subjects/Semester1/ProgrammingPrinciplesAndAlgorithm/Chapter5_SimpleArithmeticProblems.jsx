'use client';
import React from 'react';

const Chapter5_SimpleArithmeticProblems = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 5: Simple Arithmetic Problems</h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Adding Two Numbers</h3>
        <p className="mb-4">
          <strong>Q1: How do you write a C program to add two numbers?</strong>
          <br />
          A1: To add two numbers, you first need to declare integer variables to store the numbers and their sum. Then, prompt the user to input the numbers, read them using <code>scanf()</code>, calculate their sum, and display the result using <code>printf()</code>.
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

        <p className="mb-4">
        <strong>Walkthrough:</strong>
        <ul>
        <li><code>#include &lt;stdio.h&gt;</code>: Includes the standard input/output library.</li>
        <li><code>int main()</code>: The main function where the program execution starts.</li>
        <li><code>int a, b, sum;</code>: Declares three integer variables <code>a</code>, <code>b</code>, and <code>sum</code>.</li>
        <li><code>printf("Enter two numbers: ");</code>: Prompts the user to enter two numbers.</li>
        <li><code>scanf("%d %d", &a, &b);</code>: Reads two integers from the user and stores them in variables <code>a</code> and <code>b</code>.</li>
        <li><code>sum = a + b;</code>: Calculates the sum of <code>a</code> and <code>b</code> and stores it in the <code>sum</code> variable.</li>
        <li><code>printf("Sum = %d", sum);</code>: Displays the value of <code>sum</code> to the user.</li>
        <li><code>return 0;</code>: Indicates that the program executed successfully.</li>
         </ul>
         </p>
      </section>

      {/* Finding the Average of Three Numbers */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Finding the Average of Three Numbers</h3>
        <p className="mb-4">
          <strong>Q2: How do you write a C program to find the average of three numbers?</strong>
          <br />
          A2: To find the average, you first need to declare three float variables to store the numbers and another float variable for the average. Prompt the user to input the three numbers, read them using <code>scanf()</code>, calculate the average, and display the result using <code>printf()</code>.
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
         <p className="mb-4">
        <strong>Walkthrough:</strong>
        <ul>
        <li><code>#include &lt;stdio.h&gt;</code>: Includes the standard input/output library.</li>
        <li><code>int main()</code>: The main function where the program execution starts.</li>
        <li><code>float a, b, c, average;</code>: Declares three float variables <code>a</code>, <code>b</code>, and <code>c</code> for input numbers and <code>average</code> for the calculated average.</li>
        <li><code>printf("Enter three numbers: ");</code>: Prompts the user to enter three numbers.</li>
        <li><code>scanf("%f %f %f", &a, &b, &c);</code>: Reads three float numbers from the user and stores them in variables <code>a</code>, <code>b</code>, and <code>c</code>.</li>
        <li><code>average = (a + b + c) / 3;</code>: Calculates the average of <code>a</code>, <code>b</code>, and <code>c</code>.</li>
        <li><code>printf("Average = %.2f", average);</code>: Displays the calculated average to two decimal places.</li>
        <li><code>return 0;</code>: Indicates that the program executed successfully.</li>
        </ul>
         </p>
      </section>

      {/* Calculating the Area of a Rectangle */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Calculating the Area of a Rectangle</h3>
        <p className="mb-4">
          <strong>Q3: How do you write a C program to calculate the area of a rectangle?</strong>
          <br />
          A3: To calculate the area of a rectangle, you need the length and width. Declare float variables for these, prompt the user to enter the length and width, read them using <code>scanf()</code>, calculate the area, and display the result using <code>printf()</code>.
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

         <p className="mb-4">
        <strong>Walkthrough:</strong>
         <ul>
        <li><code>#include &lt;stdio.h&gt;</code>: Includes the standard input/output library.</li>
        <li><code>int main()</code>: The main function where the program execution starts.</li>
        <li><code>float length, width, area;</code>: Declares three float variables <code>length</code>, <code>width</code>, and <code>area</code> for the length, width, and calculated area.</li>
        <li><code>printf("Enter length and width: ");</code>: Prompts the user to enter the length and width of the rectangle.</li>
        <li><code>scanf("%f %f", &length, &width);</code>: Reads the length and width from the user and stores them in variables <code>length</code> and <code>width</code>.</li>
        <li><code>area = length * width;</code>: Calculates the area of the rectangle.</li>
        <li><code>printf("Area = %.2f", area);</code>: Displays the calculated area to two decimal places.</li>
         <li><code>return 0;</code>: Indicates that the program executed successfully.</li>
        </ul>
         </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            <strong>Write a C program to calculate the sum of digits of a given number.</strong>
               <br/>
               <em>Include detailed comments explaining every step. What should your edge case coverage and input validations consist of to make sure only integers are entered?</em>
               <br/>
               <code>
               {`#include <stdio.h>\n` +
                `int main() {\n` +
                `  int num, sum = 0, m;\n` +
                `  printf("Enter a number: ");\n` +
                `  scanf("%d", &num);\n` +
                `  while (num > 0) {\n` +
                `    m = num % 10;\n` +
                `    sum = sum + m;\n` +
                `    num = num / 10;\n` +
                `  }\n` +
                `  printf("Sum of digits = %d\\n", sum);\n` +
                `  return 0;\n` +
                `}`}
               </code>
          </li>
          <li>
            <strong>Create a C program to find the factorial of a given number.</strong>
               <br/>
               <em>Explain how handling input errors are critical in this program, and show a sample of this.</em>
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
                <em>Add input validation so only integers can be used, and explain why loop traverses only up to n/2, what are some performance improvements you can make to this code?</em>
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
               <em>Explain the mathematical operations underlying this algorithm and its limitations with different datatypes</em>
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
                <em>Explain how could one validate the number being passed into the program is a number</em>
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
                <em>Discuss the limitations of using floats.</em>
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
                <em>How can we account for PI being different depending on the precision required, and allow that to be modified during runtime?</em>
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
               <em>What are the other methods (bitwise or formulaic) of determining if a number is even or odd?
               Discuss their performance charactaristics.</em>
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

