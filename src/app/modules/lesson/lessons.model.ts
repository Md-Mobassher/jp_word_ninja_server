import mongoose, { model, Schema } from 'mongoose'
import { ILessons } from './lessons.interface'

const lessonsSchema = new Schema<ILessons>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    lessonNumber: {
      type: Number,
      required: true,
    },
    vocabCount: {
      type: Number,
      default: 0,
    },
    tutorialId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tutorial',
      required: true,
    },
    vocabularyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vocabulary',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Lessons = model<ILessons>('Lessons', lessonsSchema)
