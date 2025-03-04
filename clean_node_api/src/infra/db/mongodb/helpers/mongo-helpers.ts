import { MongoClient, Collection } from 'mongodb'

export const MongoHelpers = {
  mongoClient: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.mongoClient = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.mongoClient.close()
  },

  getCollection (name: string): Collection {
    return this.mongoClient.db().collection(name)
  },

  map (collection: any): any {
    const { _id, ...restAccountObj } = collection
    const refactorDataAccount = Object.assign({}, restAccountObj, { id: _id })
    return refactorDataAccount
  }
}
