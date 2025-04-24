import React from 'react';

// Chapter3_SequentialCircuits component: Detailed explanation of sequential circuits with types, operations, and applications.
const Chapter3_SequentialCircuits = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">
        Chapter 3: Sequential Circuits
      </h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="mb-4">
          Sequential circuits are logic circuits whose output depends not only on the current input but also on the history of inputs (past states). They use memory elements like flip-flops to store state information.
        </p>
      </section>

      {/* Flip-Flops */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Flip-Flops</h3>
        <p className="mb-4">
          Flip-flops are bistable devices, which means they have two stable states (0 and 1). They are the basic building blocks for sequential circuits.
        </p>

        {/* RS Flip-Flop */}
        <h4 className="text-lg font-semibold mt-4">1. RS (Reset-Set) Flip-Flop</h4>
        <p className="mb-2">Inputs: S (Set), R (Reset)</p>
        <p><strong>Truth Table:</strong></p>
        <table className="table-auto border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border p-2">S</th>
              <th className="border p-2">R</th>
              <th className="border p-2">Q (Next)</th>
              <th className="border p-2">Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">Q</td><td className="border p-2">No change</td></tr>
            <tr><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">Reset</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">Set</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">1</td><td className="border p-2">Invalid</td><td className="border p-2">Indeterminate</td></tr>
          </tbody>
        </table>

        {/* D Flip-Flop */}
        <h4 className="text-lg font-semibold mt-4">2. D (Data/Delay) Flip-Flop</h4>
        <p className="mb-2">Single Input: D</p>
        <p><strong>Q<sub>next</sub> = D</strong></p>
        <p><strong>Use:</strong> Data storage and transfer</p>

        {/* JK Flip-Flop */}
        <h4 className="text-lg font-semibold mt-4">3. JK Flip-Flop</h4>
        <p className="mb-2">Inputs: J (Set), K (Reset)</p>
        <p><strong>Truth Table:</strong></p>
        <table className="table-auto border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border p-2">J</th>
              <th className="border p-2">K</th>
              <th className="border p-2">Q<sub>next</sub></th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">Q</td><td className="border p-2">No change</td></tr>
            <tr><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">Reset</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">Set</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">1</td><td className="border p-2">~Q</td><td className="border p-2">Toggle</td></tr>
          </tbody>
        </table>

        {/* T Flip-Flop */}
        <h4 className="text-lg font-semibold mt-4">4. T (Toggle) Flip-Flop</h4>
        <p className="mb-2">Single Input: T</p>
        <p><strong>Q<sub>next</sub> = T'Q + TQ'</strong></p>
        <p>If T = 1, toggles the state; if T = 0, retains state</p>

        {/* Master-Slave Flip-Flop */}
        <h4 className="text-lg font-semibold mt-4">5. Master-Slave Flip-Flop</h4>
        <p className="mb-2">
          Combines two flip-flops in series (Master and Slave) controlled by opposite clock phases to avoid race conditions.
        </p>
      </section>

      {/* Registers */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Registers</h3>
        <p className="mb-4">
          A register is a group of flip-flops used to store multiple bits of data. Each flip-flop stores one bit. Registers are used in ALUs, memory buffers, and control units.
        </p>
        <p><strong>Example:</strong> 4-bit register stores a 4-bit binary number.</p>
      </section>

      {/* Shift Registers */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Shift Registers</h3>
        <p className="mb-4">
          Shift registers can shift data left or right and are used for data storage, transfer, and manipulation.
        </p>
        <p><strong>Types:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>SISO – Serial In Serial Out</li>
          <li>SIPO – Serial In Parallel Out</li>
          <li>PISO – Parallel In Serial Out</li>
          <li>PIPO – Parallel In Parallel Out</li>
        </ul>
      </section>

      {/* Counters */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Counters</h3>
        <p className="mb-4">
          A counter is a sequential circuit that goes through a predefined sequence of states. It can count up, down, or in both directions.
        </p>
        <p><strong>Types:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Asynchronous (Ripple) Counter</li>
          <li>Synchronous Counter</li>
          <li>Up/Down Counter</li>
          <li>Ring Counter</li>
          <li>Johnson Counter</li>
        </ul>
      </section>

      {/* Synchronous vs Asynchronous Design */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Synchronous vs Asynchronous Design</h3>
        <p><strong>Synchronous Circuits:</strong></p>
        <ul className="list-disc list-inside mb-2">
          <li>All flip-flops are triggered by the same clock signal.</li>
          <li>Predictable behavior and easier to debug.</li>
          <li>Used in CPUs, memory, and digital systems.</li>
        </ul>

        <p><strong>Asynchronous Circuits:</strong></p>
        <ul className="list-disc list-inside mb-2">
          <li>Flip-flops are triggered independently.</li>
          <li>Faster in some cases but more complex to design.</li>
          <li>Used in specialized control circuits or when speed is critical.</li>
        </ul>
      </section>
    </div>
  );
};

export default Chapter3_SequentialCircuits;
