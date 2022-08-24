// import express from 'express'
// const app = express();

// app.use((req, res) => {
//     console.log('we got a new request');
//     res.send({ color: 'red' })
// })
// app.get('./s', (req, res) => {
//     res.send("shahiq")
// })

// app.listen(5000, () => {
//     console.log('server runing on port 3000')
// })


// import express from "express";
// const app = express();

// app.use((req, res) => {
//     console.log('hi')
//     res.send('hkjhgdnuh')
// })

// app.get('/', (req, res) => {
//     res.send('shaiq')
// })

// app.get('/CAT', (req, res) => {
//     res.send('MEOW !!')
// })

// app.get('/DOG', (req, res) => {
//     res.send('WOOF !!')
// })
// app.get('*', (req, res) => {
//     res.send('I don not know anything !!')
// })
// app.post('/cats', (req, res) => {
//     res.send('shahiq hussnain to /cats')
// })
// app.listen(8080, () => {
//     console.log('server running on port 3000')
// })






// ////////////////////route path parameters/////////

// import express from 'express'

// const app = express();

// app.get('/fname', (req, res) => {
//     res.send('First name is hussnain')
// })
// app.get('/lname', (req, res) => {
//     res.send('Last name is ALi')
// })
// app.get('/faname', (req, res) => {
//     res.send('Father name is Nazir')
// })
// app.get('/class', (req, res) => {
//     res.send('Class name is BSIT')
// })
// app.get('/r/:hussnain/:id', (req, res) => {
//     const { hussnain, id } = req.params;
//     res.send(`<h1> Browsing the ${hussnain} whose id is : ${id}</h1>`)
// })
// app.get('/r/:hussnain/?id', (req, res) => {
//     const { hussnain, id } = req.params;
//     res.send(`<h1> Browsing the ${hussnain} whose id is : ${id}</h1>`)
// })
// app.listen(3000, () => {
//     console.log('Server Running on port 3000')
// })



//////////////tempelating in html//////

// import express from 'express';
// const app = express();
// import path from 'path';
// const __dirname = path.resolve();
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, '/views'))

// app.get('/', (req, res) => {
//     const num = Math.floor(Math.random() * 100) + 1;
//     res.render('home', { num })
// })

// app.listen(8080, () => {
//     console.log('listing on port 8080...')
// })