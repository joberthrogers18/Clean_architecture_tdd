import express from 'express'
import setupMiddlewares from './middlewares'

export const PORT = 3333 || process.env.PORT
const app = express()
setupMiddlewares(app)
export default app
