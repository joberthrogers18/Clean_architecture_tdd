import { MongoClient } from 'mongodb'

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
  }
}
