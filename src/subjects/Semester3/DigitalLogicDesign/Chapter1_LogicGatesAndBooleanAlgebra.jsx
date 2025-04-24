import React from 'react';

// Chapter1_LogicGatesAndBooleanAlgebra component: Explains logic gates and Boolean algebra, including definitions, truth tables, and Boolean expressions.
const Chapter1_LogicGatesAndBooleanAlgebra = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">
        Chapter 1: Logic Gates and Boolean Algebra
      </h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="mb-4">
          Logic gates are the fundamental building blocks of digital circuits.
          Boolean algebra is the mathematical foundation for analyzing and
          designing these circuits. This chapter explores the basic logic gates,
          their behavior, and the laws of Boolean algebra.
        </p>
      </section>

      {/* Basic Logic Gates */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Basic Logic Gates</h3>

        {/* AND Gate */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">AND Gate</h4>
          <p className="mb-2">
            The AND gate outputs true (1) only if all its inputs are true (1).
            Otherwise, it outputs false (0).
          </p>
          <p className="mb-2">
            <strong>Symbol:</strong> D-shaped symbol.
          </p>
          <p className="mb-2">
            <strong>Truth Table:</strong>
          </p>
          <table className="table-auto border-collapse border border-gray-400 mb-2">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">A</th>
                <th className="border border-gray-400 px-4 py-2">B</th>
                <th className="border border-gray-400 px-4 py-2">A AND B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Boolean Expression:</strong> F = A . B</p>
        </div>

        {/* OR Gate */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">OR Gate</h4>
          <p className="mb-2">
            The OR gate outputs true (1) if at least one of its inputs is true
            (1). It outputs false (0) only if all inputs are false (0).
          </p>
          <p className="mb-2">
            <strong>Symbol:</strong> Curved shape with a pointed tip.
          </p>
          <p className="mb-2">
            <strong>Truth Table:</strong>
          </p>
          <table className="table-auto border-collapse border border-gray-400 mb-2">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">A</th>
                <th className="border border-gray-400 px-4 py-2">B</th>
                <th className="border border-gray-400 px-4 py-2">A OR B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
            </tbody>
          </table>
           <p><strong>Boolean Expression:</strong> F = A + B</p>
        </div>

        {/* NOT Gate */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">NOT Gate</h4>
          <p className="mb-2">
            The NOT gate, also known as an inverter, outputs the opposite of its
            input. If the input is true (1), it outputs false (0), and vice
            versa.
          </p>
          <p className="mb-2">
            <strong>Symbol:</strong> Triangle with a circle at the tip.
          </p>
          <p className="mb-2">
            <strong>Truth Table:</strong>
          </p>
          <table className="table-auto border-collapse border border-gray-400 mb-2">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">A</th>
                <th className="border border-gray-400 px-4 py-2">NOT A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Boolean Expression:</strong> F = A'</p>
        </div>

        {/* NAND Gate */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">NAND Gate</h4>
          <p className="mb-2">
            The NAND gate is the combination of an AND gate followed by a NOT
            gate. It outputs false (0) only if all its inputs are true (1).
            Otherwise, it outputs true (1).
          </p>
          <p className="mb-2">
            <strong>Symbol:</strong> AND gate with a circle at the tip.
          </p>
          <p className="mb-2">
            <strong>Truth Table:</strong>
          </p>
          <table className="table-auto border-collapse border border-gray-400 mb-2">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">A</th>
                <th className="border border-gray-400 px-4 py-2">B</th>
                <th className="border border-gray-400 px-4 py-2">A NAND B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Boolean Expression:</strong> F = (A . B)'</p>
        </div>

        {/* NOR Gate */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">NOR Gate</h4>
          <p className="mb-2">
            The NOR gate is the combination of an OR gate followed by a NOT
            gate. It outputs true (1) only if all its inputs are false (0).
            Otherwise, it outputs false (0).
          </p>
          <p className="mb-2">
            <strong>Symbol:</strong> OR gate with a circle at the tip.
          </p>
          <p className="mb-2">
            <strong>Truth Table:</strong>
          </p>
          <table className="table-auto border-collapse border border-gray-400 mb-2">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">A</th>
                <th className="border border-gray-400 px-4 py-2">B</th>
                <th className="border border-gray-400 px-4 py-2">A NOR B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Boolean Expression:</strong> F = (A + B)'</p>
        </div>

        {/* XOR Gate */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">XOR Gate</h4>
          <p className="mb-2">
            The XOR (Exclusive OR) gate outputs true (1) if an odd number of
            inputs are true (1). Otherwise, it outputs false (0).
          </p>
          <p className="mb-2">
            <strong>Symbol:</strong> OR gate with an additional curved line.
          </p>
          <p className="mb-2">
            <strong>Truth Table:</strong>
          </p>
          <table className="table-auto border-collapse border border-gray-400 mb-2">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">A</th>
                <th className="border border-gray-400 px-4 py-2">B</th>
                <th className="border border-gray-400 px-4 py-2">A XOR B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Boolean Expression:</strong> F = A ⊕ B</p>
        </div>

        {/* XNOR Gate */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">XNOR Gate</h4>
          <p className="mb-2">
            The XNOR (Exclusive NOR) gate is the combination of an XOR gate
            followed by a NOT gate. It outputs true (1) if an even number of
            inputs are true (1). Otherwise, it outputs false (0).
          </p>
          <p className="mb-2">
            <strong>Symbol:</strong> XOR gate with a circle at the tip.
          </p>
          <p className="mb-2">
            <strong>Truth Table:</strong>
          </p>
          <table className="table-auto border-collapse border border-gray-400 mb-2">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">A</th>
                <th className="border border-gray-400 px-4 py-2">B</th>
                <th className="border border-gray-400 px-4 py-2">A XNOR B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
                <td className="border border-gray-400 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">1</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Boolean Expression:</strong> F = (A ⊕ B)'</p>
        </div>
      </section>

      {/* Boolean Algebra */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Boolean Algebra</h3>
        <p className="mb-4">
          Boolean algebra is the mathematical system used to analyze and design
          digital circuits. It deals with binary values (0 and 1) and logic
          operations.
        </p>

        {/* Fundamental Laws */}
        <h4 className="text-lg font-semibold mb-2">Fundamental Laws</h4>
        <ul className="list-disc list-inside">
          <li>
            <strong>Commutative Law:</strong> The order of operations does not
            affect the result.
            <ul>
              <li>A + B = B + A (OR)</li>
              <li>A . B = B . A (AND)</li>
            </ul>
          </li>
          <li>
            <strong>Associative Law:</strong> The grouping of operations does not
            affect the result.
            <ul>
              <li>(A + B) + C = A + (B + C) (OR)</li>
              <li>(A . B) . C = A . (B . C) (AND)</li>
            </ul>
          </li>
          <li>
            <strong>Distributive Law:</strong> AND distributes over OR, and OR
            distributes over AND.
            <ul>
              <li>A . (B + C) = (A . B) + (A . C)</li>
              <li>A + (B . C) = (A + B) . (A + C)</li>
            </ul>
          </li>
          <li>
            <strong>Identity Law:</strong>
            <ul>
              <li>A + 0 = A (OR)</li>
              <li>A . 1 = A (AND)</li>
            </ul>
          </li>
          <li>
            <strong>Complement Law:</strong>
            <ul>
              <li>A + A' = 1 (OR)</li>
              <li>A . A' = 0 (AND)</li>
            </ul>
          </li>
          <li>
            <strong>Idempotent Law:</strong>
            <ul>
              <li>A + A = A (OR)</li>
              <li>A . A = A (AND)</li>
            </ul>
          </li>
          <li>
            <strong>Null Law:</strong>
            <ul>
              <li>A + 1 = 1 (OR)</li>
              <li>A . 0 = 0 (AND)</li>
            </ul>
          </li>
          <li>
            <strong>Involution Law:</strong>
            <ul>
              <li>(A')' = A</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Chapter1_LogicGatesAndBooleanAlgebra;