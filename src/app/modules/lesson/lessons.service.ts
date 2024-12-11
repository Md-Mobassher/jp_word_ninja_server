import httpStatus from 'http-status'
import QueryBuilder from '../../builder/QueryBuilder'
import AppError from '../../errors/AppError'
import { ILessons } from './lessons.interface'
import { Lessons } from './lessons.model'
import { LessonsSearchableFields } from './lessons.constant'

const createLessons = async (payload: ILessons) => {
  const newLessons = await Lessons.create(payload)

  if (!newLessons) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Lessons')
  }
  return newLessons
}

const getAllLessons = async (query: Record<string, unknown>) => {
  const LessonsQuery = new QueryBuilder(Lessons.find(), query)
    .search(LessonsSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await LessonsQuery.modelQuery
  const meta = await LessonsQuery.countTotal()
  return {
    result,
    meta,
  }
}

const getSingleLessons = async (id: string) => {
  const result = await Lessons.findById(id)
  return result
}

const updateLessons = async (id: string, payload: Partial<ILessons>) => {
  const result = await Lessons.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteLessons = async (id: string) => {
  const isVideoExist = await Lessons.findById(id)
  if (!isVideoExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No Lessons found')
  }
  await Lessons.findByIdAndDelete(id)

  return null
}

export const LessonsServices = {
  createLessons,
  getAllLessons,
  getSingleLessons,
  updateLessons,
  deleteLessons,
}
