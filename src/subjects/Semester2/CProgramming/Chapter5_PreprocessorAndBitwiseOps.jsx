import React from 'react';

// Chapter5_PreprocessorAndBitwiseOps: Full guide to C Preprocessor and Bitwise Operations.
const Chapter5_PreprocessorAndBitwiseOps = () => {
  return (
    <div className='p-4'>
      <h2 className='text-3xl font-bold mb-6'>
        Chapter 5: Preprocessor and Bitwise Operations in C
      </h2>

      {/* Introduction */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Introduction</h3>
        <p className='mb-4'>
          This chapter explores two crucial aspects of C programming: preprocessor directives and bitwise operations. These tools are vital for optimizing performance and enabling low-level system control. The preprocessor modifies code before compilation, while bitwise operations allow direct manipulation of bits in integers—critical for embedded systems, device drivers, and memory-efficient programming.
        </p>
      </section>

      {/* Preprocessor Overview */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>What is a Preprocessor?</h3>
        <p className='mb-4'>
          The C preprocessor is a tool that processes the source code before it's compiled. It handles directives for file inclusion, macro definitions, and conditional code compilation. All preprocessor commands begin with the <code>#</code> symbol and are executed before any actual compilation.
        </p>
      </section>

      {/* File Inclusion Directives */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>File Inclusion Directives</h3>
        <p className='mb-2'>
          The <code>#include</code> directive inserts the contents of another file into the current file. It supports two formats:
        </p>
        <ul className='list-disc list-inside mb-2'>
          <li><code>#include &lt;filename&gt;</code> — Used for system or standard library headers.</li>
          <li><code>#include "filename"</code> — Used for user-defined header files.</li>
        </ul>
        <pre className='bg-gray-100 p-2 rounded'>
          <code>
{`#include <stdio.h>     // Standard header
#include "myheader.h"  // User-defined header`}
          </code>
        </pre>
      </section>

      {/* Macro Substitution Directives */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Macro Substitution Directives</h3>
        <p className='mb-2'>
          The <code>#define</code> directive creates symbolic names (macros) for values or expressions, allowing code reuse and improved readability.
        </p>
        <pre className='bg-gray-100 p-2 rounded'>
          <code>
{`#define PI 3.14159
#define SQUARE(x) ((x) * (x))`}
          </code>
        </pre>
        <p>
          Macros like <code>SQUARE(x)</code> act like inline functions but are replaced by the preprocessor before compilation.
        </p>
      </section>

      {/* Conditional Compilation */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Conditional Compilation</h3>
        <p className='mb-2'>
          These directives compile specific parts of code only when certain conditions are met. Common directives:
        </p>
        <ul className='list-disc list-inside mb-2'>
          <li><code>#ifdef MACRO</code> — Compiles the block if <code>MACRO</code> is defined.</li>
          <li><code>#ifndef MACRO</code> — Compiles the block if <code>MACRO</code> is not defined.</li>
          <li><code>#else</code> — Alternative block if condition fails.</li>
          <li><code>#endif</code> — Ends the conditional block.</li>
        </ul>
        <pre className='bg-gray-100 p-2 rounded'>
          <code>
{`#define DEBUG
#ifdef DEBUG
  printf("Debug mode enabled\\n");
#else
  printf("Release mode\\n");
#endif`}
          </code>
        </pre>
      </section>

      {/* Bitwise Operators Section */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Bitwise Operators</h3>
        <p className='mb-4'>
          Bitwise operators allow operations on individual bits of integers. They're crucial in system-level programming, especially in manipulating flags, masks, and registers.
        </p>

        {/* Each Bitwise Operator Explained */}
        <h4 className='text-lg font-semibold mb-2'>Bitwise AND (<code>&</code>)</h4>
        <pre className='bg-gray-100 p-2 rounded'>
          <code>
{`int a = 5;  // 0101
int b = 3;  // 0011
int result = a & b; // 0001 => 1`}
          </code>
        </pre>

        <h4 className='text-lg font-semibold mt-4 mb-2'>Bitwise OR (<code>|</code>)</h4>
        <pre className='bg-gray-100 p-2 rounded'>
          <code>
{`int result = a | b; // 0111 => 7`}
          </code>
        </pre>

        <h4 className='text-lg font-semibold mt-4 mb-2'>Bitwise XOR (<code>^</code>)</h4>
        <pre className='bg-gray-100 p-2 rounded'>
          <code>
{`int result = a ^ b; // 0110 => 6`}
          </code>
        </pre>

        <h4 className='text-lg font-semibold mt-4 mb-2'>Bitwise NOT (<code>~</code>)</h4>
        <pre className='bg-gray-100 p-2 rounded'>
          <code>
{`int result = ~a; // If a = 5 => ~5 = -6 (2's complement)`}
          </code>
        </pre>

        <h4 className='text-lg font-semibold mt-4 mb-2'>Left Shift (<code>&lt;&lt;</code>)</h4>
        <pre className='bg-gray-100 p-2 rounded'>
          <code>
{`int result = a << 2; // 0101 << 2 => 10100 => 20`}
          </code>
        </pre>

        <h4 className='text-lg font-semibold mt-4 mb-2'>Right Shift (<code>&gt;&gt;</code>)</h4>
        <pre className='bg-gray-100 p-2 rounded'>
          <code>
{`unsigned int a = 20; // 00010100
int result = a >> 2;  // 00000101 => 5`}
          </code>
        </pre>
      </section>

      {/* Summary of Operators */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Common Bitwise Operators Summary</h3>
        <ul className='list-disc list-inside'>
          <li><strong>AND (&)</strong>: Both bits must be 1 to result in 1.</li>
          <li><strong>OR (|)</strong>: At least one bit must be 1 to result in 1.</li>
          <li><strong>XOR (^)</strong>: Result is 1 only if bits are different.</li>
          <li><strong>NOT (~)</strong>: Inverts each bit (0 → 1, 1 → 0).</li>
          <li><strong>Left Shift ( { ">> "})</strong>: Shifts bits left and adds 0s.</li>
          <li><strong>Right Shift ( { ">>"})</strong>: Shifts bits right; behavior depends on signed/unsigned type.</li>
        </ul>
      </section>

      {/* Applications */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Applications</h3>
        <ul className='list-disc list-inside mb-4'>
          <li>Bitwise flags and bit masking in low-level hardware programming.</li>
          <li>Efficient arithmetic and data compression algorithms.</li>
          <li>Compile-time configuration with preprocessor macros.</li>
          <li>Enabling/disabling debug code or platform-specific code using <code>#ifdef</code>.</li>
        </ul>
      </section>
    </div>
  );
};

export default Chapter5_PreprocessorAndBitwiseOps;
