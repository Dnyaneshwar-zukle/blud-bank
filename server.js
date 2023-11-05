const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/DB");

// dokenv
dotenv.config();

//mongoDb
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//test rout
app.use('/api/v1/test', require('./routers/testRoutes'));
app.use('/api/v1/auth', require('./routers/authRoutes'));

//port
const PORT = process.PORT || 4000;

app.listen(PORT, () => {
   console.log(
      `Node Server Runnng In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      );
});