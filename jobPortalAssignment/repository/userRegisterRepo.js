const userModel = require('../model/userRegister');

const saveData = async (data) => {
    const response = await userModel.create(data);
    return response;
};

const getData = async () => {
    const response = await userModel.find();
    return response;
};


const userLogin = async (email, password) => {
    const response = await userModel.findOne({ Email: email, Password: password });
    return response;
}

module.exports = { saveData, getData, userLogin };