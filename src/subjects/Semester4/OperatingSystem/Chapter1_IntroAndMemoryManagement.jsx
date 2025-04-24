import React from 'react';

const Chapter1_IntroAndMemoryManagement = () => {
    return (
        <div>
            <h2>Chapter 1: Introduction to Operating Systems and Memory Management</h2>
            <p>
                <strong>Q1: What is an operating system (OS)?</strong>
                <br />
                A1: An operating system is system software that manages computer hardware and software resources and provides common services for computer programs.
            </p>
            <p>
                <strong>Q2: What are the functions of an operating system?</strong>
                <br />
                A2: Functions include resource management, process management, memory management, file management, and device management.
            </p>
            <p>
                <strong>Q3: What is memory management?</strong>
                <br />
                A3: Memory management is the function of an operating system that handles or manages primary storage (main memory) and moves processes and data back and forth between main memory and disk during execution.
            </p>
            <p>
                <strong>Q4: What are the different memory management techniques?</strong>
                <br />
                A4: Techniques include partitioning, paging, and segmentation.
            </p>
            <p>
                <strong>Q5: What is partitioning?</strong>
                <br />
                A5: Partitioning involves dividing the main memory into fixed or variable-sized partitions and allocating each partition to a process.
            </p>
            <p>
                <strong>Q6: What is paging?</strong>
                <br />
                A6: Paging involves dividing both the physical memory (RAM) and the logical memory (process address space) into fixed-size blocks called pages and frames, respectively.
            </p>
        </div>
    );
};

export default Chapter1_IntroAndMemoryManagement;
