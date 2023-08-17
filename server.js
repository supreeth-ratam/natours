const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE).then(console.log("database connected"))


const app = require('./app')

app.listen(3030,'127.0.0.1',()=>console.log("server created at 127.0.0.1:3030"))
