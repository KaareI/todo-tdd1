const mongoose = require("mongoose");

async function connect () {
    try {
        await mongoose.connect(
         "mongodb+srv://kseppel:8O3wyJnWj4MKDB1F@mongo1.pomlbhp.mongodb.net/tests",
            { useNewUrlParser: true }
    );
    } catch (err) {
        console.error("Error connecting to mongodb")
        console.error(err)
    }
}

module.exports = { connect }




