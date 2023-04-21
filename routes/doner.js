const express = require('express');
const router =  express.Router();
const fetchuser = require('../middleware/getuser');
const Doners = require('../models/OrganDoner');
const { body, validationResult } = require('express-validator');

router.post('/adddonation', fetchuser, async (req, res)=>{
    try {
        
      
        const {hospital,familymember,organ} = req.body;
            const doners = new Doners({hospital,familymember,organ,user:req.user.id});
            const savedDoner= await doners.save();
            res.json(savedDoner);
        
    } 
    catch (err) {
        console.error(err);
        res.status(400).json({ error: err})
    }
})


router.get('/getdonerbyuser',fetchuser, async (req, res)=>{
    try {
        let doner = await Doners.find({ user: req.user.id});
        if(doner.length > 0) {
            res.json(doner);
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




