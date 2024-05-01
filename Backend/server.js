const express = require('express');
const path = require('path');
const app = express();
const upload = require('./src/utils/multerConfig');
const authenticate = require('./src/utils/authentication');
app.use(express.json());


const PORT = 3001;

app.post('/upload', upload.single('pdf'), (req, res) => {
    res.send('Archivo subido correctamente');
});

app.get('/pdf/:filename', (req, res) => {
    const filename = req.params.filename;

    const filePath = path.join(__dirname, 'uploads', filename);

    res.sendFile(filePath, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.status(404).send('Archivo no encontrado');
            } else {
                res.status(500).send('Error al procesar la solicitud');
            }
        }
    });
});

app.post('/login', (req, res) => {

    const { username, password } = req.body;
    const authenticated = authenticate(username, password);

    if (authenticated) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);