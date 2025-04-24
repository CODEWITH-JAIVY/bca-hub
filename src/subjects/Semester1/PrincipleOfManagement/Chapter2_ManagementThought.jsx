'use client';
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Chapter2_ManagementThought = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Chapter 2: Evolution of Management Thought</h2>

      {/* Introduction to Classical Management Theory */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Classical Management Theory</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <strong>Q1: What is classical management theory?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A1: Classical management theory is an approach that emphasizes efficiency, standardization, and hierarchical structure in organizations. It focuses on optimizing work processes and organizational design to improve productivity.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Scientific Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Scientific Management</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <strong>Q2: What are the main principles of scientific management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A2: The main principles, as advocated by Frederick W. Taylor, include:
              <ul className="list-disc ml-6">
                <li>Developing a science for each element of work to replace rule-of-thumb methods.</li>
                <li>Scientifically selecting and training workers to perform their jobs efficiently.</li>
                <li>Ensuring cooperation between management and workers to implement the scientific methods.</li>
                <li>Dividing work and responsibility almost equally between management and workers.</li>
              </ul>
              <p>
                Scientific management aims to optimize productivity through standardization and efficiency.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Administrative Management Theory */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Administrative Management Theory</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <strong>Q3: What is administrative management theory?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A3: Administrative management theory, primarily associated with Henri Fayol, focuses on the overall organization and the management functions that managers should perform. It emphasizes the importance of organizational structure and effective administrative practices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Bureaucratic Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Bureaucratic Management</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <strong>Q4: What are the key elements of bureaucratic management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A4: Key elements of bureaucratic management, as outlined by Max Weber, include:
              <ul className="list-disc ml-6">
                <li>A clear hierarchy with well-defined levels of authority.</li>
                <li>Division of labor based on specialization.</li>
                <li>Formal rules and procedures to ensure consistency.</li>
                <li>Impersonal relationships to ensure objective decision-making.</li>
                <li>Promotion based on technical competence.</li>
              </ul>
              <p>
                Bureaucratic management aims to create a rational and efficient organization through structure and rules.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Human Relations Movement */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Human Relations Movement</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <strong>Q5: What is the human relations movement?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A5: The human relations movement emphasizes the importance of social factors, employee motivation, and group dynamics in organizations. It arose as a reaction to the mechanistic approach of classical management theories.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            <strong>Describe the key principles of classical management theory.</strong>
            <br/>
            <em>Classical management theory focuses on efficiency, standardization, and hierarchical structure. Key principles include division of labor, scalar chain, and unity of command.</em>
          </li>
          <li>
            <strong>Explain the main ideas of scientific management and its impact on the workplace.</strong>
            <br/>
            <em>Scientific management aims to improve efficiency through scientific methods, standardization, and worker training. It has led to increased productivity and better workflow management.</em>
          </li>
          <li>
            <strong>What are the core concepts of administrative management theory?</strong>
            <br/>
            <em>Core concepts include the 14 principles of management, such as division of work, authority and responsibility, unity of command, and esprit de corps.</em>
          </li>
          <li>
            <strong>Describe the key elements of bureaucratic management and its advantages and disadvantages.</strong>
            <br/>
            <em>Key elements include a clear hierarchy, division of labor, formal rules, and impersonal relationships. Advantages include efficiency and consistency, while disadvantages include rigidity and red tape.</em>
          </li>
          <li>
            <strong>What is the human relations movement, and how did it change management thinking?</strong>
            <br/>
            <em>The human relations movement emphasized the importance of social factors, employee motivation, and group dynamics. It shifted focus from efficiency to human needs and relationships.</em>
          </li>
          <li>
            <strong>Compare and contrast scientific management and the human relations movement.</strong>
            <br/>
            <em>Scientific management focuses on efficiency and standardization, while the human relations movement focuses on social factors and employee motivation. They represent different approaches to management.</em>
          </li>
          <li>
            <strong>How did classical management theories influence modern management practices?</strong>
            <br/>
            <em>Classical management theories laid the foundation for modern management practices by emphasizing efficiency, structure, and planning. However, modern management also incorporates human relations and adaptability.</em>
          </li>
          <li>
            <strong>What are the limitations of classical management theories in today's organizations?</strong>
            <br/>
            <em>Classical management theories can be too rigid and may not address the complexities of modern organizations, such as the need for flexibility, innovation, and employee empowerment.</em>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter2_ManagementThought;
