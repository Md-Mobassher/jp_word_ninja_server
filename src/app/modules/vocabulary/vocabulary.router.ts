import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../users/user.constant'
import { VocabularyControllers } from './vocabulary.controller'

const router = express.Router()

router.post(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  VocabularyControllers.createVocabulary,
)
router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  VocabularyControllers.getAllVocabulary,
)

router.get(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  VocabularyControllers.getSingleVocabulary,
)

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  VocabularyControllers.updateVocabulary,
)

router.delete(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  VocabularyControllers.deleteVocabulary,
)

export const VocabularyRoutes = router
