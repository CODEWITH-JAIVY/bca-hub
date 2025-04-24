'use client';
import React from 'react';

const Chapter2_OperatorsAndIO = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 2: Operators and I/O</h2>

      {/* Introduction to Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Operators</h3>
        <p className="mb-4">
          <strong>Q1: What are operators in C?</strong>
          <br />
          A1: Operators are symbols that perform specific operations on operands (variables and values). They tell the computer what to do with the data.
        </p>

        <p className="mb-4">
          <strong>Q2: What are different types of operators in C?</strong>
          <br />
          A2: Types include arithmetic operators, relational operators, logical operators, assignment operators, and bitwise operators. Each type performs different kinds of operations.
        </p>
      </section>

      {/* Arithmetic Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Arithmetic Operators</h3>
        <p className="mb-4">
          <strong>Q3: What are arithmetic operators?</strong>
          <br />
          A3: Arithmetic operators perform mathematical operations such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). These allow you to perform basic math in your programs.
        </p>
          <p className="mb-4">
          <strong>Example of Arithmetic Operators:</strong>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int a = 10, b = 5;\n` +
             `  printf("a + b = %d\\n", a + b);  // Output: 15\n` +
             `  printf("a - b = %d\\n", a - b);  // Output: 5\n` +
             `  printf("a * b = %d\\n", a * b);  // Output: 50\n` +
             `  printf("a / b = %d\\n", a / b);  // Output: 2\n` +
             `  printf("a % b = %d\\n", a % b);  // Output: 0\n` +
             `  return 0;\n` +
             `}`}
          </code>
        </p>
      </section>

      {/* Relational Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Relational Operators</h3>
        <p className="mb-4">
          <strong>Q4: What are relational operators?</strong>
          <br />
          A4: Relational operators compare two operands and return a Boolean value (true or false), such as equal to (<code>==</code>), not equal to (<code>!=</code>), greater than (<code>&gt;</code>), less than (<code>&lt;</code>), greater than or equal to (<code>&gt;=</code>), and less than or equal to (<code>&lt;=</code>). These are essential for making decisions in your code.
        </p>

         <p className="mb-4">
          <strong>Example of Relational Operators:</strong>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int a = 10, b = 5;\n` +
             `  printf("a == b: %d\\n", a == b);  // Output: 0 (false)\n` +
             `  printf("a != b: %d\\n", a != b);  // Output: 1 (true)\n` +
             `  printf("a > b: %d\\n", a > b);   // Output: 1 (true)\n` +
             `  printf("a < b: %d\\n", a < b);   // Output: 0 (false)\n` +
             `  printf("a >= b: %d\\n", a >= b);  // Output: 1 (true)\n` +
             `  printf("a <= b: %d\\n", a <= b);  // Output: 0 (false)\n` +
             `  return 0;\n` +
             `}`}
          </code>
        </p>
      </section>

      {/* Logical Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Logical Operators</h3>
        <p className="mb-4">
          <strong>Q5: What are logical operators?</strong>
          <br />
          A5: Logical operators combine two or more conditions and return a Boolean value, such as AND (<code>&amp;&amp;</code>), OR (<code>||</code>), and NOT (<code>!</code>). They help you create more complex conditions.
        </p>
                 <p className="mb-4">
          <strong>Example of Logical Operators:</strong>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int a = 1, b = 0;\n` +
             `  printf("a && b: %d\\n", a && b);  // Output: 0 (false)\n` +
             `  printf("a || b: %d\\n", a || b);  // Output: 1 (true)\n` +
             `  printf("!a: %d\\n", !a);     // Output: 0 (false)\n` +
             `  printf("!b: %d\\n", !b);     // Output: 1 (true)\n` +
             `  return 0;\n` +
             `}`}
          </code>
        </p>
      </section>

      {/* Assignment Operators */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Assignment Operators</h3>
        <p className="mb-4">
          <strong>Q6: What are assignment operators?</strong>
          <br />
          A6: Assignment operators assign a value to a variable, such as <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, and <code>/=</code>. They are used to store values in variables.
        </p>
                   <p className="mb-4">
          <strong>Example of Assignment Operators:</strong>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int a = 10;\n` +
             `  a += 5;  // a = a + 5; Output: 15\n` +
             `  printf("a += 5: %d\\n", a);\n` +
             `  a -= 3;  // a = a - 3; Output: 12\n` +
             `  printf("a -= 3: %d\\n", a);\n` +
             `  a *= 2;  // a = a * 2; Output: 24\n` +
             `  printf("a *= 2: %d\\n", a);\n` +
             `  a /= 4;  // a = a / 4; Output: 6\n` +
             `  printf("a /= 4: %d\\n", a);\n` +
             `  return 0;\n` +
             `}`}
          </code>
        </p>
      </section>

      {/* Input/Output Functions */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Input/Output Functions</h3>
        <p className="mb-4">
          <strong>Q7: What are input/output (I/O) functions in C?</strong>
          <br />
          A7: I/O functions allow programs to receive input from the user and display output, such as <code>printf()</code> for output and <code>scanf()</code> for input. These functions are crucial for interacting with the user.
        </p>

         <p className="mb-4">
          <strong>Example of Input/Output Functions:</strong>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int num;\n` +
             `  printf("Enter an integer: ");\n` +
             `  scanf("%d", &num);\n` +
             `  printf("You entered: %d\\n", num);\n` +
             `  return 0;\n` +
             `}`}
          </code>
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            <strong>What is the order of precedence of arithmetic operators in C?</strong>
            <br/>
            <em>The order of precedence determines the order in which operators are evaluated. It's usually: Parentheses, Multiplication/Division/Modulus, Addition/Subtraction. Provide an example illustrating operator precedence.</em>
          </li>
          <li>
            <strong>Explain the difference between prefix and postfix increment operators.</strong>
            <br/>
            <em>Prefix increment (++i) increments the value of the variable before it is used. Postfix increment (i++) increments the value of the variable after it is used. Provide code examples to differentiate the two.</em>
          </li>
          <li>
            <strong>How are relational operators used in decision-making statements?</strong>
            <br/>
            <em>Relational operators are used in if statements and loops to compare values and determine whether a block of code should be executed. Provide a practical example with code.</em>
          </li>
          <li>
            <strong>Create a program that demonstrates the use of logical operators.</strong>
            <br/>
            <code>
              {`#include <stdio.h>\n` +
               `int main() {\n` +
               `  int a = 5, b = 10;\n` +
               `  if (a > 0 && b < 20) {\n` +
               `    printf("Both conditions are true.\\n");\n` +
               `  }\n` +
               `  return 0;\n` +
               `}`}
            </code>
            <br/>
            <em>Explain the output of the code.</em>
          </li>
          <li>
            <strong>Describe the purpose of assignment operators and their shorthand notations.</strong>
            <br/>
            <em>Assignment operators assign values to variables. Shorthand notations (like +=, -=) provide a concise way to perform an operation and assign the result to a variable. Provide examples.</em>
          </li>
          <li>
            <strong>How can you use the printf() function to format output in C?</strong>
            <br/>
            <em>printf() uses format specifiers (like %d, %f, %s) to control how data is displayed. You can also use flags, width specifiers, and precision specifiers to customize the output. Give detailed examples.</em>
          </li>
          <li>
            <strong>Explain how the scanf() function reads input from the user.</strong>
            <br/>
            <em>scanf() reads input from the user and stores it in variables. You need to provide format specifiers that match the data types of the variables you're reading into. Don't forget the ampersand (&amp;) before variable names! Provide some examples and discuss how to handle different data types.</em>
          </li>
          <li>
            <strong>What are the common errors to avoid when using I/O functions in C?</strong>
            <br/>
            <em>Common errors include using incorrect format specifiers, forgetting the &amp; in scanf(), and not handling input validation. Discuss how to handle these errors in code with examples.</em>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter2_OperatorsAndIO;
