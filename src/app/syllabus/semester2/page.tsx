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
  },
  {
    subjectName: 'C Programming',
    description: 'Introduction to C programming language.',
    chapters: [
      'Introduction to C',
      'Functions and Pointers',
      'Arrays and Strings',
      'Structures and Unions',
    ],
  },
  {
    subjectName: 'Organizational Behaviour',
    description: 'Understanding human behavior in organizations.',
    chapters: [
      'Introduction to Organizational Behaviour',
      'Individual Behaviour',
      'Group Dynamics',
      'Organizational Culture',
    ],
  },
  {
    subjectName: 'Digital Electronics and Computer Organisation',
    description: 'Basics of digital electronics and computer architecture.',
    chapters: [
      'Number Systems and Codes',
      'Logic Gates',
      'Combinational Circuits',
      'Computer Organization',
    ],
  },
  {
    subjectName: 'Financial Accounting and Management',
    description: 'Principles of financial accounting and management.',
    chapters: [
      'Introduction to Accounting',
      'Financial Statements',
      'Cost Accounting',
      'Management Accounting',
    ],
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
          />
        ))}
      </div>
    </div>
  );
};

export default Semester2Syllabus;
