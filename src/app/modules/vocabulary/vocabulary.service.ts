import httpStatus from 'http-status'
import QueryBuilder from '../../builder/QueryBuilder'
import AppError from '../../errors/AppError'
import { Vocabulary } from './vocabulary.model'
import { IVocabulary } from './vocabulary.interface'
import { VocabularySearchableFields } from './vocabulary.constant'

const createVocabulary = async (payload: IVocabulary) => {
  const newVocabulary = await Vocabulary.create(payload)

  if (!newVocabulary) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Vocabulary')
  }
  return newVocabulary
}

const getAllVocabulary = async (query: Record<string, unknown>) => {
  const VocabularyQuery = new QueryBuilder(Vocabulary.find(), query)
    .search(VocabularySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await VocabularyQuery.modelQuery
  const meta = await VocabularyQuery.countTotal()
  return {
    result,
    meta,
  }
}

const getSingleVocabulary = async (id: string) => {
  const result = await Vocabulary.findById(id)
  return result
}

const updateVocabulary = async (id: string, payload: Partial<IVocabulary>) => {
  const result = await Vocabulary.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteVocabulary = async (id: string) => {
  const isVideoExist = await Vocabulary.findById(id)
  if (!isVideoExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No Vocabulary found')
  }
  await Vocabulary.findByIdAndDelete(id)

  return null
}

export const VocabularyServices = {
  createVocabulary,
  getAllVocabulary,
  getSingleVocabulary,
  updateVocabulary,
  deleteVocabulary,
}
