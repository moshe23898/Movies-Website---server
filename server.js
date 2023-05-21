const express = require('express');


const userRouter = require('./routers/userRouter');
const movieRouter = require('./routers/movieRouter');
const memberRouter = require('./routers/memberRouter');
const subcriptionRouter = require('./routers/subcriptionRouter');


var cors = require('cors')

const app = express();

app.use(cors())

require('./config/database');


app.use(express.json())

app.use("/api/user", userRouter);
app.use("/api/movie", movieRouter);
app.use("/api/member", memberRouter);
app.use("/api/subcription", subcriptionRouter);

app.listen(8000);