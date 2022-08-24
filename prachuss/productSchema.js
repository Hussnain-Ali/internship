import mongoose from "mongoose";
import connection from "./configMongo.js";

connection;

const productschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [12, 'name is too large']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price Must be Positive']
    },
    desc: String,
    stock: Boolean,
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})
productschema.methods.greet = function () {
    console.log("Hello!!!!")
}

const product = mongoose.model('product', productschema);

export default product;
