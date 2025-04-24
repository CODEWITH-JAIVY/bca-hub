'use client';
import React from 'react';

const Chapter6_ExcelAndDatabaseBasics = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 6: Excel and Database Basics</h2>

      {/* Introduction to Microsoft Excel */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Microsoft Excel</h3>
        <p className="mb-4">
          Microsoft Excel is a spreadsheet software used for organizing, analyzing, and storing data in tabular form.
        </p>

        <p className="mb-4">
          <strong>Q1: What are the basic components of an Excel worksheet?</strong>
          <br />
          A1: The basic components include cells, rows, columns, and sheets.
        </p>

        <p className="mb-4">
          <strong>Q2: How do you enter data and formulas in Excel?</strong>
          <br />
          A2: Enter data directly into cells, and use formulas starting with an equals sign (=) to perform calculations.
        </p>

        <p className="mb-4">
          <strong>Q3: How do you use functions in Excel?</strong>
          <br />
          A3: Excel functions are predefined formulas that perform specific calculations, such as SUM, AVERAGE, and COUNT.
        </p>
      </section>

      {/* Introduction to Database */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Database</h3>
        <p className="mb-4">
          A database is an organized collection of structured information or data, typically stored electronically in a computer system.
        </p>

        <p className="mb-4">
          <strong>Q4: What are the basic components of a database?</strong>
          <br />
          A4: Basic components include tables, records, fields, and keys.
        </p>

        <p className="mb-4">
          <strong>Q5: How do you create a simple database table?</strong>
          <br />
          A5: Define the fields (columns) with appropriate data types, set a primary key, and enter data into records (rows).
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Describe the key components of an Excel worksheet.</li>
          <li>Explain how to use formulas to perform calculations in Excel.</li>
          <li>What are some common Excel functions and their purposes?</li>
          <li>Describe the process of creating a chart in Excel.</li>
          <li>What is a database, and why is it important?</li>
          <li>Explain the role of tables, records, and fields in a database.</li>
          <li>How do you define a primary key in a database table?</li>
          <li>Describe the steps to create a simple database using Microsoft Access or a similar tool.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter6_ExcelAndDatabaseBasics;
