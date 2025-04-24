"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'DBMS and SQL',
    description: 'Database management systems and SQL.',
  },
  {
    subjectName: 'Web Technologies',
    description: 'Web development technologies.',
  },
  {
    subjectName: 'Data Mining',
    description: 'Data mining concepts and techniques.',
  },
  {
    subjectName: 'Artificial Intelligence',
    description: 'Artificial intelligence principles and algorithms.',
  },
  {
    subjectName: 'Computational Mathematics',
    description: 'Mathematical methods for computation.',
  },
];

const Semester5Syllabus = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Semester 5 Syllabus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.subjectName}
            subjectName={subject.subjectName}
            description={subject.description}
            semester={5}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester5Syllabus;
