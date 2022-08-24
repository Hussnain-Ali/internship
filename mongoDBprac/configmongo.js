import mongoose from 'mongoose';
const mongose = mongoose.connect('mongodb://localhost:27017/log').then(() => {
    console.log('connected successfullly')
}).catch((error) => console.log(error))


export default mongose;