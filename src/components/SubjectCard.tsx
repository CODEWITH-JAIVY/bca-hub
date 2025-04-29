import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SubjectCardProps {
  subjectName: string;
  description: string;
  semester: number;
  chapters: string[];
  subjectLink?: string;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subjectName,
  description,
  semester,
  chapters,
  subjectLink,
}) => {
  return (
    <Card className="w-full md:w-80 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{subjectName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-gray-500">{description}</p>
        {subjectLink && (
          <a
            href={subjectLink}
            className="inline-block text-accent hover:underline text-sm"
          >
            View Content
          </a>
        )}
      </CardContent>
    </Card>
  );
};

