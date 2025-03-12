const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const Users = [
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "age": 28,
    "city": "New York"
  },
  {
    "name": "Bob Smith",
    "email": "bob.smith@example.com",
    "age": 34,
    "city": "Los Angeles"
  },
  {
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "age": 22,
    "city": "Chicago"
  },
  {
    "name": "Diana Prince",
    "email": "diana.prince@example.com",
    "age": 30,
    "city": "Wonderland"
  },
  {
    "name": "Ethan Hunt",
    "email": "ethan.hunt@example.com",
    "age": 40,
    "city": "San Francisco"
  }
];

app.get('/Users', (req, res) => {
  try {
    res.status(200).json(Users);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving Users', error });
  }
});

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
