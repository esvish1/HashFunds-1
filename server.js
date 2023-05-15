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
  title: String,
  cost: String,
  date:String,
  imageurl:String,
  Description:String,
  pan:String,
  hospital:String,
  aadhar:String,
});

// Create a model for the form data
const FormData = mongoose.model('FormData', formDataSchema);

const contactUsSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

// Create a model for the form data
const ContactUs = mongoose.model('ContactUs', contactUsSchema);

// Define a POST endpoint for the form data
app.post('/api/form-data', async (req, res) => {
  try {
    console.log(req.body);
    // Create a new form data object
    const formData = new FormData({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      email: req.body.email,
      country: req.body.country,
      phone: req.body.phone,
      title: req.body.title,
      cost: req.body.amount,
      date:req.body.date,
      imageurl:req.body.imageurl,
      Description:req.body.Description,
      pan:req.body.pan,
      hospital:req.body.hospital,
      aadhar:req.body.aadhar,
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

app.get('/api/form-data', async (req, res) => {
  try {
    // Retrieve all form data from the database
    const formData = await FormData.find();

    // Send the form data as a response
    res.json(formData);
  } catch (error) {
    // Send an error response
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/ContactUS', async (req, res) => {
  try {
    console.log(req.body);
    // Create a new form data object
    const contactUs = new ContactUs({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });

    // Save the form data object to the database
    await contactUs.save();

    // Send a success response
    res.json({ success: true });
  } catch (error) {
    // Send an error response
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/ContactUS', async (req, res) => {
  try {
    // Retrieve all form data from the database
    const contactUs = await ContactUs.find();

    // Send the form data as a response
    res.json(contactUs);
  } catch (error) {
    // Send an error response
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/form-data/:id', async (req, res) => {
  try {
    const id = req.params.id;
    // Find the form data object with the given ID and delete it
    const deletedFormData = await FormData.findByIdAndDelete(id);

    // If no form data object was found with the given ID, return an error response
    if (!deletedFormData) {
      return res.status(404).json({ error: 'Form data not found' });
    }

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
  