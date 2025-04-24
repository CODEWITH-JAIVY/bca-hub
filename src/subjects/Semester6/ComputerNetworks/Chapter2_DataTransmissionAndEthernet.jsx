import React from 'react';

const Chapter2_DataTransmissionAndEthernet = () => {
    return (
        <div>
            <h2>Chapter 2: Data Transmission and Ethernet</h2>
            <p>
                <strong>Q1: What are the modes of data transmission?</strong>
                <br />
                A1: Modes include simplex, half-duplex, and full-duplex.
            </p>
            <p>
                <strong>Q2: What is simplex mode?</strong>
                <br />
                A2: In simplex mode, communication is unidirectional, meaning data can be transmitted in only one direction.
            </p>
            <p>
                <strong>Q3: What is half-duplex mode?</strong>
                <br />
                A3: In half-duplex mode, communication is bidirectional, but only one device can transmit data at a time.
            </p>
            <p>
                <strong>Q4: What is full-duplex mode?</strong>
                <br />
                A4: In full-duplex mode, communication is bidirectional, and both devices can transmit data simultaneously.
            </p>
            <p>
                <strong>Q5: What is Ethernet?</strong>
                <br />
                A5: Ethernet is a family of computer networking technologies commonly used in LANs, specifying the physical and data link layers.
            </p>
            <p>
                <strong>Q6: What is the Ethernet frame format?</strong>
                <br />
                A6: The Ethernet frame format includes preamble, destination MAC address, source MAC address, type/length, data, and frame check sequence (FCS).
            </p>
        </div>
    );
};

export default Chapter2_DataTransmissionAndEthernet;
