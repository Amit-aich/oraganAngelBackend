const express = require('express');
const router =  express.Router();
const fetchuser = require('../middleware/getuser');
const Hospitals=require('../models/Hospitals')

router.post('/addhospital',fetchuser,async (req,res) =>{
    try {
        const {hospitalName,location,email,mobile,organ} = req.body;
        const hospitals =new Hospitals({hospitalName,location,email,mobile,organ});
        const savedhospitals=await hospitals.save();
        res.json(savedhospitals)
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err})
    }
})

router.get('/gethospitals',fetchuser,async (req,res)=>{
    try {
        let hospitals = await Hospitals.find()
        if(hospitals.length > 0) {
            res.json(hospitals);
        }
        else{
            res.json({message:"no doner"});
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err})
    }
})
module.exports = router;