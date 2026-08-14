const ApplyModel = require('../model/applyModel');

const saveApplication = async (data) => {
    const response = await ApplyModel.create(data);
    return response;
};

module.exports = { saveApplication };
