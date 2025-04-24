"use client";

import React from 'react';
import Chapter1_IntroToAI from '@/subjects/Semester5/ArtificialIntelligence/Chapter1_IntroToAI';
import Chapter2_SearchAlgorithms from '@/subjects/Semester5/ArtificialIntelligence/Chapter2_SearchAlgorithms';
import Chapter3_KnowledgeRepresentation from '@/subjects/Semester5/ArtificialIntelligence/Chapter3_KnowledgeRepresentation';
import Chapter4_MachineLearning from '@/subjects/Semester5/ArtificialIntelligence/Chapter4_MachineLearning';
import Chapter5_ExpertSystemsAndApplications from '@/subjects/Semester5/ArtificialIntelligence/Chapter5_ExpertSystemsAndApplications';

const ArtificialIntelligencePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Artificial Intelligence</h1>
      <Chapter1_IntroToAI/>
      <Chapter2_SearchAlgorithms/>
      <Chapter3_KnowledgeRepresentation/>
      <Chapter4_MachineLearning/>
      <Chapter5_ExpertSystemsAndApplications/>
    </div>
  );
};

export default ArtificialIntelligencePage;
