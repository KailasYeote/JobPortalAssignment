require('dotenv').config();

const express = require('express');
const db=require('./utils/db')
const app = express();
app.use(express.json());

const userRouter=require('./routes/userRegisterRoutes')
const jobRouter=require('./routes/jobRoutes')
const applyRouter=require('./routes/applyRoutes')

app.use('/', userRouter)
app.use('/', jobRouter)
app.use('/', applyRouter)
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});