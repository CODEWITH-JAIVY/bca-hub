import React from 'react';

const Chapter5_DatabaseDesignAndSecurity = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-blue-600">
        Chapter 5: Database Design and Security
      </h2>

      {/* Introduction */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">Introduction</h3>
        <p>
          In this chapter, we'll explore the fundamental principles of database
          design and security, learning how to build robust and secure database
          systems.
        </p>
      </div>

      {/* Introduction to Database Design */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">
          Introduction to Database Design
        </h3>
        <p>
          <strong>Importance:</strong> Database design is crucial for creating
          efficient, reliable, and scalable systems.
        </p>
        <p>
          <strong>Goals:</strong> The goals include minimizing redundancy,
          ensuring data integrity, and optimizing performance.
        </p>
        <p>
          <strong>Characteristics of Good Design:</strong> A good design is
          flexible, scalable, and maintains data consistency.
        </p>
      </div>

      {/* Steps in Database Design */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">
          Steps in Database Design
        </h3>
        <div className="ml-6 space-y-2">
          {/* Requirements Analysis */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Requirements Analysis
            </h4>
            <p>
              <strong>Explanation:</strong> Gathering and documenting users'
              information needs and processing requirements.
            </p>
            <p>
              <strong>Process:</strong> Interviews, surveys, and document analysis
              are common techniques.
            </p>
            <p>
              <strong>Examples:</strong> "The system must store customer names and
              addresses," "Users must be able to search for products by
              category."
            </p>
          </div>
          {/* Conceptual Design */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Conceptual Design
            </h4>
            <p>
              <strong>Explanation:</strong> Creating a high-level model of the
              database, independent of implementation details.
            </p>
            <p>
              <strong>ER Diagrams:</strong> Entity-Relationship (ER) diagrams
              are often used to represent entities, attributes, and
              relationships.
            </p>
            <p>
              <strong>Examples:</strong> Entities (e.g., Customer, Product,
              Order), attributes (e.g., customerName, productID, orderDate),
              relationships (e.g., a Customer places an Order).
            </p>
          </div>
          {/* Logical Design */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Logical Design
            </h4>
            <p>
              <strong>Explanation:</strong> Translating the conceptual model
              into a specific database schema.
            </p>
            <p>
              <strong>Translation:</strong> Transforming entities into tables,
              attributes into columns, and relationships into foreign keys.
            </p>
            <p>
              <strong>Definitions:</strong> Tables are defined with columns,
              their data types, and relationships.
            </p>
            <p>
            <strong>Example:</strong>
                Table 'Customers' with columns 'CustomerID' (INT, Primary Key), 'CustomerName' (VARCHAR), 'CustomerEmail' (VARCHAR).
            </p>
          </div>
          {/* Physical Design */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Physical Design
            </h4>
            <p>
              <strong>Explanation:</strong> Deciding on the physical storage
              structures for the database.
            </p>
            <p>
              <strong>Storage:</strong> Includes file organization, disk
              allocation, and data compression.
            </p>
            <p>
              <strong>Index:</strong> Create index for better performance.
            </p>
            <p>
            <strong>Example:</strong>
                Creating an index on the 'CustomerName' column of the 'Customers' table to speed up searches.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction to Database Security */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">
          Introduction to Database Security
        </h3>
        <p>
          <strong>Definition:</strong> Database security involves protecting
          database systems from unauthorized access, modification, or deletion.
        </p>
        <p>
          <strong>Importance:</strong> Crucial for maintaining data
          confidentiality, integrity, and availability.
        </p>
        <p>
          <strong>Common Threats:</strong> Include unauthorized access, SQL
          injection, data breaches, and denial-of-service attacks.
        </p>
      </div>

      {/* Database Security Measures */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">
          Database Security Measures
        </h3>
        <div className="ml-6 space-y-2">
          {/* Access Control */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Access Control
            </h4>
            <p>
              <strong>Explanation:</strong> Limiting access to the database and
              its data.
            </p>
            <p>
              <strong>Methods:</strong> Role-Based Access Control (RBAC),
              Mandatory Access Control (MAC), Discretionary Access Control
              (DAC).
            </p>
          </div>
          {/* Authentication */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Authentication
            </h4>
            <p>
              <strong>Explanation:</strong> Verifying the identity of users
              accessing the database.
            </p>
            <p>
              <strong>Methods:</strong> Passwords, multi-factor
              authentication, biometric verification.
            </p>
          </div>
          {/* Authorization */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Authorization
            </h4>
            <p>
              <strong>Explanation:</strong> Determining what actions a user is
              allowed to perform.
            </p>
            <p>
              <strong>Process:</strong> Granting specific permissions based on
              roles or individual user accounts.
            </p>
          </div>
          {/* Encryption */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">Encryption</h4>
            <p>
              <strong>Explanation:</strong> Converting data into an unreadable
              format to protect it.
            </p>
            <p>
              <strong>Methods:</strong> Symmetric encryption, asymmetric
              encryption, data masking.
            </p>
          </div>
          {/* Auditing */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">Auditing</h4>
            <p>
              <strong>Explanation:</strong> Tracking and logging all database
              activities.
            </p>
            <p>
              <strong>Purpose:</strong> Helps monitor for suspicious activity and
              maintain compliance.
            </p>
          </div>
          {/* Backups and recovery */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">Backups and recovery</h4>
            <p>
              <strong>Explanation:</strong> Regularly backing up data and setting up the recovery process.
            </p>
          </div>
          {/* Firewall */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700">Firewall</h4>
            <p>
              <strong>Explanation:</strong> Use a firewall to protect the database.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">Conclusion</h3>
        <p>
          This chapter covered the essential steps in database design, from
          requirements gathering to physical implementation, and delved into
          various database security measures. Understanding these concepts is
          vital for creating reliable and secure database systems.
        </p>
        <p>
        Keep practicing to improve your database knowledge.
        </p>
      </div>
    </div>
  );
};

export default Chapter5_DatabaseDesignAndSecurity;
