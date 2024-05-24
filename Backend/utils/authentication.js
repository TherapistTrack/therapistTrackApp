const findUsuario = require('../models/userModel')
const hashPassword = require('./hashing')

async function authenticate(username, password) {
  try {
    const result = await findUsuario(username)

    if (result && result.length > 0) {
      const user = result[0]
      const validUsername = user.username
      const validPassword = user.password
      const salt = user.salt

      const fullPassword = salt + password
      const encryptedPassword = hashPassword(fullPassword)

      if (username === validUsername && encryptedPassword === validPassword) {
        return { username: user.username, name: user.name, rol: user.rol }
      }
    }
    return null
  } catch (error) {
    console.error('Authentication error:', error)
    throw error
  }
}

module.exports = authenticate
