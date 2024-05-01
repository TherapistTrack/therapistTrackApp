const findUsuario = require('../models/dbqueries');
const hashPassword  = require('./hashing');

async function authenticate(username, password) {
    const result = await findUsuario(username);

    if (result.length !== 0) {
        const validUsername = result[0].username;
        const validPassword = result[0].password;
        
        const fullPassword = result[0].salt + password;
        const encriptedPassword = hashPassword(fullPassword);

        if (username === validUsername && encriptedPassword === validPassword) {
            // Authentication successful
            return true;
        } else {
            // Authentication failed
            return false;
        }
    }
}

module.exports = authenticate;
