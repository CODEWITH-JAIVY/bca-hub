import React from 'react';

const Chapter4_DeviceAndStorageMgmt = () => {
    return (
        <div>
            <h2>Chapter 4: Device and Storage Management</h2>
            <p>
                <strong>Q1: What is device management in an OS?</strong>
                <br />
                A1: Device management is the function of an operating system that controls and manages the computer's hardware devices.
            </p>
            <p>
                <strong>Q2: What are the types of devices managed by an OS?</strong>
                <br />
                A2: Types include input devices (e.g., keyboard, mouse), output devices (e.g., monitor, printer), and storage devices (e.g., hard drives, SSDs).
            </p>
            <p>
                <strong>Q3: What is storage management in an OS?</strong>
                <br />
                A3: Storage management is the function of an operating system that manages the storage and retrieval of data on storage devices.
            </p>
            <p>
                <strong>Q4: What are the different disk scheduling algorithms?</strong>
                <br />
                A4: Algorithms include First-Come, First-Served (FCFS), Shortest Seek Time First (SSTF), SCAN, and C-SCAN.
            </p>
            <p>
                <strong>Q5: Explain FCFS disk scheduling.</strong>
                <br />
                A5: FCFS (First-Come, First-Served) processes disk I/O requests in the order they arrive.
            </p>
            <p>
                <strong>Q6: Explain SSTF disk scheduling.</strong>
                <br />
                A6: SSTF (Shortest Seek Time First) selects the disk I/O request that requires the minimum seek time from the current head position.
            </p>
        </div>
    );
};

export default Chapter4_DeviceAndStorageMgmt;
