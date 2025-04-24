import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {generateChapterSummary} from "@/ai/flows/generate-chapter-summary";
import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";

interface SubjectCardProps {
  subjectName: string;
  description: string;
  semester: number;
  chapters: string[];
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subjectName,
  description,
  semester,
  chapters,
}) => {
  const {toast} = useToast();

  const handleSummaryGeneration = async (chapterTitle: string) => {
    try {
      const summary = await generateChapterSummary({chapterTitle});
      toast({
        title: `Summary for ${chapterTitle}`,
        description: summary.summary,
      });
    } catch (error: any) {
      toast({
        title: `Error generating summary for ${chapterTitle}`,
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-secondary rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-primary mb-2">{subjectName}</h3>
      <p className="text-muted-foreground">{description}</p>
      <Accordion type="single" collapsible className="w-full mt-4">
        {chapters.map((chapter, index) => (
          <AccordionItem key={index} value={`chapter-${index}`}>
            <AccordionTrigger>{chapter}</AccordionTrigger>
            <AccordionContent>
              <Button onClick={() => handleSummaryGeneration(chapter)}>
                Generate Summary
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
