import httpStatus from 'http-status'
import QueryBuilder from '../../builder/QueryBuilder'
import AppError from '../../errors/AppError'
import { UserSearchableFields } from './user.constant'
import { IUser } from './user.interface'
import { User } from './user.model'

const getAllUser = async (query: Record<string, unknown>) => {
  const UserQuery = new QueryBuilder(User.find(), query)
    .search(UserSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await UserQuery.modelQuery
  const meta = await UserQuery.countTotal()
  return {
    result,
    meta,
  }
}

const getSingleUser = async (id: string) => {
  const result = await User.findById(id)
  return result
}

const updateUser = async (id: string, payload: Partial<IUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteUser = async (id: string) => {
  const isVideoExist = await User.findById(id)
  if (!isVideoExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No User found')
  }
  await User.findByIdAndDelete(id)

  return null
}
const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return result
}

export const UserServices = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  changeStatus,
}
