import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../users/user.constant'
import { LessonsControllers } from './lessons.controller'

const router = express.Router()

router.post(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  LessonsControllers.createLessons,
)
router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  LessonsControllers.getAllLessons,
)

router.get(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  LessonsControllers.getSingleLessons,
)

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  LessonsControllers.updateLessons,
)
router.delete(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  LessonsControllers.deleteLessons,
)

export const LessonsRoutes = router
