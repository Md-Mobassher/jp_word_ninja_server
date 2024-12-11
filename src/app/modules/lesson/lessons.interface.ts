import { Types } from 'mongoose'

export interface ILessons {
  id: string
  title: string
  lessonNumber: number
  vocabCount?: number
  tutorialId: Types.ObjectId
  vocabularyId: Types.ObjectId
  createdAt?: Date
  updatedAt?: Date
}
