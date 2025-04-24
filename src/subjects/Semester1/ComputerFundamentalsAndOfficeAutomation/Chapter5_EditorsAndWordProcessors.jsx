'use client';
import React from 'react';

const Chapter5_EditorsAndWordProcessors = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 5: Editors and Word Processors</h2>

      {/* Introduction to Text Editors */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Text Editors</h3>
        <p className="mb-4">
          A text editor is a software application used for creating, editing, and saving plain text files.
        </p>

        <p className="mb-4">
          <strong>Q1: What are some common text editors?</strong>
          <br />
          A1: Examples include Notepad, Notepad++, Sublime Text, and Visual Studio Code.
        </p>
      </section>

      {/* Introduction to Word Processors */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Word Processors</h3>
        <p className="mb-4">
          A word processor is a software application used for creating, editing, formatting, and printing documents.
        </p>

        <p className="mb-4">
          <strong>Q2: What are some common word processors?</strong>
          <br />
          A2: Examples include Microsoft Word, Google Docs, and LibreOffice Writer.
        </p>
      </section>

      {/* Formatting Text */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Formatting Text</h3>
        <p className="mb-4">
          <strong>Q3: How do you format text in a word processor?</strong>
          <br />
          A3: Use the formatting tools to change font, size, color, alignment, and add styles like bold, italics, and underline.
        </p>
      </section>

      {/* Inserting Images and Tables */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Inserting Images and Tables</h3>
        <p className="mb-4">
          <strong>Q4: How do you insert images and tables in a word processor?</strong>
          <br />
          A4: Use the Insert menu to add images from files or clip art, and create tables with specified rows and columns.
        </p>
      </section>

      {/* Spell Check and Grammar Check */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Spell Check and Grammar Check</h3>
        <p className="mb-4">
          <strong>Q5: How do you use spell check and grammar check in a word processor?</strong>
          <br />
          A5: Use the Review tab to access spell check and grammar check tools, which highlight and suggest corrections for errors.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Describe the key differences between a text editor and a word processor.</li>
          <li>Explain how to change the font and font size in Microsoft Word.</li>
          <li>What are the steps to insert a table into a Google Docs document?</li>
          <li>Describe how to use the spell check feature in LibreOffice Writer.</li>
          <li>How can you add a header and footer to a document in Microsoft Word?</li>
          <li>Explain the steps to create bullet points or numbered lists in a word processor.</li>
          <li>Describe how to set margins and page size in a word processor.</li>
          <li>What are the different options for aligning text in a document?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter5_EditorsAndWordProcessors;
