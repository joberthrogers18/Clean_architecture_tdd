import { MongoHelpers } from '../infra/db/mongodb/helpers/mongo-helpers'
import env from './config/env'

MongoHelpers.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default

    app.listen(env.PORT, () => {
      console.log(`Server running at port: ${env.PORT}`)
    })
  })
  .catch(console.error)
