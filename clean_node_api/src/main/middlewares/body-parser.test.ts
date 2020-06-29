// test requests to server
import request from 'supertest'
import app from '../config/app'

describe('Body parser Middleware', () => {
  test('Should get the correct values at body of request', async () => {
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
