import React from 'react';

const Chapter5_MemoryOrganisation = () => {
    return (
        <div>
            <h2>Chapter 5: Memory Organisation</h2>
            <p>
                <strong>Q1: What is memory organisation?</strong>
                <br />
                A1: Memory organisation refers to how memory is structured and managed in a computer system to efficiently store and retrieve data.
            </p>
            <p>
                <strong>Q2: What are the different levels of memory hierarchy?</strong>
                <br />
                A2: Levels include cache memory, main memory (RAM), and secondary storage (hard drives, SSDs).
            </p>
            <p>
                <strong>Q3: What is the purpose of cache memory in memory organisation?</strong>
                <br />
                A3: Cache memory stores frequently accessed data to improve the speed of data retrieval, reducing the average time to access memory.
            </p>
            <p>
                <strong>Q4: What are the different cache mapping techniques?</strong>
                <br />
                A4: Techniques include direct mapping, associative mapping, and set-associative mapping.
            </p>
            <p>
                <strong>Q5: What is virtual memory?</strong>
                <br />
                A5: Virtual memory is a memory management technique that allows programs to access more memory than is physically available in RAM.
            </p>
            <p>
                <strong>Q6: What is memory segmentation?</strong>
                <br />
                A6: Memory segmentation involves dividing memory into logical segments, each with a base address and a limit, to improve memory protection and management.
            </p>
            <p>
                <strong>Q7: What is memory paging?</strong>
                <br />
                A7: Memory paging involves dividing memory into fixed-size blocks called pages, allowing non-contiguous memory allocation.
            </p>
        </div>
    );
};

export default Chapter5_MemoryOrganisation;
