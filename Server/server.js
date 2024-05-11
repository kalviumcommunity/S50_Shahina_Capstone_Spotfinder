const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./config/connect");
const userrouter = require("./Routes/User_routes");
const postRoutes = require("./Routes/Post_routes");
const Joi = require('joi')

require("dotenv").config();


const cors = require("cors");
connectDB();


app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true
  }
))

app.use(express.json());



app.use("/user", userrouter);
app.use("/post", postRoutes)


app.listen(port, () => {
  console.log(`server is running on localhost ${port}`);
});
