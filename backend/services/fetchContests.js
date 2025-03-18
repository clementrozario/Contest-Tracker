const axios = require("axios");

const fetchCodeforcesContests = async () => {
    try {
        const response = await axios.get("https://codeforces.com/api/contest.list");

        if (response.status !== 200) {
            throw new Error("Failed to fetch Codeforces contests");
        }

        const contests = response.data.result.map((contest) => ({
            name: contest.name,
            platform: "Codeforces",
            date: new Date(contest.startTimeSeconds * 1000),
            duration: contest.durationSeconds / 60,
            url: `https://codeforces.com/contest/${contest.id}`,
            isPast: contest.phase === "FINISHED",
        }));

        return contests;
    } catch (error) {
        console.error("Error fetching Codeforces contests:", error.message);
        return [];
    }
};

module.exports = { fetchCodeforcesContests }; 
