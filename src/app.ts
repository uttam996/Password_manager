import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();




console.log(process.env.MONGO_URL);

import PasswordRouter from './routes/password.routes';



const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use("/password",
(res,req,next)=>{
  setTimeout(()=>{
    next();
  },1000);

}
, PasswordRouter);



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT }`);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected to MongoDB');
});