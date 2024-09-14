import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()
import {router} from './routes/user.js'
import cors from 'cors'
import mongoose from 'mongoose'
//Importing dbConnector

try {
   await mongoose.connect('mongodb://localhost/27017/Global Speak', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   }).then(() => {
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



app.listen(process.env.PORT, () => {
   console.log("Server is running on port ", process.env.PORT) 
})