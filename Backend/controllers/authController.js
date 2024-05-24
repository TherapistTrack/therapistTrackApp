const jwt = require('jsonwebtoken')
const { authenticate } = require('../utils/authentication')

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = '1h'

exports.login = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await authenticate(username, password)

    if (user) {
      const token = jwt.sign(
        { username: user.username, name: user.name, rol: user.rol },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      )
      res.json({ message: 'Login successful', token })
    } else {
      res.status(401).send('Invalid credentials')
    }
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).send('Authentication failed')
  }
}
