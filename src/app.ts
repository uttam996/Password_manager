import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';


import PasswordRouter from './routes/password.routes';
import { MONGO_URL, PORT } from './constant';
import Password from './model/password.model';
import { Encrypt } from './utlits';



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
  return console.log(`Express is listening at http://localhost:${PORT }`);
});

mongoose.connect(MONGO_URL).then(() => {
  console.log('Connected to MongoDB ' + MONGO_URL);
});

