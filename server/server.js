const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const suggestionRoutes = require('./routes/suggestionRoutes');

const app = express();
const PORT = 5000;

// Connect MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/suggestions', suggestionRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API is running...');
});
