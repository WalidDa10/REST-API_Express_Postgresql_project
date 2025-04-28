import express, { Router } from "express"
import { 
    getAllUsers , 
    createUser , 
    getUserById , 
    updateUser ,
    deleteUser  } from "../controllers/userControllre.js"; 

import validaterUser from "../Middlewares/inputValidator.js";

const router = express.Router();


router.get('/user', getAllUsers);
router.post('/user',validaterUser ,createUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', validaterUser,updateUser);
router.delete('/user/:id', deleteUser);



// router.get('/user', async (req, res) => {
//     res.send(`The endpoint is work`)
// } )

export default router