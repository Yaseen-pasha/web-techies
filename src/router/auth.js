const express = require("express");
const router = express.Router();

const User = require("../models/usermessage");

router.get("/", (req, res)=>{
    res.status(200).render("index")
})

router.post("/contact", (req, res)=>{
    const userData = new User(req.body);
    userData.save().then(()=>{
        res.status(201).render("success");
    }).catch((error)=>{
        console.log(error)
        res.status(201).render("error");
    });
});


router.get("*", (req, res)=>{
    res.status(200).render("")
});


module.exports = router;