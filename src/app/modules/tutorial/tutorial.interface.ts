import { Types } from 'mongoose'

export interface ITutorial {
  id: string
  title: string
  youtubeLink: string
  lessonId: Types.ObjectId
  description?: string
  createdAt: Date
  updatedAt: Date
}
