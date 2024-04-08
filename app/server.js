var express = require('express') //llamamos a Express
var app = express()
var bodyParser = require('body-parser')        

var port = process.env.PORT || 8090  // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 

app.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

app.get('/cervezas', function (req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })
})

app.post('/', function (req, res) {
  res.json({ message: 'Test post ' })
})

app.delete('/', function (req, res) {
  res.json({ mensaje: 'Método delete' })
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)