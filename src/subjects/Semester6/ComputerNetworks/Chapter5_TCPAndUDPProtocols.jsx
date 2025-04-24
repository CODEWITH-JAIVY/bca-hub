import React from 'react';

const Chapter5_TCPAndUDPProtocols = () => {
    return (
        <div>
            <h2>Chapter 5: TCP and UDP Protocols</h2>
            <p>
                <strong>Q1: What are TCP and UDP?</strong>
                <br />
                A1: TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are transport layer protocols used for transmitting data over the Internet.
            </p>
            <p>
                <strong>Q2: What is TCP?</strong>
                <br />
                A2: TCP is a connection-oriented protocol that provides reliable, ordered, and error-checked delivery of data.
            </p>
            <p>
                <strong>Q3: What are the features of TCP?</strong>
                <br />
                A3: Features include reliable delivery, flow control, congestion control, and connection-oriented communication.
            </p>
            <p>
                <strong>Q4: What is UDP?</strong>
                <br />
                A4: UDP is a connectionless protocol that provides a fast and simple way to transmit data, but without guarantees of reliability or order.
            </p>
            <p>
                <strong>Q5: What are the features of UDP?</strong>
                <br />
                A5: Features include low overhead, fast transmission, and connectionless communication.
            </p>
            <p>
                <strong>Q6: What are the differences between TCP and UDP?</strong>
                <br />
                A6: TCP provides reliability, order, and error checking, while UDP is faster but less reliable.
            </p>
        </div>
    );
};

export default Chapter5_TCPAndUDPProtocols;
