var express = require('express');

module.exports = function (shop) {
  var app = express();

  app.use(express.json());
  app.use(express.logger('dev'));

  app.post('/basket/cucumber', function (req, res, next) {
    var quantity = req.body.quantity;
    shop.scan(quantity, function (err) {
      if (err) return next(err);
      res.send(201);
    })
  });

  app.get('/basket', function (req, res, next) {
    shop.calculateTotal(function (err, total) {
      if (err) return next(err);
      res.json({ total: total });
    })
  });

  return app;
};
