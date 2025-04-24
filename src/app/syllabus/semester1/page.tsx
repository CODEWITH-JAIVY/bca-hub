"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Mathematics I',
    description: 'Fundamental concepts of Mathematics.',
  },
  {
    subjectName: 'Programming Principles And Algorithm',
    description: 'Introduction to programming and algorithm design.',
  },
  {
    subjectName: 'Computer Fundamentals and Office Automation',
    description: 'Basic computer knowledge and office automation tools.',
  },
  {
    subjectName: 'Principle Of Management',
    description: 'Core principles of management.',
  },
  {
    subjectName: 'Business Communication',
    description: 'Effective communication in business settings.',
  },
  {
    subjectName: 'Environmental Studies',
    description: 'Basics of Enviornmental studies.',
  },
];

const Semester1Syllabus = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Semester 1 Syllabus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.subjectName}
            subjectName={subject.subjectName}
            description={subject.description}
            semester={1}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester1Syllabus;
