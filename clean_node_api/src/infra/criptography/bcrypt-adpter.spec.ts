import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

// mock implementation bcrypt to return a fixed hash
jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  }
}))

const makeBcryptAdapter = (saltEncrypt: number): BcryptAdapter => {
  return new BcryptAdapter(saltEncrypt)
}

interface SutType {
  bcryptAdapterSut: BcryptAdapter
}

const makeSut = (saltEncrypt: number): SutType => {
  const bcryptAdapterSut = makeBcryptAdapter(saltEncrypt)

  return {
    bcryptAdapterSut
  }
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const saltEncrypt = 12
    const { bcryptAdapterSut } = makeSut(saltEncrypt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await bcryptAdapterSut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', saltEncrypt)
  })

  test('Should call hashed string if bcrypt works', async () => {
    const saltEncrypt = 12
    const { bcryptAdapterSut } = makeSut(saltEncrypt)
    const hash = await bcryptAdapterSut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
