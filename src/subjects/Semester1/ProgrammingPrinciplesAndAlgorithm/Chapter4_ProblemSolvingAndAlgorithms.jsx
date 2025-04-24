'use client';
import React from 'react';

const Chapter4_ProblemSolvingAndAlgorithms = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 4: Problem Solving and Algorithms</h2>

      {/* Introduction to Problem-Solving */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Problem-Solving</h3>
        <p className="mb-4">
          <strong>Q1: What is problem-solving?</strong>
          <br />
          A1: Problem-solving is the process of identifying a problem, developing a solution, and implementing and evaluating that solution.
        </p>

        <p className="mb-4">
          <strong>Q2: What are the steps in problem-solving?</strong>
          <br />
          A2: Steps include defining the problem, analyzing the problem, generating possible solutions, selecting the best solution, implementing the solution, and evaluating the results.
        </p>
      </section>

      {/* Introduction to Algorithms */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Algorithms</h3>
        <p className="mb-4">
          <strong>Q3: What is an algorithm in problem-solving?</strong>
          <br />
          A3: An algorithm is a step-by-step procedure or set of rules for solving a specific problem.
        </p>

        <p className="mb-4">
          <strong>Q4: How do you design an algorithm?</strong>
          <br />
          A4: Design an algorithm by understanding the problem, breaking it down into smaller steps, defining inputs and outputs, and specifying the order of steps.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Why is problem definition important in problem-solving?</li>
          <li>What are the key strategies for analyzing a problem effectively?</li>
          <li>Describe different techniques for generating possible solutions to a problem.</li>
          <li>How do you evaluate the best solution among several alternatives?</li>
          <li>Explain the steps to implement a problem solution.</li>
          <li>Why is it important to evaluate the results of a problem-solving process?</li>
          <li>What are the characteristics of an effective algorithm?</li>
          <li>How does algorithm design influence the efficiency of a program?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter4_ProblemSolvingAndAlgorithms;
