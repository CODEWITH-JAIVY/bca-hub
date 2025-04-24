import React from 'react';

const Chapter4_WirelessAndSecurity = () => {
    return (
        <div>
            <h2>Chapter 4: Wireless Networks and Security</h2>

            <section>
                <h3>1. What is a wireless network?</h3>
                <p>
                    A1: A <strong>wireless network</strong> is a type of computer network that uses wireless data connections to communicate between network nodes, such as computers, routers, and other devices. Wireless networks enable devices to connect to the network without the need for physical cables, typically using radio frequency signals.
                    - The most common types of wireless networks include Wi-Fi, Bluetooth, and cellular networks. Wireless networks have become a central part of modern communication, providing flexibility and mobility for users and devices.
                </p>
            </section>

            <section>
                <h3>2. What are the different types of wireless networks?</h3>
                <p>
                    A2: Wireless networks can be classified into various types based on the technology they use and their application. Common types include:
                    <ul>
                        <li><strong>Wi-Fi (IEEE 802.11):</strong> This is the most common type of wireless network used for local area networks (LANs). It allows devices to connect to the internet or share data over short to medium distances, typically in homes, offices, and public spaces.</li>
                        <li><strong>Bluetooth:</strong> Bluetooth is a short-range wireless technology used for personal area networks (PANs). It is typically used for connecting devices like headphones, keyboards, and speakers to a primary device such as a smartphone or computer.</li>
                        <li><strong>Cellular Networks:</strong> These networks are used by mobile phones and other mobile devices to access data services over long distances, using radio towers and base stations. Cellular networks use technologies like 4G, 5G, etc., to provide internet access and voice communication.</li>
                    </ul>
                </p>
            </section>

            <section>
                <h3>3. What is Wi-Fi?</h3>
                <p>
                    A3: <strong>Wi-Fi</strong> (short for Wireless Fidelity) is a wireless networking technology that allows devices to connect to the internet or local networks using radio waves. Wi-Fi operates using the IEEE 802.11 family of standards, which define the technology for wireless local area networks (WLANs).
                    - Wi-Fi allows devices like smartphones, laptops, tablets, and other IoT devices to access high-speed internet without the need for physical cables.
                    - Wi-Fi networks can be secured using encryption protocols like WPA2 and WPA3 to ensure that the connection is private and data is protected.
                </p>
            </section>

            <section>
                <h3>4. What are the security threats in computer networks?</h3>
                <p>
                    A4: Computer networks are vulnerable to various security threats that can compromise the integrity, confidentiality, and availability of data. Some common threats include:
                    <ul>
                        <li><strong>Malware:</strong> Malicious software such as viruses, worms, trojans, and ransomware that can damage, steal, or manipulate data.</li>
                        <li><strong>Phishing:</strong> A form of social engineering where attackers trick users into revealing sensitive information like usernames, passwords, or credit card details, typically through fake emails or websites.</li>
                        <li><strong>Eavesdropping:</strong> The unauthorized interception of data being transmitted over a network. Attackers can capture and analyze data like login credentials, personal information, and confidential communications.</li>
                        <li><strong>Denial-of-Service (DoS) Attacks:</strong> An attack that aims to overwhelm a network or server with a flood of traffic, making it unavailable to legitimate users. Distributed Denial-of-Service (DDoS) attacks involve multiple systems attacking a target simultaneously.</li>
                    </ul>
                </p>
            </section>

            <section>
                <h3>5. What are the common security measures for computer networks?</h3>
                <p>
                    A5: To protect computer networks from security threats, various security measures and techniques can be employed. Some common measures include:
                    <ul>
                        <li><strong>Firewalls:</strong> Firewalls are security systems that monitor and control incoming and outgoing network traffic based on predetermined security rules. They act as barriers between trusted and untrusted networks, preventing unauthorized access to or from a network.</li>
                        <li><strong>Intrusion Detection Systems (IDS):</strong> IDS monitor network traffic for signs of malicious activity or policy violations. When suspicious activity is detected, the system alerts administrators and may take action to block the threat.</li>
                        <li><strong>Encryption:</strong> Encryption is the process of converting data into a form that is unreadable to unauthorized users. It ensures that even if data is intercepted, it remains protected. Common encryption protocols include SSL/TLS for securing web traffic and WPA2 for Wi-Fi security.</li>
                        <li><strong>Access Controls:</strong> Access controls define who can access specific resources on a network and what actions they are allowed to perform. This can include methods like password authentication, multi-factor authentication (MFA), and role-based access control (RBAC).</li>
                    </ul>
                </p>
            </section>
        </div>
    );
};

export default Chapter4_WirelessAndSecurity;
