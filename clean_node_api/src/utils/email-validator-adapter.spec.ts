import { EmailValidatorAdapter } from './email-valldator'
import { EmailValidator } from '../presentation/protocols/email-validator'
import validator from 'validator'

const makeSut = (): EmailValidator => {
  return new EmailValidatorAdapter()
}

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('should return false if validator return false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@gmail.com')
    expect(isValid).toBe(false)
  })

  test('should return true if validator return true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })
})
