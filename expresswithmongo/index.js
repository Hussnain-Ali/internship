import express from 'express'
import path from 'path'
import connection from './config.js';
import productivity from './model/product.js';
connection;
const __dirname = path.resolve();

const app = express();
app.use(express.json())
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs')

app.get('/products', async (req, res) => {
    const product = await productivity.find({})
    res.render('showProduct', { product })
})

app.get('/')

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    const productd = await productivity.findById(id)
    res.render('showDetail', { productd })
})

app.listen(4000, () => {
    console.log('server running on port 4000...')
})