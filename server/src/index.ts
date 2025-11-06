import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import helmet from 'helmet'
import { connectDb } from './config/db';
import MongoStore from 'connect-mongo';
import session from 'express-session'
import articleRouter from './routes/articleRoutes';
import adminRouter from './routes/adminRoutes';


const app = express();
dotenv.config();
connectDb();


const PORT = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URI;
if (!mongoUrl) {
  throw new Error('MONGO_URI is not set in environment variables');
}

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Parse multiple frontend URLs (comma-separated)
const allowedOrigins = FRONTEND_URL.split(',').map(url => url.trim());

//middleware
app.use(helmet());
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json())
app.use(morgan('dev'))

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl }),
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax' // Required for cross-domain cookies
    },
  })
);



app.get('/', (req, res) => {
  res.send('Hello from backend.')
})

app.use('/api/articles/', articleRouter);
app.use('/api/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Server app listening to PORT ${PORT}`);
})