import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()
import router from './routes/user.js'
import jobRoutes from './routes/jobRoutes.js'
import examRoutes from './routes/examRoutes.js'
import applicationRoutes from './routes/applicantsRoutes.js'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
const __dirname = path.dirname(import.meta.url);
//Importing dbConnector

try {
  const dbUrl = "mongodb+srv://lilndabose:xzLuzkg1MlkvIrqA@cluster0.mnivnpc.mongodb.net/global-speak"
  const dbUrlLocal = "mongodb://127.0.0.1:27017/Global-Speak"
   await mongoose.connect(dbUrl).then(() => {
     console.log('MongoDB connected');
   })
 } catch (err) {
   console.log('Connection to database failed!!')
   console.error(err.message);
   process.exit(1);
 }


const app = express()
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json())
app.use(cors({origin:'*'}))
app.use(express.urlencoded({extended:true}))


app.use('/auth',router)
app.use('/api',jobRoutes)
app.use('/api',examRoutes)
app.use('/api', applicationRoutes)

app.listen(process.env.PORT, () => {
   console.log("Server is running on port ", process.env.PORT) 
})