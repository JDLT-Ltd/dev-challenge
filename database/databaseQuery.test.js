const {
  getCompanyList,
  getProductByCompany,
  displayOrders
} = require('./databaseQuery');

test('company name list for dropdown', function() {
  expect(getCompanyList()).toEqual(['Dog Ltd', 'Cat Ltd', 'Rabbit Ltd']);
});

test('get product info', function() {
  const order = {
    1: { id: 2 },
    2: { id: 4 },
    3: { id: 1 }
  };

  function displayOrderTest() {
    return Object.keys(order)
      .map(item => order[item])
      .sort(function(a, b) {
        return a.id - b.id;
      });
  }
  expect(displayOrderTest()).toEqual([{ id: 1 }, { id: 2 }, { id: 4 }]);
});

// test('display orders', function() {
//   expect(displayOrders()).toEqual('nope');
// });
