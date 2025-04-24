import React from 'react';

const Chapter4_IOAndDMA = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 4: I/O and DMA</h2>

            <h3 className="text-xl font-semibold">1. Introduction to I/O</h3>
            <p>
                Input/Output (I/O) operations involve communication between the computer system and the external environment via devices such as keyboard, mouse (input), and monitor, printer (output).
            </p>

            <h3 className="text-xl font-semibold">2. I/O Interface</h3>
            <p>
                The I/O interface connects the I/O devices to the system bus and manages data communication. It includes status registers, control signals, and data buffers.
            </p>

            <h3 className="text-xl font-semibold">3. Asynchronous Data Transfer</h3>
            <p>
                Data transfer between devices operating at different speeds requires handshaking or strobe-based control to ensure synchronization.
            </p>

            <h3 className="text-xl font-semibold">4. Modes of Data Transfer</h3>
            <ul className="list-disc list-inside">
                <li><strong>Programmed I/O:</strong> CPU checks device status in a loop (polling) to transfer data.</li>
                <li><strong>Interrupt-Driven I/O:</strong> Device sends interrupt signal to CPU when ready to transfer data.</li>
                <li><strong>DMA (Direct Memory Access):</strong> Device transfers data directly to/from memory without CPU.</li>
            </ul>

            <h3 className="text-xl font-semibold">5. Priority Interrupts</h3>
            <p>
                When multiple devices request interrupt, a priority mechanism decides which interrupt to service first.
            </p>

            <h3 className="text-xl font-semibold">6. Direct Memory Access (DMA)</h3>
            <p>
                DMA allows peripherals to access memory directly without CPU intervention, speeding up data transfer.
            </p>

            <h3 className="text-xl font-semibold">7. I/O Processor (IOP)</h3>
            <p>
                An IOP handles I/O tasks independently from the CPU, managing data transfers and device communication.
            </p>

            <h3 className="text-xl font-semibold">8. Serial Communication</h3>
            <p>
                Data is transmitted one bit at a time over a single channel. Common standards include RS-232 and USB.
            </p>

            <h3 className="text-xl font-semibold">Important Questions</h3>
            <ul className="list-disc list-inside">
                <li>Explain the difference between programmed I/O, interrupt-driven I/O, and DMA.</li>
                <li>What is an I/O interface and what are its main components?</li>
                <li>Describe the steps involved in Direct Memory Access (DMA).</li>
                <li>What are priority interrupts? How are they managed?</li>
                <li>Define asynchronous data transfer and explain handshaking.</li>
                <li>Compare and contrast IOP and CPU in terms of I/O management.</li>
            </ul>
        </div>
    );
};

export default Chapter4_IOAndDMA;
