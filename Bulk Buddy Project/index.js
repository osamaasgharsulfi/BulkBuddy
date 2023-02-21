const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

const port = process.env.PORT || 5000;
/* app.use(cors); */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/", require("./routes/signUp.Routes"));

app.use("/", require("./routes/login.Routes")); 

app.use("/", require("./routes/Category/addCategory.Routes"));
app.use("/", require("./routes/Category/getAllCategory.Routes"));
app.use("/", require("./routes/Category/updateCategory.Routes"));
app.use("/", require("./routes/Product/Product.Routes"));


app.listen(port, () => console.log(`Server started on port ${port}`));