import { Router } from 'express'
import { questions } from '../data/questions.js'

const router = Router()

// GET /api/questions — return all questions
router.get('/questions', (_req, res) => {
  res.json(questions)
})

// GET /api/questions/:id — return a single question
router.get('/questions/:id', (req, res) => {
  const question = questions.find((q) => q.id === parseInt(req.params.id, 10))
  if (!question) return res.status(404).json({ error: 'Question not found' })
  res.json(question)
})

// POST /api/submit — evaluate a full set of answers
// Body: { answers: [{ questionId: number, selectedAnswer: number }] }
router.post('/submit', (req, res) => {
  const { answers } = req.body

  if (!Array.isArray(answers)) {
    return res.status(400).json({ error: 'answers must be an array' })
  }

  const results = answers.map(({ questionId, selectedAnswer }) => {
    const question = questions.find((q) => q.id === questionId)
    if (!question) return { questionId, correct: false, error: 'Unknown question' }
    const correct = selectedAnswer === question.answer
    return {
      questionId,
      topic: question.topic,
      correct,
      correctAnswer: question.answer,
      explanation: question.explanation,
    }
  })

  const score = results.filter((r) => r.correct).length
  const total = questions.length
  const passed = score / total >= 0.75

  res.json({ score, total, passed, results })
})

export default router
