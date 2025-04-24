import React from 'react';

const Chapter2_DataTransmissionAndEthernet = () => {
    return (
        <div>
            <h2>Chapter 2: Data Transmission and Ethernet</h2>

            <section>
                <h3>1. What are the modes of data transmission?</h3>
                <p>
                    A1: There are three main modes of data transmission:
                    <ul>
                        <li><strong>Simplex:</strong> One-way transmission.</li>
                        <li><strong>Half-duplex:</strong> Two-way transmission, but not simultaneously.</li>
                        <li><strong>Full-duplex:</strong> Two-way transmission that happens simultaneously.</li>
                    </ul>
                </p>
            </section>

            <section>
                <h3>2. What is simplex mode?</h3>
                <p>
                    A2: In <strong>simplex mode</strong>, communication is unidirectional, meaning data flows in only one direction. One device sends data, and the other only receives. An example of simplex mode is a traditional TV broadcast, where the transmission occurs only in one direction, from the broadcaster to the viewer.
                </p>
            </section>

            <section>
                <h3>3. What is half-duplex mode?</h3>
                <p>
                    A3: In <strong>half-duplex mode</strong>, communication is bidirectional, but not simultaneously. This means that both devices can transmit and receive data, but only one device can transmit at any given time. An example is a walkie-talkie, where one person speaks, and the other listens, but they can't talk at the same time.
                </p>
            </section>

            <section>
                <h3>4. What is full-duplex mode?</h3>
                <p>
                    A4: In <strong>full-duplex mode</strong>, communication is bidirectional, meaning both devices can transmit data simultaneously in both directions. This mode allows for continuous and concurrent communication between devices. An example of full-duplex mode is a telephone call, where both parties can speak and listen at the same time.
                </p>
            </section>

            <section>
                <h3>5. What is Ethernet?</h3>
                <p>
                    A5: <strong>Ethernet</strong> is a family of networking technologies commonly used in local area networks (LANs). It is a protocol that defines the physical and data link layers of the OSI (Open Systems Interconnection) model, specifically responsible for the transmission of data across the network. Ethernet allows devices like computers, routers, and printers to communicate within a local network, typically through wired connections like coaxial cables, twisted pair cables, or fiber optics.
                </p>
            </section>

            <section>
                <h3>6. What is the Ethernet frame format?</h3>
                <p>
                    A6: The <strong>Ethernet frame format</strong> is a standardized way that data is packaged for transmission over an Ethernet network. It consists of several fields:
                    <ul>
                        <li><strong>Preamble:</strong> A 7-byte field that helps devices synchronize and prepares the network for the data transmission.</li>
                        <li><strong>Destination MAC Address:</strong> A 6-byte address specifying the recipient device on the network.</li>
                        <li><strong>Source MAC Address:</strong> A 6-byte address specifying the sender device.</li>
                        <li><strong>Type/Length:</strong> A field that specifies either the length of the data field or the type of protocol used, such as IPv4 or IPv6.</li>
                        <li><strong>Data:</strong> The actual data being transmitted, typically in the form of a message or packet.</li>
                        <li><strong>Frame Check Sequence (FCS):</strong> A 4-byte field used for error checking, ensuring the integrity of the transmitted data by allowing the receiver to detect errors.</li>
                    </ul>
                </p>
            </section>
        </div>
    );
};

export default Chapter2_DataTransmissionAndEthernet;
