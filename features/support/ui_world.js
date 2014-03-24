var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

function UiWorld(ready) {
  var shop = browser.params.shop;

  var self = {
    setPrice: shop.setPrice,

    scan: function (scannedQuantity, callback) {
      var quantityInput = element(by.css('#quantity'));
      var scanButton = element(by.css('#scan'));
      browser.get('/');
      quantityInput.clear();
      quantityInput.sendKeys(scannedQuantity);
      scanButton.click().then(callback);
    },

    totalIs: function (expectedTotal, callback) {
      var total = element(by.css('#total'));
      total.getText().then(function (rawTotal) {
        var actualTotal = parseInt(rawTotal);
        expect(actualTotal).to.equal(expectedTotal);
        callback();
      });
    }
  };

  ready();
  return self;
}

module.exports = { World: UiWorld };
