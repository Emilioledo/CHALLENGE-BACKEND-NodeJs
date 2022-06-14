const express = require('express');

const app = express();

require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//app.use("/task", require("./routes/task-routes"));
//app.use("/auth", require("./routes/auth-routes"));

require("dotenv").config();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Connected on port: ${port}`);
});