const express = require('express')
const mongoose = require('mongoose')
const mongoString1 = process.env.DATABASE_URL
const database = mongoose.connection

const app = express()

const routes = require('./routes/routes')

app.use('/api', routes)

app.use(express.json())

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

// Post Method



app.listen(3000, () => {
    console.log("Server is running on Port 3000")
    // console.log(mongoString1)
})