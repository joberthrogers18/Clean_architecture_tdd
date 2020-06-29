import app, { PORT } from './config/app'

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`)
})
