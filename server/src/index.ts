import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import helmet from 'helmet'
import { connectDb } from './config/db';
import MongoStore from 'connect-mongo';
import session from 'express-session'


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//middleware
app.use(helmet());
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

app.use(
    session({
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
      cookie: { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 },
    })
  );



app.get('/',(req,res) =>{
    res.send('Hello from backend.')
})

connectDb();

app.listen(PORT , () =>{
    console.log(`Server app listening to PORT ${PORT}`);
})