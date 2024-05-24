const path = require('path')

exports.uploadFile = (req, res) => {
  res.send('Archivo subido correctamente')
}

exports.getFile = (req, res) => {
  const filename = req.params.filename
  const filePath = path.join(__dirname, '..', 'uploads', filename)

  res.sendFile(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.status(404).send('Archivo no encontrado')
      } else {
        res.status(500).send('Error al procesar la solicitud')
      }
    }
  })
}
