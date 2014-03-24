module.exports = function () {

  this.World = function ShopWorld(callback) {
    var self = {};
    callback(null, self);
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
