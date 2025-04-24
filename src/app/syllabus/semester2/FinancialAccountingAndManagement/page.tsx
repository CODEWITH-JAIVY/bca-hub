"use client";

import React from 'react';
import Chapter1_OverviewAndStandards from '@/subjects/Semester2/FinancialAccountingAndManagement/Chapter1_OverviewAndStandards';
import Chapter2_BasicsOfAccounting from '@/subjects/Semester2/FinancialAccountingAndManagement/Chapter2_BasicsOfAccounting';
import Chapter3_FinancialStatementsAnalysis from '@/subjects/Semester2/FinancialAccountingAndManagement/Chapter3_FinancialStatementsAnalysis';
import Chapter4_FinancialManagementBasics from '@/subjects/Semester2/FinancialAccountingAndManagement/Chapter4_FinancialManagementBasics';
import Chapter5_WorkingCapital from '@/subjects/Semester2/FinancialAccountingAndManagement/Chapter5_WorkingCapital';
import Chapter6_InventoryCashReceivablesMgmt from '@/subjects/Semester2/FinancialAccountingAndManagement/Chapter6_InventoryCashReceivablesMgmt';

const FinancialAccountingAndManagementPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Financial Accounting and Management</h1>
      <Chapter1_OverviewAndStandards/>
      <Chapter2_BasicsOfAccounting/>
      <Chapter3_FinancialStatementsAnalysis/>
      <Chapter4_FinancialManagementBasics/>
      <Chapter5_WorkingCapital/>
      <Chapter6_InventoryCashReceivablesMgmt/>
    </div>
  );
};

export default FinancialAccountingAndManagementPage;
