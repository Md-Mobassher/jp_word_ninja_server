import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { LessonsServices } from './lessons.service'
import AppError from '../../errors/AppError'

const createLessons = catchAsync(async (req, res) => {
  const result = await LessonsServices.createLessons(req.body)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Lessons is created succesfully',
    data: result,
  })
})

const getAllLessons = catchAsync(async (req, res) => {
  const result = await LessonsServices.getAllLessons(req.query)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Lessons are retrived succesfully.',
    data: result.result,
    meta: result.meta,
  })
})

const getSingleLessons = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await LessonsServices.getSingleLessons(id)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Lessons is retrived succesfully.',
    data: result,
  })
})

const updateLessons = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await LessonsServices.updateLessons(id, req.body)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Lessons is updated succesfully.',
    data: result,
  })
})

const deleteLessons = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await LessonsServices.deleteLessons(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Lessons is deleted succesfully.',
    data: result,
  })
})

export const LessonsControllers = {
  createLessons,
  getAllLessons,
  getSingleLessons,
  updateLessons,
  deleteLessons,
}
