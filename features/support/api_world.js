var assert = require('assert');
var request = require('supertest');
var Shop = require('../../src/domain/shop');
var WebApp = require('../../src/web/app');

function ApiWorld(ready) {
  var shop = new Shop();
  var webApp = new WebApp(shop);

  var self = {
    setPrice: shop.setPrice,

    scan:
      function (scannedQuantity, callback) {
        request(webApp)
          .post('/basket/cucumber')
          .send({ quantity: scannedQuantity })
          .expect(201)
          .end(callback);
      },

    totalIs:
      function (expectedTotal, callback) {
        request(webApp)
          .get('/basket')
          .expect(200)
          .expect(function (res) {
            assert.equal(expectedTotal, res.body.total);
          })
          .end(callback);
      }
  };

  ready();
  return self;
}

module.exports = { World: ApiWorld };
