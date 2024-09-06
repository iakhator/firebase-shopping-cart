import express from 'express'
import { fromNodeMiddleware } from 'h3'
import routes from './routes/index.js'

const app = express()

// setup express
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/api', routes)

export default fromNodeMiddleware(app)
