const mongoose = require('mongoose')
const connectDB = require('../config/dbConfig')

connectDB()

const UsuarioSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    phones: [{ type: String }],
    rol: { type: String, required: true },
    mails: [{ type: String }],
    collegiateNumber: String,
    specialty: String,
    startDate: Date,
    endDate: Date,
    DPI: String
  },
  {
    timestamps: true
  }
)

const Usuario = mongoose.model('Usuario', UsuarioSchema)

const findUsuario = async (username) => {
  try {
    const result = await Usuario.findOne({ username })
    return result
  } catch (error) {
    console.error('Error executing MongoDB query:', error)
    throw error
  }
}

module.exports = {
  Usuario,
  findUsuario
}
