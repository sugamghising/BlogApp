import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import { connectDb } from './config/db';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


app.get('/',(req,res) =>{
    res.send('Hello from backend.')
})

connectDb();

app.listen(PORT , () =>{
    console.log(`Server app listening to PORT ${PORT}`);
})