import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import quizRouter from './routes/quiz.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }))

// Routes
app.use('/api', quizRouter)

// 404 handler
app.use((_req, res) => res.status(404).json({ error: 'Not found' }))

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Quiz API running on http://localhost:${PORT}`)
})
