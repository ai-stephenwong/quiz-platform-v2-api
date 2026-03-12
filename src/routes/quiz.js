import { Hono } from 'hono'
import { questions } from '../data/questions.js'

const router = new Hono()

// GET /api/questions — return all questions
router.get('/questions', (c) => c.json(questions))

// GET /api/questions/:id — return a single question
router.get('/questions/:id', (c) => {
  const question = questions.find((q) => q.id === parseInt(c.req.param('id'), 10))
  if (!question) return c.json({ error: 'Question not found' }, 404)
  return c.json(question)
})

// POST /api/submit — evaluate a full set of answers
// Body: { answers: [{ questionId: number, selectedAnswer: number }] }
router.post('/submit', async (c) => {
  const body = await c.req.json()
  const { answers } = body

  if (!Array.isArray(answers)) {
    return c.json({ error: 'answers must be an array' }, 400)
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

  return c.json({ score, total, passed, results })
})

export default router
