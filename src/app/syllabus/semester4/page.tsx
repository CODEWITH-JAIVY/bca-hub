"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Computer Graphics and Multimedia',
    description: 'Concepts of computer graphics and multimedia technologies.',
    chapters: [
      'Scan Conversion',
      'Display and Clipping',
      '2D and 3D Transformations',
      'Curves and Solids',
      'Multimedia Concepts',
      'Multimedia Applications'
    ],
    subjectLink: '/syllabus/semester4/ComputerGraphicsAndMultimedia',
  },
  {
    subjectName: 'Operating System',
    description: 'Principles of operating systems.',
    chapters: [
      'Intro and Memory Management',
      'Processes and Scheduling',
      'Deadlocks',
      'Device and Storage Mgmt',
      'File System Design',
    ],
    subjectLink: '/syllabus/semester4/OperatingSystem',
  },
  {
    subjectName: 'Software Engineering',
    description: 'Software development methodologies and practices.',
    chapters: [
      'Introduction to Software Engineering',
      'Software Development Life Cycle',
      'Software Design',
      'Software Testing',
    ],
    subjectLink: '/syllabus/semester4/SoftwareEngineering',
  },
  {
    subjectName: 'Optimization Techniques',
    description: 'Techniques for optimization problems.',
    chapters: [
      'Linear Programming',
      'Queuing Theory',
      'Replacement Theory',
      'Inventory Theory',
      'Game Theory',
    ],
    subjectLink: '/syllabus/semester4/OptimizationTechniques',
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
            chapters={subject.chapters}
            subjectLink={subject.subjectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester4Syllabus;
