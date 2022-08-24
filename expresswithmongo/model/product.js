import mongoose from "mongoose";
import connection from "../config.js";
connection;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy']
    }

})

const productivity = mongoose.model('productivity', productSchema)

export default productivity; 