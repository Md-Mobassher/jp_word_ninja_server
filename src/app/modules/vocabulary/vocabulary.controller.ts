import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import AppError from '../../errors/AppError'
import { VocabularyServices } from './vocabulary.service'

const createVocabulary = catchAsync(async (req, res) => {
  const result = await VocabularyServices.createVocabulary(req.body)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vocabulary is created succesfully',
    data: result,
  })
})

const getAllVocabulary = catchAsync(async (req, res) => {
  const result = await VocabularyServices.getAllVocabulary(req.query)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vocabulary are retrived succesfully.',
    data: result.result,
    meta: result.meta,
  })
})

const getSingleVocabulary = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await VocabularyServices.getSingleVocabulary(id)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vocabulary is retrived succesfully.',
    data: result,
  })
})

const updateVocabulary = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await VocabularyServices.updateVocabulary(id, req.body)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vocabulary is updated succesfully.',
    data: result,
  })
})

const deleteVocabulary = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await VocabularyServices.deleteVocabulary(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vocabulary is deleted succesfully.',
    data: result,
  })
})

export const VocabularyControllers = {
  createVocabulary,
  getAllVocabulary,
  getSingleVocabulary,
  updateVocabulary,
  deleteVocabulary,
}
