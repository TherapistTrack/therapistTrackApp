const bcrypt = require('bcrypt')
const { Usuario, findUsuario } = require('../models/userModel')

const SALT_ROUNDS = 10

exports.registerUser = async (req, res) => {
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
}

exports.deleteUser = async (req, res) => {
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
}

exports.updateUser = async (req, res) => {
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
}

exports.listUser = async (req, res) => {
  try {
    const user = await findUsuario(req.query.username)
    if (!user) {
      throw new Error('User not found')
    }
    res.json({ status: 'success', data: user })
  } catch (error) {
    res.status(404).send({ status: 'error', message: error.message })
  }
}
