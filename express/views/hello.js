// import express from 'express';
// const app = express();

// app.use(express.urlencoded({ extended: true }))

// app.use(express.json())


// app.post('/uni', (req, res) => {
//     const { meat, qty } = req.body;
//     res.send(`here is your ${qty} ${meat}`)
// })
// app.get('/unis', (req, res) => {
//     res.send('hello')
// })



// app.listen(8080, () => {
//     console.log('Server Running On Port 8080...')
// })

import express from "express";
import path from 'path'
const app = express();
import { v4 as uuid } from 'uuid';

uuid();

const __dirname = path.resolve();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname))
app.set('view engine', 'ejs')


const comments = [
    {
        id: uuid(),
        username: 'hussnain',
        comment: "i like this product"
    },
    {
        id: uuid(),
        username: 'Ali',
        comment: "i like this your iphone"
    },
    {
        id: uuid(),
        username: 'Shahiq',
        comment: "fell in love with nature"
    },
    {
        id: uuid(),
        username: 'shahzad',
        comment: "hello"
    },
    {
        id: uuid(),
        username: 'faizan',
        comment: "you are very lazy boy in thw world"
    }
]


// app.get('/comments', (req, res) => {
//     res.render('index', { comments })
// })
// app.get('/new', (req, res) => {
//     res.render('new')
// })

// app.post('/comments', (req, res) => {
//     const { username, comment } = req.body;
//     comments.push({ username, comment, id: uuid() })
//     res.redirect('/comments')
// })

app.get('/tabledata', (req, res) => {
    res.render('table', { comments })
})
app.post('/tabledata', (req, res) => {
    const { comment, username } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/table')
})
app.get('/tabledetail/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('tabledetail', { comment })
})

// app.get('/comments/:id', (req, res) => {
//     const { id } = req.params;
//     const comment = comments.find(c => c.id === id)
//     res.render('show', { comment })

// })



// app.get('/unis', (req, res) => {
//     res.send('hello')
// })
// app.post('/uni', (req, res) => {
//     const { meat, qty } = req.body;
//     res.send(`this is your ${meat} ${qty} `)
// })

app.listen(8080, () => {
    console.log('server runnign on port 8080...')
})