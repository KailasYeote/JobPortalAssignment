const service = require('../service/userRegisterService')
const { jsonAuthentication, generateToken } = require('../utils/jwt')

const saveData = async (req, res) => {
  try {
    const data = req.body
    const response = await service.saveData(data)

    const payload = {
      id: response._id,
      email: response.Email,
      password: response.Password,
    }
    const token = generateToken(payload)
    console.log(token, "TOken generataed successfully...")

    res.status(200).json(response)
    console.log("data saved successfully...")
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}

const getData = async (req, res) => {
  try {
    const response = await service.getData()
    res.status(200).json(response)
    console.log("data fetched successfully...")
  } catch (error) {
    console.log("could not getting the data", error)
    res.status(500).json({ message: "Internal server error" })
  }
}

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const response = await service.userLogin(email, password)
    if (!response) {
      return res.status(401).json({ message: "Invalid credentials" })
    }
    const payload = {
      id: response._id,
      email: response.Email,
      password: response.Password,
    }
    const token = generateToken(payload)
    console.log(token, "TOken generataed successfully...")
    res.status(200).json(response)
    console.log("data fetched successfully...")
  } catch (error) {
    console.log("could not getting the data", error)
    res.status(500).json({ message: "Internal server error" })
  }
}


module.exports = { saveData, getData, userLogin }