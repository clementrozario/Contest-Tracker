const express = require("express");
const Contest = require("../models/Contest");
const router = express.Router();

// all contest
router.get("/",async(req,res)=>{
    try{
        const contests = await Contest.find();
        res.json(contests);
    }catch(error){
        res.status(500).json({message:"Error in fetching the data",error})
    }
});

// new contest
router.post("/",(req,res)=>{
    try{
        const newContest = new Contest(req.body);
        newContest.save();
        res.status(201).json(newContest);
    }catch(error){
        res.status(500).json({message:"Eroor in adding contest",error});
    }
})

//upcoming contest
router.get("/upcoming", async (req, res) => {
    try {
      const upcomingContests = await Contest.find({ isPast: false });
      res.json(upcomingContests);
    } catch (error) {
      res.status(500).json({ message: "Error fetching upcoming contests", error });
    }
  });
  
  //past contest
  router.get("/past", async (req, res) => {
    try {
      const pastContests = await Contest.find({ isPast: true });
      res.json(pastContests);
    } catch (error) {
      res.status(500).json({ message: "Error fetching past contests", error });
    }
  });
  
  module.exports = router;