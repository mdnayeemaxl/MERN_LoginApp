// const express =require('express')
// const cors = require('cors');
// const morgan = require('morgan');

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js'

const app =express()

app.use(express.json())
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port =8080;



app.use('/app', router)

connect().then(() =>{
    try{
        app.listen(port,()=>{
            console.log('MasaAllah server is running')
        });
    } catch (error){
        console.log('Cannot connect to server');
    }
})

