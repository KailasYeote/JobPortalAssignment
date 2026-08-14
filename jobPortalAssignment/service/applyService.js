const repository = require('../repository/applyRepo');

const saveApplication = async (data) => {
    try {
        const response = await repository.saveApplication(data);
        return response;
    } catch (error) {
        console.log("error occurred during saving application", error);
        throw error;
    }
};

module.exports = { saveApplication };
