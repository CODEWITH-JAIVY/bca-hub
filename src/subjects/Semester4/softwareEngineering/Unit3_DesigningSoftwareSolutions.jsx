import React from 'react';


// Reusable Section Component
const Section = ({ title, children }) => (
    <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        {children}
    </section>
);

const Unit3_DesigningSoftwareSolutions = () => {
    return (
        <div className="max-w-5xl mx-auto p-5">
            <h2 className="text-3xl font-semibold text-center mb-5">Unit III: Designing Software Solutions</h2>

            {/* Refining the Software Specification Section */}
            <Section title="Refining the Software Specification">
                <p>
                 
                    Refining the software specification involves transforming the detailed requirements gathered during the analysis phase into a structured and coherent design. This is where we translate the "what" into the "how." This process involves breaking down complex requirements into manageable design components.
                </p>
            </Section>

            {/* Fundamental Design Concepts Section */}
            <Section title="Fundamental Design Concepts">
                <ul>
                    <li className="mb-2">
                        <strong className="font-medium">Abstraction:</strong> Focus on what an object does rather than how it does it. Abstraction simplifies the system by hiding complex implementation details and showing only essential information.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Modularity:</strong> Breaking down the software into smaller, manageable parts or modules. Each module should be responsible for a specific function, making it easier to develop, test, and maintain.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Refinement:</strong> Gradually adding more detail to the design. Starting with high-level design elements and progressively adding finer details to them.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Software Architecture:</strong> The high-level structure of the software. This includes identifying major components, their interfaces, and how they interact with each other. Common architectural patterns include client-server, microservices, and layered architectures.
                    </li>
                </ul>
            </Section>

            {/* Data, Architectural, and Procedural Design Section */}
            <Section title="Data, Architectural, and Procedural Design">
                <ul>
                    <li className="mb-2">
                        <strong className="font-medium">Data Design:</strong> This involves determining how data will be organized and structured within the system. It often involves database design, deciding on data types, relationships, and constraints.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Architectural Design:</strong> This focuses on the overall system layout and the relationships between its components. Examples include client-server setups, microservices architectures, or event-driven systems.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Procedural Design:</strong> This level of design specifies how each function or process operates internally. It involves detailed steps and algorithms that show how the functionality is achieved.
                    </li>
                </ul>
            </Section>

            {/* Blueprint Methodology Section */}
            <Section title="Blueprint Methodology">
                <p>
                    Graphical representations are vital in designing software solutions. They help in visualizing and documenting various aspects of the system.
                </p>
                <ul>
                    <li className="mb-2">
                        <strong className="font-medium">DFD (Data Flow Diagrams):</strong> These diagrams show how data moves through the system, illustrating the flow of information between different processes.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">ERD (Entity Relationship Diagrams):</strong> These are used to depict relationships between different entities within the database, showing how data is structured and interconnected.
                    </li>
                </ul>
            </Section>

            {/* Object-Oriented Design Paradigm Section */}
            <Section title="Object-Oriented Design Paradigm">
                <p>
                    This paradigm focuses on modeling the software around real-world objects, which have both data and behavior.
                </p>
                <ul>
                    <li className="mb-2">
                        <strong className="font-medium">Class:</strong> A blueprint or template for creating objects.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Object:</strong> An instance of a class, containing data and methods.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Inheritance:</strong> Allows a class to inherit properties and methods from another class.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Polymorphism:</strong> The ability of an object to take on many forms. Methods can be implemented differently in different classes.
                    </li>
                </ul>
            </Section>

            {/* Creating Design Document Section */}
            <Section title="Creating a Design Document">
                <p>
                    A design document summarizes the system architecture, design patterns, and module details. It serves as a detailed guide for implementation and should be reviewed for:
                </p>
                <ul>
                    <li className="mb-2">
                        <strong className="font-medium">Conformance to requirements:</strong> Ensuring that the design meets all the specified requirements.
                    </li>
                    <li className="mb-2">
                        <strong className="font-medium">Quality attributes:</strong> Confirming that the design supports quality attributes like scalability, flexibility, and maintainability.
                    </li>
                </ul>
            </Section>
        </div>
    );
};

export default Unit3_DesigningSoftwareSolutions;

