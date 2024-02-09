const express = require("express");

const dotenv = require("dotenv").config();
const errorHandler= require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

const port = process.env.PORT|| 3000;

app.use(express.json());
app.use("/api/contact",require("./routes/contactRoute"))
app.use("/api/contact",require("./routes/userRoute"))

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);

})