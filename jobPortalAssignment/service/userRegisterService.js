const repository = require('../repository/userRegisterRepo')

const saveData = async (data) => {
  try {
    const response = await repository.saveData(data)
    return response
  } catch (error) {
    console.log("error occured during the saving data")
  }
}

const getData = async () => {
  try {
    const response = await repository.getData()
    return response
  } catch (error) {
    console.log("error occured during the saving data")
  }
}


const userLogin = async (email, password) => {
  try {
    const response = await repository.userLogin(email, password);
    return response;
  } catch (error) {
    console.log("error occured during the user login")
  }
}

module.exports = { saveData, getData, userLogin }