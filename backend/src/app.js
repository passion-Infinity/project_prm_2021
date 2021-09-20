const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv/config');

const PORT = process.env.PORT || 3000;

const app = express();

// CORS
app.use(cors());
app.options('*', cors());

// Middleware
app.use(logger('tiny'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  '/public/uploads',
  express.static(path.join(__dirname, 'public/uploads')),
);

// Server listening port
app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
