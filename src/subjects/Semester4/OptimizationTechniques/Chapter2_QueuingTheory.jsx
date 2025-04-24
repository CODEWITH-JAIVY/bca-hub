import React from 'react';

const Chapter2_QueuingTheory = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold">Chapter 2: Queuing Theory</h2>

            <div>
                <strong>What is Queuing Theory?</strong>
                <p>
                    Queuing theory is the mathematical study of waiting lines or queues. It provides a framework for analyzing and predicting the behavior of systems that involve queues, such as customer service systems, computer networks, and manufacturing processes. By modeling queues, we can predict system performance, optimize resource allocation, and improve service efficiency.
                </p>
            </div>

            <div>
                <strong>Characteristics of a Queuing System</strong>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Arrival Process:</strong> Refers to the pattern of customers arriving at the system. Common models include:
                        <ul className="list-disc ml-4">
                            <li>Poisson distribution: Random, independent events arriving at a constant rate.</li>
                            <li>Exponential distribution: Time between events in a Poisson process.</li>
                        </ul>
                    </li>
                    <li><strong>Service Process:</strong> Describes how customers are served. Often modeled using:
                        <ul className="list-disc ml-4">
                            <li>Exponential service times: Random with a constant mean rate.</li>
                            <li>Deterministic service times: Fixed time for service.</li>
                        </ul>
                    </li>
                    <li><strong>Queue Discipline:</strong> The order in which customers are served.
                        <ul className="list-disc ml-4">
                            <li>First-Come, First-Served (FCFS)</li>
                            <li>Last-Come, First-Served (LCFS)</li>
                            <li>Priority-Based: Higher priority customers are served first.</li>
                        </ul>
                    </li>
                    <li><strong>Number of Servers:</strong> One or multiple servers to handle customers simultaneously.</li>
                </ul>
            </div>

            <div>
                <strong>Classification of Queuing Models</strong>
                <p>Queuing models are classified based on:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Arrival Process: Poisson or other distributions.</li>
                    <li>Service Process: Exponential or general distributions.</li>
                    <li>Number of Servers: Single or multiple.</li>
                    <li>Queue Discipline: FCFS, priority, etc.</li>
                    <li>System Capacity: Maximum number of customers that can wait.</li>
                </ul>
                <p>Common Models:</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>M/M/1:</strong> Single server with exponential arrival and service times.</li>
                    <li><strong>M/M/c:</strong> Multiple servers with exponential arrival and service times.</li>
                    <li><strong>M/G/1:</strong> Single server with exponential arrival and general service times.</li>
                    <li><strong>G/G/1:</strong> General arrival and service times with a single server.</li>
                </ul>
            </div>

            <div>
                <strong>Single Channel Queuing Theory (M/M/1 Model)</strong>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>M:</strong> Markovian (exponential) arrival process.</li>
                    <li><strong>M:</strong> Markovian (exponential) service process.</li>
                    <li><strong>1:</strong> One server.</li>
                </ul>
                <p>Performance Metrics:</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Traffic Intensity (ρ):</strong> ρ = λ / μ. If ρ &lt; 1, the system is stable; if ρ ≥ 1, it becomes unstable.</li>
                    <li><strong>Average Number in System (L):</strong> L = λ / (μ - λ)</li>
                    <li><strong>Average Number in Queue (Lq):</strong> Lq = λ² / (μ(μ - λ))</li>
                    <li><strong>Average Time in System (W):</strong> W = 1 / (μ - λ)</li>
                    <li><strong>Average Time in Queue (Wq):</strong> Wq = λ / (μ(μ - λ))</li>
                </ul>
            </div>

            <div>
                <strong>Generalization of Steady-State M/M/1 Queuing Models</strong>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Model I - M/M/c Queue:</strong> System with <em>c</em> parallel servers, exponential service times, Poisson arrivals.</li>
                    <li><strong>Model II - M/M/∞ Queue:</strong> Infinite servers, no waiting; all customers are immediately served.</li>
                </ul>
            </div>

            <div>
                <strong>Applications of Queuing Theory</strong>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Telecommunications:</strong> Optimizing network traffic and bandwidth.</li>
                    <li><strong>Customer Service:</strong> Managing queues in banks, call centers, and stores.</li>
                    <li><strong>Manufacturing:</strong> Reducing delays in production systems.</li>
                    <li><strong>Computer Systems:</strong> Managing CPU tasks, memory access, and job scheduling.</li>
                </ul>
            </div>
        </div>
    );
};

export default Chapter2_QueuingTheory;
