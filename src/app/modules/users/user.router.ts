import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserControllers } from './user.controller'
import { USER_ROLE } from './user.constant'
import auth from '../../middlewares/auth'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/change-status/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(UserValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
)

router.get(
  '/me',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  UserControllers.getMe,
)

export const userRoutes = router
