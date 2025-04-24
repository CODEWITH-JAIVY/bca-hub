import React from 'react';

const Chapter3_ComputerArithmetic = () => {
    return (
        <div>
            <h2>Chapter 3: Computer Arithmetic</h2>
            <p>
                <strong>Q1: What is binary arithmetic?</strong>
                <br />
                A1: Binary arithmetic is the performance of basic arithmetic operations (addition, subtraction, multiplication, and division) using the binary number system.
            </p>
            <p>
                <strong>Q2: How is addition performed in binary arithmetic?</strong>
                <br />
                A2: Binary addition is similar to decimal addition but uses base 2. The rules include 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, and 1 + 1 = 10 (0 with a carry of 1).
            </p>
            <p>
                <strong>Q3: How is subtraction performed in binary arithmetic?</strong>
                <br />
                A3: Binary subtraction can be performed directly or using 2's complement. In direct subtraction, you may need to borrow from higher bits.
            </p>
            <p>
                <strong>Q4: What is 2's complement?</strong>
                <br />
                A4: 2's complement is a method of representing signed integers in binary form, where the 2's complement of a number is obtained by inverting all the bits and adding 1.
            </p>
            <p>
                <strong>Q5: How is multiplication performed in binary arithmetic?</strong>
                <br />
                A5: Binary multiplication is similar to decimal multiplication, but uses binary digits. It involves multiplying the multiplicand by each digit of the multiplier and then adding the results.
            </p>
        </div>
    );
};

export default Chapter3_ComputerArithmetic;
