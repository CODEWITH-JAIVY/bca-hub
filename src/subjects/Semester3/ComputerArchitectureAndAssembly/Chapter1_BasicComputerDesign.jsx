import React from 'react';

const Chapter1_BasicComputerDesign = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 1: Basic Computer Design</h2>

            <h3 className="text-xl font-semibold">1. Basic Computer Organization and Design</h3>
            <p>
                Computer organization refers to the operational structure and components of a computer system, including the CPU, memory, and I/O devices. Design focuses on how these components are interconnected and controlled.
            </p>

            <h3 className="text-xl font-semibold">2. Instructions and Instruction Codes</h3>
            <p>
                Instructions are binary-coded operations that the CPU executes. Each instruction has an opcode (operation code) and sometimes operands. Instruction codes define the format and interpretation of machine instructions.
            </p>

            <h3 className="text-xl font-semibold">3. Timing and Control / Instruction Cycle</h3>
            <p>
                The instruction cycle is the sequence of steps the CPU follows to fetch, decode, and execute an instruction. Timing and control units manage this sequence, ensuring proper synchronization.
            </p>
            <ul className="list-disc list-inside">
                <li>Fetch</li>
                <li>Decode</li>
                <li>Execute</li>
                <li>Store (if needed)</li>
            </ul>

            <h3 className="text-xl font-semibold">4. Registers</h3>
            <p>
                Registers are small, fast storage locations within the CPU used to hold data temporarily.
            </p>
            <ul className="list-disc list-inside">
                <li><strong>General Purpose Registers:</strong> Used for various operations (e.g., AX, BX in x86).</li>
                <li><strong>Special Purpose Registers:</strong> Include Program Counter (PC), Instruction Register (IR), etc.</li>
                <li><strong>Index Registers:</strong> Used for indexing memory addresses during loops or array access.</li>
            </ul>

            <h3 className="text-xl font-semibold">5. Register Transfer and Micro-operations</h3>
            <p>
                Register transfer is the process of moving data between registers. Micro-operations are low-level operations carried out on the data stored in registers, such as transfer, increment, or clear.
            </p>

            <h3 className="text-xl font-semibold">6. Memory and Its Functions</h3>
            <p>
                Memory stores both instructions and data. It includes:
            </p>
            <ul className="list-disc list-inside">
                <li><strong>RAM (Random Access Memory):</strong> Volatile, temporary storage used during operation.</li>
                <li><strong>ROM (Read-Only Memory):</strong> Non-volatile, stores firmware and boot instructions.</li>
            </ul>

            <h3 className="text-xl font-semibold">7. Bus and Data Transfer Instructions</h3>
            <p>
                A system bus is a communication system that transfers data between components. It includes:
            </p>
            <ul className="list-disc list-inside">
                <li><strong>Data Bus:</strong> Carries data.</li>
                <li><strong>Address Bus:</strong> Carries memory addresses.</li>
                <li><strong>Control Bus:</strong> Carries control signals.</li>
            </ul>

            <h3 className="text-xl font-semibold">8. Arithmetic Logic Micro-operations / Shift Micro-operations</h3>
            <p>
                These are the basic operations performed by the Arithmetic Logic Unit (ALU):
            </p>
            <ul className="list-disc list-inside">
                <li><strong>Arithmetic:</strong> Add, subtract, increment, decrement.</li>
                <li><strong>Logic:</strong> AND, OR, XOR, NOT.</li>
                <li><strong>Shift:</strong> Left shift, right shift (used in multiplication/division).</li>
            </ul>

            <h3 className="text-xl font-semibold">9. Input / Output</h3>
            <p>
                I/O devices allow communication between the user and computer. Input devices (keyboard, mouse) take user input. Output devices (monitor, printer) display results. I/O operations are handled through I/O ports and controllers.
            </p>
        </div>
    );
};

export default Chapter1_BasicComputerDesign;
 