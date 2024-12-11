import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TutorialServices } from './tutorial.service'
import AppError from '../../errors/AppError'

const createTutorial = catchAsync(async (req, res) => {
  const result = await TutorialServices.createTutorial(req.body)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutorial is created succesfully',
    data: result,
  })
})

const getAllTutorial = catchAsync(async (req, res) => {
  const result = await TutorialServices.getAllTutorial(req.query)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutorial are retrived succesfully.',
    data: result.result,
    meta: result.meta,
  })
})

const getSingleTutorial = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TutorialServices.getSingleTutorial(id)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutorial is retrived succesfully.',
    data: result,
  })
})

const updateTutorial = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TutorialServices.updateTutorial(id, req.body)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutorial is updated succesfully.',
    data: result,
  })
})

const deleteTutorial = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TutorialServices.deleteTutorial(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutorial is deleted succesfully.',
    data: result,
  })
})

export const TutorialControllers = {
  createTutorial,
  getAllTutorial,
  getSingleTutorial,
  updateTutorial,
  deleteTutorial,
}
