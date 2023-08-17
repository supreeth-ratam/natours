const express = require('express');
const app = express();
const blogRouter = require('./routers/blogRouter')


app.use(express.json())
app.use('/blogs',blogRouter)


module.exports = app;
