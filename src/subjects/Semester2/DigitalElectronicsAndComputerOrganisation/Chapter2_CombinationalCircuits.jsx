import React from 'react';

const Chapter2_CombinationalCircuits = () => {
    return (
        <div>
            <h2>Chapter 2: Combinational Circuits</h2>
            <p>
                <strong>Q1: What is a combinational circuit?</strong>
                <br />
                A1: A combinational circuit is a digital circuit whose output depends only on the current values of its inputs at any given time.
            </p>
            <p>
                <strong>Q2: What are some common combinational circuits?</strong>
                <br />
                A2: Common circuits include adders, subtractors, multiplexers, demultiplexers, encoders, and decoders.
            </p>
            <p>
                <strong>Q3: Explain the function of an adder circuit.</strong>
                <br />
                A3: An adder circuit performs the addition of two or more binary numbers.
            </p>
            <p>
                <strong>Q4: Explain the function of a multiplexer (MUX).</strong>
                <br />
                A4: A multiplexer selects one of several input signals and forwards it to a single output line, based on the values of select lines.
            </p>
            <p>
                <strong>Q5: Explain the function of a decoder.</strong>
                <br />
                A5: A decoder converts a binary code into a unique output signal, activating one of its output lines based on the binary input.
            </p>
            <p>
                <strong>Q6: How do you design a combinational circuit?</strong>
                <br />
                A6: Design involves defining the problem, creating a truth table, deriving Boolean expressions, simplifying the expressions, and implementing the circuit using logic gates.
            </p>
        </div>
    );
};

export default Chapter2_CombinationalCircuits;
