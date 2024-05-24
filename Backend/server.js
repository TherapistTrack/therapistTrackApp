require('dotenv').config()
const express = require('express')
const cors = require('cors')
const setupSwagger = require('./docs/swaggerConfig')

const app = express()
app.use(express.json())
app.use(cors())

// Swagger setup
setupSwagger(app)

// Import Routes
const userRoutes = require('./routes/userRoutes')
const fileRoutes = require('./routes/fileRoutes')
const authRoutes = require('./routes/authRoutes')

// Use Routes
app.use('/api/users', userRoutes)
app.use('/api/files', fileRoutes)
app.use('/api/auth', authRoutes)

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start the Server
const PORT = process.env.API_PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
