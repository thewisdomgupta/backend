require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Twitter!')
})

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`)
})