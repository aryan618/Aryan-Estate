import express from 'express';
import { test } from '../controllers/user.controller.js';

const router=express.Router();

// router.get('/test',(req,res)=>{
//     res.send('Kesa hae bidu');
// });

router.get('/test',test);

export default router;