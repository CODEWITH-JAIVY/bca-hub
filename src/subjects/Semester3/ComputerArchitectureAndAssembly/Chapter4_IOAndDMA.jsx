import React from 'react';

const Chapter4_IOAndDMA = () => {
    return (
        <div>
            <h2>Chapter 4: I/O and DMA</h2>
            <p>
                <strong>Q1: What is input/output (I/O) in a computer system?</strong>
                <br />
                A1: I/O refers to the communication between a computer system and the external world, involving input devices (e.g., keyboard, mouse) and output devices (e.g., monitor, printer).
            </p>
            <p>
                <strong>Q2: What are the different methods of I/O data transfer?</strong>
                <br />
                A2: Methods include programmed I/O, interrupt-driven I/O, and direct memory access (DMA).
            </p>
            <p>
                <strong>Q3: What is programmed I/O?</strong>
                <br />
                A3: Programmed I/O is a method where the CPU directly controls the I/O devices, continuously checking the status of the device and transferring data.
            </p>
            <p>
                <strong>Q4: What is interrupt-driven I/O?</strong>
                <br />
                A4: Interrupt-driven I/O is a method where the I/O device signals the CPU when it is ready to transfer data, allowing the CPU to perform other tasks while waiting.
            </p>
            <p>
                <strong>Q5: What is Direct Memory Access (DMA)?</strong>
                <br />
                A5: DMA is a method where the I/O device transfers data directly to or from memory without involving the CPU, improving data transfer efficiency.
            </p>
            <p>
                <strong>Q6: What are the advantages of DMA?</strong>
                <br />
                A6: Advantages include higher data transfer rates, reduced CPU overhead, and improved system performance.
            </p>
        </div>
    );
};

export default Chapter4_IOAndDMA;
