import React from 'react';

const Chapter2_ProcessesAndScheduling = () => {
    return (
        <div>
            <h2>Chapter 2: Processes and Scheduling</h2>
            <p>
                <strong>Q1: What is a process?</strong>
                <br />
                A1: A process is an instance of a computer program that is being executed. It is an active entity, as opposed to a program, which is considered a passive entity.
            </p>
            <p>
                <strong>Q2: What are the states of a process?</strong>
                <br />
                A2: States include new, ready, running, waiting, and terminated.
            </p>
            <p>
                <strong>Q3: What is process scheduling?</strong>
                <br />
                A3: Process scheduling is the activity of managing the execution of processes by assigning them to the CPU.
            </p>
            <p>
                <strong>Q4: What are the different scheduling algorithms?</strong>
                <br />
                A4: Algorithms include First-Come, First-Served (FCFS), Shortest Job First (SJF), Priority scheduling, and Round Robin.
            </p>
            <p>
                <strong>Q5: Explain FCFS scheduling.</strong>
                <br />
                A5: FCFS (First-Come, First-Served) scheduling executes processes in the order they arrive.
            </p>
            <p>
                <strong>Q6: Explain SJF scheduling.</strong>
                <br />
                A6: SJF (Shortest Job First) scheduling executes the process with the smallest execution time first.
            </p>
            <p>
                <strong>Q7: Explain priority scheduling.</strong>
                <br />
                A7: Priority scheduling executes processes based on their priority, with higher priority processes being executed first.
            </p>
            <p>
                <strong>Q8: Explain Round Robin scheduling.</strong>
                <br />
                A8: Round Robin scheduling assigns a fixed time slice to each process, and processes are executed in a circular manner.
            </p>
        </div>
    );
};

export default Chapter2_ProcessesAndScheduling;
