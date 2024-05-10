const mongoose = require('mongoose')

const connectDB = async () => {
  const dbUri = 'mongodb://admin:1234@database:27017/therapisttrack'
  try {
    await mongoose.connect(dbUri)
    console.log('Successfully connected to MongoDB')

    const { readyState } = mongoose.connection
    if (readyState === 1) {
      console.log('MongoDB is connected')
    } else {
      console.error('Failed to connect to MongoDB: State is', readyState)
      process.exit(1)
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
    process.exit(1)
  }
}

process.on('SIGINT', async () => {
  console.log('Closing MongoDB connection')
  await mongoose.connection.close()
  console.log('MongoDB connection closed')
  process.exit(0)
})

module.exports = connectDB
