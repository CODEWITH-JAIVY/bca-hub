'use server';

/**
 * @fileOverview A chapter summary generation AI agent.
 *
 * - generateChapterSummary - A function that handles the chapter summary generation process.
 * - GenerateChapterSummaryInput - The input type for the generateChapterSummary function.
 * - GenerateChapterSummaryOutput - The return type for the generateChapterSummary function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateChapterSummaryInputSchema = z.object({
  chapterTitle: z.string().describe('The title of the chapter.'),
});
export type GenerateChapterSummaryInput = z.infer<typeof GenerateChapterSummaryInputSchema>;

const GenerateChapterSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the chapter content.'),
});
export type GenerateChapterSummaryOutput = z.infer<typeof GenerateChapterSummaryOutputSchema>;

export async function generateChapterSummary(input: GenerateChapterSummaryInput): Promise<GenerateChapterSummaryOutput> {
  return generateChapterSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateChapterSummaryPrompt',
  input: {
    schema: z.object({
      chapterTitle: z.string().describe('The title of the chapter.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A concise summary of the chapter content.'),
    }),
  },
  prompt: `You are an expert in creating concise chapter summaries for BCA syllabus. Please provide a brief summary for the chapter titled: {{{chapterTitle}}}. The summary should cover the key concepts and main topics discussed in the chapter. Keep the summary to around 100 words.
`,
});

const generateChapterSummaryFlow = ai.defineFlow<
  typeof GenerateChapterSummaryInputSchema,
  typeof GenerateChapterSummaryOutputSchema
>({
  name: 'generateChapterSummaryFlow',
  inputSchema: GenerateChapterSummaryInputSchema,
  outputSchema: GenerateChapterSummaryOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});

