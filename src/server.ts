import express from 'express';
import * as dotenv from 'dotenv';
import router from './router/userRouter';
import db from './config/dbConnect';

const app = express();
dotenv.config()

app.use(express.json())
app.use('/users', router)

db.on('error', err => {console.log(`error: ${err}`)})
db.once('open', () => {console.log(`Database sucessfuly connected! :)`)})

app.get('/', (req, res) => {res.send('Mainpage')})

const port = process.env.PORT;
app.listen(port, () => {console.log(`Server running on http://localhost:${port}`)})