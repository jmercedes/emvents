// Initial file
const express = require('express');
const bodyParser = require('body-parser')

const server = express();
const PORT = 3000;



server.listen(PORT, () => {
  console.log(`Server is runnig on ${PORT}`);
})


// New routes
// Get
server.get('/', (req, res) => {
  res.send('this is a get request')
})

// Post
server.post('/', (req, res) => {
  res.send('this is a post request')
})
