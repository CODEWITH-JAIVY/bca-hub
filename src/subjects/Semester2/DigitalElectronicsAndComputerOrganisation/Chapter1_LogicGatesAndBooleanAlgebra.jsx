import React from 'react';

// Chapter1_LogicGatesAndBooleanAlgebra component: Comprehensive explanation of logic gates, Boolean algebra, and circuit designing techniques.
const Chapter1_LogicGatesAndBooleanAlgebra = () => {
    return (
        <div className="p-4">
            {/* Chapter Title */}
            <h2 className="text-3xl font-bold mb-6">Chapter 1: Logic Gates and Boolean Algebra</h2>

            {/* Introduction */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                <p className="mb-4">
                    This chapter introduces the fundamental concepts of logic gates and Boolean algebra, which are the building blocks of digital circuits. Understanding these concepts is crucial for designing and analyzing digital systems.
                </p>
            </section>

            {/* Logic Gates */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Logic Gates</h3>
                <p className="mb-4">
                    Logic gates are electronic devices that perform logical operations on one or more binary inputs to produce a single binary output. Here are the primary logic gates:
                </p>
                {/* OR Gate */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">OR Gate</h4>
                    <p className="mb-2">
                        The OR gate outputs true (1) if at least one of its inputs is true (1).
                    </p>
                    <p className="mb-2"><b>Truth Table:</b></p>
                    <pre><code className="language-plaintext">
                        A | B | Output
                        --|---|--------
                        0 | 0 |   0
                        0 | 1 |   1
                        1 | 0 |   1
                        1 | 1 |   1
                    </code></pre>
                    <p className="mb-2"><b>Boolean Expression:</b> Output = A + B</p>
                </div>
                {/* AND Gate */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">AND Gate</h4>
                    <p className="mb-2">
                        The AND gate outputs true (1) only if all its inputs are true (1).
                    </p>
                    <p className="mb-2"><b>Truth Table:</b></p>
                    <pre><code className="language-plaintext">
                        A | B | Output
                        --|---|--------
                        0 | 0 |   0
                        0 | 1 |   0
                        1 | 0 |   0
                        1 | 1 |   1
                    </code></pre>
                    <p className="mb-2"><b>Boolean Expression:</b> Output = A • B</p>
                </div>
                {/* NOR Gate */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">NOR Gate</h4>
                    <p className="mb-2">
                        The NOR gate is the complement of the OR gate. It outputs true (1) only if all its inputs are false (0).
                    </p>
                    <p className="mb-2"><b>Truth Table:</b></p>
                    <pre><code className="language-plaintext">
                        A | B | Output
                        --|---|--------
                        0 | 0 |   1
                        0 | 1 |   0
                        1 | 0 |   0
                        1 | 1 |   0
                    </code></pre>
                    <p className="mb-2"><b>Boolean Expression:</b> Output = (A + B)'</p>
                </div>
                {/* NAND Gate */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">NAND Gate</h4>
                    <p className="mb-2">
                        The NAND gate is the complement of the AND gate. It outputs false (0) only if all its inputs are true (1).
                    </p>
                    <p className="mb-2"><b>Truth Table:</b></p>
                    <pre><code className="language-plaintext">
                        A | B | Output
                        --|---|--------
                        0 | 0 |   1
                        0 | 1 |   1
                        1 | 0 |   1
                        1 | 1 |   0
                    </code></pre>
                    <p className="mb-2"><b>Boolean Expression:</b> Output = (A • B)'</p>
                </div>
                {/* XOR Gate */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">XOR Gate</h4>
                    <p className="mb-2">
                        The XOR gate (exclusive OR) outputs true (1) if an odd number of its inputs are true (1). For two inputs, it outputs true if the inputs are different.
                    </p>
                    <p className="mb-2"><b>Truth Table:</b></p>
                    <pre><code className="language-plaintext">
                        A | B | Output
                        --|---|--------
                        0 | 0 |   0
                        0 | 1 |   1
                        1 | 0 |   1
                        1 | 1 |   0
                    </code></pre>
                    <p className="mb-2"><b>Boolean Expression:</b> Output = A ⊕ B</p>
                </div>
                {/* XNOR Gate */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">XNOR Gate</h4>
                    <p className="mb-2">
                        The XNOR gate (exclusive NOR) is the complement of the XOR gate. It outputs true (1) if an even number of its inputs are true (1). For two inputs, it outputs true if the inputs are the same.
                    </p>
                    <p className="mb-2"><b>Truth Table:</b></p>
                    <pre><code className="language-plaintext">
                        A | B | Output
                        --|---|--------
                        0 | 0 |   1
                        0 | 1 |   0
                        1 | 0 |   0
                        1 | 1 |   1
                    </code></pre>
                    <p className="mb-2"><b>Boolean Expression:</b> Output = (A ⊕ B)'</p>
                </div>
            </section>

            {/* De Morgan's Laws */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">De Morgan's Laws</h3>
                <p className="mb-4">
                    De Morgan's laws provide a way to simplify logical expressions by showing the equivalence between AND/OR operations and their complements.
                </p>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">First Law</h4>
                    <p className="mb-2">
                        The complement of a conjunction (AND) is the disjunction (OR) of the complements.
                    </p>
                    <p className="mb-2"><b>Boolean Expression:</b> (A • B)' = A' + B'</p>
                    <p className="mb-2"><b>Example:</b> If (A • B)' is true, then either A' or B' (or both) must be true.</p>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Second Law</h4>
                    <p className="mb-2">
                        The complement of a disjunction (OR) is the conjunction (AND) of the complements.
                    </p>
                    <p className="mb-2"><b>Boolean Expression:</b> (A + B)' = A' • B'</p>
                    <p className="mb-2"><b>Example:</b> If (A + B)' is true, then both A' and B' must be true.</p>
                </div>
            </section>

            {/* Boolean Laws */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Boolean Laws</h3>
                <p className="mb-4">
                    Boolean laws are fundamental rules used to simplify and manipulate Boolean expressions.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <b>Commutative Law:</b> The order of the variables in an operation does not matter.
                        <ul className="list-disc list-inside mb-4">
                            <li><b>OR:</b> A + B = B + A</li>
                            <li><b>AND:</b> A • B = B • A</li>
                        </ul>
                    </li>
                    <li>
                        <b>Associative Law:</b> The grouping of variables in a sequence of operations does not matter.
                        <ul className="list-disc list-inside mb-4">
                            <li><b>OR:</b> (A + B) + C = A + (B + C)</li>
                            <li><b>AND:</b> (A • B) • C = A • (B • C)</li>
                        </ul>
                    </li>
                    <li>
                        <b>Distributive Law:</b> AND operation distributes over OR, and vice versa.
                        <ul className="list-disc list-inside mb-4">
                            <li><b>AND over OR:</b> A • (B + C) = (A • B) + (A • C)</li>
                            <li><b>OR over AND:</b> A + (B • C) = (A + B) • (A + C)</li>
                        </ul>
                    </li>
                    <li>
                        <b>Identity Law:</b>
                        <ul className="list-disc list-inside mb-4">
                            <li><b>OR:</b> A + 0 = A</li>
                            <li><b>AND:</b> A • 1 = A</li>
                        </ul>
                    </li>
                    <li>
                        <b>Complement Law:</b>
                        <ul className="list-disc list-inside mb-4">
                            <li><b>OR:</b> A + A' = 1</li>
                            <li><b>AND:</b> A • A' = 0</li>
                        </ul>
                    </li>
                    <li>
                        <b>Idempotent Law:</b>
                        <ul className="list-disc list-inside mb-4">
                            <li><b>OR:</b> A + A = A</li>
                            <li><b>AND:</b> A • A = A</li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* Circuit Designing Techniques */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Circuit Designing Techniques</h3>
                <p className="mb-4">
                    Circuit designing techniques are methods used to design and simplify logic circuits.
                </p>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Sum of Products (SOP)</h4>
                    <p className="mb-2">
                        SOP is a method where the Boolean function is expressed as a sum (OR) of product (AND) terms.
                    </p>
                    <p className="mb-2"><b>Example:</b> F = (A • B) + (A' • C) + (B • C')</p>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Product of Sums (POS)</h4>
                    <p className="mb-2">
                        POS is a method where the Boolean function is expressed as a product (AND) of sum (OR) terms.
                    </p>
                    <p className="mb-2"><b>Example:</b> F = (A + B) • (A' + C) • (B + C')</p>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Karnaugh Maps (K-Map)</h4>
                    <p className="mb-2">
                        K-Maps are a graphical tool used to simplify Boolean expressions by grouping adjacent cells that contain 1s.
                    </p>
                    <p className="mb-2"><b>Example:</b> To simplify F = A'B' + AB', you would create a 2-variable K-Map, fill in the values, group the adjacent 1s, and write the simplified expression.</p>
                    
                </div>
            </section>
        </div>
    );
};

export default Chapter1_LogicGatesAndBooleanAlgebra;

