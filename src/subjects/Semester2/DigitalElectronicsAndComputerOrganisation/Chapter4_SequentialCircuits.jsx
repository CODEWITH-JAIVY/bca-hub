import React from 'react';

const Chapter4_SequentialCircuits = () => {
    return (
        <div>
            <h2>Chapter 4: Sequential Circuits</h2>
            <p>
                <strong>Q1: What is a sequential circuit?</strong>
                <br />
                A1: A sequential circuit is a digital circuit whose output depends not only on the current inputs but also on the past sequence of inputs (i.e., the circuit has memory).
            </p>
            <p>
                <strong>Q2: What are the basic building blocks of sequential circuits?</strong>
                <br />
                A2: The basic building blocks are flip-flops and latches.
            </p>
            <p>
                <strong>Q3: What is a flip-flop?</strong>
                <br />
                A3: A flip-flop is a bistable multivibrator, meaning it has two stable states and can store one bit of information.
            </p>
            <p>
                <strong>Q4: What are the different types of flip-flops?</strong>
                <br />
                A4: Types include SR flip-flop, JK flip-flop, D flip-flop, and T flip-flop.
            </p>
            <p>
                <strong>Q5: Explain the SR flip-flop.</strong>
                <br />
                A5: The SR (Set-Reset) flip-flop has two inputs, S (Set) and R (Reset). Setting S to 1 sets the flip-flop to 1, and setting R to 1 resets the flip-flop to 0.
            </p>
            <p>
                <strong>Q6: Explain the D flip-flop.</strong>
                <br />
                A6: The D (Data) flip-flop has one input, D, and its output Q follows the input D at the rising edge of the clock signal.
            </p>
            <p>
                <strong>Q7: What is a register?</strong>
                <br />
                A7: A register is a group of flip-flops used to store multiple bits of information.
            </p>
            <p>
                <strong>Q8: What is a counter?</strong>
                <br />
                A8: A counter is a sequential circuit that increments or decrements its output based on a clock signal.
            </p>
        </div>
    );
};

export default Chapter4_SequentialCircuits;
