
"use client";

import React from 'react';
import { SubjectCard } from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Business Economics',
    description: 'Economic principles in business decision-making.',
    chapters: [
      'Economic Basics and Production',
      'Market Structures',
      'Macroeconomic Concepts',
      'World Economy and WTO',
    ],
    subjectLink: '/syllabus/semester3/BusinessEconomics',
  },
  {
    subjectName: 'Computer Architecture and Assembly',
    description: 'Computer architecture and assembly language programming.',
    chapters: [
      'Basic Computer Design',
      'CPU and Arithmetic Algorithms',
      'Computer Arithmetic',
      'I/O and DMA',
      'Microprocessors Overview',
      'Assembly Language Basics',
    ],
    subjectLink: '/syllabus/semester3/ComputerArchitectureAndAssembly',
  },
  {
    subjectName: 'Data Structures',
    description: 'Fundamental data structures and their applications.',
    chapters: [
      'Arrays and Matrices',
      'Stacks and Queues',
      'Linked Lists',
      'Trees and Traversal',
      'B-Trees and Indexing',
      'Sorting and Searching',
    ],
    subjectLink: '/syllabus/semester3/DataStructures',
  },
  {
    subjectName: 'Elements of Statistics',
    description: 'Basic statistical concepts and methods.',
    chapters: [
      'Data and Classification',
      'Central Tendency',
      'Measures of Dispersion',
      'Permutation and Combination',
      'Probability and Events',
      'Statistical Quality Control',
    ],
    subjectLink: '/syllabus/semester3/ElementsOfStatistics',
  },
  {
    subjectName: 'OOP Using C++',
    description: 'Object-oriented programming concepts using C++.',
    chapters: [
      'Intro To OOP and C++',
      'Classes and Objects',
      'Inheritance and Polymorphism',
      'Generic Functions and Templates',
      'File Handling and Exceptions',
    ],
    subjectLink: '/syllabus/semester3/OOPUsingC++',
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
            subjectLink={subject.subjectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester3Syllabus;