const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/userController");


router.get("/", (req, res) => {
    Controllers.getUsers(res);
});

router.post("/create", (req, res) => {
    Controllers.createUsers(req.body, res);
});


module.exports = router;