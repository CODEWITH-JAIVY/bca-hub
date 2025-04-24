import React from 'react';

const Chapter3_RoutingAndIPNetworking = () => {
    return (
        <div>
            <h2>Chapter 3: Routing and IP Networking</h2>
            <p>
                <strong>Q1: What is routing in computer networks?</strong>
                <br />
                A1: Routing is the process of selecting the best path for data packets to travel from source to destination in a network.
            </p>
            <p>
                <strong>Q2: What are the types of routing algorithms?</strong>
                <br />
                A2: Types include distance-vector routing and link-state routing.
            </p>
            <p>
                <strong>Q3: What is distance-vector routing?</strong>
                <br />
                A3: Distance-vector routing algorithms maintain a table of distances to all other nodes in the network and periodically exchange this information with neighbors.
            </p>
            <p>
                <strong>Q4: What is link-state routing?</strong>
                <br />
                A4: Link-state routing algorithms create a complete map of the network topology and use this map to determine the shortest path to each destination.
            </p>
            <p>
                <strong>Q5: What is IP addressing?</strong>
                <br />
                A5: IP addressing is a logical addressing scheme used to identify devices on a network, allowing them to communicate with each other.
            </p>
            <p>
                <strong>Q6: What are the classes of IP addresses?</strong>
                <br />
                A6: Classes include Class A, Class B, Class C, Class D, and Class E.
            </p>
        </div>
    );
};

export default Chapter3_RoutingAndIPNetworking;
