module.exports = function () {

  this.Given(/^a Cucumber costs \$(\d+)$/, function (price, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I buy (\d+) Cucumbers$/, function (quantity, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^the total should be \$(\d+)$/, function (expectedTotal, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

};
