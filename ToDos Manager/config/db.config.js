function connectDB() {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/todosmngr')
    mongoose.connection.once('connected',() => console.log('DB connection established successfully.'))
}

module.exports = {connectDB}