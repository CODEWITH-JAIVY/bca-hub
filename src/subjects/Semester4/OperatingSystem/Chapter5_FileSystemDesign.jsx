import React from 'react';

const Chapter5_FileSystemDesign = () => {
    return (
        <div>
            <h2>Chapter 5: File System Design</h2>
            <p>
                <strong>Q1: What is a file system?</strong>
                <br />
                A1: A file system is a method for organizing and storing files on a storage device, such as a hard drive or SSD.
            </p>
            <p>
                <strong>Q2: What are the functions of a file system?</strong>
                <br />
                A2: Functions include naming files, organizing files into directories, allocating storage space, and managing file access permissions.
            </p>
            <p>
                <strong>Q3: What are the different file system structures?</strong>
                <br />
                A3: Structures include hierarchical (tree-like), flat, and network.
            </p>
            <p>
                <strong>Q4: What is a hierarchical file system?</strong>
                <br />
                A4: A hierarchical file system organizes files and directories in a tree-like structure, with a root directory at the top and subdirectories branching from it.
            </p>
            <p>
                <strong>Q5: What are the different file allocation methods?</strong>
                <br />
                A5: Methods include contiguous allocation, linked allocation, and indexed allocation.
            </p>
            <p>
                <strong>Q6: Explain contiguous allocation.</strong>
                <br />
                A6: Contiguous allocation assigns each file a contiguous block of storage space on the disk.
            </p>
        </div>
    );
};

export default Chapter5_FileSystemDesign;
