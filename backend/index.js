import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/route.js';


const app=express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);



const PORT = 800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

Connection();