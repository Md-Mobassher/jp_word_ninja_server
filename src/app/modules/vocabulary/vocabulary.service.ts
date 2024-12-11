import httpStatus from 'http-status'
import QueryBuilder from '../../builder/QueryBuilder'
import AppError from '../../errors/AppError'
import { ITutorial } from './vocabulary.interface'
import { Tutorial } from './vocabulary.model'
import { TutorialSearchableFields } from './vocabulary.constant'

const createTutorial = async (payload: ITutorial) => {
  const newTutorial = await Tutorial.create(payload)

  if (!newTutorial) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Tutorial')
  }
  return newTutorial
}

const getAllTutorial = async (query: Record<string, unknown>) => {
  const TutorialQuery = new QueryBuilder(Tutorial.find(), query)
    .search(TutorialSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await TutorialQuery.modelQuery
  const meta = await TutorialQuery.countTotal()
  return {
    result,
    meta,
  }
}

const getSingleTutorial = async (id: string) => {
  const result = await Tutorial.findById(id)
  return result
}

const updateTutorial = async (id: string, payload: Partial<ITutorial>) => {
  const result = await Tutorial.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteTutorial = async (id: string) => {
  const isVideoExist = await Tutorial.findById(id)
  if (!isVideoExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No Tutorial found')
  }
  await Tutorial.findByIdAndDelete(id)

  return null
}

export const TutorialServices = {
  createTutorial,
  getAllTutorial,
  getSingleTutorial,
  updateTutorial,
  deleteTutorial,
}
