require('dotenv').config();
const express   = require('express');

const app = express();



const port = process.env.PORT || 9001;

app.listen(port, function() {
  console.log(`express app listening on port ${port}`);
});