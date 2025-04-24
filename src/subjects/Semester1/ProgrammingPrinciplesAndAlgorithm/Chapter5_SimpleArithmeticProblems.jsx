import React from 'react';

const Chapter5_SimpleArithmeticProblems = () => {
  return (
    <div>
      <h2>Chapter 5: Simple Arithmetic Problems</h2>
      <p>
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
      <p>
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
      <p>
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
    </div>
  );
};

export default Chapter5_SimpleArithmeticProblems;
