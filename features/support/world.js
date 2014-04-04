var assert = require('assert');
var Shop = require('../../src/domain/shop');

module.exports = function () {

  function ShopWorld(ready) {
    var shop = new Shop();

    var self = {

      setPrice: shop.setPrice,
      scan: shop.scan,

      totalIs: function (expectedTotal, callback) {
        shop.calculateTotal(function (err, actualTotal) {
          if (err) return callback(err);
          assert.equal(actualTotal, expectedTotal);
          callback();
        });
      }
    };

    ready();
    return self;
  };

  var WebApp = require('../../src/web/app');
  var request = require('supertest');

  function ApiWorld(ready) {
    var shop = new Shop();
    var webApp = new WebApp(shop);

    var self = {
      setPrice: shop.setPrice,

      scan: function (quantityScanned, callback) {
        request(webApp)
          .post('/basket/cucumber')
          .send({ quantity: quantityScanned })
          .expect(201)
          .end(callback);
      };
    };

    ready();
    return self;
  }

  this.World = ApiWorld;

}
