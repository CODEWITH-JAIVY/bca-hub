import React from 'react';

const Chapter5_FileSystemDesign = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Chapter 5: File System Design</h2>

      {/* Question 1 */}
      <h3 className="text-2xl font-semibold mb-4">Q1: What is a file system?</h3>
      <p className="mb-8">
        A1: A file system is a method for organizing and storing files on a storage device, such as a hard drive or SSD. It defines how data is stored, accessed, and managed on the device.
      </p>

      {/* Question 2 */}
      <h3 className="text-2xl font-semibold mb-4">Q2: What are the functions of a file system?</h3>
      <p className="mb-8">
        A2: Functions include naming files, organizing files into directories, allocating storage space, ensuring data security, managing file access permissions, and maintaining data integrity.
      </p>

      {/* Question 3 */}
      <h3 className="text-2xl font-semibold mb-4">Q3: What are the different file system structures?</h3>
      <p className="mb-8">
        A3: Structures include:
        <br />• Flat File System
        <br />• Hierarchical (Tree-Like) File System
        <br />• Networked File System
        <br />• Database File System
      </p>

      {/* Question 4 */}
      <h3 className="text-2xl font-semibold mb-4">Q4: What is a hierarchical file system?</h3>
      <p className="mb-8">
        A4: A hierarchical file system organizes files and directories in a tree-like structure with a root directory at the top and multiple subdirectories branching from it, improving organization and navigation.
      </p>

      {/* Question 5 */}
      <h3 className="text-2xl font-semibold mb-4">Q5: What are the different file allocation methods?</h3>
      <p className="mb-8">
        A5: The methods are:
        <br />• Contiguous Allocation
        <br />• Linked Allocation
        <br />• Indexed Allocation
      </p>

      {/* Question 6 */}
      <h3 className="text-2xl font-semibold mb-4">Q6: Explain contiguous allocation.</h3>
      <p className="mb-8">
        A6: Contiguous allocation assigns each file a set of contiguous blocks on the disk. It is simple and allows fast access, but suffers from external fragmentation.
      </p>

      {/* Question 25 */}
      <h3 className="text-2xl font-semibold mb-4">Q7: What is a file system? Explain its major components and functions.</h3>
      <p className="mb-8">
        A file system manages data storage and retrieval on storage devices. <br /><br />
        <strong>Major Components:</strong><br />
        • <strong>Files:</strong> Basic unit of storage.<br />
        • <strong>Directories:</strong> Organize and group files.<br />
        • <strong>Metadata:</strong> Information about files (size, permissions, timestamps).<br />
        • <strong>Access Control:</strong> Manages permissions and security.<br />
        • <strong>Storage Management:</strong> Allocates, tracks, and manages disk space.<br /><br />
        <strong>Functions:</strong><br />
        • Storing, retrieving, and updating data.<br />
        • Managing free space.<br />
        • Providing file protection and recovery mechanisms.
      </p>

      {/* Question 26 */}
      <h3 className="text-2xl font-semibold mb-4">Q8: Discuss different file allocation methods: contiguous, linked, and indexed.</h3>
      <p className="mb-8">
        <strong>Contiguous Allocation:</strong><br />
        • Files occupy contiguous blocks.<br />
        • <strong>Advantage:</strong> Fast access.<br />
        • <strong>Disadvantage:</strong> External fragmentation and difficult resizing.<br /><br />

        <strong>Linked Allocation:</strong><br />
        • Each file is a linked list of disk blocks scattered anywhere.<br />
        • <strong>Advantage:</strong> No external fragmentation.<br />
        • <strong>Disadvantage:</strong> Sequential access is slow.<br /><br />

        <strong>Indexed Allocation:</strong><br />
        • Each file has an index block that holds pointers to all disk blocks.<br />
        • <strong>Advantage:</strong> Direct access to blocks.<br />
        • <strong>Disadvantage:</strong> Overhead of maintaining index blocks.
      </p>

      {/* Question 27 */}
      <h3 className="text-2xl font-semibold mb-4">Q9: Explain different directory structures (single-level, two-level, tree-structured, etc.).</h3>
      <p className="mb-8">
        <strong>Single-Level Directory:</strong><br />
        • One directory for all users.<br />
        • <strong>Disadvantage:</strong> Naming conflicts.<br /><br />

        <strong>Two-Level Directory:</strong><br />
        • Separate directory for each user.<br />
        • <strong>Advantage:</strong> Solves naming conflict.<br />
        • <strong>Disadvantage:</strong> Limited organization within user's directory.<br /><br />

        <strong>Tree-Structured Directory:</strong><br />
        • Hierarchical, allowing subdirectories.<br />
        • <strong>Advantage:</strong> Easy navigation, better organization.<br /><br />

        <strong>Other Structures:</strong><br />
        • <strong>Acyclic Graph:</strong> Files/directories can have multiple parents.<br />
        • <strong>General Graph:</strong> Allows complete sharing but needs garbage collection to prevent cycles.
      </p>

      {/* Question 28 */}
      <h3 className="text-2xl font-semibold mb-4">Q10: What are file access methods? Describe sequential, direct, and indexed access with examples.</h3>
      <p className="mb-8">
        <strong>Sequential Access:</strong><br />
        • Data accessed in order.<br />
        • Example: Playing an audio file.<br /><br />

        <strong>Direct Access:</strong><br />
        • Data accessed at any position.<br />
        • Example: Database systems accessing a specific record.<br /><br />

        <strong>Indexed Access:</strong><br />
        • Index built to access files.<br />
        • Example: Searching a word in a large dictionary where an index speeds up the search.
      </p>

      {/* Question 29 */}
      <h3 className="text-2xl font-semibold mb-4">Q11: Explain disk scheduling algorithms: FCFS, SSTF, SCAN, C-SCAN with examples.</h3>
      <p className="mb-8">
        <strong>FCFS (First-Come, First-Served):</strong><br />
        • Services requests in the order they arrive.<br />
        • <strong>Example:</strong> Requests 98, 183, 37 → Served in same order.<br /><br />

        <strong>SSTF (Shortest Seek Time First):</strong><br />
        • Picks the request closest to current head position.<br />
        • <strong>Advantage:</strong> Reduces seek time.<br />
        • <strong>Disadvantage:</strong> Starvation for distant requests.<br /><br />

        <strong>SCAN (Elevator Algorithm):</strong><br />
        • Moves towards one end, servicing requests, then reverses.<br />
        • <strong>Example:</strong> Like an elevator serving floors sequentially.<br /><br />

        <strong>C-SCAN (Circular SCAN):</strong><br />
        • Only services requests in one direction and returns to the beginning quickly.<br />
        • <strong>Advantage:</strong> Provides uniform wait time.
      </p>

      {/* Question 30 */}
      <h3 className="text-2xl font-semibold mb-4">Q12: Describe the structure and management of I/O systems in operating systems.</h3>
      <p className="mb-8">
        <strong>Structure:</strong><br />
        • Consists of I/O devices, device controllers, and device drivers.<br /><br />

        <strong>Management:</strong><br />
        • <strong>Buffering:</strong> Temporary storage during transfer.<br />
        • <strong>Spooling:</strong> Queueing I/O requests for slow devices like printers.<br />
        • <strong>Device Drivers:</strong> Provide interface between devices and OS.<br />
        • <strong>Interrupt Handling:</strong> Manage device-generated interrupts to prioritize I/O events.
      </p>
    </div>
  );
};

export default Chapter5_FileSystemDesign;
