"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Computer Networks',
    description: 'Principles of computer networks.',
    chapters: [
      'Introduction to Computer Networks',
      'Network Layers',
      'Network Protocols',
      'Network Security',
    ],
  },
  {
    subjectName: 'Mobile App Development',
    description: 'Mobile application development techniques.',
    chapters: [
      'Introduction to Mobile App Development',
      'Mobile App Design',
      'Mobile App Development Platforms',
      'Mobile App Testing',
    ],
  },
  {
    subjectName: 'Big Data and Cloud Computing',
    description: 'Big data and cloud computing concepts.',
    chapters: [
      'Introduction to Big Data',
      'Big Data Technologies',
      'Cloud Computing Basics',
      'Cloud Services',
    ],
  },
];

const Semester6Syllabus = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Semester 6 Syllabus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.subjectName}
            subjectName={subject.subjectName}
            description={subject.description}
            semester={6}
            chapters={subject.chapters}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester6Syllabus;
