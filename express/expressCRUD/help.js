import express from 'express';
const app = express();
app.use(express.json())



app.post('', (req, res) => {
    const name = req.params.name;
    console.log(name)

    res.send('hello')
})

app.listen(3000, () => {
    console.log('runnign on 3000')
})