import { Router } from 'express'
import { userRoutes } from '../modules/users/user.router'
import { AuthRoutes } from '../modules/auth/auth.route'
import { LessonsRoutes } from '../modules/lesson/lessons.router'

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
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
