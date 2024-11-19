const express = require('express');
const posts = require('../posts.js');
// console.log(posts);
const router = express.Router();

//index --- elenco di tutti i posts
router.get('/', (req, res) => {
  res.json(posts);
});

//show --- mostrare un singolo post con l'id specificato
router.get('/:id', (req, res) => {
  // console.log(req.params);
  const id = parseInt(req.params.id);
  console.log(id);

  console.log(posts);
  const resElement = posts.find((post) => {
    return post.id === id;
  });

  // console.log(resElement);
  res.send(resElement);
});

//store --- creazione nuovo elemento
router.post('/', (req, res) => {
  res.send('creo un nuovo elemento');
});

//update --- modificare interamente un elemento
router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`modifico l\'elemento con id: ${id}`);
});

//modify --- modificare parzialmente un elemento
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`modifico in parte l'elemento con id: ${id}`);
});

//destroy --- eliminare un elemento
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`elimino l\' elemento con id n. ${id} `);
});

module.exports = router;
