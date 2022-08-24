import connection from "./configMongo.js";
import User from "./userSchema.js";

connection;

async function userdata() {
    await User.insertMany([{
        name: "hus",
        age: 23,
        email: 'hussnainali571580@gmail.com'
    }, {
        name: "sgh",
        age: 25,
        email: 'shahiq123@gmail.com'
    }, {
        name: "hmza",
        age: 24,
        email: 'hamza456@gmail.com'
    }])
    await User.updateOne({ name: "sgh" }, { $set: { name: 'hussnainali' } }).then((data) => console.log(data))
    await User.deleteOne({ nama: "hus" }).then((data) => console.log(data))
    await User.findOneAndDelete({ name: "hus" }).then((data) => console.log(data))
    process.exit()
}
userdata().then(() => {
    console.log('successfully inserted')
}).catch((error) => {
    console.log(error)
})