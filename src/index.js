const express = require("express");
const { server: mockServer } = require('./mocks/server.js')
const todoServer = require("./todoServer.js");

if(process.env.NODE_ENV === 'development') {
    mockServer.listen()
}

const app = express()

app.get('/todos', todoServer.getTodos)

app.listen(8080, () => {
    console.log(process.env.NODE_ENV)
    console.log('server started')
})