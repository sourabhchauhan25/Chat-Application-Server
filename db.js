const mongoose = require('mongoose');

function connect() {
  mongoose
    .connect('mongodb://localhost/chat_app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Connected to MongoDB database!'))
    .catch((error) => console.error('MongoDB connection error:', error));
}

module.exports = { connect };
