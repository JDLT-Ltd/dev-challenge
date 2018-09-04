const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {
  getProductByCompany,
  getCompanyList
} = require('./database/databaseQuery');

const orders = require('./database/orders');


app.use(bodyParser.json());
app.use('/dist', express.static(__dirname + '/dist'));




let id = 1;

let orderTime = new Date();



app.get('/getcompany', function (req, res) {
  res.json(getCompanyList());
});

app.get('/getproductinfo/:name', function (req, res) {
  const companyname = req.params.name;
  res.json(getProductByCompany(companyname));
});

app.post('/neworder', function (req, res) {
  const index = id;
  orders[index] = req.body;
  orders[index]['id'] = index;
  orders[index]['timestamp'] = orderTime.toISOString();
  id++;
  res.status(200).json({ "thank you": "Order Recieved" });
})

app.get('/orders', function (req, res) {
  res.json(orders);
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port number 8080`);
});
