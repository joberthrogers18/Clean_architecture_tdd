import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

export const PORT = 3333 || process.env.PORT
const app = express()
setupMiddlewares(app)
setupRoutes(app)
export default app
