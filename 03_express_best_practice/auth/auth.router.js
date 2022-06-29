const express = require('express');
const authService = require('./auth.service');
const authRouter = express.Router();

authRouter.post('/login' , (req , res)=>{
    const login = authService.userLogin();
    res.json(login);    
});


module.exports = authRouter;