const service = require('../service/applyService');

const applyJob = async (req, res) => {
    try {
        const data = req.body;
        const response = await service.saveApplication(data);
        res.status(200).json(response);
        console.log("application saved successfully...");
    } catch (error) {
        console.log("could not save application", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { applyJob };
