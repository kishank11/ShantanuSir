const express = require("express");
const app = express();
const db = require("./config/db")
const router = require("./routes/routes");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));
app.use("/api",router)


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})