import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import filesRouter from './routes/files.js'

const PORT = process.env.PORT
const app = express()
await mongoose.connect(process.env.MONGO_URI)

app.use(cors({
    origin: process.env.FRONT_ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use('/api/files', filesRouter)
app.get('/', (req, res) => { res.send('hello') })
app.listen(PORT, (req, res) => { console.log(`server is running: localhost:${PORT}`) })
