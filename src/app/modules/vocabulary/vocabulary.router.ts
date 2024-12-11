import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../users/user.constant'
import { TutorialControllers } from './vocabulary.controller'

const router = express.Router()

router.post(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  TutorialControllers.createTutorial,
)
router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  TutorialControllers.getAllTutorial,
)

router.get(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  TutorialControllers.getSingleTutorial,
)

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  TutorialControllers.updateTutorial,
)

router.delete(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  TutorialControllers.deleteTutorial,
)

export const TutorialRoutes = router
