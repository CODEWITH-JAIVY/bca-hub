"use client";

import React from 'react';
import Chapter1_IntroToOOPAndC from '@/subjects/Semester3/OOPUsingC/Chapter1_IntroToOOPAndC.jsx';
import Chapter2_ClassesAndObjects from '@/subjects/Semester3/OOPUsingC/Chapter2_ClassesAndObjects';
import Chapter3_InheritanceAndPolymorphism from '@/subjects/Semester3/OOPUsingC/Chapter3_InheritanceAndPolymorphism';
import Chapter4_GenericFunctionsAndTemplates from '@/subjects/Semester3/OOPUsingC/Chapter4_GenericFunctionsAndTemplates';
import Chapter5_FileHandlingAndExceptions from '@/subjects/Semester3/OOPUsingC/Chapter5_FileHandlingAndExceptions';

const OOPUsingCPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">OOP Using C</h1>
      <Chapter1_IntroToOOPAndC/>
      <Chapter2_ClassesAndObjects/>
      <Chapter3_InheritanceAndPolymorphism/>
      <Chapter4_GenericFunctionsAndTemplates/>
      <Chapter5_FileHandlingAndExceptions/>
    </div>
  );
};

export default OOPUsingCPage;