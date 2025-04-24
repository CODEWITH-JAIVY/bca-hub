import React from 'react';

const Chapter1_LogicGatesAndBooleanAlgebra = () => {
    return (
        <div>
            <h2>Chapter 1: Logic Gates and Boolean Algebra</h2>
            <p>
                <strong>Q1: What is a logic gate?</strong>
                <br />
                A1: A logic gate is an elementary building block of a digital circuit, with one or more inputs and one output, which performs a logical operation based on its inputs.
            </p>
            <p>
                <strong>Q2: What are the basic logic gates?</strong>
                <br />
                A2: The basic logic gates are AND, OR, NOT, NAND, NOR, XOR, and XNOR.
            </p>
            <p>
                <strong>Q3: Explain the AND gate.</strong>
                <br />
                A3: The AND gate outputs true (1) only if all its inputs are true (1).
            </p>
            <p>
                <strong>Q4: Explain the OR gate.</strong>
                <br />
                A4: The OR gate outputs true (1) if at least one of its inputs is true (1).
            </p>
            <p>
                <strong>Q5: Explain the NOT gate.</strong>
                <br />
                A5: The NOT gate (also known as an inverter) outputs the inverse of its input. If the input is true (1), the output is false (0), and vice versa.
            </p>
            <p>
                <strong>Q6: Explain the NAND gate.</strong>
                <br />
                A6: The NAND gate is the complement of the AND gate. It outputs false (0) only if all its inputs are true (1).
            </p>
            <p>
                <strong>Q7: What is Boolean algebra?</strong>
                <br />
                A7: Boolean algebra is a branch of algebra in which the values of the variables are the truth values true and false, usually denoted 1 and 0, respectively.
            </p>
            <p>
                <strong>Q8: What are the basic laws of Boolean algebra?</strong>
                <br />
                A8: Basic laws include the commutative law, associative law, distributive law, identity law, complement law, and idempotent law.
            </p>
        </div>
    );
};

export default Chapter1_LogicGatesAndBooleanAlgebra;
