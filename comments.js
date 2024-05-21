// Create web server
// 1. Load comments from comments.json
// 2. Serve comments.json as JSON response to GET /comments
// 3. Accept POST request to /comments and save the comment to comments.json
// 4. Serve comments.json as JSON response to GET /comments

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.get('/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const comments = JSON.parse(data);
    const newComment = {
      id: Date.now(),
