import { model, Schema } from 'mongoose'
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
  },
  {
    timestamps: true,
  },
)

export const Lessons = model<ILessons>('Lessons', lessonsSchema)
