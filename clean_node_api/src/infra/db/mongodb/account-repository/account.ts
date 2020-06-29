import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account/add-account'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelpers } from '../helpers/mongo-helpers'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelpers.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const { _id, ...restAccountObj } = result.ops[0]
    return Object.assign({}, restAccountObj, { id: _id })
  }
}
