module.exports = function () {

  var assert = require('assert');
  this.World = function ShopWorld(ready) {
    var price, quantity;

    var self = {
      setPrice:
        function (newPrice, callback) {
          price = newPrice;
          callback();
        },

      scan:
        function (quantityScanned, callback) {
          quantity = quantityScanned;
          callback();
        },

      totalIs:
        function (expectedTotal, callback) {
          calculateTotal(function (err, actualTotal) {
            assert.equal(actualTotal, expectedTotal);
            callback();
          });
        }
    };

    function calculateTotal(callback) {
      var result = 0;
      callback(null, result);
    }

    ready();
    return self;
  };

  this.Given(/^a Cucumber costs \$(\d+)$/, function (price, callback) {
    this.setPrice(parseInt(price), callback);
  });

  this.When(/^I buy (\d+) Cucumbers$/, function (quantity, callback) {
    this.scan(parseInt(quantity), callback);
  });

  this.Then(/^the total should be \$(\d+)$/, function (expectedTotal, callback) {
    this.totalIs(parseInt(expectedTotal), callback);
  });

};
