import request from 'supertest'
import app from '../config/app'

describe('Body parser Middleware', () => {
  test('', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({
        name: 'name',
        email: 'email@mail.com'
      })
      .expect({
        name: 'name',
        email: 'email@mail.com'
      })
  })
})
