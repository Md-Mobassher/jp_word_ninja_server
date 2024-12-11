"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createVocabularyValidationSchema = zod_1.z.object({
    word: zod_1.z
        .string()
        .min(1, { message: 'Word is required' })
        .regex(/^[a-zA-Z]+$/, {
        message: 'Word must only contain alphabetic characters',
    }),
    meaning: zod_1.z.string().min(1, { message: 'Meaning is required' }),
    pronunciation: zod_1.z.string().min(1, { message: 'Pronunciation is required' }),
    partOfSpeech: zod_1.z
        .string()
        .min(1, { message: 'Part of speech is required' })
        .refine((value) => [
        'noun',
        'verb',
        'adjective',
        'adverb',
        'pronoun',
        'preposition',
        'conjunction',
        'interjection',
    ].includes(value.toLowerCase()), {
        message: 'Invalid part of speech',
    }),
    audioUrl: zod_1.z.string().url().optional(),
    exampleSentence: zod_1.z.string().optional(),
    lessonId: zod_1.z.string().nonempty({ message: 'Lesson ID is required' }),
});
const updateVocabularyValidationSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(3, 'Title must be at least 3 characters.')
        .max(100, 'Title cannot exceed 100 characters.')
        .optional(),
    lessonNumber: zod_1.z
        .number()
        .int('Lesson number must be an integer.')
        .positive('Lesson number must be a positive integer.')
        .optional(),
    vocabCount: zod_1.z
        .number()
        .int('Vocabulary count must be an integer.')
        .nonnegative('Vocabulary count cannot be negative.')
        .optional(),
});
exports.UserValidation = {
    createVocabularyValidationSchema,
    updateVocabularyValidationSchema,
};
