import { Types } from 'mongoose'

export interface IVocabulary {
  word: string
  meaning: string
  pronunciation: string
  partOfSpeech: string
  lessonId: Types.ObjectId
  audioUrl?: string
  exampleSentence?: string
  createdAt: Date
  updatedAt: Date
}
