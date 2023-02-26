import express, { Express } from 'express'
import morgan from 'morgan'
import path from 'path'

const port = process.env.PORT || 3000
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('combined'))

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Server listen on port ${port}`))
