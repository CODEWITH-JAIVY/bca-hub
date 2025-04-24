'use client';
import React from 'react';

/**
 * Chapter3_WrittenCommunication Component
 * Explains written communication with a teacher-like approach, including all key elements, principles, and practical insights.
 */
const Chapter3_WrittenCommunication = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 3: Written Communication</h2>

      {/* Introduction */}
      <p className="mb-4">
        Written communication refers to the transmission of messages through written symbols (letters, emails, texts, reports, etc.). 
        It is crucial in professional, academic, and personal contexts, where permanent records, clarity, and professionalism are essential.
      </p>

      {/* Key Elements of Written Communication */}
      <section className="mb-6">
        <p className="mb-4">
          <strong>Q1: What are the key elements of effective written communication?</strong>
          <br />
          A1: The 5 Cs of written communication are essential for delivering impactful messages:
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Clarity:</strong> Message should be simple, unambiguous, and to the point.</li>
            <li><strong>Conciseness:</strong> Say more with fewer words without losing meaning.</li>
            <li><strong>Correctness:</strong> Free from grammatical, spelling, and factual errors.</li>
            <li><strong>Coherence:</strong> Logically organized so each idea flows smoothly to the next.</li>
            <li><strong>Completeness:</strong> All required details should be present to avoid confusion or follow-up questions.</li>
          </ul>
        </p>
      </section>

      {/* In-depth Element Explanations */}
      <section className="mb-6">
        <p className="mb-4">
          <strong>Q2: How does clarity affect written messages?</strong>
          <br />
          A2: Clarity avoids confusion. Use simple language, define complex terms, and structure sentences clearly.
          Avoid jargon when writing for a general audience.
        </p>

        <p className="mb-4">
          <strong>Q3: Why is conciseness important in written communication?</strong>
          <br />
          A3: Conciseness shows respect for the reader’s time. Unnecessary words dilute your main idea. Focus on what truly matters.
        </p>

        <p className="mb-4">
          <strong>Q4: What role does correctness play in written communication?</strong>
          <br />
          A4: Correctness builds trust. Any grammar, punctuation, or factual error can discredit the writer and mislead the reader.
        </p>

        <p className="mb-4">
          <strong>Q5: Why is coherence necessary for written messages?</strong>
          <br />
          A5: Coherence makes writing easier to read. Use proper paragraphing, transitions (however, therefore, moreover), and logical sequencing.
        </p>

        <p className="mb-4">
          <strong>Q6: How does completeness contribute to effective written communication?</strong>
          <br />
          A6: Completeness reduces back-and-forths. Include all necessary information, context, dates, and actions expected.
        </p>
      </section>

      {/* Additional Considerations */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Other Important Aspects:</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Purpose and Audience:</strong> Tailor your content according to why and for whom you are writing.</li>
          <li><strong>Format and Structure:</strong> Use headings, bullet points, and paragraphs to improve readability.</li>
          <li><strong>Professional Tone:</strong> Use respectful and formal language in workplace communication.</li>
          <li><strong>Proofreading:</strong> Always revise before sending or publishing to avoid careless mistakes.</li>
        </ul>
      </section>

      {/* Important Questions */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define written communication. What makes it different from verbal communication?</li>
          <li>What are the 5 Cs of effective written communication?</li>
          <li>How does clarity impact the understanding of a written message?</li>
          <li>Why is proofreading important before sending a written message?</li>
          <li>Differentiate between coherence and completeness with examples.</li>
          <li>What are some common barriers to effective written communication?</li>
          <li>List examples of written communication in professional settings.</li>
          <li>How can technology enhance written communication in businesses?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter3_WrittenCommunication;
