"use client";

import React from 'react';
import Chapter1_DBIntroAndModels from '@/subjects/Semester5/DBMSAndSQL/Chapter1_DBIntroAndModels';
import Chapter2_RelationalModelAndNormalisation from '@/subjects/Semester5/DBMSAndSQL/Chapter2_RelationalModelAndNormalisation';
import Chapter3_SQLAndQueries from '@/subjects/Semester5/DBMSAndSQL/Chapter3_SQLAndQueries';
import Chapter4_TransactionsAndRecovery from '@/subjects/Semester5/DBMSAndSQL/Chapter4_TransactionsAndRecovery';
import Chapter5_DatabaseDesignAndSecurity from '@/subjects/Semester5/DBMSAndSQL/Chapter5_DatabaseDesignAndSecurity';
import Chapter6_AdvancedDBMSConcepts from '@/subjects/Semester5/DBMSAndSQL/Chapter6_AdvancedDBMSConcepts';

const DBMSAndSQLPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">DBMS and SQL</h1>
      <Chapter1_DBIntroAndModels/>
      <Chapter2_RelationalModelAndNormalisation/>
      <Chapter3_SQLAndQueries/>
      <Chapter4_TransactionsAndRecovery/>
      <Chapter5_DatabaseDesignAndSecurity/>
      <Chapter6_AdvancedDBMSConcepts/>
    </div>
  );
};

export default DBMSAndSQLPage;
