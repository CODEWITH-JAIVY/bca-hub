import React from 'react';
import Chapter1_DataAndClassification from '@/subjects/Semester3/ElementsOfStatistics/Chapter1_DataAndClassification';
import Chapter2_CentralTendency from '@/subjects/Semester3/ElementsOfStatistics/Chapter2_CentralTendency';
import Chapter3_MeasuresOfDispersion from '@/subjects/Semester3/ElementsOfStatistics/Chapter3_MeasuresOfDispersion';
import Chapter4_PermutationAndCombination from '@/subjects/Semester3/ElementsOfStatistics/Chapter4_PermutationAndCombination';
import Chapter5_ProbabilityAndEvents from '@/subjects/Semester3/ElementsOfStatistics/Chapter5_ProbabilityAndEvents';
import Chapter6_StatisticalQualityControl from '@/subjects/Semester3/ElementsOfStatistics/Chapter6_StatisticalQualityControl';

const ElementsOfStatisticsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Elements of Statistics</h1>
      <Chapter1_DataAndClassification/>
      <Chapter2_CentralTendency/>
      <Chapter3_MeasuresOfDispersion/>
      <Chapter4_PermutationAndCombination/>
      <Chapter5_ProbabilityAndEvents/>
      <Chapter6_StatisticalQualityControl/>
    </div>
  );
};

export default ElementsOfStatisticsPage;
