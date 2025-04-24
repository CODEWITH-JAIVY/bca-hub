"use client";

import React from 'react';
import {SubjectCard} from '@/components/SubjectCard';

const subjects = [
  {
    subjectName: 'Computer Networks',
    description: 'Principles of computer networks.',
    chapters: [
      'Intro and OSI Model',
      'Data Transmission and Ethernet',
      'Routing and IP Networking',
      'Wireless and Security',
      'TCP and UDP Protocols'
    ],
    subjectLink: '/syllabus/semester6/ComputerNetworks',
  },
  {
    subjectName: 'Mobile App Development',
    description: 'Mobile application development techniques.',
    chapters: [
      'Intro To Mobile App Development',
      'Android Development Basics',
      'UI and UX Design',
      'Android API and Services',
      'Mobile App Security',
      'App Deployment and Testing'
    ],
    subjectLink: '/syllabus/semester6/MobileAppDevelopment',
  },
  {
    subjectName: 'Big Data and Cloud Computing',
    description: 'Big data and cloud computing concepts.',
    chapters: [
      'Big Data Fundamentals',
      'Cloud Computing Intro',
      'Cloud Service Models',
      'Big Data Processing Techniques',
      'Hadoop and MapReduce',
      'Cloud Security and Management'
    ],
    subjectLink: '/syllabus/semester6/BigDataAndCloudComputing',
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
            subjectLink={subject.subjectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester6Syllabus;
