const { getCompanyList, getProductByCompany } = require('./databaseQuery');

test('company name list for dropdown', function() {
  expect(getCompanyList()).toEqual(['Dog Ltd', 'Cat Ltd', 'Rabbit Ltd']);
});

test.only('get product info', function() {
  const expected = [
    {
      company_name: 'Dog Ltd',
      description: 'tasty bone for all dogs',
      id: '1',
      price: 3,
      product_name: 'Dog bone'
    },
    {
      company_name: 'Dog Ltd',
      description: 'cruchy treats',
      id: '2',
      price: 5,
      product_name: 'Dog biscult'
    }
  ];

  expect(getProductByCompany('Dog Ltd')).toEqual(expected);
});
