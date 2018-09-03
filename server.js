const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {
  getProductByCompany,
  getCompanyList
} = require('./database/databaseQuery');

app.use(bodyParser.json());
app.use('/dist', express.static(__dirname + '/dist'));

app.get('/getcompany', function(req, res) {
  res.json(getCompanyList());
});

app.get('/getproductinfo/:name', function(req, res) {
  const companyname = req.params.name;
  res.json(getProductByCompany(companyname));
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = 8080;
app.listen(port, function() {
  console.log(`Listening on port number 8080`);
});
