"use client";

import React from 'react';
import Chapter1_BigDataFundamentals from '@/subjects/Semester6/BigDataAndCloudComputing/Chapter1_BigDataFundamentals';
import Chapter2_CloudComputingIntro from '@/subjects/Semester6/BigDataAndCloudComputing/Chapter2_CloudComputingIntro';
import Chapter3_CloudServiceModels from '@/subjects/Semester6/BigDataAndCloudComputing/Chapter3_CloudServiceModels';
import Chapter4_BigDataProcessingTechniques from '@/subjects/Semester6/BigDataAndCloudComputing/Chapter4_BigDataProcessingTechniques';
import Chapter5_HadoopAndMapReduce from '@/subjects/Semester6/BigDataAndCloudComputing/Chapter5_HadoopAndMapReduce';
import Chapter6_CloudSecurityAndManagement from '@/subjects/Semester6/BigDataAndCloudComputing/Chapter6_CloudSecurityAndManagement';

const BigDataAndCloudComputingPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Big Data and Cloud Computing</h1>
      <Chapter1_BigDataFundamentals/>
      <Chapter2_CloudComputingIntro/>
      <Chapter3_CloudServiceModels/>
      <Chapter4_BigDataProcessingTechniques/>
      <Chapter5_HadoopAndMapReduce/>
      <Chapter6_CloudSecurityAndManagement/>
    </div>
  );
};

export default BigDataAndCloudComputingPage;
