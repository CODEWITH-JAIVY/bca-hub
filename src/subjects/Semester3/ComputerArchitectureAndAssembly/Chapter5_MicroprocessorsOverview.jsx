import React from 'react';

const Chapter5_MicroprocessorsOverview = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 5: Microprocessors Overview</h2>

            <h3 className="text-xl font-semibold">1. What is a Microprocessor?</h3>
            <p>
                A microprocessor is an integrated circuit that contains the functions of a CPU. It performs all arithmetic, logical, control, and input/output (I/O) operations specified by instructions.
            </p>

            <h3 className="text-xl font-semibold">2. Key Components of a Microprocessor</h3>
            <ul className="list-disc list-inside">
                <li>Arithmetic Logic Unit (ALU): Performs mathematical and logical operations</li>
                <li>Control Unit: Directs the operation of the processor</li>
                <li>Registers: Temporary storage for instructions and data</li>
                <li>Cache Memory: Speeds up access to frequently used data</li>
                <li>System Bus Interface: Interfaces with memory and I/O devices</li>
            </ul>

            <h3 className="text-xl font-semibold">3. Microprocessor Architectures</h3>
            <p>
                <strong>Internal Architecture:</strong> Includes ALU, control unit, and registers internally connected.
                <br />
                <strong>External Architecture:</strong> Refers to how the microprocessor connects to memory and I/O devices via buses.
            </p>

            <h3 className="text-xl font-semibold">4. Memory and I/O Interface</h3>
            <p>
                The microprocessor communicates with memory and peripheral devices through buses:
                <ul className="list-disc list-inside">
                    <li><strong>Address Bus:</strong> Carries the address to access data</li>
                    <li><strong>Data Bus:</strong> Carries the data</li>
                    <li><strong>Control Bus:</strong> Carries control signals</li>
                </ul>
            </p>

            <h3 className="text-xl font-semibold">5. Evolution of Microprocessors</h3>
            <ul className="list-disc list-inside">
                <li><strong>Intel 8085:</strong> 8-bit microprocessor, 74 instructions, 16-bit address bus</li>
                <li><strong>Intel 8086:</strong> 16-bit processor, capable of addressing 1 MB memory</li>
                <li><strong>Intel 80286:</strong> Introduced protected mode, multitasking</li>
                <li><strong>Intel 80386/80486:</strong> Introduced 32-bit architecture</li>
                <li><strong>Intel Pentium:</strong> Superscalar architecture, improved parallelism</li>
            </ul>

            <h3 className="text-xl font-semibold">6. CISC vs. RISC</h3>
            <p>
                <strong>CISC (Complex Instruction Set Computing):</strong> Large set of instructions, complex operations in one instruction.
                <br />
                <strong>RISC (Reduced Instruction Set Computing):</strong> Simple and few instructions, each instruction completes in one cycle.
            </p>

            <h3 className="text-xl font-semibold mt-6">Important Questions:</h3>
            <ul className="list-decimal list-inside">
                <li>Define microprocessor and explain its functions.</li>
                <li>Draw and explain the internal architecture of 8085 microprocessor.</li>
                <li>Compare internal vs. external architecture of microprocessors.</li>
                <li>Explain the interface of a microprocessor with memory and I/O devices.</li>
                <li>Discuss the evolution from 8085 to Intel Pentium.</li>
                <li>Differentiate between RISC and CISC architectures.</li>
                <li>Explain the role of the ALU and control unit in a microprocessor.</li>
            </ul>
        </div>
    );
};

export default Chapter5_MicroprocessorsOverview;