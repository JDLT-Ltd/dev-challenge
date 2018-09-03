const mockData = require('./mockdata');

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

module.exports = {
  getCompanyList,
  getProductByCompany
};
