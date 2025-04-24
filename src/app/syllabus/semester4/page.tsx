"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Computer Graphics and Multimedia',
    description: 'Concepts of computer graphics and multimedia technologies.',
  },
  {
    subjectName: 'Operating System',
    description: 'Principles of operating systems.',
  },
  {
    subjectName: 'Software Engineering',
    description: 'Software development methodologies and practices.',
  },
  {
    subjectName: 'Optimization Techniques',
    description: 'Techniques for optimization problems.',
  },
];

const Semester4Syllabus = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Semester 4 Syllabus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.subjectName}
            subjectName={subject.subjectName}
            description={subject.description}
            semester={4}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester4Syllabus;
