import React from 'react';

const Unit2_RequirementAnalysis = () => {
    return (
        <div className="max-w-4xl mx-auto p-5">
            <h2 className="text-3xl font-semibold text-center mb-5">Unit II: Requirements Analysis</h2>

            {/* Statement of System Scope */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Statement of System Scope</h3>
                <p>
                    The <strong>Statement of System Scope</strong> defines the boundaries and extent of the software system.
                    It outlines what the system will do and, equally important, what it will not do. This helps in
                    managing expectations and setting clear project limits.
                </p>
                <p className="mt-2 font-semibold">Key Aspects:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Defines the system's boundaries.</li>
                    <li>Clarifies the system's purpose.</li>
                    <li>Sets expectations for stakeholders.</li>
                </ul>
                <p className="mt-2 font-semibold">Example:</p>
                <p className="ml-6">
                    In a library management system, the scope might include functions like book issuance, return, and search,
                    but explicitly exclude cafeteria or staff payroll management.
                </p>
            </section>

            {/* Isolation of Top-Level Processes and Entities */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Isolation of Top-Level Processes and Entities</h3>
                <p>
                    This process involves breaking down the system into its major components, identifying its primary
                    processes, and the entities it interacts with.
                </p>
                <p className="mt-2 font-semibold">Physical Allocation:</p>
                <p className="ml-6">
                    Assigning these processes and entities to physical resources like hardware or software components.
                </p>
                <p className="mt-2 font-semibold">Example:</p>
                <p className="ml-6">
                    An ATM system might be divided into processes like cash dispensing, card reading,
                    and a software interface, with each process allocated to specific hardware or software modules.
                </p>
            </section>

            {/* Refinement and Review */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Refinement and Review</h3>
                <p>
                    <strong>Refinement</strong> is the process of further detailing the identified processes and entities,
                    making them more specific and clear.
                </p>
                <p className="mt-2">
                    <strong>Review</strong> involves examining these details for clarity, correctness, and to resolve any
                    ambiguities.
                </p>
                <p className="mt-2 font-semibold">Example:</p>
                <p className="ml-6">
                    Detailing the cash dispensing process in the ATM system might include steps like
                    authenticating the user, checking the account balance, and dispensing the requested amount.
                </p>
            </section>

            {/* Creating a Software Specification Document */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Creating a Software Specification Document</h3>
                <p>
                    A <strong>Software Specification Document</strong> is a comprehensive document that outlines what the
                    software will do (functional requirements) and how well it will do it (non-functional requirements).
                </p>
                <p className="mt-2 font-semibold">Functional Requirements:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Example:</strong> "The system shall allow users to withdraw cash."</li>
                </ul>
                <p className="mt-2 font-semibold">Non-functional Requirements:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Example:</strong> "The system's response time for cash withdrawal shall be less than 2 seconds."</li>
                </ul>
            </section>

            {/* Review for Correctness, Consistency, and Completeness */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Review for Correctness, Consistency, and Completeness</h3>
                <p>
                    The requirements must be reviewed for:
                </p>
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Correctness:</strong> Ensuring each requirement accurately represents what the system needs to do.</li>
                    <li><strong>Consistency:</strong> Checking that no requirements contradict each other.</li>
                    <li><strong>Completeness:</strong> Verifying that all necessary scenarios and functionalities are covered.</li>
                </ul>
                <p className="mt-2 font-semibold">Example:</p>
                <p className="ml-6">
                    Ensuring that every possible user interaction and system response is accounted for in the requirements.
                </p>
            </section>
        </div>
    );
};

export default Unit2_RequirementAnalysis;
