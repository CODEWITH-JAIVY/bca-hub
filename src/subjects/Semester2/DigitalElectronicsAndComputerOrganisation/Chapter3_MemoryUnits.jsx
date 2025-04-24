import React from 'react';

// Chapter3_MemoryUnits component: Comprehensive explanation of different types of computer memory, their functions, and the memory hierarchy.
const Chapter3_MemoryUnits = () => {
    return (
        <div className="p-4">
            {/* Chapter Title */}
            <h2 className="text-3xl font-bold mb-6">Chapter 3: Memory Units</h2>

            {/* Introduction */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                <p className="mb-4">
                    Computer memory is a crucial component of any computer system, responsible for storing data and instructions. This chapter delves into the various types of memory, their characteristics, and their roles in the memory hierarchy.
                </p>
            </section>

            {/* ROM (Read-Only Memory) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">ROM (Read-Only Memory)</h3>
                <p className="mb-4">
                    ROM is a type of <strong>non-volatile</strong> memory that retains its data even when power is turned off. It's primarily used to store firmware and boot instructions, which are essential for the computer to start up correctly.
                </p>
            </section>

            {/* PROM (Programmable ROM) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">PROM (Programmable ROM)</h3>
                <p className="mb-4">
                    PROM is a type of ROM that can be programmed <strong>once</strong> after it is manufactured. This is done using a special device called a PROM programmer. Once programmed, the data is permanently stored.
                </p>
            </section>

            {/* EPROM (Erasable Programmable ROM) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">EPROM (Erasable Programmable ROM)</h3>
                <p className="mb-4">
                    EPROM is a type of ROM that can be erased and reprogrammed multiple times. The erasure is typically done by exposing the EPROM chip to strong <strong>ultraviolet (UV) light</strong> for a certain period.
                </p>
            </section>

            {/* EEPROM (Electrically Erasable Programmable ROM) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">EEPROM (Electrically Erasable Programmable ROM)</h3>
                <p className="mb-4">
                    EEPROM is an advanced type of ROM that can be <strong>electrically erased and reprogrammed</strong> without removing it from the circuit. This is a significant advantage over EPROM, which requires UV light for erasure.
                </p>
            </section>

            {/* RAM (Random Access Memory) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">RAM (Random Access Memory)</h3>
                <p className="mb-4">
                    RAM is a type of <strong>volatile</strong> memory that stores data and instructions that the CPU is actively using. It loses its data when the power is turned off. RAM is critical for the fast operation of the computer.
                </p>
            </section>

            {/* SRAM (Static RAM) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">SRAM (Static RAM)</h3>
                <p className="mb-4">
                    SRAM is a type of RAM that stores data using flip-flops. It's faster and more reliable than DRAM, but also more expensive and consumes more power.
                </p>
                <p className="mb-4">
                    <strong>Properties:</strong>
                    <ul className="list-disc list-inside">
                        <li>Faster access times.</li>
                        <li>No need for refreshing.</li>
                        <li>Higher cost per bit.</li>
                        <li>Higher power consumption.</li>
                    </ul>
                </p>
                <p className="mb-4">
                    <strong>Advantages:</strong> Faster access times, no need for refreshing.
                </p>
                <p className="mb-4">
                    <strong>Disadvantages:</strong> Higher cost, higher power consumption.
                </p>
            </section>

            {/* DRAM (Dynamic RAM) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">DRAM (Dynamic RAM)</h3>
                <p className="mb-4">
                    DRAM is a type of RAM that stores data as an electric charge in capacitors. It needs to be periodically refreshed to maintain its data, hence the term "dynamic."
                </p>
                <p className="mb-4">
                    <strong>Properties:</strong>
                    <ul className="list-disc list-inside">
                        <li>Slower access times.</li>
                        <li>Needs to be periodically refreshed.</li>
                        <li>Lower cost per bit.</li>
                        <li>Lower power consumption.</li>
                    </ul>
                </p>
                <p className="mb-4">
                    <strong>Advantages:</strong> Lower cost, lower power consumption.
                </p>
                <p className="mb-4">
                    <strong>Disadvantages:</strong> Slower access times, needs refreshing.
                </p>
            </section>

            {/* Hard Disk Drive (HDD) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Hard Disk Drive (HDD)</h3>
                <p className="mb-4">
                    An HDD is a <strong>non-volatile</strong> secondary storage device that stores data magnetically on rotating platters. It's used for long-term data storage.
                </p>
            </section>

            {/* Floppy Disk */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Floppy Disk</h3>
                <p className="mb-4">
                    Floppy disks were an early form of removable storage, but they are now mostly obsolete due to their limited storage capacity and slower access times compared to modern storage options.
                </p>
            </section>

             {/* CD-ROM */}
             <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">CD-ROM</h3>
                <p className="mb-4">
                    CD-ROM stands for Compact Disc Read-Only Memory. It's a type of optical disc that stores data digitally. Data is read from a CD-ROM using a laser beam, which detects the reflections from the surface to interpret binary information.
                </p>
            </section>

            {/* Memory Hierarchy */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Memory Hierarchy</h3>
                <p className="mb-4">
                    The memory hierarchy is a system that organizes different types of memory in layers based on their speed, cost, and volatility.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Registers:</strong> Fastest, most expensive, and volatile memory directly inside the CPU.</li>
                    <li><strong>Cache:</strong> Fast, moderately expensive, and volatile memory used to store frequently accessed data.</li>
                    <li><strong>RAM:</strong> Moderate speed, moderately priced, and volatile memory used for active data.</li>
                    <li><strong>Secondary Storage (HDD, SSD):</strong> Slowest, cheapest, and non-volatile memory used for long-term data storage.</li>
                </ul>
            </section>
        </div>
    );
};

export default Chapter3_MemoryUnits;
