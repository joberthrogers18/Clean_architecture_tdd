import app from '../config/app'
import request from 'supertest'
import { MongoHelpers } from '../../infra/db/mongodb/helpers/mongo-helpers'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelpers.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelpers.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelpers.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

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
