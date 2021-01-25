const path = require('path')
const express = require('express');
const connectDB = require('./config/db')
const morgan = require('morgan')
const exphbs = require('expres-handlebars')
dotenv.config({path: './config/config.env' })
connectDB()
const app = express()
<<<<<<< HEAD
//login
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main', extname:'.hbs'}));
app.set('view engine', 'handlebars');
// static folder
app.use(express.static(path.join(__dirname, 'public')))
// routes
app.use('/', require('./routes/index'))
 const PORT = process.env.PORT || 3000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
=======
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

>>>>>>> 9bec5c5c467beff627ee1fb540d9d19b64749a4b
