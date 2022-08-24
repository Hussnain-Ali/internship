import express from 'express'
import connection from './configMongo.js'
connection;

const app = express()


app.listen(5555, () => {
    console.log('server runnign on port 5555...')
})