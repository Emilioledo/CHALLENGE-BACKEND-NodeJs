const express = require('express');
const sequelize = require('./database');

const app = express();

sequelize();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*Routes*/
//app.use("/task", require("./routes/task-routes"));
app.use("/auth", require("./routes/auth-routes"));

require("dotenv").config();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Connected on port: ${port}`);
});