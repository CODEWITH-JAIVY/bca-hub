import React from 'react';

const Chapter3_ComputerArithmetic = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 3: Computer Arithmetic</h2>

            <h3 className="text-xl font-semibold">1. Binary Arithmetic</h3>
            <p>
                Binary arithmetic involves performing arithmetic operations like addition, subtraction, multiplication, and division using the binary number system (base-2).
            </p>

            <h3 className="text-xl font-semibold">2. Binary Addition</h3>
            <p>
                Binary addition uses the following rules:
            </p>
            <ul className="list-disc list-inside">
                <li>0 + 0 = 0</li>
                <li>0 + 1 = 1</li>
                <li>1 + 0 = 1</li>
                <li>1 + 1 = 10 (carry 1)</li>
            </ul>

            <h3 className="text-xl font-semibold">3. Binary Subtraction</h3>
            <p>
                Subtraction is either done directly using borrow method or by using 2's complement. In 2's complement, the negative number is represented by inverting the bits and adding 1.
            </p>

            <h3 className="text-xl font-semibold">4. Binary Multiplication</h3>
            <p>
                Similar to decimal multiplication but involves only 0 and 1. The partial products are added using binary addition rules.
            </p>

            <h3 className="text-xl font-semibold">5. Binary Division</h3>
            <p>
                This involves repeated subtraction (restoring or non-restoring division method). The quotient and remainder are calculated using shift and subtract operations.
            </p>

            <h3 className="text-xl font-semibold">6. Floating Point Arithmetic</h3>
            <p>
                Numbers are represented using three fields: sign, exponent, and mantissa. Operations like addition, subtraction, multiplication, and division are performed by aligning exponents and manipulating mantissas.
            </p>

            <h3 className="text-xl font-semibold">7. Decimal Arithmetic Operations</h3>
            <p>
                Decimal operations are performed on numbers in BCD (Binary-Coded Decimal) format. Special handling is required for carry/borrow in addition/subtraction.
            </p>

            <h3 className="text-xl font-semibold">8. Example: 2's Complement</h3>
            <p>
                To subtract 7 (0111) from 10 (1010):
                <br />
                - Find 2's complement of 7: 0111 → 1000 + 1 = 1001
                <br />
                - Add it to 10: 1010 + 1001 = 0011 (discard overflow)
                <br />
                Result is 3
            </p>
        </div>
    );
};

export default Chapter3_ComputerArithmetic;
 