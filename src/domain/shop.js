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

module.exports = Shop;
