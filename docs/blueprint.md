# **App Name**: BCA Study Hub

## Core Features:

- Syllabus Display: Display the syllabus content, broken down by semester, subject, and chapter.
- Syllabus Navigation: Allow users to navigate the syllabus structure (semester -> subject -> chapter).
- Chapter Summary Generation: Generate a summary of a chapter's content based on its title, using an LLM tool.

## Style Guidelines:

- Primary color: Light blue (#E0F7FA) for a clean and calming feel.
- Secondary color: Light gray (#F5F5F5) for backgrounds and neutral elements.
- Accent: Teal (#008080) for interactive elements and highlights.
- Use a clean, modular layout with clear sections for semesters, subjects, and chapters.
- Use simple, outline-style icons for navigation and subject categories.

## Original User Request:
"Create a clean, modular React + Tailwind CSS project structure for a BCA syllabus website. It should include semester-wise pages, subject-wise folders inside each semester, and chapter-wise JSX components for each subject. Include reusable components like Navbar, Footer, and a ChapterCard. Use React Router for navigation and organize routes separately. Follow clean coding practices and scalable folder organization." bca-edu-website/
│
├── public/
│   └── index.html
│
├── src/
│
│   ├── assets/
│   │   ├── logo.png
│   │   └── banner.jpg
│
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SubjectCard.jsx
│   │   ├── SemesterSelector.jsx
│   │   └── MobileMenu.jsx
│
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Syllabus.jsx
│   │   └── SubjectDetail.jsx
│
│   ├── subjects/
│   │   ├── Semester1/
│   │   │   ├── MathematicsI/
│   │   │   │   ├── Chapter1_DeterminantsAndMatrices.jsx
│   │   │   │   ├── Chapter2_LimitsAndContinuity.jsx
│   │   │   │   ├── Chapter3_Differentiation.jsx
│   │   │   │   ├── Chapter4_Integration.jsx
│   │   │   │   ├── Chapter5_VectorAlgebra.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── ProgrammingPrinciplesAndAlgorithm/
│   │   │   │   ├── Chapter1_BasicsAndCIntro.jsx
│   │   │   │   ├── Chapter2_OperatorsAndIO.jsx
│   │   │   │   ├── Chapter3_ControlStructures.jsx
│   │   │   │   ├── Chapter4_ProblemSolvingAndAlgorithms.jsx
│   │   │   │   ├── Chapter5_SimpleArithmeticProblems.jsx
│   │   │   │   ├── Chapter6_Functions.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── ComputerFundamentalsAndOfficeAutomation/
│   │   │   │   ├── Chapter1_IntroToComputersAndNumberSystems.jsx
│   │   │   │   ├── Chapter2_AlgorithmAndFlowchart.jsx
│   │   │   │   ├── Chapter3_OperatingSystemBasics.jsx
│   │   │   │   ├── Chapter4_WindowsOSBasics.jsx
│   │   │   │   ├── Chapter5_EditorsAndWordProcessors.jsx
│   │   │   │   ├── Chapter6_ExcelAndDatabaseBasics.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── PrincipleOfManagement/
│   │   │   │   ├── Chapter1_NatureOfManagement.jsx
│   │   │   │   ├── Chapter2_ManagementThought.jsx
│   │   │   │   ├── Chapter3_FunctionsOfManagementI.jsx
│   │   │   │   ├── Chapter4_FunctionsOfManagementII.jsx
│   │   │   │   ├── Chapter5_ManagementOfChange.jsx
│   │   │   │   ├── Chapter6_StrategicManagement.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── BusinessCommunication/
│   │   │   │   ├── Chapter1_MeansOfCommunication.jsx
│   │   │   │   ├── Chapter2_TypesOfCommunication.jsx
│   │   │   │   ├── Chapter3_WrittenCommunication.jsx
│   │   │   │   ├── Chapter4_BusinessLettersAndReports.jsx
│   │   │   │   ├── Chapter5_DraftingLetters.jsx
│   │   │   │   ├── Chapter6_ITInCommunication.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── EnvironmentalStudies/
│   │   │   │   └── index.jsx
│   │   ├── Semester2/
│   │   │   ├── MathematicsII/
│   │   │   │   ├── Chapter1_Sets.jsx
│   │   │   │   ├── Chapter2_RelationsAndFunctions.jsx
│   │   │   │   ├── Chapter3_LatticesAndPosets.jsx
│   │   │   │   ├── Chapter4_FunctionsOfSeveralVariables.jsx
│   │   │   │   ├── Chapter5_3DGeometry.jsx
│   │   │   │   ├── Chapter6_MultipleIntegration.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── CProgramming/
│   │   │   │   ├── Chapter1_Arrays.jsx
│   │   │   │   ├── Chapter2_Pointers.jsx
│   │   │   │   ├── Chapter3_Strings.jsx
│   │   │   │   ├── Chapter4_StructuresAndUnions.jsx
│   │   │   │   ├── Chapter5_PreprocessorAndBitwiseOps.jsx
│   │   │   │   ├── Chapter6_FileHandling.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── OrganizationalBehaviour/
│   │   │   │   ├── Chapter1_OrganizationalFundamentals.jsx
│   │   │   │   ├── Chapter2_PersonalityAndMotivation.jsx
│   │   │   │   ├── Chapter3_PersonalityAndAttitude.jsx
│   │   │   │   ├── Chapter4_StressAndManagement.jsx
│   │   │   │   ├── Chapter5_GroupBehaviourAndLeadership.jsx
│   │   │   │   ├── Chapter6_ConflictAndResolution.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── DigitalElectronicsAndComputerOrganisation/
│   │   │   │   ├── Chapter1_LogicGatesAndBooleanAlgebra.jsx
│   │   │   │   ├── Chapter2_CombinationalCircuits.jsx
│   │   │   │   ├── Chapter3_MemoryUnits.jsx
│   │   │   │   ├── Chapter4_SequentialCircuits.jsx
│   │   │   │   ├── Chapter5_MemoryOrganisation.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── FinancialAccountingAndManagement/
│   │   │   │   ├── Chapter1_OverviewAndStandards.jsx
│   │   │   │   ├── Chapter2_BasicsOfAccounting.jsx
│   │   │   │   ├── Chapter3_FinancialStatementsAnalysis.jsx
│   │   │   │   ├── Chapter4_FinancialManagementBasics.jsx
│   │   │   │   ├── Chapter5_WorkingCapital.jsx
│   │   │   │   ├── Chapter6_InventoryCashReceivablesMgmt.jsx
│   │   │   │   └── index.jsx
│   │   ├── Semester3/
│   │   │   ├── OOPUsingC++/
│   │   │   │   ├── Chapter1_IntroToOOPAndC++.jsx
│   │   │   │   ├── Chapter2_ClassesAndObjects.jsx
│   │   │   │   ├── Chapter3_InheritanceAndPolymorphism.jsx
│   │   │   │   ├── Chapter4_GenericFunctionsAndTemplates.jsx
│   │   │   │   ├── Chapter5_FileHandlingAndExceptions.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── DataStructures/
│   │   │   │   ├── Chapter1_ArraysAndMatrices.jsx
│   │   │   │   ├── Chapter2_StacksAndQueues.jsx
│   │   │   │   ├── Chapter3_LinkedLists.jsx
│   │   │   │   ├── Chapter4_TreesAndTraversal.jsx
│   │   │   │   ├── Chapter5_BTreesAndIndexing.jsx
│   │   │   │   ├── Chapter6_SortingAndSearching.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── ComputerArchitectureAndAssembly/
│   │   │   │   ├── Chapter1_BasicComputerDesign.jsx
│   │   │   │   ├── Chapter2_CPUAndArithmeticAlgorithms.jsx
│   │   │   │   ├── Chapter3_ComputerArithmetic.jsx
│   │   │   │   ├── Chapter4_IOAndDMA.jsx
│   │   │   │   ├── Chapter5_MicroprocessorsOverview.jsx
│   │   │   │   ├── Chapter6_AssemblyLanguageBasics.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── BusinessEconomics/
│   │   │   │   ├── Chapter1_EconomicBasicsAndProduction.jsx
│   │   │   │   ├── Chapter2_MarketStructures.jsx
│   │   │   │   ├── Chapter3_MacroeconomicConcepts.jsx
│   │   │   │   ├── Chapter4_WorldEconomyAndWTO.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── ElementsOfStatistics/
│   │   │   │   ├── Chapter1_DataAndClassification.jsx
│   │   │   │   ├── Chapter2_CentralTendency.jsx
│   │   │   │   ├── Chapter3_MeasuresOfDispersion.jsx
│   │   │   │   ├── Chapter4_PermutationAndCombination.jsx
│   │   │   │   ├── Chapter5_ProbabilityAndEvents.jsx
│   │   │   │   ├── Chapter6_StatisticalQualityControl.jsx
│   │   │   │   └── index.jsx
│   │   ├── Semester4/
│   │   │   ├── ComputerGraphicsAndMultimedia/
│   │   │   │   ├── Chapter1_ScanConversion.jsx
│   │   │   │   ├── Chapter2_DisplayAndClipping.jsx
│   │   │   │   ├── Chapter3_2DAnd3DTransformations.jsx
│   │   │   │   ├── Chapter4_CurvesAndSolids.jsx
│   │   │   │   ├── Chapter5_MultimediaConcepts.jsx
│   │   │   │   ├── Chapter6_MultimediaApplications.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── OperatingSystem/
│   │   │   │   ├── Chapter1_IntroAndMemoryManagement.jsx
│   │   │   │   ├── Chapter2_ProcessesAndScheduling.jsx
│   │   │   │   ├── Chapter3_Deadlocks.jsx
│   │   │   │   ├── Chapter4_DeviceAndStorageMgmt.jsx
│   │   │   │   ├── Chapter5_FileSystemDesign.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── SoftwareEngineering/
│   │   │   │   ├── Chapter1_SEIntroAndParadigms.jsx
│   │   │   │   ├── Chapter2_RequirementsAnalysis.jsx
│   │   │   │   ├── Chapter3_SoftwareDesign.jsx
│   │   │   │   ├── Chapter4_ImplementationAndCoding.jsx
│   │   │   │   ├── Chapter5_MaintenanceAndExamples.jsx
│   │   │   │   ├── Chapter6_CaseToolsAndManagement.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── OptimizationTechniques/
│   │   │   │   ├── Chapter1_LinearProgramming.jsx
│   │   │   │   ├── Chapter2_QueuingTheory.jsx
│   │   │   │   ├── Chapter3_ReplacementTheory.jsx
│   │   │   │   ├── Chapter4_InventoryTheory.jsx
│   │   │   │   ├── Chapter5_GameTheory.jsx
│   │   │   │   └── index.jsx
│   │   ├── Semester5/
│   │   │   ├── DBMSAndSQL/
│   │   │   │   ├── Chapter1_DBIntroAndModels.jsx
│   │   │   │   ├── Chapter2_RelationalModelAndNormalisation.jsx
│   │   │   │   ├── Chapter3_SQLAndQueries.jsx
│   │   │   │   ├── Chapter4_TransactionsAndRecovery.jsx
│   │   │   │   ├── Chapter5_DatabaseDesignAndSecurity.jsx
│   │   │   │   ├── Chapter6_AdvancedDBMSConcepts.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── WebTechnologies/
│   │   │   │   ├── Chapter1_HTMLAndCSSBasics.jsx
│   │   │   │   ├── Chapter2_JavaScriptAndDOM.jsx
│   │   │   │   ├── Chapter3_ResponsiveDesign.jsx
│   │   │   │   ├── Chapter4_BootstrapAndFrameworks.jsx
│   │   │   │   ├── Chapter5_NodeAndExpress.jsx
│   │   │   │   ├── Chapter6_MongoDBIntegration.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── DataMining/
│   │   │   │   ├── Chapter1_FundamentalsAndTechniques.jsx
│   │   │   │   ├── Chapter2_PreprocessingAndModels.jsx
│   │   │   │   ├── Chapter3_ClassifiersAndEvaluation.jsx
│   │   │   │   ├── Chapter4_ClusteringAndAssociationRules.jsx
│   │   │   │   ├── Chapter5_ApplicationsAndChallenges.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── ArtificialIntelligence/
│   │   │   │   ├── Chapter1_IntroToAI.jsx
│   │   │   │   ├── Chapter2_SearchAlgorithms.jsx
│   │   │   │   ├── Chapter3_KnowledgeRepresentation.jsx
│   │   │   │   ├── Chapter4_MachineLearning.jsx
│   │   │   │   ├── Chapter5_ExpertSystemsAndApplications.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── ComputationalMathematics/
│   │   │   │   ├── Chapter1_NumericalMethodsAndRootFinding.jsx
│   │   │   │   ├── Chapter2_InterpolationAndApproximation.jsx
│   │   │   │   ├── Chapter3_IntegrationAndDifferentiation.jsx
│   │   │   │   ├── Chapter4_DifferentialEquations.jsx
│   │   │   │   ├── Chapter5_LinearAlgebra.jsx
│   │   │   │   └── index.jsx
│   │   ├── Semester6/
│   │   │   ├── ComputerNetworks/
│   │   │   │   ├── Chapter1_IntroAndOSIModel.jsx
│   │   │   │   ├── Chapter2_DataTransmissionAndEthernet.jsx
│   │   │   │   ├── Chapter3_RoutingAndIPNetworking.jsx
│   │   │   │   ├── Chapter4_WirelessAndSecurity.jsx
│   │   │   │   ├── Chapter5_TCPAndUDPProtocols.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── MobileAppDevelopment/
│   │   │   │   ├── Chapter1_IntroToMobileAppDevelopment.jsx
│   │   │   │   ├── Chapter2_AndroidDevelopmentBasics.jsx
│   │   │   │   ├── Chapter3_UIAndUXDesign.jsx
│   │   │   │   ├── Chapter4_AndroidAPIAndServices.jsx
│   │   │   │   ├── Chapter5_MobileAppSecurity.jsx
│   │   │   │   ├── Chapter6_AppDeploymentAndTesting.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── BigDataAndCloudComputing/
│   │   │   │   ├── Chapter1_BigDataFundamentals.jsx
│   │   │   │   ├── Chapter2_CloudComputingIntro.jsx
│   │   │   │   ├── Chapter3_CloudServiceModels.jsx
│   │   │   │   ├── Chapter4_BigDataProcessingTechniques.jsx
│   │   │   │   ├── Chapter5_HadoopAndMapReduce.jsx
│   │   │   │   ├── Chapter6_CloudSecurityAndManagement.jsx
│   │   │   │   └── index.jsx
  code react vite  or tailwind project and write all chapter content
  