import React from 'react';

const Chapter2_CombinationalCircuits = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">
        Chapter 2: Combinational Circuits
      </h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="mb-4">
          Combinational circuits are logic circuits whose outputs depend solely on the current combination of inputs. Unlike sequential circuits, they do not use memory or feedback loops. Common building blocks include multiplexers (MUX), demultiplexers (DEMUX), encoders, decoders, adders, and subtractors.
        </p>
      </section>

      {/* Multiplexer */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Multiplexer (MUX)</h3>
        <p className="mb-4">
          A multiplexer is a device that selects one of many input lines and forwards it to a single output line. It uses selection lines to choose which input to send to output.
        </p>
        <p><strong>Boolean Expression for 2:1 MUX:</strong></p>
        <pre><code>Y = A'.I0 + A.I1</code></pre>
        <p><strong>Truth Table for 2:1 MUX:</strong></p>
        <table className="table-auto border-collapse border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border p-2">A (Select)</th>
              <th className="border p-2">I0</th>
              <th className="border p-2">I1</th>
              <th className="border p-2">Y (Output)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">0</td><td className="border p-2">X</td><td className="border p-2">X</td><td className="border p-2">I0</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">X</td><td className="border p-2">X</td><td className="border p-2">I1</td></tr>
          </tbody>
        </table>
      </section>

      {/* Decoder */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Decoder</h3>
        <p className="mb-4">
          A decoder converts binary input data into a unique output line. For example, a 2-to-4 decoder takes 2 inputs and activates one of 4 outputs.
        </p>
        <p><strong>Truth Table for 2-to-4 Decoder:</strong></p>
        <table className="table-auto border-collapse border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border p-2">A</th>
              <th className="border p-2">B</th>
              <th className="border p-2">O0</th>
              <th className="border p-2">O1</th>
              <th className="border p-2">O2</th>
              <th className="border p-2">O3</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td></tr>
            <tr><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">0</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">1</td></tr>
          </tbody>
        </table>
      </section>

      {/* Encoder */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Encoder</h3>
        <p className="mb-4">
          An encoder does the reverse of a decoder. It takes 2ⁿ input lines and produces n outputs. A simple example is a 4-to-2 encoder.
        </p>
        <p><strong>Truth Table for 4-to-2 Encoder:</strong></p>
        <table className="table-auto border-collapse border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border p-2">D0</th>
              <th className="border p-2">D1</th>
              <th className="border p-2">D2</th>
              <th className="border p-2">D3</th>
              <th className="border p-2">A</th>
              <th className="border p-2">B</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">1</td><td className="border p-2">1</td></tr>
            <tr><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td></tr>
            <tr><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">1</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td></tr>
          </tbody>
        </table>
      </section>

      {/* Half Adder */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Half Adder</h3>
        <p className="mb-4">
          A half adder adds two single-bit binary numbers and provides a sum and carry.
        </p>
        <p><strong>Boolean Expressions:</strong></p>
        <p>Sum = A ⊕ B</p>
        <p>Carry = A · B</p>
        <p><strong>Truth Table:</strong></p>
        <table className="table-auto border-collapse border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border p-2">A</th>
              <th className="border p-2">B</th>
              <th className="border p-2">Sum</th>
              <th className="border p-2">Carry</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td></tr>
            <tr><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">1</td><td className="border p-2">0</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">0</td></tr>
            <tr><td className="border p-2">1</td><td className="border p-2">1</td><td className="border p-2">0</td><td className="border p-2">1</td></tr>
          </tbody>
        </table>
      </section>

      {/* Full Adder */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Full Adder</h3>
        <p className="mb-4">
          A full adder adds three bits: A, B, and carry-in. It provides a sum and a carry-out.
        </p>
        <p><strong>Boolean Expressions:</strong></p>
        <p>Sum = A ⊕ B ⊕ Cin</p>
        <p>Carry = AB + BCin + ACin</p>
      </section>

      {/* Subtractor */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Subtractor</h3>
        <p className="mb-4">
          A subtractor performs binary subtraction. There are two types: half subtractor and full subtractor.
        </p>
        <p><strong>Half Subtractor:</strong></p>
        <p>Diff = A ⊕ B</p>
        <p>Borrow = A'B</p>
        <p><strong>Full Subtractor:</strong></p>
        <p>Diff = A ⊕ B ⊕ Bin</p>
        <p>Borrow = A'B + A'(Bin) + B(Bin)</p>
      </section>
    </div>
  );
};

export default Chapter2_CombinationalCircuits;
