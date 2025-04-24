"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'DBMS and SQL',
    description: 'Database management systems and SQL.',
    chapters: [
      'DB Intro and Models',
      'Relational Model and Normalisation',
      'SQL and Queries',
      'Transactions and Recovery',
      'Database Design and Security',
      'Advanced DBMS Concepts'
    ],
    subjectLink: '/syllabus/semester5/DBMSAndSQL',
  },
  {
    subjectName: 'Web Technologies',
    description: 'Web development technologies.',
    chapters: [
      'HTML and CSS Basics',
      'JavaScript and DOM',
      'Responsive Design',
      'Bootstrap and Frameworks',
      'Node and Express',
      'MongoDB Integration'
    ],
    subjectLink: '/syllabus/semester5/WebTechnologies',
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
    subjectLink: '/syllabus/semester5/DataMining',
  },
  {
    subjectName: 'Artificial Intelligence',
    description: 'Artificial intelligence principles and algorithms.',
    chapters: [
      'Intro To AI',
      'Search Algorithms',
      'Knowledge Representation',
      'Machine Learning',
      'Expert Systems and Applications'
    ],
    subjectLink: '/syllabus/semester5/ArtificialIntelligence',
  },
  {
    subjectName: 'Computational Mathematics',
    description: 'Mathematical methods for computation.',
    chapters: [
      'Numerical Methods and Root Finding',
      'Interpolation and Approximation',
      'Integration and Differentiation',
      'Differential Equations',
      'Linear Algebra'
    ],
    subjectLink: '/syllabus/semester5/ComputationalMathematics',
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
            subjectLink={subject.subjectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester5Syllabus;
