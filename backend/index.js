import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()
import router from './routes/user.js'
import jobRoutes from './routes/jobRoutes.js'
import cors from 'cors'
import mongoose from 'mongoose'
//Importing dbConnector

try {
   await mongoose.connect('mongodb://127.0.0.1:27017/Global-Speak').then(() => {
     console.log('MongoDB connected');
   })
 } catch (err) {
   console.log('Connection to database failed!!')
   console.error(err.message);
   process.exit(1);
 }



const app = express()
app.use(express.json())
app.use(cors({origin:'*'}))
app.use(express.urlencoded({extended:true}))

app.use('/auth',router)
app.use('/api',jobRoutes)


app.listen(process.env.PORT, () => {
   console.log("Server is running on port ", process.env.PORT) 
})