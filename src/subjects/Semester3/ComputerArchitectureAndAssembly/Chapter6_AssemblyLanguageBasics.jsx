import React from 'react';

const Chapter6_AssemblyLanguageBasics = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 6: Assembly Language Basics</h2>

            <h3 className="text-xl font-semibold">1. What is Assembly Language?</h3>
            <p>
                Assembly language is a low-level programming language that uses mnemonic codes and labels to represent machine-level code. It's specific to a computer architecture and provides direct control over hardware.
            </p>

            <h3 className="text-xl font-semibold">2. Assembler</h3>
            <p>
                An assembler is a tool that converts assembly language code into machine code. It handles translating mnemonics into binary instructions and manages memory allocation.
            </p>

            <h3 className="text-xl font-semibold">3. Assembly Instructions</h3>
            <p>
                These are commands given to the processor, including:
            </p>
            <ul className="list-disc list-inside">
                <li>Data transfer (MOV, IN, OUT)</li>
                <li>Arithmetic (ADD, SUB, MUL, DIV)</li>
                <li>Logical (AND, OR, NOT, XOR)</li>
                <li>Control flow (JMP, CALL, RET)</li>
            </ul>

            <h3 className="text-xl font-semibold">4. Directives</h3>
            <p>
                Directives are not instructions but tell the assembler how to process the program. Examples:
            </p>
            <ul className="list-disc list-inside">
                <li>ORG - Set start address</li>
                <li>DB, DW - Define bytes or words</li>
                <li>END - Marks end of program</li>
            </ul>

            <h3 className="text-xl font-semibold">5. Labels</h3>
            <p>
                Labels identify memory locations or instructions for branching (e.g., loops or function calls).
            </p>

            <h3 className="text-xl font-semibold">6. Macros</h3>
            <p>
                Macros are reusable code blocks defined once and expanded at compile time to avoid redundancy.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
{`MACRO ADD_NUM
    MOV A, B
    ADD C
ENDM`}
            </pre>

            <h3 className="text-xl font-semibold">7. Program Loops</h3>
            <p>
                Loops are created using jump instructions and labels:
            </p>
            <pre className="bg-gray-100 p-2 rounded">
{`START: DEC CX
       JNZ START`}
            </pre>

            <h3 className="text-xl font-semibold">8. Arithmetic and Logic Subroutines</h3>
            <p>
                Subroutines are modular code blocks used for complex tasks like arithmetic operations and logical evaluations.
            </p>

            <h3 className="text-xl font-semibold">9. Input-Output Programming</h3>
            <p>
                I/O instructions like IN and OUT are used to transfer data between the CPU and I/O ports.
            </p>

            <h3 className="text-xl font-semibold mt-6">Important Questions:</h3>
            <ul className="list-decimal list-inside">
                <li>Define assembly language and its uses.</li>
                <li>Differentiate between assembler and compiler.</li>
                <li>Explain assembly language instructions with examples.</li>
                <li>What are directives and why are they used?</li>
                <li>Write an example of a loop in assembly language.</li>
                <li>What is a macro? How is it different from a subroutine?</li>
                <li>Explain I/O programming in assembly language.</li>
            </ul>
        </div>
    );
};

export default Chapter6_AssemblyLanguageBasics; 