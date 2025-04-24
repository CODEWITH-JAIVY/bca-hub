import React from 'react';

// Chapter6_MemoryManagement component: Comprehensive guide to memory management in C, covering stack, heap, dynamic allocation, memory leaks, and common issues.
const Chapter6_MemoryManagement = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">Chapter 6: Memory Management in C</h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="mb-4">
          Memory management is a crucial aspect of C programming, enabling the
          efficient use of system resources. This chapter provides a
          comprehensive guide to memory management in C, covering stack memory,
          heap memory, dynamic memory allocation, memory leaks, and common
          issues. Understanding these concepts is essential for developing
          robust and efficient C applications.
        </p>
      </section>

      {/* Stack Memory */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Stack Memory</h3>
        <p className="mb-4">
          Stack memory is a region of memory used for static memory allocation.
          It is a LIFO (Last-In, First-Out) data structure that stores local
          variables, function arguments, and return addresses.
        </p>
        <h4 className="text-lg font-semibold mb-2">Key Features</h4>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Automatic Allocation and Deallocation:</strong> Memory is
            automatically allocated when a function is called and deallocated
            when the function returns.
          </li>
          <li>
            <strong>Fast Access:</strong> Stack memory access is very fast due to
            its simple allocation and deallocation mechanism.
          </li>
          <li>
            <strong>Fixed Size:</strong> The size of the stack is limited and
            fixed, defined at compile time.
          </li>
          <li>
            <strong>Local Scope:</strong> Variables stored on the stack have a
            local scope within the function or block they are defined in.
          </li>
        </ul>
        <h4 className="text-lg font-semibold mb-2">Stack Overflow</h4>
        <p className="mb-2">
            Stack overflow occurs when the stack memory exceeds its allocated size. This can happen due to excessive recursive calls, large local variables, or deep function call stacks.
        </p>
      </section>

      {/* Heap Memory */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Heap Memory</h3>
        <p className="mb-4">
          Heap memory is a region of memory used for dynamic memory allocation.
          It is managed by the programmer, allowing for flexible memory usage
          during runtime.
        </p>
        <h4 className="text-lg font-semibold mb-2">Key Features</h4>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Dynamic Allocation:</strong> Memory is allocated during
            runtime using functions like <code>malloc</code>, <code>calloc</code>,
            and <code>realloc</code>.
          </li>
          <li>
            <strong>Manual Deallocation:</strong> Memory must be manually
            deallocated using <code>free</code> when it is no longer needed.
          </li>
          <li>
            <strong>Flexible Size:</strong> The size of the heap is limited by the
            available system memory.
          </li>
          <li>
            <strong>Global Scope:</strong> Variables allocated on the heap can be
            accessed from anywhere in the program.
          </li>
        </ul>
      </section>

      {/* Dynamic Memory Allocation */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Dynamic Memory Allocation
        </h3>
        <p className="mb-4">
          Dynamic memory allocation involves managing memory during program
          execution. C provides several functions for this purpose:
        </p>

        {/* malloc */}
        <h4 className="text-lg font-semibold mb-2">
          <code>malloc</code> (Memory Allocation)
        </h4>
        <p className="mb-4">
          <code>malloc</code> allocates a block of memory of a specified size. It
          does not initialize the memory, leaving it with garbage values.
        </p>
        <pre>
          <code>
            {`#include <stdlib.h>
int *ptr = (int *)malloc(sizeof(int) * 10); // Allocates memory for 10 integers
if (ptr == NULL) {
    // Handle memory allocation failure
}`}
          </code>
        </pre>

        {/* calloc */}
        <h4 className="text-lg font-semibold mb-2">
          <code>calloc</code> (Contiguous Allocation)
        </h4>
        <p className="mb-4">
          <code>calloc</code> allocates a block of memory for an array of elements,
          initializing all bytes to zero.
        </p>
        <pre>
          <code>
            {`#include <stdlib.h>
int *ptr = (int *)calloc(10, sizeof(int)); // Allocates memory for 10 integers and initializes them to 0
if (ptr == NULL) {
    // Handle memory allocation failure
}`}
          </code>
        </pre>

        {/* realloc */}
        <h4 className="text-lg font-semibold mb-2">
          <code>realloc</code> (Reallocation)
        </h4>
        <p className="mb-4">
          <code>realloc</code> resizes a previously allocated memory block. It may
          move the block to a new location if necessary.
        </p>
        <pre>
          <code>
            {`#include <stdlib.h>
int *ptr = (int *)malloc(sizeof(int) * 5);
int *newPtr = (int *)realloc(ptr, sizeof(int) * 10); // Resizes the block to hold 10 integers
if (newPtr == NULL) {
    // Handle memory allocation failure
} else {
    ptr = newPtr;
}`}
          </code>
        </pre>
          <p className="mb-2">
              <b>Note:</b> If <code>realloc</code> cannot resize the memory in place, it will allocate a new block, copy the content from the old block, and free the old one.
          </p>

        {/* free */}
        <h4 className="text-lg font-semibold mb-2">
          <code>free</code> (Deallocation)
        </h4>
        <p className="mb-4">
          <code>free</code> releases the memory block allocated by <code>malloc</code>,{' '}
          <code>calloc</code>, or <code>realloc</code>, making it available for
          future use.
        </p>
        <pre>
          <code>
            {`#include <stdlib.h>
int *ptr = (int *)malloc(sizeof(int) * 10);
free(ptr); // Deallocates the memory block`}
          </code>
        </pre>
        <p className="mb-2">
           <b>Note:</b> After freeing a block, it's good practice to set the pointer to <code>NULL</code> to avoid double frees and other memory issues.
        </p>
         <pre>
          <code>
            {`ptr = NULL;`}
          </code>
        </pre>
      </section>

      {/* Memory Leaks */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Memory Leaks</h3>
        <p className="mb-4">
          A memory leak occurs when dynamically allocated memory is no longer
          accessible by the program but has not been freed. This leads to a
          gradual loss of available memory, potentially causing program crashes
          or slowdowns.
        </p>
        <h4 className="text-lg font-semibold mb-2">Causes of Memory Leaks</h4>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Failure to Free Memory:</strong> Not calling <code>free</code>{' '}
            on dynamically allocated memory when it is no longer needed.
          </li>
          <li>
            <strong>Losing Pointers:</strong> Overwriting the pointer to
            dynamically allocated memory without freeing it first.
          </li>
        </ul>
      </section>

      {/* Common Memory Management Issues */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Common Memory Management Issues
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Dangling Pointers:</strong> Pointers that point to memory that
            has been freed.
          </li>
          <li>
            <strong>Double Free:</strong> Attempting to free the same memory
            block more than once.
          </li>
          <li>
            <strong>Buffer Overflow:</strong> Writing data beyond the bounds of an
            allocated block of memory.
          </li>
        </ul>
      </section>
        {/* Applications and Examples */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>
          Applications and Examples
        </h3>
        <p className='mb-4'>
          Memory management is crucial in various programming scenarios:
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>
            <strong>Data Structures:</strong> Creating dynamic data structures
            like linked lists and trees.
          </li>
          <li>
            <strong>File Handling:</strong> Reading and writing large files.
          </li>
          <li>
            <strong>Network Programming:</strong> Allocating buffers for incoming
            data.
          </li>
          <li>
            <strong>Image Processing:</strong> Handling large image data.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Chapter6_MemoryManagement;