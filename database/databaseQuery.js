const mockData = require('./mockdata');
const orders = require('./orders');
function getCompanyList() {
  const list = Object.keys(mockData).map(function(id) {
    const companylist = mockData[id].company_name;
    return companylist;
  });

  return [...new Set(list)];
}

function getProductByCompany(companyName) {
  const result = Object.keys(mockData)
    .map(item => mockData[item])
    .filter(product => product.company_name === companyName);
  return result;
}

function displayOrders() {
  return Object.keys(orders)
    .map(item => orders[item])
    .sort(function(a, b) {
      return a.id - b.id;
    });
}

module.exports = {
  getCompanyList,
  getProductByCompany,
  displayOrders
};
