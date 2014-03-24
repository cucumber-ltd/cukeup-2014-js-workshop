var assert = require('assert');

function Shop() {
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

    calculateTotal:
      function (callback) {
        var result = price * quantity;
        callback(null, result);
      }
  };

  return self;
};

module.exports = function () {
  this.World = function ShopWorld(ready) {
    var shop = new Shop();

    var self = {
      setPrice: shop.setPrice,

      scan: shop.scan,

      totalIs:
        function (expectedTotal, callback) {
          shop.calculateTotal(function (err, actualTotal) {
            assert.equal(actualTotal, expectedTotal);
            callback();
          });
        }
    };

    ready();
    return self;
  };
};
