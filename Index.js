const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');

// Create the app
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// Connect to MongoDB database
db.connect();

// Register auth routes
app.use('/auth', authRoutes);

// Register chat routes
app.use('/chat', chatRoutes);

// Start the server
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
