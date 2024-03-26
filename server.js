require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Render a form for entering environment data
app.get('/', (req, res) => {
  res.render('index'); // Assuming 'index.ejs' exists under the 'views' directory
});

// Route to handle form submission and update .env variables
app.post('/update-environment', (req, res) => {
  // Here you'd update your environment variables; for this example, just log the input
  console.log(req.body.username, req.body.password);
  // Redirect to home to potentially display the token or a message
  res.redirect('/home');
});

// Route to display the login token
app.get('/home', async (req, res) => {
  try {
    const { data } = await axios.post(`${process.env.SERVER_ADDRESS}/api/authenticate`, {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    });
    res.render('home', { token: data.token }); // Pass the token to the 'home.ejs' view
  } catch (error) {
    res.status(500).render('error', { error: error.toString() }); // Assuming 'error.ejs' exists
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
