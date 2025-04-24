'use client';
import React from 'react';

const Chapter3_OperatingSystemBasics = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 3: Operating System Basics</h2>

      {/* Introduction to Operating Systems */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Operating Systems</h3>
        <p className="mb-4">
          An operating system is system software that manages computer hardware and software resources and provides common services for computer programs.
        </p>

        <p className="mb-4">
          <strong>Q1: What are the main functions of an operating system?</strong>
          <br />
          A1: The main functions include resource management, process management, memory management, file management, and device management.
        </p>
      </section>

      {/* Resource Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Resource Management</h3>
        <p className="mb-4">
          <strong>Q2: Explain resource management in an OS.</strong>
          <br />
          A2: Resource management involves allocating and managing computer resources such as CPU time, memory, and peripheral devices.
        </p>
      </section>

      {/* Process Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Process Management</h3>
        <p className="mb-4">
          <strong>Q3: What is process management?</strong>
          <br />
          A3: Process management includes creating, scheduling, and terminating processes, as well as managing their execution.
        </p>
      </section>

      {/* Memory Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Memory Management</h3>
        <p className="mb-4">
          <strong>Q4: How does an OS manage memory?</strong>
          <br />
          A4: Memory management involves allocating and deallocating memory space to different programs and ensuring efficient utilization of memory.
        </p>
      </section>

      {/* File Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">File Management</h3>
        <p className="mb-4">
          <strong>Q5: What is file management in an OS?</strong>
          <br />
          A5: File management includes organizing, storing, and retrieving files and directories on storage devices.
        </p>
      </section>

      {/* Device Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Device Management</h3>
        <p className="mb-4">
          <strong>Q6: What is device management?</strong>
          <br />
          A6: Device management involves controlling and coordinating the operation of peripheral devices such as printers, keyboards, and monitors.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Describe the main functions of an operating system.</li>
          <li>Explain the process of managing memory in an OS.</li>
          <li>What is the difference between process management and resource management?</li>
          <li>Explain how the OS manages files and directories.</li>
          <li>How does the OS control and coordinate peripheral devices?</li>
          <li>Why is an operating system essential for a computer system?</li>
          <li>Describe the advantages of efficient resource management.</li>
          <li>How does process scheduling improve system performance?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter3_OperatingSystemBasics;
