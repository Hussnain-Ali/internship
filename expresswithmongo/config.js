import mongoose from "mongoose";
const connection = mongoose.connect('mongodb://localhost:27017/prachuss')
    .then(() => {
        console.log("successfully connected")
    }).catch(() => {
        console.log('errorrrr')
    })


export default connection;