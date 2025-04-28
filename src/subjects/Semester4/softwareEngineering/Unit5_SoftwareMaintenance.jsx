'use client';
import React from 'react';

const Unit5_SoftwareMaintenance = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Unit 5: Software Maintenance</h2>

            {/* Maintenance as Part of Software Evaluation */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Maintenance as Part of Software Evaluation</h3>
                <p className="text-gray-700">
                    After software is deployed and in use, it enters the maintenance phase. This phase is crucial for ensuring the software continues to meet user needs and operates smoothly. Maintenance involves making updates, fixing bugs, and improving performance over time.
                </p>
            </section>

            {/* Reasons for Maintenance */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Reasons for Maintenance</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Fixing Defects:</strong> Correcting bugs or errors that were not found during testing.</li>
                    <li><strong>Adapting to New Hardware/Software:</strong> Modifying the software to work with new operating systems, hardware, or other software.</li>
                    <li><strong>Enhancing Performance or Features:</strong> Improving the software's speed, efficiency, or adding new features based on user feedback.</li>
                </ul>
            </section>

            {/* Types of Maintenance */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Types of Maintenance</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        <strong>Corrective:</strong> Fixing bugs or errors that have been reported by users or found in testing.
                        <br />
                        <em>Example: Fixing a bug that causes the software to crash under certain conditions.</em>
                    </li>
                    <li>
                        <strong>Adaptive:</strong> Changing the software to work in a new or different environment.
                        <br />
                        <em>Example: Updating the software to work with a new operating system version.</em>
                    </li>
                    <li>
                        <strong>Perfective:</strong> Making improvements to the software's performance, usability, or maintainability.
                        <br />
                        <em>Example: Improving the software's response time or redesigning the user interface.</em>
                    </li>
                </ul>
            </section>

            {/* Designing for Maintainability */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Designing for Maintainability</h3>
                <p className="text-gray-700">Software should be designed to be easy to maintain. Key practices include using a modular structure, keeping the code simple, and creating thorough documentation.</p>
            </section>

            {/* Techniques for Maintenance */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Techniques for Maintenance</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Refactoring Code:</strong> Improving the code structure without changing its functionality.</li>
                    <li><strong>Regression Testing:</strong> Re-testing to ensure new changes haven't caused any old bugs to reappear.</li>
                    <li><strong>Version Control Systems (Git):</strong> Using systems like Git to manage changes and track the history of the codebase.</li>
                </ul>
            </section>
        </div>
    );
};

export default Unit5_SoftwareMaintenance;
