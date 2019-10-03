const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const app = express();
app.use(express.json())

app.use(routes)
mongoose.connect('mongodb+srv://omnistack:omnistack@oministack-05zwk.mongodb.net/admin?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
const port = process.env.PORT || 3050
app.listen(port,() => {
    console.log(`ONLINE PORT: ${port}`)
})