const express = require ('express')
const mongoose = require('mongoose')
const routes = express.Router();

routes.get('/', (req,res) => {
    return res.json({message: 'Welcome'})
})

routes.post("/user", (req, res) => {
   return res.json({message: "Users"})
})


module.exports = routes