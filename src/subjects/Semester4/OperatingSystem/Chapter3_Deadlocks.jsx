import React from 'react';

const Chapter3_Deadlocks = () => {
    return (
        <div>
            <h2>Chapter 3: Deadlocks</h2>
            <p>
                <strong>Q1: What is a deadlock?</strong>
                <br />
                A1: A deadlock is a situation in which two or more processes are blocked indefinitely, each waiting for the other to release a resource.
            </p>
            <p>
                <strong>Q2: What are the necessary conditions for a deadlock to occur?</strong>
                <br />
                A2: Conditions include mutual exclusion, hold and wait, no preemption, and circular wait.
            </p>
            <p>
                <strong>Q3: Explain mutual exclusion.</strong>
                <br />
                A3: Mutual exclusion means that only one process can access a resource at a time.
            </p>
            <p>
                <strong>Q4: Explain hold and wait.</strong>
                <br />
                A4: Hold and wait means that a process holds at least one resource while waiting to acquire additional resources held by other processes.
            </p>
            <p>
                <strong>Q5: Explain no preemption.</strong>
                <br />
                A5: No preemption means that a resource cannot be forcibly taken from a process holding it; it must be released voluntarily by the process.
            </p>
            <p>
                <strong>Q6: Explain circular wait.</strong>
                <br />
                A6: Circular wait means that there exists a set of waiting processes such that each process is waiting for a resource held by the next process in the chain.
            </p>
            <p>
                <strong>Q7: What are the methods for handling deadlocks?</strong>
                <br />
                A7: Methods include deadlock prevention, deadlock avoidance, deadlock detection, and deadlock recovery.
            </p>
        </div>
    );
};

export default Chapter3_Deadlocks;
