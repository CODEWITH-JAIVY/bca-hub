import React from 'react';

const Chapter4_SequentialCircuits = () => {
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-6">
                Chapter 4: Sequential Circuits
            </h2>
            
            <p>
                <strong>Q1: What is a sequential circuit?</strong>
                <br />
                A1: A sequential circuit is a digital circuit whose output depends not only on the current inputs but also on the past sequence of inputs (i.e., the circuit has memory). 
                This allows sequential circuits to store information and change their output over time.
            </p>

            <p>
                <strong>Q2: What are the basic building blocks of sequential circuits?</strong>
                <br />
                A2: The basic building blocks are flip-flops and latches. These components are used to store and control the flow of data within the circuit.
                - **Latches**: Level-triggered devices that can hold information as long as the enable signal is active.
                - **Flip-flops**: Edge-triggered devices that change states on the rising or falling edge of a clock signal.
            </p>

            <p>
                <strong>Q3: What is a flip-flop?</strong>
                <br />
                A3: A flip-flop is a bistable multivibrator, meaning it has two stable states (0 or 1) and can store one bit of information. 
                Flip-flops are used to build registers, memory, and counters. They are the fundamental building blocks of sequential logic circuits.
            </p>

            <p>
                <strong>Q4: What are the different types of flip-flops?</strong>
                <br />
                A4: Types of flip-flops include:
                - **SR Flip-Flop**: Set-Reset flip-flop, which is the simplest type, with inputs **S** and **R** (Set and Reset).
                - **JK Flip-Flop**: A modified SR flip-flop that removes the invalid state by introducing feedback.
                - **D Flip-Flop**: Data flip-flop, where the output **Q** follows the input **D** at the rising edge of the clock signal.
                - **T Flip-Flop**: Toggle flip-flop, where the output toggles between 0 and 1 with every clock pulse.
            </p>

            <p>
                <strong>Q5: Explain the SR flip-flop.</strong>
                <br />
                A5: The **SR Flip-Flop** has two inputs: **S (Set)** and **R (Reset)**. 
                - When **S** = 1 and **R** = 0, the flip-flop is set to 1.
                - When **S** = 0 and **R** = 1, the flip-flop is reset to 0.
                - When both **S** and **R** are 0, the flip-flop retains its current state.
                - When both **S** and **R** are 1, it creates an invalid state in basic SR flip-flops.
            </p>

            <p>
                <strong>Q6: Explain the D flip-flop.</strong>
                <br />
                A6: The **D Flip-Flop** has one input: **D (Data)**. 
                - The output **Q** follows the input **D** at the rising edge of the clock signal. 
                - This flip-flop is often used for data storage and synchronization because it ensures that the output always follows the data input precisely on the clock edge.
            </p>

            <p>
                <strong>Q7: What is a register?</strong>
                <br />
                A7: A **register** is a collection of flip-flops that are used to store multiple bits of data. 
                - For example, an 8-bit register can store 8 bits of information.
                - Registers are fundamental in computer architecture, where they store instructions, memory addresses, or intermediate data.
            </p>

            <p>
                <strong>Q8: What is a counter?</strong>
                <br />
                A8: A **counter** is a sequential circuit that counts in binary or other numeral systems based on a clock signal. 
                - Counters can increment or decrement their value with each clock pulse.
                - There are two types of counters:
                  - **Up counters**: Count in increasing order (e.g., 0, 1, 2, 3, ...).
                  - **Down counters**: Count in decreasing order (e.g., 3, 2, 1, 0, ...).
                - **Counters** are widely used in applications such as frequency division, event counting, and generating timing signals.
            </p>

            <p>
                <strong>Q9: What is the difference between synchronous and asynchronous sequential circuits?</strong>
                <br />
                A9: 
                - **Synchronous sequential circuits**: The state changes are synchronized with the clock signal. All flip-flops change state simultaneously, making it easier to design and analyze.
                - **Asynchronous sequential circuits**: The state changes are not synchronized with a clock signal. The circuit relies on the timing of inputs and outputs, making it more complex to analyze but useful for certain applications requiring faster response times.
            </p>
        </div>
    );
};

export default Chapter4_SequentialCircuits;
