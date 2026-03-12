import { Hono } from 'hono'
import { cors } from 'hono/cors'
import quizRouter from './routes/quiz.js'

const app = new Hono()

app.use('*', cors())

app.get('/health', (c) => c.json({ status: 'ok' }))

app.route('/api', quizRouter)

app.notFound((c) => c.json({ error: 'Not found' }, 404))

app.onError((err, c) => {
  console.error(err)
  return c.json({ error: 'Internal server error' }, 500)
})

export default app
