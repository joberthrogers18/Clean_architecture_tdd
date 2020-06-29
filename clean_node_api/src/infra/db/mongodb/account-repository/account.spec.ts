import { MongoHelpers } from '../helpers/mongo-helpers'
import { AccountMongoRepository } from './account'

describe('Account Mongo', () => {
  beforeAll(async () => {
    await MongoHelpers.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelpers.disconnect()
  })

  beforeEach(async () => {
    const accounstCollection = MongoHelpers.getCollection('accounts')
    await accounstCollection.deleteMany({})
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }

  test('Should return an account when success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })

    // it is not undefined
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email@mail.com')
    expect(account.password).toBe('any_password')
  })
})
