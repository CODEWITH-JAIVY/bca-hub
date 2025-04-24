"use client";

import React from 'react';
import Chapter1_EconomicBasicsAndProduction from '@/subjects/Semester3/BusinessEconomics/Chapter1_EconomicBasicsAndProduction';
import Chapter2_MarketStructures from '@/subjects/Semester3/BusinessEconomics/Chapter2_MarketStructures';
import Chapter3_MacroeconomicConcepts from '@/subjects/Semester3/BusinessEconomics/Chapter3_MacroeconomicConcepts';
import Chapter4_WorldEconomyAndWTO from '@/subjects/Semester3/BusinessEconomics/Chapter4_WorldEconomyAndWTO';

const BusinessEconomicsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Business Economics</h1>
      <Chapter1_EconomicBasicsAndProduction/>
      <Chapter2_MarketStructures/>
      <Chapter3_MacroeconomicConcepts/>
      <Chapter4_WorldEconomyAndWTO/>
    </div>
  );
};

export default BusinessEconomicsPage;
