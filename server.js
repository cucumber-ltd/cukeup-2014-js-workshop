var App = require('./src/web/app');
var Shop = require('./src/domain/shop');
var shop = new Shop();
var app = new App(shop);
shop.setPrice(10, function () {
  app.listen(3000);
  console.log("Listening on port 3000");
});
