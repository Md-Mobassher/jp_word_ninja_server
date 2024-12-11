import mongoose, { model, Schema } from 'mongoose'
import { ITutorial } from './vocabulary.interface'

const TutorialSchema = new Schema<ITutorial>(
  {
    word: { type: String, required: true, unique: true },
    meaning: { type: String, required: true },
    pronunciation: { type: String, required: true },
    partOfSpeech: { type: String, required: true },
    audioUrl: { type: String },
    exampleSentence: { type: String },
    lessonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
      required: true,
    },
  },
  { timestamps: true },
)

export const Tutorial = model<ITutorial>('Tutorial', TutorialSchema)
