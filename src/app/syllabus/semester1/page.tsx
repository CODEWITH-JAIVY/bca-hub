"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Mathematics I',
    description: 'Fundamental concepts of Mathematics.',
    chapters: [
      'Determinants and Matrices',
      'Limits and Continuity',
      'Differentiation',
      'Integration',
      'Vector Algebra',
    ],
    subjectLink: '/syllabus/semester1/MathematicsI', // Link to the new page
  },
  {
    subjectName: 'Programming Principles And Algorithm',
    description: 'Introduction to programming and algorithm design.',
    chapters: [
      'Basics and C Intro',
      'Operators and I/O',
      'Control Structures',
      'Problem Solving and Algorithms',
      'Simple Arithmetic Problems',
      'Functions'
    ],
    subjectLink: '/syllabus/semester1/ProgrammingPrinciplesAndAlgorithm', // Link to the new page
  },
  {
    subjectName: 'Computer Fundamentals and Office Automation',
    description: 'Basic computer knowledge and office automation tools.',
    chapters: [
      'Intro To Computers and Number Systems',
      'Algorithm and Flowchart',
      'Operating System Basics',
      'Windows OS Basics',
      'Editors and Word Processors',
      'Excel and Database Basics'
    ],
    subjectLink: '/syllabus/semester1/ComputerFundamentalsAndOfficeAutomation', // Link to the new page
  },
  {
    subjectName: 'Principle Of Management',
    description: 'Core principles of management.',
    chapters: [
      'Nature of Management',
      'Management Thought',
      'Functions of Management I',
      'Functions of Management II',
      'Management of Change',
      'Strategic Management'
    ],
    subjectLink: '/syllabus/semester1/PrincipleOfManagement', // Link to the new page
  },
  {
    subjectName: 'Business Communication',
    description: 'Effective communication in business settings.',
    chapters: [
      'Means of Communication',
      'Types of Communication',
      'Written Communication',
      'Business Letters and Reports',
      'Drafting Letters',
      'IT in Communication'
    ],
    subjectLink: '/syllabus/semester1/BusinessCommunication', // Link to the new page
  },
  {
    subjectName: 'Environmental Studies',
    description: 'Basics of Environmental studies.',
    chapters: [
      'Introduction to Environmental Studies',
    ],
    subjectLink: '/syllabus/semester1/EnvironmentalStudies', // Link to the new page
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
            subjectLink={subject.subjectLink} // Pass the link
          />
        ))}
      </div>
    </div>
  );
};

export default Semester1Syllabus;
