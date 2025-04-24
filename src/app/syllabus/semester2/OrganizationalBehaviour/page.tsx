"use client";

import React from 'react';
import Chapter1_OrganizationalFundamentals from '@/subjects/Semester2/OrganizationalBehaviour/Chapter1_OrganizationalFundamentals';
import Chapter2_PersonalityAndMotivation from '@/subjects/Semester2/OrganizationalBehaviour/Chapter2_PersonalityAndMotivation';
import Chapter3_PersonalityAndAttitude from '@/subjects/Semester2/OrganizationalBehaviour/Chapter3_PersonalityAndAttitude';
import Chapter4_StressAndManagement from '@/subjects/Semester2/OrganizationalBehaviour/Chapter4_StressAndManagement';
import Chapter5_GroupBehaviourAndLeadership from '@/subjects/Semester2/OrganizationalBehaviour/Chapter5_GroupBehaviourAndLeadership';
import Chapter6_ConflictAndResolution from '@/subjects/Semester2/OrganizationalBehaviour/Chapter6_ConflictAndResolution';

const OrganizationalBehaviourPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Organizational Behaviour</h1>
      <Chapter1_OrganizationalFundamentals/>
      <Chapter2_PersonalityAndMotivation/>
      <Chapter3_PersonalityAndAttitude/>
      <Chapter4_StressAndManagement/>
      <Chapter5_GroupBehaviourAndLeadership/>
      <Chapter6_ConflictAndResolution/>
    </div>
  );
};

export default OrganizationalBehaviourPage;
