var assert = require('assert');
var Shop = require('../../src/domain/shop');

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
