const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();

// Use middleware to parse JSON body and enable CORS
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://hash:hash@cluster0.uledmjc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  country: String,
  phone: String,
});

// Create a model for the form data
const FormData = mongoose.model('FormData', formDataSchema);

// Define a POST endpoint for the form data
app.post('/api/form-data', async (req, res) => {
  try {
    // Create a new form data object
    const formData = new FormData({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      email: req.body.email,
      country: req.body.country,
      phone: req.body.phone,
    });

    // Save the form data object to the database
    await formData.save();

    // Send a success response
    res.json({ success: true });
  } catch (error) {
    // Send an error response
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
