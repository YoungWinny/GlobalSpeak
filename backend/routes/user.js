// routes/users.js
import express from 'express'
export const router = express.Router();
import {Login} from "../controllers/userController.js" 



router.route('/register').post(Login) 





