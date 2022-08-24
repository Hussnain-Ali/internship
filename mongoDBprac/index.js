
import express from 'express'
import mongose from './configmongo.js';

const app = express()
mongose;

app.listen(5000, () => {
    console.log("srver runnign on port 5000")
})


