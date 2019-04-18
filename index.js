require('dotenv').config()
const express = require('express')
const massive = require('massive')
const Ctrl = require('./products_controller')

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => {
        console.log(`if you are quiet you can hear port ${SERVER_PORT}`)
    })
}).catch(error => console.log('massive is having a mass problem', error))

app.get(`/api/products`, Ctrl.getAll)
app.get(`/api/products/:id`, Ctrl.getOne)
app.put(`/api/products/:id`, Ctrl.update)
app.post(`/api/products`, Ctrl.create)
app.delete(`/api/products/:id`, Ctrl.delete)
