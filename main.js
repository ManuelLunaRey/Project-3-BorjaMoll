const express = require('express');
const app = express()
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

app.get('/', function (req, res) {
  res.send('Hello World')
})
connectDB()
// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main', extname:'.hbs'}));
app.set('view engine', 'handlebars');

// Routes
app.use('/', require('./routes/index.'))

app.listen(3000)

