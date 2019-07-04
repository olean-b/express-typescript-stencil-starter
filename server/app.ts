import * as express from 'express'
import * as path from 'path'

const app:express.Application = express()
app.use(express.static(path.join(__dirname, '../resources/assets')))
app.set('views', path.join(__dirname, '../views'))

app.get('/', (_req, res) => {
  res.sendfile('views/index.html')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
