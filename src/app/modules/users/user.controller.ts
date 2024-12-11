import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'
import AppError from '../../errors/AppError'

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUser(req.query)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users are retrived succesfully.',
    data: result.result,
    meta: result.meta,
  })
})

const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await UserServices.getSingleUser(id)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrived succesfully.',
    data: result,
  })
})

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await UserServices.updateUser(id, req.body)
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found')
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is updated succesfully.',
    data: result,
  })
})

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await UserServices.deleteUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is deleted succesfully.',
    data: result,
  })
})

const changeStatus = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await UserServices.changeStatus(id, req.body.status)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User status updated succesfully.',
    data: result,
  })
})

export const UserControllers = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  changeStatus,
}
