const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
dbConnect.connectMysql();
// parse requests of content-type - application / json
app.use(express.json());
//app.get("/", (res) => {
//    res.json({
//        message: "Welcome to my MongoDB application."
//    });
//});

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// set port, listen for requests
const PORT = 3306;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});