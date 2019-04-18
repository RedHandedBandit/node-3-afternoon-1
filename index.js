require('dotenv').config()
const express = require('express')
const massive = require('massive')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => {
        console.log(`if you are quiet you can hear port ${SERVER_PORT}`)
    })
}).catch(error => console.log('massive is having a mass problem', error))
