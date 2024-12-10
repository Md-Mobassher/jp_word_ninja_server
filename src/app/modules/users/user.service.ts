import { USER_ROLE } from './user.constant'
import { User } from './user.model'

const getMe = async (userEmail: string, role: string) => {
  let result = null

  if (role === USER_ROLE.user) {
    result = await User.findOne({ email: userEmail })
  }
  if (role === USER_ROLE.admin) {
    result = await User.findOne({ email: userEmail })
  }
  if (role === USER_ROLE.superAdmin) {
    result = await User.findOne({ email: userEmail })
  }

  return result
}

const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return result
}

export const UserServices = {
  getMe,
  changeStatus,
}
