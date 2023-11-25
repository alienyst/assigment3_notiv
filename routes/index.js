const express = require('express');
const router = express.Router()
const routerCustomers= require('./customer');
const errorHandler = require("../middlewares/errorHandler");

router.get("/", (req,res)=>{
    res.send("HomePage");
});


router.use(errorHandler);

router.use("/customer", routerCustomers)


module.exports = router;