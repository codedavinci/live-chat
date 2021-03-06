const path = require('path')
const express = require("express")
const http = require('http')
const socketIO = require('socket.io')

const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../client/public' )
const app = express()

const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.on('disconnect', () => {
  console.log('User was disconnected')
})
})

app.use(express.static(publicPath))

server.listen(port, () => console.log("Server is up on port: ", port))


