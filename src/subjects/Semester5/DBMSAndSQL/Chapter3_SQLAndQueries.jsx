import React from 'react';

const Chapter3_SQLAndQueries = () => {
    return (
        <div>
            <h2>Chapter 3: SQL and Queries</h2>

            <section>
                <h3>Introduction</h3>
                <p>
                    In this chapter, we will cover SQL (Structured Query Language) and explore its different types of commands. SQL is the language used to manage and manipulate data in relational database management systems (RDBMS). We will focus on the most commonly used SQL commands, including Data Definition Language (DDL), Data Manipulation Language (DML), and Data Control Language (DCL).
                </p>
            </section>

            <section>
                <h3>1. What is SQL?</h3>
                <p>
                    SQL (Structured Query Language) is a standard programming language used to interact with relational databases. It allows you to perform a variety of operations like querying, inserting, updating, and deleting data in a database. SQL is widely used across industries for managing structured data.
                </p>
            </section>

            <section>
                <h3>2. Types of SQL Commands</h3>
                <p>
                    SQL commands can be categorized into three main types:
                </p>
                <ul>
                    <li><strong>DDL (Data Definition Language):</strong> Used to define the structure of the database. Common commands include CREATE, ALTER, and DROP.</li>
                    <li><strong>DML (Data Manipulation Language):</strong> Used to manipulate data within tables. Common commands include SELECT, INSERT, UPDATE, and DELETE.</li>
                    <li><strong>DCL (Data Control Language):</strong> Used to control access to the data within the database. Common commands include GRANT and REVOKE.</li>
                </ul>
            </section>

            <section>
                <h3>3. Data Definition Language (DDL)</h3>
                <p>
                    DDL commands are used to define or modify the structure of the database, including creating, altering, and deleting tables and databases.
                </p>
                <ul>
                    <li><strong>CREATE TABLE:</strong> Used to create a new table in the database.</li>
                    <li><strong>ALTER TABLE:</strong> Used to modify an existing table, such as adding or removing columns.</li>
                    <li><strong>DROP TABLE:</strong> Used to delete an existing table.</li>
                </ul>
                <p><strong>Example:</strong></p>
                <pre>
                    CREATE TABLE Employees (
                        EmployeeID INT PRIMARY KEY,
                        FirstName VARCHAR(50),
                        LastName VARCHAR(50),
                        Age INT
                    );
                </pre>
                <p>This creates a new table named 'Employees' with columns for EmployeeID, FirstName, LastName, and Age.</p>
            </section>

            <section>
                <h3>4. Data Manipulation Language (DML)</h3>
                <p>
                    DML commands are used to manage the data within the database. The main DML commands include SELECT, INSERT, UPDATE, and DELETE.
                </p>

                <h4>4.1 SELECT Statement</h4>
                <p>
                    The SELECT statement is used to retrieve data from one or more tables. It is the most commonly used SQL command.
                </p>
                <pre>
                    SELECT column1, column2, ...
                    FROM table_name
                    WHERE condition;
                </pre>
                <p><strong>Example:</strong></p>
                <pre>
                    SELECT FirstName, LastName FROM Employees WHERE Age { ' > '} 30;
                </pre>
                <p>This query retrieves the FirstName and LastName of all employees whose age is greater than 30.</p>

                <h4>4.2 INSERT Statement</h4>
                <p>
                    The INSERT statement is used to insert new rows into a table.
                </p>
                <pre>
                    INSERT INTO table_name (column1, column2, ...)
                    VALUES (value1, value2, ...);
                </pre>
                <p><strong>Example:</strong></p>
                <pre>
                    INSERT INTO Employees (EmployeeID, FirstName, LastName, Age)
                    VALUES (1, 'John', 'Doe', 35);
                </pre>
                <p>This query adds a new employee record to the 'Employees' table.</p>

                <h4>4.3 UPDATE Statement</h4>
                <p>
                    The UPDATE statement is used to modify existing data in a table.
                </p>
                <pre>
                    UPDATE table_name
                    SET column1 = value1, column2 = value2, ...
                    WHERE condition;
                </pre>
                <p><strong>Example:</strong></p>
                <pre>
                    UPDATE Employees
                    SET Age = 36
                    WHERE EmployeeID = 1;
                </pre>
                <p>This query updates the age of the employee with EmployeeID 1 to 36.</p>

                <h4>4.4 DELETE Statement</h4>
                <p>
                    The DELETE statement is used to delete data from a table.
                </p>
                <pre>
                    DELETE FROM table_name
                    WHERE condition;
                </pre>
                <p><strong>Example:</strong></p>
                <pre>
                    DELETE FROM Employees
                    WHERE EmployeeID = 1;
                </pre>
                <p>This query deletes the employee record with EmployeeID 1.</p>
            </section>

            <section>
                <h3>5. Data Control Language (DCL)</h3>
                <p>
                    DCL commands are used to control access to data in the database. The primary DCL commands are GRANT and REVOKE.
                </p>
                <ul>
                    <li><strong>GRANT:</strong> Used to give specific privileges to a user or role.</li>
                    <li><strong>REVOKE:</strong> Used to remove specific privileges from a user or role.</li>
                </ul>
                <p><strong>Example:</strong></p>
                <pre>
                    GRANT SELECT, INSERT ON Employees TO user_name;
                </pre>
                <p>This grants the user named 'user_name' the ability to select and insert data into the 'Employees' table.</p>
            </section>

            <section>
                <h3>6. Combining Queries</h3>
                <p>
                    You can combine multiple SQL commands to perform more complex operations. Some commonly used techniques include:
                </p>
                <ul>
                    <li><strong>JOIN:</strong> Combines rows from two or more tables based on a related column.</li>
                    <li><strong>GROUP BY:</strong> Groups rows that have the same values into summary rows, like "Total Sales" or "Average Age".</li>
                    <li><strong>HAVING:</strong> Filters records that work with GROUP BY.</li>
                </ul>
                <p><strong>Example (JOIN):</strong></p>
                <pre>
                    SELECT Employees.FirstName, Employees.LastName, Orders.OrderDate
                    FROM Employees
                    JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID;
                </pre>
                <p>This query retrieves the first and last names of employees along with the order date from the 'Orders' table.</p>
            </section>

            <section>
                <h3>Conclusion</h3>
                <p>
                    In this chapter, we’ve introduced SQL and its key commands for managing and manipulating data in a relational database. We covered SQL's main categories, including DDL, DML, and DCL, and provided examples of how to use SQL to interact with data. Understanding SQL is essential for working with databases, and practice is key to mastering it. Keep experimenting with queries to reinforce your understanding!
                </p>
            </section>
        </div>
    );
};

export default Chapter3_SQLAndQueries;
