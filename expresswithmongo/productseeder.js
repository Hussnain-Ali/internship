import productivity from "./model/product.js";
import connection from "./config.js";
connection;
async function productdata() {
    await productivity.insertMany([
        {
            name: "hussnain",
            price: 200,
            category: 'fruit'
        },
        {
            name: "hussnain",
            price: 200,
            category: 'vegetable'
        },
        {
            name: "hussnain",
            price: 200,
            category: 'fruit'

        },
        {
            name: "hussnain",
            price: 200,
            category: 'fruit'


        }
    ]
    )
}

productdata().then(() => {
    console.log("success")
}).catch(() => {
    console.log("error")
})