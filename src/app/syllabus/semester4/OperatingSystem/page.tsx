"use client";

import React from 'react';
import Chapter1_IntroAndMemoryManagement from '@/subjects/Semester4/OperatingSystem/Chapter1_IntroAndMemoryManagement';
import Chapter2_ProcessesAndScheduling from '@/subjects/Semester4/OperatingSystem/Chapter2_ProcessesAndScheduling';
import Chapter3_Deadlocks from '@/subjects/Semester4/OperatingSystem/Chapter3_Deadlocks';
import Chapter4_DeviceAndStorageMgmt from '@/subjects/Semester4/OperatingSystem/Chapter4_DeviceAndStorageMgmt';
import Chapter5_FileSystemDesign from '@/subjects/Semester4/OperatingSystem/Chapter5_FileSystemDesign';

const OperatingSystemPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Operating System</h1>
      <Chapter1_IntroAndMemoryManagement/>
      <Chapter2_ProcessesAndScheduling/>
      <Chapter3_Deadlocks/>
      <Chapter4_DeviceAndStorageMgmt/>
      <Chapter5_FileSystemDesign/>
    </div>
  );
};

export default OperatingSystemPage;
