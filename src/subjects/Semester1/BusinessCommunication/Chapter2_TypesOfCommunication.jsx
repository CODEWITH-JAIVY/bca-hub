'use client';
import React from 'react';

/**
 * Chapter2_TypesOfCommunication Component
 * Provides detailed insights into the various types of communication used in organizations and personal settings.
 */
const Chapter2_TypesOfCommunication = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 2: Types of Communication</h2>

      {/* Introductory explanation */}
      <p className="mb-4">
        Communication within any environment, especially in business and education, occurs in various forms.
        These forms differ based on structure, setting, and relationship between participants.
        Understanding these types is essential for effective communication and organizational success.
      </p>

      {/* Q1: Main types */}
      <p className="mb-4">
        <strong>Q1: What are the main types of communication?</strong>
        <br />
        A1: The primary types of communication are:
        <ul className="list-disc ml-6">
          <li><strong>Formal Communication:</strong> Structured and official communication, usually documented.</li>
          <li><strong>Informal Communication:</strong> Casual conversations that are spontaneous and personal.</li>
          <li><strong>Interpersonal Communication:</strong> Exchange of information between individuals in direct interaction.</li>
        </ul>
      </p>

      {/* Q2: Formal communication */}
      <p className="mb-4">
        <strong>Q2: Define formal communication.</strong>
        <br />
        A2: Formal communication is official, hierarchical, and documented. It follows predefined organizational channels. Examples include:
        <ul className="list-disc ml-6">
          <li>Memos and emails for official notices</li>
          <li>Reports submitted to management</li>
          <li>Structured meetings with agendas</li>
        </ul>
        It ensures professionalism, accountability, and traceability.
      </p>

      {/* Q3: Informal communication */}
      <p className="mb-4">
        <strong>Q3: What is informal communication?</strong>
        <br />
        A3: Informal communication happens outside formal channels. It's spontaneous and personal. Commonly known as the "grapevine," it:
        <ul className="list-disc ml-6">
          <li>Helps build rapport and social bonds</li>
          <li>Spreads information quickly</li>
          <li>Can sometimes lead to rumors if unchecked</li>
        </ul>
        Though not official, it plays a vital role in organizational culture.
      </p>

      {/* Q4: Interpersonal communication */}
      <p className="mb-4">
        <strong>Q4: Explain interpersonal communication.</strong>
        <br />
        A4: This is the direct exchange of information between individuals. It includes:
        <ul className="list-disc ml-6">
          <li>One-on-one or group discussions</li>
          <li>Verbal (spoken) and non-verbal (gestures, tone, eye contact) forms</li>
        </ul>
        It’s fundamental in building trust, resolving conflicts, and improving teamwork.
      </p>

      {/* Q5: Business impact */}
      <p className="mb-4">
        <strong>Q5: How do these types of communication impact business operations?</strong>
        <br />
        A5:
        <ul className="list-disc ml-6">
          <li><strong>Formal communication</strong> brings clarity, consistency, and legal compliance.</li>
          <li><strong>Informal communication</strong> improves team spirit, employee satisfaction, and unplanned idea generation.</li>
          <li><strong>Interpersonal communication</strong> enhances collaboration, productivity, and conflict resolution.</li>
        </ul>
        Together, they shape the communication culture of an organization.
      </p>

      {/* Important Questions */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>What is formal communication? Mention its advantages and limitations.</li>
          <li>Differentiate between formal and informal communication with examples.</li>
          <li>How does interpersonal communication influence teamwork?</li>
          <li>Discuss the role of informal communication in employee satisfaction.</li>
          <li>Explain with examples how different types of communication coexist in an organization.</li>
          <li>Why is it important to maintain a balance between formal and informal communication?</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter2_TypesOfCommunication;
