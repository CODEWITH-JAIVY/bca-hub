"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Mathematics I',
    description: 'Fundamental concepts of Mathematics.',
    chapters: [
      'Algebra',
      'Calculus',
      'Trigonometry',
      'Coordinate Geometry',
    ],
  },
  {
    subjectName: 'Programming Principles And Algorithm',
    description: 'Introduction to programming and algorithm design.',
    chapters: [
      'Introduction to Programming',
      'Data Types and Variables',
      'Control Structures',
      'Algorithm Design',
    ],
  },
  {
    subjectName: 'Computer Fundamentals and Office Automation',
    description: 'Basic computer knowledge and office automation tools.',
    chapters: [
      'Introduction to Computers',
      'Operating Systems',
      'Office Automation Tools',
      'Networking Basics',
    ],
  },
  {
    subjectName: 'Principle Of Management',
    description: 'Core principles of management.',
    chapters: [
      'Introduction to Management',
      'Planning and Decision Making',
      'Organizing',
      'Controlling',
    ],
  },
  {
    subjectName: 'Business Communication',
    description: 'Effective communication in business settings.',
    chapters: [
      'Introduction to Communication',
      'Communication Process',
      'Types of Communication',
      'Business Correspondence',
    ],
  },
  {
    subjectName: 'Environmental Studies',
    description: 'Basics of Environmental studies.',
    chapters: [
      'Introduction to Environmental Studies',
      'Ecosystems',
      'Environmental Pollution',
      'Natural Resources',
    ],
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
            chapters={subject.chapters}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester1Syllabus;
