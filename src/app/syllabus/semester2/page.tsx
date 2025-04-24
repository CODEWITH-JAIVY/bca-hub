"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Mathematics II',
    description: 'Advanced concepts of Mathematics.',
  },
  {
    subjectName: 'C Programming',
    description: 'Introduction to C programming language.',
  },
  {
    subjectName: 'Organizational Behaviour',
    description: 'Understanding human behavior in organizations.',
  },
  {
    subjectName: 'Digital Electronics and Computer Organisation',
    description: 'Basics of digital electronics and computer architecture.',
  },
  {
    subjectName: 'Financial Accounting and Management',
    description: 'Principles of financial accounting and management.',
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
          />
        ))}
      </div>
    </div>
  );
};

export default Semester2Syllabus;
