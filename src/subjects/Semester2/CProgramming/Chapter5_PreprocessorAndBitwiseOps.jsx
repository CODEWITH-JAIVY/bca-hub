import React from 'react';

const Chapter5_PreprocessorAndBitwiseOps = () => {
    return (
        <div>
            <h2>Chapter 5: Preprocessor and Bitwise Operations</h2>
            <p>
                <strong>Q1: What is a preprocessor in C?</strong>
                <br />
                A1: The preprocessor is a part of the C compilation process that performs preliminary operations on the source code before it is compiled.
            </p>
            <p>
                <strong>Q2: What are some common preprocessor directives?</strong>
                <br />
                A2: Common directives include #include, #define, #ifdef, #ifndef, #else, and #endif.
            </p>
            <p>
                <strong>Q3: What does the #include directive do?</strong>
                <br />
                A3: The #include directive includes the contents of a header file into the current source file.
                <br />
                <code>
                    #include &lt;stdio.h&gt; // Includes the standard input/output header file
                </code>
            </p>
            <p>
                <strong>Q4: What does the #define directive do?</strong>
                <br />
                A4: The #define directive creates a macro, which is a symbolic name for a value or expression.
                <br />
                <code>
                    #define PI 3.14159 // Defines a macro named PI with the value 3.14159
                </code>
            </p>
            <p>
                <strong>Q5: What are bitwise operators in C?</strong>
                <br />
                A5: Bitwise operators perform operations on individual bits of integer values.
            </p>
            <p>
                <strong>Q6: What are the common bitwise operators in C?</strong>
                <br />
                A6: Common operators include bitwise AND (&), bitwise OR (|), bitwise XOR (^), bitwise NOT (~), left shift (&lt;&lt;), and right shift (&gt;&gt;).
            </p>
            <p>
                <strong>Q7: How does the bitwise AND (&) operator work?</strong>
                <br />
                A7: The bitwise AND operator performs a logical AND operation on each pair of corresponding bits.
                <br />
                <code>
                    int a = 5; // 0101 in binary<br />
                    int b = 3; // 0011 in binary<br />
                    int result = a & b; // 0001 in binary, result is 1
                </code>
            </p>
            <p>
                <strong>Q8: How does the left shift (&lt;&lt;) operator work?</strong>
                <br />
                A8: The left shift operator shifts the bits of a value to the left by a specified number of positions.
                <br />
                <code>
                    int a = 5; // 0101 in binary<br />
                    int result = a &lt;&lt; 2; // 10100 in binary, result is 20
                </code>
            </p>
        </div>
    );
};

export default Chapter5_PreprocessorAndBitwiseOps;
