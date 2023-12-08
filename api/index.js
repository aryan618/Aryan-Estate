import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO)
.then(()=>console.log(`Connected to the database`))
.catch(err => console.error(err));
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.use('/api/user',userRouter)
app.listen(5000, () => {
  console.log('App listening on port 5000!');
});