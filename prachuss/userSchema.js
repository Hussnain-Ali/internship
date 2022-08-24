import mongoose from 'mongoose';
import connection from './configMongo.js';
connection;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: [6, 'soo small'],
        max: [20, 'name is too large']
    },
    age: Number,
    email: String
})

const User = mongoose.model('User', userSchema);
export default User;