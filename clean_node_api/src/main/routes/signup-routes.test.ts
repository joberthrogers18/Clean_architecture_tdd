import app from '../config/app'
import request from 'supertest'

describe('SignUp Routes', () => {
  test('Should return account when success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Jobs',
        email: 'joberth@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
