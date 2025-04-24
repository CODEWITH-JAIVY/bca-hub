"use client";

import React from 'react';
import Chapter1_MeansOfCommunication from '@/subjects/Semester1/BusinessCommunication/Chapter1_MeansOfCommunication';
import Chapter2_TypesOfCommunication from '@/subjects/Semester1/BusinessCommunication/Chapter2_TypesOfCommunication';
import Chapter3_WrittenCommunication from '@/subjects/Semester1/BusinessCommunication/Chapter3_WrittenCommunication';
import Chapter4_BusinessLettersAndReports from '@/subjects/Semester1/BusinessCommunication/Chapter4_BusinessLettersAndReports';
import Chapter5_DraftingLetters from '@/subjects/Semester1/BusinessCommunication/Chapter5_DraftingLetters';
import Chapter6_ITInCommunication from '@/subjects/Semester1/BusinessCommunication/Chapter6_ITInCommunication';

const BusinessCommunicationPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Business Communication</h1>
      <Chapter1_MeansOfCommunication/>
      <Chapter2_TypesOfCommunication/>
      <Chapter3_WrittenCommunication/>
      <Chapter4_BusinessLettersAndReports/>
      <Chapter5_DraftingLetters/>
      <Chapter6_ITInCommunication/>
    </div>
  );
};

export default BusinessCommunicationPage;
