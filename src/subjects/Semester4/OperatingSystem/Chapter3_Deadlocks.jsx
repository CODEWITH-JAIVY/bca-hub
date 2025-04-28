import React from 'react';

const Chapter3_Deadlocks = () => {
    return (
        <div className='max-w-4xl mx-auto p-5'>
            <h2 className='text-3xl font-semibold text-center mb-5'>Chapter 3: Deadlocks</h2>

            {/* Question and Answer Section */}
            <section className='mb-8'>
                <p><strong>Q1: What is a deadlock?</strong>
                    <br />
                    A1: A deadlock is a situation in which two or more processes are blocked indefinitely, each waiting for the other to release a resource. This results in a situation where no process can continue its execution. <br/>
                </p>
                <p><strong>Q2: What are the necessary conditions for a deadlock to occur?</strong>
                    <br />
                    A2: Deadlocks occur when the following four conditions are met simultaneously:
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Mutual Exclusion:</strong> A resource can only be assigned to one process at a time.</li>
                        <li><strong>Hold and Wait:</strong> A process is holding at least one resource while waiting to acquire additional resources held by other processes.</li>
                        <li><strong>No Preemption:</strong> A resource cannot be forcibly removed from a process holding it; it can only be released voluntarily.</li>
                        <li><strong>Circular Wait:</strong> A set of processes exists such that each process is waiting for a resource held by the next process in the set.</li>
                    </ul>
                </p>
                <p><strong>Q3: What methods are used to handle deadlocks?</strong>
                    <br />
                    A3: Deadlocks can be handled using four main approaches:
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Deadlock Prevention:</strong> Prevents one or more of the necessary conditions for deadlock from occurring.</li>
                        <li><strong>Deadlock Avoidance:</strong> The system dynamically checks resource allocation to avoid entering an unsafe state.</li>
                        <li><strong>Deadlock Detection:</strong> Allows deadlocks to occur, then detects and handles them when they happen.</li>
                        <li><strong>Deadlock Recovery:</strong> Takes steps to recover from a deadlock once detected.</li>
                    </ul>
                </p>
            </section>

            {/* System Model for Deadlocks */}
            <section className='mb-8'>
                <h3 className="text-2xl font-semibold mb-3">System Model for Deadlocks</h3>
                <p>
                    A system model for deadlocks typically includes:
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Processes:</strong> These are the entities executing instructions in the system.</li>
                        <li><strong>Resources:</strong> These can be hardware resources (e.g., printers, CPUs) or software resources (e.g., memory, file handles). Resources are allocated to processes.</li>
                        <li><strong>Resource Allocation Graph (RAG):</strong> A directed graph used to represent relationships between processes and resources. The nodes represent resources and processes, and edges represent resource allocation and requests.</li>
                    </ul>
                </p>
            </section>

            {/* Deadlock Characterization */}
            <section className='mb-8'>
                <h3 className="text-2xl font-semibold mb-3">Deadlock Characterization</h3>
                <p>
                    Deadlock occurs when all four necessary conditions hold true. Here's a detailed explanation of each:
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Mutual Exclusion:</strong> Resources are assigned to one process at a time. If a resource is assigned to a process, no other process can access it until it is released.</li>
                        <li><strong>Hold and Wait:</strong> A process holding at least one resource waits for additional resources, creating a cycle of dependencies.</li>
                        <li><strong>No Preemption:</strong> A resource cannot be preempted from a process. The process must release the resource voluntarily, which can lead to circular dependencies.</li>
                        <li><strong>Circular Wait:</strong> A circular chain exists where each process is waiting for a resource held by the next process in the chain. This results in a deadlock because no process can make progress.</li>
                    </ul>
                </p>
            </section>

            {/* Methods for Handling Deadlocks */}
            <section className='mb-8'>
                <h3 className="text-2xl font-semibold mb-3">Methods for Handling Deadlocks</h3>

                <h4 className="text-xl font-medium mt-5 mb-2">1. Deadlock Prevention</h4>
                <p>
                    Deadlock prevention aims to eliminate one of the four necessary conditions for deadlock to occur.
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Breaking Mutual Exclusion:</strong> Some resources, such as read-only resources, can be shared, but others like printers must be exclusive.</li>
                        <li><strong>Breaking Hold and Wait:</strong> Processes must request all resources they need at once. If any resource is unavailable, the process must wait until all resources are available.</li>
                        <li><strong>Breaking No Preemption:</strong> If a process is holding resources and requests additional resources, the system preempts resources from the process and assigns them to other processes.</li>
                        <li><strong>Breaking Circular Wait:</strong> The system imposes a strict ordering of resource requests. Processes must request resources in a specific order to prevent cycles.</li>
                    </ul>
                </p>

                <h4 className="text-xl font-medium mt-5 mb-2">2. Deadlock Avoidance</h4>
                <p>
                    Deadlock avoidance involves dynamically analyzing system resource requests to avoid entering unsafe states. The most well-known algorithm for this is the <strong>Banker's Algorithm</strong>, which checks if granting a request will leave the system in a safe or unsafe state.
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Safe State:</strong> A state where all processes can finish their execution without causing deadlock.</li>
                        <li><strong>Unsafe State:</strong> A state where resources are allocated in such a way that some processes might not be able to complete their execution, leading to deadlock.</li>
                    </ul>
                </p>

                <h4 className="text-xl font-medium mt-5 mb-2">3. Deadlock Detection</h4>
                <p>
                    In this approach, the system does not prevent or avoid deadlocks but detects them when they occur. A typical method involves checking the Resource Allocation Graph (RAG) for cycles.
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Cycle Detection:</strong> If a cycle is detected in the RAG, deadlock has occurred.</li>
                        <li><strong>Process Blocking:</strong> The system identifies processes that are part of the cycle and are blocked due to the deadlock.</li>
                    </ul>
                </p>

                <h4 className="text-xl font-medium mt-5 mb-2">4. Deadlock Recovery</h4>
                <p>
                    After detecting a deadlock, the system must take action to recover from it. There are two primary recovery methods:
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Process Termination:</strong> The system can terminate one or more processes involved in the deadlock to break the cycle.</li>
                        <li><strong>Resource Preemption:</strong> Resources held by some processes are preempted and allocated to others. This may involve rolling back processes to a safe state.</li>
                    </ul>
                </p>
            </section>
            {/* Detailed Questions and Answers */}
            <section className='mb-8'>
                <h3 className='text-2xl font-semibold mb-3'>Detailed Questions and Answers</h3>

                {/* Question 16 */}
                <h4 className="text-xl font-medium mt-5 mb-2">
                    16. What is a deadlock? Describe the four necessary conditions for a deadlock to occur.
                </h4>
                <p>
                    <strong>Answer:</strong><br />
                    A <b>deadlock</b> is a critical situation in operating systems where two or more processes are stuck in a perpetual waiting state. <br/>
                     Each process is waiting for a resource that is held by another process in the same group.  <br/>
                     This creates a standstill, preventing any of the involved processes from progressing. <br/>
                    The four necessary conditions for a deadlock to occur are:<br/>
                    <ul>
                        <li><b>Mutual Exclusion:</b> At least one resource must be held in a non-sharable mode. <br/>
                        This means that only one process can use the resource at any given time.  <br/>
                        If another process requests that resource, it must wait until the current holder releases it.</li> <br/>
                        <li><b>Hold and Wait:</b> A process must be simultaneously holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.</li> <br/>
                        <li><b>No Preemption:</b> Resources cannot be forcibly taken away from a process. <br/>
                        Once a process has been granted a resource, it must voluntarily release that resource. <br/>
                         The operating system cannot forcibly remove it.</li> <br/>
                        <li><b>Circular Wait:</b> A circular chain of processes exists, where each process is waiting for a resource that is held by the next process in the chain.  <br/>
                        This forms a cycle where each process is blocked, leading to deadlock.</li>
                    </ul> <br/>
                </p>

                {/* Question 17 */}
                <h4 className='text-xl font-medium mt-5 mb-2'>
                    17. Compare and contrast deadlock prevention, avoidance, and detection.
                </h4>
                <p>
                    <strong>Answer:</strong><br />
                    Deadlock handling can be approached in three primary ways:
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Feature</th>
                            <th scope="col" className="px-6 py-3">Deadlock Prevention</th>
                            <th scope="col" className="px-6 py-3">Deadlock Avoidance</th>
                            <th scope="col" className="px-6 py-3">Deadlock Detection</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><strong>Goal</strong></td>
                            <td className="px-6 py-4">Ensure one of the deadlock conditions never occurs.</td>
                            <td className="px-6 py-4">Avoid entering an unsafe state.</td>
                            <td className="px-6 py-4">Detect deadlocks after they occur.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><strong>Method</strong></td>
                            <td className="px-6 py-4">Restricts resource requests and system design.</td>
                            <td className="px-6 py-4">Dynamically analyzes resource requests.</td>
                            <td className="px-6 py-4">Monitors resource allocation graphs for cycles.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><strong>Pros</strong></td>
                            <td className="px-6 py-4">Guarantees no deadlocks.</td>
                            <td className="px-6 py-4">More flexible, better resource utilization.</td>
                            <td className="px-6 py-4">Maximizes resource utilization.</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><strong>Cons</strong></td>
                            <td className="px-6 py-4">Low resource utilization, low system throughput.</td>
                            <td className="px-6 py-4">Requires future request knowledge, can be conservative.</td>
                            <td className="px-6 py-4">Overhead, complexity of recovery.</td>
                        </tr>
                    </tbody>
                </table> <br/>
                </p>
                {/* Question 18 */}
                <h4 className='text-xl font-medium mt-5 mb-2'>
                    18. Explain the Banker’s algorithm in detail with an example.
                </h4>
                <p>
                    <strong>Answer:</strong><br />
                    The Banker's algorithm is a deadlock avoidance algorithm that ensures the system remains in a safe state. It simulates the allocation of resources to determine if a request can be granted without causing deadlock. If a request can lead to an unsafe state, it is denied.
                    <br/>
                 Example will be added latter.
                </p>
                {/* Question 19 */}
                <h4 className='text-xl font-medium mt-5 mb-2'>
                    19. How can resource allocation graphs be used to detect deadlocks?
                </h4>
                <p>
                    <strong>Answer:</strong><br />
                    Resource allocation graphs (RAGs) are used to visually represent the state of resource allocation and can help in deadlock detection. If a cycle is present in the graph, it indicates a deadlock situation.
                </p>
            </section>
            {/* Conclusion Section */}
            <section className='mb-8'>
                <h3 className='text-2xl font-semibold mb-3'>Summary</h3>
                <p>
                    Deadlock is a situation in which a set of processes are blocked, each waiting for another process to release a resource. The necessary conditions for deadlock to occur are mutual exclusion, hold and wait, no preemption, and circular wait. 
                </p>
                <p>
                    To handle deadlocks, the system can use deadlock prevention, deadlock avoidance, deadlock detection, and deadlock recovery. Prevention techniques aim to eliminate one of the necessary conditions, while avoidance ensures the system stays in a safe state. Detection methods look for deadlocks after they occur, and recovery techniques attempt to resolve deadlocks once they are detected.
                </p>
            </section>
        </div>
    );
};

export default Chapter3_Deadlocks;
