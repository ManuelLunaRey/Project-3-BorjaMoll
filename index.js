const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();
// Load config
dotenv.config({ path: './config/config.env' })
// Static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

connectDB()

// Handlebars
app.engine('.hbs', exphbs({ 
  defaultLayout: 'main', 
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Routes
app.use('/', require('./routes/index'))
 

//Ports
app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
