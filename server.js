const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'raz1234zZ',
  database: 'books-web',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', (req, res) => {
  const { fullName, userName, email, password } = req.body;

  const checkQuery = 'SELECT COUNT(*) as count FROM users WHERE UserName = ?';
  const checkValues = [userName];

  connection.query(checkQuery, checkValues, (checkError, checkResults) => {
    if (checkError) {
      console.error('Error executing MySQL query:', checkError);
      return res.status(500).json({ error: 'Database query error' });
    }

    if (checkResults[0].count > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const insertQuery = 'INSERT INTO users (FullName, UserName, Email, Password) VALUES (?, ?, ?, ?)';
    const insertValues = [fullName, userName, email, password];

    connection.query(insertQuery, insertValues, (insertError, _insertResults) => {
      if (insertError) {
        console.error('Error executing MySQL query:', insertError);
        return res.status(500).json({ error: 'Database query error' });
      }

      return res.json({ message: 'User signup successful' });
    });
  });
});

app.post('/login', (req, res) => {
  const { userName, password } = req.body;
  console.log('Received parameters:', userName, password);

  const query = 'SELECT COUNT(*) as count FROM users WHERE UserName = ? AND Password = ?';
  const values = [userName, password];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      return res.status(500).json({ error: 'Database query error' });
    }

    if (results[0].count === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    return res.json({ message: 'User login successful' });
  });
});

app.post('/icon', (req, res) => {
  const { username, icon } = req.body;
  console.log('Received parameters:', username, icon);
  // Update the user's record in the database with the icon URL or path
  const updateQuery = 'UPDATE users SET icon = ? WHERE UserName = ?';
  const updateValues = [icon, username];
  connection.query(updateQuery, updateValues, (err, result) => {
    if (err) {
      console.error('Error updating user icon:', err);
      res.status(500).json({ error: 'Failed to update user icon' });
    } else {
      res.json({ success: true });
    }
  });
});

app.get('/auth', (req, res) => {
  const username = req.query.username;
  // Query the database to retrieve the icon URL based on the username
  const query = 'SELECT icon FROM users WHERE UserName = ?';
  const values = [username];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error retrieving icon:', error);
      return res.status(500).json({ error: 'Failed to retrieve icon' });
    }

    if (results.length === 0 || !results[0].icon) {
      // If no icon found for the user, return a default icon URL or null
      const defaulticon = '/assets/icons/icon1.png'; // Replace this with your default icon URL or null
      return res.json({ icon: defaulticon });
    }

    const icon = results[0].icon;
    return res.json({ icon });
  });
});

app.get('/books', (req, res) => {
  const query = 'SELECT * FROM cards WHERE category = "books" ORDER BY year DESC';

  connection.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// digital books
app.get('/digitalbooks', (req, res) => {
  const query = 'SELECT * FROM cards WHERE category = "digital books" ORDER BY year DESC';

  connection.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// API endpoint for searching books and TV shows
app.get('/search', (req, res) => {
  const query = req.query.q; // Get the search query from the request URL parameter
  if (!query) {
    return res.status(400).json({ error: 'Missing search query' });
  }
  const formattedQuery = query.replace(/\s+/g, '').replace(/\-/g, '').replace(/\./g, '');
  const searchQuery = '%' + formattedQuery + '%'; // Create a wildcard search query

  const sql = 'SELECT * FROM cards WHERE (category = "books" OR category = "digital books") AND (name LIKE ? OR REPLACE(REPLACE(REPLACE(name, " ", ""), "-", ""), ".", "") LIKE ?) ORDER BY year DESC';

  connection.query(sql, [searchQuery, searchQuery], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
});

// Save game score
app.post('/save-score', (req, res) => {
  const { userName, score } = req.body;
  const query = 'INSERT INTO user_scores (userName, score) VALUES (?, ?)';
  connection.query(query, [userName, score], (err, result) => {
    if (err) {
      console.error('Error saving score:', err);
      res.status(500).json({ error: 'Failed to save score' });
    } else {
      res.json({ success: true });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
