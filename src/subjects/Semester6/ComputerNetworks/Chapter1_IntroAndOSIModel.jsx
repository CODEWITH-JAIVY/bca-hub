import React from 'react';

const Chapter1_IntroAndOSIModel = () => {
    return (
        <div>
            <h2>Chapter 1: Introduction to Computer Networks and OSI Model</h2>
            <p>
                <strong>Q1: What is a computer network?</strong>
                <br />
                A1: A computer network is a set of interconnected computing devices that can communicate and share resources, such as files, printers, and Internet access.
            </p>
            <p>
                <strong>Q2: What are the types of computer networks?</strong>
                <br />
                A2: Types include Local Area Network (LAN), Wide Area Network (WAN), and Metropolitan Area Network (MAN).
            </p>
            <p>
                <strong>Q3: What is the OSI model?</strong>
                <br />
                A3: The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven abstraction layers.
            </p>
            <p>
                <strong>Q4: What are the layers of the OSI model?</strong>
                <br />
                A4: The layers are Physical, Data Link, Network, Transport, Session, Presentation, and Application.
            </p>
            <p>
                <strong>Q5: What is the function of the Physical layer?</strong>
                <br />
                A5: The Physical layer transmits raw bit streams over a physical medium.
            </p>
            <p>
                <strong>Q6: What is the function of the Data Link layer?</strong>
                <br />
                A6: The Data Link layer provides error-free transmission of data frames between two directly connected nodes.
            </p>
            <p>
                <strong>Q7: What is the function of the Network layer?</strong>
                <br />
                A7: The Network layer is responsible for the routing and forwarding of data packets across networks, ensuring that data reaches its destination.
            </p>
            <p>
                <strong>Q8: What is the function of the Transport layer?</strong>
                <br />
                A8: The Transport layer ensures reliable data transmission between devices, including error recovery, flow control, and segmentation of data into smaller units.
            </p>
            <p>
                <strong>Q9: What is the function of the Session layer?</strong>
                <br />
                A9: The Session layer manages communication sessions between applications, allowing for the opening, closing, and managing of connections.
            </p>
            <p>
                <strong>Q10: What is the function of the Presentation layer?</strong>
                <br />
                A10: The Presentation layer translates data into a format that the application can understand, handling tasks such as encryption, compression, and translation of data formats.
            </p>
            <p>
                <strong>Q11: What is the function of the Application layer?</strong>
                <br />
                A11: The Application layer provides network services directly to end-user applications, such as email, file transfer, and web browsing.
            </p>
        </div>
    );
};

export default Chapter1_IntroAndOSIModel;
