const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    console.error('Error:', err);
    // Incorrect error handling: sends the error as a response
    res.status(500).send(err); 
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 1000);
  });
}