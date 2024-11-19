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

//index --- elenco di tutti i posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

//show --- mostrare un singolo post con l'id specificato
app.get('/posts/:id', (req, res) => {
  // console.log(req.params);
  const id = req.params.id;
  res.send(`post con id n. ${id}`);
});

//store --- creazione nuovo elemento
app.post('/posts', (req, res) => {
  res.send('creo un nuovo elemento');
});

//update --- modificare interamente un elemento
app.put('/posts/:id', (req, res) => {
  const id = req.params.id;
  res.send(`modifico l\'elemento con id: ${id}`);
});

//modify --- modificare parzialmente un elemento
app.patch('/posts/:id', (req, res) => {
  const id = req.params.id;
  res.send(`modifico in parte l'elemento con id: ${id}`);
});

//destroy --- eliminare un elemento
app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  res.send(`elimino l\' elemento con id n. ${id} `);
});
app.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});
