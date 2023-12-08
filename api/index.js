import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO)
.then(()=>console.log(`Connected to the database`))
.catch(err => console.error(err));
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(5000, () => {
  console.log('App listening on port 5000!');
});