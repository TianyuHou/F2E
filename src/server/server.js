const firebase = require('../firebase/firebase').firebase;
const database = require('../firebase/firebase').database;
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/app',(req,res) => {
  database.ref().push({"name":"alex"});
  res.send("app");
})

app.get('*', (req, res) => {
  console.log(firebase);
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
