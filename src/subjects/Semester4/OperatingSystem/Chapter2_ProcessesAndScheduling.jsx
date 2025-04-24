import React from 'react';

const Chapter2_ProcessesAndScheduling = () => {
    return (
        <div>
            <h2>Chapter 2: Processes and Scheduling</h2>

            {/* Processes: Process Concept, Process Scheduling, Operations on Processes */}
            <section>
                <h3>1. Processes: Process Concept, Process Scheduling, Operations on Processes</h3>

                <p>
                    <strong>What is a Process?</strong>
                    <br />
                    A process is essentially a program in execution. It can be thought of as a task that the computer is working on. When you run a program, the operating system creates a process that contains all the resources needed to execute that program, such as memory, CPU time, and access to I/O devices.
                </p>
                <p>
                    <strong>Analogy:</strong> Think of a process as a chef in a kitchen. When you order food, the chef (process) is responsible for preparing the dish (execution) using ingredients (resources like memory and CPU).
                </p>
                <p>
                    <strong>Process Scheduling:</strong> Process scheduling is the method through which the operating system decides which process gets the CPU to execute at any given time. It ensures that multiple processes get a fair share of the CPU, allowing the system to run multiple tasks simultaneously (this is called multitasking).
                </p>
                <p>
                    <strong>Analogy:</strong> Imagine you have a group of chefs (processes) in a restaurant, but only one stove (CPU). Scheduling helps decide which chef gets to cook at any given time.
                </p>
                <p>
                    <strong>Operations on Processes:</strong> Operating systems perform several operations on processes, such as:
                    <ul>
                        <li>Creating a process: When a new task starts (like opening a new program).</li>
                        <li>Terminating a process: When the task is finished, the system cleans up the resources.</li>
                        <li>Suspending and resuming a process: Sometimes processes may need to be paused and later resumed (for example, switching between tasks in a multitasking environment).</li>
                    </ul>
                </p>
            </section>

            {/* CPU Scheduling: Basic Concepts, Scheduling Criteria, Scheduling Algorithms, Multiple-Processor Scheduling */}
            <section>
                <h3>2. CPU Scheduling: Basic Concepts, Scheduling Criteria, Scheduling Algorithms, Multiple-Processor Scheduling</h3>

                <p>
                    <strong>Basic Concepts:</strong> CPU scheduling is about deciding which process should be given the CPU next. Since there are usually multiple processes needing CPU time, the OS needs a way to determine which one to run.
                </p>
                <p>
                    <strong>Analogy:</strong> Imagine you have a line of people at a counter (processes), and the counter (CPU) can only serve one person at a time. CPU scheduling is like the person managing the line and deciding who gets served next.
                </p>

                <p>
                    <strong>Scheduling Criteria:</strong> There are several criteria to determine the effectiveness of a scheduling algorithm. These include:
                    <ul>
                        <li>CPU Utilization: We want to keep the CPU as busy as possible.</li>
                        <li>Throughput: The number of processes completed per unit of time.</li>
                        <li>Turnaround Time: The time it takes from submitting a process until it finishes.</li>
                        <li>Waiting Time: The total time a process spends waiting in the ready queue.</li>
                        <li>Response Time: The time between submitting a request and receiving the first response (important for interactive applications).</li>
                    </ul>
                </p>

                <p>
                    <strong>Scheduling Algorithms:</strong> Several algorithms can be used to schedule processes:
                    <ul>
                        <li><strong>First-Come, First-Served (FCFS):</strong> Processes are scheduled in the order they arrive. Imagine people waiting in line; the first one to arrive is the first to be served.</li>
                        <li><strong>Shortest Job First (SJF):</strong> The process with the shortest burst time (execution time) is given priority. It's like serving the customers with the simplest orders first to get them out of the way.</li>
                        <li><strong>Priority Scheduling:</strong> Processes are assigned priorities, and the CPU executes the highest priority process first. It's like a queue where VIPs (high-priority processes) are served before regular customers.</li>
                        <li><strong>Round Robin (RR):</strong> Each process is given a fixed time slice (quantum) to run. After one process's time is up, the CPU moves on to the next one, cycling through all processes. It's like a conveyor belt serving each customer for a set amount of time.</li>
                    </ul>
                </p>

                <p>
                    <strong>Multiple-Processor Scheduling:</strong> In systems with more than one CPU, the scheduling process becomes a bit more complex. The operating system decides how to divide the tasks among the available processors, aiming for efficiency and load balancing. It's like running a factory with multiple workers (CPUs), and the system needs to decide how to divide the tasks among them.
                </p>
            </section>

            {/* Process Synchronization: Background, Critical Section Problem, Synchronization Hardware, Semaphores, Classical Problems of Synchronization */}
            <section>
                <h3>3. Process Synchronization: Background, Critical Section Problem, Synchronization Hardware, Semaphores, Classical Problems of Synchronization</h3>

                <p>
                    <strong>Background:</strong> Process synchronization ensures that multiple processes do not interfere with each other while accessing shared resources (like memory or I/O devices). Without synchronization, we might run into issues like data corruption or unexpected behavior.
                </p>
                <p>
                    <strong>Analogy:</strong> Imagine two chefs (processes) trying to prepare dishes in the same kitchen, but they are both using the same cutting board (shared resource). If they don't coordinate, they might end up fighting for space or messing up each other’s work.
                </p>

                <p>
                    <strong>Critical Section Problem:</strong> The Critical Section Problem arises when multiple processes try to access and modify shared data simultaneously. The critical section is the part of the code where a process accesses shared resources, and the problem is how to ensure that only one process enters this section at a time.
                </p>
                <p>
                    <strong>Analogy:</strong> If two chefs are trying to use the same knife at the same time, there will be conflicts. The critical section is the period when they are using the knife.
                </p>

                <p>
                    <strong>Synchronization Hardware:</strong> In the early stages of computer science, hardware-based solutions were implemented for synchronization. These solutions use atomic operations (operations that are completed in a single step, with no interruption) to prevent race conditions.
                </p>
                <p>
                    <strong>Analogy:</strong> Imagine a physical lock on the knife. If one chef wants to use it, they must "lock" it, preventing the other chef from using it simultaneously.
                </p>

                <p>
                    <strong>Semaphores:</strong> A semaphore is a synchronization tool used to control access to shared resources. A semaphore can be thought of as a counter that tracks the number of resources available.
                    <ul>
                        <li>Binary Semaphore: A special kind of semaphore that can only have values 0 or 1, used for mutual exclusion.</li>
                        <li>Counting Semaphore: Used to track more than one resource.</li>
                    </ul>
                    <strong>Analogy:</strong> A semaphore is like a sign-up sheet for using the knife. If the sheet is full, a chef has to wait for a turn.
                </p>

                <p>
                    <strong>Classical Problems of Synchronization:</strong> Several well-known problems help illustrate the importance of synchronization:
                    <ul>
                        <li><strong>The Producer-Consumer Problem:</strong> This occurs when a producer creates items and a consumer consumes them. If they are not synchronized, the consumer might try to consume an item before the producer has made one.</li>
                        <li><strong>The Reader-Writer Problem:</strong> This happens when multiple readers can access a shared resource simultaneously, but writers need exclusive access.</li>
                        <li><strong>The Dining Philosophers Problem:</strong> A classic synchronization problem where several philosophers (processes) are sitting at a table and need two utensils (resources) to eat. They must ensure no deadlock or starvation occurs while sharing the utensils.</li>
                    </ul>
                </p>
            </section>
        </div>
    );
};

export default Chapter2_ProcessesAndScheduling;
