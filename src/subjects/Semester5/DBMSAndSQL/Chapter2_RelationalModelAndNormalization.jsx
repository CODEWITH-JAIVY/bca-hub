import React from 'react';

const RelationalModelAndNormalization = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Relational Model and Normalization</h1>

            {/* Introduction */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Introduction to the Relational Model and Normalization</h2>
                <p className="mb-2">
                    Welcome to the world of relational databases! In this chapter, we will explore the fundamentals of the relational model and the important concept of normalization.
                </p>
                <p className="mb-2">
                The Relational Model provides a structured and organized way to store and manage data. It is a model based on the concept of tables.
                </p>
                <p className="mb-2">
                Normalization, on the other hand, is a crucial process for improving the design of your database.
                </p>
                <p className="mb-2">
                By understanding these concepts, you will be well-equipped to design efficient and robust databases.
                </p>
                <p className="mb-2">
                    <strong>What we will learn in this chapter:</strong>
                    <ul>
                        <li>What is the Relational Model?</li>
                        <li>What are the components of the Relational Model?</li>
                        <li>What are the keys in the Relational Model?</li>
                        <li>What is normalization?</li>
                        <li>What are the normal forms?</li>
                    </ul>
                </p>
                <p className="mb-2">
                Before diving into the intricacies of normalization, let's first establish a solid understanding of the relational model.
                </p>
            </section>

            {/* Relational Model */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction to the Relational Model</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Definition</h3>
                    <p className="mb-2">
                        The relational model is a method of structuring data in a database using relations, which are represented as tables. This model was introduced by E.F. Codd in 1970. It's based on set theory and predicate logic.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Purpose</h3>
                    <p className="mb-2">
                        The relational model provides a simple, intuitive, and consistent method for storing and accessing data. Its primary purposes are:
                        <ul>
                            <li>Data Organization: Organizing data into logical tables.</li>
                            <li>Data Integrity: Ensuring data accuracy and consistency.</li>
                            <li>Data Access: Facilitating efficient data retrieval and manipulation using SQL.</li>
                        </ul>
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Advantages</h3>
                    <ul className="list-disc list-inside ml-4">
                        <li><strong>Simplicity:</strong> Easy to understand and work with.</li>
                        <li><strong>Flexibility:</strong> Allows for complex queries and data manipulation.</li>
                        <li><strong>Data Integrity:</strong> Enforces data integrity through constraints.</li>
                        <li><strong>Scalability:</strong> Can handle large amounts of data efficiently.</li>
                        <li><strong>Consistency:</strong> Ensures data consistency and accuracy.</li>
                    </ul>
                </div>
            </section>

            {/* Key Components */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Key Components of the Relational Model</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Tables</h3>
                    <p className="mb-2">
                        Tables are the primary structures in the relational model. They are used to store data about a specific entity, like customers, products, or orders. A table is made up of rows and columns.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Attributes (Columns)</h3>
                    <p className="mb-2">
                        Attributes represent the properties or characteristics of the entity. Each column in a table corresponds to an attribute. For example, in a "Customers" table, attributes might include "CustomerID," "Name," "Address," and "Email."
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Tuples (Rows)</h3>
                    <p className="mb-2">
                        Tuples are the individual records in a table. Each row in a table represents a single tuple, containing the values for each attribute. For example, one row in a "Customers" table would represent one customer.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Domains</h3>
                    <p className="mb-2">
                        Domains define the set of permissible values for an attribute. They ensure data integrity by restricting the values that can be entered into a column. For example, the domain for a "CustomerID" attribute might be "positive integers," while the domain for a "Name" attribute might be "strings of up to 50 characters."
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Schemas</h3>
                    <p className="mb-2">
                       A schema is the logical structure of the database, defining the tables, attributes, and relationships within the database. It specifies the organization of data and the constraints to ensure data integrity.
                    </p>
                </div>
            </section>

            {/* Keys */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Keys in the Relational Model</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Primary Key</h3>
                    <p className="mb-2">
                        A primary key is an attribute or a set of attributes that uniquely identifies each tuple in a table.
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li><strong>Uniqueness:</strong> Each value must be unique.</li>
                        <li><strong>Non-Null:</strong> Cannot be null.</li>
                    </ul>
                    <p className="mt-2">
                        <strong>Example:</strong> In a "Customers" table, "CustomerID" could be a primary key.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Foreign Key</h3>
                    <p className="mb-2">
                        A foreign key is an attribute in one table that refers to the primary key in another table. It establishes a link between two tables.
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li><strong>Referential Integrity:</strong> Ensures that the relationship between the tables is valid.</li>
                    </ul>
                    <p className="mt-2">
                        <strong>Example:</strong> In an "Orders" table, "CustomerID" might be a foreign key referencing the "Customers" table.
                    </p>
                    <p className="mt-2">
                    <strong>How to define foreign key:</strong>
                    To define a foreign key, you need to specify the column in the current table that will act as the foreign key and the primary key column in the referenced table.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Candidate Key</h3>
                    <p className="mb-2">
                        A candidate key is any attribute or set of attributes that could serve as the primary key. It uniquely identifies each tuple.
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li><strong>Uniqueness:</strong> Each value must be unique.</li>
                        <li><strong>Minimality:</strong> No proper subset can be a candidate key.</li>
                    </ul>
                    <p className="mt-2">
                        <strong>Example:</strong> In a "Customers" table, "CustomerID" and "Email" might both be candidate keys.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Composite Key</h3>
                    <p className="mb-2">
                        A composite key is a key composed of two or more attributes that, together, uniquely identify a tuple.
                    </p>
                    <p className="mt-2">
                        <strong>Example:</strong> In a "OrderItems" table, "OrderID" and "ProductID" might form a composite key.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Super Key</h3>
                    <p className="mb-2">
                    A super key is any set of attributes that uniquely identifies a row within a table.
                    </p>
                    
                </div>
            </section>

            {/* Normalization */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Introduction to Normalization</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Definition</h3>
                    <p className="mb-2">
                        Normalization is the process of organizing the columns and tables of a relational database to minimize data redundancy and dependency. It involves dividing large tables into smaller, related tables and defining relationships between them.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Purpose</h3>
                    <p className="mb-2">
                        The purpose of normalization is to:
                        <ul>
                            <li>Reduce Data Redundancy: Minimize the repetition of data.</li>
                            <li>Improve Data Integrity: Ensure data is accurate and consistent.</li>
                            <li>Simplify Data Modification: Make it easier to add, update, and delete data.</li>
                        </ul>
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Advantages</h3>
                    <ul className="list-disc list-inside ml-4">
                        <li><strong>Reduced Data Redundancy:</strong> Less duplicated data.</li>
                        <li><strong>Improved Data Integrity:</strong> More consistent and accurate data.</li>
                        <li><strong>Better Data Organization:</strong> Data is stored in a logical manner.</li>
                        <li><strong>Easier Maintenance:</strong> Easier to modify and maintain data.</li>
                        <li><strong>Efficient Queries:</strong> Faster and more efficient data retrieval.</li>
                    </ul>
                </div>
            </section>

            {/* Normal Forms */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Normal Forms</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">First Normal Form (1NF)</h3>
                    <p className="mb-2">
                        A table is in 1NF if it contains only atomic values (single values) and has no repeating groups.
                    </p>
                    <p className="mt-2">
                        <strong>Example:</strong>
                    </p>
                    <p>
                        Consider a table that has a column named "PhoneNumbers" that contains multiple phone numbers for each customer.
                    </p>
                    <p>
                        To convert it to 1NF, you create a separate row for each phone number.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Second Normal Form (2NF)</h3>
                    <p className="mb-2">
                        A table is in 2NF if it is in 1NF and all non-key attributes are fully functionally dependent on the entire primary key.
                    </p>
                    <p className="mt-2">
                        <strong>Example:</strong>
                    </p>
                    <p>
                    Consider a table with a composite primary key "OrderID, ProductID" and other attributes "ProductName, OrderDate, Quantity". The "ProductName" depends only on "ProductID". That's why, we should decompose it into two tables: "OrderItems(OrderID, ProductID, Quantity)" and "Products(ProductID, ProductName)".
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Third Normal Form (3NF)</h3>
                    <p className="mb-2">
                        A table is in 3NF if it is in 2NF and all non-key attributes are non-transitively dependent on the primary key.
                    </p>
                    <p className="mt-2">
                        <strong>Example:</strong>
                    </p>
                    <p>
                    Consider a table "Customers" with attributes: "CustomerID, CustomerName, City, Country". If there is a dependency "City → Country", that is, the country depends on the city. We need to decompose it into two tables: "Customers(CustomerID, CustomerName, City)" and "CityCountry(City, Country)".
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Boyce-Codd Normal Form (BCNF)</h3>
                    <p className="mb-2">
                    BCNF is a stricter version of 3NF. A table is in BCNF if every determinant is a candidate key.
                    </p>
                    <p className="mt-2">
                    <strong>Example:</strong>
                    </p>
                    <p>
                    Consider a table "CourseEnrollment" with the attributes: "StudentID, CourseID, Instructor". The combination of "StudentID, CourseID" is a candidate key and "Instructor" only depend on the "CourseID". That's why we must decompose it into two tables: "CourseEnrollment (StudentID, CourseID)" and "CourseInstructor(CourseID, Instructor)".
                    </p>
                </div>
            </section>

            {/* Conclusion */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                <p className="mb-2">
                    In this chapter, we explored the fundamental concepts of the relational model and normalization. We learned how data is organized into tables, the importance of keys, and how normalization helps to improve the design of databases.
                </p>
                <p className="mb-2">
                The Relational Model provides a structured and logical approach to organizing data. It ensures the accuracy and consistency of data.
                </p>
                <p className="mb-2">
                Normalization improves the organization and integrity of your database.
                </p>
                <p className="mb-2">
                    By mastering these principles, you'll be able to create efficient, reliable, and scalable databases for any application.
                </p>
                <p className="mb-2">
                    Continue practicing with more examples and scenarios to become proficient in these topics.
                </p>
            </section>
        </div>
    );
};

export default RelationalModelAndNormalization;