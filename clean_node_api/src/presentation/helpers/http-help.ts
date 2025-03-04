import { HttpResponse } from '../protocols/http'
import { ServerError } from '../errors/server-error'
import { AccountModel } from '../../domain/models/account'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const internalServerError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export const okSRequest = (data: AccountModel): HttpResponse => ({
  statusCode: 200,
  body: data
})
