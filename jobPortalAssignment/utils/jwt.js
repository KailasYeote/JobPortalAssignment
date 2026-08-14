const jwt = require('jsonwebtoken')
const secretKey = '12345'

const jsonAuthentication = (req, res) => {
  try {
    const headers = req.headers.authorization

    if (!headers) {
      return res.status(500).json("Token not found")

    }

    const token = headers.split("")[1];
    const decoded = jwt.verify(token, secretKey)
    req.user = decoded

  } catch (error) {
    res.status(401).json({ message: "Token Not found" })
    console.log("Token Not found...")
  }
}


const generateToken = (userData) => {
  try {
    const token = jwt.sign(userData, secretKey, {
      expiresIn: '7d'
    })
    return token
  } catch (error) {
    console.log("could not able to generate...", error)
    throw error
  }
}

module.exports = { jsonAuthentication, generateToken }