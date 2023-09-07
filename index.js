const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send("<h1>Coffee shop is ON </h1>")
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})