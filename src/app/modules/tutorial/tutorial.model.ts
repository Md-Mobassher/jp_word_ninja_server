import { model, Schema } from 'mongoose'
import { ITutorial } from './tutorial.interface'

const TutorialSchema = new Schema<ITutorial>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    youtubeLink: {
      type: String,
      required: true,
      validate: {
        validator: function (v: string) {
          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(v)
        },
        message: 'Invalid YouTube link format.',
      },
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  },
)

export const Tutorial = model<ITutorial>('Tutorial', TutorialSchema)
