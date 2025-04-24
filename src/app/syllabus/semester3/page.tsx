"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'OOP Using C++',
    description: 'Object-oriented programming concepts using C++.',
    chapters: [
      'Introduction to OOP',
      'Classes and Objects',
      'Inheritance',
      'Polymorphism',
    ],
  },
  {
    subjectName: 'Data Structures',
    description: 'Fundamental data structures and their applications.',
    chapters: [
      'Arrays',
      'Linked Lists',
      'Stacks and Queues',
      'Trees and Graphs',
    ],
  },
  {
    subjectName: 'Computer Architecture and Assembly',
    description: 'Computer architecture and assembly language programming.',
    chapters: [
      'Computer Architecture',
      'Assembly Language Basics',
      'Instruction Set',
      'Memory Management',
    ],
  },
  {
    subjectName: 'Business Economics',
    description: 'Economic principles in business decision-making.',
    chapters: [
      'Introduction to Economics',
      'Demand and Supply',
      'Market Structures',
      'Macroeconomics',
    ],
  },
  {
    subjectName: 'Elements of Statistics',
    description: 'Basic statistical concepts and methods.',
    chapters: [
      'Introduction to Statistics',
      'Data Collection and Presentation',
      'Measures of Central Tendency',
      'Probability Distributions',
    ],
  },
];

const Semester3Syllabus = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Semester 3 Syllabus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.subjectName}
            subjectName={subject.subjectName}
            description={subject.description}
            semester={3}
            chapters={subject.chapters}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester3Syllabus;
