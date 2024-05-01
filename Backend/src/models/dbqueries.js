const mongoose = require('mongoose');
const connectDB = require('../../dbConfig');

connectDB();

const UsuarioSchema = new mongoose.Schema({
    username: String,
    password: String,
    salt: String
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

const findUsuario = async (username) => {
    try {
        const result = await Usuario.find({ username: username });
        return result;
    } catch (error) {
        console.error('Error executing MongoDB query:', error);
        throw error;
    }
};

module.exports = findUsuario