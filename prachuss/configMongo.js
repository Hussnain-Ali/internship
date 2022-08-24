import mongoose from 'mongoose';
const connection = await mongoose.connect('mongodb://localhost:27017/prachuss')
    .then(() => {
        console.log("connected")
    }).catch(err => console.log(err));


export default connection;