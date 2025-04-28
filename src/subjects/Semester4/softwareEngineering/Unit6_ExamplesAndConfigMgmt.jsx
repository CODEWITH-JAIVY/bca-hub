'use client';
import React from 'react';

const Unit6_ExamplesAndConfigMgmt = () => {
    return (
        <div className="max-w-4xl mx-auto p-5">
            <h2 className="text-3xl font-semibold text-center mb-5">Unit VI: Comprehensive Examples, Configuration Management</h2>

            {/* Real-Life Software Examples Section */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Real-Life Software Examples</h3>
                <p>Here are some common examples of software systems used in various industries:</p>
                <ul>
                    <li className="mb-2">
                        <strong className="font-medium">ERP System:</strong> Enterprise Resource Planning systems manage and integrate various aspects of a company, including HR, inventory, and finance.
                        <ul>
                            <li>
                                <strong className="font-medium">Examples:</strong> SAP, Oracle ERP, Microsoft Dynamics 365.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Hospital Management System:</strong> These systems handle patient records, billing, and doctor scheduling, streamlining hospital operations.
                        <ul>
                            <li>
                                <strong className="font-medium">Examples:</strong> Epic Systems, Cerner Millennium, Allscripts.
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* Case Tools Section */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Case Tools (Computer-Aided Software Engineering Tools)</h3>
                <p>CASE tools assist software engineers in various tasks:</p>
                <ul>
                    <li className="mb-2">
                        <strong className="font-medium">Requirements Gathering:</strong> Tools like JIRA and Trello help in collecting and organizing project requirements.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Designing:</strong> Lucidchart and Draw.io assist in creating diagrams and visual models of software designs.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Testing:</strong> Selenium is widely used for automating web application testing.
                    </li>
                </ul>
            </section>

            {/* Configuration Management Section */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Configuration Management</h3>
                <p>Configuration management ensures the integrity of the system over time by systematically managing changes. Key activities include:</p>
                <ul>
                    <li className="mb-2"><strong className="font-medium">Version Control:</strong> Systems like GitHub and GitLab track changes to the codebase.</li>
                    <li className="mb-2"><strong className="font-medium">Change Management:</strong> This involves the process of approving or rejecting changes to ensure they are properly documented and assessed.</li>
                    <li className="mb-2"><strong className="font-medium">Build Management:</strong> Automates the process of creating software builds and deployments.</li>
                    <li className="mb-2"><strong className="font-medium">Release Management:</strong> Planning and coordinating the release of new software versions.</li>
                </ul>
            </section>
        </div>
    );
};

export default Unit6_ExamplesAndConfigMgmt;
