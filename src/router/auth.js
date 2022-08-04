const express = require("express");
const router = express.Router();

const User = require("../models/usermessage");

router.get("/", (req, res)=>{
    res.status(200).render("index")
})
// router.get("/about", (req, res)=>{
//     res.status(200).render("about")
// })
// router.get("/services", (req, res)=>{
//     res.status(200).render("services")
// })
// router.get("/contact", (req, res)=>{
//     res.status(200).render("contact")
// })


// router.post("/contact", async(req, res)=>{
//     try{
//         const userData = new User(req.body);
//         await userData.save();
//         res.status(201).render("index")
//     }catch(error){
//         console.log(error);
//     }
// });

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