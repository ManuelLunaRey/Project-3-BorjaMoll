const express = require('express');
const app = express()
const connectDB = require('./config/db')

app.get('/', function (req, res) {
  res.send('Hello World')
})
connectDB()
app.listen(3000)

// Routes
app.use('/', require('./routes/index.'))