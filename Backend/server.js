require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { findUsuario, Usuario } = require('./src/models/dbqueries')
const upload = require('./src/utils/multerConfig')
const authenticate = require('./src/utils/authentication')

// GLOBAL CONFIGURATION
const SALT_ROUNDS = 10
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = '1h'

// SWAGGER CONFIGURATION
const setupSwagger = require('./APIdocs/swaggerConfig')
setupSwagger(app)

app.use(express.json())

app.post('/upload', upload.single('pdf'), (req, res) => {
  res.send('Archivo subido correctamente')
})

app.get('/pdf/:filename', (req, res) => {
  const filename = req.params.filename

  const filePath = path.join(__dirname, 'uploads', filename)

  res.sendFile(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.status(404).send('Archivo no encontrado')
      } else {
        res.status(500).send('Error al procesar la solicitud')
      }
    }
  })
})

app.post('/user/register', async (req, res) => {
  const {
    password,
    username,
    name,
    lastName,
    phones,
    rol,
    mails,
    collegiateNumber,
    specialty,
    startDate,
    endDate,
    DPI
  } = req.body

  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new Usuario({
      username,
      password: hashedPassword,
      salt,
      name,
      lastName,
      phones,
      rol,
      mails,
      collegiateNumber,
      specialty,
      startDate,
      endDate,
      DPI
    })

    await newUser.save()

    res
      .status(201)
      .send({ status: 'success', message: 'User registered successfully' })
  } catch (error) {
    console.error('Registration error:', error)
    if (error.code === 11000) {
      res
        .status(400)
        .send({ status: 'error', message: 'Username already exists.' })
    } else {
      res.status(400).send({ status: 'error', message: error.message })
    }
  }
})

app.delete('/user/delete', async (req, res) => {
  try {
    const result = await Usuario.updateOne(
      { username: req.body.username },
      { $set: { isActive: false } }
    )
    if (result.modifiedCount === 0) {
      throw new Error('User not found or already inactive')
    }
    res.send({ status: 'success', message: 'User marked as inactive' })
  } catch (error) {
    res.status(404).send({ status: 'error', message: error.message })
  }
})

app.put('/user/update', async (req, res) => {
  try {
    const result = await Usuario.updateOne(
      { username: req.body.username },
      { $set: req.body }
    )
    if (result.modifiedCount === 0) {
      throw new Error('User not found or no updates made')
    }
    res.send({ status: 'success', message: 'User updated successfully' })
  } catch (error) {
    res.status(400).send({ status: 'error', message: error.message })
  }
})

app.get('/user/list', async (req, res) => {
  try {
    const user = await findUsuario(req.query.username)
    if (!user) {
      throw new Error('User not found')
    }
    res.json({ status: 'success', data: user })
  } catch (error) {
    res.status(404).send({ status: 'error', message: error.message })
  }
})

app.post('/login', async (req, res) => {
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
})

const PORT = process.env.API_PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
