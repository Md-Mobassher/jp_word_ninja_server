import { z } from 'zod'

const createVocabularyValidationSchema = z.object({
  word: z
    .string()
    .min(1, { message: 'Word is required' })
    .regex(/^[a-zA-Z]+$/, {
      message: 'Word must only contain alphabetic characters',
    }),
  meaning: z.string().min(1, { message: 'Meaning is required' }),
  pronunciation: z.string().min(1, { message: 'Pronunciation is required' }),
  partOfSpeech: z
    .string()
    .min(1, { message: 'Part of speech is required' })
    .refine(
      (value) =>
        [
          'noun',
          'verb',
          'adjective',
          'adverb',
          'pronoun',
          'preposition',
          'conjunction',
          'interjection',
        ].includes(value.toLowerCase()),
      {
        message: 'Invalid part of speech',
      },
    ),
  audioUrl: z.string().url().optional(),
  exampleSentence: z.string().optional(),
  lessonId: z.string().nonempty({ message: 'Lesson ID is required' }),
})
const updateVocabularyValidationSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters.')
    .max(100, 'Title cannot exceed 100 characters.')
    .optional(),
  lessonNumber: z
    .number()
    .int('Lesson number must be an integer.')
    .positive('Lesson number must be a positive integer.')
    .optional(),
  vocabCount: z
    .number()
    .int('Vocabulary count must be an integer.')
    .nonnegative('Vocabulary count cannot be negative.')
    .optional(),
})

export const UserValidation = {
  createVocabularyValidationSchema,
  updateVocabularyValidationSchema,
}
