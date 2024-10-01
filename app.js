// Importing express module
const express = require('express');

// Initializing the app
const app = express();

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Setting up a GET route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to the Express Server.');
});

// Setting up another GET route for "/about" URL
app.get('/about', (req, res) => {
    res.send('This is a simple Express app.');
});

// Setting up a POST route
app.post('/submit', (req, res) => {
    const { name, age } = req.body; // Extracting data from request body
    if (!name || !age) {
        return res.status(400).send('Please provide both name and age');
    }
    res.send(`Hello ${name}, you are ${age} years old.`);
});

// Setting up a dynamic route with URL parameters
app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    res.send(`User ID: ${userId}`);
});

// Setting up a 404 handler for unmatched routes
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Starting the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
