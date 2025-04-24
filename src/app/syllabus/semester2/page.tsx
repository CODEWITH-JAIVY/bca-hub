"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Mathematics II',
    description: 'Advanced concepts of Mathematics.',
    chapters: [
      'Integral Calculus',
      'Differential Equations',
      'Linear Algebra',
      'Probability and Statistics',
    ],
    subjectLink: '/syllabus/semester2/MathematicsII',
  },
  {
    subjectName: 'C Programming',
    description: 'Introduction to C programming language.',
    chapters: [
      'Arrays',
      'Pointers',
      'Strings',
      'Structures and Unions',
      'Preprocessor and Bitwise Operations',
      'File Handling'
    ],
    subjectLink: '/syllabus/semester2/CProgramming',
  },
  {
    subjectName: 'Organizational Behaviour',
    description: 'Understanding human behavior in organizations.',
    chapters: [
      'Organizational Fundamentals',
      'Personality and Motivation',
      'Personality and Attitude',
      'Stress and Management',
      'Group Behaviour and Leadership',
      'Conflict and Resolution'
    ],
    subjectLink: '/syllabus/semester2/OrganizationalBehaviour',
  },
  {
    subjectName: 'Digital Electronics and Computer Organisation',
    description: 'Basics of digital electronics and computer architecture.',
    chapters: [
      'Logic Gates and Boolean Algebra',
      'Combinational Circuits',
      'Memory Units',
      'Sequential Circuits',
      'Memory Organisation',
    ],
    subjectLink: '/syllabus/semester2/DigitalElectronicsAndComputerOrganisation',
  },
  {
    subjectName: 'Financial Accounting and Management',
    description: 'Principles of financial accounting and management.',
    chapters: [
      'Overview and Standards',
      'Basics of Accounting',
      'Financial Statements Analysis',
      'Financial Management Basics',
      'Working Capital',
      'Inventory, Cash & Receivables Mgmt'
    ],
    subjectLink: '/syllabus/semester2/FinancialAccountingAndManagement',
  },
];

const Semester2Syllabus = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Semester 2 Syllabus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.subjectName}
            subjectName={subject.subjectName}
            description={subject.description}
            semester={2}
            chapters={subject.chapters}
            subjectLink={subject.subjectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester2Syllabus;
