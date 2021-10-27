const express = require('express');
const cors = require('cors');

const PORT = 2200;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).send('<h4>Hello Nithi</h4>');
});

app.listen(PORT, () => console.log('API is running at :', PORT));
