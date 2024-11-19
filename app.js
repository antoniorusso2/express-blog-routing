//express
const express = require('express');
const app = express();
const port = 3000;

//router
const postsRouter = require('./routers/posts');

app.use(express.static('public')); //resa pubblica asset statici utilizzando middleware

app.get('/', (req, res) => {
  res.send('blog server');
});

//routing CRUD - REST
app.use('/posts', postsRouter);

app.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});
