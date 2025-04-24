"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'DBMS and SQL',
    description: 'Database management systems and SQL.',
    chapters: [
      'Introduction to DBMS',
      'Relational Model',
      'SQL Queries',
      'Database Design',
    ],
  },
  {
    subjectName: 'Web Technologies',
    description: 'Web development technologies.',
    chapters: [
      'HTML and CSS',
      'JavaScript',
      'Server-Side Scripting',
      'Web Frameworks',
    ],
  },
  {
    subjectName: 'Data Mining',
    description: 'Data mining concepts and techniques.',
    chapters: [
      'Introduction to Data Mining',
      'Data Preprocessing',
      'Classification',
      'Clustering',
    ],
  },
  {
    subjectName: 'Artificial Intelligence',
    description: 'Artificial intelligence principles and algorithms.',
    chapters: [
      'Introduction to AI',
      'Search Algorithms',
      'Knowledge Representation',
      'Machine Learning',
    ],
  },
  {
    subjectName: 'Computational Mathematics',
    description: 'Mathematical methods for computation.',
    chapters: [
      'Numerical Methods',
      'Optimization Techniques',
      'Graph Theory',
      'Mathematical Modeling',
    ],
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
            chapters={subject.chapters}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester5Syllabus;
