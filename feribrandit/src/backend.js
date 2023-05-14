const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

mongoose.connect('mongodb://localhost:27017/feristore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a user schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

// Create a user model
const User = mongoose.model('User', userSchema);

// Handle form submission
app.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Create a new user instance
  const user = new User({
    firstName,
    lastName,
    email,
    password
  });

  // Save the user to the database 
  user.save()
    .then(() => {
      console.log('User saved:', user);
      res.status(200).json({ message: 'User registered successfully' });
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      res.status(500).json({ message: 'An error occurred' });
    });
});
export default app;