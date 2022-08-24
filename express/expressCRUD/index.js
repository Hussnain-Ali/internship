import express from 'express';
import path from 'path';
const app = express();
import { v4 as uuid } from 'uuid';
import methodOverride from 'method-override';

uuid();


const __dirname = path.resolve();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname))
app.set('view engine', 'ejs')

app.use(express.static('public'))


let comments = [
    {
        id: uuid(),
        name: 'hussnain',
        age: 25,
        gender: "Male",
        classx: 'BSIT',
        comment: "i like this product"
    },
    {
        id: uuid(),
        name: 'Ali',
        age: 23,
        gender: "male",
        classx: 'BSIT',
        comment: "i like this your iphone"
    },
    {
        id: uuid(),
        name: 'Shahiq',
        age: 24,
        gender: "Neutral",
        classx: 'BSIT',
        comment: "fell in love with nature"
    },
    {
        id: uuid(),
        name: 'shahzad',
        age: 35,
        gender: "Male",
        classx: 'BSIT',
        comment: "hello"
    },
    {
        id: uuid(),
        name: 'faizan',
        age: 85,
        gender: "Animale",
        classx: 'BSIT',
        comment: "you are very lazy guy in thw world"
    }
]


app.get('/persontable', (req, res) => {
    res.render('persontable', { comments })
})

app.get('/singlePersonInfo/:id', (req, res) => {
    const { id } = req.params;
    const information = comments.find(c => c.id === id)
    res.render('singlePersonInfo', { information })

})

app.get('/singlePersonInfo/:id/edit', (req, res) => {
    const { id } = req.params;
    const information = comments.find(c => c.id === id);
    res.render('edit', { information })
})

app.get('/addNewUser', (req, res) => {
    res.render('addnewuser', { comments })
})

app.post('/addNewUser', (req, res) => {
    const { name, age, gender, classx } = req.body;
    comments.push({ name, age, gender, classx, id: uuid() })
    res.redirect('/persontable')
})

// app.patch('/singlePersonInfo/:id', (req, res) => {
//     const { id } = req.params;
//     const updateuserinfo = req.body.name;
//     const founduser = comments.find(c => c.id === id)
//     console.log(founduser)
//     founduser.name = updateuserinfo
//     res.redirect('/persontable')
// })

app.patch('/singlePersonInfo/:id', (req, res) => {
    const { id } = req.params;
    const updateUserInfo = req.body.name;
    const foundUser = comments.find(c => c.id === id);
    foundUser.name = updateUserInfo;
    res.redirect('/persontable')
})

///// to delelte a user using express app.delete() method//
app.get('/delinfo/:id', (req, res) => {
    const { id } = req.params
    const delinfo = comments.filter(c => c.id !== id)
    comments = delinfo
    res.redirect('/persontable')


})



app.listen(5555, () => {
    console.log('sever runnign on time 5555...pe')

})

