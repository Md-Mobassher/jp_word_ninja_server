import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
import { AuthControllers } from './auth.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../users/user.constant'

const router = express.Router()

router.post(
  '/register',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.registerUser,
)

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
)

router.post(
  '/change-password',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword,
)

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
)

router.post(
  '/forget-password',
  validateRequest(AuthValidation.forgetPasswordValidationSchema),
  AuthControllers.forgetPassword,
)

router.post(
  '/reset-password',
  validateRequest(AuthValidation.forgetPasswordValidationSchema),
  AuthControllers.resetPassword,
)

router.get(
  '/me',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  AuthControllers.getMe,
)

export const AuthRoutes = router
