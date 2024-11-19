const posts = require('./posts');
// console.log(posts);

//express
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); //resa pubblica asset statici utilizzando middleware

app.get('/', (req, res) => {
  res.send('blog server');
});

app.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});
