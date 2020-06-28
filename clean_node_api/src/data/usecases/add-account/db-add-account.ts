import { AccountModel, AddAccountModel, AddAccount, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepositoy: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepositoy
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    // it looks like the spread operator to objects
    const addedUserAccount = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return addedUserAccount
  }
}
