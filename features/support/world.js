var assert = require('assert');

module.exports = function () {
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
      var result = price * quantity;
      callback(null, result);
    }

    ready();
    return self;
  };
};
