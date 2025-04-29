import React, { useState, useEffect } from 'react';

const Chapter3_Deadlocks = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className='max-w-4xl mx-auto p-5'>
            <h2 className='text-3xl font-semibold text-center mb-5'>Chapter 3: Deadlocks</h2>

            {/* Question and Answer Section */}
            <section className='mb-8'>
                <p><strong>Q1: What is a deadlock?</strong><br />
                    A1: A deadlock is a situation in which two or more processes are blocked indefinitely, each waiting for the other to release a resource. This results in a situation where no process can continue its execution.
                </p>                
                <p><strong>Q2: What are the necessary conditions for a deadlock to occur?</strong><br />A2: Deadlocks occur when the following four conditions are met simultaneously:</p>                
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Mutual Exclusion:</strong> A resource can only be assigned to one process at a time.</li>
                    <li><strong>Hold and Wait:</strong> A process is holding at least one resource while waiting to acquire additional resources held by other processes.</li>
                    <li><strong>No Preemption:</strong> A resource cannot be forcibly removed from a process holding it; it must be released voluntarily.</li>
                    <li><strong>Circular Wait:</strong> A set of processes exists such that each process is waiting for a resource held by the next process in the set.</li>
                </ul>
                <p><strong>Q3: What methods are used to handle deadlocks?</strong><br />A3: Deadlocks can be handled using four main approaches:</p>                
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Deadlock Prevention:</strong> Prevents one or more of the necessary conditions for deadlock from occurring.</li>   
                    <li><strong>Deadlock Avoidance:</strong> Dynamically checks resource allocation to avoid unsafe states.</li>
                    <li><strong>Deadlock Detection:</strong> Allows deadlocks to occur, then detects and handles them.</li>
                    <li><strong>Deadlock Recovery:</strong> Takes actions to recover from a detected deadlock.</li>
                </ul>
            </section>

            {/* System Model for Deadlocks */}
            <section className='mb-8'>
                <h3 className="text-2xl font-semibold mb-3">System Model for Deadlocks</h3>
                <p>A system model includes:</p>                
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Processes:</strong> Executing programs.</li>
                    <li><strong>Resources:</strong> Hardware/software resources allocated to processes.</li>
                    <li><strong>Resource Allocation Graph (RAG):</strong> A directed graph representing processes and resources. Edges show allocations and requests.</li>
                </ul>                
            </section>

            {/* Deadlock Characterization */}
            <section className='mb-8'>
                <h3 className="text-2xl font-semibold mb-3">Deadlock Characterization</h3>
                <p>Deadlock occurs when these conditions hold:</p>                
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Mutual Exclusion:</strong> Only one process at a time can use a resource.</li>
                    <li><strong>Hold and Wait:</strong> Holding one resource while requesting more.</li> 
                    <li><strong>No Preemption:</strong> Resources are released voluntarily.</li>
                    <li><strong>Circular Wait:</strong> Processes form a cycle of resource waiting.</li>
                </ul>
            </section>

            {/* Methods for Handling Deadlocks */}
            <section className='mb-8'>
                <h3 className="text-2xl font-semibold mb-3">Methods for Handling Deadlocks</h3>
                <h4 className="text-xl font-medium mt-5 mb-2">1. Deadlock Prevention</h4>
                <p>Prevents deadlock by eliminating one of the necessary conditions:</p>                
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Mutual Exclusion:</strong> Allow sharing where possible.</li>
                    <li><strong>Hold and Wait:</strong> Require all resources to be requested at once.</li>
                    <li><strong>No Preemption:</strong> Resources forcibly taken when needed.</li>
                    <li><strong>Circular Wait:</strong> Enforce resource request ordering.</li>
                </ul>

                <h4 className="text-xl font-medium mt-5 mb-2">2. Deadlock Avoidance</h4>                
                <p>Dynamically avoid unsafe states. Example: <strong>Banker's Algorithm</strong> evaluates if a request keeps the system in a safe state.</p>
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Safe State:</strong> All processes can finish.</li>
                    <li><strong>Unsafe State:</strong> Some processes may never finish.</li>
                </ul>

                <h4 className="text-xl font-medium mt-5 mb-2">3. Deadlock Detection</h4>
                <p>Allow deadlocks to happen but detect cycles in the RAG:</p>                    
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Cycle Detection:</strong> Presence of a cycle indicates deadlock.</li>
                    <li><strong>Process Blocking:</strong> Identify blocked processes.</li>
                </ul>                

                <h4 className="text-xl font-medium mt-5 mb-2">4. Deadlock Recovery</h4>                
                <p>Recover from deadlock by:</p>                    
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Process Termination:</strong> Kill one/more processes involved.</li>
                    <li><strong>Resource Preemption:</strong> Preempt resources and reassign.</li>
                </ul>                
            </section>

            {/* Detailed Questions and Answers */}
            <section className='mb-8'>
                <h3 className='text-2xl font-semibold mb-3'>Detailed Questions and Answers</h3>

                {/* Question 16 */}
                <h4 className="text-xl font-medium mt-5 mb-2">
                    Q . What is a deadlock? Describe the four necessary conditions for a deadlock to occur.
                </h4>
                <p><strong>Answer:</strong><br />A deadlock is a critical condition where processes wait forever for resources held by each other. Necessary conditions:</p>                
                <ul className="list-disc ml-6 mt-2">
                    <li><b>Mutual Exclusion:</b> Resources cannot be shared.</li>
                    <li><b>Hold and Wait:</b> Holding one resource while waiting for others.</li>
                    <li><b>No Preemption:</b> Resources cannot be forcibly removed.</li>
                    <li><b>Circular Wait:</b> Circular chain of waiting processes.</li>
                </ul>

                {/* Question 17 */}
                <h4 className='text-xl font-medium mt-5 mb-2'>Q. Compare and contrast deadlock prevention, avoidance, and detection.</h4>
                <strong>Answer:</strong><br />
                {isClient && (
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Feature</th>
                                <th className="px-6 py-3">Deadlock Prevention</th>
                                <th className="px-6 py-3">Deadlock Avoidance</th>
                                <th className="px-6 py-3">Deadlock Detection</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Goal</td>
                                <td className="px-6 py-4">Never allow deadlock conditions.</td>
                                <td className="px-6 py-4">Avoid unsafe states.</td>
                                <td className="px-6 py-4">Detect and recover after deadlock.</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Method</td>
                                <td className="px-6 py-4">Restricts process requests.</td>
                                <td className="px-6 py-4">Dynamic analysis of allocations.</td>
                                <td className="px-6 py-4">Cycle detection in graphs.</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Pros</td>
                                <td className="px-6 py-4">No deadlocks guaranteed.</td>
                                <td className="px-6 py-4">Better resource utilization.</td>
                                <td className="px-6 py-4">Higher throughput until deadlock occurs.</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Cons</td>
                                <td className="px-6 py-4">Low resource usage.</td>
                                <td className="px-6 py-4">Complex and conservative.</td>
                                <td className="px-6 py-4">Overhead and potential data loss.</td>
                            </tr>
                        </tbody>
                    </table>
                )}
                

                {/* Question 18 */}                
                <h4 className='text-xl font-medium mt-5 mb-2'>Q. Explain the Banker’s algorithm in detail with an example.</h4>
                <p>
                    <strong>Answer:</strong><br />Banker's algorithm evaluates requests by checking if granting a request leads to a safe state. If yes, it proceeds; otherwise, the request is denied.<br/>
                    Example:<br/>
                    - Total resources: 10<br/>
                    - Allocated to Process A: 3<br/>
                    - Max demand of A: 7<br/>
                    - Remaining need of A: 4<br/>
                    - Available resources: 5<br/>
                    Since available ≥ need (5 ≥ 4), A can safely proceed.
                </p>

                {/* Question 19 */}<h4 className='text-xl font-medium mt-5 mb-2'>
                    Q. How can resource allocation graphs be used to detect deadlocks?</h4>                    
                <p>
                    <strong>Answer:</strong><br />
                    Resource Allocation Graphs (RAG) show relationships between processes and resources. If a cycle exists in RAG, a deadlock is present.
                </p>
           </section>

            {/* Conclusion Section */}
            <section className='mb-8'>
                <h3 className='text-2xl font-semibold mb-3'>Summary</h3>
                <p>
                    Deadlocks are serious problems in multiprogramming systems where processes compete for resources. Understanding deadlock conditions, characterization, and handling methods like prevention, avoidance, detection, and recovery is crucial for designing efficient and deadlock-free systems. Using tools like the Banker's algorithm and Resource Allocation Graphs helps manage and mitigate deadlock risks effectively.
                </p>
            </section>
        </div>
    );
};

export default Chapter3_Deadlocks;
