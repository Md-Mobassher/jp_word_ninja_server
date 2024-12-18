import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import notFound from './app/middlewares/notFound'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import config from './app/config'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cookieParser())

// cors
app.use(
  cors({
    origin: [
      `${config.client.live_url}`,
      `${config.client.build_url}`,
      `${config.client.local_url}`,
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
)

// application routes
app.use('/api/v1', router)

// check server
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!')
})

// error handler middleware
app.use(globalErrorHandler)

// Not Found
app.use(notFound)

export default app
