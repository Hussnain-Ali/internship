import mongoose from 'mongoose'
import mongose from './configmongo.js'
mongose;
const empSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    shift: String
})

const employee = mongoose.model("employee", empSchema);
export default employee;