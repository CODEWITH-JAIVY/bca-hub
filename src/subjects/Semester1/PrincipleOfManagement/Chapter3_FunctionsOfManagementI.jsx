'use client';
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Chapter3_FunctionsOfManagementI = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Chapter 3: Functions of Management I</h2>

      {/* Decision-Making */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Decision-Making</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <strong>Q1: What is decision-making in management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A1: Decision-making is the process of identifying and selecting a course of action to solve a specific problem or capitalize on an opportunity. It involves making choices among available alternatives to achieve desired outcomes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <strong>Q2: What are the steps involved in decision-making?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A2: The steps involved in decision-making are:
              <ol className="list-decimal ml-6">
                <li><strong>Identifying the Problem:</strong> Clearly defining the problem or opportunity.</li>
                <li><strong>Developing Alternatives:</strong> Generating a range of potential solutions.</li>
                <li><strong>Evaluating Alternatives:</strong> Assessing the pros and cons of each option.</li>
                <li><strong>Selecting the Best Alternative:</strong> Choosing the most suitable solution.</li>
                <li><strong>Implementing the Decision:</strong> Putting the chosen solution into action.</li>
                <li><strong>Evaluating the Outcome:</strong> Assessing whether the decision achieved the desired results and making adjustments if necessary.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Planning */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Planning</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <strong>Q3: What are different types of plans in management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A3: Different types of plans include:
              <ul className="list-disc ml-6">
                <li><strong>Strategic Plans:</strong> Long-term plans that define the overall direction of the organization.</li>
                <li><strong>Tactical Plans:</strong> Medium-term plans that outline the steps to achieve strategic goals.</li>
                <li><strong>Operational Plans:</strong> Short-term plans that specify day-to-day activities.</li>
                <li><strong>Contingency Plans:</strong> Backup plans in case of unexpected events or changes.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <strong>Q4: What is the role of forecasting in planning?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A4: Forecasting involves predicting future trends and conditions to inform the planning process and reduce uncertainty. It helps organizations make proactive decisions and prepare for potential challenges and opportunities.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            <strong>Describe the steps involved in the decision-making process.</strong>
            <br/>
            <em>The steps include identifying the problem, developing alternatives, evaluating alternatives, selecting the best alternative, implementing the decision, and evaluating the outcome. Each step requires careful analysis and consideration.</em>
          </li>
          <li>
            <strong>Explain the importance of identifying the problem accurately before making a decision.</strong>
            <br/>
            <em>Accurately identifying the problem ensures that the right issue is addressed, and resources are not wasted on irrelevant solutions. It’s the foundation of effective decision-making.</em>
          </li>
          <li>
            <strong>What are the different types of plans in management, and how do they differ?</strong>
            <br/>
            <em>Types include strategic, tactical, operational, and contingency plans. Strategic plans are long-term, tactical plans are medium-term, operational plans are short-term, and contingency plans are backup plans.</em>
          </li>
          <li>
            <strong>How does forecasting help in the planning process? Provide examples.</strong>
            <br/>
            <em>Forecasting helps predict future trends and conditions, enabling organizations to make informed decisions. Examples include sales forecasting, market forecasting, and economic forecasting.</em>
          </li>
          <li>
            <strong>What are some common decision-making biases, and how can they be avoided?</strong>
            <br/>
            <em>Common biases include confirmation bias, anchoring bias, and availability heuristic. They can be avoided by seeking diverse perspectives, using data-driven analysis, and being aware of personal biases.</em>
          </li>
          <li>
            <strong>How do you evaluate the effectiveness of a decision after implementation?</strong>
            <br/>
            <em>Evaluate effectiveness by setting clear metrics, monitoring performance, comparing results to goals, and making adjustments as necessary. Regular reviews are essential.</em>
          </li>
          <li>
            <strong>What are the characteristics of a good plan?</strong>
            <br/>
            <em>A good plan should be clear, specific, realistic, flexible, and measurable. It should align with organizational goals and be adaptable to changing circumstances.</em>
          </li>
          <li>
            <strong>Discuss the role of planning in achieving organizational goals.</strong>
            <br/>
            <em>Planning provides a roadmap for achieving organizational goals, ensuring that resources are used efficiently, and activities are coordinated effectively. It reduces uncertainty and increases the likelihood of success.</em>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter3_FunctionsOfManagementI;
