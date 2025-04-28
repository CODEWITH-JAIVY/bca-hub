'use client';
import React from 'react';

const Chapter3_ControlStructures = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 3: Control Structures</h2>

      {/* Introduction to Control Structures */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Control Structures</h3>
        <p className="mb-4">
          <strong>Q1: What are control structures?</strong>
          <br />
          A1: Control structures are programming constructs that allow the control flow of a program to be altered based on certain conditions. They dictate the order in which code is executed.
        </p>

        <p className="mb-4">
          <strong>Q2: What are the types of control structures in C?</strong>
          <br />
          A2: Types include sequential, selection (if, if-else, switch), and iteration (for, while, do-while) control structures. These allow you to build logic into your programs.
        </p>
      </section>

      {/* Selection Control Structures */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Selection Control Structures</h3>
        <p className="mb-4">
          <strong>Q3: Explain the if statement.</strong>
          <br />
          A3: The if statement executes a block of code if a specified condition is true. If the condition is false, the block is skipped.
          <br/>
          <code>
            {`if (condition) {\n` +
             `  // Code to execute if the condition is true\n` +
             `}`}
          </code>

          <strong>Example:</strong>
           <br/>
            <pre>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int age = 20;\n` +
             `  if (age >= 18) {\n` +
             `    printf("You are an adult.\\n");\n` +
             `  }\n` +
             `  return 0;\n` +
             `}`}
          </code>
            </pre>
        </p>

        <p className="mb-4">
          <strong>Q4: Explain the if-else statement.</strong>
          <br />
          A4: The if-else statement executes one block of code if a condition is true and another block of code if the condition is false. This provides a way to handle both possibilities.
           <br/>
          <code>
            {`if (condition) {\n` +
             `  // Code to execute if the condition is true\n` +
             `} else {\n` +
             `  // Code to execute if the condition is false\n` +
             `}`}
          </code>

          <strong>Example:</strong>
           <br/>
           <pre>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int age = 16;\n` +
             `  if (age >= 18) {\n` +
             `    printf("You are an adult.\\n");\n` +
             `  } else {\n` +
             `    printf("You are a minor.\\n");\n` +
             `  }\n` +
             `  return 0;\n` +
             `}`}
          </code>
           </pre>
        </p>

        <p className="mb-4">
          <strong>Q5: Explain the switch statement.</strong>
          <br />
          A5: The switch statement selects one of several code blocks to execute based on the value of a variable. It's often used when you have multiple possible values for a variable.
           <br/>
          <code>
            {`switch (variable) {\n` +
             `  case value1:\n` +
             `    // Code to execute if variable == value1\n` +
             `    break;\n` +
             `  case value2:\n` +
             `    // Code to execute if variable == value2\n` +
             `    break;\n` +
             `  default:\n` +
             `    // Code to execute if variable doesn't match any case\n` +
             `}`}
          </code>

          <strong>Example:</strong>
           <br/>
           <pre>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int day = 3;\n` +
             `  switch (day) {\n` +
             `    case 1: printf("Monday\\n"); break;\n` +
             `    case 2: printf("Tuesday\\n"); break;\n` +
             `    case 3: printf("Wednesday\\n"); break;\n` +
             `    default: printf("Invalid day\\n");\n` +
             `  }\n` +
             `  return 0;\n` +
             `}`}
          </code>
           </pre>
        </p>
      </section>

      {/* Iteration Control Structures */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Iteration Control Structures</h3>
        <p className="mb-4">
          <strong>Q6: Explain the for loop.</strong>
          <br />
          A6: The for loop is used to repeat a block of code a specific number of times. It's very handy when you know how many times you need to loop.
           <br/>
          <code>
            {`for (initialization; condition; increment) {\n` +
             `  // Code to be repeated\n` +
             `}`}
          </code>

          <strong>Example:</strong>
           <br/>
           <pre>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  for (int i = 0; i < 5; i++) {\n` +
             `    printf("%d\\n", i);\n` +
             `  }\n` +
             `  return 0;\n` +
             `}`}
          </code>
           </pre>
        </p>

        <p className="mb-4">
          <strong>Q7: Explain the while loop.</strong>
          <br />
          A7: The while loop repeats a block of code as long as a specified condition is true. It's perfect for situations where you don't know in advance how many times you'll need to loop.
           <br/>
          <code>
            {`while (condition) {\n` +
             `  // Code to be repeated\n` +
             `}`}
          </code>

           <strong>Example:</strong>
           <br/>
           <pre>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int i = 0;\n` +
             `  while (i < 5) {\n` +
             `    printf("%d\\n", i);\n` +
             `    i++;\n` +
             `  }\n` +
             `  return 0;\n` +
             `}`}
          </code>
           </pre>
        </p>

        <p className="mb-4">
          <strong>Q8: Explain the do-while loop.</strong>
          <br />
          A8: The do-while loop repeats a block of code at least once, and then continues to repeat as long as a specified condition is true. This guarantees that the code block will be executed at least one time.
           <br/>
          <code>
            {`do {\n` +
             `  // Code to be repeated\n` +
             `} while (condition);`}
          </code>

             <strong>Example:</strong>
           <br/>
           <pre>
          <code>
            {`#include <stdio.h>\n` +
             `int main() {\n` +
             `  int i = 0;\n` +
             `  do {\n` +
             `    printf("%d\\n", i);\n` +
             `    i++;\n` +
             `  } while (i < 5);\n` +
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
            <strong>Describe the syntax and usage of the if statement in C.</strong>
            <br/>
            <em>The if statement has the syntax: <code>if (condition) {`/* code */`}</code>. The <code>condition</code> is a Boolean expression. If it evaluates to true, the code inside the curly braces is executed. Provide a practical code example that demonstrates this concept.</em>
          </li>
          <li>
            <strong>How does the if-else statement differ from the if statement? Provide examples.</strong>
            <br/>
            <em>The if-else statement provides an alternative block of code to execute if the condition in the if statement is false. Example: 
              <pre>
              <code>
              {`#include <stdio.h>\n` +
               `int main() {\n` +
               `  int x = -5;\n` +
               `  if (x > 0) {\n` +
               `    printf("Positive"); \n` +
               `  } else {\n` +
               `    printf("Non-positive"); \n` +
               `  }\n` +
               `  return 0;\n` +
               `}`}
              </code>
              </pre>
.  Explain the output of the code in your answer.</em>
          </li>
          <li>
            <strong>Explain the purpose of the switch statement and when it is most useful.</strong>
            <br/>
            <em>The switch statement is used to select one of several code blocks to execute based on the value of a variable. It's most useful when you have multiple possible values to check against. What are the differences between a long chain of <code>if else if</code> statements, and a switch statement?</em>
          </li>
          <li>
            <strong>What are the components of a for loop, and how do they control the loop's execution?</strong>
            <br/>
            <em>The for loop has three components: initialization, condition, and increment. The <code>initialization</code> initializes a counter variable. The <code>condition</code> is a Boolean expression that determines whether the loop continues. The <code>increment</code> updates the counter variable after each iteration. Provide a detailed code example explaining these.</em>
          </li>
          <li>
            <strong>How does the while loop work, and what are its common use cases?</strong>
            <br/>
            <em>The while loop repeatedly executes a block of code as long as the condition is true. It's used when you need to repeat a block of code an unknown number of times. When should you prefer using `while` instead of `for` loops?</em>
          </li>
          <li>
            <strong>Describe the key differences between the while and do-while loops.</strong>
            <br/>
            <em>The while loop checks the condition before executing the code block, while the do-while loop checks the condition after executing the code block, guaranteeing that the code block will be executed at least once. Give practical code examples explaining this behavior.</em>
          </li>
          <li>
            <strong>Create a program that uses nested control structures (e.g., if inside a for loop).</strong>
            <br/>
            
            <pre>
              <code>
              {`#include <stdio.h>\n` +
               `int main() {\n` +
               `  for (int i = 0; i < 5; i++) {\n` +
               `    if (i % 2 == 0) {\n` +
               `      printf("%d is even\\n", i);\n` +
               `    } else {\n` +
               `      printf("%d is odd\\n", i);\n` +
               `    }\n` +
               `  }\n` +
               `  return 0;\n` +
               `}`}
              </code>
              </pre>
            <br/>
            <em>Explain the logic and output of the code provided.</em>
          </li>
          <li>
            <strong>Discuss the importance of control structures in programming.</strong>
            <br/>
            <em>Control structures are fundamental to programming because they allow you to create programs that make decisions, repeat actions, and respond to different situations, making them more powerful and flexible. Discuss what would happen if programming languages didn't provide control structures.</em>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter3_ControlStructures;
