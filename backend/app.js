import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})