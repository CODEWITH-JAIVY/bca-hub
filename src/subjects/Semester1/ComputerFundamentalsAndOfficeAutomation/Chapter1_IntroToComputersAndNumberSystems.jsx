'use client';
import React from 'react';

const Chapter1_IntroToComputersAndNumberSystems = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 1: Introduction to Computers and Number Systems</h2>

      {/* Introduction to Computers */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Computers</h3>
        <p className="mb-4">
          A computer is an electronic device that manipulates information or data. It has the ability to store, retrieve, and process data.
        </p>

        <p className="mb-4">
          <strong>Q1: What are the basic components of a computer system?</strong>
          <br />
          A1: The basic components include the input unit, central processing unit (CPU), memory unit, and output unit.
        </p>

        <p className="mb-4">
          <strong>Q2: Explain the function of the input unit.</strong>
          <br />
          A2: The input unit allows data and instructions to enter the computer system, typically through devices like keyboards and mice.
        </p>

        <p className="mb-4">
          <strong>Q3: What is the role of the CPU?</strong>
          <br />
          A3: The CPU is the brain of the computer, responsible for executing instructions and performing calculations.
        </p>

        <p className="mb-4">
          <strong>Q4: What is the purpose of the memory unit?</strong>
          <br />
          A4: The memory unit stores data and instructions temporarily or permanently for the CPU to access.
        </p>

        <p className="mb-4">
          <strong>Q5: What does the output unit do?</strong>
          <br />
          A5: The output unit displays or presents the processed information to the user, using devices like monitors and printers.
        </p>
      </section>

      {/* Number Systems */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Number Systems</h3>
        <p className="mb-4">
          Computers use different number systems to represent data and instructions.
        </p>

        <p className="mb-4">
          <strong>Q6: What are different types of number systems used in computers?</strong>
          <br />
          A6: Common number systems include binary (base 2), decimal (base 10), octal (base 8), and hexadecimal (base 16).
        </p>

        <p className="mb-4">
          <strong>Q7: Why is the binary number system important in computers?</strong>
          <br />
          A7: Computers use binary because their electronic circuits have two states: on (1) and off (0), making binary the natural language for representing data and instructions.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Describe the functions of each component of a computer system.</li>
          <li>Explain the difference between RAM and ROM.</li>
          <li>Convert the decimal number 25 to binary.</li>
          <li>Convert the binary number 1101 to decimal.</li>
          <li>Why do computers use the binary number system instead of the decimal number system?</li>
          <li>Explain the role of the CPU in processing data.</li>
          <li>Describe the function of the output unit in presenting processed information.</li>
          <li>Explain the importance of the memory unit in storing data and instructions.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter1_IntroToComputersAndNumberSystems;
