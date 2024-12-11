"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createLessonsValidationSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(3, 'Title must be at least 3 characters.')
        .max(100, 'Title cannot exceed 100 characters.'),
    lessonNumber: zod_1.z
        .number()
        .int('Lesson number must be an integer.')
        .positive('Lesson number must be a positive integer.'),
    vocabCount: zod_1.z
        .number()
        .int('Vocabulary count must be an integer.')
        .nonnegative('Vocabulary count cannot be negative.')
        .optional(),
});
const updateLessonsValidationSchema = zod_1.z.object({
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
    createLessonsValidationSchema,
    updateLessonsValidationSchema,
};
