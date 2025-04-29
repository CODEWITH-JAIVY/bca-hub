import React from 'react';

const Chapter2_ProcessesAndScheduling = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">Chapter 2: Processes and Scheduling</h2>

            {/* Section 1 */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">1. Processes: Process Concept, Process Scheduling, Operations on Processes</h3>
                <p><strong>What is a Process?</strong><br />
                    A process is a program in execution, containing resources like memory, CPU time, and I/O access.</p>
                <p><strong>Analogy:</strong><br />
                    Think of a process like a chef preparing a dish using ingredients (resources).</p>
                <p><strong>Process Scheduling:</strong><br />
                    It's how the OS decides which process gets CPU time to enable multitasking.</p>
                <p><strong>Analogy:</strong><br />
                    Multiple chefs, one stove — scheduling decides who uses the stove next.</p>
                <p><strong>Operations on Processes:</strong></p>
                <ul className="list-disc list-inside">
                    <li>Creating a process</li>
                    <li>Terminating a process</li>
                    <li>Suspending and resuming a process</li>
                </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">2. CPU Scheduling: Basic Concepts, Scheduling Criteria, Scheduling Algorithms, Multiple-Processor Scheduling</h3>
                <p><strong>Basic Concepts:</strong><br />
                    CPU Scheduling decides which waiting process gets CPU next.</p>
                <p><strong>Analogy:</strong><br />
                    People lining up at a counter to get service.</p>
                <p><strong>Scheduling Criteria:</strong></p>
                <ul className="list-disc list-inside">
                    <li>CPU Utilization</li>
                    <li>Throughput</li>
                    <li>Turnaround Time</li>
                    <li>Waiting Time</li>
                    <li>Response Time</li>
                </ul>

                <p><strong>Scheduling Algorithms:</strong></p>
                <ul className="list-disc list-inside">
                    <li><strong>FCFS:</strong> Serve in order of arrival.</li>
                    <li><strong>SJF:</strong> Serve shortest job first.</li>
                    <li><strong>Priority:</strong> Highest priority first.</li>
                    <li><strong>Round Robin:</strong> Fixed time slice for each process.</li>
                </ul>

                <p><strong>Multiple-Processor Scheduling:</strong><br />
                    Managing task division among multiple CPUs efficiently.</p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">3. Process Synchronization: Background, Critical Section Problem, Synchronization Hardware, Semaphores, Classical Problems</h3>
                <p><strong>Background:</strong><br />
                    Ensures processes don't interfere while sharing resources.</p>
                <p><strong>Critical Section Problem:</strong><br />
                    Only one process should access critical section at a time.</p>
                <p><strong>Semaphores:</strong><br />
                    Counters to control access to shared resources.</p>
                <p><strong>Classical Problems:</strong></p>
                <ul className="list-disc list-inside">
                    <li>Producer-Consumer Problem</li>
                    <li>Readers-Writers Problem</li>
                    <li>Dining Philosophers Problem</li>
                </ul>
            </section>

            {/* Question 7 */}
            <section className="mb-8">
                <h4 className="text-xl font-bold mb-2">7. What is process scheduling? Explain CPU scheduling algorithms with examples and Gantt charts.</h4>
                <p><strong>Process Scheduling:</strong><br />
                    Managing CPU time among multiple processes.</p>
                <p><strong>CPU Scheduling Algorithms:</strong></p>
                <ul className="list-disc list-inside">
                    <li><strong>FCFS Example:</strong><br />
                        <pre>{`
| P1 (24) | P2 (3) | P3 (3) |
0        24       27      30
                        `}</pre>
                    </li>
                    <li><strong>SJF Example:</strong><br />
                        <pre>{`
| P4 (3) | P1 (6) | P3 (7) | P2 (8) |
0        3        9       16      24
                        `}</pre>
                    </li>
                    <li><strong>Priority Example:</strong><br />
                        <pre>{`
| P2 (1) | P4 (1) | P3 (2) | P1 (10) |
0        1        2       4       14
                        `}</pre>
                    </li>
                    <li><strong>Round Robin Example (Quantum=4):</strong><br />
                        <pre>{`
| P1(4) | P2(3) | P3(3) | P1(4) | P1(4) | P1(4) | P1(4) |
0       4       7       10      14      18      22      26
                        `}</pre>
                    </li>
                </ul>
            </section>

            {/* Question 8 */}
            <section className="mb-8">
                <h4 className="text-xl font-bold mb-2">8. Differentiate between preemptive and non-preemptive scheduling.</h4>
                <p><strong>Preemptive Scheduling:</strong><br />
                    CPU can be taken from a process; suitable for real-time systems.</p>
                <p><strong>Non-Preemptive Scheduling:</strong><br />
                    Once started, the process runs till it finishes.</p>
                <p><strong>Use Cases:</strong></p>
                <ul className="list-disc list-inside">
                    <li><strong>Preemptive:</strong> Time-sharing, Real-time OS</li>
                    <li><strong>Non-Preemptive:</strong> Simple batch systems</li>
                </ul>
            </section>

            {/* Question 9 */}
            <section className="mb-8">
                <h4 className="text-xl font-bold mb-2">9. What is a context switch? Why is it important?</h4>
                <p><strong>Context Switch:</strong><br />
                    Saving current process state and loading another process.</p>
                <p><strong>Importance:</strong><br />
                    Enables multitasking by allowing CPU to switch between processes efficiently.</p>
            </section>

            {/* Question 10 */}
            <section className="mb-8">
                <h4 className="text-xl font-bold mb-2">10. Explain Inter-Process Communication (IPC).</h4>
                <p><strong>IPC:</strong><br />
                    Mechanisms that allow processes to communicate and synchronize.</p>
                <p><strong>Methods:</strong></p>
                <ul className="list-disc list-inside">
                    <li>Pipes</li>
                    <li>Message Queues</li>
                    <li>Shared Memory</li>
                    <li>Semaphores</li>
                </ul>
            </section>
        </div>
    );
};

export default Chapter2_ProcessesAndScheduling;
