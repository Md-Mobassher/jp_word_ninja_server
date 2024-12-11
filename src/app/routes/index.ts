import { Router } from 'express'
import { userRoutes } from '../modules/users/user.router'
import { AuthRoutes } from '../modules/auth/auth.route'
import { LessonsRoutes } from '../modules/lesson/lessons.router'
import { TutorialRoutes } from '../modules/tutorial/tutorial.router'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/lessons',
    route: LessonsRoutes,
  },
  {
    path: '/tutorials',
    route: TutorialRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
