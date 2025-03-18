const express = require("express");
const Contest = require("../models/Contest");
const { fetchCodeforcesContests } = require("../services/fetchContests"); 

const router = express.Router();

router.get("/fetch-contests", async (req, res) => {
    try {
        const codeforcesContests = await fetchCodeforcesContests();
        const allContests = [...codeforcesContests];

        await Contest.deleteMany();
        await Contest.insertMany(allContests);

        res.json({ message: "Contests fetched successfully", contests: allContests });
    } catch (error) {
        console.error("Error in storing contests:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router; 
