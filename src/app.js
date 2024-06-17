import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import user from './routes/user.routes.js'
import config from './config/config.js'

const app = express()

app.set('port', config.PORT)
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use(user)

export default app
