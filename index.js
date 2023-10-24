const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))