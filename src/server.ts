// This is your server file :)
import express, { Request, Response } from 'express'
import path from 'path'
import pageRouter from './routes/page.routes'
import dotenv from 'dotenv'
dotenv.config()

// Create server
const app = express()

// Set view engine to EJS
app.set('view engine', 'EJS')
// Tell express where to find views
app.set('views', path.join(__dirname, '../src/views'))

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', pageRouter)

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})