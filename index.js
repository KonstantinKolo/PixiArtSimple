const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use(express.static("./views/src"));

app.get('/', (req, res) => {
  res.render('./pages/index.ejs', {});
});

app.post('/clicked', (req, res) => {
  const clickedId = req.body.id;
  console.log(clickedId);
  res.end();
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});