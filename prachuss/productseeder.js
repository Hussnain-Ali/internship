import connection from "./configMongo.js";
import product from './productSchema.js'

connection;



async function productData() {

    product.insertMany({ name: 'shampoo', price: 1, desc: "this is very usefull", stock: true, });
    const foundproduct = await product.findOne({ name: 'shampoo' })
    foundproduct.greet();
}

productData()

    .then(() => console.log("insert"))

    .catch((e) => console.log(e.properties.message));