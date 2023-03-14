const express = require('express');
const app = express();

// Define sample data for the API
const products = [
  { id: 1, name: 'Organic Apples', price: 1.99 },
  { id: 2, name: 'Organic Bananas', price: 0.99 },
  { id: 3, name: 'Organic Carrots', price: 2.49 },
  { id: 4, name: 'Organic Spinach', price: 3.99 },
];

// Define routes for the API
app.get('/', (req, res) => {
  res.send('Welcome to the Organic Food Store API');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});