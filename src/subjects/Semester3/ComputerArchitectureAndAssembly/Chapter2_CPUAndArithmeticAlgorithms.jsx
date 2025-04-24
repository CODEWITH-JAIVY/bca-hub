import React from 'react';

const Chapter2_CPUAndArithmeticAlgorithms = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 2: CPU and Arithmetic Algorithms</h2>

            <h3 className="text-xl font-semibold">1. General Register Organization</h3>
            <p>
                This refers to the internal organization of the CPU using a set of registers. All operations such as arithmetic and logic take place in these registers. The CPU uses a common bus for transferring data between registers.
            </p>

            <h3 className="text-xl font-semibold">2. Stack Organization</h3>
            <p>
                A stack is a last-in-first-out (LIFO) structure used for expression evaluation and subroutine calls. Instructions like PUSH and POP are used for stack operations.
            </p>

            <h3 className="text-xl font-semibold">3. Instruction Formats</h3>
            <p>
                Instructions can be of various formats:
            </p>
            <ul className="list-disc list-inside">
                <li><strong>Zero Address:</strong> Used in stack architecture.</li>
                <li><strong>One Address:</strong> Involves one operand in memory.</li>
                <li><strong>Two Address:</strong> Uses two memory locations or one register and one memory.</li>
                <li><strong>Three Address:</strong> Uses three operands, offering flexibility.</li>
            </ul>

            <h3 className="text-xl font-semibold">4. Addressing Modes</h3>
            <p>
                These define how operands are accessed:
            </p>
            <ul className="list-disc list-inside">
                <li><strong>Immediate:</strong> Operand is directly specified.</li>
                <li><strong>Direct:</strong> Address of operand is given.</li>
                <li><strong>Indirect:</strong> Address of address is given.</li>
                <li><strong>Indexed:</strong> Base address plus offset.</li>
            </ul>

            <h3 className="text-xl font-semibold">5. Data Transfer and Manipulation</h3>
            <p>
                Instructions include move, load, store, exchange, clear, and set. These manage data between CPU and memory or registers.
            </p>

            <h3 className="text-xl font-semibold">6. Program Control</h3>
            <p>
                Instructions include branch, jump, call, return, and interrupt handling. These alter the flow of execution.
            </p>

            <h3 className="text-xl font-semibold">7. Reduced Instruction Set Computer (RISC) vs Complex Instruction Set Computer (CISC)</h3>
            <p>
                <strong>RISC:</strong> Emphasizes efficiency with simple, fixed-length instructions. <br />
                <strong>CISC:</strong> Includes multi-step operations as single instructions.
            </p>

            <h3 className="text-xl font-semibold">8. Pipeline, Vector, and Array Processing</h3>
            <p>
                <strong>Pipeline:</strong> Breaks instruction execution into stages to improve throughput. <br />
                <strong>Vector Processing:</strong> Handles data arrays with single instructions. <br />
                <strong>Array Processing:</strong> Uses multiple processors for parallel computation.
            </p>

            <h3 className="text-xl font-semibold">9. Arithmetic Algorithms</h3>

            <h4 className="text-lg font-medium">a. Integer Multiplication (Shift and Add)</h4>
            <p>
                Multiplication is done by shifting and adding partial results. For each 1 in the multiplier, shift the multiplicand accordingly and add.
            </p>

            <h4 className="text-lg font-medium">b. Booth’s Algorithm</h4>
            <p>
                An efficient algorithm for multiplying signed binary numbers. It uses two's complement and encodes multiple 1s in the multiplier.
            </p>

            <h4 className="text-lg font-medium">c. Integer Division</h4>
            <p>
                Division uses repeated subtraction and shifting. The quotient and remainder are stored in separate registers.
            </p>

            <h4 className="text-lg font-medium">d. Floating Point Representation</h4>
            <p>
                Numbers are stored as sign, exponent, and mantissa. This allows representation of very large or very small numbers with precision.
            </p>

        </div>
    );
};
 export default Chapter2_CPUAndArithmeticAlgorithms; 