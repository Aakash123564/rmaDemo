const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 3000
const routes = require('./routes/index.js')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  parameterLimit: 100000,
  extended: true,
  limit: '500mb'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const whitelist = ['http://localhost:4200', 'http://localhost:3000']
const corsOptions = {
 origin: function (origin, callback) {
    if(!origin){//for bypassing postman req with  no origin
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
app.use('/api/v1', routes)
app.use((err, req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization, responseType");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
    console.error(err); // Log the error for debugging purposes
    // Send the error message as a JSON response
    res.status(500).json({ error: err.message })
    next()
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.stack);
  // You might want to log the error and gracefully shut down the server
  // process.exit(1);
});

app.use(express.static(path.join(__dirname, 'view')))
app.use('/uploads', express.static('uploads'))
app.set('views', path.join(__dirname, 'view'))
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/index.html')
});
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/view/index.html')
});

app.listen(port, () => {
    console.log(`Server running at :${port}`)
})