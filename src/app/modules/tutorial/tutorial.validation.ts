import { z } from 'zod'

const createTutorialValidationSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters.')
    .max(100, 'Title cannot exceed 100 characters.'),
  lessonNumber: z
    .number()
    .int('Lesson number must be an integer.')
    .positive('Lesson number must be a positive integer.'),
  vocabCount: z
    .number()
    .int('Vocabulary count must be an integer.')
    .nonnegative('Vocabulary count cannot be negative.')
    .optional(),
})
const updateTutorialValidationSchema = z.object({
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
  createTutorialValidationSchema,
  updateTutorialValidationSchema,
}
